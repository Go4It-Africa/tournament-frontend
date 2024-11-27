'use client';
import { useState, useEffect } from 'react';

import Link from 'next/link';

const TournamentsPage = () => {
  const [players, setPlayers] = useState([
    {
      first_name: '',
      last_name: '',
      date_of_birth: '',
      gender: '',
      weight: '',
      type_of_sport: '',
      //club_id,
      position: '',
    },
  ]);

  useEffect(() => {
    //fetch('http://localhost:3000/v1/players/')
    fetch('https://go4it-backend-08e4d2013568.herokuapp.com/v1/players/')
      .then((response) => response.json())
      .then((data) => setPlayers(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className='container'>
        <div className='flex justify-between my-[1.25rem]'>
          <h3 className='text-left'>Players</h3>
          <div>
            <Link href='/players/create' className=''>
              Create Player
            </Link>
          </div>
        </div>
        <div className='flex '>
          <div className='table-container'>
            <table className='stats-table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Weight</th>
                  <th>Type of Sport</th>
                  <th>Club</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => {
                  const {
                    first_name,
                    last_name,
                    date_of_birth,
                    gender,
                    weight,
                    type_of_sport,
                    //club_id,
                    position,
                  } = player;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{first_name}</td>
                      <td>{last_name}</td>
                      <td>{date_of_birth}</td>
                      <td>{gender}</td>
                      <td>{weight}</td>
                      <td>{type_of_sport}</td>
                      <td>{'Fusion'}</td>
                      <td>{position}</td>
                      <td>
                        <span className='mr-2'>
                          <Link
                            href={{
                              pathname: `/players/${index + 1}`,
                              query: player,
                            }}
                            className=''
                          >
                            View
                          </Link>
                        </span>
                        {/* <span className='mr-2'>Edit</span>
                                      <span className='mr-2'>Delete</span> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* <Link href='/tournaments' className='button'>
        Register Players
      </Link>
      <Link href='/tournaments' className='button'>
        Tournament Structure
      </Link>
      <Link href='/tournaments' className='button'>
        Tournament Table
      </Link> */}
      </div>
    </>
  );
};

export default TournamentsPage;
