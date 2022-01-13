import React, { useMemo } from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Layout } from "../src/components/organisms/layout";
// import { appWithTranslation } from "@i18n";
import axios, { AxiosContext } from "../src/api/requests";

const AxiosProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const axiosValue = useMemo(() => {
        return axios;
    }, []);

    return (
        <AxiosContext.Provider value={axiosValue}>
            {children}
        </AxiosContext.Provider>
    );
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <AxiosProvider>
            <StyledThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Provider store={store}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </Provider>
                    </Hydrate>
                </QueryClientProvider>
            </StyledThemeProvider>
        </AxiosProvider>
    );
}

export default MyApp;
