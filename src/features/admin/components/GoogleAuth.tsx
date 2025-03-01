import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { googleAuth } from "../api/api";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/adminSlice";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const clientId =
    "311853395320-tr7hshp5f1f0ldqik89iurhdrqffnkve.apps.googleusercontent.com";

  const googleSuccessHandler = async (credential: string, clientId: string) => {
    const response = await googleAuth({ credential, clientId });

    if (response.success) {
      dispatch(
        setAdmin({
          _id: response.data._id,
          email: response.data.email,
          role: response.data.role,
          status: response.data.status,
          accessToken: response.data.accessToken,
        })
      );
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          googleSuccessHandler(
            credentialResponse.credential as string,
            credentialResponse.clientId as string
          );
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
