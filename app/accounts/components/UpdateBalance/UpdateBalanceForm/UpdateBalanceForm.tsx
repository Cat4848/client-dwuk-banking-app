import Button from "@/app/lib/components/common/Button";
import { useForm } from "react-hook-form";
import { UpdateBalanceFormValues } from "./types";
import InputComponent from "@/app/lib/components/common/InputComponent/InputComponent";

interface UpdateBalanceForm {
  accountID: string;
  currentBalance: string;
  handleUpdateBalance: ({ accountID, amount }: UpdateBalanceFormValues) => void;
}

export default function UpdateBalanceForm({
  accountID,
  currentBalance,
  handleUpdateBalance
}: UpdateBalanceForm) {
  const { handleSubmit, register } = useForm<UpdateBalanceFormValues>({
    defaultValues: {
      accountID: accountID,
      amount: currentBalance
    }
  });

  return (
    <form onSubmit={handleSubmit(handleUpdateBalance)}>
      <InputComponent<UpdateBalanceFormValues>
        id={`update-balance-${accountID}`}
        label="Top-Up Balance"
        name="amount"
        registerField={register}
      />

      <input hidden {...register("accountID")} />
      <Button type="submit" text="Save" onClick={() => {}} />
    </form>
  );
}
