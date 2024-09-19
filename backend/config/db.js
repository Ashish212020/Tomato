import mongoose from "mongoose";

 export const connectDB  = async () =>{
    await mongoose.connect('mongodb+srv://Ashish21h:147258369@cluster0.r7miy.mongodb.net/food-del').then(()=> console.log("DB Connected"));
}