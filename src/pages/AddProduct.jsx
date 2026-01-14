import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const uploadProduct = async () => {
    if (!image) return alert("Select image");

    const imgRef = ref(storage, `products/${Date.now()}-${image.name}`);
    await uploadBytes(imgRef, image);
    const url = await getDownloadURL(imgRef);

    console.log({ name, price, image: url });
    alert("Product added (console me data hai)");
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Add Product</h3>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br />

      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <br />

      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <br />

      <button onClick={uploadProduct}>Upload</button>
    </div>
  );
}
