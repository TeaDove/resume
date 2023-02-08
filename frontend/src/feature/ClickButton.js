import React, { useState } from 'react';
import './ClickButton.css';

const ClickButton = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="click-button">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export default ClickButton;
