import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Home.css';
import WeekPicker from './WeekPicker';



export const Home = () => {

  
  return (
    <><div className='home'>
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
      <WeekPicker/>
      </div>
    </div>
    <div className='foot'>
    <div className='scrollable-content'>
        
      </div>

    <footer>All Rights Reserved
      <div className='nick'>
      <FacebookIcon/>
      <InstagramIcon/>
      <TwitterIcon/>
      </div>
    </footer>
    </div>
    </>
  );
}

