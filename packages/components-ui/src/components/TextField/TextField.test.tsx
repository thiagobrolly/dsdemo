import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { PlOutlineUser } from '@dsdemo/icons';

import { TextField } from '.';

describe('<TextField />', () => {
  it('Render with Label', () => {
    render(<TextField label="Label" name="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  // it('Render without Label', () => {
  //   render(<TextField />);

  //   expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  // });

  // it('Renders with placeholder', () => {
  //   render(<TextField placeholder="hey you" />);

  //   expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  // });

  // it('Renders with Icon', () => {
  //   render(<TextField icon={<PlOutlineUser data-testid="icon" />} />);

  //   expect(screen.getByTestId('icon')).toBeInTheDocument();
  // });

  // it('Renders with Icon on the right side', () => {
  //   render(
  //     <TextField
  //       icon={<PlOutlineUser data-testid="icon" />}
  //       iconPosition="right"
  //     />,
  //   );

  //   expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  // });

  // it('Changes its value when typing', async () => {
  //   const onInput = jest.fn();
  //   render(<TextField onInput={onInput} label="TextField" name="TextField" />);

  //   const input = screen.getByRole('textbox');
  //   const text = 'This is my new text';
  //   userEvent.type(input, text);

  //   await waitFor(() => {
  //     expect(input).toHaveValue(text);
  //     expect(onInput).toHaveBeenCalledTimes(text.length);
  //   });

  //   expect(onInput).toHaveBeenCalledWith(text);
  // });

  // it('Does not changes its value when disabled', async () => {
  //   const onInput = jest.fn();
  //   render(
  //     <TextField
  //       onInput={onInput}
  //       label="TextField"
  //       name="TextField"
  //       disabled
  //     />,
  //   );

  //   const input = screen.getByRole('textbox');
  //   expect(input).toBeDisabled();

  //   const text = 'This is my new text';
  //   userEvent.type(input, text);

  //   await waitFor(() => {
  //     expect(input).not.toHaveValue(text);
  //   });

  //   expect(onInput).not.toHaveBeenCalled();
  // });

  // it('Renders with error', () => {
  //   const { container } = render(
  //     <TextField
  //       label="TextField"
  //       icon={<PlOutlineUser data-testid="icon" />}
  //       error="Error message"
  //     />,
  //   );

  //   expect(screen.getByText('Error message')).toBeInTheDocument();
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it('Is accessible by tab', () => {
  //   render(<TextField label="TextField" name="TextField" />);

  //   const input = screen.getByLabelText('TextField');
  //   expect(document.body).toHaveFocus();

  //   userEvent.tab();
  //   expect(input).toHaveFocus();
  // });

  // it('Is not accessible by tab when disabled', () => {
  //   render(<TextField label="TextField" name="TextField" disabled />);

  //   const input = screen.getByLabelText('TextField');
  //   expect(document.body).toHaveFocus();

  //   userEvent.tab();
  //   expect(input).not.toHaveFocus();
  // });
});
