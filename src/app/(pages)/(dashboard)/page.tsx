import Link from 'next/link';
//import { Container, Col, Row, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className='container flex justify-center items-center mt-[50%] -translate-y-1/2'>
        {/* <Link href='/tournaments/create' className='button'>
          Register Tournament
        </Link>
        <Link href='/tournaments' className='button'>
          View Tournaments
        </Link> */}
        {/* <Link href='/clubs/create' className='button'>
          Register Club
        </Link>
        <Link href='/players/create' className='button'>
          Register Player
        </Link>
        <Link href='/players' className='button'>
          View Players
        </Link> */}

        <Link href='/signup' className='button'>
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Home;
