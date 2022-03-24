import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('<Header />', () => {
  it('should render a header home button', () => {
    render(<Header />);
    const homeButton = screen.getByText('Home');

    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveStyle({
      color: '#fff',
    });
  });
});
