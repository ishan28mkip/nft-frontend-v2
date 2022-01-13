import React from "react";
import { Layout } from "antd";
const { Sider } = Layout;
import { Menu } from "./menu";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";

export const Sidebar: React.FC = () => {
    const open = useSelector((state: RootState) => state.sidebar.open);
    return (
        <Sider
            width={200}
            className="site-layout-background"
            collapsible
            collapsed={!open}
            trigger={null}
        >
            <Menu />
        </Sider>
    );
};
