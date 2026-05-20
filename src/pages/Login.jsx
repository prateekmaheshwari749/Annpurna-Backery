import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const login = async () => {
    const res = await signInWithPopup(auth, provider);

    const userData = {
      email: res.user.email,
      name: res.user.displayName,
      photo: res.user.photoURL,
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF5F0] px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 text-center">
        
        {/* Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="bakery"
          className="w-20 mx-auto mb-4"
        />

        <h1 className="font-serif text-2xl font-bold text-primary">
          Annapurna Bakery
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Freshly baked happiness 🍰
        </p>

        {!user ? (
          <button
            onClick={login}
            className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Continue with Google
          </button>
        ) : (
          <>
            <img
              src={user.photo}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>

            <button
              onClick={logout}
              className="mt-5 bg-gray-400 text-white px-6 py-2 rounded-full"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
