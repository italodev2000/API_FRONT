function Erro({ mensagem }) {
  return (
    <div className="erro">
      <div className="erro-icon">⚠️</div>
      <p className="erro-msg">{mensagem}</p>
    </div>
  );
}

export default Erro;
