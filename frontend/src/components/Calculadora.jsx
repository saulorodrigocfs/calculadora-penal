import { useState } from "react";
import "../styles/calculadora.css";
import { calcularDiasMulta } from "../services/api";

export default function Calculadora() {
  const [form, setForm] = useState({
    penaMin: "",
    penaMax: "",
    penaAplicada: "",
    diasMin: "",
    diasMax: ""
  });

  const [resultado, setResultado] = useState(null);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const resposta = await calcularDiasMulta(form);
    console.log("Resposta da API:", resposta);
    setResultado(resposta.diasMulta);
  } catch (error) {
    console.error("Erro ao calcular:", error);
    alert("Erro ao calcular. Verifique se o backend está rodando.");
  }
}

  return (
    <div className="container">
      <h2>⚖️ Calculadora Penal</h2>

      <form onSubmit={handleSubmit}>
        {[
          ["penaMin", "Pena mínima"],
          ["penaMax", "Pena máxima"],
          ["penaAplicada", "Pena aplicada"],
          ["diasMin", "Dias-multa mínimo"],
          ["diasMax", "Dias-multa máximo"]
        ].map(([name, label]) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            <input
              type="number"
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit">Calcular</button>
      </form>

      {resultado !== null && (
        <div className="resultado">
          Resultado: {resultado} dias multa
        </div>
      )}

      <div className="footer">
        Backend em C# (.NET) + Frontend em React
      </div>
    </div>
  );
}