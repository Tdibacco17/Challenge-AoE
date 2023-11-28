import { NextResponse } from "next/server";
export async function GET(req: Request) {
    try {
        const response = await fetch(`${process.env.API_URL}`);
        const civilizationsData = await response.json();
        // console.log("[DATA]: ", civilizationsData);

        return NextResponse.json({
            message: "Message sent",
            success: true,
            data: civilizationsData.civs_list
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Catch error",
            success: false,
        }, {
            status: 500
        });
    }
}