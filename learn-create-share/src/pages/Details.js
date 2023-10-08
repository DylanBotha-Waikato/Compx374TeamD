import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import "../styles/Details.css";


function Details() {
    return (
        <div className="user-information-page">

            <div className="Details-side-navbar">
                <div className="info-item">
                    <b><p className="DSN">My Details</p> </b>
                </div>
                <div className="info-item">
                    <b><p className="DSN">My Class</p></b>
                </div>
                <div className="info-item">
                    <b><p className="DSN">My Posts</p></b>
                </div>
                <div className="info-item">
                    <b><p className="DSN">Notifications</p></b>
                </div>
                <div className="info-item">
                    <b><p className="DSN">Privacy</p></b>
                </div>
                <div className="info-item">
                    <b><p className="DSN">Appearance</p></b>
                </div>
            </div>

            <div className="Details-main">
                <div className="Details-user">
                    <p className="Details-user-info">
                        Name: Example User
                    </p>
                    <p className="Details-user-info">
                        School: Example Primary School
                    </p>
                    <p className="Details-user-info">
                        Teacher: Example Teacher
                    </p>
                    <p className="Details-user-info">
                        Account Type: Student
                    </p>
                </div>

                <div className="Details-about">
                    <p className="Details-about-me">
                        <h2 className='h2-title'>About Me:</h2>
                    </p>
                    <p className="about-me">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="about-me">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="Details-user">
                    <p className="Details-user-info">
                        Legal Guardian: Example Parent
                    </p>
                    <p className="Details-user-info">
                        Address: XX Example Road, Ruakura, Hamilton, Waikato
                    </p>
                    <p className="Details-user-info">
                        Emercency Contact Number (Primary): +XX XX XXXXX XX
                    </p>
                    <p className="Details-user-info">
                        Emergency Contact Number (Secondary): +XX XX XXXXX XX
                    </p>
                </div>
                <div className='Details-end'>
                    <button type='submit' className='Details-button' onclick="">
                    {/*    <img src="learn-create-share\sr" alt="edit details jpeg for edit details button */}
                        <EditNoteIcon/>Edit Details</button>
                </div>
            </div>
        </div>
    );
}

export default Details;