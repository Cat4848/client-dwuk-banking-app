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
    <div>
      <label htmlFor="input-element">{label}</label>
      <input
        id="input-element"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
