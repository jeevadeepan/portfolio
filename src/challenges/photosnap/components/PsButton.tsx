import React from 'react';
import Arrow from './Arrow';
// import { ReactComponent as Arrow } from '../assets/img/btn-arrow.svg';
export default function PsButton(props: any) {
    let cssClass = 'ps-btn ps-btn-' + props.type;
    if(props.light) {
        cssClass += '-light';
    }
    return (
        <span>
            <button className={cssClass}>{props.text}</button>
            {props.type === 'secondary' && <Arrow color={props.light ? 'white': 'black'} />}
        </span>    
    );
}