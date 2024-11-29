'use client';

import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Player } from 'types/data';
//import { FormSelect } from '../../../../../_components/widgets/form-select/FormSelect';

const CreatePlayer = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: new Date().toISOString().split('T')[0],
    gender: 'Male',
    weight: 0,
    type_of_sport: 'Football',
    club_id: 1,
    position: 'Attacker',
    country: 'Kenya',
    nationality: 'Kenyan',
  });
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   const [validationErrors, setValidationErrors] = useState({
  //     first_name: '',
  //     last_name: '',
  //     date_of_birth: '',
  //     gender: '',
  //     weight: '',
  //     type_of_sport: '',
  //     position: '',
  //   });

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering mismatched HTML
  }

  //   const handleFormErrors = (inputName, inputValue) => {
  //     //   const errors: any = {}
  //     //     if (inputName == 'first_name') {
  //     //         if (!inputValue) {
  //     //             errors.first_name = 'First name is required';
  //     //         }
  //     //   }
  //     //   if (!last_name) {
  //     //     validationErrors.last_name = 'Last name is required';
  //     //   }
  //     //   if (!date_of_birth) {
  //     //     validationErrors.date_of_birth = 'Date of birth is required';
  //     //   }
  //     //   if (!gender) {
  //     //     validationErrors.gender = 'Gender is required';
  //     //   }
  //     //   if (!weight) {
  //     //     validationErrors.weight = 'Weight is required';
  //     //   }
  //     //   if (!type_of_sport) {
  //     //     validationErrors.type_of_sport = 'Type of sport is required';
  //     //   }
  //     //   if (!position) {
  //     //     validationErrors.position = 'Position is required';
  //     //   }
  //     //setValidationErrors((prevData) => ({ ...prevData, [inputName]: error[inputName] }));
  //   };

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    //handleFormErrors(name, value);

    setFormData((prevData) => ({ ...prevData, [name]: value.trim() }));
  };

  const handleSelectDataChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value.trim() }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle form data submission here
    console.log('Form Submitted', formData);

    setIsSubmitting(true);

    const postPlayer = async (data: Player) => {
      setIsSubmitting(true);

      const response = await fetch('/api/player', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      return result;
    };

    const data = await postPlayer(formData);

    if (data.status === 200) {
      setIsSubmitting(false);

      setFormData({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: 'Male',
        weight: 0,
        type_of_sport: 'Football',
        club_id: 1,
        position: 'Attacker',
        country: 'Kenya',
        nationality: 'Kenya',
      });

      setSuccess(true);
    } else {
      setApiError(data.error);
      setIsSubmitting(false);
    }

    //return fetch(`http://localhost:3000/v1/players`, {
    //return fetch(
    //   'https://go4it-backend-08e4d2013568.herokuapp.com/v1/players',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then(() => {
    //     setFormData({
    //       first_name: '',
    //       last_name: '',
    //       date_of_birth: '',
    //       gender: 'Male',
    //       weight: '',
    //       type_of_sport: 'Football',
    //       club_id: 1,
    //       position: 'Attacker',
    //     });

    //     setSuccess(true);
    //     setIsSubmitting(false);
    //   })
    //   .catch((error) => {
    //     //console.error('Error:', error);
    //     setApiError(error.message);
    //     setIsSubmitting(false);
    //   });
  };

  return (
    <div className='container form-container'>
      <div className='form-step'>
        <h2 className='mb-4'>Create Player</h2>
        {apiError && <p className='mb-4 text-red-600'>{apiError}</p>}
        {success && (
          <p className='mb-4 text-success'>Player created successfully!</p>
        )}
        <Form onSubmit={handleSubmit}>
          {/* Tournament Name */}
          <Form.Group controlId='playerFirstName' className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              name='first_name'
              placeholder='Enter first name'
              onChange={handleFormDataChange}
              value={formData.first_name}
              required
            />
          </Form.Group>

          <Form.Group controlId='playerLastName' className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              name='last_name'
              placeholder='Enter last name'
              onChange={handleFormDataChange}
              value={formData.last_name}
              required
            />
          </Form.Group>

          <Form.Group controlId='playerDOB' className='mb-3'>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type='date'
              name='date_of_birth'
              placeholder='Enter date of birth'
              onChange={handleFormDataChange}
              value={formData.date_of_birth}
              required
            />
          </Form.Group>

          {/* Type Selection */}
          <Form.Group controlId='type' className='mb-3'>
            <Form.Label>Gender</Form.Label>
            <Form.Select
              onChange={handleSelectDataChange}
              value={formData.gender}
              name='gender'
              required
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Non-Binary'>Prefer not to say</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId='playerWeight' className='mb-3'>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type='number'
              name='weight'
              min={0}
              placeholder='Enter weight (kg)'
              onChange={handleFormDataChange}
              value={formData.weight}
            />
          </Form.Group>

          {/* Sport Selection */}
          <Form.Group controlId='position' className='mb-3'>
            <Form.Label>Position</Form.Label>
            <Form.Select
              onChange={handleSelectDataChange}
              value={formData.position}
              name='position'
            >
              <option value=''>Choose an option</option>
              <option value='Attacker'>Attacker</option>
              <option value='Midfielder'>Midfielder</option>
              <option value='Defender'>Defender</option>
              <option value='Goalkeeper'>Goalkeeper</option>
            </Form.Select>
          </Form.Group>

          {/* Sport Selection */}
          <Form.Group controlId='sport' className='mb-3'>
            <Form.Label>Sport</Form.Label>
            <Form.Select
              required
              onChange={handleSelectDataChange}
              value={formData.type_of_sport}
              name='type_of_sport'
            >
              <option value='Football'>Football</option>
              <option value='Basketball'>Basketball</option>
              <option value='Volleyball'>Volleyball</option>
              <option value='Rugby'>Rugby</option>
              <option value='Hockey'>Hockey</option>
              <option value='Other'>Other</option>
            </Form.Select>
          </Form.Group>

          {/* Submit Button */}
          <button type='submit' className='button'>
            {!isSubmitting && 'Submit'}
            {isSubmitting && 'Submitting...'}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreatePlayer;
