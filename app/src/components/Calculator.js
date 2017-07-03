import React, {Component} from 'react';
import calculatorImg from '../calculator.png';

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			header: 'Calculator',
			display: '0',
			operator: '',
			temp: 0,
			resetDisplay: false
		}
	}

	updateHeader(val) {
		this.setState({
			header: val
		})
	}

	setDisplay(num) {
		var display;
		if (this.state.display === '0') {
			display = num;
		} else {
			display = this.state.display + num;
			
		}
		if(this.state.display.length < 13) {
			this.setState({
				display: display
			})
		} else {
			this.setState({
				display: num
			})
		}
	}

	setOperator(operator) {
		if(!this.state.operator) {
			this.setState({
				temp: Number(this.state.display),
				display: '0',
				operator: operator
			})
		}
	}

	clearDisplay() {
		this.setState({
			display: '0',
			operator: '',
			temp: 0,
		})
	}

	calculate() {
		if(!this.state.operator) {
			return;
		}
		var result;
		switch(this.state.operator) {
			case("+"):
				result = this.state.temp + Number(this.state.display);
				break;
			case('-'):
				result = this.state.temp - Number(this.state.display);
				break;
			case('*'):
				result = this.state.temp * Number(this.state.display);
				break;
			case('/'):
				result = this.state.temp / Number(this.state.display);
				break;
			default:
			 	break;
		}

		this.setState({
			display: result,
			operator: ''
		})
	}





	render() {
		return (
		  <div id="calculator-container">
		    <input onChange={(e) => {this.updateHeader(e.target.value)}} id="header-input"/>
		    <h1 id="header"> {this.state.header} </h1>
		    <img className="remove-highlight" src={calculatorImg} alt="calculator" />
		    <div id="calculator-mask" className="remove-highlight">
		      <div className="output">
		        <span className="total">{this.state.display}</span>
		      </div>

		      <div onClick={this.clearDisplay.bind(this)} className="btn clear"></div>

		      <div onClick={this.setDisplay.bind(this, "0")} className="btn zero"></div>
		      <div onClick={this.setDisplay.bind(this, "1")} className="btn one"></div>
		      <div onClick={this.setDisplay.bind(this, "2")} className="btn two"></div>
		      <div onClick={this.setDisplay.bind(this, "3")} className="btn three"></div>
		      <div onClick={this.setDisplay.bind(this, "4")} className="btn four"></div>
		      <div onClick={this.setDisplay.bind(this, "5")} className="btn five"></div>
		      <div onClick={this.setDisplay.bind(this, "6")} className="btn six"></div>
		      <div onClick={this.setDisplay.bind(this, "7")} className="btn seven"></div>
		      <div onClick={this.setDisplay.bind(this, "8")} className="btn eight"></div>
		      <div onClick={this.setDisplay.bind(this, "9")} className="btn nine"></div>

		      <div onClick={
		      	this.setOperator.bind(this, "="),
		      	this.calculate.bind(this)
		      } className="btn equal"></div>
		      <div onClick={this.setOperator.bind(this, "*")}className="btn multiply"></div>
		      <div onClick={this.setOperator.bind(this, "/")}className="btn divide"></div>
		      <div onClick={this.setOperator.bind(this, "-")}className="btn subtract"></div>
		      <div onClick={this.setOperator.bind(this, "+")}className="btn add"></div>
		    </div>
		  </div>
		)
	}
}

export default Calculator;