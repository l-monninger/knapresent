import Color from 'color';
import React, {FC, ReactElement} from 'react';
import { useState } from 'react';
import {Button as BButton, ButtonProps as BButtonProps} from "react-bootstrap";

export type ButtonProps = BButtonProps & {
    color : React.CSSProperties["color"],
}

export const Button : FC<ButtonProps>  = (props) =>{

    const [isHovered, setHovered] = useState(false);

    const handleMouseOver = ()=>{
        setHovered(true);
    }

    const handleMouseOut = ()=>{
        setHovered(false);
    }

    const lightenedColor = Color(props.color).lighten(.2).hex();
    const darkenedColor = Color(props.color).darken(.2).hex();

    return (

        <BButton {...props} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
            background : isHovered ? lightenedColor : props.color,
            border : isHovered ? `1px solid ${darkenedColor}` : `1px solid ${lightenedColor}`
        }}>
            {props.children}
        </BButton>

    )

}