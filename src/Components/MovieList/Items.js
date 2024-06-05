import React from "react";

const Items =(props)=>{
    console.log("executed")
    const List=props.movies.map((c)=>{return <h4>{c}</h4>})
    return(
        <React.Fragment>
            {List}
        </React.Fragment>
    )
}

export default React.memo(Items);