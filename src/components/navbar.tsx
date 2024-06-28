
import "./navbar.css"
import FlightLandIcon from '@mui/icons-material/FlightLand';

function NavBar() {
  return (
    <>
      <nav>
        <div>
          <a href="#home"><FlightLandIcon className="icon"/></a>
        </div>
        <div>
          <ul>
            <a><li>Voos</li></a>
            <a><li>Passagens</li></a>
            <a><li>Ajuda</li></a>
            <a><li>Mapa</li></a>
          </ul>
        </div>
        <div className="cadastrarButton">
          <a href="#cadastro">Cadastrar</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar