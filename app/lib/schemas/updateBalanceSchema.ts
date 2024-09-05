import * as yup from "yup";

export const updateBalanceSchema = yup.object().shape({
  accountID: yup.string().defined(),
  amount: yup
    .string()
    .required("Balance is a required field")
    .defined("Must be defined")
    .test({
      name: "greater-than-the-current-value",
      message: "Top-Up value must be grater than current value",
      test: (value, context) => Number(value)! >= Number(context.parent.amount)
    })
});
