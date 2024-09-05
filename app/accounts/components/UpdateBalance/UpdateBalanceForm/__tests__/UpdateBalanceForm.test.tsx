import { render, screen } from "@testing-library/react";
import UpdateBalanceForm from "../UpdateBalanceForm";
import userEvent from "@testing-library/user-event";
import Chance from "chance";

const handleSubmit = jest.fn();
const some = new Chance();

interface AccountAndBalance {
  accountID: string;
  currentBalance: string;
  newBalance: string;
}

const accountsAndBalances = Array.from({ length: 10 }, () => {
  const accountAndBalance: AccountAndBalance = {
    accountID: some.integer({ min: 1, max: 3200 }).toString(),
    currentBalance: some.floating({ min: 1, max: 20000, fixed: 2 }).toString(),
    newBalance: some.floating({ min: 1, max: 20000, fixed: 2 }).toString()
  };
  return accountAndBalance;
});

test.each(accountsAndBalances)(
  "if update balance form values submitted correctly",
  async (accountAndBalance) => {
    render(
      <UpdateBalanceForm
        accountID={accountAndBalance.accountID}
        currentBalance={accountAndBalance.currentBalance}
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

    await user.type(balanceInput, accountAndBalance.newBalance);

    await user.click(saveButton);

    expect(handleSubmit.mock.calls[0][0]).toStrictEqual({
      accountID: accountAndBalance.accountID,
      amount: accountAndBalance.newBalance
    });
  }
);
