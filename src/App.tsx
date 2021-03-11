import React from 'react';
import Heading from './Heading';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Heading name="Jean" color="blue" />
            </header>
        </div>
    );
};

export default App;
