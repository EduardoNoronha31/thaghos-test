import { render, screen } from '@testing-library/react';
import { FormLoading } from './index';

describe('<FormLoading />', () => {
  it('should render a form loading', () => {
    render(<FormLoading />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
