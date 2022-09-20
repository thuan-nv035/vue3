const formConfig = {
  validateMessages: {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  },

  optionsRole: [
    { label: "Admin", value: 1 },
    { label: "Manager", value: 2 },
    { label: "Employee", value: 3 },
  ],

  validateSchema: {
    name: [{ required: true }],
    email: [{ required: true, type: "email" }],
    role: [{ required: true, type: "number" }],
  },
};
export default formConfig;
