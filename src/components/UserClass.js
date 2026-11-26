import React, { use } from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
 
    }

    async componentDidMount(){
        // console.log("Parent Component Did Mount")
        
        const data  = await fetch("https://api.github.com/users/VishalVerma283")
        const json = await data.json();


        this.setState({
            userInfo: json,
        })
        console.log(json)
       

    }   

    render(){
        // const {name, location} = this.props 

        const {name, location, avatar_url} = this.state.userInfo;

       return(
            <div className="user-card">
                <img src={avatar_url} alt="Profile Image"/> 
                <h1>Name: {name}</h1>   
                <h2>Location: {location}</h2>  
                {/* <h3>Contact: +91 9782921020</h3>    */}
            </div>
        )
    }
}

export default UserClass;