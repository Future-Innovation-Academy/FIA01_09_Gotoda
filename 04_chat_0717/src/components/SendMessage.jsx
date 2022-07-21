import React, { useState } from "react";
import { db, auth } from "../firebase";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";

function SendMessage() {
    //form内に入力したメッセージを別の変数として格納する
    const [message, setMessage] = useState("");
    const sendMessage = async (e) => {
        //文字を入力して、エンターキーを再ロードされない
        e.preventDefault();
        //authから現在ログインユーザーcurrentuserから取ってくる
        const { email, displayName } = auth.currentUser;
        console.log(displayName);
        //dbのコレクションの中の　messages をaddする

        await addDoc(
            collection(db, "line-clone"), //場所どこ？
            {
                text: message,
                displayName,
                email,
                createdAt: serverTimestamp(),
            }
        );

        //enterキーを押した後、"メッセージを入力"が表示されない
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                {/* <div className="sendMsg"> */}
                <Input
                    style={{
                        width: "78%",
                        fontSize: "15px",
                        fontWeight: "550",
                        marginLeft: "5px",
                        marginBottom: "-3px",
                    }}
                    placeholder="メッセージを入力してください"
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                {/* <Button onClick={sendMessage} variant="contained" endIcon={<SendIcon />}/> */}

                <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
                {/* </div> */}
            </form>
        </div>
    );
}

export default SendMessage;