import { TextField } from '@mui/material';

type HandleInputProps = {
  title: string;
  onChange?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const HandleInput = ({ title, onChange }: HandleInputProps) => {
  return (
    <TextField
      fullWidth={true}
      label={title}
      id="outlined-basic"
      variant="outlined"
      sx={{ mt: 1.5 }}
      required
      onChange={() => {
        onChange;
      }}
    />
  );
};
