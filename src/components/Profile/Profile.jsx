import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import './Profile.css'

const Profile = (props) => {
  const history = useHistory()
  const onClickHandler = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <div className={`Profile ${props.isOpen ? 'open' : ''}`}>
      PROFILE
      <br />
      <button className="close-profile" onClick={onClickHandler}>
        Close
      </button>
    </div>
  )
}

export default Profile
