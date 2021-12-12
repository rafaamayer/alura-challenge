import logo from './img/logo-plataforma.png';
import image from './img/image.png'
import {  DropDownMenu } from './components/DropDown/DropDown.jsx'
import { Button } from './components//Button/Button.jsx'
import { FormInput, FormCode } from './components/Form/Form.jsx'
import { Personalizacao, Projeto } from './components/Componentes/Componentes';

function App() {
  return (
    <div className="container">

      {/* Header */}
      <div className="row mb-5 my-3 header">

        <div className="col-8 col-sm-3 col-md-2">
          <img src={logo} width='100vw' alt='logo'/>
        </div>

        <div className="col-2 col-sm-7 col-md-8">
          <i class="fas fa-search d-sm-none"></i>
          <div className="d-none d-sm-block header-form">
            <FormInput text="Busque por algo"className=""/>
          </div>
          
        </div>

        <div className="col-2 col-sm-2 col-md-2 d-lg-none">
          <DropDownMenu />
        </div>

        <div className="col-lg-2 d-lg-block d-none d-sm-none d-md-none">
          <img src={image} width="100vw" alt='perfil'/>
        </div>
      </div>

      {/* Main */}

      <div className="row">

        <nav className="col-lg-4 d-none d-lg-block">
          OI
        </nav>

        <div className="col-12 col-lg-4">
          <section className="code-bg">
            <FormCode/>
          </section>
          <Button text="Vizualizar com o highlight" />
        </div>

        <div className="d-none d-lg-block col-lg-4">
          <Projeto />
          <Personalizacao />
        </div>

      </div>

      <div className="row">
        <div className="col-12 d-lg-none">
          <Projeto />
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-lg-none">
          <Personalizacao />
        </div>
      </div>

    </div>
  );
}

export default App;
