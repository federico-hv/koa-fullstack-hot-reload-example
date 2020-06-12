import React, { Component } from 'react'
import styled from 'styled-components';
import './styles.css';

const StyledBox = styled.div`
	height: 100px;
	background: black;
	color: yellow;
	font-size: 40px;
`;


class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			message: ''
		};

		this.getMessage = this.getMessage.bind(this);
	}

	getMessage(){
		fetch('/api/message')
			.then(m => m.json())
			.then(d => {
				console.log(d)
				this.setState({ message: d.message })
			})
			.catch(e =>{
				alert('Error: '+ e);
			})
	}

	render(){
		return (
			<div className="container">
				<div>Message from the server: {this.state.message}</div>
				<br/>
				<button onClick={this.getMessage}>Get Message</button>
				<StyledBox>
					This is just a box that will bring styles from server and also hot reload its styles on every change
				</StyledBox>
			</div>
		)
	}
}

export default App