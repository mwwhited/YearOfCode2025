/**
 * User Roles Enumeration
 * Defines the hierarchy of user roles in the GreenOnion system
 * Higher values indicate higher permissions
 */
export enum UserRole {
  MANUFACTURER_USER = 'Manufacturer User',
  COOPERATIVE_USER = 'Cooperative User',
  DISTRICT_USER = 'District User',
  DISTRICT_ADMIN = 'District Admin',
  COOPERATIVE_ADMIN = 'Cooperative Admin',
  SUPER_ADMIN = 'Super Admin'
}

/**
 * Role hierarchy mapping for permission checks
 * Index represents the hierarchy level (higher index = higher permissions)
 */
export const ROLE_HIERARCHY: UserRole[] = [
  UserRole.MANUFACTURER_USER,
  UserRole.COOPERATIVE_USER,
  UserRole.DISTRICT_USER,
  UserRole.DISTRICT_ADMIN,
  UserRole.COOPERATIVE_ADMIN,
  UserRole.SUPER_ADMIN
];

/**
 * Role groups for common permission patterns
 */
export const ROLE_GROUPS = {
  // All users
  ALL_USERS: [
    UserRole.MANUFACTURER_USER,
    UserRole.COOPERATIVE_USER,
    UserRole.DISTRICT_USER,
    UserRole.DISTRICT_ADMIN,
    UserRole.COOPERATIVE_ADMIN,
    UserRole.SUPER_ADMIN
  ],
  
  // Administrative roles (can manage users, settings, etc.)
  ADMIN_ROLES: [
    UserRole.DISTRICT_ADMIN,
    UserRole.COOPERATIVE_ADMIN,
    UserRole.SUPER_ADMIN
  ],
  
  // District-level roles
  DISTRICT_ROLES: [
    UserRole.DISTRICT_USER,
    UserRole.DISTRICT_ADMIN
  ],
  
  // Cooperative-level roles
  COOPERATIVE_ROLES: [
    UserRole.COOPERATIVE_USER,
    UserRole.COOPERATIVE_ADMIN
  ],
  
  // Manufacturer-level roles
  MANUFACTURER_ROLES: [
    UserRole.MANUFACTURER_USER
  ],
  
  // Super admin only
  SUPER_ADMIN_ONLY: [
    UserRole.SUPER_ADMIN
  ]
} as const;

/**
 * Helper function to check if a role has sufficient permissions
 * @param userRole - The user's current role
 * @param requiredRole - The minimum required role
 * @returns true if user role has sufficient permissions
 */
export function hasRolePermission(userRole: UserRole, requiredRole: UserRole): boolean {
  const userRoleIndex = ROLE_HIERARCHY.indexOf(userRole);
  const requiredRoleIndex = ROLE_HIERARCHY.indexOf(requiredRole);
  
  if (userRoleIndex === -1 || requiredRoleIndex === -1) {
    return false;
  }
  
  return userRoleIndex >= requiredRoleIndex;
}

/**
 * Helper function to check if a user has any of the specified roles
 * @param userRole - The user's current role
 * @param allowedRoles - Array of roles that are allowed
 * @returns true if user role is in the allowed roles list or has higher permissions
 */
export function hasAnyRolePermission(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  return allowedRoles.some(role => hasRolePermission(userRole, role));
}

/**
 * Get user role display name
 * @param role - The user role enum value
 * @returns The display name of the role
 */
export function getRoleDisplayName(role: UserRole): string {
  return role;
}

/**
 * Get all roles that are at or below a certain level
 * @param maxRole - The maximum role level
 * @returns Array of roles at or below the specified level
 */
export function getRolesAtOrBelow(maxRole: UserRole): UserRole[] {
  const maxRoleIndex = ROLE_HIERARCHY.indexOf(maxRole);
  if (maxRoleIndex === -1) return [];
  
  return ROLE_HIERARCHY.slice(0, maxRoleIndex + 1);
}

/**
 * Get all roles that are at or above a certain level
 * @param minRole - The minimum role level
 * @returns Array of roles at or above the specified level
 */
export function getRolesAtOrAbove(minRole: UserRole): UserRole[] {
  const minRoleIndex = ROLE_HIERARCHY.indexOf(minRole);
  if (minRoleIndex === -1) return [];
  
  return ROLE_HIERARCHY.slice(minRoleIndex);
}