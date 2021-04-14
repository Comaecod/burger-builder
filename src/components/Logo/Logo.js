import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo} style={{ height: props.height }}>
		{/* this would be incorrect because ultimately everything is converted into granular pieces */}
		{/* <img src='' /> */}
		<img src={burgerLogo} alt='MyBurger' />
	</div>
);

export default logo;
