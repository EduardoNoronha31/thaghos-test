import { render, screen } from '@testing-library/react';
import Header from './index';

describe('<Header />', () => {
  it('should render a header home link', () => {
    render(<Header />);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveStyle({
      color: '#fff',
    });
  });
});
