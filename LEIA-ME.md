# Nossa casita · v17.41 (10/11/2026)

## Por que esta versão
A v17.39 passou a carregar o app por uma pasta `partes`. Publicado, o site não abriu no iPhone ("Demorou demais para carregar"). Esta versão desfaz só isso: **o app volta a ser um arquivo só**, como até a v17.38. Todo o resto das v17.39 e v17.40 continua.

## Arquivos para subir no GitHub
- `index.html`
- `sw.js`
- `capa.png` (imagem do link no WhatsApp; a da v17.39 saiu com o texto cortado, esta está certa)

Não há mais ordem de upload nem pasta. A pasta `partes` que está no GitHub pode ser apagada (não é mais usada). O `leitor-pdf.js` não mudou desde a v17.36.

## O que continua das v17.39 e v17.40
Frase do dia, quem entrou acena, roupa conforme o tempo, lua na fase real, datas no quintal, potinho, telas vazias por cômodo, cabeçalho que encolhe, arrastar para trocar o mês, selo no ícone, vibração (Android), botão do polegar, capa de compartilhamento e o design system uniformizado.

## O que saiu
- Carregamento por partes. O `index.html` volta a ter cerca de 2.200 KB.

## Testes
- Rodados depois da volta ao arquivo único: `v17_39b` (reescrito: confere que nada é pedido fora do index), `v17_39`, `v17_38`, `v17_36`, `v17_27`, `v17_26`, `sw`, `familia`, `design_system`. Todos certos.
- A bateria completa ainda está rodando quando este pacote foi fechado; aviso o resultado.

## Não verificado
- A causa exata da falha no iPhone. Não consegui acessar o site publicado daqui. O sintoma (tela de espera até o tempo esgotar, sem mensagem de erro de código) indica que o arquivo de entrada da pasta `partes` não chegou a rodar: ou a pasta não ficou no lugar esperado no GitHub, ou o Safari recusou o arquivo. Em arquivo único, nenhuma das duas hipóteses se aplica.
- Aparelho real: esta versão também não foi vista num iPhone por mim.
