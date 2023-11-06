import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className={classes.myconteiner}>
            <header className={classes.header}>
                <Link className={classes.myLink} to="/">Основная страница</Link>
                <Link className={classes.myLink} to="/addpost">Добавить пост</Link>
            </header>
        </div>
    );
}

export default Header;
