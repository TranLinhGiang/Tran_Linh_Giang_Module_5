import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useFormik} from "formik";
import * as Yup from 'yup';
import "./SignUp.css"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const defaultTheme = createTheme();
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$').required('Required'),
    message: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


export default function SignUp() {
    const formSignUp= useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            message:""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contact form
                    </Typography>
                    <Box component="form" noValidate onSubmit={formSignUp.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    value={formSignUp.values.name}
                                    onChange={formSignUp.handleChange}
                                    label="Name"
                                    autoFocus
                                    error={formSignUp.touched && formSignUp.errors.name}
                                    helperText={formSignUp.touched && formSignUp.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={formSignUp.values.email}
                                    onChange={formSignUp.handleChange}
                                    label="email"
                                    name="email"
                                    autoComplete="family-name"
                                    error={formSignUp.touched && formSignUp.errors.email}
                                    helperText={formSignUp.touched && formSignUp.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={formSignUp.values.phone}
                                    onChange={formSignUp.handleChange}
                                    label="Phone "
                                    name="phone"
                                    autoComplete="phone"
                                    error={formSignUp.touched && formSignUp.errors.phone}
                                    helperText={formSignUp.touched && formSignUp.errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <textarea
                                    required
                                    fullWidth
                                    name="message"
                                    label="Message"
                                    type="text"
                                    value={formSignUp.values.message}
                                    onChange={formSignUp.handleChange}
                                    autoComplete="new-password"
                                    placeholder={"Message"}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Tôi muốn nhận được nguồn cảm hứng, khuyến mãi tiếp thị và cập nhật qua email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                           Submit
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}