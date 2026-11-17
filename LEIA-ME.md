# Nossa casita · v17.47 (17/11/2026)

**Visto no aparelho:** não. ( ) iPhone ( ) Android ( ) computador

## Arquivos para subir no GitHub
- `index.html`
- `sw.js`

`capa.png` e `leitor-pdf.js` não mudaram.

## O que mudou: fatura aberta do Nubank nas Contas
- **Formatos:** o CSV (`date,title,amount`, valor entre aspas com vírgula: `"240,89"`, `"- 8.967,81"`) e o PDF da fatura aberta (a mesma planilha impressa). A fatura fechada em PDF continua sendo lida como antes.
- **Onde:** no celular, Contas > Importar print de gastos > Fatura do mês. No computador, arrastar o arquivo, ou Vários > Ler a fatura (PDF ou CSV).
- **Mês:** cada gasto entra no dia da compra, no mês da compra (novembro), mesmo que o dinheiro saia da conta em dezembro. O mês da conferência vem automaticamente o das compras.
- **Parcelas:** contam no mês, com o número delas (ex.: Zara, parcela 3 de 3, em 01/11).
- **Estornos e créditos:** entram como receita, na categoria nova "Estorno".
- **Pagamento da fatura anterior** ("Pagamento recebido"): fica de fora.
- **Importar de novo ao longo do mês:** o app guarda uma impressão digital de cada linha (pessoa, dia, loja, valor, parcela e a vez em que a linha se repete no arquivo). Na próxima importação, só o que é novo aparece. Três ônibus iguais no mesmo dia continuam sendo três; um quarto, depois, entra como novo. CSV e PDF da mesma fatura dão a mesma impressão digital.
- **Xan e Isa:** cada um importa a sua fatura escolhendo "De quem é a fatura". A impressão digital é por pessoa: a fatura de um não esconde a do outro. Proteção: se a Isa abrir uma linha idêntica a uma que o Xan já importou (mesmo dia, loja, valor), ela vem desmarcada com "já importado na fatura de Xan", para evitar importar a fatura do outro por engano.
- **Categorias:** sugeridas pelo nome, conferidas na lista antes de lançar (como antes).
- **Fatura inteira:** ao escrever "fatura", "pagamento do cartão" e afins num gasto, o app avisa antes de lançar. Se um lançamento assim já existe no mês, aparece um aviso no topo das Contas pedindo para apagar e importar as compras, cada uma no seu dia.

## Testado com a sua fatura (16/11 e 17/11, fora do pacote)
- CSV: 107 linhas = 105 gastos + 1 estorno (IOF devolvido, R$ 33,82) + o pagamento (de fora). O PDF dá exatamente as mesmas 106 linhas e as mesmas impressões digitais.
- Gastos de novembro lançados: R$ 7.258,51 (a compra de 31/10, R$ 16,00, vem desmarcada como de outubro).
- Sequência: CSV até 15/11 → PDF completo (só as 15 linhas de 16 e 17/11 aparecem) → CSV completo (nada novo).

## Atenção
- **IOF:** na sua fatura, "IOF de compra internacional" (R$ 33,82, gasto, 04/11) e "IOF de volta de Anthropic" (R$ 33,82, estorno, 03/11) entram os dois, e se anulam no saldo, como você definiu.
- **A compra de 31/10 vai reaparecer** desmarcada em cada importação, até alguém lançá-la (em outubro) ou não. Ela não é perdida nem duplicada.
- **Lançamentos importados antes desta versão** não têm impressão digital. Se uma linha antiga coincidir em valor e data próxima, ela vem como "parece já lançado", desmarcada, como antes.
- **Se alguém editar** o valor ou o nome de um gasto importado, a impressão digital continua a da linha original. Reimportar não duplica.
- **Apagar** um gasto importado faz ele voltar na próxima importação da mesma fatura.

## Testes
- Novo: `testes/v17_47.py`, com a fatura real.
- `v17_23` atualizado: o estorno agora entra como receita, e o que já foi importado some em vez de vir como "parece já lançado".
- Bateria completa: tudo certo, menos `importar` e `v17_25` (limitação do ambiente de teste, como sempre).
