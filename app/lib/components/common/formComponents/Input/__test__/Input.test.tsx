import { render, screen } from "@testing-library/react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const accountID = "6810";
function Wrapper() {
  const { register } = useForm();
  return (
    <Input
      data-testid={accountID}
      id={accountID}
      name="accountID"
      registerField={register}
    />
  );
}

test("if input changes value correctly", async () => {
  render(<Wrapper />);
  const inputElement = screen.getByTestId(
    `testid-${accountID}`
  ) as HTMLInputElement;

  const user = userEvent.setup();

  await user.type(inputElement, "hello");

  expect(inputElement).toHaveValue("hello");
});
