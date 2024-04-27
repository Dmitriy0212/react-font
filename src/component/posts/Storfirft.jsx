import axios from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

const Storfirft = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const apiUrl = 'https://powerful-tor-29400-3b2373853766.herokuapp.com/';
        axios.get(apiUrl).then((repos) => {
            debugger
            dispatch({ type: "ADDDATA", data: repos.data })
        });
    }, [dispatch]);
}
export default Storfirft;