import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { asyncHello } from "../reducers/action";
import reducer from '../reducers/redux'

const MainPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(asyncHello());
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div className='app-container'>
            {loading ? <p>Загрузка</p> : <p className='container'>{JSON.stringify(data)}</p>}
        </div>
    );
};

export default MainPage;