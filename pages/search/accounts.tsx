import type { NextPage } from "next";
import { useState } from "react";
import { useGetAccount } from "../../src/api/";
import { Search } from "../../src/components";

/**
 * Both search pages can be easily combined but the question asks
 * for separate pages hence separate pages have been maintained
 * and most of the code has been resused.
 */

const AccountSearch: NextPage = () => {
    const [accountID, setAccountID] = useState<string>("");
    const { data: account, isLoading } = useGetAccount(
        accountID ? +accountID : null,
    );
    const onFinish = (values: any) => {
        setAccountID(values["Accountsearch"]);
    };
    const onFinishFailed = () => {
        setAccountID("");
    };

    return (
        <Search
            data={account}
            type={"Account"}
            isLoading={isLoading}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        />
    );
};

export default AccountSearch;
