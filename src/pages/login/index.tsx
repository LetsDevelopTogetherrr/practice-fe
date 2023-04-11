import { Button, Container, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from "formik";
import Image from 'next/image';

export default function Login() {
    const router = useRouter();

    // token을 가져왔을 떄 LocalStorage에 저장.

    // 새로고침했을 때 localStorage to atom(token)


    const RegisterSchema = Yup.object().shape({
        email: Yup.string().email('이메일 형식으로 입력해주세요.').required('필수항목 이예요.'),
        password: Yup.string().min(8, '너무 짧아요.').required('필수항목 이예요.'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: async (values) => {
            console.log(values);
            // BE 와 통신하기

            router.push('/');
        },
    });

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: '100px',
                    marginBottom: '80px',
                    textAlign: 'center',
                }}>
                <a href="/">
                    {/* <Image src={Logo}
                        alt='Traveler'
                        width={200}
                        height={200}
                    /> */}
                    <Box sx={{
                        width: 200,
                        height: 200
                    }} />
                </a>
            </Box>

            <Stack
                spacing={2}
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px'
                }}
                noValidate
                autoComplete='off'
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    id='outlined-basic'
                    variant='outlined'
                    label='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    id='outlined-basic'
                    variant='outlined'
                    label='password'
                    name='password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.password && formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    type='submit'
                    variant='contained'
                >
                    Login
                </Button>
            </Stack>
        </Container>
    )
}
