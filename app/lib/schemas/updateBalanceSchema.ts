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
      test: (value, context) => {
        console.log("schema -> amount", value);
        console.log("schema -> context.parent", context.parent.amount);
        console.log("schema -> amount ref", yup.ref("amount"));
        return Number(context.parent.amount) > Number(value);
      }
    })
});
