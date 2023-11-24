const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must contain atleast 3 character" })
    .max(10, { message: "name must not be more than 10 character" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must contain atleast 3 character" })
    .max(30, { message: "Email must not be more than 30 character" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must contain atleast 10 character" })
    .max(20, { message: "Phone must not be more than 120 character" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must contain atleast 6 character" })
    .max(1024, { message: "Password must not be more than 1024 character" }),
});




const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must contain atleast 3 character" })
    .max(30, { message: "Email must not be more than 30 character" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must contain atleast 6 character" })
    .max(1024, { message: "Password must not be more than 1024 character" }),
});

module.exports = {signupSchema,loginSchema};
