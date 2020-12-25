import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import './Profile.css';

const Profile = (props) => {
  const dispatch = useDispatch();
  const onClickHandler = useCallback((dispatch) => {
    dispatch(goBack());
  });

  return (
    <div className={`Profile ${props.isOpen ? 'open' : ''}`}>
      PROFILE
      <br />
      <button
        className="close-profile"
        onClick={() => onClickHandler(dispatch)}
      >
        Close
      </button>
    </div>
  );
};

export default Profile;
