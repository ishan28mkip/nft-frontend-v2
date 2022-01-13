import type { NextPage, GetServerSidePropsContext } from "next";
import { Table, Button, Typography, Spin } from "antd";
import Link from "next/link";
import { useGetUserAccounts } from "../../src/api";

const { Title } = Typography;

interface AccountProps {
    id: string;
    refer: string;
}

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Balance",
        dataIndex: "balance",
        key: "balance",
    },
];

const Account: NextPage<AccountProps> = ({ id, refer }) => {
    /**
     * Data can easily be pushed to server side call as well, for
     * sake of lower complexity it has been done in the client
     */
    const { data: data, isLoading } = useGetUserAccounts(+id);
    let tableData;
    if (data) {
        tableData = data.map((item) => {
            return {
                ...item.attributes,
                key: item.attributes.id,
            };
        });
    }

    return (
        <>
            {data && (
                <div>
                    {refer && (
                        <Link href={`/search/${refer.toLowerCase()}s`} passHref>
                            <Button type="primary" size={"large"}>
                                Go Back
                            </Button>
                        </Link>
                    )}
                    <p></p>
                    <Title level={3}>User Accounts</Title>
                    <Table dataSource={tableData} columns={columns} />
                </div>
            )}
            {isLoading && <Spin size="large" />}
        </>
    );
};

export function getServerSideProps(context: GetServerSidePropsContext) {
    if (context && context.params && context.params.id) {
        return {
            props: {
                id: context.params.id,
                refer: context.query.refer,
            },
        };
    }

    return {
        props: {
            id: null,
            refer: "home",
        },
    };
}

export default Account;
