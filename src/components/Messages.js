import React, { useState } from "react";
import Popup from "reactjs-popup";

const Messages = (props) => {
  const { _id, authorized } = props;
  const [message, setMessage] = useState("");
  return (
    <Popup
      trigger={<button className="postEdit"> Message </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Send Message </div>
          <div className="content">
            {" "}
            <label>Message:</label>
            <input
              name="Username"
              required
              onChange={(e) =>
                setMessage({ ...message, content: e.target.value })
              }
            />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log(message);
                SendMessage(_id, authorized, message);
                console.log("modal closed ");
                close();
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

const SendMessage = (_id, authorized, message) => {
  console.log(_id, authorized, message);
  fetch(
    `https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/${_id}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authorized}`,
      },
      body: JSON.stringify({ message }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};

export default Messages;
