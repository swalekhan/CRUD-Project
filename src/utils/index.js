import * as Yup from 'yup';

export const formValidation = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    phone: Yup.string()
        .min(10, 'Must be 10 characters')
        .required('Required'),
    address: Yup.string()
        .required('Required'),
})

export const intialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
};