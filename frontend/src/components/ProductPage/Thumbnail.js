import React, {Component} from 'react'


const Thumbnail = props => {

    return(
        <div className="thumb">
            <img src={props.src} />
        </div>
    )

}
export default Thumbnail
