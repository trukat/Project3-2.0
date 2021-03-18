import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ConfirmedAccount = (props) => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        await axios.post("/confirmation", { token: props.match.params.token });
        history.push("/");
      } catch (err) {}
    })();
  }, [history, props.match.params.token]);

  return <div>You have confirmed your account!{props.match.params.token}</div>;
};

export default ConfirmedAccount;
