'use client';

import Nav from '@/components/Nav';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const page = () => {
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status == 'loading') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  return (
    <div className='w-full'>
      {loading && 'loading'}
      {!loading && <Nav session={session} />}
    </div>
  );
};

export default page;
