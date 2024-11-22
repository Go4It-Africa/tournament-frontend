import Link from 'next/link';
//import { Container, Col, Row, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Link href='/tournaments/create' className='button'>
          Register Tournament
        </Link>
        <Link href='/clubs/create' className='button'>
          Register Club
        </Link>
        <Link href='/tournaments' className='button'>
          View Tournaments
        </Link>
      </div>
    </>
  );
};

export default Home;
