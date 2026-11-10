# Nossa casita · v17.40 (10/11/2026)

## Como subir (igual à v17.39; a ordem importa)
1. Primeiro a pasta `partes` inteira.
2. Depois `index.html`, `sw.js` e `capa.png`.

**Suba o `capa.png` desta versão mesmo que já tenha subido o da v17.39**: o da v17.39 saiu com o texto cortado na borda (erro meu de empacotamento); o desta está certo. O `leitor-pdf.js` não mudou.

## O que mudou: design system uniformizado
Não é um redesenho. É a padronização do que variava sem motivo; à vista, as diferenças são de 1 a 4 pixels.
1. **Cantos**: de 64 valores para uma escala de 7 (2, 4, 8, 12, 16, 20 e pílula).
2. **Tamanhos de letra**: os valores avulsos foram para uma escala de 11 degraus (ajuste máximo de 0,02 rem).
3. **Pesos de letra**: de 9 para 5 (400, 600, 700, 800, 900).
4. **Sombras**: as simples viraram 6 níveis nomeados e passaram a acompanhar o tema escuro. Sombras que fazem parte de um desenho ficaram como estavam.
5. **Contorno dos desenhos**: as casas do computador usavam outro tom; agora tudo usa `#22323A`.
6. **Guia de estilo** (Ajustes): seções novas "Escala de letras" e "Cantos e sombras".
7. **Proteção**: `testes/design_system.py` acusa valor solto; `python3 arte/uniformizar.py` conserta.

Foram 921 trocas nos arquivos de estilo, feitas por script.

## Testes
- Novo: `testes/design_system.py`.
- Bateria completa depois da mudança: tudo certo, menos `importar` e `v17_25` (limitação do ambiente de teste, como antes).

## Não verificado
- Aparelho real e site publicado (valem as ressalvas da v17.39, que também ainda não foi vista no ar).
- Por captura, conferi as dez telas principais do celular no tema claro. Tema escuro e computador ficaram por conta dos testes automáticos (contraste, estouro de layout), sem olhar tela a tela.

## Ficou de fora, de propósito
- Cores de interface fora da paleta e a estrutura dos cabeçalhos (uns com ícone, outros com navegação de mês, Ajustes só com título). Mexer nisso já é redesenho.
