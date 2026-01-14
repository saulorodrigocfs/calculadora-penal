const API_URL = "https://localhost:5169/api/Calculadora";

export async function calcularDiasMulta(dados) {
    const response = await fetch(`${API_URL}/dias-multa`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            penaMin: Number(dados.penaMin),
            penaMax: Number(dados.penaMax),
            penaAplicada: Number(dados.penaAplicada),
            diasMin: Number(dados.diasMin),
            diasMax: Number(dados.diasMax)
        })
    });

    if (!response.ok) {
        throw new Error("Erro ao calcular");
    }

    return response.json();
}
