import mount from "@test/mount";
import { Space } from "antd";

import { Footer } from "./index";

describe("Footer component testing with enzyme", () => {
    const component = mount(<Footer />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders cens world logo directed to the correct url", () => {
        expect(component.find("a").at(0).prop("href")).toContain(
            "https://twitter.com/CensWorldnft",
        );
    });

    it("should render 2 icons successfully", () => {
        expect(component.find(Space).find("a").length).toBe(2);
    });
});
