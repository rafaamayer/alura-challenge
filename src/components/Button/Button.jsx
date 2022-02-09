import styles from './Button.module.css'
import hljs from 'highlight.js'

//const a = "Hello Word"

export function Button(props) {

    function highlightCode(){
        const textArea = document.querySelector('textarea.code')
        //const code = textArea.value
        hljs.highlightElement(textArea) //Maybe this is the way
       // hljs.highlight(code, {language: 'javascript'})
    }

    return (
        <>
            <button onClick={highlightCode} className={styles.button}>{props.text}</button>
        </>
    )
}