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

export interface HandleCivilizationDetailProps {
    civilizationsData: CivilizationInterface[] | undefined;
    slug: string;
    handleCivilizationDetailDataChange: Function; //(data: CivilizationInterface | undefined) => void;
    setLoading: (loading: boolean) => void;
}