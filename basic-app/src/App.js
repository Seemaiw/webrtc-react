import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function Button() {
    // creating a new state name counter and setCounter function
    // This useState function is called a hook in the react world.
    const [counter, setCounter] = useState(5);
    const handleClick = () => setCounter(counter + 1);
    //() => setCounter(counter + counter) arrow function example
    return (
        <div>
            <h3>Count Example for hook:</h3>
            <p>Explanation: Here, a new state counter is used to pass input value.
                useState function acts as a hook which will update the value (make it reactive)</p>
            <button onClick={handleClick}> {counter} </button>
        </div>
    )

}

function App() {

    return (
        // Event Handling and using arrow function syntax, don't use long lines as it's hard to read
        // There are three ways to declare multiple elements
        // [<Button />, <Display />]
        <div>
            <Button/>
            <Display/>
        </div>
        // We can also use a special object to enclose multiple elements without introducing a new div parent which is
        //react.fragment but no new DOM parent will be introduced
        // <React.fragment>
        //     <Button/>
        //     <Display/>
        // </React.fragment>
    );
}

//for display purpose (presentational one only) without any stateful hook
function Display() {
    return (
        <div>....</div>
    )
}

export default App;
