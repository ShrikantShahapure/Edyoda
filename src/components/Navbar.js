import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <img src="https://classroom.edyoda.com/static/media/edyoda_transparent_logo.55bcc00f.png" alt="Course logo" />
        <span>Courses</span>
        <span>Programme</span>
      </div>
      <div>
        <span>Login</span>
        <button className='btn-join'>Join now</button>
      </div>
    </nav>
  );
};

export default Navbar;
