import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((ingKey) =>
			[
				...Array(props.ingredients[ingKey])
			].map((_, i) => <BurgerIngredient key={ingKey + i} type={ingKey} />)
		)
		.reduce((acc, cur) => {
			return acc.concat(cur);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}

	// console.log(transformedIngredients);

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;
