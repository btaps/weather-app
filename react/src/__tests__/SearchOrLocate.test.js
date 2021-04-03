import React from "react";
import {
  render,
  fireEvent,
  queryByPlaceholderText,
} from "@testing-library/react";
import SearchOrLocate from "../components/SearchOrLocate.js";

it("Renders correctyl", () => {
  const { queryByText, queryByPlaceholderText } = render(<SearchOrLocate />);

  expect(queryByText(/locate/i)).toBeTruthy();
  expect(queryByText(/submit/i)).toBeTruthy();
  expect(queryByPlaceholderText("City name")).toBeTruthy();
});

describe("Input value", () => {
  it("Updates on change", () => {
    const { queryByPlaceholderText } = render(<SearchOrLocate />);

    const searchInput = queryByPlaceholderText("City name");

    fireEvent.change(searchInput, { target: { value: "San Francisco" } });

    expect(searchInput.value).toBe("San Francisco");
  });
});

describe("Submit button", () => {
  describe("With no city name", () => {
    it("Does not trigger createNewForecast function", () => {
      const createNewForecast = jest.fn();
      const { queryByText } = render(<SearchOrLocate />);

      fireEvent.click(queryByText(/submit/i));
      setTimeout(() => {
        expect(createNewForecast).not.toHaveBeenCalled();
      });
    });
  });

  describe("With city name", () => {
    it("Triggers createNewForecast function", () => {
      const createNewForecast = jest.fn();

      const { queryByText, queryByPlaceholderText } = render(
        <SearchOrLocate />
      );
      const searchInput = queryByPlaceholderText("City name");
      fireEvent.change(searchInput, { target: { value: "San Francisco" } });

      fireEvent.click(queryByText(/submit/i));

      setTimeout(() => {
        expect(createNewForecast).toHaveBeenCalled();
      });
    });
  });
});
