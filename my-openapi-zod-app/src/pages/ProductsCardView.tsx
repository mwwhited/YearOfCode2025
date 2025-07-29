import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import ZQueryProductModel from '@/api/GreenOnion/Schema/ZQueryProductModel';
import { Card, Button, InputText } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type Product = z.infer<typeof ZQueryProductModel>;

interface ProductCardProps {
  product: Product;
  onEdit?: (product: Product) => void;
  canEdit: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, canEdit }) => {
  const navigate = useNavigate();

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) {
      onEdit(product);
    }
  };

  return (
    <Card className="product-card h-full cursor-pointer hover:shadow-3 transition-all transition-duration-200">
      <div className="flex flex-column h-full">
        {/* Product Image Placeholder */}
        <div className="product-image-container mb-3 flex align-items-center justify-content-center border-1 border-dashed surface-border border-round"
             style={{ height: '200px', backgroundColor: '#f8f9fa' }}>
          {product.images && product.images.length > 0 ? (
            <img 
              src={product.images[0]} 
              alt={product.name || ''} 
              className="max-w-full max-h-full border-round"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) nextElement.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="flex align-items-center justify-content-center text-500" style={{ display: product.images?.length ? 'none' : 'flex' }}>
            <i className="pi pi-image text-4xl"></i>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-column">
          <div className="flex justify-content-between align-items-start mb-2">
            <h3 className="text-lg font-semibold text-900 m-0 line-height-3" style={{ wordBreak: 'break-word' }}>
              {product.name || 'Unnamed Product'}
            </h3>
            <span className={`p-badge p-badge-sm ${product.isActive ? 'badge-active' : 'badge-inactive'}`}>
              {product.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>

          {product.description && (
            <p className="text-sm text-600 mb-3 line-height-3" style={{ 
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {product.description}
            </p>
          )}

          <div className="flex-1">
            <div className="grid text-sm">
              {product.manufacturerName && (
                <div className="col-12 mb-2">
                  <span className="font-semibold text-700">Manufacturer:</span>
                  <span className="ml-2 text-600">{product.manufacturerName}</span>
                </div>
              )}
              {product.category && (
                <div className="col-6 mb-2">
                  <span className="font-semibold text-700">Category:</span>
                  <div className="text-600">{product.category}</div>
                </div>
              )}
              {product.subCategory && (
                <div className="col-6 mb-2">
                  <span className="font-semibold text-700">Sub Category:</span>
                  <div className="text-600">{product.subCategory}</div>
                </div>
              )}
              {product.gtin && (
                <div className="col-6 mb-2">
                  <span className="font-semibold text-700">GTIN:</span>
                  <div className="text-600 font-mono">{product.gtin}</div>
                </div>
              )}
              {product.upc && (
                <div className="col-6 mb-2">
                  <span className="font-semibold text-700">UPC:</span>
                  <div className="text-600 font-mono">{product.upc}</div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          {canEdit && (
            <div className="flex gap-2 mt-3 pt-3 border-top-1 surface-border">
              <Button
                label="Edit Dynamic"
                icon="pi pi-pencil"
                className="p-button-sm p-button-success flex-1"
                onClick={handleEditClick}
              />
              <Button
                label="Edit Panel"
                icon="pi pi-cog"
                className="p-button-sm p-button-info flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/edit-panel/${product.productId}`);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export const ProductsCardView: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();
  const observer = useRef<IntersectionObserver | null>(null);

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);
  const ITEMS_PER_PAGE = 12;

  const loadMoreProducts = async () => {
    if (!hasMore || loadingMore) return;
    
    setLoadingMore(true);
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    setPage(nextPage);
    setHasMore(endIndex < products.length);
    setLoadingMore(false);
  };

  const lastProductElementRef = useCallback((node: HTMLDivElement) => {
    if (loading || loadingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, loadingMore, hasMore, loadMoreProducts]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const client = new ProductClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        const allProducts = response.rows || [];
        setProducts(allProducts);
        setPage(1);
        setHasMore(allProducts.length > ITEMS_PER_PAGE);
      } else {
        setError('Failed to load products');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = products.filter(product =>
        product.name?.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term) ||
        product.manufacturerName?.toLowerCase().includes(term) ||
        product.category?.toLowerCase().includes(term) ||
        product.subCategory?.toLowerCase().includes(term) ||
        product.gtin?.toLowerCase().includes(term) ||
        product.upc?.toLowerCase().includes(term)
      );
    }
    
    // Apply pagination to filtered results
    const endIndex = page * ITEMS_PER_PAGE;
    const paginatedProducts = filtered.slice(0, endIndex);
    
    setFilteredProducts(paginatedProducts);
    setHasMore(endIndex < filtered.length);
  };

  const handleEdit = (product: Product) => {
    navigate(`/products/edit-dynamic/${product.productId}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset pagination when searching
  };

  if (loading) {
    return (
      <div className="products-card-view">
        <div className="flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <i className="pi pi-spinner pi-spin text-4xl text-primary"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="products-card-view">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">Products Card View</h1>
        <div className="flex gap-2">
          <Button
            label="List View"
            icon="pi pi-list"
            className="p-button-outlined"
            onClick={() => navigate('/products')}
          />
          {canEdit && (
            <Button
              label="Add Product"
              icon="pi pi-plus"
              onClick={() => navigate('/products/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-4">
        <div className="flex gap-3 align-items-center">
          <div className="flex-1">
            <InputText
              placeholder="Search products by name, description, manufacturer, category, GTIN, UPC..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>
          <Button
            icon="pi pi-refresh"
            className="p-button-outlined"
            onClick={loadProducts}
            tooltip="Refresh products"
          />
        </div>
      </div>

      {error && (
        <div className="p-message p-message-error mb-4">
          <div className="p-message-wrapper">
            <div className="p-message-icon">
              <i className="pi pi-times-circle" />
            </div>
            <div className="p-message-text">{error}</div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <i className="pi pi-inbox text-6xl text-400 mb-3"></i>
          <p className="text-xl text-500 mb-0">
            {searchTerm ? 'No products found matching your search' : 'No products available'}
          </p>
        </div>
      ) : (
        <>
          <div className="grid">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.productId} 
                className="col-12 lg:col-4 xl:col-3 mb-4"
                ref={index === filteredProducts.length - 1 ? lastProductElementRef : null}
              >
                <ProductCard
                  product={product}
                  onEdit={handleEdit}
                  canEdit={canEdit}
                />
              </div>
            ))}
          </div>

          {/* Loading More Indicator */}
          {loadingMore && (
            <div className="text-center py-4">
              <i className="pi pi-spinner pi-spin text-2xl text-primary"></i>
              <p className="text-sm text-500 mt-2 mb-0">Loading more products...</p>
            </div>
          )}

          {/* No More Results */}
          {!hasMore && filteredProducts.length > 0 && (
            <div className="text-center py-4">
              <p className="text-sm text-500 mb-0">
                You've reached the end of the product list
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};