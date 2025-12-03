function Resultado({ dados }) {
  return (
    <div className="resultado">
      <h2 className="resultado-titulo">Resultado:</h2>
      <div className="resultado-content">
        <div className="info-card">
          <span className="info-label">Estado:</span>
          <span className="info-value">{dados.state}</span>
        </div>
        <div className="info-card">
          <span className="info-label">Cidades:</span>
          <div className="cidades-list">
            {dados.cities && dados.cities.length > 0 ? (
              dados.cities.map((cidade, index) => (
                <span key={index} className="cidade-tag">
                  {cidade}
                </span>
              ))
            ) : (
              <p>Nenhuma cidade encontrada</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultado;
