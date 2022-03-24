import { render, screen } from '@testing-library/react';
import { Register } from './index';

describe('<Register />', () => {
  it('should render a text in register component', () => {
    render(<Register />);
    expect(screen.getByText('Closer, Faster and Safer.')).toBeInTheDocument();
  });

  it('should render a button in register component', () => {
    render(<Register />);
    const button = screen.getByText('Register');
    expect(button).toHaveStyle({
      width: '6rem',
    });
  });
});
