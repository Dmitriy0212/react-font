import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Under from "./Under.jsx";

const Header = (props) => {

    return (
        <div className={classes.myconteiner}>
            <header className={classes.header}>
                <Link className={classes.myLink} to="/">Основная страница</Link>
                <Link className={classes.myLink} to="/addpost">Добавить пост</Link>
                <Under name={'Выбот тайтла по тегам'} url={'https://powerful-tor-29400-3b2373853766.herokuapp.com/tegs'} lin={'teg'} />
                <Under name={'Выбот тайтла по годам'} url={'https://powerful-tor-29400-3b2373853766.herokuapp.com/years'} lin={'year'} />
                <Under name={'Выбот тайтла по жанру'} url={'https://powerful-tor-29400-3b2373853766.herokuapp.com/genres'} lin={'genre'} />
            </header>
        </div>
    );
}

export default Header;
