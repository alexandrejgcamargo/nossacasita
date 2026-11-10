import{Ah as U,Eb as I,Ib as T,Te as O,a as ca,cc as S,li as $,mi as V,ni as X,oi as H,pi as G,qi as Q,ri as W,ug as q,xf as P,yf as _,zh as Y}from"./parte-O6JUFB6Z.js";import{b as z}from"./parte-B7CUGV4X.js";var b={fundo:"#EDF6F9",superficie:"#FFFFFF",texto:"#0B3B41",texto2:"#3F646B",texto3:"#577880",borda:"#6F8F97",divisor:"#C5DAE1",acao:"#006D77",acaoPress:"#004147",acaoSuave:"#83C5BE",acaoClara:"#DDF0EE",alertaFundo:"#FFDDD2",alertaTexto:"#6B3220",destaque:"#E29578",perigo:"#B04E2B",perigoTexto:"#9A3F20",p1:"#1D6FA5",p1Clara:"#D3E7F7",p2:"#B33D68",p2Clara:"#FADDE6"},ja="@layer base, escuro, movimento, senha, pintado;",Ma=`
@layer base {
.cc {
  --fundo:${b.fundo}; --superficie:${b.superficie}; --texto:${b.texto}; --texto-2:${b.texto2}; --texto-3:${b.texto3};
  --borda:${b.borda}; --divisor:${b.divisor}; --acao:${b.acao}; --acao-press:${b.acaoPress}; --acao-suave:${b.acaoSuave};
  --acao-clara:${b.acaoClara}; --alerta-fundo:${b.alertaFundo}; --alerta-texto:${b.alertaTexto}; --destaque:${b.destaque};
  --perigo:${b.perigo}; --perigo-texto:${b.perigoTexto}; --p1:${b.p1}; --p1-clara:${b.p1Clara}; --p2:${b.p2}; --p2-clara:${b.p2Clara};
  --pagina:#EDF6F9; --faixa:#006D77; --nav-fundo:#0B3B41; --nav-texto:#A9C6CC; --primaria:#E29578; --primaria-press:#B86E52;
  --sobre-primaria:#0B3B41; --seg-fundo:#D7E9EE; --borda-cartao:#D3E5EA; --sombra:0 2px 8px rgba(11,59,65,.07);
  /* v17.40: escalas do design system (ver o guia de estilo em Ajustes e o DESENHO.md) */
  --sombra-1:0 1px 3px rgba(11,59,65,.14); --sombra-3:0 12px 28px rgba(11,59,65,.18);
  --sombra-papel-1:0 5px 8px -5px rgba(0,0,0,.4); --sombra-papel-2:0 6px 12px -6px rgba(0,0,0,.4); --sombra-papel-3:0 12px 24px -12px rgba(0,0,0,.5);
  --r-xxs:2px; --r-xs:4px; --r-sm:8px; --r-md:12px; --r-lg:16px; --r-xl:20px; --r-pill:999px;
  --sobre-acao:#FFFFFF; --vidro:rgba(255,255,255,.96); --trilho:#E3EDF0; --trilho-2:#C9D9DE; --heroi:#0B3B41;
  --erro-fundo:#FBE3DA; --erro-borda:#E8B8A6; --arte-fundo:#EDF6F9; --arte-chao:#DCEEF3;
  color-scheme: light;
  --t00:.66rem; --t0:.72rem; --t1:.78rem; --t15:.84rem; --t2:.9rem; --t3:1rem; --t35:1.1rem; --t4:1.2rem; --t5:1.65rem; --t55:2rem; --t6:2.6rem;
  --fonte: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --fonte-titulo: ui-rounded, "SF Pro Rounded", -apple-system, system-ui, "Segoe UI", Roboto, sans-serif;
  --nav: calc(76px + env(safe-area-inset-bottom, 0px));
  --raio: var(--r-lg);
  font-family: var(--fonte); color: var(--texto); background: var(--superficie);
  font-size: var(--t3); line-height: 1.4;
  width: 100%; max-width: 460px; margin: 0 auto; min-height: 100vh; position: relative;
  padding-bottom: calc(var(--nav) + 24px);
  -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
}
.cc[data-acao="1"] { padding-bottom: calc(var(--nav) + 104px); }
.cc[data-sem-nav="1"] { padding-bottom: 0; }
.cc, .cc * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
.cc :where(button) { font: inherit; cursor: pointer; border: 0; background: none; color: inherit; padding: 0; touch-action: manipulation; }
.cc :where(input, textarea, select) { font: inherit; color: inherit; }
.cc :where(h1, h2, h3, p) { margin: 0; }
.cc button:focus-visible, .cc input:focus-visible, .cc a:focus-visible, .cc [tabindex]:focus-visible { outline: 3px solid var(--acao); outline-offset: 2px; }
@media (min-width: 620px) {
  .cc-fundo { padding-top: 28px; }
  .cc { border-radius: var(--r-xl) var(--r-xl) 0 0; box-shadow: var(--sombra-3); min-height: calc(100vh - 28px); }
}
.cc-fundo { background: ${b.fundo}; min-height: 100vh; }
.n { font-variant-numeric: tabular-nums; }
.so-leitor { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

/* ---------------- tipografia ---------------- */
.titulo { font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; line-height: 1.15; }
.secao-titulo { font-size: var(--t4); font-weight: 800; letter-spacing: -.01em; margin-bottom: 12px; }
.rotulo { display: block; font-size: var(--t2); font-weight: 600; color: var(--texto-2); margin-bottom: 8px; }
.legenda { font-size: var(--t1); font-weight: 600; color: var(--texto-2); line-height: 1.45; }
.apoio { font-size: var(--t2); color: var(--texto-2); line-height: 1.5; }
.destaque-num { font-family: var(--fonte-titulo); font-size: min(var(--t6), 10.5vw); font-weight: 800; letter-spacing: -.03em; line-height: 1.05; font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }

/* ---------------- estrutura ---------------- */
.tela { padding: 0 16px; }
.cabecalho { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 16px 12px; min-height: 64px; }
.cabecalho-fixo { position: sticky; top: 0; z-index: 5; background: var(--vidro); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border-bottom: 1px solid var(--divisor); }
.secao { margin-top: 32px; }
.secao:first-child { margin-top: 16px; }
.pilha > * + * { margin-top: 12px; }
.linha-flex { display: flex; align-items: center; gap: 8px; }
.entre { display: flex; align-items: center; justify-content: space-between; gap: 12px; }

/* ---------------- bot\xF5es ---------------- */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 52px; padding: 0 20px;
  border-radius: var(--r-lg); font-size: var(--t3); font-weight: 600; line-height: 1.2; text-align: center;
  transition: transform .08s ease, box-shadow .08s ease, background .15s ease; }
.btn-bloco { display: flex; width: 100%; }
.btn-grande { min-height: 64px; font-size: var(--t4); font-weight: 800; border-radius: var(--r-xl); }
.btn-principal { background: var(--acao); color: var(--sobre-acao); box-shadow: 0 4px 0 var(--acao-press); }
.btn-principal:active { transform: translateY(4px); box-shadow: 0 0 0 var(--acao-press); }
.btn-principal[aria-disabled="true"] { background: var(--trilho); color: var(--texto-2); box-shadow: 0 4px 0 var(--trilho-2); }
.btn-principal[aria-disabled="true"]:active { transform: none; box-shadow: 0 4px 0 var(--trilho-2); }
.btn-principal:disabled { background: var(--trilho); color: var(--texto-2); box-shadow: 0 4px 0 var(--trilho-2); }
.btn:disabled { cursor: not-allowed; }
.btn-secundario { background: var(--superficie); color: var(--texto); border: 1.5px solid var(--borda); }
.btn-secundario:active { background: var(--fundo); }
.btn-texto { min-height: 44px; padding: 0 8px; color: var(--acao); font-weight: 600; }
.btn-texto:active { background: var(--fundo); }
.btn-perigo { background: var(--perigo); color: #fff; box-shadow: 0 4px 0 #7A3216; }
.btn-perigo:active { transform: translateY(4px); box-shadow: none; }
.btn-perigo[aria-disabled="true"] { background: #EBD3C9; color: #6B4436; box-shadow: none; }
.btn-perigo-sec { background: var(--superficie); color: var(--perigo-texto); border: 1.5px solid #D9A28D; }
.btn-icone { min-width: 44px; min-height: 44px; display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--r-md); color: var(--texto); }
.btn-icone:active { background: var(--fundo); }
.btn-icone-borda { border: 1.5px solid var(--divisor); background: var(--superficie); }

/* ---------------- seletores ---------------- */
.seg { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px; padding: 4px;
  background: var(--fundo); border: 1px solid var(--divisor); border-radius: var(--r-lg); }
.seg button { min-width: 0; min-height: 44px; padding: 4px; white-space: nowrap; border-radius: var(--r-md); font-size: min(var(--t3), 4vw); font-weight: 600; color: var(--texto-2);
  display: flex; align-items: center; justify-content: center; gap: 6px; line-height: 1.15; }
.seg button[aria-pressed="true"] { background: var(--superficie); color: var(--texto); font-weight: 800;
  box-shadow: 0 1px 2px rgba(11,59,65,.16), 0 3px 10px rgba(11,59,65,.08); }
.seg-grande button { min-height: 50px; font-size: min(var(--t4), 5vw); }
/* Telas estreitas ou letra grande: os \xEDcones dos seletores saem para o texto caber. */
/* \xCDcones menores nos seletores: cabem em celular sem quebrar a palavra. */
.seg button svg { width: 15px; height: 15px; flex-shrink: 0; }
.seg-grande button svg { width: 18px; height: 18px; }
@media (max-width: 340px) { .seg:has(> button:nth-child(3)) button svg { display: none; } }
.seg button svg { pointer-events: none; }

.chip { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 16px; border-radius: var(--r-pill);
  border: 1.5px solid var(--divisor); background: var(--superficie); font-size: var(--t2); font-weight: 600; color: var(--texto); white-space: nowrap; }
.chip[aria-pressed="true"] { background: var(--texto); border-color: var(--texto); color: var(--superficie); }
.chip:active { transform: scale(.97); }
.chips { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; padding: 2px 16px; margin: 0 -16px; }
.chips::-webkit-scrollbar { display: none; }
.chips-quebra { display: flex; flex-wrap: wrap; gap: 8px; }

/* Quem pagou: iniciais na bolinha, para n\xE3o depender s\xF3 da cor. */
.pessoas { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.aniv-linha { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: end; }
.pessoa { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; padding: 6px 12px;
  border-radius: var(--r-pill); border: 1.5px solid var(--divisor); background: var(--superficie); font-size: var(--t4); font-weight: 600; }
.pessoa .ini { width: 36px; height: 36px; border-radius: 50%; display: inline-flex; flex-shrink: 0; }
.pessoa .ini svg { display: block; }
.pessoa[aria-pressed="true"] .boneco { animation: aceno .5s ease; }
@keyframes aceno { 0%,100% { transform: none; } 30% { transform: rotate(-8deg) scale(1.08); } 60% { transform: rotate(6deg); } }
.pessoa[data-p="0"][aria-pressed="true"] { background: var(--p1-clara); border-color: var(--p1); box-shadow: inset 0 0 0 1px var(--p1); }
.pessoa[data-p="1"][aria-pressed="true"] { background: var(--p2-clara); border-color: var(--p2); box-shadow: inset 0 0 0 1px var(--p2); }

/* Categorias: \xEDcone e cor de cada uma, 3 por linha. */
.cats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.cat { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
  min-height: 84px; padding: 10px 4px 8px; border-radius: var(--r-lg); border: 1.5px solid var(--divisor); background: var(--superficie);
  font-size: var(--t2); font-weight: 600; line-height: 1.15; text-align: center; overflow-wrap: anywhere; }
.cat:active { transform: scale(.97); }
.cat[aria-pressed="true"] { border-color: var(--acao); background: var(--acao-clara); box-shadow: inset 0 0 0 1.5px var(--acao); font-weight: 800; }
.cat .marca { position: absolute; top: 6px; right: 6px; width: 20px; height: 20px; border-radius: 50%; background: var(--acao); color: var(--sobre-acao);
  display: flex; align-items: center; justify-content: center; }
/* \xCDcones ilustrados: cada um se mexe uma vez quando a categoria \xE9 escolhida. */
/* Bot\xE3o de importar print: destaque em p\xEAssego e coral, centralizado. */
.btn.btn-importar { margin: 0 0 2px; min-height: 34px; padding: 0 10px; font-size: var(--t1); }
.rotulo-com-acao { align-items: flex-end; margin-bottom: 4px; } .rotulo-com-acao .rotulo { margin-bottom: 0; }
.ico-cat svg [class^="a-"] { transform-box: fill-box; transform-origin: 50% 50%; }
.cat[aria-pressed="true"] .ico-cat { animation: pop-ico .45s cubic-bezier(.3,1.6,.5,1); }
@keyframes pop-ico { 0% { transform: scale(.86); } 60% { transform: scale(1.1); } 100% { transform: none; } }
.cat[aria-pressed="true"] .a-pula, .cat[aria-pressed="true"] .a-pipoca { transform-origin: 50% 100%; animation: a-pula .6s ease .08s; }
@keyframes a-pula { 0%,100% { transform: none; } 40% { transform: translateY(-2.4px); } 70% { transform: translateY(.4px) scaleY(.94); } }
.cat[aria-pressed="true"] .a-anda { animation: a-anda .7s ease-in-out .05s; }
@keyframes a-anda { 0%,100% { transform: none; } 35% { transform: translateX(2.4px); } 70% { transform: translateX(-1px); } }
.cat[aria-pressed="true"] .a-roda { animation: a-roda .7s linear .05s; }
@keyframes a-roda { to { transform: rotate(360deg); } }
.cat[aria-pressed="true"] .a-fumo { transform-origin: 50% 100%; animation: a-fumo .9s ease-out .1s; }
.ico-cat .a-escape { opacity: 0; }
.cat[aria-pressed="true"] .a-escape { animation: a-fumo .8s ease-out .15s; }
@keyframes a-fumo { 0% { opacity: 0; transform: translateY(2px) scale(.6); } 40% { opacity: 1; } 100% { opacity: 0; transform: translateY(-3px) scale(1.3); } }
.cat[aria-pressed="true"] .a-pisca { animation: a-pisca .8s ease .05s; }
@keyframes a-pisca { 0%,100% { filter: none; } 30%,60% { filter: brightness(1.15) drop-shadow(0 0 2px #FFE9A8); } 45% { filter: none; } }
.cat[aria-pressed="true"] .a-gota { transform-origin: 50% 0%; animation: a-gota .7s ease .15s; }
@keyframes a-gota { 0%,100% { transform: none; } 40% { transform: translateY(1.6px) scaleY(1.1); } }
.cat[aria-pressed="true"] .a-janela { animation: a-janela .9s ease; }
@keyframes a-janela { 0%,100% { fill: #83C5BE; } 40%,70% { fill: #FFD98A; } }
.cat[aria-pressed="true"] .a-bate { animation: a-bate .8s ease .05s; }
@keyframes a-bate { 0%,40%,100% { transform: none; } 15% { transform: scale(1.14); } 55% { transform: scale(1.08); } }
.cat[aria-pressed="true"] .a-balanca { transform-origin: 50% 100%; animation: a-balanca .7s ease .05s; }
@keyframes a-balanca { 0%,100% { transform: none; } 30% { transform: rotate(-12deg); } 65% { transform: rotate(8deg); } }
.cat[aria-pressed="true"] .a-carimba { animation: a-carimba .6s ease .05s; }
@keyframes a-carimba { 0%,100% { transform: none; } 35% { transform: translateY(-2px) scale(1.08); } 60% { transform: scale(.94); } }
.cat[aria-pressed="true"] .a-talher-e { transform-origin: 50% 100%; animation: a-balanca .6s ease .05s; }
.cat[aria-pressed="true"] .a-talher-d { transform-origin: 50% 100%; animation: a-balanca .6s ease .12s reverse; }
.cat[aria-pressed="true"] .a-etiqueta { transform-origin: 70% 0%; animation: a-balanca .8s ease .05s; }
.cat[aria-pressed="true"] .a-gira { transform-origin: 30% 70%; animation: a-gira .7s ease .05s; }
@keyframes a-gira { 0%,100% { transform: none; } 45% { transform: rotate(-25deg); } }
.cat[aria-pressed="true"] .a-moeda { animation: a-moeda .7s ease .05s; }
@keyframes a-moeda { 0%,100% { transform: none; } 30% { transform: translateY(-3px) scaleX(.2); } 60% { transform: translateY(-1px) scaleX(1); } }
.cat[aria-pressed="true"] .a-brilha { animation: a-brilha .8s ease .05s; }
.cat[aria-pressed="true"] .a-brilha-2 { animation: a-brilha .8s ease .25s; }
@keyframes a-brilha { 0%,100% { transform: none; } 40% { transform: rotate(45deg) scale(1.2); } }
.ico-cat { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: var(--r-md); color: #0B3B41; }

/* ---------------- campos ---------------- */
.campo { width: 100%; min-height: 52px; padding: 12px 14px; border: 1.5px solid var(--borda); border-radius: var(--r-md);
  background: var(--superficie); font-size: var(--t3); }
.campo::placeholder { color: var(--texto-3); }
.campo:focus { outline: none; border-color: var(--acao); box-shadow: 0 0 0 3px rgba(0,109,119,.18); }
.campo[aria-invalid="true"] { border-color: var(--perigo); }
.campo-dica { margin-top: 6px; }
.campo-erro { margin-top: 8px; color: var(--perigo-texto); font-size: var(--t2); font-weight: 600; }
.campo-senha { position: relative; }
.campo-senha .campo { padding-right: 56px; }
.campo-senha .btn-icone { position: absolute; right: 4px; top: 50%; transform: translateY(-50%); color: var(--texto-2); }

.valor { display: flex; align-items: center; gap: 8px; min-height: 76px; padding: 8px 8px 8px 16px; border-radius: var(--r-xl);
  border: 2px solid var(--borda); background: var(--superficie); cursor: text; }
.valor:focus-within { border-color: var(--acao); box-shadow: 0 0 0 4px rgba(0,109,119,.16); }
.valor-rs { font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; color: var(--texto-2); }
.valor input { flex: 1; min-width: 0; border: 0; outline: none; background: transparent; padding: 0;
  font-family: var(--fonte-titulo); font-weight: 800; letter-spacing: -.03em; font-size: var(--t6); font-variant-numeric: tabular-nums; }
.valor input::placeholder { color: #8FA9B0; }
.valor input:focus-visible { outline: none; }

/* ---------------- listas e cart\xF5es ---------------- */
.cartao { border: 1px solid var(--divisor); border-radius: var(--r-xl); padding: 16px; background: var(--superficie); }
.cartao-suave { background: var(--fundo); border: 1px solid var(--divisor); border-radius: var(--r-xl); padding: 16px; }
.heroi { background: var(--heroi); color: #fff; border-radius: var(--r-xl); padding: 20px; }
.heroi .legenda, .heroi .apoio { color: #CFE5E9; }
.heroi-linha.com-pote { grid-template-columns: 1fr 1fr auto; gap: 8px; }
.heroi-linha.com-pote .heroi-valor { font-size: min(var(--t4), 4.4vw); }
.pote-heroi { align-self: end; display: flex; flex-direction: column; align-items: center; gap: 2px; flex-shrink: 0; }
.pote-heroi .legenda { font-size: var(--t0); white-space: nowrap; font-weight: 700; }
.pote-enche { transform-box: fill-box; transform-origin: 50% 100%; animation: enche 1.1s .15s cubic-bezier(.3,.7,.3,1) both; }
@keyframes enche { from { transform: scaleY(0); } to { transform: none; } }
.pets-linha { display: flex; align-items: center; gap: 12px; padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px solid var(--trilho); }
.pets-linha svg { flex-shrink: 0; }
.pets-feliz { animation: pula 1.4s ease-in-out 2; transform-origin: 50% 100%; }
@keyframes pula { 0%,100% { transform: none; } 20% { transform: translateY(-3px); } 40% { transform: none; } }
/* Se\xE7\xE3o Caixinhas em destaque: cart\xE3o p\xEAssego com o porquinho. */
.secao-caixinhas { background: linear-gradient(165deg, var(--alerta-fundo) 0%, var(--superficie) 70%); border: 2px solid var(--destaque);
  border-radius: var(--r-xl); padding: 16px; box-shadow: var(--sombra); }
.caixinhas-topo { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.caixinhas-topo .porquinho { flex-shrink: 0; }
.caixinhas-total { font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; color: var(--alerta-texto); line-height: 1.2; margin-top: 2px; }
.secao-caixinhas .apoio { color: var(--texto); }
.btn-nova-caixinha { border-color: var(--destaque); color: var(--alerta-texto); background: var(--superficie); font-weight: 800; }
.moeda-caindo { transform-box: fill-box; transform-origin: center; animation: moeda-cai 1.4s cubic-bezier(.5,0,.75,1) .3s 2 both; }
@keyframes moeda-cai { 0% { transform: translateY(-8px); opacity: 0; } 20% { opacity: 1; } 75% { transform: translateY(8px); opacity: 1; } 100% { transform: translateY(10px); opacity: 0; } }
.porquinho { animation: porquinho-pula .5s ease 1.4s 2; transform-origin: 50% 100%; }
@keyframes porquinho-pula { 0%,100% { transform: none; } 50% { transform: translateY(-2px) rotate(-2deg); } }
.caixinhas { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.caixinha { display: flex; gap: 10px; align-items: center; padding: 12px; border-radius: var(--r-lg); border: 1.5px solid var(--divisor);
  background: var(--superficie); text-align: left; min-height: 84px; }
.caixinha:active { transform: scale(.98); }
.caixinha svg { flex-shrink: 0; }
.cx-pote { display: contents; }
.caixinha-topo { display: flex; gap: 16px; align-items: center; }
.fechamento { display: flex; gap: 12px; align-items: center; }
.resumo-previa { border-radius: var(--r-lg); overflow: hidden; border: 1px solid var(--divisor); }
.resumo-previa svg { display: block; }
.heroi-linha { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.18); }
.heroi-valor { font-size: min(var(--t4), 5.6vw); font-weight: 800; font-variant-numeric: tabular-nums; overflow-wrap: anywhere; line-height: 1.2; }

.linha { display: flex; align-items: center; gap: 12px; width: 100%; min-height: 60px; padding: 8px 4px; text-align: left; border-radius: var(--r-md); }
.linha:active { background: var(--fundo); }
.linha-meio { flex: 1; min-width: 0; }
.linha-nome { font-size: var(--t3); font-weight: 600; line-height: 1.25; overflow-wrap: anywhere; }
.linha-sub { font-size: var(--t1); color: var(--texto-2); line-height: 1.35; margin-top: 2px; overflow-wrap: anywhere; }
.linha-valor { font-size: var(--t3); font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; text-align: right; }
.linha + .linha { border-top: 1px solid var(--trilho); }
.dia-cab { display: flex; justify-content: space-between; align-items: baseline; padding: 20px 4px 4px; font-size: var(--t2); font-weight: 800; color: var(--texto-2); }
.receita-valor { color: var(--acao); }
.venc[data-hoje="1"] .linha-sub { color: var(--perigo-texto); font-weight: 700; }

.barra { height: 8px; border-radius: var(--r-pill); background: var(--trilho); overflow: hidden; position: relative; }
.barra > span { display: block; height: 100%; border-radius: var(--r-pill); }
.barra .teto { position: absolute; top: -3px; bottom: -3px; width: 2px; background: var(--texto); }

.aviso { display: flex; gap: 12px; align-items: flex-start; padding: 14px 16px; border-radius: var(--r-lg); font-size: var(--t2); line-height: 1.5; font-weight: 600; }
.aviso svg { flex-shrink: 0; margin-top: 2px; }
.aviso-info { background: var(--fundo); color: var(--texto); border: 1px solid var(--divisor); }
.aviso-alerta { background: var(--alerta-fundo); color: var(--alerta-texto); }
.aviso-erro { background: var(--erro-fundo); color: var(--perigo-texto); border: 1px solid var(--erro-borda); }

.vazio { text-align: center; padding: 24px 8px 8px; }
.vazio p { margin: 8px 0 16px; color: var(--texto-2); font-size: var(--t3); }

/* ---------------- faixa de status ---------------- */
.faixa { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; gap: 10px; padding: 10px 16px;
  background: var(--alerta-fundo); color: var(--alerta-texto); font-size: var(--t2); font-weight: 600; line-height: 1.35; }
.faixa .btn-texto { color: var(--alerta-texto); text-decoration: underline; min-height: 36px; margin-left: auto; white-space: nowrap; }

/* ---------------- rodap\xE9 e barra de a\xE7\xE3o ---------------- */
.nav { position: fixed; left: 0; right: 0; bottom: 0; margin: 0 auto; max-width: 460px; z-index: 30;
  height: var(--nav); padding: 6px 8px env(safe-area-inset-bottom, 0px);
  background: var(--vidro); -webkit-backdrop-filter: saturate(1.6) blur(14px); backdrop-filter: saturate(1.6) blur(14px);
  border-top: 1px solid var(--divisor); display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
.nav button { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; min-height: 60px;
  border-radius: var(--r-lg); font-size: var(--t1); font-weight: 600; color: var(--texto-2); user-select: none; -webkit-user-select: none; }
.nav button * { pointer-events: none; }
.nav .bolha { display: flex; align-items: center; justify-content: center; width: min(56px, 100%); height: 32px; border-radius: var(--r-pill); transition: background .15s ease; }
.nav button[aria-current="page"] { color: var(--acao); font-weight: 800; }
.nav button[aria-current="page"] .bolha { background: var(--acao); color: var(--sobre-acao); }
.nav button:active .bolha { transform: scale(.92); }
.barra-acao { position: fixed; left: 0; right: 0; margin: 0 auto; max-width: 460px; bottom: var(--nav); z-index: 25;
  padding: 10px 16px 12px; background: linear-gradient(180deg, transparent, var(--superficie) 22%); }
@media (min-width: 620px) { .nav { border-radius: var(--r-xl) var(--r-xl) 0 0; border-left: 1px solid var(--divisor); border-right: 1px solid var(--divisor); } }

/* ---------------- folha (janela de baixo) ---------------- */
.veu { position: fixed; inset: 0; z-index: 60; background: rgba(11,59,65,.5); display: flex; align-items: flex-end; justify-content: center; animation: veu .18s ease; }
.folha { width: 100%; max-width: 460px; max-height: 92vh; overflow-y: auto; overscroll-behavior: contain;
  /* Relativo ao v\xE9u (a \xE1rea vis\xEDvel de verdade): no Safari, 92vh conta a barra de endere\xE7o e cortava o topo.
     No app instalado, fica abaixo da barra de status. */
  max-height: calc(100% - env(safe-area-inset-top, 0px) - 16px); background: var(--superficie);
  border-radius: var(--r-xl) var(--r-xl) 0 0; padding: 8px 16px calc(24px + env(safe-area-inset-bottom, 0px)); animation: sobe .22s cubic-bezier(.2,.8,.3,1); }
.folha-pega { width: 40px; height: 5px; border-radius: var(--r-xxs); background: var(--divisor); margin: 4px auto 12px; }
@keyframes veu { from { opacity: 0; } to { opacity: 1; } }
@keyframes sobe { from { transform: translateY(40px); opacity: .6; } to { transform: none; opacity: 1; } }

/* ---------------- aviso flutuante ---------------- */
.toast { position: fixed; left: 0; right: 0; margin: 0 auto; width: calc(100% - 32px); max-width: 428px; z-index: 40;
  bottom: calc(var(--nav) + 12px); background: var(--heroi); color: #fff; border-radius: var(--r-lg); padding: 12px 8px 12px 16px;
  font-size: var(--t2); font-weight: 600; display: flex; align-items: center; gap: 8px; box-shadow: var(--sombra-3); line-height: 1.4; }
.cc[data-acao="1"] .toast { bottom: calc(var(--nav) + 92px); }
/* O aviso n\xE3o engole toques: s\xF3 o "Desfazer" \xE9 toc\xE1vel; o resto deixa passar para a lista embaixo. */
.toast { pointer-events: none; }
.toast button { pointer-events: auto; }
.toast[data-tipo="erro"] { background: #9A3F20; }
.toast[data-tipo="alerta"] { background: #7A4A0E; }
.toast > span { min-width: 0; overflow-wrap: anywhere; }
.toast .btn-texto { color: #A6E3DC; font-weight: 800; margin-left: auto; flex-shrink: 0; }

/* ---------------- festa ao lan\xE7ar ---------------- */
.notas { position: fixed; top: 0; bottom: 0; left: 0; right: 0; margin: 0 auto; max-width: 460px; pointer-events: none; overflow: hidden; z-index: 35; }
.nota { position: absolute; bottom: 22%; opacity: 0; animation: voar 1.5s cubic-bezier(.3,.6,.4,1) forwards; }
@keyframes voar {
  0% { transform: translate(0,0) rotate(0) scale(.5); opacity: 0; }
  12% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translate(var(--dx), -260px) rotate(var(--giro)) scale(.9); opacity: 0; }
}
.asa { animation: bater .32s ease-in-out infinite; transform-box: fill-box; }
.asa-e { transform-origin: 100% 50%; } .asa-d { transform-origin: 0% 50%; }
@keyframes bater { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(.45); } }
.selo { position: absolute; left: 50%; top: 40%; width: 76px; height: 76px; margin: -38px 0 0 -38px; border-radius: 50%;
  background: var(--acao); color: var(--sobre-acao); display: flex; align-items: center; justify-content: center; animation: selo 1.1s ease forwards; }
@keyframes selo { 0% { transform: scale(.3); opacity: 0; } 20% { transform: scale(1.08); opacity: 1; } 35% { transform: scale(1); } 75% { opacity: 1; } 100% { opacity: 0; transform: scale(.96); } }

/* ---------------- gr\xE1ficos ---------------- */
.evol { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; align-items: end; height: 150px; }
.evol button { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; gap: 4px; border-radius: var(--r-md); padding: 0 2px; }
.evol .col { position: relative; width: 100%; max-width: 34px; flex: 1; display: flex; align-items: flex-end; }
.evol .gasto { width: 100%; border-radius: var(--r-sm) var(--r-sm) var(--r-xxs) var(--r-xxs); background: var(--acao-suave); }
.evol button[aria-current="true"] .gasto { background: var(--acao); }
.evol .rec { position: absolute; left: -3px; right: -3px; height: 3px; border-radius: var(--r-xxs); background: var(--destaque); }
.evol .num { font-size: var(--t00); font-weight: 600; color: var(--texto-2); white-space: nowrap; }
.evol-ano { grid-template-columns: repeat(12, 1fr); gap: 3px; height: 160px; }
.evol-ano .col { max-width: 22px; }
.evol-ano button[data-futuro="1"] .col { opacity: .35; }
.evol .mes { font-size: var(--t1); font-weight: 600; color: var(--texto-2); }
.evol button[aria-current="true"] .mes { color: var(--texto); font-weight: 800; }


/* ---------------- paleta "Teal marcante" (v13) ----------------
   Fica na camada base, no fim: os estados (selecionado, desabilitado) definidos
   acima continuam valendo por serem mais espec\xEDficos.
   Fundo azul-gelo, cart\xF5es brancos com sombra leve, faixa teal no topo de cada
   tela, rodap\xE9 teal escuro e coral s\xF3 para a a\xE7\xE3o principal. */
.cc { background: var(--pagina); }
.cabecalho, .cabecalho-fixo { background: var(--faixa); color: #fff; border-bottom: 0; border-radius: 0 0 var(--r-xl) var(--r-xl); padding-bottom: 16px;
  -webkit-backdrop-filter: none; backdrop-filter: none; }
.cabecalho .titulo, .cabecalho h1 { color: #fff; }
.cabecalho .seg { background: rgba(255,255,255,.10); border-color: transparent; }
.cabecalho .seg button { color: #FFFFFF; }
.cabecalho .seg button[aria-pressed="true"] { background: var(--superficie); color: var(--acao); }
.cabecalho .btn-icone { color: #fff; }
.cabecalho .btn-icone-borda { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.32); }
.cabecalho .btn-icone:active { background: rgba(255,255,255,.2); }
.cabecalho .legenda, .cabecalho .apoio { color: #DDF0EE; }
.cabecalho .btn-texto { color: #FFDDD2; }
.cat, .pessoa, .chip, .cartao, .cartao-suave, .caixinha { border-color: var(--borda-cartao); box-shadow: var(--sombra); }
.valor, .campo { box-shadow: var(--sombra); }
.cartao-suave { background: var(--superficie); }
.seg { background: var(--seg-fundo); border-color: transparent; }
.btn-principal { background: var(--primaria); color: var(--sobre-primaria); box-shadow: 0 4px 0 var(--primaria-press); }
.btn-principal:active { box-shadow: 0 0 0 var(--primaria-press); }
.nav { background: var(--nav-fundo); border-top: 0; -webkit-backdrop-filter: none; backdrop-filter: none; }
.nav button { color: var(--nav-texto); }
.nav button[aria-current="page"] { color: #fff; }
.nav button[aria-current="page"] .bolha { background: var(--primaria); color: var(--sobre-primaria); }

/* Rodap\xE9: cada aba tem a sua cor. Fora de uso, o \xEDcone vem colorido sobre um fundinho da mesma
   cor; a aba aberta vira uma "tecla" cheia, levantada, com sombra embaixo. */
.nav button[data-aba="lancar"]  { --aba: #E29578; --aba-sombra: #A9604A; --aba-fundo: rgba(226,149,120,.16); }
.nav button[data-aba="mes"]     { --aba: #83C5BE; --aba-sombra: #4E8F88; --aba-fundo: rgba(131,197,190,.16); }
.nav button[data-aba="planos"]  { --aba: #F6C177; --aba-sombra: #B88A3E; --aba-fundo: rgba(246,193,119,.16); }
.nav button[data-aba="lista"]   { --aba: #A8BCE8; --aba-sombra: #6D82B5; --aba-fundo: rgba(168,188,232,.16); }
.nav button[data-aba="ajustes"] { --aba: #F09CA8; --aba-sombra: #B5636F; --aba-fundo: rgba(240,156,168,.16); }
.nav button[data-aba] .bolha { color: var(--aba); background: var(--aba-fundo); transition: transform .18s ease, box-shadow .18s ease, background .15s ease; }
.nav button[data-aba][aria-current="page"] { color: var(--aba); }
.nav button[data-aba][aria-current="page"] .bolha { background: var(--aba); color: #0B2E33; transform: translateY(-4px); box-shadow: 0 4px 0 var(--aba-sombra), 0 8px 14px rgba(0,0,0,.28); }
.nav button[data-aba]:active .bolha { transform: translateY(0) scale(.94); box-shadow: 0 1px 0 var(--aba-sombra); }
.barra-acao { background: linear-gradient(180deg, transparent, var(--pagina) 22%); }

}

@layer escuro {
/* Modo escuro: escolhido em Ajustes (o claro \xE9 o padr\xE3o). */
html[data-tema="escuro"] .cc {
    --fundo:#0C1F23; --superficie:#12292E; --texto:#E4F1F3; --texto-2:#A9C5CB; --texto-3:#8DAEB5;
    --borda:#6D8F97; --divisor:#2B4A50; --acao:#6CCCC2; --acao-press:#3B958C; --acao-suave:#3F8F88; --acao-clara:#173F3F;
    --alerta-fundo:#4A2B21; --alerta-texto:#FFD6C6; --destaque:#E9A184; --perigo:#B04E2B; --perigo-texto:#F4A98C;
    --p1-clara:#15344B; --p2-clara:#45202F;
    --pagina:#0C1F23; --faixa:#0F4148; --nav-fundo:#081619; --nav-texto:#8DAEB5; --primaria:#E9A184; --primaria-press:#A8664C;
    --sobre-primaria:#0B2E33; --seg-fundo:#0A1A1D; --borda-cartao:#2B4A50; --sombra:0 2px 8px rgba(0,0,0,.35); --sombra-1:0 1px 3px rgba(0,0,0,.4); --sombra-3:0 12px 28px rgba(0,0,0,.5);
    --sobre-acao:#06292D; --vidro:rgba(18,41,46,.94); --trilho:#23434A; --trilho-2:#35585F; --heroi:#0F4148;
    --erro-fundo:#45231A; --erro-borda:#7A3C28; --arte-fundo:#173339; --arte-chao:#1E3F45;
    color-scheme: dark;
  }
html[data-tema="escuro"] .cc-fundo { background: #081619; }
html[data-tema="escuro"] .heroi { box-shadow: inset 0 0 0 1px rgba(255,255,255,.08); }
html[data-tema="escuro"] .toast { box-shadow: 0 8px 24px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.12); }
html[data-tema="escuro"] .btn-perigo[aria-disabled="true"] { background: #3A2620; color: #C9A497; }
html[data-tema="escuro"] .valor input::placeholder { color: #6E8D94; }
html[data-tema="escuro"] .veu { background: rgba(0,0,0,.6); }

}

@layer movimento {
@media (prefers-reduced-motion: reduce) {
  .cc *, .cc *::before, .cc *::after { animation: none !important; transition: none !important; }
  .notas { display: none; }
}
}
`;var A=z(ca(),1);var a=z(O(),1),la=[["Base",[["--acao","A\xE7\xE3o"],["--acao-suave","A\xE7\xE3o suave"],["--acao-clara","A\xE7\xE3o clara"],["--texto","Texto"],["--texto-2","Texto 2"],["--superficie","Superf\xEDcie"],["--divisor","Divisor"],["--borda","Borda"]]],["C\xF4modos",[["--c-contas","Contas"],["--c-lousa","Lousa"],["--c-cae","Ca\xEA"],["--c-lazer","Lazer"],["--c-mercado","Mercado"],["--c-pets","Mia e Marie"],["--c-nos","N\xF3s dois"],["--c-ajustes","Ajustes"]]]],pa=[["contas","Contas","venceu"],["lousa","Lousa","n:3"],["cae","Ca\xEA","mochila"],["lazer","Lazer","passeio"],["mercado","Mercado","n:12"],["pets","Mia e Marie","dose"],["nos","N\xF3s dois","ok"],["ajustes","Ajustes",null]],da={alegre:"Alegre",sono:"Sono",surpresa:"Surpresa",concentrado:"Concentrado",carinho:"Carinho"};function ua({nome:o,rotulo:t,raiz:r}){let[e,i]=(0,A.useState)("");return(0,A.useEffect)(()=>{r.current&&i(getComputedStyle(r.current).getPropertyValue(o).trim())},[o,r]),(0,a.jsxs)("li",{className:"guia-cor",children:[(0,a.jsx)("span",{className:"guia-cor-chapa",style:{background:`var(${o})`}}),(0,a.jsxs)("span",{className:"guia-cor-texto",children:[(0,a.jsx)("b",{children:t}),(0,a.jsx)("code",{children:o}),(0,a.jsx)("code",{children:e||"sem valor"})]})]})}function ma({aoFechar:o}){let t=(0,A.useRef)(null),r=(0,A.useRef)(null);return(0,A.useEffect)(()=>{r.current&&r.current.focus();let e=i=>{i.key==="Escape"&&o()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),(0,a.jsxs)("div",{className:"guia",role:"dialog","aria-modal":"true","aria-labelledby":"guia-titulo",ref:t,children:[(0,a.jsxs)("div",{className:"guia-topo",children:[(0,a.jsx)("h1",{id:"guia-titulo",className:"titulo",tabIndex:-1,ref:r,children:"Guia de estilo"}),(0,a.jsx)("button",{type:"button",className:"btn-icone btn-icone-borda",onClick:o,"aria-label":"Fechar o guia de estilo",children:(0,a.jsx)(I,{size:22,"aria-hidden":"true"})})]}),(0,a.jsx)("p",{className:"legenda guia-sub",children:"O jeito de desenhar da casita, mostrado pelo pr\xF3prio app. As cores s\xE3o as do tema em uso agora."}),la.map(([e,i])=>(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Cores: "+e,children:[(0,a.jsxs)("h2",{className:"secao-titulo",children:["Cores: ",e]}),(0,a.jsx)("ul",{className:"guia-cores",children:i.map(([c,p])=>(0,a.jsx)(ua,{nome:c,rotulo:p,raiz:t},c))})]},e)),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Letras",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"Letras"}),(0,a.jsxs)("div",{className:"guia-caixa",children:[(0,a.jsx)("p",{className:"titulo",style:{margin:0},children:"T\xEDtulo de tela"}),(0,a.jsx)("p",{className:"secao-titulo",style:{margin:"8px 0 0"},children:"T\xEDtulo de se\xE7\xE3o"}),(0,a.jsx)("p",{style:{margin:"8px 0 0"},children:"Texto corrido: a casa em ordem, sem enfeite na letra."}),(0,a.jsx)("p",{className:"legenda",style:{margin:"6px 0 0"},children:"Legenda: explica sem pesar."})]})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Escala de letras",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"Escala de letras"}),(0,a.jsxs)("div",{className:"guia-caixa guia-escala-letras",children:[[["--t6","N\xFAmero grande"],["--t55","Destaque"],["--t5","Sauda\xE7\xE3o"],["--t4","T\xEDtulo de tela"],["--t35","Subt\xEDtulo"],["--t3","Texto"],["--t2","Texto de apoio"],["--t15","R\xF3tulo"],["--t1","Legenda"],["--t0","Nota"],["--t00","Mi\xFAdo (s\xF3 no computador)"]].map(([e,i])=>(0,a.jsxs)("p",{style:{fontSize:`var(${e})`,margin:"0 0 6px",lineHeight:1.2},children:[(0,a.jsx)("span",{style:{fontWeight:800},children:i})," ",(0,a.jsx)("code",{children:e})]},e)),(0,a.jsx)("p",{className:"legenda",style:{margin:"8px 0 0"},children:"Pesos: 400 texto, 600 apoio, 700 forte, 800 t\xEDtulo, 900 n\xFAmero."})]})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Cantos e sombras",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"Cantos e sombras"}),(0,a.jsx)("ul",{className:"guia-grade guia-escalas",children:[["--r-xxs","2"],["--r-xs","4"],["--r-sm","8"],["--r-md","12"],["--r-lg","16"],["--r-xl","20"],["--r-pill","p\xEDlula"]].map(([e,i])=>(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"guia-canto",style:{borderRadius:`var(${e})`}}),(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:i}),(0,a.jsx)("code",{children:e})]})]},e))}),(0,a.jsx)("ul",{className:"guia-grade guia-escalas",style:{marginTop:12},children:[["--sombra-1","rente"],["--sombra","cart\xE3o"],["--sombra-3","flutua"],["--sombra-papel-1","papel 1"],["--sombra-papel-2","papel 2"],["--sombra-papel-3","papel 3"]].map(([e,i])=>(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"guia-canto guia-sombra",style:{boxShadow:`var(${e})`}}),(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:i}),(0,a.jsx)("code",{children:e})]})]},e))}),(0,a.jsxs)("p",{className:"legenda",style:{margin:"10px 0 0"},children:["Contorno de todos os desenhos: ",(0,a.jsx)("code",{children:"#22323A"}),"."]})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Bot\xF5es e selos",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"Bot\xF5es e selos"}),(0,a.jsxs)("div",{className:"guia-caixa guia-fila",children:[(0,a.jsx)("button",{type:"button",className:"btn btn-principal",children:"Principal"}),(0,a.jsx)("button",{type:"button",className:"btn btn-secundario",children:"Secund\xE1rio"}),(0,a.jsx)("button",{type:"button",className:"btn-texto",children:"S\xF3 texto"}),(0,a.jsx)("span",{className:"chip",children:"Etiqueta"}),(0,a.jsx)("span",{className:"selo-estado",children:"Pago"})]})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"\xCDcones dos c\xF4modos",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"\xCDcones dos c\xF4modos"}),(0,a.jsx)("ul",{className:"guia-grade",children:pa.map(([e,i,c])=>(0,a.jsxs)("li",{children:[(0,a.jsxs)("span",{className:"guia-par",children:[(0,a.jsx)($,{id:e,tam:48}),c?(0,a.jsx)($,{id:e,tam:48,estado:c}):null]}),(0,a.jsx)("span",{children:i})]},e))}),(0,a.jsx)("p",{className:"legenda",children:"\xC0 direita de cada um, o mesmo \xEDcone com um selinho de estado: conta vencida, n\xFAmero de recados ou de itens, mochila, rem\xE9dio, passeio, tudo em dia."})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"\xCDcones da barra",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"\xCDcones da barra"}),(0,a.jsx)("ul",{className:"guia-grade guia-grade-miuda",children:Object.entries(V).map(([e,i])=>(0,a.jsxs)("li",{children:[(0,a.jsx)(i,{size:26,"aria-hidden":"true"}),(0,a.jsx)("span",{children:e})]},e))})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Rostos",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"Rostos e humores"}),(0,a.jsx)("div",{className:"guia-rostos",role:"table","aria-label":"Rostos de Xan, Isa e Ca\xEA em cada humor",children:[["Xan",0],["Isa",1],["Ca\xEA",2]].map(([e,i])=>(0,a.jsxs)("div",{role:"row",className:"guia-rostos-linha",children:[(0,a.jsx)("span",{role:"rowheader",className:"guia-rostos-nome",children:e}),P.map(c=>(0,a.jsxs)("span",{role:"cell",className:"guia-rosto",children:[(0,a.jsx)(_,{i,tam:44,humor:c}),(0,a.jsx)("span",{children:da[c]||c})]},c))]},e))})]}),(0,a.jsxs)("section",{className:"guia-secao","aria-label":"Personagens",children:[(0,a.jsx)("h2",{className:"secao-titulo",children:"Personagens"}),(0,a.jsxs)("div",{className:"guia-caixa",children:[(0,a.jsxs)("svg",{className:"quintal-cena guia-palco",viewBox:"0 0 260 100",role:"img","aria-label":"Xan, Ca\xEA, Isa, Mia e Marie, como aparecem no quintal",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"q-cabelo-isa",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:".35",stopColor:"#3E2A1F"}),(0,a.jsx)("stop",{offset:".75",stopColor:"#8A5A35"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#C08A55"})]})}),(0,a.jsx)("path",{d:"M0 84 H260 V100 H0 Z",fill:"#CFEBD9"}),(0,a.jsx)("g",{transform:"translate(34,90)",children:(0,a.jsx)(X,{maoDir:"M10 -50 Q15 -41 15 -32"})}),(0,a.jsx)("g",{transform:"translate(74,90)",children:(0,a.jsx)(G,{})}),(0,a.jsx)("g",{transform:"translate(112,90)",children:(0,a.jsx)(H,{maoEsq:"M-8.6 -49 Q-13.4 -41 -14 -33"})}),(0,a.jsx)("g",{transform:"translate(168,90)",children:(0,a.jsx)(Q,{})}),(0,a.jsx)("g",{transform:"translate(226,90)",children:(0,a.jsx)(W,{})})]}),(0,a.jsx)("p",{className:"legenda",style:{margin:"8px 0 0"},children:"Tra\xE7o #22323A com pontas redondas, cores chapadas, sombra em elipse. Movimento curto e com pausa; nada se mexe com as anima\xE7\xF5es pausadas."})]})]})]})}var Ya=`
@layer base {
.guia-escalas { grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); }
.guia-escalas li { display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; }
.guia-escalas li > span:last-child { display: flex; flex-direction: column; font-size: var(--t1); }
.guia-canto { display: block; width: 56px; height: 44px; background: var(--superficie); border: 1.5px solid var(--borda-cartao); }
.guia-sombra { border-color: transparent; border-radius: var(--r-md); }
.guia-escala-letras code { font-size: var(--t1); font-weight: 400; opacity: .7; }
.guia { position: fixed; inset: 0; z-index: 70; overflow: auto; background: var(--fundo, #EDF6F9); color: var(--texto);
  padding: calc(16px + env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) calc(32px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px)); }
.guia > * { max-width: 860px; margin-left: auto; margin-right: auto; }
.guia-topo { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.guia-topo .titulo { margin: 0; color: var(--texto); outline: none; }
.guia-sub { margin-top: 4px; }
.guia-secao { margin-top: 22px; }
.guia-caixa { background: var(--superficie); border: 1.5px solid var(--divisor); border-radius: var(--r-lg); padding: 14px; }
.guia-fila { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.guia-cores, .guia-grade { list-style: none; margin: 8px 0 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.guia-cor { display: flex; gap: 10px; align-items: center; min-width: 0; background: var(--superficie); border: 1.5px solid var(--divisor); border-radius: var(--r-lg); padding: 8px; }
.guia-cor-chapa { flex: none; width: 40px; height: 40px; border-radius: var(--r-md); border: 1.5px solid var(--borda); }
.guia-cor-texto { display: grid; min-width: 0; font-size: var(--t15); } .guia-cor-texto code { font-size: var(--t0); color: var(--texto-2); overflow-wrap: anywhere; }
.guia-grade li { display: grid; justify-items: center; gap: 6px; text-align: center; background: var(--superficie); border: 1.5px solid var(--divisor); border-radius: var(--r-lg); padding: 10px 6px; font-size: var(--t15); color: var(--texto); }
.guia-grade-miuda { grid-template-columns: repeat(auto-fill, minmax(84px, 1fr)); }
.guia-par { display: inline-flex; gap: 6px; }
.guia-rostos { display: grid; gap: 10px; margin-top: 8px; }
.guia-rostos-linha { display: flex; flex-wrap: wrap; gap: 10px 14px; align-items: center; background: var(--superficie); border: 1.5px solid var(--divisor); border-radius: var(--r-lg); padding: 10px; }
.guia-rostos-nome { font-weight: 800; min-width: 3.2em; }
.guia-rosto { display: grid; justify-items: center; gap: 2px; font-size: var(--t0); color: var(--texto-2); }
.guia-palco.quintal-cena { width: 100%; max-width: 420px; height: auto; display: block; margin: 0 auto; }
}
`;var L="casita-vibrar",ga=()=>typeof navigator!="undefined"&&typeof navigator.vibrate=="function",fa=()=>{try{return localStorage.getItem(L)==="0"?"nao":"sim"}catch(o){return"sim"}};function Va(o){try{o==="nao"?localStorage.setItem(L,"0"):localStorage.removeItem(L)}catch(t){}}function Z(o=12){try{ga()&&fa()==="sim"&&navigator.vibrate(o)}catch(t){}}function Xa(){let o=null,t=l=>{let s=l.touches.length===1&&l.target.closest&&l.target.closest("[data-mes-desliza]");o=s&&!l.target.closest("button, input, textarea, select, [data-deslizar]")&&!document.querySelector(".veu")?{el:s,x:l.touches[0].clientX,y:l.touches[0].clientY,t:Date.now()}:null},r=l=>{if(!o)return;let s=o,f=l.changedTouches[0];o=null;let x=f.clientX-s.x,v=f.clientY-s.y;if(Math.abs(x)<60||Math.abs(v)>Math.abs(x)*.6||Date.now()-s.t>800)return;let k=(s.el.closest("[data-mes-raiz]")||document).querySelector(x<0?'[aria-label="Pr\xF3ximo m\xEAs"]':'[aria-label="M\xEAs anterior"]');k&&!k.disabled&&(Z(8),k.click())},e=l=>{l.target.closest&&l.target.closest("[data-marcar]")&&Z(12)};document.addEventListener("touchstart",t,{passive:!0}),document.addEventListener("touchend",r,{passive:!0}),document.addEventListener("click",e,!0);let i=null,c=0,p=0,n=0,g=null,u=()=>{i&&(i.style.transform="",i.style.transition="",i.removeAttribute("data-arrastando")),i=null,g=null,n=0},h=l=>{if(l.touches.length!==1)return;let s=l.target.closest&&l.target.closest("[data-deslizar]");!s||l.target.closest("input, textarea, select")||(i=s,c=l.touches[0].clientX,p=l.touches[0].clientY,n=0,g=null)},d=l=>{if(!i)return;let s=l.touches[0],f=s.clientX-c,x=s.clientY-p;g===null&&(Math.abs(f)>8||Math.abs(x)>8)&&(g=Math.abs(f)>Math.abs(x)*1.4&&f>0?"lado":"rola"),g==="lado"&&(n=Math.max(0,Math.min(140,f)),i.setAttribute("data-arrastando",n>70?"pronto":"1"),i.style.transition="none",i.style.transform=`translateX(${n}px)`)},E=()=>{if(!i)return;let l=i,s=g==="lado"&&n>70;if(l.style.transition="transform .18s ease",u(),s){let f=l.querySelector("[data-marcar]");f&&f.click()}};return document.addEventListener("touchstart",h,{passive:!0}),document.addEventListener("touchmove",d,{passive:!0}),document.addEventListener("touchend",E,{passive:!0}),document.addEventListener("touchcancel",u,{passive:!0}),()=>{document.removeEventListener("touchstart",t),document.removeEventListener("touchend",r),document.removeEventListener("click",e,!0),document.removeEventListener("touchstart",h),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",u)}}var ba="casita-sons",F=null,xa=()=>{try{return localStorage.getItem(ba)==="1"}catch(o){return!1}};function va(){if(!F){let o=window.AudioContext||window.webkitAudioContext;if(!o)return null;F=new o}return F.state==="suspended"&&F.resume(),F}function J(o,t,r,e,i){let c=o.createOscillator(),p=o.createGain();c.type="triangle",c.frequency.value=t,p.gain.setValueAtTime(1e-4,r),p.gain.exponentialRampToValueAtTime(i,r+.008),p.gain.exponentialRampToValueAtTime(1e-4,r+e),c.connect(p).connect(o.destination),c.start(r),c.stop(r+e+.02)}function Ga(o){if(!(!xa()||document.documentElement.getAttribute("data-estilo")!=="pintado"))try{let t=va();if(!t)return;let r=t.currentTime+.01;if(o==="moeda"){J(t,1568,r,.14,.18),J(t,2093,r+.09,.32,.16);return}if(o==="pagina"){let e=Math.floor(t.sampleRate*.22),i=t.createBuffer(1,e,t.sampleRate),c=i.getChannelData(0);for(let u=0;u<e;u++)c[u]=(Math.random()*2-1)*Math.pow(1-u/e,2);let p=t.createBufferSource(),n=t.createBiquadFilter(),g=t.createGain();p.buffer=i,n.type="bandpass",n.frequency.value=2200,n.Q.value=.8,g.gain.value=.22,p.connect(n).connect(g).connect(t.destination),p.start(r)}}catch(t){}}var R=["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],K=new RegExp(`^(\\d{1,2})\\s+(${R.join("|")})\\b\\s*(.*?)\\s*([\u2212\\-\u2013]?)\\s*R\\$\\s*(\\d{1,3}(?:\\.\\d{3})*,\\d{2})\\s*$`,"i"),ha=/FATURA\s+(\d{1,2})\s+([A-Z]{3})\s+(\d{4})/i,ya=/^([\p{Lu}][\p{L}'.]+(?:\s+[\p{L}'.]+)+)\s+R\$\s*(\d{1,3}(?:\.\d{3})*,\d{2})$/u,aa=o=>parseInt(o.replace(/\./g,"").replace(",",""),10),oa=o=>`${Math.floor(o/100)},${String(o%100).padStart(2,"0")}`,j=o=>oa(o).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ea=o=>o.replace(/^IOF\s+de\s+(volta\s+de\s+)?/i,"").replace(/["“”]/g,"").trim().toLowerCase();function wa(o){let t=(o||[]).map(s=>String(s).replace(/ /g," ").replace(/\s+/g," ").trim()).filter(Boolean),r=t.map(s=>s.match(ha)).find(Boolean);if(!r)return{ok:!1,motivo:'N\xE3o achei o cabe\xE7alho da fatura ("FATURA dd MMM aaaa"). Por enquanto, s\xF3 a fatura do Nubank em PDF.'};let e=R.indexOf(r[2].toUpperCase())+1,i=Number(r[3]),c=!1,p="compras",n=0,g=[],u=[];if(t.forEach(s=>{if(/^TRANSA[CÇ][OÕ]ES\b/i.test(s)){c=!0;return}if(!c)return;if(/^Pagamentos e Financiamentos\b/i.test(s)){p="pagamentos";return}if(p==="compras"){let M=s.match(ya);if(M&&!K.test(s)){n+=aa(M[2]);return}}let f=s.match(K);if(!f)return;let[,x,v,w,k,N]=f,m=R.indexOf(v.toUpperCase())+1,y=m>e?i-1:i,na=`${String(x).padStart(2,"0")}/${String(m).padStart(2,"0")}/${y}`,sa=w.replace(/[•·]{2,}\s*\d{4}/g," ").replace(/\s+/g," ").trim();g.push({data:na,nome:sa,valor:aa(N),credito:!!k,secao:p})}),!c)return{ok:!1,motivo:"N\xE3o achei a lista de transa\xE7\xF5es no PDF."};let h=new Set;g.forEach((s,f)=>{if(!s.credito||!/^IOF\s+de\s+volta/i.test(s.nome))return;let x=g.findIndex((v,w)=>!h.has(w)&&w!==f&&!v.credito&&/^IOF\s+de/i.test(v.nome)&&v.valor===s.valor&&ea(v.nome)===ea(s.nome));x>=0&&(h.add(f),h.add(x),u.push({texto:g[x].nome.replace(/["“”]/g,""),motivo:"cobrado e devolvido"}))});let d=[],E=0,l=0;return g.forEach((s,f)=>{if(h.has(f))return;if(s.secao==="compras"&&(E+=s.credito?-s.valor:s.valor),s.secao==="pagamentos"&&/^Pagamento\b/i.test(s.nome)){u.push({texto:`${s.nome} (R$ ${j(s.valor)})`,motivo:"pagamento da fatura anterior"});return}if(s.credito){u.push({texto:`${s.nome} (R$ ${j(s.valor)})`,motivo:"estorno ou cr\xE9dito"});return}let x=s.secao==="pagamentos"?`Pix ${s.nome===s.nome.toUpperCase()?s.nome.toLowerCase().replace(/(^|\s)(\p{L})/gu,(v,w,k)=>w+k.toUpperCase()).replace(/\s(De|Da|Do|Dos|Das|E)(?=\s)/g,(v,w)=>" "+w.toLowerCase()):s.nome}`:s.nome;d.push(`${s.data} ${x} ${oa(s.valor)}`),l++}),{ok:!0,linhas:d,compras:l,total:E,totalFatura:n,confere:n>0&&E===n,ignorados:u,ano:i,mesFatura:e}}var ka="leitor-pdf.js",B="sha384-oPkWCkzX9+ES0Ldd7VF1gQvF/ZxrxGXWg/XdrXtN+hfdmKITUMa4qX3YneON6WMf",C="Para ler PDF, falta o arquivo leitor-pdf.js no site (ele vai junto do index.html). Sem ele, d\xE1 para importar a fatura em CSV ou por print.",D=null;async function Ea(){if(D)return D;if(!globalThis.__casitaLeitorPdf){let t,r=B?"?v="+B.slice(7,19).replace(/[^A-Za-z0-9]/g,""):"";try{t=await fetch(new URL(ka+r,document.baseURI).href,{integrity:B||void 0,credentials:"omit"})}catch(i){throw new Error(navigator.onLine===!1?"Sem internet para baixar o leitor de PDF pela primeira vez. Tente de novo com conex\xE3o.":C)}if(!t.ok)throw new Error(C);let e=URL.createObjectURL(new Blob([await t.blob()],{type:"application/javascript"}));try{await new Promise((i,c)=>{let p=document.createElement("script");p.src=e,p.async=!0,p.onload=()=>i(),p.onerror=()=>c(new Error(C)),document.head.appendChild(p)})}finally{URL.revokeObjectURL(e)}}let o=globalThis.__casitaLeitorPdf;if(!o||!o.pdfjs)throw new Error(C);return globalThis.pdfjsWorker={WorkerMessageHandler:o.WorkerMessageHandler},D=o.pdfjs,D}function Aa(o){let t=[];return o.filter(r=>r.str&&r.str.trim()).forEach(r=>{let e=r.transform[4],i=r.transform[5],c=t.find(p=>Math.abs(p.y-i)<2.5);c||(c={y:i,partes:[]},t.push(c)),c.partes.push({x:e,s:r.str})}),t.sort((r,e)=>e.y-r.y).map(r=>r.partes.sort((e,i)=>e.x-i.x).map(e=>e.s).join(" "))}async function Fa(o){let t=await Ea(),r=new Uint8Array(await o.arrayBuffer()),e=await t.getDocument({data:r,isEvalSupported:!1}).promise,i=[];try{for(let c=1;c<=e.numPages;c++){let n=await(await e.getPage(c)).getTextContent();i.push(...Aa(n.items))}}finally{e.destroy()}return i}async function Ca(o){let t;try{t=await Fa(o)}catch(r){return typeof console!="undefined"&&console.warn("PDF:",r),r&&/leitor-pdf\.js|leitor de PDF/.test(String(r.message))?{ok:!1,motivo:r.message}:{ok:!1,motivo:/password|senha/i.test(String(r&&r.name+r.message))?"Esse PDF est\xE1 protegido por senha. Baixe a fatura de novo pelo app do banco, sem senha.":"N\xE3o consegui abrir esse PDF. Confira se \xE9 o PDF da fatura (n\xE3o uma foto dela)."}}return wa(t)}function Wa(o){let t=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],r=`${t[o.mesFatura-1]} (gastos de ${t[(o.mesFatura+10)%12]})`,e=c=>"R$ "+j(c),i=o.totalFatura?o.confere?`A soma das compras confere com o total da fatura (${e(o.totalFatura)}).`:`Aten\xE7\xE3o: a soma lida (${e(o.total)}) n\xE3o bate com o total da fatura (${e(o.totalFatura)}). Confira se falta alguma linha.`:"";return`Fatura de ${r}: ${o.compras} ${o.compras===1?"gasto":"gastos"}. ${i}`}async function Za(o){if(String(o&&o.name||"").toLowerCase().endsWith(".pdf")||o&&o.type==="application/pdf")return Ca(o);let e="";try{e=await o.text()}catch(c){return{ok:!1,motivo:"N\xE3o consegui abrir esse arquivo."}}e=e.replace(/^\uFEFF/,"");let i=e.split(/\r?\n/).filter(c=>c.trim());return i.length?{ok:!0,csv:!0,linhas:i,compras:null,ignorados:[]}:{ok:!1,motivo:"O arquivo est\xE1 vazio."}}function Ja(o){let t={};return(o||[]).forEach(r=>{let e=String(r.data||"").slice(0,7);e&&(t[e]=(t[e]||0)+1)}),Object.keys(t).sort((r,e)=>t[e]-t[r]||e.localeCompare(r))[0]||null}var Ka=(o,t)=>!!t&&String(o.data||"").slice(0,7)!==t;function ae(o,t){let[r,e]=o.split("-").map(Number),i=`${o}-${String(new Date(r,e,0).getDate()).padStart(2,"0")}`;return i<t?i:t}var Da="jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez",Na=new RegExp(`^\\s*(\\d{4}-\\d{2}-\\d{2}|\\d{1,2}[/.-]\\d{1,2}(?:[/.-]\\d{2,4})?|\\d{1,2}\\s+(?:de\\s+)?(?:${Da})[a-z\xE7]*\\.?(?:\\s+(?:de\\s+)?\\d{4})?)(?=[\\s,;|]|$)`,"i"),za=/(?:^|[\s,;|])(\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2}\/\d{4})(?=[\s,;|]|$)/,ta=/([+\-−]?)\s*(?:R\s?\$\s*)?([+\-−]?)(\d{1,3}(?:\.\d{3})+|\d+),(\d{2})(?![\d,])/g,Sa=/(?:^|[\s,;|])([+\-−]?)(\d+)\.(\d{2})\s*$/,$a=/(?:^|\s)(?:parc(?:ela)?\.?\s*)?(\d{1,2})\s*(?:\/|\bde\b)\s*(\d{1,2})(?=\s|$)/i,La=o=>{let[t,r,e]=o.split("-").map(Number);return r>=1&&r<=12&&e>=1&&t>=2e3&&t<=2100&&T(new Date(t,r-1,e))===o?o:null};function ra(o,t){let r=o.trim().replace(/\./g,"/").replace(/^(\d{1,2})-(\d{1,2})(-(\d{2,4}))?$/,(e,i,c,p,n)=>`${i}/${c}${n?"/"+n:""}`);return/^\d{4}-\d{2}-\d{2}$/.test(r)?La(r):Y(r,t)}var ia={pao:"P\xE3o",acucar:"A\xE7\xFAcar",farmacia:"Farm\xE1cia",acougue:"A\xE7ougue",cafe:"Caf\xE9",sacolao:"Sacol\xE3o",agua:"\xC1gua",condominio:"Condom\xEDnio",manutencao:"Manuten\xE7\xE3o",servico:"Servi\xE7o",servicos:"Servi\xE7os",ifood:"iFood",eletrica:"El\xE9trica",veterinaria:"Veterin\xE1ria",clinica:"Cl\xEDnica",odontologica:"Odontol\xF3gica",laboratorio:"Laborat\xF3rio",emporio:"Emp\xF3rio",confeitaria:"Confeitaria",lavanderia:"Lavanderia",estacionamento:"Estacionamento",pedagio:"Ped\xE1gio",onibus:"\xD4nibus",metro:"Metr\xF4"},Ba=new Set(["de","da","do","das","dos","e","em","a","o"]);function Ra(o){let t=String(o||"").replace(/[*_|#]+/g," ").replace(/\s[-–]\s/g," ").replace(/\s+/g," ").trim();if(t=t.split(" ").filter(e=>!/^\d{3,}$/.test(e)&&!/^[^\p{L}\p{N}]+$/u.test(e)).join(" ").replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}+)]+$/gu,"").trim(),!t)return"";let r=t===t.toUpperCase();return t.split(" ").map((e,i)=>{let c=S(e);return ia[c]?ia[c]:r?i>0&&Ba.has(c)?c:/^\d/.test(e)||e.length<=2?e:e.charAt(0)+e.slice(1).toLowerCase():e}).join(" ")}function ie(o,t){let r=[],e=[],i=0;return String(o||"").split(/\r?\n/).forEach((c,p)=>{let n=c.replace(/ /g," ").trim();if(!n)return;if(!/\d/.test(n)){n.length>2&&i++;return}let g=/^\d{4}-\d{2}-\d{2},/.test(n);if(g&&(n=n.split(",").join(" ; ")),U.test(S(n).replace(/[;|\t]/g," "))){i++;return}let u="",h=n.match(/^([+\-\u2212])\s+/);h&&(u=h[1],n=n.slice(h[0].length));let d=null,E=n.match(Na);if(E&&(d=ra(E[1],t),d&&(n=n.slice(E[0].length))),!d){let m=n.match(za);m&&(d=ra(m[1],t),d&&(n=n.replace(m[1]," ")))}let l=0,s="",f=-1,x=-1;if(!g){let m,y=null;for(ta.lastIndex=0;m=ta.exec(n);)y=m;y&&(l=parseInt(y[3].replace(/\./g,""),10)*100+parseInt(y[4],10),s=y[1]||y[2],x=y.index,f=y.index+y[0].length)}if(!l){let m=n.match(Sa);m&&(l=parseInt(m[2],10)*100+parseInt(m[3],10),s=m[1],x=m.index,f=m.index+m[0].length,g&&s&&(s="+"))}if(s||(s=u),!l){e.push({linha:p,texto:c.trim()});return}let v=(n.slice(0,x)+" "+n.slice(f)).replace(/[;|\t]/g," "),w=null,k=v.match($a);if(k){let m=Number(k[1]),y=Number(k[2]);m>=1&&y>=2&&m<=y&&y<=q&&(w={k:m,n:y},v=v.replace(k[0]," "))}v=v.replace(/\b(parc(ela)?|compra|pagamento|debito|débito|credito|crédito|pix|cartao|cartão|r\$)\b\.?/gi,m=>/^(pix)$/i.test(m)?m:" ");let N=Ra(v)||"Sem nome";r.push({linha:p,data:d||t,aConferir:!d,nome:N,valor:l,parcela:w,credito:s==="+"})}),{itens:r,naoEntendidas:e,ignoradas:i}}function ne(o,t,r=10){let i=n=>{let[g,u,h]=n.split("-").map(Number);return new Date(g,u-1,h).getTime()},c=new Set,p=(t||[]).filter(n=>(!n.tipo||n.tipo==="gasto")&&!n.virtual);return o.map(n=>{let g=i(n.data),u=null,h=1/0;return p.forEach(d=>{if(c.has(d.id)||n.parcela&&!(d.compra&&d.compra.n===n.parcela.k&&(!d.compra.de||d.compra.de===n.parcela.n))||(d.compra&&d.compra.de>1&&!n.parcela?d.compra.total:d.valor)!==n.valor)return;let l=Math.abs(i(n.parcela?d.data:d.compra?d.compra.dataCompra:d.data)-g)/864e5;l<=(n.parcela?35:r)&&l<h&&(u=d,h=l)}),u?(c.add(u.id),{...n,ja:u.compra?u.compra.dataCompra:u.data}):{...n,ja:null}})}export{b as a,ja as b,Ma as c,ma as d,Ya as e,ga as f,fa as g,Va as h,Z as i,Xa as j,xa as k,Ga as l,Wa as m,Za as n,Ja as o,Ka as p,ae as q,ie as r,ne as s};
