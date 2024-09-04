import { UseFormRegister, FieldValues } from "react-hook-form";

export interface UpdateBalanceInputElement {
  newBalance: number;
}

export type RegisterInputField<T extends FieldValues> = UseFormRegister<T>;
