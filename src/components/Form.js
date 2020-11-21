import React, { Component } from 'react'
import "../components/styles/Form.css";
import axios from 'axios';



 class Form extends Component {
    //  capturing the state of the input  
     state = {
         companyName:''
     };
    //  onSubmit take action with captured data
     handleSubmit = async(e) => {
         e.preventDefault()

        //  install axios manually
         const res = await axios.get(`https:/api.github.com/users/${this.state.companyName}`);
          this.props.onSubmit(res.data);
         this.setState({companyName:''});

    //  clear form input after submit
        e.target.reset();
   
     }
    
    render() {
        return (
            <div>
                <h1 id='text'>API Data Display Using React</h1>
                <form onSubmit={this.handleSubmit} id='myForm'>
                    <span className="formtext">Form</span>
                    <input type="text" className="input"
                    value={this.state.companyName}
                    onChange={e=>this.setState({companyName: e.target.value})}
                    placeholder="Company's Name"
                    required ></input>
                    <button id="btn">Search!</button>
                </form>
            </div>
        )
    }
}

export default Form;