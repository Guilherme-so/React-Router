import React, { useEffect } from "react";

function Head(props) {
  useEffect(() => {
    document.title = "Router | " + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);

    console.log(props);
  }, [props]);

  return <></>;
}

export default Head;
