import React, {useState} from "react";


const ColorsCant = (props) => {
    const [visibleLabel, setVisibleLabel] = useState(false);

    const {className, title, name, checkedColor} = props;

    function trueHover() {
        setVisibleLabel(true)
    }

    function falseHover() {
        setVisibleLabel(false)
    }

    return (
        <div
            name={name}
            className={className}
            onMouseEnter={trueHover}
            onMouseLeave={falseHover}
            onClick={checkedColor}>
            {visibleLabel &&
                <div className="labelInfo">
                    <p>{title}</p>
                </div>
            }
        </div>
    )
}

export default ColorsCant;