import topicModel from "@/app/lib/model/Topics";
 import connect from "@/app/lib/db/connection";
import { NextResponse } from "next/server";
 
 
// get spwfic id
export async function GET(req,{params}) {
    try{
        let Search=params.searchVal
        //  console.log(typeof(Search))
 let regex= new RegExp(Search,'i','g');
        const data = await topicModel.find({topic:regex});
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