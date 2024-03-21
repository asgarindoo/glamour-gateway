module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    googleid: {
      type: String,
      required: true,
    },
  });

  userSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  };

  const user = mongoose.model("user", userSchema);
  return user;
};
