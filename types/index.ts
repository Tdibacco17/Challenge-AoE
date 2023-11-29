import { CivilizationInterface } from "./civilizationTypes";

export interface ResponseInterface {
    message: string,
    success: boolean,
    data?: CivilizationInterface[],
    status: number
}