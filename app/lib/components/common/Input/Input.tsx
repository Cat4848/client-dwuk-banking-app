import { useState } from "react";

interface InputComponentProps {
  label: string;
  placeholder?: string;
  initialValue: string;
}
export default function InputComponent({
  label,
  placeholder,
  initialValue
}: InputComponentProps) {
  const [inputValue, setInputValue] = useState(initialValue);
  return (
    <div>
      <label htmlFor="input-element">{label}</label>
      <input
        id="input-element"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
