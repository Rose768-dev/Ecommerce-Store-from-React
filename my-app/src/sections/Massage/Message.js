import React, { useContext, useEffect, useRef } from "react";


const Message = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div
      className={``}
    >
      <div className="messageInfo">

        <span>just now</span>
      </div>

    </div>
  );
};

export default Message;
