import mongoose from "mongoose";
import dns from "node:dns";

try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {}

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MOngo_URL;
    if (!mongoUri) {
      throw new Error(
        "MongoDB connection URI is not defined in environment variables.",
      );
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected Successfully! 🎉");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error.message || error);
    process.exit(1);
  }
};

export default connectDb;
