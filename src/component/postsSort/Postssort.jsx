import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';
import withListLoading from './WithListLoading';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Pugin from "../pugintegs/Pugin";
import Stor from "./Stor";

const Postssort = (props) => {
    const { teg } = useParams();
    const { url } = props
    const cash = useSelector(state => state.cash)
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    Stor({ teg, url })
    useEffect(() => {
        if (cash || cash !== null) {
            setAppState({ loading: true });
            let mas = []
            for (let i = 0; i < 2; i++) {
                mas.push(cash[i])
            }
            const allRepos = mas;
            setAppState({ loading: false, repos: allRepos });
        }
    }, [setAppState, cash]);
    return (
        <>
            <div style={{ maxWidth: '800px', minWidth: '375px', marginLeft: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
                <Pugin url={url} teg={teg}/>
            </div>
        </>
    );
};
export default Postssort;