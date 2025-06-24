 import { MongoClient, ServerApiVersion } from "mongodb";


let db;

export const connectDB=async()=>{
if(db) return db;

try {

    const uri= process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

db=client.db('car-doctor')

return db;

    
    
} catch (error) {

    console.log(error)
    
}


}






// import mongoose from "mongoose";


// const connectMongoDB=async()=>{

//     try {

//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log('connected to MongoDB')
        
//     } catch (error) {

//         console.log(error)
        
//     }

// }


// export default connectMongoDB;




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sajeeb2186:mygaradge@cluster0.dbj1m62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
