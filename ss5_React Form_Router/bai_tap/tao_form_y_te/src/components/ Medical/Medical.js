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
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import {useFormik} from "formik";
import * as Yup from 'yup';


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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const MedicalSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('yêu cầu nhập họ và '),
    passport: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(' yêu cầu nhập '),
    age: Yup.number()
        .min(1991, '> 1990')
        .required('yêu cầu nhập năm sinh'),
    nationality: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(' yêu cầu nhập quốc tịch'),
    company: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(' yêu cầu nhập công ty làm việc'),
    part: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    province: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(' yêu cầu nhập bộ phận làm việc'),
    district: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('yêu cầu nhập tỉnh thành'),
    ward: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(' yêu cầu nhập quận/huyện'),
    home: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(' yêu cầu nhập phường/xã'),
    numberPhone: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('yêu cầu nhập số nhà'),
    email: Yup.string().email('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\\\.[a-zA-Z0-9-.]+$\'').required(' yêu cầu nhập email'),
});

export default function Medical() {

 const formMedical = useFormik({
     initialValues:{
         name:"",
         passport:"",
         age:"",
         nationality:"",
         company:"",
         part:"",
         province:"",
         district:"",
         ward:"",
         home:"",
         numberPhone:"",
         email:"",
         // gender_male:"",
         // gender_female:""
     },
     onSubmit: values => {
         alert(JSON.stringify(values, null, 2));
     },

     validationSchema: MedicalSchema,
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
                        Tờ khai y tế
                    </Typography>
                    <Box component="form" onSubmit={formMedical.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Họ và tên"
                            name="name"
                            autoComplete="name"
                            value={formMedical.values.name}
                            onChange={formMedical.handleChange}
                            autoFocus
                            error={formMedical.touched && formMedical.errors.name}
                            helperText={formMedical.touched && formMedical.errors.name}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passport"
                            label="Số hộ chiếu/CCCD"
                            autoComplete="passport"
                            value={formMedical.values.passport}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.passport}
                            helperText={formMedical.touched && formMedical.errors.passport}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="age"
                            label="Năm sinh"
                            autoComplete="age"
                            value={formMedical.values.age}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.age}
                            helperText={formMedical.touched && formMedical.errors.age}
                        />
                        <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel name="gender_male"  control={<Radio name="gender"/>} label="Nam" />
                            <FormControlLabel name="gender_female" control={<Radio name="gender"/>} label="Nữ" />

                        </RadioGroup>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="nationality"
                            label="Quốc tịch"
                            autoComplete="nationality"
                            value={formMedical.values.nationality}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.nationality}
                            helperText={formMedical.touched && formMedical.errors.nationality}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="company"
                            label="Công ty làm việc"
                            autoComplete="company"
                            value={formMedical.values.company}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.company}
                            helperText={formMedical.touched && formMedical.errors.company}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="part"
                            label="Bộ phận làm việc"
                            autoComplete="part"
                            value={formMedical.values.part}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.part}
                            helperText={formMedical.touched && formMedical.errors.part}
                        />
                        <FormGroup>
                            có thẻ bảo hiểm y tế
                            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                        </FormGroup>
                        <strong>Địa chỉ liên lạc tại việt Nam</strong>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="province"
                            label="Tỉnh thành"
                            autoComplete="province"
                            value={formMedical.values.province}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.province}
                            helperText={formMedical.touched && formMedical.errors.province}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="district"
                            label="Quận/Huyện"
                            autoComplete="district"
                            value={formMedical.values.district}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.district}
                            helperText={formMedical.touched && formMedical.errors.district}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="ward"
                            label="Phường/Xã"
                            autoComplete="ward"
                            value={formMedical.values.ward}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.ward}
                            helperText={formMedical.touched && formMedical.errors.ward}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="home"
                            label="Số nhà,phố,tổ dân phố/thôn/đội"
                            autoComplete="home"
                            value={formMedical.values.home}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.home}
                            helperText={formMedical.touched && formMedical.errors.home}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="numberPhone"
                            label="Số điện thoại"
                            autoComplete="numberPhone"
                            value={formMedical.values.numberPhone}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.numberPhone}
                            helperText={formMedical.touched && formMedical.errors.numberPhone}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            autoComplete="email"
                            value={formMedical.values.email}
                            onChange={formMedical.handleChange}
                            error={formMedical.touched && formMedical.errors.email}
                            helperText={formMedical.touched && formMedical.errors.email}
                        />
                            <h2>Trong vòng 14 ngày qua ,Anh/chị có đến quốc gia/vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</h2>
                            <textarea></textarea>

                        <h2>Trong vòng 14 ngày qua ,Anh/chị có xuất hiện dấu hiệu nào sau đây không</h2>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sốt" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Ho" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Khó thở" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Viêm phổi" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Đau họng" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Mệt mỏi" />
                        </FormGroup>
                        <h2>Trong vòng 14 ngày qua ,Anh/chị có tiếp xúc với</h2>
                        <FormControlLabel control={<Checkbox defaultChecked />} label=" Người bệnh nặng hoặc nghi ngờ, mắc bệnh COVID-19" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label=" Người từ nước bệnh COVID-19" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label=" Người có biểu hiện ( sốt, ho, khó thở, viêm phổi)" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                           Submit
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}