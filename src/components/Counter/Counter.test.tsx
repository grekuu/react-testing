import { render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays 0 as an initial value", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
});
