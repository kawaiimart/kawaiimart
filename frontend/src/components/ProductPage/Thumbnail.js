import React, {Component} from 'react'


const Thumbnail = props => {

    return(
        <span className="thumb">
            <img src={props.src} />
        </span>
    )

}
export default Thumbnail
