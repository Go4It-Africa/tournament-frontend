'use client';
// import { useSearchParams } from 'next/navigation';
import RadialChart from 'app/_compnents/RadialChart';

import dynamic from 'next/dynamic';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ViewPlayer = (url: never) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const searchParams = useSearchParams();
  const average_distance_km = searchParams.get('average_distance_km');
  const distance_per_minute = searchParams.get('distance_per_minute');
  const energy_exerted_kcal = searchParams.get('energy_exerted_kcal');
  const top_speed = searchParams.get('top_speed');
  const weight = searchParams.get('weight');
  const work_ratio = searchParams.get('work_ratio');
  const nationality = searchParams.get('nationality');
  const club_id = searchParams.get('club_id');
  const date_of_birth = searchParams.get('date_of_birth');
  const first_name = searchParams.get('first_name');
  const gender = searchParams.get('gender');
  const last_name = searchParams.get('last_name');
  const position = searchParams.get('position');
  const type_of_sport = searchParams.get('type_of_sport');

  //const player = url['searchParams'];

  // const {
  //   average_distance_km,
  //   distance_per_minute,
  //   energy_exerted_kcal,
  //   //max_acceleration,
  //   //max_deceleration,
  //   top_speed,
  //   weight,
  //   work_ratio,
  //   nationality,
  //   club_id,
  //   //country,
  //   date_of_birth,
  //   first_name,
  //   gender,
  //   last_name,
  //   position,
  //   //type_of_sport,
  // } = player;

  //const age = Date.now() - date_of_birth;

  return (
    <>
      <div>
        <div className='player-card'>
          <div className='player-header'>
            <div className='role-badge'>{position}</div>
            <Image
              src='/user.png'
              width={500}
              height={500}
              alt='Player name'
              className='mt-[3.125rem]'
            />
            <div className='player-details'>
              <h3>
                {first_name} {last_name}
              </h3>
              <p>{club_id}</p>
            </div>
          </div>
          <div className='stats'>
            <div className='stats-container'>
              <div className='stat-item'>
                <h4>Age</h4>
                <p>{date_of_birth}</p>
              </div>
              <div className='stat-item'>
                <h4>Gender</h4>
                <p>{gender}</p>
              </div>
              <div className='stat-item'>
                <h4>Nationality</h4>
                <p>{nationality}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-left my-[1.25rem]'>Recent Trainings</h3>
        </div>
        {average_distance_km && (
          <div className='table-container'>
            <table className='stats-table'>
              <thead>
                <tr>
                  <th className='sticky'>Type</th>
                  <th>Average Distance (km)</th>
                  <th>Top Speed (km/h)</th>
                  <th>Weight (kg)</th>
                  <th>Distance Per Minute</th>
                  <th>Work Ratio</th>
                  <th>Energy Exerted (kcal)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='team sticky'>Game (90 mins)</td>
                  <td>{average_distance_km}</td>
                  <td>{top_speed}</td>
                  <td>{weight}</td>
                  <td>{energy_exerted_kcal}</td>
                  <td>{distance_per_minute}</td>
                  <td>{work_ratio}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {!average_distance_km && (
          <div className='text-left'>
            <p>No recent trainings found for this player.</p>
          </div>
        )}

        {isClient && <RadialChart />}

        <Link href='/players' className='button'>
          <button>Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default ViewPlayer;
