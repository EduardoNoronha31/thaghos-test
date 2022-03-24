import { useState } from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { FormLoading } from '../FormLoading/index';

export type SignUp = {
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

  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false);
  const router = useRouter();

  const validationSchema = yup.object({
    name: yup.string().required('Name is required.'),
    email: yup
      .string()
      .email('Enter a valid email.')
      .required('Email is required.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoadingForm(true);
      setTimeout(() => {
        localStorage.setItem('signUp', JSON.stringify(values));
        setIsLoadingForm(false);
        router.push('/recorded-data');
      }, 3000);
    },
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper
          elevation={6}
          sx={{
            width: '80vw',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '2rem',
          }}
        >
          <Typography variant="h6" mt={2} color="#01526d">
            Fill the form
          </Typography>
          <TextField
            id="name"
            name="name"
            label="Name"
            autoFocus
            margin="normal"
            defaultValue={formik.initialValues.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              marginX: '1rem',
              width: '50vw',
            }}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            margin="normal"
            type="email"
            defaultValue={formik.initialValues.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              marginX: '1rem',
              width: '50vw',
            }}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            margin="normal"
            type="password"
            defaultValue={formik.initialValues.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{
              marginX: '1rem',
              width: '50vw',
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              width: '10rem',
              mt: '.4rem',
            }}
          >
            Send
          </Button>
          {isLoadingForm ? <FormLoading /> : false}
          <img src="backgroundLogin.svg" alt="Background Login" width="300" />
        </Paper>
      </form>
    </Box>
  );
};
