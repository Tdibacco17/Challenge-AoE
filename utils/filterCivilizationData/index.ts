import { CivilizationInterface, HandleCivilizationDetailProps } from "@/types/civilizationTypes";

export const handleCivilizationDetail = ({
    civilizationsData,
    slug,
    handleCivilizationDetailDataChange,
    setLoading
}: HandleCivilizationDetailProps) => {
    if (civilizationsData && civilizationsData.length > 0) {
        const result = civilizationsData.filter(
            (itemData: CivilizationInterface) => itemData.name === slug
        );

        if (result.length > 0) {
            handleCivilizationDetailDataChange(result[0]);
        } else {
            // En caso de que no exista, seteo en undefined
            handleCivilizationDetailDataChange(undefined);
        }
    } else {
        // En caso de refrescar la página, volver a llamar a la API
        setLoading(true);
    }

    // Si llegamos aquí, ya hemos manejado los datos, podemos establecer setLoading a false
    setLoading(false);
};