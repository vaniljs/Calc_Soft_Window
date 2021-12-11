import React, {useState} from "react";


const TypeTape = (props) => {
    const {className, title, imgSrc, checkedTape, name} = props;


    return (
        <div
            name={name}
            className={'tapeRadio '}
            onClick={checkedTape}>
                <img
                    src={imgSrc}
                    alt={title}/>
                <div
                    className={className}>
                    <p>{title}</p>
                </div>
        </div>
    )
}

export default TypeTape;