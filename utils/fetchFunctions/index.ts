import { ResponseInterface } from "@/types";
import { FetchCivilizationsDataProps } from "@/types/fetchsTypes";

export const fetchDataAndHandle = async () => {
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

export const fetchCivilizationsData = async ({
    handleCivilizationsDataChange,
    setLoading
}: FetchCivilizationsDataProps) => {
    try {
        const result = await fetchDataAndHandle();
        handleCivilizationsDataChange(result);
        //si la request falla seteo en undefined 
        if (!result) {
            handleCivilizationsDataChange(undefined);
        }
    } catch (error) {
        // console.error("Error fetching data:", error);
        handleCivilizationsDataChange(undefined);
    } finally {
        setLoading(false);
    }
};