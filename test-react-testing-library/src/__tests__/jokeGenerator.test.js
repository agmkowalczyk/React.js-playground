import React from "react";
import { render, Simulate, wait } from "react-testing-library";

test("Joke komponent otrzymuje propsy, a następnie renderuje text", () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke this year." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke this year."
  );
});