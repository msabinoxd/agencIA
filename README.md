<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7434ea53-4e24-48a3-9936-226a5cb806da

## Run Locally

**Prerequisites:**  Node.js


   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Estrutura do Projeto (Funil de Vendas)

O projeto está organizado com foco em conversão contendo exatamente 5 páginas principais estruturadas em um funil:

- **3 Landing Pages (LPs) Iniciais:**
  - `Home` (`/`)
  - `HomeV2` (`/v2`)
  - `HomeV3` (`/v3`)
  *(Focadas na primeira captação de leads. Ideais para testes A/B).*

- **2 Páginas Subsequentes (Funil):**
  - `FunilPage` (`/funil`) - Para sequência de vendas secundária, upsells ou qualificação.
  - `ThankYouPage` (`/obrigado`) - Checkout ou página de confirmação/agradecimento.

> **Nota de versionamento civil/backup:** Componentes sem uso ativo (_ex: antigas variações de LPs como a HomeV4_) ficam arquivadas com logs na pasta `legacy/`.
