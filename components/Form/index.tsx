import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box, FormControl } from '@mui/material';
import { useState } from 'react';
import { FormLoading } from '../FormLoading/index';
import { useRouter } from 'next/router';

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
        localStorage.setItem("signUp", JSON.stringify(values))
        setIsLoadingForm(false);
        router.push('/login');
      }, 2000);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
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
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        {isLoadingForm ? <FormLoading /> : undefined}
      </form>
    </Box>
  );
};
