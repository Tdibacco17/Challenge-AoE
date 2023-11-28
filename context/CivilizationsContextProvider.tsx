'use client'
import { CivilizationDataContextInterface, CivilizationInterface } from "@/types/CivilizationTypes";
import { ReactNode, createContext, useState } from "react";

export const CivilizationsContext = createContext<CivilizationDataContextInterface | {}>({});
export const CivilizationsProvider = ({ children }: { children: ReactNode }) => {
    const [civilizationsData, setCivilizationsData] = useState<CivilizationInterface[] | undefined>(undefined);
    const handleCivilizationsDataChange = (civilizationsData: CivilizationInterface[]) => {
        setCivilizationsData(civilizationsData);
    };
    return (
        <CivilizationsContext.Provider
            value={{
                civilizationsData,
                handleCivilizationsDataChange,
            }}
        >
            {children}
        </CivilizationsContext.Provider>
    );
};