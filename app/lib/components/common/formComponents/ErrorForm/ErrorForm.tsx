interface ErrorForm {
  errorMessage?: string;
  className?: string;
}

export default function ErrorForm({ errorMessage, className }: ErrorForm) {
  return <p className={className}>{errorMessage}</p>;
}
