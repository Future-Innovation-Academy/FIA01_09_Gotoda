import React from "react";
import { Button } from "@mui/material";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import SignInWithEmailAndPassword from "./SignInWithEmailAndPassword";

const SignIn = () => {
    //Googleでログインする
    function signInWithGoogle() {
        //providerの変数を用意する
        //firebase.auth.GoogleAuthProviderは、Google認証のproviderが使える
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        //firebase.jsの中にauth認証の中にsignInWithPopupが入っていて、用意したproviderを入れる
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('ログイン成功', user);
            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log('ログイン失敗');
                alert(error.message);
            });
    }
    return (
        <div>
            <Button onClick={signInWithGoogle}>Googleでログインする</Button>
            <SignInWithEmailAndPassword />
        </div>
    );
};

export default SignIn;
