import { render, screen } from "@testing-library/react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
import Chance from "chance";

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

const some = new Chance();

const someStrings = Array.from({ length: 10 }, () => {
  return some.string({ pool: "abcdefgh" });
});

test.each(someStrings)("if input changes value correctly", async (string) => {
  render(<Wrapper />);
  
  const inputElement = screen.getByTestId(
    `testid-${accountID}`
  ) as HTMLInputElement;

  const user = userEvent.setup();

  await user.type(inputElement, string);

  expect(inputElement).toHaveValue(string);
});
