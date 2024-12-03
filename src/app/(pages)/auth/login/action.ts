'use server';

import { LoginFormSchema } from '@/utils/validation-errors';

export const loginHandler = async (prevState: unknown, formData: FormData) => {
  const validateResult = LoginFormSchema.safeParse({
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

  const { email, password } = validateResult.data;

  return {
    message: 'Successfully logged in',
    data: {},
  };
};
