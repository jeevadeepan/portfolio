import React, { useState } from 'react';
import './ProgressRing.scss';

function ProgressRing(props: any) {
    const { radius, stroke, progress } = props;
    const normalizedRadius = (radius - stroke * 2);
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100 * circumference);

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke="#F87070"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                strokeLinecap="round"
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    );
}

export default ProgressRing;