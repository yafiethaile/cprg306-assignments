import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import { Link } from 'next/link'

function homePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Check if the user is logged in
  const isLoggedIn = user !== null;

  // Handle the sign-in action
  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  // Handle the sign-out action
  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {isLoggedIn ? (
        // User is logged in
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <Link to="/shopping-list">Shopping List</Link>
        </div>
      ) : (
        // User is not logged in
        <button onClick={handleSignIn}>Login with GitHub</button>
      )}
    </div>
  );
}

export default homePage;