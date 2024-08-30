import { render, screen } from "@testing-library/react";
import InputComponent from "../Input";
import userEvent from "@testing-library/user-event";

test("if it handles user input correctly", async () => {
  const label = "Name";
  const placeholder = "Jane Smith";
  const value = "";
  const handleChange = jest.fn();

  render(
    <InputComponent
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );

  const inputElement = screen.getByLabelText(label) as HTMLInputElement;
  const user = userEvent.setup();
  const typedValue = "John March";
  screen.debug();

  await user.clear(inputElement);
  await user.type(inputElement, typedValue);
  console.log("calls", handleChange.mock.calls);
  expect(handleChange.mock.calls[0][0]).toBe(typedValue[0]);
});
