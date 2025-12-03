function SearchBox({ ddd, setDdd, buscarDDD, handleKeyPress }) {
  return (
    <div className="search-box">
      <input
        type="number"
        className="input-field"
        placeholder="Digite o DDD (ex: 11, 21, 85)"
        value={ddd}
        onChange={(e) => setDdd(e.target.value)}
        onKeyPress={handleKeyPress}
        maxLength={2}
      />
      <button onClick={buscarDDD} className="btn-primary">
        Buscar
      </button>
    </div>
  );
}

export default SearchBox;
