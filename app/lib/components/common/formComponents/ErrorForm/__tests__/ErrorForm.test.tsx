import { render, screen } from "@testing-library/react";
import ErrorForm from "../ErrorForm";

test("if error is displayed", () => {
  const errorMessage = "This field is required";

  render(<ErrorForm errorMessage={errorMessage} />);

  const errorForm = document.querySelector("p") as HTMLParagraphElement;

  expect(errorForm.innerHTML).toBe(errorMessage);
});
