 import topicModel from "@/app/lib/model/Topics";
 import connect from "@/app/lib/db/connection";
import { NextResponse } from "next/server";
 


export async function DELETE(req,{params}) {
    try{
        let id=params.id
         let data=await topicModel.findByIdAndDelete({_id:id});
         
        return NextResponse.json({
            "message": "Delete success",
            "error": false,
            "success": true,
            "status": 200
        })

    }
    catch(e){
        return NextResponse.json({
            "message": "Delete success",
            "error": true,
            "success": false,
            "status": 400
        })
    }
    
}

// get spwfic id
export async function GET(req,{params}) {
    try{
        let id=params.id
        // console.log(id)
        const data = await topicModel.findById(id);
                //  console.log('data,data',data)
        return NextResponse.json({
            "message": "Delete success",
            "error": false,
            'data':data,
            "success": true,
            "status": 200
        })

    }
    catch(e){
        return NextResponse.json({
            "message": "Delete success",
            "error": true,
            "success": false,
            "status": 400
        })
    }
    
}
// edit req

export async function PUT(req,{params}) {
    try{
        let id=params.id
        console.log(id);
        let payload=await req.json();
        let toipcData=await topicModel.findByIdAndUpdate(id,payload,{new:true});
        console.log(toipcData)
         return NextResponse.json({
            "mess":"edit success store",
data:toipcData,
 "error": false,
success: true,
"status": 200
        })

    }
    catch(e){
        return NextResponse.json({
            "message": "edit not success",
  "error": true,
  "success": false,
  "status": 400
        })
    }
}

