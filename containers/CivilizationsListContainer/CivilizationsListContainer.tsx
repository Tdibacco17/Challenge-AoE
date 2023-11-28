'use client'
import CivilizationListComponent from "@/components/CivilizationListComponent/CivilizationListComponent";
import { CivilizationsContext } from "@/context/CivilizationsContextProvider";
import { CivilizationDataContextInterface } from "@/types/CivilizationTypes";
import { fetchDataAndHandle } from "@/utils/loadData";
import { useContext, useEffect } from "react";

export default function CivilizationsListContainer() {
    const { handleCivilizationsDataChange } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDataAndHandle();

            if (result !== null) {
                handleCivilizationsDataChange(result);
            } else {
                handleCivilizationsDataChange([]);
            }
        };

        fetchData();
    }, []);

    return <CivilizationListComponent />
}