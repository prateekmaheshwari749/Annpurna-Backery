import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "seemadhanani123@gmail.com"; // 👩‍🍳 mami ka gmail

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user.email === ADMIN_EMAIL) {
        navigate("/admin-panel");
      } else {
        alert("❌ You are not admin");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Admin Login</h2>
      <p>Only authorized Gmail allowed</p>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}
