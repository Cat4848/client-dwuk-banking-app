import { UseFormRegister, FieldValues } from "react-hook-form";
import { Path } from "react-hook-form";
import sharedStyles from "../../../styles/shared.module.css";
import { FieldError } from "react-hook-form";

export interface InputComponentProps<T extends FieldValues> {
  id: string;
  label: string;
  name: Path<T>;
  registerField: UseFormRegister<T>;
  error: FieldError | undefined;
}

export default function InputComponent<T extends FieldValues>({
  id,
  label,
  name,
  registerField,
  error
}: InputComponentProps<T>) {
  return (
    <div className={sharedStyles.inputGroup}>
      <label htmlFor={id} className={sharedStyles.label}>
        {label}
      </label>
      <input
        id={id}
        {...registerField(name)}
        onClick={(e) => e.stopPropagation()}
        className={sharedStyles.inputElement}
      />
      <p className={sharedStyles.error}>{error?.message}</p>
    </div>
  );
}
