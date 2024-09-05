import Button from "@/app/lib/components/common/Button";
import { useForm } from "react-hook-form";
import { UpdateBalanceFormValues } from "./types";
import InputComponent from "@/app/lib/components/common/InputComponent/InputComponent";
import sharedStyles from "../../../../lib/styles/shared.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateBalanceSchema } from "@/app/lib/schemas/updateBalanceSchema";

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
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UpdateBalanceFormValues>({
    defaultValues: {
      accountID: accountID,
      amount: currentBalance
    },
    resolver: yupResolver(updateBalanceSchema)
  });

  return (
    <form onSubmit={handleSubmit(onUpdateBalance)}>
      <div className={sharedStyles.formInnerContainer}>
        <InputComponent<UpdateBalanceFormValues>
          id={`update-balance-${accountID}`}
          label="Top-Up Balance"
          name="amount"
          registerField={register}
          error={errors.amount}
        />

        <input hidden {...register("accountID")} />
        <Button type="submit" text="Save" onClick={() => {}} />
      </div>
    </form>
  );
}
