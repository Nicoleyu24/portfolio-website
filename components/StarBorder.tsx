import React from 'react';
import './StarBorder.css';

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    className?: string;
    color?: string;
    speed?: string;
    thickness?: number;
    innerClassName?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    type?: string;
}

const StarBorder: React.FC<StarBorderProps> = ({
    as: Component = 'button',
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    innerClassName = '',
    style,
    children,
    ...rest
}) => {
    return (
        <Component
            className={`star-border-container ${className}`.trim()}
            style={{
                padding: `${thickness}px 0`,
                ...style
            }}
            {...rest}
        >
            <div
                className="border-gradient-bottom"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div
                className="border-gradient-top"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div className={`inner-content ${innerClassName}`.trim()}>{children}</div>
        </Component>
    );
};

export default StarBorder;
