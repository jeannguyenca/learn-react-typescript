import React from 'react';

type Props = {
    /** color to use for the background */
    color?: string;
    /** standard children prop: accepts any valid React Node */
    children: React.ReactNode;
    /** callback function passed to the onClick handler*/
    onClick: () => void;
};

const Button: React.FC<Props> = ({ children, color = 'red', onClick }: Props) => {
    return (
        <button style={{ background: color }} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
