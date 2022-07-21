import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import CallIcon from "@mui/icons-material/Call";

function SignOut() {

    const logOut = () => {
        console.log("ログアウト");
        signOut(auth).then(() => {
            console.log("ログアウト成功");
            //ログアウトした時の処理
        }).catch((error) => {
            console.log("ログアウト失敗");
            alert(error.message);
            //ログアウトに失敗した時の処理
        });
    }

    return (
        <div className="header">
            <Button
                onClick={logOut}
                style={{ color: "white", fontSize: "15px" }}
            >
                SignOut
            </Button>
            {/* 現在ログインしているユーザー名 */}
            <h3>{auth.currentUser.displayName}</h3>
            <CallIcon />
        </div>
    );
};

export default SignOut;