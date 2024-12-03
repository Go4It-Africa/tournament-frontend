'use client';

import { useActionState } from 'react';
import { signUpHandler } from '@/pages/auth/sign-up/action';
import { Form } from 'react-bootstrap';
import Link from 'next/link';

const SignUpPage = () => {
  const [state, formAction, pending] = useActionState(
    (state: unknown, formData: FormData) => signUpHandler(state, formData),
    null
  );

  return (
    <div className='container form-container'>
      <div className='form-step'>
        <h2 className='mb-4'>Log In</h2>
        <Form action={formAction}>
          <Form.Group controlId='first_name' className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              name='first_name'
              placeholder='John'
              // onChange={handleFormDataChange}
              // value={formData.email}
              required
            />
            {state?.errors?.first_name && <p>{state.errors.first_name}</p>}
          </Form.Group>

          <Form.Group controlId='last_name' className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              name='last_name'
              placeholder='Doe'
              // onChange={handleFormDataChange}
              // value={formData.email}
              required
            />
            {state?.errors?.first_name && <p>{state.errors.first_name}</p>}
          </Form.Group>

          {/* Email */}
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

          <Form.Group controlId='confirm_password' className='mb-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              name='confirm_password'
              placeholder='*******'
              // onChange={handleFormDataChange}
              // value={formData.password}
              required
            />
            {state?.errors?.confirm_password && (
              <p>{state.errors.confirm_password}</p>
            )}
          </Form.Group>

          {/* Submit Button */}
          <button disabled={pending} className='button' type='submit'>
            {pending ? 'Logging In...' : 'Log In'}
          </button>

          <div className='d-md-flex justify-content-between mt-4'>
            <div className='mb-2 mb-md-0'>
              <Link href='/auth/sign-in' className='fs-5'>
                Already member? Login{' '}
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
    </div>
  );
};

export default SignUpPage;
