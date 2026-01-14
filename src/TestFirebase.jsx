import React, { useState } from "react";
import { auth, provider, storage } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

function TestFirebase() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const upload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileRef = ref(storage, `test/${file.name}`);
    await uploadBytes(fileRef, file);
    alert("Upload successful");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🔥 Firebase Connected Successfully</h1>

      {!user ? (
        <button onClick={login}>Login with Google</button>
      ) : (
        <>
          <p>Welcome: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}

      <hr />

      <input type="file" onChange={upload} />
    </div>
  );
}

export default TestFirebase;
