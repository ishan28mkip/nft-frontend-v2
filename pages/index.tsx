import React from "react";

import { Main, Cards } from "@components";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Main />
            <Cards />
        </div>
    );
};

export default Home;
