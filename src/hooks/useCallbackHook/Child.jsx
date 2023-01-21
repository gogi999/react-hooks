import React, { useEffect } from 'react';

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log('Function was called!');
    }, [returnComment]);

    return (
        <div>
            {returnComment(' Gogi999')}
        </div>
    );
}

export default Child;
