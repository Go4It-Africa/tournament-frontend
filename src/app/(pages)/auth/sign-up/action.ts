'use server';

import { SignupFormSchema } from 'app/_utils/validation-errors';
import bcrypt from 'bcrypt';

export const signUpHandler = async (prevState: unknown, formData: FormData) => {
  //1. Validate form data
  const validateResult = SignupFormSchema.safeParse({
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors,
    };
  }

  const { first_name, last_name, email, password } = validateResult.data;

  //2. Create user
  const hashed_password = await bcrypt.hash(password, 10);

  return {
    message: 'Successfully signed up',
    data: {
      first_name,
      last_name,
      email,
      password: hashed_password,
    },
  };

  //3. Create session
};
