import Image from "next/image";

export default async function Home() {

  return (
    <main >
      <div className="logInSignInForm">
        <Image className="logo"
            src={'./branding/logo/vozise_text_logo.svg'}
            width={200}
            height={15}/>
        <div className="buttonSignUp">
          <Image 
          src={'../branding/icons/icon_apple.svg'}
          width={15}
          height={15}/>
          <p>Sign up with Apple</p>
        </div>
        <div className="buttonSignUp">
          <Image 
          src={'./branding/icons/icon_google.svg'}
          width={15}
          height={15}/>
          <p>Sign up with Googlee</p>
        </div>
        <p className="bettweenForm">or</p>
        <div className="buttonSignUp">
          <p>Create an Account</p>
        </div>
        <p className="small">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
        <p>Have an account already? <a className="text-blue-500" href="www.nikodola.art">Login</a></p>
      </div>
      

    </main>
  );
}
