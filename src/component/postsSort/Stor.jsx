import axios from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

const Stor = (props) => {
    const { teg } = props;
    const { url } = props
    const dispatch = useDispatch()
    useEffect(() => {
        const apiUrl = `https://powerful-tor-29400-3b2373853766.herokuapp.com/${url}?teg=${teg}`;
        axios.get(apiUrl).then((repos) => {
            dispatch({ type: "ADDDATA", data: repos.data })
        });
    }, [dispatch, teg, url]);
}
export default Stor;