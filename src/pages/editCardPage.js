import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { formValidation, intialState } from '../utils';
import { useParams } from 'react-router-dom';
import useHttps from '../hook/useHttps';
import { useNavigate } from 'react-router-dom';

const EditCardPage = () => {
    const { fetchDataById, data, error, isLoading, updateData } = useHttps()
    const { id } = useParams()
    const navigate = useNavigate()

    // Initialize Formik for form management.........................................?
    const { values, setValues, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: intialState,
        validationSchema: formValidation,

        // Handle form submission................................
        onSubmit: async( data )=> {
            // Update data with the provided ID
           await updateData({
                ...data,
                id,
            })

            // Navigate back to the main page
            navigate("/")
        },
    });

    useEffect(() => {
        // Set initial form values using the fetched data 
        const initialValues = {
            firstName: data?.firstName || '',
            lastName: data?.lastName || '',
            email: data?.email || '',
            phone: data?.phone || '',
            address: data?.address || '',
        };
        setValues(initialValues);
    }, [setValues, data]);

    // Fetch data for the specified ID...................................?
    useEffect(() => {
        fetchDataById(`https://dummyapi-68e6f-default-rtdb.firebaseio.com/cards/${id}.json`);
    }, [id, fetchDataById])

    // Display loading state while data is being fetched...................
    if (isLoading) {
        return <div className='loading'>Loading...</div>;
    }

    // Handle error state.............
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className='card_form'>
            <div className="container">
                <div className="text"> Update Card </div>
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

export default EditCardPage;