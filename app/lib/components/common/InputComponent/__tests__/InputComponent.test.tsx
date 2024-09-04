import { render, screen } from "@testing-library/react";
import InputComponent from "../InputComponent";
import { useForm, FieldValues } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const label = "Top-Up Balance";
const balanceInitialValue = "300.56";
const name = "amount";
const newBalance = "556.79";

interface FormValues {
  amount: string;
}

function Wrapper() {
  const { register } = useForm<FormValues>({
    defaultValues: {
      amount: balanceInitialValue
    }
  });

  return (
    <InputComponent
      id="update-balance"
      label={label}
      name={name}
      registerField={register}
    />
  );
}

test("if input component updates input", async () => {
  render(<Wrapper />);

  const inputField = screen.getByLabelText(label);

  const user = userEvent.setup();

  await user.clear(inputField);

  await user.type(inputField, newBalance);

  expect(inputField).toHaveValue(newBalance);
});
