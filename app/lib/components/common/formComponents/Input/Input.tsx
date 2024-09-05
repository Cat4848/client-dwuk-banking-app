import { FieldValues, UseFormRegister } from "react-hook-form";
import { Path } from "react-hook-form";
import sharedStyles from "../../../../styles/shared.module.css";

interface Input<T extends FieldValues> {
  id: string;
  name: Path<T>;
  registerField: UseFormRegister<T>;
}

export default function Input<T extends FieldValues>({
  id,
  name,
  registerField
}: Input<T>) {
  return (
    <input
      id={id}
      {...registerField(name)}
      onClick={(e) => e.stopPropagation()}
      className={sharedStyles.inputElement}
      data-testid={`testid-${id}`}
    />
  );
}
