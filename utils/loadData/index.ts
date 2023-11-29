import { ResponseInterface } from "@/types";

export async function fetchDataAndHandle() {
    try {
        //llamado a la api para traer los datos
        const rawData = await fetch("/api/civilizations", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        });
        const parseResponse: ResponseInterface = await rawData.json();

        if (parseResponse.status === 400) {
            return null // Retorna null cuando no trae datos 
        }

        return parseResponse.data; // Retorna rawData si todo es exitoso
    } catch (error) {
        // console.error("Error fetching data:", error);
        return null; // Retorna null si explota
    }
}