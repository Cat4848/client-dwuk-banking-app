import { render, screen } from "@testing-library/react";
import InputComponent from "../Input";
import userEvent from "@testing-library/user-event";

test("if it handles user input correctly", async () => {
  const label = "Name";
  const placeholder = "Jane Smith";
  render(<InputComponent label={label} placeholder={placeholder} />);

  const inputElement = screen.getByLabelText(label) as HTMLInputElement;
  const user = userEvent.setup();
  const typedValue = "John March";

  await user.type(inputElement, typedValue);
  expect(inputElement).toHaveValue(typedValue);
});
