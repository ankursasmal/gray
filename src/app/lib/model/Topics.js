import mongoose from "mongoose";

let TopicSchema=new mongoose.Schema({
    topic:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String

    }
})

let topicModel= mongoose.models.topicModel || mongoose.model('topicModel',TopicSchema);
export default  topicModel


