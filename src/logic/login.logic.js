// loginLogic.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import rescuelink_api from '../api';

const useLogin = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        rescuelink_api.post('/login', formData)
            .then(response => {
                // Store token to local storage
                const token = response.data.token;
                const user_dept = response.data.user_dept;
                const user_id = response.data.user_id;
                localStorage.setItem('jwt_token', token);
                localStorage.setItem('user_dept', user_dept);
                localStorage.setItem('ID', user_id);
                window.location.reload();
            })
            .catch(error => {
                toast.error('Incorrect ID or Password');
                setIsLoading(false);
            }); 
    };

    return { formData, isLoading, handleChange, handleSubmit };
};

export default useLogin;