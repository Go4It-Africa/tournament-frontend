import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CreateClubPage from '../app/(pages)/(dashboard)/clubs/create';

describe('Create Club Page', () => {
  it('renders a heading', () => {
    render(<CreateClubPage />);

    const heading = screen.getByRole('heading', {
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });
});
