import logo from './img/logo-plataforma.png';
import image from './img/image.png'
import { FormInput, FormSelect, FormLabel, FormButton, DropDownMenu } from './components/Components.jsx'

const lista = ["JavaScript", "Python", "Java"]
function App() {
  return (
    <div className="container">
      <div className="row mb-5 header">

        <div className="col-8 col-sm-4 col-md-2">
          <img src={logo} width='100vw' />
        </div>

        <div className="col-2 col-sm-6 col-md-8">
          <i class="fas fa-search d-sm-none"></i>
          <FormInput className="d-none d-sm-block form header-form" text="Busque por algo"/>
        </div>

        <div className="col-2 col-sm-2 col-md-2 d-lg-none">
          <DropDownMenu />
        </div>

        <div className="col-lg-2 d-lg-block d-none d-sm-none d-md-none">
          <img src={image} width="100vw" />
        </div>
      </div>

      <div className="row">

        <nav className="col-lg-4 d-none d-lg-block">
          OI
        </nav>

        <div className="col-12 col-lg-4">
          <section>
            <FormInput text="Digite seu código"/>
          </section>
          
          <FormButton text="Salvar código" />
        </div>

        <div className="d-none d-lg-block col-lg-4">

          <label className="form-label">Seu Projeto</label>
          <section>
            <FormInput text="Nome do seu projeto" />
            <FormInput text="Descrição do seu projeto" />
          </section>

          <label for="linguagens">Personalização</label>
          <section>
            <FormSelect id="linguagens" list={lista} />
            <input type="color do seu projeto" />
          </section>

          <FormButton text="Salvar projeto"/>
        </div>

      </div>

      <div className="row">
        <div className="col-12 d-lg-none">
          <FormLabel className="form-label" label="Seu Projeto" />

          <section>
            <FormInput text="Nome do seu projeto" className="form" />
            <FormInput text="Descrição do seu projeto" />
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-lg-none">
          <label for="linguagens">Personalização</label>
          <section>
              <FormSelect id="linguagens" list={lista} />
              <FormInput text="Cor do seu projeto" />
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-lg-none">
          <FormButton text="Salvar projeto"/>
        </div>
      </div>

    </div>
  );
}

export default App;
