import React from 'react';
import classes from "./Post.module.css";

const Loadpost = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <div style={{
        widows: "100%", height: "300px", border: "solid 1px #5b47ab",
        borderRadius: "5px",
        margin: "10px",
        boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996"
    }}></div>;
    return (
        <>
            <div className={classes.postsContent}>
                <div className={classes.postsPrevu}>
                    <h3>
                        {repos.postTitle}
                    </h3>
                    <img style={{ borderRadius: "10px" }} src={repos.postPhotoUrl} alt="" />
                </div>
                <div className={classes.postsPrevu}>
                    <div className={classes.postsDescription}>{repos.postDescription}</div>
                    <p>{repos.yearCreat}</p>
                    <div>Теги {repos.tegs === '' || repos.tegs.length === 0 ? <span></span> : repos.tegs.map((item, index) => { return (<span key={index} style={{ margin: 3 + 'px' }}>{item}</span>) })}</div>
                    <div>Жанр {repos.genre === '' || repos.genre.length === 0 ? <span></span> : repos.genre.map((item, index) => { return (<span key={index} style={{ margin: 3 + 'px' }}>{item}</span>) })}</div>
                </div>
            </div>
        </>
    );
};
export default Loadpost;