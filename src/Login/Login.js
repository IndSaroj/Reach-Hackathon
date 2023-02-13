import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import axios from 'axios';
import * as yup from 'yup'

export default function Login() {

    const nav = useNavigate();
    const [err, setErr] = useState('')
    const [open, setOpen] = useState(false);
    const handleclose = () => {
        setOpen(false)
        nav('/Paymentwallet')
        return;
    }
    const action = (
        <React.Fragment>
            <IconButton size='small' color='inherit' onClick={handleclose}>
                <CloseIcon></CloseIcon>
            </IconButton>
        </React.Fragment>
    )



    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            axios.get(`http://localhost:3001/users?email=${values.email}`)
                .then(obj => {
                    console.log(obj);
                    console.log(obj.data.length)
                    if (obj.data.length === 0) {
                        alert('user Id does not exist')
                    } else {
                        console.log("Password stored in the DB: " + obj.data[0].password);
                        console.log("Password entered by the user: " + values.password);

                        if (obj.data[0].password === values.password) {
                            // alert('User successfully logged in')
                            setOpen(true);
                            sessionStorage.setItem('token', obj.data[0].email)
                            console.log(sessionStorage.getItem('token'));
                            // nav('/dashboard')
                        } else {
                            alert('Invalid Userid/password')
                        }
                    }
                })
                .catch(error => setErr(error.message))
        },

        validationSchema: yup.object().shape({
            email: yup.string().email('Enter the valid Email Id').required('The field cannot be left empty'),
            password: yup.string().required('Password cannot be left blank')
        })


    })

    return (
        <div className='container mt-5 align-item-center col-4 shadow p-3 mb-5 bg-body'>
            <div className='align-item-center' >
                
                    <div className="text-light mt-2 py-1 rounded text-center" style={{ backgroundColor: "#42145F" }}>
                        <h2>Login</h2>
                        {
                            err !== '' ? <span className="text-center alert alert-danger">{err}</span> : <span></span>
                        }

                    </div>
               
                <form onSubmit={formik.handleSubmit} className='mt-2'>
                    <div className="row">
                        <div className="col text-center mt-2 mb-2">
                            {
                                formik.errors.email && formik.touched.email ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='email' id="email" error
                                        label="E-mail*"
                                        helperText={formik.errors.email} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' id="email" label="Enter your E-mail*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='email'/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mt-2 mb-2">
                            {
                                formik.errors.password && formik.touched.password ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='password' id="password" error
                                        label="Password*"
                                        helperText={formik.errors.password} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' id="password" label="Enter your Password*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='password' />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className='className="col text-center mb-2' >
                            <Button type='submit' variant="contained" style={{ backgroundColor: "#086978" }}> Continue</Button>
                        </div>
                    </div>


                </form>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleclose}
                    message="Login Successfull"
                    action={action}
                />
            </div>
        </div>
    )
}
