import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const { category } = req.params;

  try {
    // Fetch products by category from database
    const products = await Product.find({ category });

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getProductsbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" }); 
  }
}
