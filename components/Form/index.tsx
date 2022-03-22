import { FormControl } from '@mui/material';
import { useState } from 'react';
import { HandleButton } from '../Button';
import { HandleInput } from '../Input';

type SignUp = {
  name: string;
  email: string;
  password: string;
};

export const Form = () => {
  const signUpInitialValues: SignUp = {
    name: '',
    email: '',
    password: '',
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<SignUp>(signUpInitialValues);

  const handleSubmit = (formValues: SignUp) => {
    setTimeout(() => {
      setIsLoading(true);
      setSignUp(formValues);
      console.log(signUp);
    }, 2000);

    setIsLoading(false);
  };
  return (
    <FormControl>
      <HandleInput title="Name" />
      <HandleInput title="Email" />
      <HandleInput title="Password" />
      <HandleButton
        title="Save"
        onClick={() =>
          handleSubmit({
            name: 'Eduardo',
            email: 'eduardo@eduardo.com',
            password: '123123',
          })
        }
      />
      {isLoading ? <div>Loading</div> : false}
    </FormControl>
  );
};
