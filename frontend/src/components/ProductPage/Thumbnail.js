import React, {Component} from 'react'


const Thumbnail = props => {

    return(
        <span className="thumb">
            <img style={{width: "100px", height: "100px"}} src={props.src}/>
        </span>
    )

}
export default Thumbnail
