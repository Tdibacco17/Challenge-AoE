import { NextResponse } from "next/server";
export async function GET(req: Request) {
    try {
        const response = await fetch(`${process.env.API_URL}`);
        const civilizationsData = await response.json();

        if (civilizationsData && civilizationsData.civs_list) {
            return NextResponse.json({ //cargar la data en caso que exista
                message: "Data is loaded",
                success: true,
                data: civilizationsData.civs_list,
                status: 200
            }, {
                status: 200
            })
        } else { //atrapar error si no existe civs_list
            return NextResponse.json({
                message: "Error in GET request: Invalid data format",
                success: false,
                status: 400
            }, {
                status: 400
            })
        }
    } catch (error) { //si falla el .json() lo atrapamos aca
        return NextResponse.json({
            message: "Catch error in GET request: Unable to parse JSON.",
            success: false,
            status: 500
        }, {
            status: 500
        });
    }
}