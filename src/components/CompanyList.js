import React, { Component } from 'react'
import "../components/styles/CompList.css";
import Company from './Company';


 class CompanyList extends Component {
    render() {
        const p = this.props;
        return (
            <div className="companylist">
            <span className="brandinfoarray">BRAND LIST</span>
            {p.brandinfoarray.map(companydata =>
            <Company key={companydata.id} {...companydata}/>)}
            </div>
        )
    }
}

export default CompanyList;