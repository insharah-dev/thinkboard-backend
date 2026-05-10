import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
     await mongoose.connect(process.env.MONGO_URI)
     console.log("MONOGODB CONNECTED SUCCESSFULLy");
     
    }
    catch(error){
        console.error("Error conecting to monogodb",error);
        process.exit(1) 
      
        
    }
}