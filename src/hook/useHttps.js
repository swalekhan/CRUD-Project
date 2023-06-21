import { useCallback, useState } from 'react';
import axios from 'axios';

const initialUrl = "https://dummyapi-68e6f-default-rtdb.firebaseio.com/cards"
const useHttps = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = (await axios.get(`${initialUrl}.json`)).data;
            let arr = []
            for (let key in response) {
                arr.push({ ...response[key], id: key })
            }
            setData(arr);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const createData = async (payload) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${initialUrl}.json`, payload);
            setData((prevData) => [...prevData, response.data]);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateData = async (payload) => {
        setIsLoading(false);
        try {
            const response = (await axios.put(`${initialUrl}/${payload.id}.json`, payload)).data;
            setData(response)
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteData = async (id) => {
        setIsLoading(false);
        try {
            await axios.delete(`${initialUrl}/${id}.json`);
            setData((prevData) => prevData.filter((item) => item.id !== id));
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, fetchData, createData, updateData, deleteData };
};

export default useHttps;
