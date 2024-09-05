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
import { usePutAccountBalance } from "@/app/lib/services/mutations/mutations";

interface AccountCardProps extends AccountWithCustomer {
  onAddSelectedAccountId: (accountId: number) => void;
  onDeleteSelectedAccountId: (accountId: number) => void;
  onUpdateAccountStatus: (newStatus: AccountStatus) => void;
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
  onUpdateAccountStatus
}: AccountCardProps) {
  const [accountSelected, setAccountSelected] = useState(false);
  const [
    updateBalanceInputFieldVisibility,
    setUpdateBalanceInputFieldVisibility
  ] = useState(false);
  const putAccountBalance = usePutAccountBalance();

  const dateTimeFormatter = new DateTimeFormatter();

  const openDate = dateTimeFormatter.gbDayMonthYearLongFormat(open_date);

  const lastActiveDate =
    dateTimeFormatter.gbDayMonthYearLongFormat(last_activity_date);

  const cssClassGenerator = new CssClassGenerator();

  const statusContainerClassName =
    cssClassGenerator.generateStatusContainerClass(status);

  const statusBubbleClassName =
    cssClassGenerator.generateStatusBubbleClass(status);

  function handleUpdateBalance({ accountID, amount }: UpdateBalanceFormValues) {
    putAccountBalance.mutate({ accountID: accountID, amount: amount });
    closeUpdateBalanceInputFieldVisibility();
  }

  function closeUpdateBalanceInputFieldVisibility() {
    setUpdateBalanceInputFieldVisibility(false);
  }

  return (
    <div
      data-testid={`account-card-${account_id}`}
      className={accountStyles.accountCard}
      onClick={() => {
        setAccountSelected(!accountSelected);
        setUpdateBalanceInputFieldVisibility(false);
        if (!accountSelected) {
          onAddSelectedAccountId(account_id);
        } else {
          onDeleteSelectedAccountId(account_id);
        }
      }}
    >
      <div>
        <div className={accountStyles.customerName}>
          <h3>{`${first_name} ${last_name}`}</h3>
        </div>
      </div>

      <div>
        <div
          className={`${accountStyles.dataContainer} ${accountStyles.balanceContainer}`}
        >
          <div className={accountStyles.balanceAmountAndTopUpButton}>
            <div>
              {"Balance:"}{" "}
              <span
                className={accountStyles.balanceAmount}
              >{`£${numberToStringWithDecimals(balance, 2)}`}</span>
            </div>

            <div>
              {accountSelected && !updateBalanceInputFieldVisibility && (
                <Button
                  type="button"
                  text={updateBalanceInputFieldVisibility ? "Save" : "Top-Up"}
                  onClick={() => setUpdateBalanceInputFieldVisibility(true)}
                />
              )}
            </div>
          </div>

          <div>
            {accountSelected && updateBalanceInputFieldVisibility && (
              <UpdateBalanceForm
                accountID={account_id.toString()}
                currentBalance={numberToStringWithDecimals(balance, 2)}
                onUpdateBalance={handleUpdateBalance}
              />
            )}
          </div>
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
