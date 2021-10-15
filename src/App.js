import { useState } from "react";
import { ListaInscritos } from "./Components/ListaInscritos";
import "./App.css";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [novo, setNovo] = useState("");

  const processarOnClick = () => {
    setAlunos([...alunos, novo]);
    setNovo("");
  };

  return (
    <div className="App">
      <ListaInscritos alunos={alunos}>
        Aguardando o primeiro aluno ser cadastrado
      </ListaInscritos>
      Novo aluno:{" "}
      <input
        type="text"
        value={novo}
        onChange={(event) => setNovo(event.target.value)}
      />
      <button onClick={processarOnClick}>Adicionar Aluno</button>
    </div>
  );
}

export default App;
