import { transactionSchema } from "@/app/lib/schemas/transactionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NewTransactionFormSubmitValues } from "@/app/lib/definitions/transaction/types/NewTransactionFormSubmitValues";
import Button from "@/app/lib/components/common/Button";
import stylesShared from "../../../lib/styles/shared.module.css";
import colours from "@/app/lib/constants/colors";
import { AccountWithCustomer } from "@/app/lib/definitions/account/types/AccountWithCustomer";

interface NewTransactionFormProps {
  accountsWithCustomers: AccountWithCustomer[];
  onSubmit: (transaction: NewTransactionFormSubmitValues) => void;
}

export default function NewTransactionForm({
  accountsWithCustomers,
  onSubmit
}: NewTransactionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewTransactionFormSubmitValues>({
    resolver: yupResolver(transactionSchema)
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={stylesShared.formInnerContainer}>
          <div className={stylesShared.inputGroup}>
            <label htmlFor="from_account_id" className={stylesShared.label}>
              From Account
            </label>
            <select
              id="from_account_id"
              {...register("from_account_id")}
              className={stylesShared.inputElement}
            >
              {accountsWithCustomers.map((accountWithCustomer) => (
                <option
                  key={accountWithCustomer.account_id}
                  value={accountWithCustomer.account_id}
                >{`${accountWithCustomer.first_name} ${accountWithCustomer.last_name}`}</option>
              ))}
            </select>
            <p className={stylesShared.error}>
              {errors.from_account_id?.message}
            </p>
          </div>

          <div className={stylesShared.inputGroup}>
            <label htmlFor="to_account_id" className={stylesShared.label}>
              To Account
            </label>
            <select
              id="to_account_id"
              {...register("to_account_id")}
              className={stylesShared.inputElement}
            >
              {accountsWithCustomers.map((accountWithCustomer) => (
                <option
                  key={accountWithCustomer.account_id}
                  value={accountWithCustomer.account_id}
                >{`${accountWithCustomer.first_name} ${accountWithCustomer.last_name}`}</option>
              ))}
            </select>
            <p className={stylesShared.error}>
              {errors.to_account_id?.message}
            </p>
          </div>

          <div className={stylesShared.inputGroup}>
            <label htmlFor="amount" className={stylesShared.label}>
              Amount
            </label>
            <input
              id="amount"
              {...register("amount")}
              className={stylesShared.inputElement}
            />
            <p className={stylesShared.error}>{errors.amount?.message}</p>
          </div>

          <Button
            type="submit"
            text="New Transaction"
            onClick={() => {}}
            primaryColor={colours.black}
          />
        </div>
      </form>
    </div>
  );
}
