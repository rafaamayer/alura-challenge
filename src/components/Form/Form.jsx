import styles from './Form.module.css'

export function FormInput(props) {
    return (
        <>
            <input type={props.typeInput} placeholder={props.text} className={styles.form}/>
        </>
    )
}

export function FormInputColor(props) {
    return (
        <>
            <input type="color" className={`${styles.form} ${styles.formColor}`}/>
        </>
    )
}

export function FormTextArea(props) {
    return (
        <>
            <textarea placeholder={props.text} className={`${styles.form} ${styles.formTextArea}`} rows="5" />
        </>
    )
}

export function FormCode(props) {
    const style = {paddingLeft: 30}
    return (
        <span className={`${styles.formCode}`}>
            <div className={styles.pseudos}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <textarea type={props.typeInput} className={styles.formCode} style={style}/>
        </span>
    )
}

export function FormSelect(props) {
    return (
        <select id={props.id} placeholder="Escolha sua linguagem" className={styles.form}>
            {props.list.map(item => {
                return (
                    <option className={styles.formSelected}>{item}</option>
                )
            })}  
        </select>
    )
}

export function FormLabel(props) {
    return (
        <>
            <label for={props.reference} className={styles.formLabel}>{props.label}</label>
        </>
    )
}
