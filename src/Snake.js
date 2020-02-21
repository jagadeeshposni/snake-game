import React from 'react';
import { render } from '@testing-library/react';

export default (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => {
                const snakeDotStyle = {
                    left     :   `${dot[0]}%`,
                    top    :   `${dot[1]}%`
                }
                return(
                    <div className="snake-dot" key={i} style={snakeDotStyle}></div>
                )
            })}         


        </div>
    )

}