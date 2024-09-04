import styles from "./styles/input.module.css";
import { RegisterInputField } from "./types";
import { UpdateBalanceInputElement } from "./types";

type NameInputField = keyof UpdateBalanceInputElement;

type RegisterInput = RegisterInputField<UpdateBalanceInputElement>;

interface InputComponentProps {
  type?: string;
  id?: string;
  name: NameInputField;
  label: string;
  placeholder?: string;
  value: string;
  currency?: string;
  registerInput: RegisterInput;
}

export default function InputComponent({
  type,
  id,
  name,
  label,
  placeholder,
  value,
  currency,
  registerInput
}: InputComponentProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <div>
        {currency && <span>{`${currency} `}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          {...registerInput(name)}
        />
      </div>
    </div>
  );
}
