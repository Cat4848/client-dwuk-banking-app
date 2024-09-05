import { render, screen } from "@testing-library/react";
import UpdateBalanceForm from "../UpdateBalanceForm";
import userEvent from "@testing-library/user-event";

const handleSubmit = jest.fn();

test("if update balance form values submitted correctly", async () => {
  const accountID = "6810";
  const currentBalance = "220.56";
  render(
    <UpdateBalanceForm
      accountID={accountID}
      currentBalance={currentBalance}
      onUpdateBalance={handleSubmit}
    />
  );

  const balanceInput = screen.getByLabelText(
    "Top-Up Balance"
  ) as HTMLInputElement;
  const saveButton = screen.getByRole("button", {
    name: "Save"
  }) as HTMLButtonElement;

  const user = userEvent.setup();

  await user.clear(balanceInput);

  const newBalance = "500.77";
  await user.type(balanceInput, newBalance);

  await user.click(saveButton);

  expect(handleSubmit.mock.calls[0][0]).toStrictEqual({ amount: newBalance });
});
