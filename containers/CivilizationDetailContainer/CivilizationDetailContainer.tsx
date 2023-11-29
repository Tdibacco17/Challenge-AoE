'use client'
import CivilizationDetailComponent from "@/components/CivilizationDetailComponent/CivilizationDetailComponent";
import { CivilizationDetailContext } from "@/context/CivilizationDetailContextProvider";
import { CivilizationsContext } from "@/context/CivilizationsContextProvider";
import { CivilizationDataContextInterface, CivilizationInterface } from "@/types/CivilizationTypes";
import { fetchDataAndHandle } from "@/utils/loadData";
import { useContext, useEffect } from "react";

export default function CivilizationDetailContainer({ params }: { params: { slug: string } }) {
    const { civilizationsData, handleCivilizationsDataChange } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    const { handleCivilizationDetailDataChange } = useContext(CivilizationDetailContext) as CivilizationDataContextInterface

    useEffect(() => {// Filtrar por slug
        if (civilizationsData && civilizationsData?.length > 0) {

            const result = civilizationsData.filter(
                (itemData: CivilizationInterface) => itemData.name === params.slug);

            if (result.length > 0) {
                handleCivilizationDetailDataChange(result[0])
            } else {
                handleCivilizationDetailDataChange(undefined)
            }
        } else { // En caso de refrescar la pagina volver a llamar a la API
            const fetchData = async () => {
                const result = await fetchDataAndHandle();

                if (result !== null) {
                    handleCivilizationsDataChange(result);
                } else {
                    handleCivilizationsDataChange(undefined);
                }
            };

            fetchData();
        }
    }, [params.slug, civilizationsData?.length]);

    return <CivilizationDetailComponent />
}