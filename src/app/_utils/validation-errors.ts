import { z } from 'zod';

export const SignupFormSchema = z.object({
  first_name: z.string({
    required_error: 'This field is required',
    invalid_type_error: 'This field must be a string',
  }),
  last_name: z.string({
    required_error: 'This field is required',
    invalid_type_error: 'This field must be a string',
  }),
  email: z.string({
    required_error: 'This field is required',
    invalid_type_error: 'This field must be a string',
  }),
  password: z.string({
    required_error: 'This field is required',
    invalid_type_error: 'This field must be a string',
  }),
  // date_of_birth: z.string({
  //   required_error: 'This field is required',
  //   invalid_type_error: 'This field must be a string',
  // }),
  // gender: z.string({
  //   required_error: 'This field is required',
  //   invalid_type_error: 'This field must be a string',
  // }),
  // weight: z.number({
  //   required_error: 'This field is required',
  //   invalid_type_error: 'This field must be a number',
  // }),
  // type_of_sport: z.string({
  //   required_error: 'This field is required',
  // })
});

export const LoginFormSchema = z.object({
  email: z.string({
    required_error: 'This field is required',
    invalid_type_error: 'This field must be a string',
  }),
  password: z.string({
    required_error: 'This field is required',
    invalid_type_error: 'This field must be a string',
  }),
});
