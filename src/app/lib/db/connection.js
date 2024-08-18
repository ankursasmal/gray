import mongoose  from "mongoose";
 let connect=mongoose.connect('mongodb+srv://ankursasmal2024:Ankur123@cluster0.aaz4lyj.mongodb.net/topic?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('db connect');
}).catch((e)=>{
    console.log('db not connect',e.message);
})

export default connect;