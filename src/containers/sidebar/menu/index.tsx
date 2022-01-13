import React from "react";
import { Menu as AntMenu } from "antd";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons";

import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <AntMenu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
        >
            <AntMenu.Item key="1" icon={<UserOutlined />}>
                <Link href="/">Home</Link>
            </AntMenu.Item>

            <AntMenu.Item key="2" icon={<LaptopOutlined />}>
                <Link href="/search/users"> User Search</Link>
            </AntMenu.Item>

            <AntMenu.Item key="3" icon={<NotificationOutlined />}>
                <Link href="/search/accounts"> Account Search</Link>
            </AntMenu.Item>
        </AntMenu>
    );
};
