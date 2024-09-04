import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputComponentProps {
  id: string;
  label: string;
  name: string;
  registerField: UseFormRegister<FieldValues>;
}

export default function InputComponent({
  id,
  label,
  name,
  registerField
}: InputComponentProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...registerField(name)} />
    </div>
  );
}
