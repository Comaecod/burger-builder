import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => (
		<li key={ingKey}>
			<span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}
		</li>
	));

	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>Burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p>Continue To Checkout?</p>
			<Button buttonType='Danger' clicked={props.purchaseCanceled}>
				CANCEL
			</Button>
			<Button buttonType='Success' clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Auxiliary>
	);
};

export default orderSummary;
