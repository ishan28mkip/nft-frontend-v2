import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#001529",
                color: "#fff",
                textAlign: "center",
                padding: "12px",
            }}
        >
            <h1
                data-test="main-heading"
                style={{ color: "#fff", fontSize: 20 }}
            >
                Cens World: Next Generation NFT Game
            </h1>
            <p style={{ fontSize: 18 }}></p>
            <Button type="primary" size="large">
                <a href="https://century.luxe/" target="_blank">
                    Visit Website
                </a>
            </Button>
        </div>
    );
};
