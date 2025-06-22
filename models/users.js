import { Timestamp } from "mongodb";
import mongoose, {schema} from "mongoos";

const userSchema= new schema(
    {
        userId: String,
        password: String,
    },
    {
         Timestamp: true,
    }
);

const user=  mongoose.model.user  || mongoose.model("user",userSchema);

export default user;
