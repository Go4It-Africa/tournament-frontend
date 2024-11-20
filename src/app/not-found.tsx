// 'use client';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return home</Link>
    </div>
  );
};

export default NotFound;
