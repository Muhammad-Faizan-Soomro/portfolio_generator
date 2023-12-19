import { ConnectDB } from "@/app/db/db";
import { Detail } from "@/app/models/detail";
import { NextResponse } from "next/server";

export async function GET(){
    let data = []
    try {
        await ConnectDB();
        data = await Detail.find();
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({result: data})
}

export async function POST(request){
    const payload = await request.json()
    await ConnectDB();
    let detail = new Detail(payload)
    const result = await detail.save()
    return NextResponse.json({result})
}

        // fullName: "Faizan",
        // template: "Charm",
        // user_id: "123",
        // workDesc: "web dev",
        // selfDesc: "Sexy",
        // aboutMe: "20yrs old",
        // numOfProjects: "20",
        // yearsOfExperience: "5",
        // numOfHappyClients: "150",
        // totalCustomerReviews: "100",
        // email: "mfaizansoomro00@gmail.com",
        // skills: [
        //     {name: 'html', percentage: '20'},{name:'css', percentage: '50'},{name: 'react', percentage: '90'}
        // ]