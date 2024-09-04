import Button from "@/app/lib/components/common/Button";
import { useForm } from "react-hook-form";
import { UpdateBalanceFormValues } from "./types";

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
      <label htmlFor="update-balance">Top-Up Balance</label>
      <input id="update-balance" {...register("amount")} />
      <Button type="submit" text="Save" onClick={() => {}} />
    </form>
  );
}
