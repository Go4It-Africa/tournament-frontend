import Link from 'next/link';
const TournamentsPage = () => {
  return (
    <>
      <div className='container'>
        <div className='flex justify-between'>
          <h1>Your Tournaments</h1>
          <div>
            <Link href='/tournaments/create' className='button'>
              Create Tournament
            </Link>
          </div>
        </div>
        <div className='flex '>
          <div className='flex justify-between items-center'>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='mr-8'>1</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td>
                    <span className='mr-2 button'>Edit</span>
                    <span className='mr-2 button'>Delete</span>
                  </td>
                </tr>
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
