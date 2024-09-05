import { render } from "@testing-library/react";
import AccountCard from "../../AccountCard";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

interface AccountCardComponentRendererConstructor {
  accountWithCustomer: AccountWithCustomer;
  addSelectedAccountsId: jest.Mock;
  deleteSelectedAccountId: jest.Mock;
  handleUpdateAccountStatus: jest.Mock;
  handleUpdateAccountBalance: jest.Mock;
}

export default class AccountCardComponentRenderer
  implements AccountCardComponentRenderer
{
  private accountWithCustomer: AccountWithCustomer;
  private addSelectedAccountsId: jest.Mock;
  private deleteSelectedAccountId: jest.Mock;
  private handleUpdateAccountStatus: jest.Mock;
  private handleUpdateAccountBalance: jest.Mock;

  constructor({
    accountWithCustomer,
    addSelectedAccountsId,
    deleteSelectedAccountId,
    handleUpdateAccountStatus,
    handleUpdateAccountBalance
  }: AccountCardComponentRendererConstructor) {
    this.accountWithCustomer = accountWithCustomer;
    this.addSelectedAccountsId = addSelectedAccountsId;
    this.deleteSelectedAccountId = deleteSelectedAccountId;
    this.handleUpdateAccountStatus = handleUpdateAccountStatus;
    this.handleUpdateAccountBalance = handleUpdateAccountBalance;
  }

  render() {
    render(
      <AccountCard
        account_id={this.accountWithCustomer.account_id}
        first_name={this.accountWithCustomer.first_name}
        last_name={this.accountWithCustomer.last_name}
        balance={this.accountWithCustomer.balance}
        open_date={this.accountWithCustomer.open_date}
        last_activity_date={this.accountWithCustomer.last_activity_date}
        status={this.accountWithCustomer.status}
        onAddSelectedAccountId={this.addSelectedAccountsId}
        onDeleteSelectedAccountId={this.deleteSelectedAccountId}
        onUpdateAccountStatus={this.handleUpdateAccountStatus}
        onUpdateAccountBalance={this.handleUpdateAccountBalance}
      />
    );
  }
}
