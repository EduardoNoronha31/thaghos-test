import { Button } from '@mui/material';

type PropsButton = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const HandleButton = ({ title, onClick }: PropsButton) => {
  return (
    <Button component={Button} onClick={onClick}>
      {title}
    </Button>
  );
};
