import React from 'react';
import './Home.css';


export const Home = () => {

  
  return (
    <div className='home'>
            <div className="homeContent-container">
              </div>
                <span className="smallText">
                </span>
                <h1 className="homeTitle">
                  <h1>
                Search your Holiday
                </h1>
                </h1>
                <div className='Search'>
                <input type="text" placeholder='Search your destination'></input>
                </div>
                <div className="Nigga">
                   <input type='date'></input>
                   <input type='number' placeholder='Number of people'></input>
                   <input type='date'></input>
                </div>
            </div>
  )
}

