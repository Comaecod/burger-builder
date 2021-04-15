import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	//Can be back to a dumb-functional component
	componentDidUpdate () {
		console.log('[OrderSummary.js] componentDidUpdate');
	}

	render () {
		const ingredientSummary = Object.keys(this.props.ingredients).map((ingKey) => (
			<li key={ingKey}>
				<span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {this.props.ingredients[ingKey]}
			</li>
		));

		return (
			<Auxiliary>
				<h3>Your Order</h3>
				<p>Burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue To Checkout?</p>
				<Button buttonType='Danger' clicked={this.props.purchaseCanceled}>
					CANCEL
				</Button>
				<Button buttonType='Success' clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</Auxiliary>
		);
	}
}

export default OrderSummary;
