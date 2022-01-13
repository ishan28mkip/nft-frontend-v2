import React from "react";
import { Input, Form, Card, Spin, Button } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

interface SearchProps {
    data?: any;
    type: "User" | "Account";
    isLoading: boolean;
    onFinish: (values: any) => void;
    onFinishFailed: (values?: any) => void;
}

export const Search: React.FC<SearchProps> = ({
    data,
    type,
    isLoading,
    onFinish,
    onFinishFailed,
}) => {
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 15 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="inline"
            >
                <Form.Item
                    label={`Search ${type}`}
                    name={`${type}search`}
                    rules={[
                        {
                            required: true,
                            message: `Please input your ${type}'s ID`,
                        },
                    ]}
                >
                    <Input placeholder={`Enter ${type}ID`} type="number" />
                </Form.Item>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<SearchOutlined />}
                    loading={isLoading}
                    htmlType="submit"
                />
            </Form>
            <p></p>
            {isLoading && <Spin size="large" />}
            {data && (
                <>
                    <Card>
                        <p>ID: {data.attributes.id}</p>
                        <p>Name: {data.attributes.name}</p>
                        {type === "Account" && (
                            <>
                                <p>Balance: {data.attributes.balance}</p>
                                <p>UserID: {data.attributes.user_id}</p>
                            </>
                        )}
                    </Card>
                    <p></p>
                    <Link
                        href={`/users/${
                            type === "User"
                                ? data.attributes.id
                                : data.attributes.user_id
                        }?refer=${type}`}
                        passHref
                    >
                        <Button
                            type="primary"
                            icon={<UserOutlined />}
                            size={"large"}
                        >
                            Click to go to User Account Page
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};
