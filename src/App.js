import "./App.css";
import linha from "./imagens/linha_bosch.svg";
import logo1 from "./imagens/logo_bosch.png";
import { makeStyles, TextField } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", height: "5px", backgroundColor: "red"  }}>
      <img src= {linha} alt="Linha Bosch" class="linha"></img> 
      </div>
      <header class="cabecalho">
        <img src={logo1} alt="Logo Bosch" class="logo" />
        <h1 class="titulo">About Us:</h1>
        <TextField sx= {{marginLeft:"25%"}} id="outlined-basic"label="Search" variant="outlined" size="small"/>
        <a href="" class="icons-search"></a>
        <a href="" class="icons-home"></a>
        <a href="" class="icons-exit"></a>
      </header>
      <img src="./imagens/sombra.png" alt="Sombra" class="sombra"></img>
    </div>
  );
}

export default App;
