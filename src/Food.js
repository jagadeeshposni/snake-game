import React from 'react'

export default (props) => {

    const foodStyle = {
        left : `${props.foodDot[0]}%`,
        top : `${props.foodDot[1]}%`
    }
    return (
        <div className='snake-food' style={foodStyle}></div>
    )
}