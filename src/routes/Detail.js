import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const Detail = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, [history, location]);

  if (location.state) {
    return <h1>{location.state.title}</h1>;
  } else {
    return null;
  }
};
