module.exports = (mongoose) => {
  const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true },
    status: { type: String, required: true },
    total: { type: Number, required: true },
    items: [
      {
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
  });

  orderSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  };

  const Order = mongoose.model("Order", orderSchema);
  return Order;
};
