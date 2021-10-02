import React from 'react';
import './MenuItems.css';

function MenuItems({title}) {
    return (
        <div className="menuitem">
            <h4>{title}</h4>
        </div>
    )
}

export default MenuItems
