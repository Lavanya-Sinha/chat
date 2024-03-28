import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className='navbar'>
      <span className='logo'>Connect</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleSignOut}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;

