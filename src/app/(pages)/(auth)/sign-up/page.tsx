'use client';

import { useActionState } from 'react';
import { signUpHandler } from '@/pages/(auth)/sign-up/action';

const SignUpPage = () => {
  const [state, formAction, pending] = useActionState(
    (state: unknown, formData: FormData) => signUpHandler(state, formData),
    null
  );

  return (
    <div>
      <form action={formAction}>
        <input type='text' name='first_name' placeholder='First Name' />
        {state?.errors?.first_name && <p>{state.errors.first_name}</p>}
        <input type='email' name='email' placeholder='Email' />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <input type='password' name='password' placeholder='Password' />
        {state?.errors?.password && <p>{state.errors.password}</p>}
        <input
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
        />
        {state?.errors?.password && <p>{state.errors.password}</p>}
        <button disabled={pending} type='submit'>
          {pending ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
