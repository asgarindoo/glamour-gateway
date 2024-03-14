module.exports = (mongoose) => {
  const orderSchema = mongoose.Schema({
    user_id: Number,
    cart_items: [String],
  });

  orderSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  };

  const orders = mongoose.model("order", orderSchema);
  return orders;
};
