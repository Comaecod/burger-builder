import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
	state = {
		ingredients : {
			salad  : 1,
			bacon  : 0,
			cheese : 0,
			meat   : 0
		}
	};

	render () {
		return (
			<Auxiliary>
				<Burger ingredients={this.state.ingredients} />
				<div>Build Controls</div>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
