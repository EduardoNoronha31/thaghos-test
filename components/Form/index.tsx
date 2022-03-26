import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';
import FormLoading from '../FormLoading/index';

export type SignUp = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
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
  const formik = useFormik<SignUp>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
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
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          mb: '2rem',
          mt: '2rem',
          width: '80vw',
        }}
      >
        <Typography variant="h6" sx={{ color: '#01526d', mt: 2 }}>
          Fill the form
        </Typography>
        <TextField
          name="name"
          label="Name"
          autoFocus
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{
            marginX: '1rem',
            width: '50vw',
          }}
        />
        <TextField
          name="email"
          label="Email"
          margin="normal"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{
            marginX: '1rem',
            width: '50vw',
          }}
        />
        <TextField
          name="password"
          label="Password"
          margin="normal"
          type="password"
          value={formik.values.password}
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
          onClick={() => formik.handleSubmit()}
          sx={{
            mt: '.4rem',
            width: '10rem',
          }}
        >
          Send
        </Button>
        {isLoadingForm ? <FormLoading /> : false}
        <img src="backgroundForm.svg" alt="Background Form" width="300" />
      </Paper>
    </Box>
  );
};

export default Form;
