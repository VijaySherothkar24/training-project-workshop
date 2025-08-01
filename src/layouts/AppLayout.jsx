import { Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const { Header, Content } = Layout;

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { label: "useMemo", key: "/use-memo" },
      { label: "useCallback", key: "/use-callback" },
      { label: "Code Splitting", key: "/code-splitting" },
      { label: "map()", key: "/map-optimization" },
      { label: "Anno Func.", key: "/anon-functions" },
      { label: "Strict Mode", key: "/strict-mode-effect-page" },
      { label: "Debounce/Throttle", key: "/debounce-throttle" },
      { label: "Context", key: "/context" },
      { label: "useTransition", key: "/use-transition" },
      { label: "Component Tree", key: "/component-tree" },
      { label: "Effect Scope", key: "/effects-scope" },
      { label: "Img Optimize", key: "/image-optimization" },
      { label: "Debugging", key: "/debugging" },
    ],
    []
  );

  return (
    <Layout className="min-h-screen bg-white">
      <Header className="bg-white shadow-sm items-center">
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          onClick={({ key }) => navigate(key)}
          items={menuItems}
          className="border-none bg-transparent"
        />
      </Header>
      <Content className="p-8 bg-gray-50 min-h-[calc(100vh-64px)]">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
