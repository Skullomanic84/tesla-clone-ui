import React from 'react';
import './Menu.css';
import MenuItems from '../MenuItem/MenuItems';

function Menu() {
    return (
        <div className='menu'>
            <MenuItems title='model s' />
            <MenuItems title='model 3' />
            <MenuItems title='model x' />
            <MenuItems title='model y' />
            <MenuItems title='solar roofs' />
            <MenuItems title='solar panels' />
            <MenuItems title='existing inventory' />
            <MenuItems title='used inventory' />
            <MenuItems title='trade-in' />
            <MenuItems title='cybertruck' />
            <MenuItems title='roadster' />
            <MenuItems title='semi' />
            <MenuItems title='charging' />
            <MenuItems title='powerwall' />
            <MenuItems title='commercial solar' />
            <MenuItems title='test drive' />
            <MenuItems title='find us' />
            <MenuItems title='support' />
            <MenuItems title='investor relations' />
            <MenuItems title='shop' />
            <MenuItems title='account' />
            <MenuItems title='united states' />
        </div>
    )
}

export default Menu
