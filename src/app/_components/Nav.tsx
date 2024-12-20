import { signIn, signOut } from 'next-auth/react';

interface NavProps {
  title: string;
  href: string;
}

const NavItem: React.FC<NavProps> = ({ title, href }) => {
  return (
    <li className='mx-3'>
      <a href={href}>{title}</a>
    </li>
  );
};

const items = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'Club',
    href: '/club',
  },
  {
    title: 'Players',
    href: '/players',
  },
  {
    title: 'Schedule',
    href: '/schedule',
  },
  {
    title: 'Tournaments',
    href: '/tournaments',
  },
];

const Nav = ({ session }: any) => {
  console.log('THE SESSION', session);
  return (
    <nav className='w-full mt-[1.25rem]'>
      <ul className='flex justify-center'>
        {items.map((item: NavProps) => {
          const { title, href } = item;

          return (
            <NavItem
              key={title}
              title={title}
              href={`/${href.toLowerCase()}`}
            />
          );
        })}
        {session && (
          <li className='mx-3'>
            {session.user.email}
            <a
              onClick={() => {
                signOut({ callbackUrl: '/' });
              }}
            >
              Logout
            </a>
          </li>
        )}
        {!session && (
          <li onClick={() => signIn('keycloak')} className='mx-3'>
            Log In
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
