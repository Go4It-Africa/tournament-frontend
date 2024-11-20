import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const CreateTeam = () => {
  const [players, setPlayers] = useState([
    { name: '', jersey: '', position: '', age: '' },
  ]);

  // Handlers for dynamic player list
  const addPlayer = () => {
    setPlayers([...players, { name: '', jersey: '', position: '', age: '' }]);
  };

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  /**
   * Updates the player at the given index with the provided value.
   * @param {number} index - The index of the player to update.
   * @param {string} field - The field to update (name, jersey, position, age).
   * @param {string} value - The new value for the given field.
   */
  //   const handlePlayerChange =
  //     (index: number, field: string, value: string) => {
  //       const updatedPlayers = [...players];
  //       updatedPlayers[index][field] = value;
  //       setPlayers(updatedPlayers);
  //     };

  return (
    <div className='form-container'>
      <h2>Team Registration Form</h2>
      <Form>
        {/* Team Name */}
        <Form.Group controlId='teamName' className='mb-3'>
          <Form.Label>Team Name</Form.Label>
          <Form.Control type='text' placeholder='Enter team name' required />
        </Form.Group>

        {/* Jersey Colors */}
        <Form.Group controlId='jerseyColors' className='mb-3'>
          <Form.Label>Jersey Colors</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter jersey colors'
            required
          />
        </Form.Group>

        {/* Manager */}
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='managerFirstName'>
            <Form.Label>Manager First Name</Form.Label>
            <Form.Control type='text' placeholder='First Name' required />
          </Form.Group>
          <Form.Group as={Col} controlId='managerLastName'>
            <Form.Label>Manager Last Name</Form.Label>
            <Form.Control type='text' placeholder='Last Name' required />
          </Form.Group>
        </Row>

        {/* Coach */}
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='coachFirstName'>
            <Form.Label>Coach First Name</Form.Label>
            <Form.Control type='text' placeholder='First Name' required />
          </Form.Group>
          <Form.Group as={Col} controlId='coachLastName'>
            <Form.Label>Coach Last Name</Form.Label>
            <Form.Control type='text' placeholder='Last Name' required />
          </Form.Group>
        </Row>

        {/* First Aider */}
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='firstAiderFirstName'>
            <Form.Label>First Aider First Name</Form.Label>
            <Form.Control type='text' placeholder='First Name' required />
          </Form.Group>
          <Form.Group as={Col} controlId='firstAiderLastName'>
            <Form.Label>First Aider Last Name</Form.Label>
            <Form.Control type='text' placeholder='Last Name' required />
          </Form.Group>
        </Row>

        {/* Contact Info */}
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='contactPhone'>
            <Form.Label>Contact Phone Number</Form.Label>
            <Form.Control type='tel' placeholder='(000) 000-0000' required />
          </Form.Group>
          <Form.Group as={Col} controlId='emailAddress'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='example@example.com'
              required
            />
          </Form.Group>
        </Row>

        {/* Captain Info */}
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='captainFirstName'>
            <Form.Label>Captain First Name</Form.Label>
            <Form.Control type='text' placeholder='First Name' required />
          </Form.Group>
          <Form.Group as={Col} controlId='captainLastName'>
            <Form.Label>Captain Last Name</Form.Label>
            <Form.Control type='text' placeholder='Last Name' required />
          </Form.Group>
          <Form.Group as={Col} controlId='captainJersey'>
            <Form.Label>{"Captain's Jersey #"}</Form.Label>
            <Form.Control type='text' placeholder='e.g., 23' required />
          </Form.Group>
          <Form.Group as={Col} controlId='captainPosition'>
            <Form.Label>{"Captain's Position"}</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>
        </Row>

        {/* Players List */}
        <h3>Players List</h3>
        {players.map((player, index) => (
          <Row key={index} className='mb-3'>
            <Form.Group as={Col} controlId={`playerName${index}`}>
              <Form.Control
                type='text'
                placeholder='Player Name'
                value={player.name}
                onChange={
                  (/*e*/) => {} //handlePlayerChange(index, 'name', e.target.value)
                }
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId={`playerJersey${index}`}>
              <Form.Control
                type='text'
                placeholder='Jersey #'
                value={player.jersey}
                // onChange={(e) =>
                //   handlePlayerChange(index, 'jersey', e.target.value)
                // }
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId={`playerPosition${index}`}>
              <Form.Control
                type='text'
                placeholder='Position'
                value={player.position}
                // onChange={(e) =>
                //   handlePlayerChange(index, 'position', e.target.value)
                // }
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId={`playerAge${index}`}>
              <Form.Control
                type='number'
                placeholder='Age'
                value={player.age}
                // onChange={(e) =>
                //   handlePlayerChange(index, 'age', e.target.value)
                // }
                required
              />
            </Form.Group>
            <Col xs='auto'>
              <Button
                variant='danger'
                onClick={() => removePlayer(index)}
                className='mt-2'
              >
                Remove
              </Button>
            </Col>
          </Row>
        ))}
        <Button variant='primary' onClick={addPlayer}>
          Add Player
        </Button>
      </Form>
    </div>
  );
};

export default CreateTeam;
