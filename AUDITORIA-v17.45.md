# Auditoria independente de QA: Nossa casita (versão 17.45, dist de 15/11/2026)

**Como foi feita:** Playwright (Chromium), com a nuvem simulada dos testes (`Nuvem`, `computador`, `celular`, `criar`, `entrar`, `dono`, `povoar9`). Relógio fixo em 15/11/2026, das 10h30 às 10h35. Usei um computador de 1440x900 (também 1024x700 e 1920x1080) e um celular de 390x844 (também 320x568 e um tablet de 768x1024), nos temas claro e escuro. Nada no projeto foi alterado.
Scripts: `/tmp/claude-0/-home-claude/5041a259-ed26-5b47-9a6b-1979505ad832/scratchpad/auditoria/s*.py`. Capturas: `.../auditoria/cap/`. Logs das varreduras: `.../auditoria/s13_*.log` e `s11_escuro.log`.

**Resumo:** não houve nenhum erro de console ou de página (`pageerror`) em nenhum passo, e o axe (wcag2a/aa e 21aa) passou sem violações em todos os cômodos e vistas do computador, nos temas claro e escuro. Os problemas encontrados são de comportamento e de usabilidade. Nenhum perde dados de forma grave, mas dois deles podem gravar um **valor de dinheiro errado** ou esconder um campo sem que a pessoa perceba.

---

## Bugs

### B1. Campo de valor: dígitos novos se juntam ao valor antigo e o excesso é cortado sem aviso. Gravidade: **média**
- **Aparelho:** celular (o mesmo componente aparece no computador). **Tema:** qualquer um.
- **Passos (`s5.py`, `s5b.py`):**
  1. Contas > Lançar > Receita. Digite 850000 (vira R$ 8.500,00).
  2. Toque em "Gasto". O valor R$ 8.500,00 continua no campo, e a observação "Salário Isa" também.
  3. Toque no campo de valor (sem selecionar tudo) e digite 120000.
- **O que aconteceu:** o campo mostrou **R$ 8.500.100,20**. Os dígitos entraram onde o cursor estava e o resto foi cortado pelo limite de 9 dígitos. Com o "preencher" do Playwright, que seleciona tudo antes de escrever, também saiu R$ 8.500.001,20 sempre que o foco vinha de outro campo. Só Ctrl+A seguido da digitação substituiu o valor de fato. No meu roteiro, isso gerou um parcelado "3x de R$ 2.833.333,73" quando o certo era 3x de R$ 400,00, e o lançamento foi gravado (`s3.py`).
- **Também:** digitar 99999999999 (11 dígitos) vira R$ 9.999.999,99 em silêncio. O limite existe, mas a pessoa não é avisada.
- **Esperado:** ao entrar num campo de valor já preenchido, o valor é substituído (ou tudo fica selecionado), ou então o cursor fica sempre no fim. O limite de dígitos deveria ser avisado. Ao trocar entre Receita e Gasto, faz sentido limpar ou perguntar.

### B2. Computador: depois de lançar, o painel "Lançar" fica rolado para baixo e o campo Valor some. Gravidade: **média**
- **Aparelho:** computador (1440x900 e 1024x700). **Tema:** os dois.
- **Passos (`s15.py`):**
  1. Contas > painel da direita. Preencha valor, observação e categoria.
  2. Role o painel até "Repete todo mês" (ou "Quem pagou") e lance.
  3. Saia das Contas e volte.
- **O que aconteceu:** o painel `.cm-painel` fica com `scrollTop` = 304, e o campo Valor fica em top = −158 px, fora da vista. O painel abre direto em "Observação". O único aviso, "há mais campos, role ↓", aponta para baixo. Só uma recarga da página volta ao normal. A tecla N continua focando o valor.
- **Esperado:** depois de lançar (e ao reabrir as Contas), o painel volta ao topo, com o Valor à vista.
- **Captura:** `cap/pc1440-escuro-contas-.png` e `cap/pc1024-claro-contas-.png`. Compare com `cap/pc-contas-limpo.png`, onde o Valor aparece.

### B3. Mercado no computador: o aviso diz "nada no carrinho ainda" com itens já no carrinho. Gravidade: **baixa**
- **Aparelho:** celular e computador juntos (sincronia). **Tema:** claro.
- **Passos (`s8.py`):**
  1. No celular, Mercado: ponha Banana e Leite no carrinho.
  2. Depois toque em "Vou ao mercado".
  3. No computador, abra o Mercado.
- **O que aconteceu:** o cartão diz "Isa está em Mercado, desde 10:35 · nada no carrinho ainda", mas a lista ao lado mostra "carrinho · Isa" em Banana e em Leite. Quando o item vai para o carrinho depois de "Vou ao mercado", a contagem aparece certa ("já pôs 1 no carrinho", `s9.py`).
- **Esperado:** a contagem considera o que já está no carrinho, ou a frase diz "desde que saiu".
- **Captura:** `cap/pc-mercado.png`.

### B4. Computador em 1024 px: os botões do rodapé da casa lateral ficam cortados. Gravidade: **baixa**
- **Aparelho:** computador de 1024x700. **Tema:** claro (o escuro deve ser igual).
- **O que aconteceu:** "Pausar animações" vai de −34 a 124 px e "Atalhos" vai de 227 a 320 px, mas a lateral só ocupa de 0 a 286 px. Por isso aparecem "ausar animações" e "Atal…".
- **Esperado:** os botões cabem na lateral (quebrando a linha ou mostrando só ícones).
- **Captura:** `cap/pc1024-claro-contas-.png` e `cap/pc1024-claro-mercado-Voltei do .png` (canto de baixo à esquerda).

### B5. Lousa no celular: a palavra é partida no meio dentro do quadradinho do dia. Gravidade: **baixa** (cosmética)
- **Aparelho:** celular de 390 px. **Tema:** claro.
- **Passos:** anote "Buscar o Caê às 17h" para hoje e olhe a faixa da semana.
- **O que aconteceu:** o texto aparece como "Busc / ar …".
- **Esperado:** quebrar entre palavras ou cortar com reticências numa linha só.
- **Captura:** `cap/cel-lousa-dia15.png`.

### B6. Mia e Marie em 320 px: o botão flutuante "Anotar" cobre outro botão "Anotar". Gravidade: **baixa**
- **Aparelho:** celular de 320x568. **Tema:** claro.
- **O que aconteceu:** ao abrir Saúde de Mia e Marie, o FAB `.fab-anotar` fica por cima do botão "Anotar" do cabeçalho "Marcado e feito" (sobreposição medida). O botão de baixo só fica alcançável depois de rolar.
- **Captura:** `cap/cel320-pets-fab.png`.
- No Início em 320 px, o "+" flutuante também cobre o título "Lousa" do cartão no primeiro quadro (`cap/_m320.png`, primeira coluna). A rolagem resolve.

### B7. Caixinha: o nome é cortado em 23 caracteres sem aviso. Gravidade: **baixa**
- **Aparelho:** celular. **Passos (`s7.py`):** Planos > Nova caixinha > nome "Viagem para a praia com o Caê e a família toda em janeiro de 2027 🏖️".
- **O que aconteceu:** a caixinha foi criada como **"Viagem para a praia com"** e o aviso confirmou o nome cortado. Pelo tamanho, parece um `maxlength` sem contador de caracteres. É uma suspeita: não conferi o atributo.
- **Esperado:** um contador ("faltam N caracteres", como na senha) ou um limite que avise.
- O mesmo acontece no Mercado: um item de 105 caracteres ficou com 80 ("…sem perfume"). "embalagem econômica 5kg" sumiu sem aviso.

### B8. Nomes de ícones sem acento (leitor de tela). Gravidade: **baixa**
- **Onde:** Ajustes > Categorias e tetos > tocar numa categoria.
- **O que aconteceu:** os botões se chamam "Ícone saude", "Ícone coracao", "Ícone aviao" e "Ícone cafe". O leitor de tela lê errado.
- **Esperado:** "saúde", "coração", "avião", "café".

### B9. Caê no celular de 320 px: os rótulos das 7 abas do rodapé se encostam. Gravidade: **baixa** (cosmética)
- **O que aconteceu:** "Escola", "Crescer", "Caderno" e "Ajustes" ficam sem espaço entre si ("CrescerCaderno").
- **Captura:** `cap/_m320.png`, terceira coluna.

---

## Sugestões de melhoria (não são defeitos)

- **S1. A Lousa não lê data nem hora escritas no texto.** "Dentista do Caê amanhã às 14h30", "Reunião da escola dia 20/11 às 19h" e "Aniversário da vó 25/12" ficaram todos no dia de hoje, sem horário. Pelo botão "Anotar" de "Para novembro", ficaram em "sem dia certo" (`s9.py`, `s10.py`). O próprio exemplo do campo ("Ex.: reunião na escola às 18h") convida a escrever a hora no texto, e a Escola do Caê já entende mensagens assim. Sugestão: preencher Dia e Horário a partir do texto, para a pessoa conferir antes de salvar. O texto "Consulta 31/02 às 25h" também foi aceito como está.
- **S2. Contas no celular: o Mês lembra o último mês visto.** Depois de ir até setembro e voltar às Contas, a aba Mês continua em setembro ("Nada lançado em setembro"). Sugestão: voltar ao mês atual ao reabrir, ou deixar isso mais visível.
- **S3. Ao trocar entre Receita e Gasto, valor e observação continuam lá** ("Salário Isa" num gasto). Isso também alimenta o problema B1.
- **S4. Não há "Trancar agora".** O app só se tranca depois de 5 minutos fora ou ao recarregar. Um botão de trancar ajudaria num computador compartilhado.
- **S5. Senha errada não tem espera.** Seis tentativas seguidas foram aceitas sem nenhum atraso. O texto "Senha não confere." aparece e o foco fica no campo, o que está bom.
- **S6. O aviso do lançamento anterior continua na tela de edição.** "R$ 8.500,00 em Salário. Lançado. Desfazer" seguiu visível dentro de "Editar gasto" de outro lançamento (`cap/cel-editar.png`). Tocar em "Desfazer" ali desfaz a receita, não a edição em andamento, o que pode confundir.
- **S7. Variação absurda em "Últimos 7 dias".** Com valores muito grandes, aparece "562620% a mais que nos 7 dias antes". Acima de algum limite, seria melhor escrever "muito mais".
- **S8. Mercado: "2 kg de feijão" fica com a quantidade no nome**, sem ir para o campo "Quanto". A anotação rápida do computador ("Anotar: 2 leite, pão, 1 kg tomate") sugere que essa separação existe lá.
- **S9. Lançar no computador em 1024x700:** o campo "Buscar nos lançamentos" corta o texto de exemplo ("Buscar nos lançame").

---

## O que foi testado e passou

**Senha e entrada**
- Senha curta recusada com "Faltam 7 caracteres", e o botão Continuar fica desabilitado.
- Senhas diferentes são recusadas ("As duas não são iguais").
- Criar, recarregar (a casa tranca) e entrar de novo funcionou.
- Senha errada mostra "Senha não confere.", mantém o foco e o texto digitado.

**Contas no celular**
- Valor zero não lança: o botão fica desabilitado ("Digite o valor").
- Lançou corretamente R$ 0,01, R$ 1.234.567,89 e R$ 9.999.999,99.
- Receita exige o tipo ("Escolha o tipo") e entra com "+ R$ 8.500,00".
- Parcelado 3x aparece em Planos > Já comprometido (dezembro e janeiro).
- Editar ("Alteração salva."), excluir sem confirmação mas com Desfazer, e o Desfazer devolve o lançamento.
- Busca sem acento ("açucar") encontra "Açúcar". Busca por valor ("99,9") funciona. "Nada encontrado" vem com "Limpar busca e filtros".
- O painel de Filtros abre.
- Conta fixa marcada como paga: "Conta paga: Aluguel… Já está nos gastos." O total não dobrou, o resumo foi para "1 de 2 pagas", e o mês seguinte já mostra os fixos previstos.
- Visão Ano, caixinha criada e teto de R$ 5.000 no Mercado.
- Os nomes de pessoas iguais são recusados, inclusive com acento e maiúscula ("xán").

**Sincronia nos dois sentidos**
- Receita e edição feitas no celular aparecem no computador.
- Agradecimento (Nós dois) e passeio (Lazer) aparecem no computador.
- Item do Mercado anotado no computador aparece no celular.
- "Apagar tudo" no celular leva o computador à tela "A base foi apagada no outro aparelho".

**Lousa**
- Anotar pelo botão do dia e pelo "Para novembro", riscar ("feito por Isa"), abrir e apagar recado (com Desfazer).
- Ver o mês, mês seguinte e mês anterior.

**Mercado**
- Emoji e acentos funcionam.
- Duplicado avisa ("Leite já está na lista, anotado por Xan").
- Só espaços em branco é recusado.
- A seção certa é escolhida sozinha.
- Carrinho, "Tirar os 2 riscados", "Vou ao mercado / Voltei" e editar item funcionam.
- Nome longo quebra a linha sem estourar a largura, no celular e no computador.

**Caê e Mia e Marie**
- Data de nascimento no futuro é recusada ("O nascimento não pode ser depois de hoje.").
- Remédio sem horário fica bloqueado na folha.
- Peso −5 e 999 kg recusados ("entre 0,1 e 30").

**Ajustes**
- As seções A casita, Este celular e Cópia e segurança.
- "Salvar cópia" baixa `casita-copia-2026-11-15.json`.
- "Exportar planilha" baixa `.xlsx`.
- "Apagar tudo" exige escrever APAGAR e mostra a contagem do que será apagado.

**Teclado no computador**
- As teclas 1 a 7 abrem os cômodos certos e Escape volta à mesa.
- "?" mostra os atalhos.
- A ordem do Tab passa pelo conteúdo e depois pela casa, com "Pular para o conteúdo".

**Telas**
- Sem rolagem para o lado em 320, 390, 768, 1024, 1440 e 1920 px, em todos os cômodos e abas, nos dois temas.
- Nenhum botão abaixo de 24 px no celular. Os menores são as caixas de seleção da tabela das Contas no computador, com 17x17 px; isso é aceitável com mouse.

**Erros e acessibilidade**
- Nenhum erro de console em nenhum script.
- axe sem violações no Início e em todas as vistas dos 8 cômodos, em 1024 claro, 1440 escuro e 1920 claro.

## Não testado ou só por cima
- Importar print, fatura em PDF e foto do cupom.
- Impressão.
- Trocar a senha.
- Restaurar de um dia e Juntar uma cópia.
- A tranca depois de 5 minutos fora.
- Tema "Pela hora" e estilo "pintado".
- Gestos de arrastar.
- Uso sem internet.
- Combinados e Carinho em Nós dois: só listei os botões, não criei nada.
