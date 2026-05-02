const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("MONGO_URI =", process.env.MONGO_URI); // 👈 ADD THIS

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
