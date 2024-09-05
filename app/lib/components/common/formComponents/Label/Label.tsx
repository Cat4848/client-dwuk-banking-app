interface Label {
  id: string;
  text: string;
  className?: string;
}

export default function Label({ id, text, className }: Label) {
  return (
    <label htmlFor={id} className={className}>
      {text}
    </label>
  );
}
