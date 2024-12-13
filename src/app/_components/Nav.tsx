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

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
