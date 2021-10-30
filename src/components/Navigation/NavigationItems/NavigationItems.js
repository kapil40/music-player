import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>MUSIC</NavigationItem>
        <NavigationItem link="/favourites">FAVOURITES</NavigationItem>
    </ul>
);

export default navigationItems;