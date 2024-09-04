import {
  AccountStatus,
  AccountWithCustomer
} from "@/app/lib/definitions/account/types/AccountWithCustomer";
import accountStyles from "../../styles/accountCard.module.css";
import DateTimeFormatter from "@/app/lib/utils/DateTimeFormatter/DateTimeFormatter";
import CssClassGenerator from "@/app/lib/utils/CssClassGenerator/CssClassGenerator";
import { useState } from "react";
import UpdateAccountsStatus from "../UpdateAccountsStatus/UpdateAccountsStatus";
import Button from "@/app/lib/components/common/Button";
import UpdateBalanceForm from "../UpdateBalance/UpdateBalanceForm/UpdateBalanceForm";
import numberToStringWithDecimals from "@/app/lib/utils/balances/numberToStringWithDecimals";
import { UpdateBalanceFormValues } from "../UpdateBalance/UpdateBalanceForm/types";

interface AccountCardProps extends AccountWithCustomer {
  onAddSelectedAccountId: (accountId: number) => void;
  onDeleteSelectedAccountId: (accountId: number) => void;
  onUpdateAccountStatus: (newStatus: AccountStatus) => void;
  onUpdateAccountBalance: ({ amount }: UpdateBalanceFormValues) => void;
}

export default function AccountCard({
  account_id,
  first_name,
  last_name,
  balance,
  open_date,
  last_activity_date,
  status,
  onAddSelectedAccountId,
  onDeleteSelectedAccountId,
  onUpdateAccountStatus,
  onUpdateAccountBalance
}: AccountCardProps) {
  const [accountSelected, setAccountSelected] = useState(false);
  const [
    updateAccountBalanceInputFieldVisibility,
    setUpdateAccountBalanceInputFieldVisibility
  ] = useState(false);

  const dateTimeFormatter = new DateTimeFormatter();

  const openDate = dateTimeFormatter.gbDayMonthYearLongFormat(open_date);

  const lastActiveDate =
    dateTimeFormatter.gbDayMonthYearLongFormat(last_activity_date);

  const cssClassGenerator = new CssClassGenerator();

  const statusContainerClassName =
    cssClassGenerator.generateStatusContainerClass(status);

  const statusBubbleClassName =
    cssClassGenerator.generateStatusBubbleClass(status);

  return (
    <div
      data-testid={`account-card-${account_id}`}
      className={accountStyles.accountCard}
      onClick={() => {
        setAccountSelected(!accountSelected);
        setUpdateAccountBalanceInputFieldVisibility(false);
        if (!accountSelected) {
          onAddSelectedAccountId(account_id);
        } else {
          onDeleteSelectedAccountId(account_id);
        }
      }}
    >
      <p>{`Account ID: ${account_id}`}</p>
      <div>
        <div className={accountStyles.customerName}>
          <h3>{`${first_name} ${last_name}`}</h3>
        </div>
      </div>

      <div>
        <div className={accountStyles.dataContainer}>
          {"Balance:"}{" "}
          <span
            className={accountStyles.balanceAmount}
          >{`£${numberToStringWithDecimals(balance, 2)}`}</span>
          {accountSelected && !updateAccountBalanceInputFieldVisibility && (
            <Button
              type="button"
              text={
                updateAccountBalanceInputFieldVisibility ? "Save" : "Top-Up"
              }
              onClick={() => setUpdateAccountBalanceInputFieldVisibility(true)}
            />
          )}
          {accountSelected && updateAccountBalanceInputFieldVisibility && (
            <UpdateBalanceForm
              accountID={account_id.toString()}
              currentBalance={numberToStringWithDecimals(balance, 2)}
              handleUpdateBalance={onUpdateAccountBalance}
            />
          )}
        </div>

        <div className={accountStyles.dataContainer}>
          {`Opened Since: ${openDate}`}
        </div>

        <div
          className={accountStyles.dataContainer}
        >{`Last Active: ${lastActiveDate}`}</div>
      </div>

      <div className={`${statusContainerClassName} ${accountStyles.status}`}>
        {"Account Status:"}{" "}
        <span
          className={`${statusBubbleClassName} ${accountStyles.bubble}`}
          data-testid={`account-status-${account_id}`}
        >
          {status}
        </span>
        {accountSelected && (
          <UpdateAccountsStatus onUpdateAccountStatus={onUpdateAccountStatus} />
        )}
      </div>
    </div>
  );
}
