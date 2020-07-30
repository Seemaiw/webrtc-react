import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // creating a new state name counter and setCounter function
    // This useState function is called a hook in the react world.
    const [counter, setCounter] = useState(5);
    const handleClick = () => setCounter(counter + 1);
    //() => setCounter(counter + counter) arrow function example
    return (
        // Event Handling and using arrow function syntax, don't use long lines as it's hard to read
        <div>
            <h3>Count Example for hook:</h3>
            <p>Explanation: Here, a new state counter is used to pass input value.
                useState function acts as a hook which will update the value (make it reactive)</p>
            <button onClick={handleClick}> {counter} </button>
            <Display/>
        </div>
    );
}

//for display purpose (presentational one only) without any stateful hook
function Display() {
    return(
        <div>....</div>
    )
}

export default App;
