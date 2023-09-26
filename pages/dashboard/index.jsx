import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import TransitionEffect from "../../components/TransitionEffect";
const Dasboard = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  // console.log(user)
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
    <TransitionEffect />
      {user ? (
        <div className="w-full p-3">
            <div className="container mx-auto flex flex-col gap-3 py-5">
                <h2>Welcome, {user.displayName} &#128075;</h2>
                <h3>Events from your communities</h3>
            </div>

            <div className="flex items-center justify-center">
              <div>
                
              </div>
            </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[80vh]">
          <h3>
            You must have to login. You Cannot Access the Dasboard with Login
          </h3>
        </div>
      )}
    </>
  );
};

export default Dasboard;
