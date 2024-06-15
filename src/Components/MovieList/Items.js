import React from "react";
import classes from './Items.module.css';

const Items = (props) => {
    console.log("executed")
    const List = props.movies.map((c) => {
        return (
            <div className={classes.box1} id={c.id} key={c.id}>
                <h4>{c.title}</h4>
                <br />
                <h5>{c.releaseDate}</h5>
                <p>{c.openingText}</p>
            </div>
        );
    });
    return (
        <React.Fragment>
            {List}
        </React.Fragment>
    );
}

export default React.memo(Items);
