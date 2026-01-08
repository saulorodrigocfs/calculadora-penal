# Calculadora Penal ⚖️

Aplicação full-stack desenvolvida para realizar o cálculo de **dosimetria de
dias-multa**, com base na pena aplicada dentro de um intervalo legal definido
(pena mínima e pena máxima).

O projeto foi criado para auxiliar na análise de penas, aplicando **regras de
proporcionalidade previstas no Direito Penal**.

---

## 🧠 Sobre o Projeto

No processo de julgamento penal, além da pena privativa de liberdade, é comum
a aplicação de **pena de multa**, calculada em dias-multa.

A **Calculadora Penal** recebe como entrada:
- Pena mínima prevista em lei
- Pena máxima prevista em lei
- Pena aplicada no caso concreto
- Dias-multa mínimos
- Dias-multa máximos

Com base nesses dados, o sistema calcula automaticamente os **dias-multa
proporcionais à pena aplicada**, evitando cálculos manuais e reduzindo erros.

---

## ⚙️ Funcionalidades

### 🔹 Backend (ASP.NET Core)
- API REST para cálculo de dias-multa
- Implementação da regra de proporcionalidade
- Validação de dados de entrada
- Documentação da API com Swagger
- Endpoint funcional e testado

### 🔹 Frontend (React)
- Interface para entrada dos dados
- Formulário de cálculo de dosimetria
- Layout pronto e organizado
- Integração com a API **em fase de ajustes**

---

## 🛠️ Tecnologias Utilizadas

### Backend
- C#
- ASP.NET Core
- Swagger

### Frontend
- React
- JavaScript
- HTML
- CSS

---

## 🚀 Status do Projeto

🔄 **Em desenvolvimento (fase final)**

- Backend 100% funcional
- API testada via Swagger
- Frontend com interface pronta
- Integração frontend ↔ backend em fase de correção

---

## 🔮 Evoluções Futuras

- Cálculo automático a partir do tipo de crime
- Inclusão de atenuantes e agravantes
- Banco de dados com parâmetros legais
- Eliminação da necessidade de preenchimento manual de mínimos e máximos

Essas evoluções dependem de levantamento de dados jurídicos com profissionais
da área do Direito.

---

## 🧠 Aprendizados

- Desenvolvimento de API REST com ASP.NET Core
- Implementação de regras de negócio complexas
- Documentação de API com Swagger
- Integração frontend e backend
- Separação de responsabilidades (camadas)
- Tratamento de validações e erros

---

## 📌 Observações

Este projeto tem caráter educacional e técnico, não substituindo análise jurídica
realizada por profissionais habilitados.
