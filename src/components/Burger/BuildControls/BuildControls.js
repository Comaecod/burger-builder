import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const CONTROLS = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>
			Current Price: <strong>{props.price.toFixed(2)}</strong>
		</p>
		{CONTROLS.map((ctrl) => (
			<BuildControl
				label={ctrl.label}
				key={ctrl.label}
				adder={() => props.ingredientAdder(ctrl.type)}
				remover={() => props.ingredientRemover(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
			ORDER IT
		</button>
	</div>
);

export default buildControls;
