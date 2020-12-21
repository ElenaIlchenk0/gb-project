import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import Profile from '../Profile/Profile';

const Header = (props) => {
  const dispatch = useDispatch();

  const profileClickHandler = (dispatch) => {
    dispatch(push('/profile'));
  };
  return (
    <div className="Header">
      <h1>{props.profile ? 'Profile' : props.chatName}</h1>
      <div
        className="profileIcon"
        onClick={() => profileClickHandler(dispatch)}
      >
        <span>User's profile</span>
        <PersonIcon style={{ color: '#065032' }} fontSize="large" />
      </div>

      <Profile isOpen={props.profile} />
    </div>
  );
};

export default Header;
