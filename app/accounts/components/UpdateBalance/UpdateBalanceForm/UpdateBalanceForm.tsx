import Button from "@/app/lib/components/common/Button";
import { useForm } from "react-hook-form";
import { UpdateBalanceFormValues } from "./types";
import InputComponent from "@/app/lib/components/common/InputComponent/InputComponent";

interface UpdateBalanceForm {
  currentBalance: string;
  handleUpdateBalance: ({ amount }: UpdateBalanceFormValues) => void;
}

export default function UpdateBalanceForm({
  currentBalance,
  handleUpdateBalance
}: UpdateBalanceForm) {
  const { handleSubmit, register } = useForm<UpdateBalanceFormValues>({
    defaultValues: {
      amount: currentBalance
    }
  });

  return (
    <form onSubmit={handleSubmit(handleUpdateBalance)}>
      <InputComponent<UpdateBalanceFormValues>
        id="update-balance"
        label="Top-Up Balance"
        name="amount"
        registerField={register}
      />
      <Button type="submit" text="Save" onClick={() => {}} />
    </form>
  );
}
