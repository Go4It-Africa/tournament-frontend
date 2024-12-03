'use client';

import { useActionState } from 'react';
import { loginHandler } from '@/pages/auth/login/action';

const Login = () => {
  const [state, formAction, pending] = useActionState(
    (state: unknown, formData: FormData) => loginHandler(state, formData),
    null
  );

  return (
    <div>
      <form action={formAction}>
        <input type='email' name='email' placeholder='Email' />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <input type='text' name='password' placeholder='Password' />
        {state?.errors?.password && <p>{state.errors.password}</p>}

        <button disabled={pending} type='submit'>
          {pending ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
