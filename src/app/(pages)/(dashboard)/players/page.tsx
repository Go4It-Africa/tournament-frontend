import Link from 'next/link';
const TournamentsPage = () => {
  return (
    <>
      <div className='container'>
        <div className='flex justify-between'>
          <h1>View All Players</h1>
          <div>
            <Link href='/players/create' className=''>
              Create Player
            </Link>
          </div>
        </div>
        <div className='flex '>
          <div className='flex justify-between items-center'>
            <table>
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
                <tr>
                  <td className='mr-8'>1</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td className='mr-8'>Go4IT Tournament</td>
                  <td>
                    <span className='mr-2'>
                      <Link href='/players/create' className=''>
                        View
                      </Link>
                    </span>
                    {/* <span className='mr-2'>Edit</span>
                    <span className='mr-2'>Delete</span> */}
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
