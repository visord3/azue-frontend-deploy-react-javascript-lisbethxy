import React, { useState } from 'react';

function App() {
    const value = 'assigment_finished';
    const [showText, setShowText] = useState(false);

    return (
        <div>
            Hello {value}

            <button onClick={() => setShowText(true)}>
                click here!
            </button>

            {showText && <div>oops trap</div>}
        </div>
    );
}

export default App;