import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {profiles} from './profiles';
import Profile from './profile';

const ProfileList = () => {
  return (
    <>
    <h1>ID Cards</h1>
      <section className='ProfileList'>
          { profiles.map((profile,index)=>{
            return <Profile {...profile} key = {profile.id} number = {index}/>
          })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProfileList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
