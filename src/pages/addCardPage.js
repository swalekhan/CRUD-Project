import React from 'react';
import { useFormik } from 'formik';
import { formValidation, intialState } from '../utils';
import useHttps from '../hook/useHttps';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
       // Use custom hook to access createData function......
    const { createData } = useHttps()
    const navigate = useNavigate()

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
         // Set initial form values and validation schema
        initialValues: intialState,
        validationSchema: formValidation,

        onSubmit: async( data )=> {
             // Call createData function from the custom hook with the form data
            await createData(data)
          
            navigate('/')
        },
    });


    return (
        <section className='card_form'>
            <div className="container">
                <div className="text"> Add Card </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name='firstName' id='firstName' required onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                            <div className="underline"></div>
                            <label htmlFor="firstName">First Name</label>
                            <p className='error'>{touched.firstName && errors.firstName}</p>
                        </div>
                        <div className="input-data">
                            <input type="text" name='lastName' id='lastName' required onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                            <div className="underline"></div>
                            <label htmlFor="lastName">Last Name</label>
                            <p className='error'>{touched.lastName && errors.lastName}</p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name='email' id='email' required onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            <div className="underline"></div>
                            <label htmlFor="email">Email Address</label>
                            <p className='error'>{touched.email && errors.email}</p>
                        </div>
                        <div className="input-data">
                            <input type="number" name='phone' id='phone' required onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                            <div className="underline"></div>
                            <label htmlFor="phone">Phone No.</label>
                            <p className='error'>{touched.phone && errors.phone}</p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" name='address' id='address' required onChange={handleChange} onBlur={handleBlur} value={values.address}></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="address">Write your address</label>
                            <p className='error'>{touched.address && errors.address}</p>
                            <br />
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="submit" />
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}
export default AddCard