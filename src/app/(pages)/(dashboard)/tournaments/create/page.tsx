'use client';

import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
//import { FormSelect } from '../../../../../_components/widgets/form-select/FormSelect';

const CreateTournament = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering mismatched HTML
  }

  // Handlers for dynamic team list
  // const addTeam = () => {
  //   setTeams([...teams, { name: '', manager: '' }]);
  // };

  // const removeTeam = (index: number) => {
  //   setTeams(teams.filter((_, i) => i !== index));
  // };

  // const handleTeamChange = (index, field, value) => {
  //   const updatedTeams = [...teams];
  //   updatedTeams[index][field] = value;
  //   setTeams(updatedTeams);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle form data submission here
    //console.log('Form submitted!', e.target.tournament_name.value);
  };

  return (
    <>
      <div className='form-step'>
        <h2>Create Tournament</h2>
        <Form onSubmit={handleSubmit}>
          {/* Tournament Name */}
          <Form.Group controlId='tournamentName' className='mb-3'>
            <Form.Label>Tournament Name</Form.Label>
            <Form.Control
              type='text'
              name='tournament_name'
              placeholder='Enter tournament name'
              required
            />
          </Form.Group>

          {/* Organizer Name */}
          <Form.Group controlId='organizerName' className='mb-3'>
            <Form.Label>Organizer Name</Form.Label>
            <Form.Control
              type='text'
              name='organizer'
              placeholder='Enter organizer name'
              required
            />
          </Form.Group>

          {/* Tournament Website */}
          <Form.Group controlId='tournamentWebsite' className='mb-3'>
            <Form.Label>Tournament Website (if any)</Form.Label>
            <Form.Control
              type='url'
              name='website_url'
              placeholder='Enter tournament website URL'
            />
          </Form.Group>

          {/* Sport Selection */}
          <Form.Group controlId='sport' className='mb-3'>
            <Form.Label>Sport</Form.Label>
            <Form.Select required>
              <option value='Football'>Football</option>
              <option value='Basketball'>Basketball</option>
              <option value='Volleyball'>Volleyball</option>
              <option value='Rugby'>Rugby</option>
              <option value='Hockey'>Hockey</option>
              <option value='Other'>Other</option>
            </Form.Select>
          </Form.Group>

          {/* Type Selection */}
          <Form.Group controlId='type' className='mb-3'>
            <Form.Label>Type</Form.Label>
            <Form.Select required>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Mixed'>Mixed</option>
            </Form.Select>
          </Form.Group>

          {/* Submit Button */}
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateTournament;
