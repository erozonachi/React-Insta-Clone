import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCameraOutlined';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SearchContainer from './StyledComponents/SearchBar';
import LogoContainer from './StyledComponents/LogoContainer';
import SearchBox from './StyledComponents/SearchContainer';
import InputBox from '../StyledComponents/InputBox';
import SocialControls from './StyledComponents/SocialControls';

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
      <SearchBox>
        <InputBox onChange={props.changeHandler} placeholder='Search' />
      </SearchBox>
      <SocialControls>
        <ExploreIcon className={`${useStyles().iconSpaced} control`} />
        <FavoriteIcon className={`${useStyles().iconSpaced} control`} />
        <PersonIcon className={`${useStyles().iconSpaced} control`} />
      </SocialControls>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  changeHandler: PropTypes.func.isRequired,
}
