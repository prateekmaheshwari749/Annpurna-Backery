import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      const userData = {
        email: res.user.email,
        name: res.user.displayName,
        photo: res.user.photoURL,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/"); // login ke baad home
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFF5F0",
      }}
    >
      <div
        style={{
          width: 350,
          background: "white",
          padding: 30,
          borderRadius: 15,
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#7B2C2C" }}>Annapurna Bakery</h1>
        <p style={{ color: "#777" }}>Freshly baked happiness 🍰</p>

        {!user ? (
          <button
            onClick={login}
            style={{
              width: "100%",
              padding: "12px",
              background: "#7B2C2C",
              color: "white",
              border: "none",
              borderRadius: 25,
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign in with Google
          </button>
        ) : (
          <>
            <img
              src={user.photo}
              alt="profile"
              style={{ borderRadius: "50%", width: 80 }}
            />
            <p>{user.name}</p>
            <p style={{ fontSize: 14 }}>{user.email}</p>

            <button
              onClick={logout}
              style={{
                marginTop: 20,
                padding: "10px 25px",
                borderRadius: 20,
                border: "none",
                background: "#999",
                color: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
