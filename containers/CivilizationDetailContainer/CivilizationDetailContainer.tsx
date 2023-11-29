'use client'
import CivilizationDetailComponent from "@/components/CivilizationDetailComponent/CivilizationDetailComponent";
import { CivilizationDetailContext } from "@/context/CivilizationDetailContextProvider";
import { CivilizationsContext } from "@/context/CivilizationsContextProvider";
import { CivilizationDataContextInterface } from "@/types/civilizationTypes";
import { fetchCivilizationsData } from "@/utils/fetchFunctions";
import { handleCivilizationDetail } from "@/utils/filterCivilizationData";
import { useContext, useEffect, useState } from "react";

export default function CivilizationDetailContainer({ params }: { params: { slug: string } }) {
    const { civilizationsData, handleCivilizationsDataChange } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    const { handleCivilizationDetailDataChange } = useContext(CivilizationDetailContext) as CivilizationDataContextInterface
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Filtrar por slug
        if (civilizationsData) {
            handleCivilizationDetail({
                civilizationsData,
                slug: params.slug,
                handleCivilizationDetailDataChange,
                setLoading
            });
        } else { // En caso de refrescar la pagina volver a llamar a la API
            fetchCivilizationsData({
                handleCivilizationsDataChange,
                setLoading
            });
        }
    }, [params.slug, civilizationsData]);

    return <CivilizationDetailComponent loading={loading} />
}