import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.jsx";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", function() {
    render(
        <Card
            caption="testing image 1"
            src={TEST_IMAGES[0].url}
            currNum={1}
            totalNum={TEST_IMAGES.length}
        />
    );
})

// snapshot test
it("matches snapshot", function() {
    const { container } = render(
        <Card
            caption="testing image 1"
            src={TEST_IMAGES[0].url}
            currNum={1}
            totalNum={TEST_IMAGES.length}
        />
    );
    expect(container).toMatchSnapshot();
})