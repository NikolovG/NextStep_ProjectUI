import React from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Miniature Remorseful Rabbit</title>
        <meta
          property="og:title"
          content="Profile - Miniature Remorseful Rabbit"
        />
      </Helmet>
      <div className="profile-container01">
        <h1 className="profile-text">Profile </h1>
        <button className="profile-button button">Edit</button>
      </div>
      <div className="profile-container02">
        <div className="profile-container03">
          <div className="profile-container04">
            <span className="profile-text01">
              <span className="profile-text02">Name:</span>
              <span> John Doe</span>
            </span>
          </div>
          <div className="profile-container05">
            <span className="profile-text04">
              <span className="profile-text05">email:</span>
              <span> johndoe@uic.edu</span>
            </span>
          </div>
          <div className="profile-container06">
            <span className="profile-text07">
              <span className="profile-text08">Address:</span>
              <span> 123 Maple Street. Anytown, PA 17101</span>
            </span>
          </div>
          <div className="profile-container07">
            <span className="profile-text10">
              <span className="profile-text11">Phone:</span>
              <span> +1 (312)-8906-123</span>
            </span>
          </div>
        </div>
        <div className="profile-container08">
          <div className="profile-container09">
            <h1 className="profile-text13">Application-Time Graph</h1>
            <img
              src="/playground_assets/line-graph-500w.png"
              alt="image"
              className="profile-image"
            />
          </div>
          <div className="profile-container10">
            <h1 className="profile-text14">Application phase graph</h1>
            <img
              src="https://www.iconpacks.net/icons/1/free-pie-chart-icon-683-thumb.png"
              alt="image"
              className="profile-image1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
