import styles from "./ErrorOcurredComponent.module.scss"
export default function ErrorOcurredComponent({ text }: { text: string }) {
    return <p className={styles["text-error"]}>{text}</p>
}