// Assuming a Next.js app with TypeScript and Tailwind CSS
// Install recharts using `npm install recharts`

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

// Utility function to process raw CSV data
const processData = (data: any[]) => {
  return data.map((player) => ({
    name: player['Player Name'],
    Duration: parseFloat(player['Duration']),
    Distance: parseFloat(player['Distance (km)']),
    DistancePerMinute:
      parseFloat(player['Distance (km)']) /
      (parseFloat(player['Duration']) / 60),
    TopSpeed: parseFloat(player['Max Speed (km/h)']),
    WorkRate:
      parseFloat(player['Sprint Distance (m)']) /
      parseFloat(player['Distance (km)']),
  }));
};

// Sample data (replace with processed data from CSV)
const sampleData = [
  {
    name: 'Player 1',
    Duration: 3809,
    Distance: 3.2,
    DistancePerMinute: 0.5,
    TopSpeed: 28.5,
    WorkRate: 0.05,
  },
  {
    name: 'Player 2',
    Duration: 4084,
    Distance: 3.4,
    DistancePerMinute: 0.5,
    TopSpeed: 30.2,
    WorkRate: 0.08,
  },
  // Add more players...
];

const RadialChart = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={sampleData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey='name' />
        <PolarRadiusAxis />
        <Radar
          name='Metrics'
          dataKey='Distance'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
        <Radar
          name='Metrics'
          dataKey='Duration'
          stroke='#82ca9d'
          fill='#82ca9d'
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default RadialChart;
