import React, { Component } from 'react'
import logo from '../logo.svg';
import '../App.css';

class SocialCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            greeting: this.props.greeting,
            author: this.props.author,
            background: this.props.background,
            color:this.props.color,
            avatar: 'https://api.adorable.io/avatars/150/' + this.props.author
        }
    }
    render() {
        return (

            <div style={{background: this.state.background, color: this.state.color }} className="socialCard">
                <img className='logo' src={this.state.avatar} alt='logo' />
                <div className='greetingContainer'>
                    <span>{this.state.greeting}</span>
                </div>
                <div className="author">
                    <span>{this.state.author}</span>
                </div>
            </div>
        )
    }
}

export default SocialCard;