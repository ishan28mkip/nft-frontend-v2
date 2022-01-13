import type { NextPage } from "next";
import { useState } from "react";
import { useGetUser } from "../../src/api/";
import { Search } from "../../src/components";

const UserSearch: NextPage = () => {
    const [userID, setUserID] = useState<string>("");
    const { data: user, isLoading } = useGetUser(userID ? +userID : null);
    const onFinish = (values: any) => {
        setUserID(values["Usersearch"]);
    };
    const onFinishFailed = () => {
        setUserID("");
    };

    return (
        <Search
            data={user}
            type={"User"}
            isLoading={isLoading}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        />
    );
};

export default UserSearch;
