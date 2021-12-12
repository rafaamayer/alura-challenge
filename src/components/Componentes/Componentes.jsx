import { FormLabel, FormSelect, FormInput, FormTextArea } from "../Form/Form"
import { Button } from "../Button/Button"

const lista = ["JavaScript", "Python", "Java"]
export function Personalizacao(props) {
    return (
        <>
            <FormLabel reference="linguagens" label="Personalização" />
                <section>
                    <FormSelect id="linguagens" list={lista} />
                    <FormInput typeInput="color" />
                </section>
            <Button text="Salvar projeto"/>
        </>
    )
}

export function Projeto(props) {
    return (
        <>
            <FormLabel className="form-label" label="Seu Projeto" />
            <section>
                <FormInput typeInput="text" text="Nome do seu projeto" className="form" />
                <FormTextArea text="Descrição do seu projeto" />
          </section>
        </>
    )
}