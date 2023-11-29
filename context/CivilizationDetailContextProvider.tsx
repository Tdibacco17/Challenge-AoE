'use client'
import { CivilizationDataContextInterface, CivilizationInterface } from "@/types/CivilizationTypes";
import { ReactNode, createContext, useState } from "react";

export const CivilizationDetailContext = createContext<CivilizationDataContextInterface | {}>({});

export const CivilizationDetailProvider = ({ children }: { children: ReactNode }) => {

    const [civilizationData, setCivilizationData] = useState<CivilizationInterface | undefined>(undefined);

    const handleCivilizationDetailDataChange = (civilizationData: CivilizationInterface) => {
        setCivilizationData(civilizationData);
    };

    return (
        <CivilizationDetailContext.Provider
            value={{
                civilizationData,
                handleCivilizationDetailDataChange,
            }}
        >
            {children}
        </CivilizationDetailContext.Provider>
    );
};