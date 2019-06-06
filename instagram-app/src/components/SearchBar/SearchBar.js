import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCameraOutlined';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SearchContainer from './StyledComponents/SearchBar';
import LogoContainer from './StyledComponents/LogoContainer';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 30,
  },
  iconSpaced: {
    margin: theme.spacing(.5),
    fontSize: 30,
  },
}));

export default function SearchBar(props) {
  return(
    <SearchContainer>
      <LogoContainer>
        <span>
          <PhotoCamera className={`${useStyles().icon} logo-item`} />
        </span>
        <h1>
          Instagram
        </h1>
      </LogoContainer>
      <div className='search-box-container'>
        <input onChange={props.changeHandler} className='search-box' placeholder='Search' />
      </div>
      <div className='search-controls'>
        <ExploreIcon className={`${useStyles().iconSpaced} control`} />
        <FavoriteIcon className={`${useStyles().iconSpaced} control`} />
        <PersonIcon className={`${useStyles().iconSpaced} control`} />
      </div>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  changeHandler: PropTypes.func.isRequired,
}
