import type { NextPage } from 'next';
import type { SignUp } from '../components/Form/index';

const Login: NextPage = () => {
  const signUpData = localStorage.getItem('signUp');
  const signUpFormated: SignUp = JSON.parse(signUpData as string);
  return (
    <>
      <h1>{signUpFormated.name}</h1>
      <h1>{signUpFormated.email}</h1>
      <h1>{signUpFormated.password}</h1>
    </>
  );
};

export default Login;
