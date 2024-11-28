'use client';

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateClubPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    logo: '',
    number_of_registered_teams: 0,
    number_of_registered_categories: 0,
  });

  // const [validationErrors, setValidationErrors] = useState({
  //   name: '',
  //   email: '',
  //   logo: '',
  //   phone: '',
  //   number_of_registered_teams: 0,
  //   number_of_registered_categories: 0,
  // });

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log('THE NAME', value, 'the name:', name);

    // if (name === 'email') {
    //   //handle validation -> check if it's an email
    //   setValidationErrors((prevData) => ({ ...prevData, [name]: 'Error' }));
    // }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (/*e: React.ChangeEvent<HTMLInputElement>*/) => {
    // e.preventDefault();
    // alert(formData);
  };

  return (
    <div>
      <h1>Register Club</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='clubName' className='mb-3'>
          <Form.Label>Club Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Enter club name'
            data-test-id='club_name'
            onChange={handleFormDataChange}
            value={formData.name}
            required
          />
          {/* {validationErrors.name && (
            <span style={{ color: 'red' }}>{validationErrors.name}</span>
          )} */}
        </Form.Group>

        <Form.Group controlId='clubEmail' className='mb-3'>
          <Form.Label>Club Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter club email'
            data-test-id='club_email'
            onChange={handleFormDataChange}
            value={formData.email}
            required
          />
          {/* {validationErrors.email && (
            <span style={{ color: 'red' }}>{validationErrors.email}</span>
          )} */}
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateClubPage;
