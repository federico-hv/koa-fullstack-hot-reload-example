import React, { Component } from 'react'

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
			<div style={{ background: 'purple' }}>
				<div>ESTE ES EL MENSAJE: <span style={{color: 'white'}}>{this.state.message}</span></div>
				<br/>
				<button onClick={this.getMessage}>Get Message</button>
			</div>
		)
	}
}

export default App