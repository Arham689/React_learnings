import React from 'react'

class Profile extends React.Component {
    constructor(props)
    {
        super(props);
        console.log('constructor')
        // creating state 
        this.state = {
            count : 0,
            userData : {}
        }
    }
    render()
    {
        
        console.log('render');
        return<>
            <h1> welcome to {this.state.userData.login} profile</h1>
            {/* <h2>this is my repos : <a href={this.state.userData.repos_url}>{this.state.userData.repos_url}</a></h2> */}
            <img src={this.state.userData.avatar_url} alt="img" />
            <h3>this is state var : {this.state.count}</h3>
        </>
    }

    async componentDidMount()
    {
        this.setId = setInterval(()=>{
            console.log('hello ')
        }  , 1000)
        // best place for fetching API
        console.log('componentDidMount')
        const data= await fetch('https://api.github.com/users/Arham689')
        const json= await data.json() ; 
        this.setState({
            count : 10 ,
            userData : json
        })
    }

    componentDidUpdate()
    {
        // best for make a sideEffect 
        // if id changes and makeing a fetch call 
        // get triggered after every re-render 
        console.log('componentDidUpdate')
    }

    componentWillUnmount()
    {
        /* here we write the clean up code 
        //for ex: 1) clearing an setIntervals and setTimeout
            2) clearing on going fetch call if not completed 
            3) removing an event listener 
        */
        clearInterval(this.setId)
        console.log('componentWillunmount')
    }
};

export default Profile