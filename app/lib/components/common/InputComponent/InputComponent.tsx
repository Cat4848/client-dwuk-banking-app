import { UseFormRegister, FieldValues } from "react-hook-form";
import { Path } from "react-hook-form";
import sharedStyles from "../../../styles/shared.module.css";

export interface InputComponentProps<T extends FieldValues> {
  id: string;
  label: string;
  name: Path<T>;
  registerField: UseFormRegister<T>;
}

export default function InputComponent<T extends FieldValues>({
  id,
  label,
  name,
  registerField
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
    </div>
  );
}
