import React, { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
      <div className="custom-container">
        <div className="flex items-center flex-col pt-8">
          <div>
            <img src={user?.photoURL} className='rounded' alt="User Photo" />
          </div>
          <div>
            <h1 className="text-4xl font-semibold mb-4 mt-4">{user?.displayName}</h1>
            <p className="text-lg">
              <span className="text-orange-600 font-bold">Email:</span>{" "}
              {user?.email}
            </p>
            <p className="text-lg">
              <span className="text-orange-600 font-bold">Last Sing In: </span>
              {user?.metadata?.lastSignInTime}
            </p>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;