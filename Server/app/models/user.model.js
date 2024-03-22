module.exports = (mongoose) => {
  const userSchema = mongoose.Schema(
    {
      googleid: String,
      displayname: String,
      email: String,
      image: String,
    },
    {
      timestamps: true,
    }
  );

  // userSchema.methods.generateAuthToken = function () {
  //   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
  //     expiresIn: "7d",
  //   });
  //   return token;
  // }

  // userSchema.methods.toJSON = function () {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // };

  const user = mongoose.model("user", userSchema);
  return user;
};
