import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // Example: 'rings', 'necklaces', etc.
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String }, // URL for product image
  stock: { type: Number, default: 0 }, // Optional: track stock levels
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  id: { type: Number}
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
