import React, { useContext, useState } from "react";

const Input = () => {
  // const [text, setText] = useState("");
  // const [img, setImg] = useState(null);

  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const handleSend = async () => {
  //   if (img) {
  //     const storageRef = ref(storage, uuid());

  //     const uploadTask = uploadBytesResumable(storageRef, img);

  //     uploadTask.on(
  //       (error) => {
  //         //TODO:Handle Error
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           await updateDoc(doc(db, "chats", data.chatId), {
  //             messages: arrayUnion({
  //               id: uuid(),
  //               text,
  //               senderId: currentUser.uid,
  //               date: Timestamp.now(),
  //               img: downloadURL,
  //             }),
  //           });
  //         });
  //       }
  //     );
  //   } else {
  //     await updateDoc(doc(db, "chats", data.chatId), {
  //       messages: arrayUnion({
  //         id: uuid(),
  //         text,
  //         senderId: currentUser.uid,
  //         date: Timestamp.now(),
  //       }),
  //     });
  //   }

  //   await updateDoc(doc(db, "userChats", currentUser.uid), {
  //     [data.chatId + ".lastMessage"]: {
  //       text,
  //     },
  //     [data.chatId + ".date"]: serverTimestamp(),
  //   });

  //   await updateDoc(doc(db, "userChats", data.user.uid), {
  //     [data.chatId + ".lastMessage"]: {
  //       text,
  //     },
  //     [data.chatId + ".date"]: serverTimestamp(),
  //   });

  //   setText("");
  //   setImg(null);
  // };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
  
      />
      <div className="send">

        <input
          type="file"
          style={{ display: "none" }}
          id="file" />

        <label htmlFor="file">   
        </label>
        <button >Send</button>
      </div>
    </div>
  );
};

export default Input;
