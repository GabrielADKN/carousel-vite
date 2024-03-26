import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel.jsx";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// smoke test
it("renders without crashing", function() {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
})

// snapshot test
it("matches snapshot", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  expect(container).toMatchSnapshot();
})

it('moves to previous image when left arrow is clicked', () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(screen.getByAltText('testing image 1')).not.toBeInTheDocument();

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  expect(screen.getByAltText('testing image 1')).toBeInTheDocument();
})

// test if circle are hidden when we reach the last image or the first image
it('hides left arrow when we reach the first image', () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  expect(leftArrow).not.toBeInTheDocument();
})

it('hides right arrow when we reach the last image', () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(rightArrow).not.toBeInTheDocument();
})