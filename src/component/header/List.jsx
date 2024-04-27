import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <div style={{
        widows: "100%", height: "300px", border: "solid 1px #5b47ab",
        borderRadius: "5px",
        margin: "10px",
        boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996"
    }}></div>;
    return (
        <div className={classes.headerToSortVisibl}>
            {repos.map((repo, index) => {
                return (
                    <Link className={classes.myLink} key={index} to={`/${props.lin}/${String(repo)}`}>{repo}</Link>
                );
            })}
        </div>
    );
};
export default List;