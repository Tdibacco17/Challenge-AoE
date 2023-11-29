'use client'
import CivilizationListComponent from "@/components/CivilizationListComponent/CivilizationListComponent";
import { CivilizationsContext } from "@/context/CivilizationsContextProvider";
import { CivilizationDataContextInterface } from "@/types/CivilizationTypes";
import { fetchDataAndHandle } from "@/utils/loadData";
import { useContext, useEffect, useState } from "react";

export default function CivilizationsListContainer() {
    const { civilizationsData, handleCivilizationsDataChange } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    const [loading, setLoading] = useState<boolean>(!civilizationsData);

    useEffect(() => {
        const fetchData = async () => {
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
        fetchData();
    }, []);

    return <CivilizationListComponent loading={loading} />
}