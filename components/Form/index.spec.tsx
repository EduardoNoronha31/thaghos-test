import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Form } from './index';

describe('<Form />', () => {
  it('should render a form', () => {
    render(<Form />);

    expect(screen.getByText('Fill the form')).toBeInTheDocument();
  });
  it('should render a button in form', () => {
    render(<Form />);
    const button = screen.getByText('Send');

    expect(button).toHaveStyle({
      width: '10rem',
    });
  });
});
