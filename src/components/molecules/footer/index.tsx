import React, { CSSProperties } from "react";
import { Space } from "antd";
import { TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
    };
    return (
        <div
            style={{
                backgroundColor: "#001529",
                color: "#fff",
                textAlign: "center",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Space direction="vertical" size="large">
                <Space align="center" size="middle">
                    <a
                        href="https://twitter.com/CensWorldnft"
                        target="_blank"
                        style={iconStyle}
                    >
                        <TwitterOutlined data-test="icon" />
                    </a>
                    <a
                        href="https://sg.linkedin.com/company/centuryluxe"
                        target="_blank"
                        style={iconStyle}
                    >
                        <LinkedinOutlined data-test="icon" />
                    </a>
                </Space>
            </Space>
        </div>
    );
};
