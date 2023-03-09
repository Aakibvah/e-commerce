// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';
//import './authentication.styles.scss';
const Authentication = () => {
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
     Sign in with Google Redirect
       </button> */}
    </AuthenticationContainer>
  );
};

export default Authentication;
