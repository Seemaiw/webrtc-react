import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

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
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
)

class Form extends React.Component {
    // userNameInput = React.createRef();
    state = {
        userName: ''
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        console.log(
            // this.userNameInput.current.value
            // this.state.userName
            // response.data
        );
        //passing data to form component using props
        this.props.onSubmit(response.data);
        this.setState({userName: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text'
                       value={this.state.userName}
                       onChange={event => this.setState({userName: event.target.value})}
                       placeholder='New Username'
                       required/>
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
class App extends React.Component {
    state = {
        profiles: [],
    };
    addNewProfile = (newProfile) => {
        // console.log(newProfile);
        this.setState(prevData => ({
            profiles: [...prevData.profiles, newProfile]
        }))
    };

    render() {
        // const [counter, setCounter] = useState(0);
        // const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
        return (
            // Event Handling and using arrow function syntax, don't use long lines as it's hard to read
            // There are three ways to declare multiple elements
            // [<Button />, <Display />]
            //Component Re usability using props and passing argument in function
            <div>
                {/*<h3>Count Example for hook:</h3>*/}
                {/*<p>Explanation: Here, a new state counter is used to pass input value.*/}
                {/*    useState function acts as a hook which will update the value (make it reactive)</p>*/}
                {/*<Button onClickFunction={incrementCounter} increment={1}/>*/}
                {/*<Button onClickFunction={incrementCounter} increment={5}/>*/}
                {/*<Button onClickFunction={incrementCounter} increment={10}/>*/}
                {/*<Button onClickFunction={incrementCounter} increment={100}/>*/}
                {/*<Display message={counter}/>*/}
                {/*<h1 className="header"></h1>*/}
                <h3>User Profile Info Detail</h3>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
            // We can also use a special object to enclose multiple elements without introducing a new div parent which is
            //react.fragment but no new DOM parent will be introduced
            // <React.fragment>
            //     <Button/>
            //     <Display/>
            // </React.fragment>
        );
    }
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
