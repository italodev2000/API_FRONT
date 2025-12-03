import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Loading from "./components/Loading";
import Resultado from "./components/Resultado";
import Erro from "./components/Erro";
import "./App.css";

function App() {
  const [ddd, setDdd] = useState("");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  function buscarDDD() {
    if (!ddd) {
      setErro("Por favor, digite um DDD!");
      return;
    }

    const dddNum = parseInt(ddd);
    if (dddNum < 11 || dddNum > 99) {
      setErro("Digite um DDD válido (entre 11 e 99)!");
      return;
    }

    setErro(null);
    setDados(null);
    setLoading(true);

    axios
      .get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
      .then((res) => {
        console.log(res.data);
        setDados(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErro("DDD não encontrado!");
        setLoading(false);
      });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      buscarDDD();
    }
  }

  return (
    <div className="container">
      <Header />

      <main className="main-content">
        <SearchBox
          ddd={ddd}
          setDdd={setDdd}
          buscarDDD={buscarDDD}
          handleKeyPress={handleKeyPress}
        />

        {loading && <Loading />}

        {erro && <Erro mensagem={erro} />}

        {dados && <Resultado dados={dados} />}
      </main>

    </div>
  );
}

export default App;
