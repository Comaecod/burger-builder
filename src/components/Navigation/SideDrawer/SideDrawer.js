import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
	const attachedClasses = [
		classes.SideDrawer,
		classes.Close
	];

	if (props.open) {
		attachedClasses.pop();
		attachedClasses.push(classes.Open);
		// attachedClasses = [
		// 	classes.SideDrawer,
		// 	classes.Open
		// ];
	}

	//...
	return (
		<Auxiliary>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>

				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxiliary>
	);
};

export default sideDrawer;
