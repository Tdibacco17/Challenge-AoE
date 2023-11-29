'use client'
import CivilizationListComponent from "@/components/CivilizationListComponent/CivilizationListComponent";
import { CivilizationsContext } from "@/context/CivilizationsContextProvider";
import { CivilizationDataContextInterface } from "@/types/CivilizationTypes";
import { fetchCivilizationsData } from "@/utils/fetchFunctions";
import { useContext, useEffect, useState } from "react";

export default function CivilizationsListContainer() {
    const { civilizationsData, handleCivilizationsDataChange } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    const [loading, setLoading] = useState<boolean>(!civilizationsData);

    useEffect(() => {
        fetchCivilizationsData({
            handleCivilizationsDataChange,
            setLoading
        });
    }, []);

    return <CivilizationListComponent loading={loading} />
}