import { Button, TextField } from "@mui/material";
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function SignInWithEmailAndPassword() {
    const [name, setName] = useState("Takeshi");
    const [email, setEmail] = useState("test@example.com");
    const [password, setPassword] = useState("password");

    const doSignUp = () => {
        console.log(email, password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log('サインアップ成功', user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then((user) => {
                    console.log('名前を登録しました');
                }).catch((error) => {
                    alert(error.message);
                    console.error(error);
                });
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            })
    }

    const doSignIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log('サインイン成功', user);
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            })
    }

    return (
        <div>
            {/* name */}
            <TextField
                id="standard-basic"
                label="name"
                variant="standard"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name} />
            {/* email */}
            <TextField
                id="standard-basic"
                label="email"
                variant="standard"
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            {/* password */}
            <TextField
                id="standard-basic"
                label="password"
                variant="standard"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password} />

            {/* 送信ボタン */}
            <Button type="submit" onClick={doSignUp}>サインアップ</Button>
            <Button type="submit" onClick={doSignIn}>サインイン</Button>
        </div>
    );
};

export default SignInWithEmailAndPassword;