import Button from "@/app/lib/components/common/Button";
import { useForm } from "react-hook-form";
import { UpdateBalanceFormValues } from "./types";
import InputComponent from "@/app/lib/components/common/InputComponent/InputComponent";
import sharedStyles from "../../../../lib/styles/shared.module.css";
import { yupResolver } from "@hookform/resolvers/yup";

interface UpdateBalanceForm {
  accountID: string;
  currentBalance: string;
  onUpdateBalance: ({ accountID, amount }: UpdateBalanceFormValues) => void;
}

export default function UpdateBalanceForm({
  accountID,
  currentBalance,
  onUpdateBalance
}: UpdateBalanceForm) {
  const { handleSubmit, register } = useForm<UpdateBalanceFormValues>({

    defaultValues: {
      accountID: accountID,
      amount: currentBalance
    },
    resolver: yupResolver()
  });

  return (
    <form onSubmit={handleSubmit(onUpdateBalance)}>
      <div className={sharedStyles.formInnerContainer}>
        <InputComponent<UpdateBalanceFormValues>
          id={`update-balance-${accountID}`}
          label="Top-Up Balance"
          name="amount"
          registerField={register}
        />

        <input hidden {...register("accountID")} />
        <Button type="submit" text="Save" onClick={() => {}} />
      </div>
    </form>
  );
}
