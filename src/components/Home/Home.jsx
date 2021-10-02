import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home__info">
                <div className="home__infoText">
                    <h1>Model 3</h1>
                    <h4>Order Online for <span>Touchless Delivery</span></h4>
                </div>

                <div className="home__actions">
                    <button className="home__btnPrimary">Custom Order</button>
                    <button className="home__btnSecondary">Existing inventory</button>
                </div>

            </div>
        </div>
    )
}

export default Home
