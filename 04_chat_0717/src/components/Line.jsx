import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
//dbをfirebaseから受け取る
import { auth, db } from "../firebase";
import {
    collection,
    query,
    orderBy,
    limit,
    onSnapshot,
    addDoc,
    QuerySnapshot,
} from "firebase/firestore";
function Line() {
    //firebaseで作成したmessageの変数を格納する
    const [messages, setMessages] = useState([]);
    //第二引数に[]を入れると初回のマウント時＝レンダリングした時1回のみ
    useEffect(() => {
        //データベースにアクセスしてメッセージを受け取る
        // db.collection("messages")
        const q = query(collection(db, "line-clone"), orderBy("createdAt"), limit(50));

        const unsub = onSnapshot(q, (QuerySnapshot) => {
            setMessages(QuerySnapshot.docs.map((doc) => doc.data()));
        });
        return () => unsub();
    }, []);

    return (
        <div>
            <SignOut />
            <div className="msgs">
                {/* messagesの中から、map関数で呼び出す */}
                {messages.map(({ id, text, displayName }) => (
                    <div key={id}>
                            {/* //   ログインしているユーザーでクラスを変えることができる */}
                        <div className={`${displayName === auth.currentUser.displayName ? "sender" : "receiver"
                            }`}
                        >{displayName}</div>
                        <div
                            //   ログインしているユーザーでクラスを変えることができる
                            className={`msg ${displayName === auth.currentUser.displayName ? "sent" : "received"
                                }`}
                        >

                            {/* textを取得 */}
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    );
}
export default Line;