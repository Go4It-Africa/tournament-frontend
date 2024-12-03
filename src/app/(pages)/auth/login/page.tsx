'use client';

import { useActionState } from 'react';
import { loginHandler } from '@/pages/auth/login/action';
import { Form } from 'react-bootstrap';
import Link from 'next/link';

const Login = () => {
  const [state, formAction, pending] = useActionState(
    (state: unknown, formData: FormData) => loginHandler(state, formData),
    null
  );

  return (
    <div className='container form-container'>
      <div className='form-step'>
        <h2 className='mb-4'>Log In</h2>
        {/* {apiError && <p className='mb-4 text-red-600'>{apiError}</p>}
        {success && (
          <p className='mb-4 text-success'>Player created successfully!</p>
        )} */}
        <Form action={formAction}>
          {/* Tournament Name */}
          <Form.Group controlId='email' className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='abc@example.com'
              // onChange={handleFormDataChange}
              // value={formData.email}
              required
            />
            {state?.errors?.email && <p>{state.errors.email}</p>}
          </Form.Group>

          <Form.Group controlId='password' className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='*******'
              // onChange={handleFormDataChange}
              // value={formData.password}
              required
            />
            {state?.errors?.password && <p>{state.errors.password}</p>}
          </Form.Group>

          {/* Checkbox */}
          <div className='d-lg-flex justify-content-between align-items-center mb-4'>
            <Form.Check type='checkbox' id='rememberme'>
              <Form.Check.Input type='checkbox' />
              <Form.Check.Label>Remember me</Form.Check.Label>
            </Form.Check>
          </div>

          {/* Submit Button */}
          <button disabled={pending} className='button' type='submit'>
            {pending ? 'Logging In...' : 'Log In'}
          </button>

          <div className='d-md-flex justify-content-between mt-4'>
            <div className='mb-2 mb-md-0'>
              <Link href='/auth/sign-up' className='fs-5'>
                Create An Account{' '}
              </Link>
            </div>
            <div>
              <Link href='/auth/forgot-password' className='text-inherit fs-5'>
                Forgot your password?
              </Link>
            </div>
          </div>
        </Form>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
