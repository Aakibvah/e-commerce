// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  //   auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
     Sign in with Google Redirect
       </button> */}
    </div>
  );
};

export default SignIn;
