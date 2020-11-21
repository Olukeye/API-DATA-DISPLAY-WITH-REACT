import React, { Component } from 'react'


 class Company extends Component {
    render() {
        const p = this.props;

        return (
            <div className="company">
              <span className="companytext">Company</span>
            <img src={p.avatar_url}alt="me"/>
            <div className="companyinfo">
            <div>Name: {p.name}</div>
            <div>Email: {p.email}</div>
            <div>Bio: {p.bio}</div>
            <div>Repos: {p.public_repos}</div>
            </div>
    	    </div>
        )
    }
}

export default Company;