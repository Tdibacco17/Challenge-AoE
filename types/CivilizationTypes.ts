export interface CivilizationDataContextInterface {
    handleCivilizationsDataChange: Function;
    civilizationsData?: CivilizationInterface[];
    handleCivilizationDetailDataChange: Function;
    civilizationData?: CivilizationInterface;
}

export interface CivilizationInterface {
    wins: number,
    name: string,
    total: number,
    left_image: string,
    right_image: string
}