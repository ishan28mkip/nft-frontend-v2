import React from "react";
import { Layout as AntLayout } from "antd";

import { Header, Footer } from "../..";
import { Sidebar } from "../../../containers";

export const Layout: React.FC = ({ children }) => {
    return (
        <AntLayout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <AntLayout>
                <Header />
                <AntLayout style={{ padding: "24px" }}>{children}</AntLayout>
                <Footer />
            </AntLayout>
        </AntLayout>
    );
};
