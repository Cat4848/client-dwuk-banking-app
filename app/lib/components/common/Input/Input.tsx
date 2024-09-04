import styles from "./styles/input.module.css";

interface InputComponentProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (input: string) => void;
}
export default function InputComponent({
  label,
  placeholder,
  value,
  onChange
}: InputComponentProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input-element">{label}</label>
      <div>
        <span>£</span>{" "}
        <input
          id="input-element"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
