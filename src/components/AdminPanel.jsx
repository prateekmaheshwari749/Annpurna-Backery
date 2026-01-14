import React, { useEffect, useState } from "react";
import { auth, provider, storage } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({ name: "", price: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return () => unsub();
  }, []);

  async function login() {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error("login", e);
      alert("Login failed");
    }
  }

  async function logout() {
    await auth.signOut();
    setUser(null);
  }

  async function uploadAndSubmit(e) {
    e.preventDefault();
    if (!user) return alert("Login as admin");
    if (!form.name || !form.price || !file) return alert("Fill all");

    setStatus("Uploading image…");
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      () => {},
      (err) => {
        console.error(err);
        setStatus("Upload error");
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setStatus("Saving product...");
        const token = await user.getIdToken();
        const payload = { name: form.name, price: Number(form.price), image: url };
        const res = await fetch(`${API_BASE}/api/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          const body = await res.json().catch(()=>({detail:"Server error"}));
          setStatus("Backend error: " + (body.detail || res.status));
        } else {
          setStatus("Product added!");
          setForm({ name: "", price: "" });
          setFile(null);
        }
      }
    );
  }

  return (
    <div className="admin-panel">
      {!user ? (
        <div className="card admin-login">
          <h2>Admin Login</h2>
          <button className="btn" onClick={login}>Login with Google</button>
        </div>
      ) : (
        <div className="card admin-dashboard">
          <div className="admin-top">
            <div>
              <strong>{user.displayName}</strong><br />
              <small>{user.email}</small>
            </div>
            <button className="btn small" onClick={logout}>Logout</button>
          </div>

          <form onSubmit={uploadAndSubmit} className="product-form">
            <label>Name
              <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
            </label>
            <label>Price (₹)
              <input type="number" value={form.price} onChange={e=>setForm({...form, price: e.target.value})}/>
            </label>
            <label>Image
              <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])}/>
            </label>
            <button className="btn" type="submit">Add Product</button>
          </form>

          <div className="status">{status}</div>
        </div>
      )}
    </div>
  );
}
