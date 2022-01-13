import { AccountAPI } from "./models/account";
import { UserAPI } from "./models/user";
import { UserAccountsAPI } from "./models/userAccounts";
import { useGetList, useGetOne } from "./requests";

export const useGetUser = (id: number | null) => {
    return useGetOne<UserAPI>(["Users", id], `/users/${id}`);
};

export const useGetAccount = (id: number | null) => {
    return useGetOne<AccountAPI>(["Users", id], `/accounts/${id}`);
};

export const useGetUserAccounts = (id: number) => {
    return useGetList<UserAccountsAPI>("UserAccounts", `/users/${id}/accounts`);
};
