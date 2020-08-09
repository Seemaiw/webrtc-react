import React, {useState} from 'react';
import './App.css';


const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


//using props to input data (pass from parent to child)
function Button(props) {
    // creating a new state name counter and setCounter function
    // This useState function is called a hook in the react world.
    //() => setCounter(counter + counter) arrow function example
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}> Increment by +{props.increment}</button>
    )

}

const CardList = (props) => (
    //pass the data using spread
    <div className="profile" style={{margin: '1rem'}}>
        <h3>User Profile Info Detail</h3>
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
)

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type='text' placeholder='New Username'/>
                <button>Add New Card</button>
            </form>)
    }
}

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className='info' style={{marginLeft: 10}}>
                {/*<img src={require('../src/assets/image/download.png')} alt=''/>*/}
                <img src={profile.avatar_url} alt=''/>
                <div className='name' style={{fontSize: '125%'}}>{profile.name}</div>
                <div className='company'>{profile.company}</div>
            </div>
        )
    }
}

//Parent Component
function App({title}) {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (
        // Event Handling and using arrow function syntax, don't use long lines as it's hard to read
        // There are three ways to declare multiple elements
        // [<Button />, <Display />]
        //Component Re usability using props and passing argument in function
        <div>
            <h3>Count Example for hook:</h3>
            <p>Explanation: Here, a new state counter is used to pass input value.
                useState function acts as a hook which will update the value (make it reactive)</p>
            <Button onClickFunction={incrementCounter} increment={1}/>
            <Button onClickFunction={incrementCounter} increment={5}/>
            <Button onClickFunction={incrementCounter} increment={10}/>
            <Button onClickFunction={incrementCounter} increment={100}/>
            <Display message={counter}/>
            <h1 className="header">{title}</h1>
            <Form/>
            <CardList profiles={testData}/>
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
        <div>
            <h4>The total clicked count is : </h4>{props.message}
        </div>
    )
}

export default App;
