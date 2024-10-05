import mongoose from "mongoose";

const uri = "mongodb+srv://gm4063420:MZqMoNcZW512mvFt@cluster0.u4emb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;