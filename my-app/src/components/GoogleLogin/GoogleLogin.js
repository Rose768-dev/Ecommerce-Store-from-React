import { GoogleLogin } from 'react-social-login';

const MyComponent = () => {
  const responseGoogle = (response) => {
    // اتخاذ إجراء بناءً على الاستجابة من Google
    console.log(response);
  };
  return (
    <div>
      <h1>تسجيل الدخول باستخدام Google</h1>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="تسجيل الدخول باستخدام Google"
      />
    </div>
  );
};
export default MyComponent;
