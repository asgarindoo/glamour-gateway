const db = require("../models");

const Cart = db.cart;
const Product = db.product;

// Controller to handle adding a product to the cart
exports.addToCart = async (req, res) => {
  const sub = req.params.sub;
  const productId = String(req.body.productId);

  if (!sub || !productId) {
    return res.status(400).json({ message: "Sub and Product ID are required" });
  }

  let cart = await Cart.findOne({ user_sub: sub });

  if (!cart) {
    cart = new Cart({ user_sub: sub, cart_items: [productId] });
  } else {
    // Jika keranjang ditemukan, tambahkan productId ke dalam cart_items
    cart.cart_items.push(productId);
  }

  // Simpan perubahan ke dalam database
  try {
    await cart.save();
    res.status(200).json({ message: "Item added to cart successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Controller to get all cart items
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

// Controller to get a single cart item by user_sub
exports.getCartItemBySub = async (req, res) => {
  try {
    const sub = req.params.sub;

    // Cari keranjang berdasarkan user_sub
    const cart = await Cart.aggregate([
      {
        $match: {
          user_sub: sub,
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "cart_items",
          foreignField: "productId",
          as: "products",
        },
      },
    ]);

    // Jika tidak ada keranjang yang ditemukan, kirim respons 404
    if (!cart || cart.length === 0) {
      return res.status(404).json({
        error: "Keranjang tidak ditemukan",
      });
    }

    // Ambil ID produk dari keranjang
    const productIds = cart[0].cart_items;

    // Cari detail produk berdasarkan ID produk
    const products = await Product.find({ _id: { $in: productIds } });

    // Jika tidak ada produk yang ditemukan, kirim respons 404
    if (!products || products.length === 0) {
      return res.status(404).json({
        error: "Produk tidak ditemukan",
      });
    }

    // Menggabungkan produk ke dalam objek keranjang
    cart[0].products = products;

    // Kirim objek keranjang yang telah diperbarui sebagai respons
    res.json(cart);
  } catch (error) {
    console.error("Error retrieving cart:", error);
    res.status(500).json({
      error: "Terjadi kesalahan saat mengambil keranjang.",
    });
  }
};

// // Controller to update an existing cart item by ID
// exports.updateCartItemById = async (req, res) => {
//   try {
//     const updatedCartItem = await Cart.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedCartItem) {
//       return res.status(404).json({ error: "Cart item not found" });
//     }
//     res.status(200).json(updatedCartItem);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update cart item" });
//   }
// };

// // Controller to delete a cart item by ID
// exports.deleteCartItemById = async (req, res) => {
//   try {
//     const deletedCartItem = await Cart.findByIdAndDelete(req.params.id);
//     if (!deletedCartItem) {
//       return res.status(404).json({ error: "Cart item not found" });
//     }
//     res.status(200).json({ message: "Cart item deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete cart item" });
//   }
// };
