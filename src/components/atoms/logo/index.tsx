import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";

export const Logo: React.FC = () => {
    return <Image src={logo} alt="logo" height={60} />;
};
