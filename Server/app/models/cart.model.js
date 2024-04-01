module.exports = (mongoose) => {
  const cartSchema = new mongoose.Schema({
    user_sub: { type: String, required: true },
    cart_items: [{ type: String, required: true }],
  });

  // cartSchema.methods.toJSON = function () {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // };

  const Cart = mongoose.model("Cart", cartSchema);
  return Cart;
};
