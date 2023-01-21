import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  //Initial
  it("counter displays 0 as an initial value", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  //Increment
  it("count should increment by 1 on increment button click", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
  //Decrement
  it("count should decrement by 1 on decrement button click", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });
  //Restart
  it("count should be 0 on restart button click", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const restartBtn = getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  //Switch signs
  it("count should be -1 on switch signs button click", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    const switchBtn = getByRole("button", { name: "Switch Signs" });
    const countValue = Number(getByTestId("count").textContent) + 1;
    fireEvent.click(switchBtn);
    console.log(countValue);
    expect(countValue).toEqual(-1);
  });
});
