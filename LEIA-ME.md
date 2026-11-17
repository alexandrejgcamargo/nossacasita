# Nossa casita · v17.48 (17/11/2026)

**Visto no aparelho:** não. ( ) iPhone ( ) Android ( ) computador

Inclui a v17.47 (fatura aberta do Nubank). Se ainda não subiu a v17.47, esta já leva as duas.

## Arquivos para subir no GitHub
- `index.html`
- `sw.js`

`capa.png` e `leitor-pdf.js` não mudaram.

## O que mudou: comparativo de gastos nas Contas
- **Onde:** fixo nas Contas. No computador, logo abaixo do saldo do mês. No celular, logo abaixo do quadro "Sobrou/Faltou" da aba Mês, e também quando o mês ainda está vazio.
- **Escalas:** Semana, Mês e Ano. O app lembra a última escolhida.
  - **Semana:** de segunda a domingo. Esta semana contra a passada e a média das 4 anteriores.
  - **Mês:** dia 1 ao fim do mês. O mês em vista contra o anterior e a média dos 3 anteriores.
  - **Ano:** janeiro a dezembro. Este ano contra o anterior (e a média dos 2 anteriores, quando houver).
- **O que mostra:** o gasto somado ponto a ponto (quanto já tinha saído até cada dia, ou até cada mês). Estornos abatem o gasto.
- **Destaque:** quanto saiu até hoje e a diferença contra o mesmo ponto do período anterior ("28% a mais que outubro no mesmo ponto"), em verde quando gastou menos e em vermelho quando gastou mais. Num mês passado, compara o mês inteiro.
- **Interação:**
  - mouse ou dedo sobre o gráfico: linha vertical com os valores daquele dia;
  - setas do teclado: percorrem os dias;
  - legenda: tocar esconde ou mostra uma linha;
  - "Ver em tabela": os mesmos números em tabela.
- **Visual:** as linhas se desenham ao abrir (paradas se "Animações" estiver em parado), o ponto de hoje pulsa e o tema escuro tem cores próprias. As cores foram conferidas para daltonismo e contraste.

## Atenção
- **Contas fixas ainda não pagas** entram no dia do vencimento, como no "Saiu" do mês. Uma conta que vence depois de hoje não aparece na linha de hoje.
- **No celular**, a aba Mês tem a chave Mês/Ano no topo e o comparativo tem a sua própria (Semana/Mês/Ano). As duas são independentes.
- **No computador**, o varal das contas fixas desceu para a linha de baixo, em largura inteira, para o comparativo caber ao lado do saldo quando a tela é larga.

## Testes
- Novo: `testes/v17_48.py`: destaque, três linhas, mira com mouse e teclado, legenda, semana, ano, tabela, mês passado, tema escuro e celular sem rolagem para o lado.
- Bateria completa: tudo certo, menos `importar` e `v17_25` (limitação do ambiente de teste, como sempre). Na primeira rodada, `novidades` e `v17_12` falharam porque o botão "Ano" do comparativo tinha o mesmo nome do "Ano" da tela; os botões do comparativo agora se chamam "Comparativo por semana/mês/ano" (para leitor de tela) e os dois testes passaram.
