import { CivilizationDataContextInterface, CivilizationInterface } from "@/types/CivilizationTypes"
import styles from "./CivilizationListComponent.module.scss"
import { CivilizationsContext } from "@/context/CivilizationsContextProvider"
import { useContext } from "react"
import Link from "next/link"
import LoadingListComponent from "../LoadingListComponent/LoadingListComponent"
export default function CivilizationListComponent({ loading }: { loading: boolean }) {
    const { civilizationsData } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    return (
        <div className={styles["container-list"]}>
            {
                loading ? (
                    <LoadingListComponent />
                ) : (
                    <>
                        {civilizationsData ?
                            civilizationsData.map((civilizationData: CivilizationInterface, index: number) => {
                                return <Link
                                    href={`/${civilizationData.name}`}
                                    className={`${styles["item-list"]} ${index === 0 && styles["first"]}`}
                                    key={index}
                                >
                                    {civilizationData.name}
                                </Link>
                            })
                            : <p className={styles["text-error"]}>Ocurrio un error inesperado</p>
                        }
                    </>
                )
            }
        </div>
    )
}