import { render, screen, cleanup } from "@testing-library/react";
import Header from "../components/Header.js";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("conatins title", () => {
  render(<Header />);
  const title = screen.getByText(/Weather App/i);
  expect(title).toBeInTheDocument();
});

test("contains sub-title", () => {
  render(<Header />);
  const subTitle = screen.getByText(/Search for a city or locate yourself!/i);
  expect(subTitle).toBeInTheDocument();
});

it("matches snapshot", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
