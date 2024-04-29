import axios from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import Url from "../url/Url.js";

const Storfirft = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const apiUrl = Url;
        debugger
        axios.get(apiUrl).then((repos) => {
            debugger
            dispatch({ type: "ADDDATA", data: repos.data })
        });
    }, [dispatch],[Url]);
}
export default Storfirft;