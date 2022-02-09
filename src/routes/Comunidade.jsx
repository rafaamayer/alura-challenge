import logo from '../img/logo-plataforma.png';
import image from '../img/image.png'
import {  DropDownMenu } from '../components/DropDown/DropDown'
import { FormInput } from '../components/Form/Form'
import { NavBar } from '../components/NavBar/Menu'

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

        <aside className="col-lg-3 d-none d-lg-block">
          <NavBar />
        </aside>

        <div className="col-12 col-lg-6">
            <h1>WIP</h1>
        </div>

      </div>
      
    </div>
  );
}

export default App;