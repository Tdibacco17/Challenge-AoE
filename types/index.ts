import { CivilizationInterface } from "./CivilizationTypes";

export interface ResponseInterface {
    message: string,
    success: boolean,
    data?: CivilizationInterface[]
}