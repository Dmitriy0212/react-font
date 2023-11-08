import React, { useState } from 'react';
import axios from 'axios';
import classes from "./Addpost.module.css";

const Addpost = () => {
    const [data, setData] = useState({
        postTitle: '',
        postPhotoUrl: '',
        postDescription: '',
        postTegs: '',
        postyearCreat: '',
        genre: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            postTitle: data.postTitle,
            postPhotoUrl: data.postPhotoUrl,
            postDescription: data.postDescription,
            postTegs: data.postTegs,
            postyearCreat: data.postyearCreat,
            genre: data.genre
        };
        axios.post("https://178.20.153.133:4444/add", userData).then((response) => {
            console.log(response.status, response.data);
        });
    };
    return (
        <>
            <div className={classes.content}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.input} type="text" name="postTitle" value={data.postTitle} onChange={handleChange} placeholder='Введите название тайтла' />
                    <input className={classes.input} type="text" name="postPhotoUrl" value={data.postPhotoUrl} onChange={handleChange} placeholder='Ссылка на картинку' />
                    <textarea className={classes.input} type="text" name="postDescription" cols="30" rows="10" value={data.postDescription} onChange={handleChange} placeholder='Описание' ></textarea>
                    <input className={classes.input} type="text" name="postyearCreat" value={data.postyearCreat} onChange={handleChange} placeholder='Год выхода' />
                    <input className={classes.input} type="text" name="postTegs" value={data.postTegs} onChange={handleChange} placeholder='Теги' />
                    <input className={classes.input} type="text" name="genre" value={data.genre} onChange={handleChange} placeholder='Жанр' />
                    <button className={classes.input} type="submit">Добавить пост</button>
                </form>
            </div>
        </>
    );
};
export default Addpost;