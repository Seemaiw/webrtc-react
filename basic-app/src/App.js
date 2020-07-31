import React, {useState} from 'react';
import './App.css';

//using props to input data (pass from parent to child)
function Button(props) {
    // creating a new state name counter and setCounter function
    // This useState function is called a hook in the react world.

    // const handleClick = () => setCounter(counter + 1);
    //() => setCounter(counter + counter) arrow function example
    return (
        <div>
            <h3>Count Example for hook:</h3>
            <p>Explanation: Here, a new state counter is used to pass input value.
                useState function acts as a hook which will update the value (make it reactive)</p>
            <button onClick={props.onClickFunction}> +1 </button>
        </div>
    )

}

//Parent Component
function App() {
    const [counter, setCounter] = useState(5);
    const incrementCounter = () => setCounter(counter + 1);
    return (
        // Event Handling and using arrow function syntax, don't use long lines as it's hard to read
        // There are three ways to declare multiple elements
        // [<Button />, <Display />]
        <div>
            <Button onClickFunction={incrementCounter}/>
            <Display message={counter}/>
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
function Display(props) {
    return (
        <div><h4>The total count is : </h4>{props.message}</div>
    )
}

export default App;
