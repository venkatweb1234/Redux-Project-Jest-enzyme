import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../_variable.scss';
const SharedButton = (props) => {
    console.log('VenkatProps', props);
    const submitEvent = () =>{
        if(props.emitEvent){
            props.emitEvent();
        }
    }
    const {buttonText} = props;
    return (
        <div>
            <button className="w3-button tut-button" onClick={()=>submitEvent()} data-test="buttonComponent">
                {props.buttonText}
            </button>
        </div>
    )
}

SharedButton.prototype = {
buttonText:PropTypes.string,
emitEvent:PropTypes.func
};

export default SharedButton;