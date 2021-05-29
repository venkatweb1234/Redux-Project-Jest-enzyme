import React, { Component } from 'react';
import '../../_variable.scss';
import './headline.style.scss';

class Headline extends Component{
    constructor(props){
        super(props);
    }
    render() {

        const { header, desc } = this.props;
        if(!header){
            return null;
        }
        return (
            <div data-test="HeadlineComponent">
               <h1 className="font" data-test="header">{header}</h1>
               <p data-test="desc">{desc}</p>
               <div className="HTMLbtn" data-test="HTMLButtons">
               <a href="https://www.w3schools.com/html/default.asp" className="w3-button tut-button" data-test="LearnHTML">Learn HTML</a>
               <br />
               <a href="https://www.w3schools.com/tags/default.asp" class="w3-button ref-button" data-test="HTMLRef">HTML Reference</a>
               </div>
            </div>
        );
    }
}

export default Headline;