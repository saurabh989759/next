import mongoose from "mongoose";
export async function connect(){
    try {
      mongoose.connect(process.env.MONGO_URI!)
      const connection = mongoose.connection;
      connection.on('connected' , () =>{
        console.log('got connected')
      })
      connection.on('error' , (err) => {
        console.log('monogose connection error . please make sure MongoDB ' + err)
        process.exit();
      })
    }catch(error) {
       console.log('s g wrong');
       console.log(error);
    }
}