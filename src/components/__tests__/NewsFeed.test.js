import React from "react";
import { render, screen } from "@testing-library/react";
import useFetch from "../../utils/useFetch";
import NewsFeed from "../NewsFeed";

jest.mock("../../utils/useFetch");

describe("NewsFeed", () => {
  test("renders loading message when loading", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    render(<NewsFeed />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays error message when data fetch fails", async () => {
    useFetch.mockReturnValue({
      loading: false,
      error: "Failed to fetch data",
    });
    const { getByText } = render(<NewsFeed />);
    expect(getByText(/Something went wrong/)).toBeInTheDocument();
  });
});
