import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';
import withListLoading from './WithListLoading';

const Posts = () => {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'https://178.20.153.133:8080/';
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({ loading: false, repos: allRepos });
        });
    }, [setAppState]);
    return (
        <>
            <div style={{ maxWidth: "800px", minWidth: "375px", marginLeft: "auto", marginRight: "auto" }}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </div>
        </>
    );
};
export default Posts;