import {AppFooter} from './AppFooter'
import {AppHeader} from './AppHeader'
import {AppSidebar} from './AppSidebar'

const PrimaryLayout = ({ header, sidebar, content, footer }) => {
  return (
    <div className="layout">
      <div>{header || AppHeader}</div>
      <div className="body">
        <aside>{sidebar || AppSidebar}</aside>
        <main>{content}</main>
      </div>
      <div>{footer || AppFooter}</div>
    </div>
  );
};

export default PrimaryLayout;