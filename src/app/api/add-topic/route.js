import topicModel from "@/app/lib/model/Topics";
import connect from "@/app/lib/db/connection";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    try{
        let payload=await req.json();
        let result=new topicModel(payload);
        let toipcData=await result.save();
        return NextResponse.json({
            "mess":"data not store",
data:toipcData,
"message": "data store success",
"error": false,
"success": true,
"status": 200
        })

    }
    catch(e){
        return NextResponse.json({
            "message": "data store not success",
  "error": true,
  "success": false,
  "status": 400
        })
    }
    
}


export async function GET(req,res) {
    try{
        let data=await topicModel.find();
         
        return NextResponse.json({
            "mess":"data not store",
data:data,
            "error":"false",
            "success":"true",
            "status":"200"
        })

    }
    catch(e){
        return NextResponse.json({
            "mess":"data not store",
            "error":"false",
            "success":"true",
            "status":"400"
        })
    }
    
}
