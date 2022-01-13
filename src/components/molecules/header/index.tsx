import React from "react";
import { Layout } from "antd";
const AntHeader = Layout.Header;
import styled from "styled-components";
import { useSelector } from "react-redux";
import { toggle } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

export const NewButton: React.FunctionComponent<ButtonProps> = styled(Button)`
    margin-right: 20px;
`;

import { Logo } from "@components";

export const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const open = useSelector((state: RootState) => state.sidebar.open);
    return (
        <AntHeader
            style={{
                paddingLeft: "30px",
                display: "flex",
                alignItems: "center",
            }}
        >
            {open ? (
                <NewButton
                    type="primary"
                    icon={<MenuFoldOutlined />}
                    size={"large"}
                    onClick={() => dispatch(toggle())}
                ></NewButton>
            ) : (
                <NewButton
                    type="primary"
                    icon={<MenuUnfoldOutlined />}
                    size={"large"}
                    onClick={() => dispatch(toggle())}
                ></NewButton>
            )}

            <Logo />
        </AntHeader>
    );
};
