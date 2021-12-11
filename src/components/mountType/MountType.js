import React, {useState} from "react";


const MountType = (props) => {
    const {title, imgSrc, checkedMount, name, className} = props;


    return (
        <div
            onClick={checkedMount}
            name={name}
            className={className}>
            <img
                src={imgSrc}
                alt={title}/>


            <div className="labelInfo">
                <p>{title}</p>
            </div>



        </div>
    )
}

export default MountType;