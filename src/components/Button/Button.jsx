import styles from './Button.module.css'

export function Button(props) {
    

    function highlightCode(){
        return
    }
    
    return (
        <>
            <button onClick={highlightCode} className={styles.button}>{props.text}</button>
        </>
    )
}