# Guia de desenho da casita (v17.41)

Regras para que todo desenho novo pareça feito pela mesma mão dos que já existem.

## Traço
- Linha de contorno `#22323A` nos ícones e cenas novas (a cena da entrada usa `#0B3B41`; os dois convivem).
- Espessura: 2,2 no quadro de 48 (ícones dos cômodos), 1,5 no quadro de 24 (ícones de categoria), 3 nas partes grandes da cena.
- Pontas e junções sempre arredondadas (`stroke-linecap` e `stroke-linejoin` round).

## Cor
- Cores chapadas, sem degradê, exceto céu, telha e o cabelo da Isa.
- Paleta da casa: teal `#006D77`, água `#83C5BE`, neve `#EDF6F9`, pêssego `#FFDDD2`, coral `#E29578`.
- Cores dos cômodos (tokens `--c-*` em `estilosDS.js`): Contas `#E29578`, Lousa `#83C5BE`, Caê `#F6C177`, Lazer `#A8BCE8`, Mercado `#7FC8A9`, Mia e Marie `#C3B5E0`, Nós dois `#F28482`, Ajustes `#D9B98C`.
- Apoio: vermelho `#E25B45` (tomate, pipa, alfinete), amarelo `#F2C14E` (moeda, estrela), azul `#5B8FD6` (bola, chuva).

## Luz e sombra
- Sombra chapada embaixo de cada objeto: elipse `#0B3B41` com 14 % de opacidade.
- Brilho: um risco branco curto, 60 % a 70 % de opacidade, no alto à esquerda.

## Família
- Xan: sem barba, cabelo liso castanho-claro (`#A97B4F`), camisa branca, bermuda cáqui.
- Isa: cabelo comprido castanho-escuro (`#3E2A1F`) com as pontas caramelo (`#C08A55`), repartido de lado, sobrancelhas marcadas, brincos dourados (`#E3B341`).
- Caê: cabelo castanho (`#7A5236`) com franja.
- Pele `#F1C9A5`; olhos são pontos; bochecha rosada com 55 % a 60 % de opacidade.
- Mia: lulu laranja (`#E8A45C`), focinho creme. Marie: persa branca, contorno lilás acinzentado (`#8C8AA6`).

## Ícones da barra de baixo
- Quadro de 24, linha na cor do texto (`currentColor`), miolo da mesma cor com 20 % de opacidade.
- Mesmo tamanho e interface dos ícones antigos (`size`, `strokeWidth`), em `ICONES_BARRA` (`iconesCasa.jsx`).

## Movimento
- Curto e com pausa: rabos abanam de vez em quando, fumaça sobe, borboleta passeia.
- Ações ao acaso (`src/ui/acoes.js`): a cada 2,6 s a 7 s, um personagem livre faz uma ação sorteada, nunca a mesma duas vezes seguidas; tocar nele dispara uma na hora. A ação é só `data-acao="..."`; o desenho de cada uma fica no CSS da cena.
- Ações de cada um: Xan acena, pula, balança, inclina a cabeça, ri; Isa acena, manda beijo, dança, inclina a cabeça; Caê pula ("oba!"), balança, ri, olha; Mia late, corre atrás da bola, abana, rola, deita; Marie mia, se espreguiça, mexe o rabo, cochila, se lambe. No céu: bando de passarinhos, aviãozinho, estrela cadente.
- Aceno: cerca de 3,2 s no total (sobe o braço, três acenos calmos, desce). Nada de ciclos curtos repetidos.
- Nunca animar `transform` num elemento que já tem o atributo `transform`: anime um `<g>` de dentro.
- Chuva nas cenas: só quando chove de verdade em Brasília (`useChuvaReal` em `src/ui/chuva.js`). No computador, `ChuvaNoCeu` (`src/ui/chuvaArte.jsx`) e `chuva2()` no gerador da entrada.
- A entrada do computador é gerada por `arte/entrada_larga.py` (não editar `entradaArte.js` à mão): atores `en-ator-*`, cabeça `en-cabeca`, braço livre `en-braco-fora`, balões `en-bolha`.
- Tempo de verdade (`useTempoReal`): chuva, trovoada (`raio` + clarão de 7 s; Mia e Marie encolhidas) e arco-íris (de dia, até duas horas depois da chuva). Clarões: no máximo dois por ciclo de 7 s (bem abaixo do limite de 3 por segundo).
- "Calmas" (`html[data-movimento="calmo"]`): animações de ambiente continuam, ninguém age sozinho; o toque continua valendo.
- Tudo para com "Pausar animações" (`html[data-movimento="parado"]`) e com "reduzir movimento" do sistema; nessas condições, ninguém age sozinho.

## Onde está cada desenho
- Ícones dos cômodos, vinhetas e ícones da barra: `src/ui/iconesCasa.jsx`.
- Ícones de categoria: `DESENHOS` em `src/ui/base.jsx`.
- Bonecos da família (frente): `Boneco` em `src/ui/base.jsx`. De costas: `src/ui/cena.jsx` (celular) e `src/ui/entradaArte.js` (computador).
- Mia e Marie nos vazios: `MascoteVazio` em `src/ui/artesFamilia.jsx`.
- Conquistas e tela de carregamento: `src/ui/Conquista.jsx`.
- Quintal da família (Início do celular): `src/ui/Quintal.jsx`. Família de frente: Xan à esquerda, Caê no meio, Isa à direita, de mãos dadas; Marie no degrau da porta; Mia com a bola. Post-its da lousa na porta, envelopes das contas na caixa de correio, Caê de mochila nos dias de aula. Casa com toldo listrado, arandela, plaquinha, vasos, capacho, tijolos na chaminé; varal (da árvore até o poste ao lado da caixa de correio), lampião ao lado do caminho (nada no canto direito de baixo, onde fica o botão de lançar), caixa de correio, casinha de passarinho, regador e o caminhãozinho do Caê.
- Céu da entrada do celular (acima da casa): `CeuExtra` em `src/ui/cena.jsx` (nuvens, balõezinhos, Cruzeiro do Sul).
- Família dentro da casa do computador: `cs-gente` em `src/ui/CasaDesenho.jsx` (os mesmos desenhos do quintal, em miniatura); aparece também na casa larga.

## Novidades da v17.36
- Céu contínuo: `src/ui/ceu.js` (paletas por hora, sol e lua em arco, sombras). O quintal usa tudo; a entrada do celular, só a cor de dia.
- Profundidade e textura: `src/ui/profundidade.js` (`--px` nas cenas; grão de papel em `::before`).
- Selinho de estado nos ícones dos cômodos: `marcaDoEstado` em `src/ui/iconesCasa.jsx` (círculo de raio 9 no canto de cima à direita do quadro de 48).
- Humores dos rostos: `HUMORES` em `src/ui/base.jsx` (trocam só olhos e boca).
- Jardim do quintal: flores por conta, girassol do mês e cesta da feira, em `src/ui/Quintal.jsx`.
- Entrar pela porta: `src/ui/portaAbre.js`.
- Guia de estilo vivo: `src/ui/GuiaEstilo.jsx` (Ajustes). Ao criar um componente novo, acrescente-o lá.
- Nomes de classe: a etiqueta de estado é `.selo-estado`; `.selo` é só o carimbo redondo da animação de salvar.

## Novidades da v17.37
- Céu contínuo no computador: paleta `CEU_CASA` em `src/ui/ceu.js` (só de dia). A entrada do computador recebe as cores por variáveis (`--ceu-1`, `--ceu-2`, `--sol-x`, `--sol-y`).
- Faixa ilustrada de cabeçalho (piloto): `FaixaMercado` em `src/ui/Mercado.jsx`; quadro de 340 por 40, mesma linha `#22323A`.
- Antes de criar uma classe de estilo, confira se o nome já existe: `python3 testes/estilos_repetidos.py`.

## Novidades da v17.38
- **Faixas ilustradas em mais três cômodos** (`src/ui/faixas.jsx`, só no celular, 40 px de altura, mesma regra `.faixa-comodo` do Mercado):
  - Contas (aba Mês): um envelope por conta no varal. Vencida tem selo de exclamação, a pagar é creme, paga fica apagada com visto.
  - Lousa: um post-it por recado do mês em vista. Aberto é colorido; riscado fica apagado com visto. Contas que aparecem na lousa não contam.
  - Mia e Marie: um potinho por pet. Coração quando não há dose pendente, pontinho de aviso quando há dose de hoje, exclamação quando há dose atrasada.
- A faixa é enfeite com informação repetida da tela (`aria-hidden`); nada depende só dela.
- Cabeçalho com faixa e navegação de mês: a navegação ocupa a linha inteira (`.cabecalho-com-faixa > .linha-flex`).

## Novidades da v17.39
- **Contorno único**: a cena da entrada (celular e computador) passou a usar `#22323A`, o mesmo do quintal. A roupa do Caê na entrada (camiseta `#F4EBA0`, short `#83C5BE`) agora é a do quintal. Na entrada a família continua de costas, de propósito.
- **Roupa conforme o tempo** (`clima` em `Xan`, `Isa`, `Cae`): frio (abaixo de 17 °C) põe gorro e cachecol; calor (30 °C ou mais) põe óculos de sol e boné. Chuva de verdade abre o guarda-chuva da família (`.q-guarda-chuva`). Peças dentro de `.q-cabeca` acompanham a cabeça nas ações.
- **Lua na fase real** (`faseDaLua`, `caminhoDaLua` em `ceu.js`): calculada pela data, sem rede, vista do hemisfério sul. Coruja no galho à noite.
- **Datas no quintal**: árvore de Natal com presentes, fogueira em junho, fogos no Ano-Novo, corações no aniversário de casamento. Na tela de entrada (antes da senha) só entram datas públicas.
- **Estados no quintal**: potinho de Mia e Marie (cheio, ou vazio com aviso se há dose atrasada); estrelinhas na Mia quando as contas fixas do mês estão todas pagas.
- **Telas vazias por cômodo** (`vazios.jsx`, `VazioDoComodo`): a Mia ou a Marie ao lado de um objeto do cômodo (varal vazio, lousa limpa, cesta cheia, potinho, pipa, blocos).
- **Faixas dos cabeçalhos**: linhas soltas (corda, prateleira, carrinho) em branco translúcido, para valer em qualquer cor de cabeçalho e no tema escuro. Objetos com preenchimento claro seguem com contorno escuro.
- **Regra nova**: nada de desenho novo no canto de baixo à direita do quintal (fica sob o botão de lançar).

## Design system (v17.40)
Todo estilo usa as escalas definidas em `src/ui/estilos.js` (`:root`). Valor solto não entra: `testes/design_system.py` acusa e `python3 arte/uniformizar.py` conserta.
- **Cantos**: `--r-xxs` 2, `--r-xs` 4, `--r-sm` 8, `--r-md` 12, `--r-lg` 16, `--r-xl` 20, `--r-pill`. Círculo continua `50%`.
- **Letras**: `--t00` .66, `--t0` .72, `--t1` .78, `--t15` .84, `--t2` .9, `--t3` 1, `--t35` 1.1, `--t4` 1.2, `--t5` 1.65, `--t55` 2, `--t6` 2.6 (rem). `--t00` só no computador. Impressão (pt) e tamanhos relativos (em, clamp) ficam fora.
- **Pesos**: 400 texto, 600 apoio, 700 forte, 800 título, 900 número.
- **Sombras**: `--sombra-1` (rente), `--sombra` (cartão), `--sombra-3` (flutua); `--sombra-papel-1/2/3` para papéis e adesivos. As três primeiras mudam no tema escuro. Sombras que são parte de um desenho (anel, borda dura de botão, luz) ficam escritas no próprio desenho.
- **Contorno dos desenhos**: `#22323A` em todas as cenas, ícones e faixas.
