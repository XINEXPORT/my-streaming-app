import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { getCurrentUser } from "aws-amplify/auth";

function AuthComponent() {
  const [user, updateUser] = React.useState(null);

  React.useEffect(() => {
    getCurrentUser()
      .then((currentUser) => updateUser(currentUser))
      .catch((err) => console.log({ err }));
  }, []);

  return <div>{user && <h3>Hello {user.username}</h3>}</div>;
}

export default withAuthenticator(AuthComponent);
