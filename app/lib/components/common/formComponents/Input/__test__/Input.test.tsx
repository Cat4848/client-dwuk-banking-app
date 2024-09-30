import { render, screen } from "@testing-library/react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import RandomTextGenerator from "@/app/lib/tests/RandomTextGenerator/RandomTextGenerator";

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

const chance = new Chance();
const some = new RandomTextGenerator(chance);

const someWords = some.randomWords(10);

test.each(someWords)("if input changes value correctly", async (word) => {
  render(<Wrapper />);

  const inputElement = screen.getByTestId(
    `testid-${accountID}`
  ) as HTMLInputElement;

  const user = userEvent.setup();

  await user.type(inputElement, word);

  expect(inputElement).toHaveValue(word);
});
