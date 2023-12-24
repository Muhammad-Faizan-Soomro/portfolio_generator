import mongoose from 'mongoose'

export async function ConnectDB(){
    try{
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL)
        console.log('Connected To DataBase');
    }
    catch(error){
        console.log(error);
        console.log("Error Connecting to the database");
    }
}
