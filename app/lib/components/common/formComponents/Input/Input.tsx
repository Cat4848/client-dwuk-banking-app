import { FieldValues, UseFormRegister } from "react-hook-form";
import { Path } from "react-hook-form";

interface Input<T extends FieldValues> {
  id: string;
  name: Path<T>;
  registerField: UseFormRegister<T>;
  className?: string;
}

export default function Input<T extends FieldValues>({
  id,
  name,
  registerField,
  className
}: Input<T>) {
  return (
    <input
      id={id}
      {...registerField(name)}
      onClick={(e) => e.stopPropagation()}
      className={className}
      data-testid={`testid-${id}`}
    />
  );
}
