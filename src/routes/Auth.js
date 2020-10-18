import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";
import panasonic from 'img/panasonic.png';

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
		  <img src={ panasonic } />
		  <AuthForm />
		  <div className="authBtns">
			  <button onClick={onSocialClick} name="google" className="authBtn">
				  Continue with Google <FontAwesomeIcon icon={faGoogle} />
			  </button>
			  <button onClick={onSocialClick} name="github" className="authBtn">
				  Continue with Github <FontAwesomeIcon icon={faGithub} />
			  </button>
		  </div>
	  </div>
  );
};
export default Auth;