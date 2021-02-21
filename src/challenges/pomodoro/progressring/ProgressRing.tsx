import { useSelector } from 'react-redux';
import { selectSettings } from '../settings/settingsSlice';
import './ProgressRing.scss';

function ProgressRing(props: any) {
    const { radius, stroke, progress } = props;
    const normalizedRadius = (radius - stroke * 2);
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100 * circumference);
    const colors: any = {red: '#F87070', blue: '#70F3F8', purple: '#D881F8'};
    const settings = useSelector(selectSettings);

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke={colors[settings.color]}
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