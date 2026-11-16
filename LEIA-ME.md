# Nossa casita · v17.46 (15/11/2026)

**Visto no aparelho:** não. ( ) iPhone ( ) Android ( ) computador

## Arquivos para subir no GitHub
- `index.html`
- `sw.js`

`capa.png` e `leitor-pdf.js` não mudaram desde a v17.41. `AUDITORIA-v17.45.md` é o relatório do auditor independente, só para leitura (não suba).

## Como foi a vistoria
- **Própria:** varredura automática de todas as telas em 6 tamanhos (320, 390 e 768 no celular; 1280, 1440 e 1920 no computador), nos dois temas, procurando rolagem para o lado, elementos fora da tela, texto cortado, botões pequenos, imagens quebradas, contraste e erros de console; depois, o mouse passado sobre cada botão do computador e o foco do teclado com Tab.
- **Independente:** um auditor separado, sem ver meu trabalho, usou o site como uma pessoa usaria, por cerca de 25 minutos (relatório anexo).

## Corrigido
1. **Valor das Contas (gravidade média):** ao tocar num valor já escrito e digitar, os números novos se juntavam aos antigos no meio (R$ 8.500,00 + "120000" virava R$ 8.500.100,20) e o que passava de 9 dígitos era cortado em silêncio. Agora, entrar no campo seleciona o valor (digitar troca), os números entram sempre pelo fim e passar do máximo mostra "O valor máximo é R$ 9.999.999,99".
2. **Painel de lançar no computador (média):** depois de lançar, ele ficava rolado para baixo e o Valor sumia, mesmo saindo e voltando às Contas. Agora volta ao topo depois de lançar e sempre que as Contas abrem.
3. **Mercado no computador:** "nada no carrinho ainda" aparecia com itens no carrinho. Agora conta o carrinho de agora.
4. **Rodapé da casa lateral em 1024 px:** os botões ficavam cortados. Em lateral estreita, "Fechar" e "Atalhos" ficam só com o ícone.
5. **Lousa no celular:** o recado no quadradinho do dia quebrava no meio da palavra ("Busc/ar"). Agora quebra entre palavras.
6. **Botão flutuante de anotar (Lazer, Mia e Marie):** em telas baixas cobria o "Anotar" da própria tela. Agora só aparece quando os botões da tela saem da vista.
7. **Limite de letras sem aviso:** nomes longos paravam de entrar sem explicação (caixinha em 24, item do Mercado em 80). Perto do limite aparece "Faltam N letras".
8. **Leitor de tela:** os ícones de categoria eram lidos sem acento ("saude", "coracao"). Corrigido.
9. **Barra de baixo do Caê em 320 px:** os rótulos se encostavam ("CrescerCaderno"). Letra menor só em telas estreitas.
10. **Achado da vistoria própria, tema escuro no computador:** com o mouse sobre uma aba não selecionada (Caê, Mercado, Mia e Marie, Nós dois), o fundo ficava cinza médio e o texto claro quase sumia (contraste 2,9). Corrigido.

## Testes
- Novo: `testes/v17_46.py` (os 10 itens acima).
- Bateria completa: tudo certo, menos `importar` e `v17_25` (limitação do ambiente de teste, como sempre).
- Na primeira rodada da bateria, a correção 4 tinha quebrado outra coisa (a casa lateral deixava de caber na altura da tela). Refeita do jeito descrito acima e rodada a bateria inteira de novo.

## Não verificado
- Aparelho real e site publicado.
- O auditor não testou: importar print e PDF, impressão, troca de senha, restaurar de um dia, a tranca depois de 5 minutos, o estilo "pintado", gestos de arrastar e uso sem internet.
