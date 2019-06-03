import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCameraOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';

export default function SearchBar() {
  return(
    <div className='search-bar'>
      <div className='logo-container'>
        <div className='logo-item'>
          <PhotoCamera />
        </div>
        <h1 className='logo-item'>
          Instagram
        </h1>
      </div>
      <div className='search-box-container'>
        <input className='search-box' placeholder={<SearchIcon /> + ' Search'} />
      </div>
      <div className='search-controls'>
        <ExploreIcon />
        <FavoriteIcon />
        <PersonIcon />
      </div>
    </div>
  );
}
