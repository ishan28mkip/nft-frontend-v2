import { createContext } from "react";
import Axios, { AxiosInstance, AxiosTransformer } from "axios";
import { notification } from "antd";
import { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import qs from "qs";

/**
 * useQueryConfig
 */
const useQueryConfig = {
    staleTime: 5 * 60 * 1000,
    retry: false,
};

console.log("baseurl:", "https://sample-accounts-api.herokuapp.com");
const axios = Axios.create({
    baseURL: "https://sample-accounts-api.herokuapp.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

axios.interceptors.request.use((config) => {
    /**
     * Later on token for auth purposes can be used
     */
    // Read token for anywhere, in this case directly from localStorage
    // const token = localStorage.getItem("token");
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

// response interceptor
axios.interceptors.response.use(
    (response) => {
        const data = response.data;
        // console.log("response:", response);
        if (response.status === 200) {
            return data;
        }

        notification.error({
            message: `Request error occurred ${response.statusText}: ${response}`,
            description: data || response.statusText || "Error",
        });

        /**
         * For later authentication use case
         */
        if (response.status === 401) {
            console.log("User not authenticated");
            // history.push("/auth/login");
        }

        return Promise.reject(new Error(response.statusText || "Error"));
    },
    (error) => {
        console.log("err:", error, error.response); // for debug
        if (error.response && error.response.status) {
            switch (error.response.status) {
                /**
                 * Added for later use case of auth
                 */
                case 401:
                    // history.push("/auth/login");
                    console.log("User not authenticated");
                    break;
                /**
                 * Added for later use case of auth
                 */
                case 403:
                    // history.push("/auth/login");
                    console.log("User not authenticated");
                    break;
                case 404:
                    notification.error({
                        message: `Oops resource not found`,
                        description: error.response.data?.msg || "Error",
                    });
                    break;
                case 406:
                    notification.error({
                        message: `Incorrect request parameters`,
                        description: error.response.data?.msg || "Error",
                    });
                    break;
                default:
                    notification.error({
                        message: `Unexpected error occurred, please try again in some time`,
                        description: error.response.data?.msg || "Error",
                    });
            }
        }
        return Promise.reject(error);
    },
);

export const AxiosContext = createContext<AxiosInstance>(
    new Proxy(axios, {
        apply: () => {
            throw new Error("You must wrap your component in an AxiosProvider");
        },
        get: () => {
            throw new Error("You must wrap your component in an AxiosProvider");
        },
    }),
);

export const useAxios = () => {
    return useContext(AxiosContext);
};

const transformPagination = (pagination: any) => {
    if (!pagination) return;

    const current = pagination.current
        ? pagination.current
        : pagination.defaultCurrent;
    const pageSize = pagination.pageSize
        ? pagination.pageSize
        : pagination.defaultPageSize;

    let offset = 0;
    if (current && pageSize) {
        offset = (current - 1) * pageSize;
    }

    return {
        offset,
        limit: pageSize,
    };
};

const transformFilters = (filters: any) => {
    if (!filters) return;
    let result: any[] = [];
    for (const key in filters) {
        if (!filters[key] || filters[key] === null) continue;
        result = [...result, [key + ":eq:" + filters[key]]];
    }
    return result;
};

const transformSorter = (sorter: any) => {
    if (!sorter) return;

    let result = "";
    if (sorter.field && sorter.order) {
        let order = "desc";
        if (sorter.order === "ascend") order = "asc";
        result = sorter.field + " " + order;
    }

    return result;
};

type listParams = {
    limit?: number;
    offset?: number;
    filter?: string[];
    order?: string;
};
const useGetList = <T>(
    key: string,
    url: string,
    pagination?: any,
    filters?: any,
    sorter?: any,
) => {
    /**
     * If key is an array then the second element is the id
     * if id is null then disable the call
     */
    let enabled = true;
    if (Array.isArray(key) && key[1] === null) {
        enabled = false;
    }
    const axios = useAxios();

    const service = async () => {
        let params: listParams = {};

        params = { ...transformPagination(pagination) };
        params.filter = transformFilters(filters);
        params.order = transformSorter(sorter);

        const transformRequest: AxiosTransformer = (data, headers) => {
            return;
        };
        const data: T = await axios.get(`${url}`, {
            params,
            paramsSerializer: (params) => {
                return qs.stringify(params, { arrayFormat: "repeat" });
            },
            transformRequest,
        });

        return data;
    };
    return useQuery(key, () => service(), { ...useQueryConfig, enabled });
};

const useGetOne = <T>(
    key: string | Array<string | number | null>,
    url: string,
    params?: any,
) => {
    /**
     * If key is an array then the second element is the id
     * if id is null then disable the call
     */
    let enabled = true;
    if (Array.isArray(key) && key[1] === null) {
        enabled = false;
    }
    const axios = useAxios();

    const service = async () => {
        const data: T = await axios.get(`${url}`, params);

        return data;
    };
    return useQuery(key, () => service(), { ...useQueryConfig, enabled });
};

const useCreate = <T, U>(url: string) => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    return useMutation(async (params: T) => {
        const data: U = await axios.post(`${url}`, params);
        return data;
    });
};

const useUpdate = <T>(url: string) => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    return useMutation(async (item: T) => {
        const data: T = await axios.patch(`${url}`, item);
        return data;
    });
};

const useDelete = <T>(url: string) => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    return useMutation(async (id: number) => {
        const data: T = await axios.delete(`${url}?id=${id}`);
        return data;
    });
};

const useBatch = (url: string) => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    return useMutation(async (ids: number[]) => {
        const data = await axios.post(`${url}`, { idList: ids });
        return data;
    });
};

export { useGetOne, useGetList, useUpdate, useCreate, useDelete, useBatch };

export default axios;
