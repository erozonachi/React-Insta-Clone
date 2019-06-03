import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCameraOutlined';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import './SearchBar.css';

export default function SearchBar() {
  return(
    <div className='search-bar'>
      <div className='logo-container'>
        <span>
          <PhotoCamera className='logo-item' />
        </span>
        <h1 className='logo-item'>
          Instagram
        </h1>
      </div>
      <div className='search-box-container'>
        <input className='search-box' placeholder='Search' />
      </div>
      <div className='search-controls'>
        <ExploreIcon className='control' />
        <FavoriteIcon className='control' />
        <PersonIcon className='control' />
      </div>
    </div>
  );
}
