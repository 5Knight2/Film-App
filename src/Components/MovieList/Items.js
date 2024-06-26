import React from "react";
import classes from './Items.module.css';
import {Link} from 'react-router-dom'
import { Button } from "react-bootstrap";

const Items = (props) => {
    console.log("executed")
    const deleteId=(e)=>{
        console.log(e.target.parentElement.id)
        props.delete(e.target.parentElement.id)
    }
    const List = props.movies.map((c) => {
        return (
            <div className={classes.box1} id={c.id} key={c.id}>
                <Link to={'/home/:'+c.id} className={classes.title}><h4>{c.title}</h4>
                </Link>
                <br />
                <h5>{c.releaseDate}</h5>
                <p>{c.openingText}</p>
                <Button variant="danger" onClick={deleteId}>Delete</Button>
            </div>
        );
    });
    return (
        <React.Fragment >
            {List}
        </React.Fragment>
    );
}

export default React.memo(Items);
