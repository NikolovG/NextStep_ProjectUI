import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './help.css'

const Help = (props) => {
  return (
    <div className="help-container">
      <Helmet>
        <title>Help - Miniature Remorseful Rabbit</title>
        <meta
          property="og:title"
          content="Help - Miniature Remorseful Rabbit"
        />
      </Helmet>
      <div className="help-container1">
        <div className="help-container2">
          <div className="help-sidebar">
            <nav className="help-nav">
              <svg viewBox="0 0 1024 1024" className="help-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <div className="help-profile">
                <Link to="/profile" className="help-navlink">
                  <svg viewBox="0 0 1024 1024" className="help-icon02">
                    <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                  </svg>
                </Link>
                <Link to="/profile" className="help-navlink1">
                  Profile
                </Link>
              </div>
              <div className="help-documents">
                <Link to="/documents" className="help-navlink2">
                  <svg viewBox="0 0 1024 1024" className="help-icon04">
                    <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                  </svg>
                </Link>
                <Link to="/profile" className="help-navlink3">
                  Documents
                </Link>
              </div>
              <div className="help-help">
                <Link to="/help" className="help-navlink4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="help-icon06"
                  >
                    <path d="M512 786.286v-109.714c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM658.286 402.286c0-104.571-109.714-182.857-208-182.857-93.143 0-162.857 40-212 121.714-5.143 8-2.857 18.286 4.571 24l75.429 57.143c2.857 2.286 6.857 3.429 10.857 3.429 5.143 0 10.857-2.286 14.286-6.857 26.857-34.286 38.286-44.571 49.143-52.571 9.714-6.857 28.571-13.714 49.143-13.714 36.571 0 70.286 23.429 70.286 48.571 0 29.714-15.429 44.571-50.286 60.571-40.571 18.286-96 65.714-96 121.143v20.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v0c0-13.143 16.571-41.143 43.429-56.571 43.429-24.571 102.857-57.714 102.857-144.571zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </Link>
                <Link to="/profile" className="help-navlink5">
                  Help
                </Link>
              </div>
              <div className="help-social-bar">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="help-icon08"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="help-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="help-icon12"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="help-icon14"
                >
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="help-icon16">
                  <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
                </svg>
              </div>
            </nav>
            <div className="help-profile1">
              <Link to="/profile" className="help-navlink6">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
                  className="help-image"
                />
              </Link>
              <div className="help-container3">
                <Link to="/profile" className="help-navlink7">
                  John Doe
                </Link>
                <Link to="/profile" className="help-navlink8">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="help-stats">
          <div className="help-stat">
            <h1 className="help-text">
              <span>50</span>
              <span>+</span>
            </h1>
            <span className="help-text03">Happy clients</span>
          </div>
          <div className="help-stat1">
            <h1 className="help-text04">400+</h1>
            <span className="help-text05">Jobs Found</span>
          </div>
          <div className="help-stat2">
            <h1 className="help-text06">
              <span>500</span>
              <span>+</span>
            </h1>
            <span className="help-text09">Hours</span>
          </div>
          <div className="help-stat3">
            <h1 className="help-text10">24/7</h1>
            <span className="help-text11">Support</span>
          </div>
        </div>
        <button className="help-button button">Search</button>
        <h1 className="help-text12">Hello, how can we help?</h1>
        <input
          type="text"
          placeholder="placeholder"
          className="help-input input"
        />
      </div>
      <h1 className="help-text13">Help</h1>
      <svg viewBox="0 0 877.7142857142857 1024" className="help-icon18">
        <path d="M512 786.286v-109.714c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM658.286 402.286c0-104.571-109.714-182.857-208-182.857-93.143 0-162.857 40-212 121.714-5.143 8-2.857 18.286 4.571 24l75.429 57.143c2.857 2.286 6.857 3.429 10.857 3.429 5.143 0 10.857-2.286 14.286-6.857 26.857-34.286 38.286-44.571 49.143-52.571 9.714-6.857 28.571-13.714 49.143-13.714 36.571 0 70.286 23.429 70.286 48.571 0 29.714-15.429 44.571-50.286 60.571-40.571 18.286-96 65.714-96 121.143v20.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v0c0-13.143 16.571-41.143 43.429-56.571 43.429-24.571 102.857-57.714 102.857-144.571zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
      </svg>
      <h1 className="help-text14">Frequently Asked Questions</h1>
    </div>
  )
}

export default Help
