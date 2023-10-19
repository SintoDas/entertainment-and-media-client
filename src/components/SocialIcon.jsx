import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SocialIcon = () => {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <div className="divider">continue with </div>
        <div className="mb-5 p-2">
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            className="btn text-lg text-white bg-orange-600 btn-sm "
          >
            Google
          </button>
          <button
            onClick={() => handleSocialLogin(facebookLogin)}
            className="btn text-lg text-white bg-orange-600 btn-sm "
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;
