import React, { useState } from 'react';
import Button from './button';

type Props = {
    /** Name of user */
    name: string;
    /** Color of the button */
    color: string;
};

type Count = {
    count: number;
};

const Heading: React.FC<Props> = ({ name, color }: Props) => {
    const [count, setCount] = useState<Count['count'] | 0>(0);

    const add = () => {
        console.log(count);
        setCount(count + 1);
    };
    return (
        <div>
            <h1>My website heading</h1>
            <p>{count}</p>
            <Button color={color} onClick={add}>
                {name}
            </Button>
        </div>
    );
};

export default Heading;
