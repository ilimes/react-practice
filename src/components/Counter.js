import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={ () => { setCount(count + 1); }}>{props.click || 'Click'} {count}</button>
        </div>
    );
};

export default Counter;