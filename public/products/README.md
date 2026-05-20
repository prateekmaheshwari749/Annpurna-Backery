# Product Images

Put product images in this folder and list them in `products.json`.

Example:

```json
[
  {
    "id": "chocolate-cake",
    "name": "Chocolate Cake",
    "price": 450,
    "image": "/products/chocolate-cake.jpg",
    "category": "Cakes"
  }
]
```

After adding images or changing `products.json`, run:

```powershell
npm run build
firebase deploy
```
