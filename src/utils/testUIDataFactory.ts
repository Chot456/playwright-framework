export const creds = {
  valid: {
    username: process.env.VALID_USERNAME || "",
    password: process.env.VALID_PASSWORD || ""
  },
  invalid: {
    username: process.env.INVALID_USERNAME || "",
    password: process.env.INVALID_PASSWORD || ""
  }
};

export const invalidLoginCases = [
  {
    name: "wrong username",
    username: "wrong_user",
    password: "SuperSecretPassword!",
    expectedError: "Your username is invalid!"
  },
  {
    name: "wrong password",
    username: "student",
    password: "wrong_pass",
    expectedError: "Your password is invalid!"
  },
  {
    name: "empty username",
    username: "",
    password: "Password123",
    expectedError: "Your username is invalid!"
  },
  {
    name: "empty password",
    username: "student",
    password: "",
    expectedError: "Your password is invalid!"
  }
];