import{b as Dr,c as Br,e as Ti,i as Mi,j as Li,l as Lt,m as Oi,n as Ri,o as Pi,r as Ot,s as _i}from"./parte-F7P6OX3R.js";import{Z as Rt,ba as Xi,j as Yi,k as Gi}from"./parte-OXDHXZD7.js";import{$b as qe,$f as $t,$h as Ni,Af as Ce,Ag as Io,Bb as Ar,Bg as li,Cg as ao,Df as Yr,Dh as Mo,Eb as qt,Ec as Et,Ef as Gr,Eg as ci,Eh as qi,Fb as Cr,Ff as Xr,Gf as Hr,Gg as pi,Gh as zi,Hf as Za,Hg as di,Hh as Tt,If as Jr,Ig as mi,Ih as Pe,Jb as za,Jg as gi,Jh as Ei,Kb as Z,Ke as Ee,Kh as Ai,Lb as fo,Le as At,Lf as Bt,Lh as Ci,Ma as we,Mb as $r,Mf as Kr,Mh as Di,Na as yt,Nb as Sr,Nf as De,Ng as ui,Nh as Mt,Ni as Ui,Oa as kt,Oe as Ct,Of as oe,Og as Ie,Oh as Bi,Pb as ye,Pe as Or,Pf as Wr,Pg as To,Ph as $i,Qf as no,Qg as xi,Qh as Si,Rf as Be,Rg as fi,Rh as ji,S as wt,Sb as Ba,Se as Rr,Sf as ee,Si as Vi,Tb as ke,Te as Ma,Tf as Zr,Tg as hi,Ub as ae,Uf as Ya,Vb as jr,Vf as Qr,Wa as yr,We as Pr,Wf as Qa,Xf as te,Yb as $a,Yf as so,Zb as zt,Zf as $e,Zh as ie,_ as vr,_f as So,a as xo,ab as kr,ac as Ta,af as _r,ag as ai,ah as Nt,b as Is,ba as ve,bc as ze,bg as O,c as br,cc as Wa,cg as oi,ch as bi,dh as vi,ea as Fr,eb as qr,fg as ei,fh as Te,gg as Se,gh as Me,ha as Fe,ig as ti,jg as je,kg as jo,kh as Fi,kl as Ue,lc as Nr,lg as No,li as _e,mc as Ir,md as Lr,mg as St,mi as ra,nc as Tr,ng as ri,oc as Mr,of as Ur,og as Ga,pg as lo,ph as Le,qb as zr,qf as Vr,qg as wo,qh as wi,r as be,rb as Er,rg as Ne,rh as yi,sb as Ka,sg as Xa,sh as ki,tg as re,th as Oe,ti as Ii,uh as It,va as wr,vf as Dt,vg as ii,vh as Re,w as Qo,wg as jt,yg as ni,z as Ft,zf as Ae,zg as si}from"./parte-O6JUFB6Z.js";import{a as Ns,b as ha}from"./parte-B7CUGV4X.js";var Ji=Ns(Pt=>{"use strict";var Hi=Is();Pt.createRoot=Hi.createRoot,Pt.hydrateRoot=Hi.hydrateRoot;var Kl});var ns=ha(xo(),1),ss=ha(Ji(),1);var y=ha(xo(),1);var Ts=e=>`url("data:image/svg+xml,${encodeURIComponent(e)}")`,Zl=Ts('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .36  0 0 0 0 .28  0 0 0 .09 0"/></filter><rect width="220" height="220" filter="url(#g)"/></svg>'),Fa='html[data-tema="escuro"]',Ki=`
@layer base {
/* ---------- rodap\xE9 com 3 a 6 abas ---------- */
.nav { grid-template-columns: none; grid-auto-flow: column; grid-auto-columns: 1fr; }
.nav[data-n="6"] { gap: 0; padding-left: 4px; padding-right: 4px; }
.nav[data-n="6"] .bolha { width: min(50px, 100%); }
.nav[data-n="7"] { gap: 0; padding-left: 2px; padding-right: 2px; }
.nav[data-n="7"] .bolha { width: min(44px, 100%); height: 30px; }
.nav[data-n="7"] button { font-size: calc(var(--t1) - 1px); letter-spacing: -.01em; }
.nav button[data-aba="inicio"] { --aba: #BFD3D8; --aba-sombra: #7D969C; --aba-fundo: rgba(191,211,216,.16); }
.nav button[data-aba="lousa"]  { --aba: #9CC8E8; --aba-sombra: #5E8DB3; --aba-fundo: rgba(156,200,232,.16); }
.nav button[data-aba="saude"]  { --aba: #F28482; --aba-sombra: #B4504E; --aba-fundo: rgba(242,132,130,.16); }
.nav button[data-aba="escola"] { --aba: #F6C177; --aba-sombra: #B88A3E; --aba-fundo: rgba(246,193,119,.16); }
.nav button[data-aba="lazer"]  { --aba: #8FD0B0; --aba-sombra: #4E9474; --aba-fundo: rgba(143,208,176,.16); }

/* ---------- pecinhas comuns ---------- */
.dupla { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; align-items: end; }
.dupla > *, .dupla input { min-width: 0; }
.dupla input { width: 100%; }
.marcar { display: flex; gap: 10px; align-items: center; min-height: 44px; font-weight: 600; font-size: var(--t2); }
.marcar input { width: 22px; height: 22px; accent-color: var(--acao); flex-shrink: 0; }
.btn-pequeno { min-height: 44px; padding: 0 14px; font-size: var(--t2); font-weight: 700; border-radius: var(--r-pill); }
.campo-texto { min-height: 88px; resize: vertical; line-height: 1.4; font: inherit; color: inherit; display: block; }
select.campo { appearance: auto; background: var(--superficie); color: var(--texto); }
.chip-hora { background: var(--acao-clara); border-color: transparent; font-weight: 700; }
.recolhida { margin-top: 8px; }
.recolhida-botao { padding-left: 0; }

/* ---------- cores de quem anotou ---------- */
[data-q="0"] { --q: #2F6FB5; }
[data-q="1"] { --q: #B23A62; }
[data-q="2"] { --q: #23744A; }
[data-q="c"] { --q: #A34C15; }

/* ---------- In\xEDcio ---------- */
.inicio-cab { flex-direction: column; align-items: stretch; padding-top: 22px; padding-bottom: 28px; }
.inicio-data { color: #DDF0EE; font-size: var(--t2); font-weight: 600; margin-bottom: 4px; }
.inicio-data::first-letter { text-transform: uppercase; }
.inicio-cab .saudacao { font-size: var(--t5); }
.inicio-ajustes { flex-shrink: 0; }
.portas { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
.porta { position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; width: 100%; min-height: 156px; padding: 14px 12px 14px 18px;
  border-radius: var(--r-xl); text-align: left; background: var(--superficie); border: 1.5px solid var(--borda-cartao); box-shadow: var(--sombra); overflow: hidden;
  transition: transform .12s ease; }
.porta::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: var(--porta); }
.porta:active { transform: scale(.98); }
.porta-contas { --porta: #E29578; --porta-fundo: #FFF0EA; }
.porta-lousa { --porta: #83C5BE; --porta-fundo: #E6F4F2; }
.porta-cae { --porta: #F6C177; --porta-fundo: #FFF4DE; }
.porta-arte { width: 66px; height: 66px; flex-shrink: 0; border-radius: var(--r-xl); background: var(--porta-fundo); display: flex; align-items: center; justify-content: center; }
.porta-cae .porta-arte .boneco { border-radius: 50%; }
.porta-texto { flex: 1; min-width: 0; }
.porta-nome { display: block; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; letter-spacing: -.01em; }
.porta-sub { display: block; font-size: var(--t1); color: var(--texto-2); margin-top: 2px; line-height: 1.35; overflow-wrap: anywhere; }
.porta[data-destaque] .porta-sub { color: var(--texto); font-weight: 600; }
.porta[data-alerta] .porta-sub { color: var(--perigo-texto); font-weight: 700; }
.porta-seta { color: var(--texto-3); flex-shrink: 0; position: absolute; top: 12px; right: 10px; }
.inicio-rodape { text-align: center; margin-top: 24px; }

/* ---------- Lousa ---------- */
.lousa-semana, .lousa-linha { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px; }
.lousa-dia { min-width: 0; }
.lousa-semana { margin-bottom: 4px; }
.lousa-semana span { text-align: center; font-size: var(--t1); font-weight: 800; color: #7A8A93; }
.lousa-linha + .lousa-linha { margin-top: 4px; }
.lousa-dia { display: flex; flex-direction: column; align-items: stretch; justify-content: space-between; width: 100%; min-height: 50px; padding: 4px 4px 5px;
  border-radius: var(--r-md); border: 1.5px solid transparent; background: #F5F8F9; color: #34495E; }
.lousa-dia.vazio { display: block; background: transparent; }
@media (max-width: 359px) { .lousa-semana, .lousa-linha { gap: 2px; } .lousa-dia { padding: 3px 2px 4px; } }
.lousa-num { font-weight: 700; font-size: var(--t2); line-height: 1; text-align: left; font-variant-numeric: tabular-nums; width: 22px; height: 22px;
  display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; }
.lousa-dia[data-hoje="1"] .lousa-num { background: #E29578; color: #0B3B41; }
.lousa-dia[aria-pressed="true"] { border-color: var(--acao); background: #E3F3F1; }
.lousa-marcas { display: flex; flex-direction: column; gap: 2px; margin-top: 4px; min-height: 10px; }
.lousa-marcas i { display: block; height: 4px; border-radius: var(--r-xxs); background: var(--q); }
.lousa-marcas i:nth-child(2) { width: 78%; } .lousa-marcas i:nth-child(3) { width: 58%; }
.lousa-marcas b { font-size: var(--t00); line-height: 1; color: #5B6B74; font-weight: 800; }
.lousa-painel { margin-top: 24px; }
.recados { list-style: none; margin: 0; padding: 0; }
.recado { display: flex; align-items: flex-start; gap: 10px; padding: 10px 0; }
.recado + .recado { border-top: 1px solid var(--trilho); }
/* Toque de 44 px; a caixinha desenhada \xE9 menor, dentro dele. */
.recado-check, .nota-check { width: 44px; height: 44px; flex-shrink: 0; margin: -6px -6px -6px -8px; display: inline-flex; align-items: center; justify-content: center; }
.recado-check .caixa { width: 30px; height: 30px; border-radius: var(--r-sm); border: 2px solid var(--q); color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; }
.recado-check[aria-checked="true"] .caixa { background: var(--q); }
.recado-cae-ico .caixa { border-style: dashed; color: var(--q); }
.recado-texto { flex: 1; min-width: 0; text-align: left; min-height: 44px; }
.recado-linha { display: block; color: var(--q); font-weight: 700; font-size: var(--t3); line-height: 1.3; overflow-wrap: anywhere; }
.recado-quem { display: block; font-size: var(--t1); color: var(--texto-2); margin-top: 2px; }
.recado[data-feito="1"] .recado-linha { text-decoration: line-through; text-decoration-thickness: 2px; opacity: .55; }
.quem-marcador { display: flex; flex-wrap: wrap; gap: 8px; }
.quem-marcador button { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px; border-radius: var(--r-pill);
  border: 2px solid var(--q); color: var(--q); font-weight: 700; background: var(--superficie); }
.quem-marcador .tampa { width: 14px; height: 14px; border-radius: var(--r-xs); background: var(--q); }
.quem-marcador button[aria-pressed="true"] { background: var(--q); color: #FFFFFF; }
.quem-marcador button[aria-pressed="true"] .tampa { background: #FFFFFF; }
.lousa-limpa { display: flex; align-items: center; gap: 12px; }

/* ---------- Ca\xEA ---------- */
.cae-cab { min-height: 76px; }
.cae-avatar { display: inline-flex; border-radius: 50%; box-shadow: 0 0 0 3px rgba(255,255,255,.55); flex-shrink: 0; }
[data-area="saude"] { --area: #C2416B; --area-fundo: #FBE3EA; }
[data-area="escola"] { --area: #9A5F00; --area-fundo: #FFF0D1; }
[data-area="lazer"] { --area: #23744A; --area-fundo: #DDF3E6; }
.caixinha-remedios { padding: 16px; border-radius: var(--r-xl); border: 2px solid #F09CA8; background: linear-gradient(165deg, #FDECEF 0%, var(--superficie) 70%); }
.remedios-topo { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.doses { list-style: none; margin: 0; padding: 0; }
.dose { display: flex; align-items: center; gap: 12px; padding: 10px 0; }
.doses .dose + .dose { border-top: 1px dashed var(--trilho-2); }
.dose-hora { font-weight: 800; font-size: var(--t4); min-width: 58px; font-variant-numeric: tabular-nums; }
.dose-hora[data-periodo] { font-size: var(--t3); }
.dose[data-atrasada] .dose-hora, .dose[data-atrasada] .linha-sub { color: var(--perigo-texto); font-weight: 700; }
.dose[data-agora] .dose-hora, .dose[data-agora] .linha-sub { color: var(--acao); font-weight: 700; }
.dose-meio { flex: 1; min-width: 0; }
.dose-botao { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px; border-radius: var(--r-pill); flex-shrink: 0;
  border: 2px solid #C2416B; color: #A3324F; font-weight: 800; background: var(--superficie); }
.dose[data-dada="1"] .dose-botao { background: #23744A; border-color: #23744A; color: #FFFFFF; }
.dose[data-dada="1"] .linha-nome { text-decoration: line-through; opacity: .7; }
.sos, .remedios-lista { margin-top: 14px; }
.sos-bloco + .sos-bloco { border-top: 1px dashed var(--trilho-2); }
.sos-vezes { align-items: center; padding-bottom: 8px; }
.notas-cae { list-style: none; margin: 0; padding: 0; }
.nota-cae { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; }
.nota-cae + .nota-cae { border-top: 1px solid var(--trilho); }
.nota-ico { width: 36px; height: 36px; flex-shrink: 0; border-radius: var(--r-md); display: inline-flex; align-items: center; justify-content: center;
  background: var(--area-fundo, #FBE3EA); color: var(--area, #C2416B); }
.nota-check .caixa { width: 32px; height: 32px; border-radius: var(--r-md); border: 2px solid var(--area); color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; }
.nota-check[aria-checked="true"] .caixa { background: var(--area); }
.nota-corpo { flex: 1; min-width: 0; text-align: left; min-height: 44px; }
.nota-texto { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; font-size: var(--t2); color: var(--texto-2);
  margin-top: 4px; white-space: pre-wrap; overflow-wrap: anywhere; }
.nota-cae[data-feito="1"] .linha-nome { text-decoration: line-through; color: var(--texto-2); }
.nota-cae[data-atrasada] .linha-sub { color: var(--perigo-texto); font-weight: 700; }
.receitas { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.receita { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 12px; border-radius: var(--r-lg); border: 1px solid var(--divisor);
  background: var(--superficie); text-align: left; }
.receita-ico { width: 44px; height: 44px; flex-shrink: 0; border-radius: var(--r-md); display: inline-flex; align-items: center; justify-content: center; background: #FBE3EA; color: #C2416B; }
.receita-texto { display: flex; flex-direction: column; min-width: 0; }
.receita-foto img, .receita-previa { display: block; width: 100%; max-height: 58vh; object-fit: contain; border-radius: var(--r-md); background: #FFFFFF; border: 1px solid var(--divisor); }
.receita-previa { max-height: 34vh; }
}

@layer escuro {
${Fa} [data-q="0"] { --q: #8DBCF2; }
${Fa} [data-q="1"] { --q: #F49BBA; }
${Fa} [data-q="2"] { --q: #7FD1A3; }
${Fa} [data-q="c"] { --q: #F5A766; }
${Fa} .porta-contas { --porta-fundo: #3A2A26; }
${Fa} .porta-lousa { --porta-fundo: #173F3F; }
${Fa} .porta-cae { --porta-fundo: #3C3020; }
${Fa} .lousa-dia { background: #1B363C; color: #D7E7EA; }
${Fa} .lousa-dia.vazio { background: transparent; }
${Fa} .lousa-dia[aria-pressed="true"] { background: #1F4A4A; }
${Fa} .lousa-semana span, ${Fa} .lousa-marcas b { color: #8DAEB5; }
${Fa} [data-area="saude"] { --area: #F49BBA; --area-fundo: #45202F; }
${Fa} [data-area="escola"] { --area: #F6C177; --area-fundo: #3C3020; }
${Fa} [data-area="lazer"] { --area: #7FD1A3; --area-fundo: #183A2A; }
${Fa} .nota-check .caixa, ${Fa} .recado-check .caixa { color: #0B1F23; }
${Fa} .caixinha-remedios { background: linear-gradient(165deg, #3A1F2A 0%, var(--superficie) 70%); border-color: #8E4A5C; }
${Fa} .dose-botao { border-color: #F49BBA; color: #F7B6CB; }
${Fa} .dose[data-dada="1"] .dose-botao { background: #7FD1A3; border-color: #7FD1A3; color: #0B1F23; }
${Fa} .receita-ico { background: #45202F; color: #F49BBA; }
${Fa} .quem-marcador button[aria-pressed="true"] { color: #0B1F23; }
}

@layer pintado {















  



































   

  
}
`;var Qi=e=>`url("data:image/svg+xml,${encodeURIComponent(e)}")`,Wi=Qi('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .36  0 0 0 0 .28  0 0 0 .09 0"/></filter><rect width="220" height="220" filter="url(#g)"/></svg>'),Zi=Qi('<svg xmlns="http://www.w3.org/2000/svg" width="360" height="300"><g fill="none" stroke="#5a6a76" stroke-width="3" stroke-linecap="round" opacity=".055"><path d="M30 60 q40 -18 80 0 t80 0"/><path d="M210 210 q30 -14 60 4 q20 10 50 -6"/><path d="M60 240 l90 -6"/><path d="M250 70 q10 30 40 20"/></g></svg>'),B='html[data-tema="escuro"]',an=`
@layer base {
.nav button[data-aba="crescer"]  { --aba: #BFD97F; --aba-sombra: #7E9A3F; --aba-fundo: rgba(191,217,127,.16); }
.nav button[data-aba="mercado"]  { --aba: #7FC8A9; --aba-sombra: #4E9474; --aba-fundo: rgba(127,200,169,.16); }
.nav button[data-aba="petsaude"] { --aba: #C3B5E0; --aba-sombra: #8573B5; --aba-fundo: rgba(195,181,224,.16); }
.nav button[data-aba="cuidados"] { --aba: #9CC8E8; --aba-sombra: #5E8DB3; --aba-fundo: rgba(156,200,232,.16); }
[data-q="l"] { --q: #1F6F8C; }
[data-q="p"] { --q: #7B4FB5; }

/* ---------- Lousa de verdade (padr\xE3o): moldura de alum\xEDnio, cantoneiras, vidro, \xEDm\xE3s, bandeja ---------- */
.lousa-quadro { position: relative; margin-top: 20px; padding: 13px 13px 0; border-radius: var(--r-sm);
  background: linear-gradient(150deg, #F6F8F9 0%, #CBD3D9 30%, #EEF2F4 52%, #AEB8BF 78%, #C9D1D6 100%);
  box-shadow: inset 0 1px 0 #FFFFFF, inset 0 -1px 0 rgba(0,0,0,.18), 0 12px 24px rgba(11,59,65,.20), 0 2px 4px rgba(11,59,65,.18); }
.lousa-superficie { position: relative; overflow: hidden; border-radius: var(--r-xxs); padding: 6px 6px 10px;
  background: linear-gradient(118deg, rgba(255,255,255,0) 26%, rgba(255,255,255,.85) 33%, rgba(255,255,255,0) 44%), ${Zi}, linear-gradient(180deg, #FFFFFF, #F4F7F8);
  box-shadow: inset 0 2px 4px rgba(0,0,0,.16), inset 0 0 0 1px rgba(0,0,0,.07); }
.lousa-canto { position: absolute; z-index: 2; width: 20px; height: 20px; background: linear-gradient(145deg, #A2ADB5, #5E6A72); box-shadow: var(--sombra-1); }
.lousa-canto.c1 { top: -2px; left: -2px; border-radius: var(--r-sm) var(--r-xxs) var(--r-md) var(--r-xxs); }
.lousa-canto.c2 { top: -2px; right: -2px; border-radius: var(--r-xxs) var(--r-sm) var(--r-xxs) var(--r-md); }
.lousa-canto.c3 { bottom: -2px; left: -2px; border-radius: var(--r-xxs) var(--r-md) var(--r-xxs) var(--r-sm); }
.lousa-canto.c4 { bottom: -2px; right: -2px; border-radius: var(--r-md) var(--r-xxs) var(--r-sm) var(--r-xxs); }
.lousa-imas { position: absolute; z-index: 3; top: 20px; right: 22px; display: flex; gap: 8px; align-items: center; pointer-events: none; }
.lousa-titulo-mao { font-family: var(--fonte-titulo); font-weight: 800; font-size: var(--t4); line-height: 1;
  color: #2F6FB5; margin: 2px 0 6px 6px; transform: rotate(-1.5deg); transform-origin: left; }
.lousa-dia { background: rgba(30,60,80,.035); }
.lousa-bandeja { position: relative; margin: 8px -13px 0; padding: 5px 14px 3px; border-radius: 0 0 var(--r-sm) var(--r-sm);
  background: linear-gradient(180deg, #E4E9EC, #B3BEC5 55%, #8E9AA3); box-shadow: inset 0 3px 4px rgba(0,0,0,.22); }
.bandeja-desenho { display: block; }
.lousa-legenda { list-style: none; display: flex; flex-wrap: wrap; gap: 6px 14px; padding: 0; margin: 12px 2px 0; font-size: var(--t1); font-weight: 700; color: var(--texto-2); }
.lousa-legenda i { display: inline-block; width: 16px; height: 5px; border-radius: var(--r-xxs); background: var(--q); margin-right: 6px; vertical-align: middle; }

/* ---------- In\xEDcio: faixa "Hoje" e seis portas ---------- */
.hoje { margin-top: 18px; padding: 12px 14px 8px; border-radius: var(--r-xl); background: var(--superficie); border: 1.5px solid var(--borda-cartao); box-shadow: var(--sombra); }
.hoje-titulo { display: flex; align-items: center; gap: 6px; font-size: var(--t3); font-weight: 800; color: #9A4F33; margin-bottom: 4px; }
.hoje-mais { padding: 8px 2px 2px; border-top: 1px solid var(--trilho); }
.hoje-lista { list-style: none; margin: 0; padding: 0; }
.hoje-item { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 44px; padding: 6px 2px; text-align: left; border-top: 1px solid var(--trilho); color: var(--texto); }
.hoje-lista li:first-child .hoje-item { border-top: 0; }
.hoje-item span { flex: 1; min-width: 0; font-size: var(--t2); font-weight: 600; line-height: 1.3; overflow-wrap: anywhere; }
.hoje-item[data-alerta] { color: var(--perigo-texto); }
.hoje-vazio { padding: 6px 0 8px; }
/* v17.39 (faxina): as regras de .portas, .porta e .porta-* daqui foram fundidas com as de estilosFamilia.js */
.porta-lazer { --porta: #A8BCE8; --porta-fundo: #E9EFFB; }
.porta-mercado { --porta: #7FC8A9; --porta-fundo: #E4F4EC; }
.porta-pets { --porta: #C3B5E0; --porta-fundo: #F1ECFA; }
.pets-dupla { display: inline-flex; }
/* N\xF3s dois: porta larga logo abaixo da faixa Hoje */
.porta.porta-nos { flex-direction: row; align-items: center; min-height: 96px; margin-top: 16px; --porta: #E29578; --porta-fundo: #FFE8DD; }
.porta-nos .porta-arte { width: 84px; height: 66px; }
.porta-nos .porta-seta { position: static; margin-left: auto; }
.arte-nos { position: relative; display: inline-block; }
.arte-nos-um, .arte-nos-outro { position: absolute; bottom: 0; }
.arte-nos-um { left: 0; } .arte-nos-outro { right: 0; }
.arte-nos .boneco { border-radius: 50%; }
.arte-nos-coracao { position: absolute; left: 50%; top: -2px; transform: translateX(-50%); color: #E2483D; line-height: 0; }
.nav button[data-aba="retratos"] { --aba: #F2B5A0; --aba-sombra: #C0745B; --aba-fundo: rgba(242,181,160,.16); }
.nav button[data-aba="combinados"] { --aba: #FFD27A; --aba-sombra: #C99A33; --aba-fundo: rgba(255,210,122,.16); }
.nav button[data-aba="carinho"] { --aba: #F49BBA; --aba-sombra: #B85C7E; --aba-fundo: rgba(244,155,186,.16); }
[data-area="nos"] { --area: #C0745B; --area-fundo: #FFE8DD; }
/* Porta-retratos (v17.4): moldura de madeira com cantos em meia-esquadria, passe-partout com chanfro,
   vidro com reflexo, preguinho na parede e sombra. A foto troca com um esmaecer. */
.porta-retrato { margin: 0; --m: 20px; --madeira-1: #D5A877; --madeira-2: #B0794A; --madeira-3: #8A5A33; --veio: rgba(80,45,20,.16); }
.moldura-parede { position: relative; padding-top: 16px; }
.moldura-prego { position: absolute; top: 0; left: 50%; width: 120px; height: 30px; transform: translateX(-50%); pointer-events: none; z-index: 0; }
.moldura-prego::before, .moldura-prego::after { content: ""; position: absolute; top: 5px; width: 64px; height: 1.5px; background: rgba(60,50,40,.45); }
.moldura-prego::before { left: 2px; transform-origin: right; transform: rotate(-17deg); }
.moldura-prego::after { right: 2px; transform-origin: left; transform: rotate(17deg); }
.moldura-prego i { position: absolute; top: 0; left: 50%; width: 9px; height: 9px; margin-left: -4.5px; border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #F4E3C0, #A88A55 60%, #6E5530); box-shadow: var(--sombra-1); z-index: 1; }
.moldura { position: relative; z-index: 1; padding: var(--m); border-radius: var(--r-xxs);
  box-shadow: 0 18px 30px -12px rgba(11,40,45,.45), 0 4px 10px rgba(11,40,45,.18); background: var(--madeira-2); }
.regua { position: absolute; display: block; }
.regua-t, .regua-b { left: 0; right: 0; height: var(--m);
  background: ${Wi}, repeating-linear-gradient(180deg, transparent 0 3px, var(--veio) 3px 4px, transparent 4px 7px, rgba(255,240,215,.12) 7px 8px, transparent 8px 12px),
    linear-gradient(180deg, var(--madeira-1), var(--madeira-2) 60%, var(--madeira-3)); }
.regua-t { top: 0; clip-path: polygon(0 0, 100% 0, calc(100% - var(--m)) 100%, var(--m) 100%); }
.regua-b { bottom: 0; clip-path: polygon(var(--m) 0, calc(100% - var(--m)) 0, 100% 100%, 0 100%); filter: brightness(.86); }
.regua-l, .regua-r { top: 0; bottom: 0; width: var(--m);
  background: ${Wi}, repeating-linear-gradient(90deg, transparent 0 3px, var(--veio) 3px 4px, transparent 4px 7px, rgba(255,240,215,.12) 7px 8px, transparent 8px 12px),
    linear-gradient(90deg, var(--madeira-1), var(--madeira-2) 60%, var(--madeira-3)); }
.regua-l { left: 0; clip-path: polygon(0 0, 100% var(--m), 100% calc(100% - var(--m)), 0 100%); filter: brightness(1.04); }
.regua-r { right: 0; clip-path: polygon(0 var(--m), 100% 0, 100% 100%, 0 calc(100% - var(--m))); filter: brightness(.9); }
.passe-partout { position: relative; background: #FBF8F1; padding: 18px; border-radius: var(--r-xxs); outline: 2px solid rgba(70,40,18,.55);
  display: flex; align-items: center; justify-content: center; min-height: 200px;
  background-image: radial-gradient(rgba(120,100,70,.05) 1px, transparent 1px); background-size: 4px 4px;
  box-shadow: inset 0 3px 8px rgba(0,0,0,.28), inset 0 0 0 1px rgba(0,0,0,.08); }
.janela { position: relative; width: fit-content; max-width: 100%; min-width: 120px; min-height: 120px; display: flex; align-items: center; justify-content: center; overflow: hidden;
  box-shadow: 0 0 0 3px #EFE7D6, 0 0 0 4px rgba(150,130,100,.35), inset 0 1px 4px rgba(0,0,0,.25); background: #F3EEE3; }
.janela img { display: block; max-width: 100%; width: auto; height: auto; max-height: 58vh; }
.foto-toque { max-width: 100%; }
.foto-espera { padding: 24px 12px; text-align: center; }
.foto-toque { display: block; width: 100%; padding: 0; border: 0; background: none; cursor: pointer; }
.foto-anterior { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
.foto-entra { animation: foto-entra .9s ease both; }
@keyframes foto-entra { from { opacity: 0; transform: scale(1.015); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .foto-entra { animation: none; } }
.vidro { position: absolute; inset: var(--m); pointer-events: none;
  background: linear-gradient(118deg, rgba(255,255,255,.26) 0%, rgba(255,255,255,.07) 22%, transparent 34%, transparent 70%, rgba(255,255,255,.08) 86%, transparent 100%); }
.foto-pausa { position: absolute; right: 8px; bottom: 8px; display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; border-radius: var(--r-pill);
  background: rgba(11,59,65,.72); color: #fff; font-size: var(--t1); font-weight: 700; }
.retrato-pontos { display: flex; justify-content: center; align-items: center; gap: 6px; margin-top: 8px; }
.retrato-pontos i { width: 6px; height: 6px; border-radius: 50%; background: var(--divisor); transition: transform .3s; }
.retrato-pontos i[data-on] { background: var(--acao); transform: scale(1.35); }
.retrato-pontos b { font-size: var(--t1); color: var(--texto-2); }
.porta-retrato figcaption { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-top: 12px; text-align: center; }
.retrato-legenda { font-weight: 700; font-size: var(--t3); overflow-wrap: anywhere; }
.retrato-controles { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
.vazio-retrato .passe-partout { min-height: 180px; }
.obrigado-novo { margin-top: 12px; }
.obrigados { list-style: none; margin: 14px 0 0; padding: 0; display: grid; gap: 10px; }
.obrigado { position: relative; padding: 12px 44px 10px 14px; border-radius: var(--r-lg); background: #FFF4EE; border: 1px solid #F2D2C2; display: flex; flex-direction: column; gap: 2px; }
.obrigado[data-de="1"] { background: #EEF3FF; border-color: #CCD8F5; }
.obrigado-texto { font-weight: 700; overflow-wrap: anywhere; }
.obrigado-apagar { position: absolute; top: 4px; right: 4px; }
.combinados { margin: 0; padding: 0 0 0 4px; list-style: none; counter-reset: cb; display: grid; gap: 8px; }
.combinados li { counter-increment: cb; }
.combinado { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; text-align: left; padding: 12px 14px 12px 46px; border-radius: var(--r-lg); background: var(--superficie); border: 1px solid var(--divisor); position: relative; min-height: 48px; }
.combinado::before { content: counter(cb); position: absolute; left: 12px; top: 11px; width: 24px; height: 24px; border-radius: 50%; background: #FFE8DD; color: #9A4F33; font-weight: 800; font-size: 14px; display: flex; align-items: center; justify-content: center; }
.combinado-texto { font-weight: 700; font-size: var(--t3); line-height: 1.35; overflow-wrap: anywhere; }
.cartao-nos { margin-top: 20px; padding: 14px 16px; border-radius: var(--r-lg); background: #FFF8F1; border: 1.5px solid #F2D2C2; }
.cartao-nos .secao-titulo { display: flex; align-items: center; gap: 8px; }
.roteiro { margin: 8px 0 0; padding-left: 20px; display: grid; gap: 8px; }
.roteiro li b { display: block; }
.aviso-nos { display: flex; align-items: center; gap: 10px; margin-top: 14px; padding: 12px 14px; border-radius: var(--r-lg); background: #FFE8DD; color: #7A3A22; font-weight: 700; }
.queridos { list-style: none; margin: 4px 0 0; padding: 0; }
.queridos li { display: flex; align-items: center; gap: 10px; min-height: 44px; border-top: 1px solid var(--trilho); }
.queridos li:first-child { border-top: 0; }
.queridos li span { flex: 1; min-width: 0; font-weight: 600; overflow-wrap: anywhere; }
.queridos li svg { color: #E2483D; flex-shrink: 0; }
.ini-nos .boneco { border-radius: 50%; }
.pets-dupla .avatar-pet + .avatar-pet { margin-left: -10px; }
.cab-arte { display: inline-flex; flex-shrink: 0; padding: 3px; border-radius: var(--r-lg); background: rgba(255,255,255,.92); }
.pets-cab .avatar-pet + .avatar-pet { margin-left: -10px; }

/* ---------- Parte m\xE9dica ---------- */
.botao-ficha { display: flex; align-items: center; gap: 12px; width: 100%; margin-top: 16px; padding: 12px 14px; border-radius: var(--r-lg); text-align: left;
  background: #FDE8E6; border: 1.5px solid #E8A39B; color: #7A1F1F; }
.botao-ficha-ico { width: 42px; height: 42px; flex-shrink: 0; border-radius: var(--r-md); display: inline-flex; align-items: center; justify-content: center; background: #D8423A; color: #FFFFFF; }
.botao-ficha-texto { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.botao-ficha-texto b { font-size: var(--t3); }
.botao-ficha-texto span { font-size: var(--t1); font-weight: 600; opacity: .9; }
.aviso-dose { display: flex; gap: 8px; align-items: flex-start; padding: 10px 12px; border-radius: var(--r-md); font-size: var(--t2); font-weight: 600; line-height: 1.4; margin-top: 8px; }
.aviso-dose svg { flex-shrink: 0; margin-top: 1px; }
.aviso-dose[data-tipo="info"] { background: #E6F0FA; color: #1F4E79; }
.aviso-dose[data-tipo="alerta"] { background: #FFF0D2; color: #6E4300; }
.aviso-dose[data-tipo="perigo"] { background: #FDE0DE; color: #8E1F1F; }
.gira { animation: gira 1s linear infinite; }
@keyframes gira { to { transform: rotate(360deg); } }
.quem-deu { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.quem-deu .pessoa-outra { grid-column: 1 / -1; justify-content: center; min-height: 52px; }
.historico { list-style: none; margin: 0; padding: 0; }
.historico ul { list-style: none; margin: 0; padding: 0; }
.historico-dia { display: block; font-weight: 800; margin: 14px 0 4px; }
.historico > li:first-child .historico-dia { margin-top: 0; }
.historico-linha { display: flex; gap: 10px; align-items: baseline; padding: 4px 0; font-size: var(--t2); border-top: 1px dashed var(--trilho-2); }
.historico-linha .dose-hora { font-size: var(--t3); min-width: 52px; }
.dose-ontem { display: block; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; line-height: 1.1; }
.historico-linha[data-situacao="nao-marcada"] { color: var(--perigo-texto); font-weight: 700; }
.historico-linha[data-situacao="por-vir"] { color: var(--texto-3); }
.ficha { border: 2px solid #E8A39B; border-radius: var(--r-lg); overflow: hidden; }
.ficha-topo { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: #D8423A; color: #FFFFFF; font-weight: 800; font-size: var(--t4); }
.ficha-linha { display: grid; grid-template-columns: 38% 1fr; gap: 8px; padding: 10px 14px; border-top: 1px solid var(--trilho); }
.ficha-rotulo { font-size: var(--t1); font-weight: 700; color: var(--texto-2); text-transform: uppercase; letter-spacing: .03em; }
.ficha-valor { font-weight: 600; overflow-wrap: anywhere; white-space: pre-wrap; }
.ficha-tel { display: inline-flex; align-items: center; gap: 4px; min-height: 44px; color: var(--acao); font-weight: 800; text-decoration: none; }
.nota-cae[data-atrasada] .nota-ico { background: #FDE0DE; color: #B3261E; }

/* ---------- Crescer ---------- */
.crescer-palco { display: flex; justify-content: space-around; align-items: flex-end; gap: 8px; margin-top: 16px; padding: 14px 8px 10px; border-radius: var(--r-xl);
  background: linear-gradient(180deg, #E6F4F2 0%, #FFF4DE 100%); border: 1px solid var(--divisor); }
.crescer-figura { display: flex; flex-direction: column; align-items: center; min-width: 0; }
.crescer-legenda { text-align: center; font-size: var(--t2); margin-top: 4px; line-height: 1.3; }
.crescer-idade { text-align: center; font-weight: 700; margin-top: 10px; }
.grafico-quadro { margin: 12px 0 0; padding: 8px; border-radius: var(--r-lg); background: var(--superficie); border: 1px solid var(--divisor); }
.grafico-quadro figcaption { margin-top: 6px; }
.crescer-faixa { margin-top: 10px; }
.girafa-marca { animation: marca-sobe .8s cubic-bezier(.3,1.4,.5,1) both .2s; }
@keyframes marca-sobe { from { transform: translateY(30px); opacity: 0; } to { transform: none; opacity: 1; } }
.balanca-ponteiro { transition: transform .8s cubic-bezier(.3,1.4,.5,1); }

/* ---------- Mercado ---------- */
.mercado-quem { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
.mercado-novo { margin-top: 12px; padding: 14px; border-radius: var(--r-lg); }
.mercado-novo > * + * { margin-top: 10px; }
.mercado-campos { display: flex; gap: 8px; }
/* Papel pautado: cada item \xE9 uma linha da pauta (a linha fica embaixo do item, nunca cortando o texto). */
.papel-lista { --pauta: rgba(47,111,181,.22); background: #FFFFFF; border: 1px solid var(--divisor); box-shadow: var(--sombra); }
.mercado-vista { margin-top: 18px; }
/* Lousa: valeu e metas do m\xEAs */
.recado-meio { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: flex-start; }
.recado-meio .recado-texto { width: 100%; }
.valeu { display: inline-flex; align-items: center; gap: 6px; min-height: 36px; padding: 4px 12px; margin-top: 4px; border-radius: var(--r-pill); font-size: var(--t1); font-weight: 700; }
.valeu-dar { border: 1.5px solid #E29578; color: #9A4F33; background: #FFF4EE; }
.valeu-dado { color: #9A4F33; background: #FFE8DD; }
.valeu svg { color: #E2483D; }
.lousa-metas { margin-top: 18px; padding: 14px 16px; border-radius: var(--r-lg); background: #FFF8F1; border: 1.5px solid #F2D2C2; }
.lousa-metas .secao-titulo { display: flex; align-items: center; gap: 8px; }
.meta-grande { font-size: var(--t4); font-weight: 800; line-height: 1.3; color: #0B3B41; overflow-wrap: anywhere; }
.metas-pequenas { list-style: none; margin: 8px 0 0; padding: 0; }
.metas-pequenas li { display: flex; align-items: center; gap: 10px; min-height: 44px; }
.metas-pequenas .meta-pequena { font-weight: 600; overflow-wrap: anywhere; }
.metas-pequenas li[data-feito="1"] .meta-pequena { text-decoration: line-through; opacity: .6; }
.mes-fechado { margin-top: 12px; padding-top: 10px; border-top: 1px dashed #E8BFAE; }
.mes-fechado .rotulo { display: inline-flex; align-items: center; gap: 6px; }
.metas-lembrete { padding: 10px 12px; border-radius: var(--r-md); background: var(--fundo-2, #F3F7F8); }
.meta-caixinha { display: flex; align-items: flex-start; gap: 8px; margin-top: 14px; }
.meta-caixinha svg { flex-shrink: 0; margin-top: 2px; color: var(--acao); }
.mercado-vista button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
.mercado-secao { margin-top: 20px; }
.mercado-secao-titulo { margin-bottom: 6px; }
.mercado-itens { list-style: none; margin: 0; padding: 2px 12px; border-radius: var(--r-lg); }
.mercado-item { display: flex; align-items: center; gap: 10px; padding: 8px 0 7px; --q: #23744A; border-bottom: 1.5px solid var(--pauta); }
.mercado-item:last-child { border-bottom: 0; }
.fab-anotar { position: fixed; right: max(16px, calc(50% - 214px)); bottom: calc(var(--nav) + 14px); z-index: 24; border-radius: var(--r-pill); min-height: 52px; padding: 0 20px; box-shadow: var(--sombra-3); }
.tela-lousa { padding-bottom: 96px; }
.cae-mochila-cel { margin: 0 16px 14px; }
.cae-regua-cel, .cae-emerg-cel { margin: 0 16px 14px; }
.lousa-grade[data-modo="semana"] .lousa-dia { min-height: 112px; }
.lousa-dia-txt { display: flex; flex-direction: column; gap: 3px; margin-top: 5px; }
.lousa-dia-txt i { display: block; font-style: normal; font-size: var(--t00); font-weight: 700; line-height: 1.15; color: var(--texto); padding-left: 4px; border-left: 2.5px solid var(--q, #0B3B41); overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow-wrap: anywhere; }
.lousa-dia-txt b { font-size: var(--t00); font-weight: 800; color: var(--texto-2); }
.lousa-modo { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 8px; }
.lousa-modo-btn { min-height: 36px; gap: 6px; font-size: var(--t1); }
.lousa-modo-seta { width: 36px; height: 36px; }
.hoje-item[data-calmo] { color: var(--texto-2); font-weight: 600; }
.aj-grupos { padding: 12px 16px 0; } .aj .aj-grupos { padding: 0; }
.aj-grupos .seg button { font-size: var(--t1); padding: 0 4px; } .aj .aj-grupos .seg button { font-size: inherit; padding: 0 14px; }
.cae-regua-cel .qc-cartao, .cae-emerg-cel .qc-cartao { border-radius: var(--r-lg); }
.lousa-painel { scroll-margin-top: 72px; }
.mercado-linha { flex: 1; min-width: 0; display: flex; align-items: center; gap: 10px; text-align: left; min-height: 48px; padding: 0; }
.mercado-linha .recado-check { flex-shrink: 0; }
.mercado-item .recado-texto { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
.mercado-editar { flex-shrink: 0; color: var(--texto-2); }
.tela-mercado[data-barra="1"] { padding-bottom: 88px; }
.cc:has(.tela-mercado[data-barra="1"]) .toast { bottom: calc(var(--nav) + 84px); }
.mercado-nome { display: block; font-weight: 700; font-size: var(--t3); overflow-wrap: anywhere; }
.mercado-qtd { font-weight: 600; color: var(--texto-2); }
.mercado-item[data-comprado="1"] .mercado-nome { text-decoration: line-through; text-decoration-thickness: 2px; opacity: .55; }
.dupla-larga { grid-template-columns: 1fr 120px; }

/* ---------- Mia e Marie ---------- */
[data-area="pets"] { --area: #7B4FB5; --area-fundo: #EFE7FA; }
.seg-pets { margin-top: 16px; }
.seg-pets button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
.seg-pets .avatar-pet { width: 26px !important; height: 26px !important; flex-shrink: 0; }
.avatares { display: inline-flex; flex-shrink: 0; align-self: center; }
.avatares .avatar-pet + .avatar-pet { margin-left: -8px; }
.pesos-pets { display: grid; gap: 10px; }
.peso-pet { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: var(--r-lg); border: 1px solid var(--divisor); background: var(--superficie); }
.peso-pet > div { flex: 1; }
.mini-linha { color: #7B4FB5; flex-shrink: 0; }
}

@layer escuro {
${B} .lousa-quadro { background: linear-gradient(150deg, #8D99A1 0%, #56636B 35%, #7C8890 55%, #3E4A51 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,.25), 0 12px 24px rgba(0,0,0,.45); }
${B} .lousa-superficie { background: linear-gradient(118deg, rgba(255,255,255,0) 26%, rgba(255,255,255,.55) 33%, rgba(255,255,255,0) 44%), ${Zi}, linear-gradient(180deg, #E9EEF0, #DCE3E6); }
${B} .lousa-dia { background: rgba(30,60,80,.05); color: #22343F; }
${B} .lousa-dia[aria-pressed="true"] { background: #CFE6E3; }
${B} .lousa-semana span, ${B} .lousa-marcas b { color: #4E5E68; }
${B} .lousa-bandeja { background: linear-gradient(180deg, #6F7C84, #4A565D 60%, #333D43); }
${B} .lousa-quadro [data-q="0"] { --q: #2F6FB5; } ${B} .lousa-quadro [data-q="1"] { --q: #C2416B; } ${B} .lousa-quadro [data-q="2"] { --q: #23744A; }
${B} .lousa-quadro [data-q="c"] { --q: #B5561A; } ${B} .lousa-quadro [data-q="l"] { --q: #1F6F8C; } ${B} .lousa-quadro [data-q="p"] { --q: #7B4FB5; }
${B} [data-q="l"] { --q: #7CC7DE; } ${B} [data-q="p"] { --q: #C7A8F0; }
${B} .porta-lazer { --porta-fundo: #22305A; } ${B} .porta-mercado { --porta-fundo: #183A2A; } ${B} .porta-pets { --porta-fundo: #2E2445; }
${B} .hoje-titulo { color: #F2B79C; }
${B} .botao-ficha { background: #3A1F1F; border-color: #8E4A4A; color: #F7C9C9; }
${B} .aviso-dose[data-tipo="info"] { background: #16304A; color: #BFDCF7; }
${B} .aviso-dose[data-tipo="alerta"] { background: #3A2C10; color: #FFD99A; }
${B} .aviso-dose[data-tipo="perigo"] { background: #45201F; color: #FFC2BD; }
${B} .crescer-palco { background: linear-gradient(180deg, #DCEFEC 0%, #F6EBD3 100%); color: #0B3B41; }
${B} .papel-lista { --pauta: rgba(255,255,255,.12); background: #12292E; }
${B} .mercado-item { --q: #7FD1A3; }
${B} .porta.porta-nos { --porta-fundo: #45291F; }
${B} .cartao-nos { background: #2A1F1A; border-color: #6E4A3A; }
${B} .obrigado { background: #2A1F1A; border-color: #6E4A3A; } ${B} .obrigado[data-de="1"] { background: #16304A; border-color: #2E527A; }
${B} .combinado::before { background: #45291F; color: #FFC2A8; }
${B} .aviso-nos { background: #45291F; color: #FFD5C2; }
${B} .passe-partout { background-color: #F6F1E7; } ${B} .porta-retrato { --madeira-1: #9C7350; --madeira-2: #7A5534; --madeira-3: #563820; } ${B} .moldura-prego::before, ${B} .moldura-prego::after { background: rgba(230,220,200,.35); }
${B} .lousa-metas { background: #2A1F1A; border-color: #6E4A3A; }
${B} .meta-grande { color: #FFE2D4; }
${B} .valeu-dar { background: transparent; color: #FFC2A8; border-color: #C9806A; }
${B} .valeu-dado { background: #45291F; color: #FFC2A8; }
${B} .metas-lembrete { background: #12292E; }
${B} [data-area="pets"] { --area: #C7A8F0; --area-fundo: #2E2445; }
${B} .mini-linha { color: #C7A8F0; }
${B} .cab-arte { background: rgba(255,255,255,.14); }
}

@layer pintado {









   








  




























 
  
  





 



  
}

/* v17.3: auditoria em aparelhos */
/* Sugest\xF5es longas quebram linha em vez de estourar a tela (Carinho em 320 a 360 px). */
.chips-quebra .chip { white-space: normal; max-width: 100%; text-align: left; height: auto; }
/* Teclado aberto em tela baixa: o rodap\xE9 sai da frente do campo. */
html[data-teclado] #app-nav { display: none; }
html[data-teclado] .barra-acao { bottom: 0; }
/* Palavras inteiras em telas estreitas: h\xEDfen onde o idioma permite, categoria menor, rem\xE9dio em linha pr\xF3pria. */
.cat, .linha-nome, .mercado-nome, .recado-linha { hyphens: auto; -webkit-hyphens: auto; }
@media (max-width: 350px) {
  .cat { font-size: var(--t1); }
  .doses .dose { flex-wrap: wrap; row-gap: 6px; }
  .doses .dose .dose-meio { flex: 1 1 calc(100% - 70px); }
  .doses .dose .dose-botao { margin-left: 70px; }
}
/* Riscado leg\xEDvel: o tra\xE7o mostra que foi feito, a cor continua com contraste. */
.mercado-item[data-comprado="1"] .mercado-nome, .dose[data-dada="1"] .linha-nome, .metas-pequenas li[data-feito="1"] .meta-pequena { opacity: 1; color: var(--texto-2); }

/* v17.4: no pintado, a letra de m\xE3o sai do texto e fica s\xF3 nas setas com frase (e no bal\xE3o dos bichinhos).
   Tudo o mais volta \xE0 letra de leitura do estilo padr\xE3o, com o tamanho do padr\xE3o; a pintura (fitas,
   marca-texto, papel) continua. */
@layer pintado {





}

/* v17.4: centavos menores nos valores */
@layer base {
.centavos { font-size: .6em; font-weight: inherit; letter-spacing: 0; }
.linha-valor .centavos, .heroi-valor .centavos { font-size: .78em; }
}

/* v17.4: Lan\xE7ar com a observa\xE7\xE3o logo abaixo do valor */
@layer base {
.rotulo-opcional { font-weight: 600; color: var(--texto-2); text-transform: none; letter-spacing: 0; }
.campo-obs { font-size: var(--t3); }
.chip-sugestao { margin-top: 10px; gap: 8px; border-style: dashed; white-space: normal; text-align: left; }
}

/* v17.4: Contas do m\xEAs (agenda de contas, no topo do M\xEAs) */
@layer base {
.contas-mes { padding: 0; overflow: hidden; margin-top: 12px; }
.contas-topo { display: flex; align-items: center; gap: 12px; width: 100%; min-height: 64px; padding: 14px 16px 10px; text-align: left; background: none; border: 0; color: inherit; font: inherit; cursor: pointer; }
.contas-topo-txt { flex: 1; min-width: 0; }
.contas-titulo { display: block; font-family: var(--fonte-titulo); font-weight: 800; font-size: var(--t3); }
.contas-resumo { display: block; font-size: var(--t2); color: var(--texto-2); margin-top: 2px; overflow-wrap: anywhere; }
.contas-barra { height: 6px; margin: 0 16px 14px; border-radius: var(--r-pill); background: var(--trilho, var(--divisor)); overflow: hidden; }
.contas-barra span { display: block; height: 100%; border-radius: inherit; background: var(--acao); transition: width .4s ease; }
.contas-mes[data-tudo] .contas-barra span { background: #2E8B57; }
.contas-corpo { padding: 0 12px 12px; border-top: 1px dashed var(--divisor); }
.contas-lista { list-style: none; margin: 6px 0 0; padding: 0; }
.conta + .conta { border-top: 1px solid var(--divisor); }
.conta { display: flex; align-items: center; gap: 10px; }
.conta-check { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 60px; padding: 8px 4px; background: none; border: 0; color: inherit; font: inherit; text-align: left; cursor: pointer; }
.conta-caixa { flex: 0 0 26px; width: 26px; height: 26px; border-radius: 50%; border: 2.5px solid var(--borda); display: grid; place-items: center; color: #fff; background: var(--superficie); }
.conta[data-paga] .conta-caixa { background: #2E8B57; border-color: #2E8B57; }
.conta-meio { flex: 1; min-width: 0; }
.conta-nome { display: block; font-weight: 700; font-size: var(--t3); overflow-wrap: anywhere; hyphens: auto; }
.conta[data-paga] .conta-nome { text-decoration: line-through; text-decoration-thickness: 2px; color: var(--texto-2); }
.conta-sub { display: block; font-size: var(--t1); color: var(--texto-2); margin-top: 2px; }
.conta[data-tom="alerta"] .conta-sub { color: var(--perigo-texto); font-weight: 700; }
.conta[data-tom="agora"] .conta-sub { color: var(--acao); font-weight: 700; }
.conta-valor { font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.conta-valor .centavos { font-size: .78em; }
.contas-fora .conta { padding: 8px 4px; }
.contas-tudo { padding: 12px 4px 4px; font-weight: 600; }
.valor-folha { margin-top: 2px; }
.detalhe-paga { list-style: none; padding: 0; margin: 0; }
.detalhe-paga li { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--divisor); }
.detalhe-paga span { color: var(--texto-2); }
}
@layer pintado {




}

@layer base { [data-q="k"] { --q: #8A6D1F; } }
@layer escuro { html[data-tema="escuro"] [data-q="k"] { --q: #E8C766; } html[data-tema="escuro"] .lousa-quadro [data-q="k"] { --q: #8A6D1F; } }
@layer pintado {   }

/* Porta-retratos pintado: madeira em aquarela, mais quente, cantos levemente irregulares. */
@layer pintado {








}

/* v17.4: foto sorteada na porta "N\xF3s dois" (porta-retratos de mesa) */
@layer base {
.mini-retrato { display: block; width: 74px; height: 58px; padding: 4px; border-radius: var(--r-xxs); transform: rotate(-3deg);
  background: linear-gradient(135deg, #D5A877, #B0794A 60%, #8A5A33); box-shadow: 0 4px 10px rgba(11,40,45,.3); animation: mini-entra .6s ease both; }
.mini-retrato img { display: block; width: 100%; height: 100%; object-fit: cover; border: 3px solid #FBF8F1; border-radius: var(--r-xxs); }
@keyframes mini-entra { from { opacity: 0; transform: rotate(-3deg) scale(.9); } to { opacity: 1; transform: rotate(-3deg); } }
@media (prefers-reduced-motion: reduce) { .mini-retrato { animation: none; } }
}

/* v17.4: enfeites de datas no alto do In\xEDcio */
@layer base {
.inicio-cab { position: relative; }
.inicio-cab[data-enfeite] { padding-top: 40px; }
.enfeite { position: absolute; top: 0; left: 0; width: 100%; height: 38px; pointer-events: none; overflow: visible; }
.enfeite-balanca { transform-box: fill-box; transform-origin: 50% 0; animation: enfeite-balanca 3.2s ease-in-out infinite alternate; }
@keyframes enfeite-balanca { from { transform: rotate(-6deg); } to { transform: rotate(6deg); } }
.enfeite-pisca { animation: enfeite-pisca 2s ease-in-out infinite; }
@keyframes enfeite-pisca { 0%, 100% { opacity: 1; } 50% { opacity: .45; } }
@media (prefers-reduced-motion: reduce) { .enfeite-balanca, .enfeite-pisca { animation: none; } }
}

/* v17.4: Caderninho do Ca\xEA, um caderno de capa dura com p\xE1ginas pautadas */
@layer base {
.tela-caderninho { padding-bottom: 72px; }
.cad-capa { flex-shrink: 0; display: grid; place-items: center; width: 50px; height: 58px; border-radius: var(--r-xs) var(--r-sm) var(--r-sm) var(--r-xs);
  background: linear-gradient(90deg, #7A4B2A 0 7px, #E29578 7px); box-shadow: inset -3px 0 0 rgba(0,0,0,.08), 0 3px 8px rgba(0,0,0,.2); }
.cad-capa span { font-family: var(--fonte-titulo); font-weight: 800; font-size: 13px; color: #4A2312; background: rgba(255,255,255,.55); padding: 2px 5px; border-radius: var(--r-xxs); margin-left: 6px; }
.cad-vazio { margin-top: 18px; padding: 22px 18px; border-radius: var(--r-lg); background: #FFFDF6; border: 1px solid #EADFC8; text-align: center; }
.cad-vazio .cad-frase { display: block; margin-bottom: 10px; }
.cad-mes { margin-top: 18px; }
.cad-mes-titulo { font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; margin: 0 0 8px; }
.cad-mes-titulo span { font-weight: 600; color: var(--texto-2); font-size: var(--t2); }
.cad-paginas { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.cad-pagina-btn { position: relative; background-color: #FFFDF6; display: flex; flex-direction: column; align-items: flex-start; gap: 6px; width: 100%; padding: 14px 14px 10px 30px; text-align: left; font: inherit; color: #253238; cursor: pointer;
  border: 1px solid #E6DCC6; border-radius: var(--r-xs) var(--r-md) var(--r-md) var(--r-xs); box-shadow: 0 2px 6px rgba(60,45,20,.08);
  background: linear-gradient(90deg, transparent 20px, rgba(226,149,120,.55) 20px 21.5px, transparent 21.5px),
    repeating-linear-gradient(180deg, #FFFDF6 0 27px, rgba(131,197,190,.22) 27px 28px); line-height: 28px; }
.cad-selo { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: var(--r-pill); font-size: var(--t1); font-weight: 700; background: #E8F4F2; color: #0B5560; }
.cad-pagina[data-tipo="primeira"] .cad-selo { background: #FFF1CC; color: #7A5600; }
.cad-pagina[data-tipo="momento"] .cad-selo { background: #FFE4DC; color: #8E3B22; }
.cad-frase { font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 700; line-height: 1.3; color: #0B3B41; overflow-wrap: anywhere; }
.cad-texto { font-size: var(--t3); font-weight: 700; line-height: 1.35; overflow-wrap: anywhere; }
.cad-contexto { font-size: var(--t2); color: #4D5B60; font-style: italic; overflow-wrap: anywhere; }
.cad-rodape { display: flex; align-items: center; gap: 6px; width: 100%; font-size: var(--t1); color: #5B686C; }
.cad-rodape svg { margin-left: auto; flex-shrink: 0; opacity: .6; }
.cad-foto { display: block; width: 100%; max-height: 240px; object-fit: cover; border-radius: var(--r-xxs); border: 5px solid #fff; box-shadow: var(--sombra); transform: rotate(-.8deg); }
.cad-foto-grande { max-height: 50vh; object-fit: contain; transform: none; }
.cad-foto-espera { height: 120px; background: #EFE8DA; }
.cad-foto-erro { padding: 16px; font-size: var(--t1); color: #5B686C; background: #EFE8DA; transform: none; }
.cad-campo { min-height: 84px; resize: vertical; font-size: var(--t3); }
}
@layer escuro {
${B} .cad-pagina-btn { color: #253238; }
${B} .cad-vazio { background: #2A2620; border-color: #4A4234; } ${B} .cad-vazio .cad-frase { color: #FFE2D4; }
${B} .cad-mes-titulo span { color: #A9BBC0; }
}
@layer pintado {


}

@layer base { .nav button[data-aba="caderninho"] { --aba: #F4C25C; --aba-sombra: #B8862A; --aba-fundo: rgba(244,194,92,.16); }
.nav button[data-aba="caehoje"] { --aba: #FFB37A; --aba-sombra: #B8692F; --aba-fundo: rgba(255,179,122,.16); } }
@layer pintado { 
 }

/* v17.5: chip de data (celular: toque no campo nativo; computador: o clique abre o calend\xE1rio) */
@layer base {
.chip-data { cursor: pointer; }
.chip-data input { position: absolute; inset: -2px; width: calc(100% + 4px); height: calc(100% + 4px); opacity: 0; cursor: pointer; }
@media (pointer: fine) { .chip-data input { pointer-events: none; } }
.cc .chip-data:focus-within { outline: 3px solid var(--acao); outline-offset: 2px; }
}

/* v17.5: foco do teclado sempre vis\xEDvel (anel duplo: escuro por fora, claro por dentro), nunca
   escondido atr\xE1s do rodap\xE9 ou das barras fixas, e retorno ao passar o mouse. */
@layer base {
html { scroll-padding-top: 16px; scroll-padding-bottom: calc(var(--nav, 72px) + 120px); }
.cc { --foco-1: #0B3B41; --foco-2: #FFFFFF; }
.cc button:focus-visible, .cc input:focus-visible, .cc a:focus-visible, .cc [tabindex]:focus-visible, .cc textarea:focus-visible, .cc select:focus-visible {
  outline: 3px solid var(--foco-1); outline-offset: 2px; box-shadow: 0 0 0 2px var(--foco-2); }
.cc .chip-data:focus-within { outline-color: var(--foco-1); box-shadow: 0 0 0 2px var(--foco-2); }
.cc .campo-busca:focus-within { border-color: var(--acao); box-shadow: 0 0 0 3px rgba(0,109,119,.25); }
.cc .contas-topo:focus-visible, .cc .foto-toque:focus-visible, .cc .cad-pagina-btn:focus-visible { outline-offset: -4px; box-shadow: inset 0 0 0 6px var(--foco-2); }
@media (hover: hover) and (pointer: fine) {
  .cc .btn:not([aria-disabled="true"]):hover, .cc .chip:hover, .cc .cat:hover, .cc .pessoa:hover, .cc .porta:hover, .cc .hoje-item:hover,
  .cc .conta-check:hover, .cc .cad-pagina-btn:hover, .cc .mercado-linha:hover, .cc .linha:hover { filter: brightness(.97); }
  .cc .btn-icone:hover { background-color: rgba(0,109,119,.10); }
  .cc button, .cc label.chip, .cc [role="checkbox"] { cursor: pointer; }
}
}
@layer escuro { html[data-tema="escuro"] .cc { --foco-1: #FFFFFF; --foco-2: #0B1619; }
  @media (hover: hover) and (pointer: fine) { html[data-tema="escuro"] .cc .btn:not([aria-disabled="true"]):hover, html[data-tema="escuro"] .cc .chip:hover, html[data-tema="escuro"] .cc .porta:hover, html[data-tema="escuro"] .cc .linha:hover { filter: brightness(1.12); } } }
@layer pintado {   }

@layer base { .folha { overscroll-behavior: contain; } }

/* v17.5: gr\xE1fico de 6 meses n\xE3o estoura a largura em telas estreitas */
@layer base {
.evol { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.evol-ano { grid-template-columns: repeat(12, minmax(0, 1fr)); }
.evol .num { white-space: normal; text-align: center; line-height: 1.1; overflow-wrap: anywhere; }
}

/* v17.5: auditoria no celular */
@layer base {
/* Mercado: a caixinha do item riscado fica preenchida (o "marcado" agora est\xE1 na linha toda). */
.mercado-linha[aria-checked="true"] .recado-check .caixa, .mercado-linha[aria-checked="true"] .caixa { background: var(--q); }
/* Lousa: riscado leg\xEDvel, como no Mercado. */
.recado[data-feito="1"] .recado-linha { opacity: 1; color: var(--texto-2); }
/* A faixa em degrad\xEA acima do bot\xE3o fixo n\xE3o pega toques; s\xF3 o bot\xE3o. */
.barra-acao { pointer-events: none; } .barra-acao > * { pointer-events: auto; }
/* Nas folhas, o bot\xE3o de salvar fica sempre \xE0 vista no p\xE9 da folha. */
.folha .btn-fixo { position: sticky; bottom: 10px; z-index: 2; box-shadow: 0 6px 18px rgba(11,40,45,.22); }
/* Contas do m\xEAs: t\xEDtulo de verdade (para quem navega por t\xEDtulos) e nomes inteiros em telas estreitas. */
.contas-h { margin: 0; font: inherit; }
.conta-nome { overflow-wrap: break-word; }
@media (max-width: 360px) { .conta-ico { display: none; } .conta-valor { font-size: var(--t2); } }
}
@layer escuro { html[data-tema="escuro"] .mercado-linha[aria-checked="true"] .caixa { color: #0B1F23; } }
@layer pintado {


}

@layer base { .conta-parecida { flex-wrap: wrap; align-items: center; gap: 8px 10px; } .conta-parecida > span { flex: 1 1 180px; } }


@layer base { .hoje-item-fixo { margin: 0; } .hoje-item-fixo[data-destaque] span { font-weight: 700; } .hoje-mais { padding-left: 2px; } }

/* v17.6: contas fixas em destaque */
@layer base {
.atalho-contas { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 48px; margin-top: 12px; padding: 10px 14px; border-radius: var(--r-lg);
  border: 1.5px solid var(--acao); background: var(--acao-clara); color: var(--texto); font: inherit; font-weight: 700; text-align: left; cursor: pointer; }
.atalho-contas span { flex: 1; min-width: 0; }
.contas-titulo { display: flex; align-items: center; gap: 6px; }
.contas-vazio { padding: 10px 4px 0; }
.contas-sugestoes { margin: 8px 0 4px; }
.campo-dia { max-width: 110px; }
.chip-cat { gap: 6px; }
}
@layer pintado {   }
@layer escuro { html[data-tema="escuro"] .atalho-contas { background: #173F3F; } }

/* v17.7: a pauta do caderninho em rem, presa ao texto. Cada coisa da p\xE1gina ocupa um n\xFAmero inteiro de linhas
   (selo 1, cada linha de texto 1, foto 8) e a linha da pauta cai logo abaixo das letras, em qualquer tamanho
   de letra do celular. --pauta-y alinha o desenho da pauta com o come\xE7o do texto. */
@layer base {
.cad-pagina-btn { --pauta: 1.75rem; --pauta-topo: .625rem; --pauta-y: calc(var(--pauta-topo) + 1px - .175rem);
  --pauta-cor: rgba(131,197,190,.30); --papel: #FFFDF6;
  gap: 0; padding: var(--pauta-topo) 14px calc(var(--pauta) * .5) 30px; line-height: var(--pauta);
  background: linear-gradient(90deg, transparent 20px, rgba(226,149,120,.55) 20px 21.5px, transparent 21.5px),
    repeating-linear-gradient(180deg, var(--papel) 0 calc(var(--pauta) - 1px), var(--pauta-cor) calc(var(--pauta) - 1px) var(--pauta));
  background-color: var(--papel); background-position: 0 0, 0 var(--pauta-y); }
.cad-pagina-btn .cad-selo { box-sizing: border-box; height: calc(var(--pauta) - .25rem); margin: 0 0 .25rem; padding-top: 0; padding-bottom: 0; line-height: 1; }
.cad-pagina-btn .cad-frase, .cad-pagina-btn .cad-texto, .cad-pagina-btn .cad-contexto, .cad-pagina-btn .cad-rodape { line-height: var(--pauta); margin: 0; }
.cad-pagina-btn .cad-contexto { position: relative; top: .0625rem; }
.cad-pagina-btn .cad-rodape { position: relative; top: .1875rem; height: var(--pauta); }
.cad-pagina-btn .cad-foto { box-sizing: border-box; height: calc(var(--pauta) * 7); max-height: none; margin: calc(var(--pauta) * .5) 0; }
.cad-pagina-btn .cad-foto-erro { display: flex; align-items: center; line-height: 1.4; }
}
@layer pintado {

}
`;var Ve='.cc[data-largo="1"]',na='html[data-tema="escuro"]',en={contas:["#E29578","#FFF0EA","#9E4F2F"],lousa:["#83C5BE","#E6F4F2","#2C7A72"],cae:["#F6C177","#FFF4DE","#8A5A0C"],lazer:["#A8BCE8","#E9EFFB","#43599A"],mercado:["#7FC8A9","#E4F4EC","#2C7354"],pets:["#C3B5E0","#F1ECFA","#614F99"],nos:["#F28482","#FFE4EC","#A8374A"],ajustes:["#D9B98C","#F7EFE2","#7A5A34"]},Ms=Object.entries(en).map(([e,[a,o,t]])=>`--c-${e}:${a}; --c-${e}-fundo:${o}; --c-${e}-forte:${t};`).join(" "),Ls=Object.keys(en).map(e=>`--c-${e}-fundo: color-mix(in srgb, var(--c-${e}) 22%, #12292E); --c-${e}-forte: color-mix(in srgb, var(--c-${e}-forte) 78%, #0C1F23);`).join(" "),Os={contas:"contas",lousa:"lousa",cae:"cae",lazer:"lazer",mercado:"mercado",pets:"pets",nos:"nos"},Rs=Object.entries(Os).map(([e,a])=>`.cc[data-secao="${e}"]:not([data-largo="1"]) { --faixa: var(--c-${a}-forte); }`).join(`
`),Ps='.cc:not([data-largo="1"]):has(.aj-grupos) { --faixa: var(--c-ajustes-forte); }',_s=["contas","lousa","cae","lazer","mercado","pets","nos"].map(e=>`.porta-${e}, .porta.porta-${e} { --porta: var(--c-${e}); --porta-fundo: var(--c-${e}-fundo); }`).join(`
`),Us=["contas","lousa","cae","lazer","mercado","pets","nos","ajustes"].map(e=>`${Ve}[data-${e}-mesa] { --cor-comodo: var(--c-${e}); --cor-comodo-fundo: var(--c-${e}-fundo); }`).join(`
`),Vs="background-color: #C79A63; background-image: radial-gradient(#B98A55 1.2px, transparent 1.4px); background-size: 9px 9px;",yo=(e,a,o)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${a}'>${o}</svg>`)}")`,Ys=e=>({contas:yo(22,22,`<path d='M22 0V22M0 22H22' stroke='${e}' stroke-width='1' fill='none'/>`),lousa:yo(18,18,`<circle cx='9' cy='9' r='1.2' fill='${e}'/>`),cae:yo(56,56,`<path d='M14 10l1.6 3.4 3.6.4-2.7 2.4.8 3.6-3.3-1.9-3.3 1.9.8-3.6-2.7-2.4 3.6-.4z' fill='${e}'/><circle cx='42' cy='40' r='2' fill='${e}'/>`),lazer:yo(40,40,`<path d='M8 30q2-5 4 0M10 30v-3M28 12q2-5 4 0M30 12v-3' stroke='${e}' stroke-width='1.3' fill='none' stroke-linecap='round'/>`),mercado:yo(28,28,`<rect x='.5' y='.5' width='27' height='27' rx='3' stroke='${e}' stroke-width='1' fill='none'/><circle cx='14' cy='14' r='3' stroke='${e}' fill='none'/>`),pets:yo(60,60,`<g fill='${e}'><ellipse cx='16' cy='20' rx='4' ry='3.2'/><circle cx='11' cy='15' r='1.5'/><circle cx='14.5' cy='12.6' r='1.5'/><circle cx='18.5' cy='12.6' r='1.5'/><circle cx='21.5' cy='15' r='1.5'/></g>`),nos:yo(90,24,`<path d='M0 23.5H90M30 0V24M75 0V12' stroke='${e}' stroke-width='1' fill='none'/><path d='M8 8q10 3 18 0M44 16q12 3 22 0' stroke='${e}' stroke-width='.8' fill='none'/>`)}),Gs="rgba(11,59,65,.07)",Xs="rgba(237,246,249,.05)",Hs={contas:"contas",lousa:"lousa",cae:"cae",lazer:"lazer",mercado:"mercado",pets:"pets",nos:"nos"},on=e=>{let a=Ys(e);return Object.entries(Hs).map(([o,t])=>`.cc[data-secao="${o}"]:not([data-largo="1"]), ${Ve}[data-${t}-mesa] main { background-image: ${a[t]}; }`).join(`
`)},tn=`
@layer base {
.cc { ${Ms} }
${Rs}
${Ps}
${_s}
${Us}

.lousa-titulo-mao::first-letter { text-transform: uppercase; }

/* ---------- 5. Cart\xF5es do In\xEDcio: a faixa do c\xF4modo passa para o topo ---------- */
.porta { padding-left: 14px; padding-top: 18px; }
.porta::before { left: 0; right: 0; top: 0; bottom: auto; width: auto; height: 6px; }

/* ---------- v17.27, op\xE7\xE3o A: o In\xEDcio do celular cabe numa tela (cart\xF5es deitados, Hoje com 2) ---------- */
.cc:not([data-largo="1"]) .inicio-cab { padding-top: 16px; padding-bottom: 18px; }
.cc:not([data-largo="1"]) .inicio-cab[data-enfeite] { padding-top: 30px; }
.cc:not([data-largo="1"]) .inicio-cab .saudacao { font-size: var(--t4); }
.cc:not([data-largo="1"]) #casita-inicio .tela { padding-top: 12px; }
.cc:not([data-largo="1"]) .hoje { padding: 8px 10px 4px; }
.cc:not([data-largo="1"]) .hoje-titulo { margin-bottom: 6px; font-size: var(--t2); }
.cc:not([data-largo="1"]) .hoje-lista { gap: 8px; }
.cc:not([data-largo="1"]) .hoje-item { min-height: 40px; padding: 6px 9px; font-size: var(--t2); }
.cc:not([data-largo="1"]) .hoje-mais { min-height: 32px; padding: 0 2px 4px; font-size: var(--t2); }
.cc:not([data-largo="1"]) .portas { grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
.cc:not([data-largo="1"]) .porta, .cc:not([data-largo="1"]) .porta.porta-nos { flex-direction: row; align-items: center; gap: 9px; min-height: 66px; padding: 12px 8px 8px 10px; border-radius: var(--r-lg); }
.cc:not([data-largo="1"]) .porta.porta-nos { margin-top: 10px; }
.cc:not([data-largo="1"]) .porta-arte, .cc:not([data-largo="1"]) .porta-nos .porta-arte { width: 42px; height: 42px; border-radius: var(--r-md); }
.cc:not([data-largo="1"]) .porta-nome { font-size: var(--t3); line-height: 1.15; }
.cc:not([data-largo="1"]) .porta-sub { font-size: var(--t1); margin-top: 1px; line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.cc:not([data-largo="1"]) .portas .porta-seta { display: none; }
.cc:not([data-largo="1"]) .porta-nos .porta-seta { position: static; margin-left: auto; }
.cc:not([data-largo="1"]) .inicio-rodape { display: none; }
.cc:not([data-largo="1"]) .porta-arte .foto-porta, .cc:not([data-largo="1"]) .porta-arte img { max-width: 42px; max-height: 42px; }
.icone-comodo { display: block; overflow: visible; }
/* v17.28: resumos dos cart\xF5es com at\xE9 3 linhas (antes cortava "Sobrou R$ 1.454,11 \xB7 1\u2026") */
.cc:not([data-largo="1"]) .portas .porta-sub { -webkit-line-clamp: 3; }
/* v17.28: dia tranquilo: a corti\xE7a fica numa linha s\xF3 */
.cc:not([data-largo="1"]) .hoje:has(.hoje-vazio) { display: flex; align-items: center; gap: 10px; padding: 8px 12px; }
.cc:not([data-largo="1"]) .hoje:has(.hoje-vazio) .hoje-titulo { margin: 0; flex-shrink: 0; }
.cc:not([data-largo="1"]) .hoje-vazio { margin: 0; font-size: var(--t2); }
/* v17.29: no iPhone, o topo da tela pode ficar por baixo da barra de status (que borra o que passa por tr\xE1s).
   O primeiro cabe\xE7alho de cada tela ganha esse espa\xE7o a mais em cima; onde a barra n\xE3o cobre nada, a conta d\xE1 zero. */
.cc:not([data-largo="1"]) main > * > .cabecalho:first-child, .cc:not([data-largo="1"]) main > .cabecalho:first-child { padding-top: calc(16px + env(safe-area-inset-top, 0px)); }
.cc:not([data-largo="1"]) #casita-inicio > .inicio-cab { padding-top: calc(16px + env(safe-area-inset-top, 0px)); }
/* v17.28: bot\xE3o de lan\xE7ar no In\xEDcio */
.fab-inicio { position: fixed; z-index: 25; right: max(16px, env(safe-area-inset-right, 0px)); bottom: calc(18px + env(safe-area-inset-bottom, 0px));
  width: 58px; height: 58px; min-height: 58px; padding: 0; border-radius: 50%; display: grid; place-items: center;
  border: 2px solid #22323A; box-shadow: 0 4px 0 #22323A, 0 10px 18px -8px rgba(0,0,0,.4); }
.fab-inicio:active { transform: translateY(3px); box-shadow: 0 1px 0 #22323A; }
.cc[data-largo="1"] .fab-inicio { display: none; }
html[data-tema="escuro"] .fab-inicio { border-color: #0B2E33; box-shadow: 0 4px 0 #0B2E33, 0 10px 18px -8px rgba(0,0,0,.5); }

/* ---------- 8. (v17.28) a vinheta \xE0 direita do cabe\xE7alho saiu: atrapalhava mais do que somava ---------- */
${on(Gs)}

/* ---------- 7. Hoje: pap\xE9is presos na corti\xE7a ---------- */
.hoje { ${Vs} border: 5px solid #8C5A3C; border-radius: var(--r-lg); padding: 10px 12px 6px; box-shadow: var(--sombra-papel-3); }
.hoje-titulo { color: #FFFFFF; text-shadow: 0 1px 0 rgba(0,0,0,.3); margin-bottom: 10px; }
.hoje-lista { display: flex; flex-direction: column; gap: 10px; padding-top: 2px; }
.hoje-lista li { position: relative; }
.hoje-item, .hoje-lista li:first-child .hoje-item { border-top: 0; }
.hoje-item { position: relative; background: #FFF8D9; color: #22323A; padding: 8px 10px; min-height: 44px; box-shadow: var(--sombra-papel-1); }
.hoje-lista li:nth-child(3n+2) .hoje-item { background: #FFE4EC; }
.hoje-lista li:nth-child(3n) .hoje-item { background: #E1F2EF; }
.hoje-item::before { content: ""; position: absolute; left: 50%; top: -5px; width: 9px; height: 9px; margin-left: -4.5px; border-radius: 50%; background: #C2342A; box-shadow: 0 0 0 2px #FFFFFF; }
.hoje-item[data-alerta] { color: #8A2E12; box-shadow: inset 0 0 0 2px #E29578, 0 5px 8px -5px rgba(0,0,0,.45); }
.hoje-item[data-calmo] { color: #3F646B; }
.hoje-item svg { color: currentColor; }
.hoje-mais { border-top: 0; color: #FFFFFF; }
.hoje-mais .btn-texto, .hoje .btn-texto { color: #FFFFFF; text-decoration: underline; }
.hoje-vazio { color: #FFFFFF; }

/* ---------- 8. Selos de estado ---------- */
.selo-estado { display: inline-flex; align-items: center; flex-shrink: 0; margin-left: 8px; padding: 3px 8px; border: 2px solid currentColor; border-radius: var(--r-pill);
  font-size: var(--t1); font-weight: 800; letter-spacing: .08em; text-transform: uppercase; line-height: 1.1; color: #23744A; background: #E3F4EA;
  vertical-align: middle; animation: selo-bate .32s cubic-bezier(.2,1.4,.4,1) both; }
.conta .selo-estado { margin: 0 8px 0 0; }
.mercado-linha .selo-estado, .recado-meio .selo-estado { align-self: center; }
.recado-meio > .selo-estado { margin: 4px 0 0; align-self: flex-start; }
@keyframes selo-bate { from { transform: scale(1.5) rotate(-8deg); opacity: 0; } 70% { transform: scale(.95) rotate(-2deg); opacity: 1; } to { transform: rotate(-2deg); opacity: 1; } }
.dose[data-dada="1"] .dose-botao { border: 2px solid #23744A; color: #23744A; background: #E3F4EA; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; }

/* ---------- 11. Mia e Marie nos vazios ---------- */
.mascote-vazio { display: block; margin: 0 auto 6px; overflow: visible; }
.lousa-limpa .mascote-vazio { margin: 0; }
.mascote-zz text { animation: zz 2.6s ease-in-out infinite; }
.mascote-zz text + text { animation-delay: .6s; }
@keyframes zz { 0%, 100% { opacity: .25; transform: translateY(2px); } 50% { opacity: 1; transform: translateY(-2px); } }
.mascote-bola { animation: bola 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
@keyframes bola { 0%, 100% { transform: translateY(0); } 45% { transform: translateY(-8px); } 55% { transform: translateY(-8px); } }

/* ---------- 15. Deslizar a linha para marcar ---------- */
[data-deslizar] { touch-action: pan-y; }
[data-deslizar][data-arrastando] { background-image: linear-gradient(90deg, #DDF1E4, transparent 70%); border-radius: var(--r-md); }
[data-deslizar][data-arrastando="pronto"] { background-image: linear-gradient(90deg, #A9DDB9, #DDF1E4 70%); }

/* ---------- 16. Para onde foi: m\xE9dia de 3 meses e categoria aberta ---------- */
.onde-barra { position: relative; display: block; }
.onde-media { position: absolute; top: -3px; bottom: -3px; width: 2px; border-radius: var(--r-xxs); background: var(--texto-2); opacity: .55; }
.onde-cat[data-aberta] { background: var(--trilho); border-radius: var(--r-lg); }
.onde-aberta { padding: 0 12px 12px; }
.onde-gastos { list-style: none; margin: 0 0 10px; padding: 0; }
.onde-gastos li { display: flex; justify-content: space-between; gap: 10px; padding: 6px 0; border-top: 1px solid var(--divisor); font-size: var(--t2); }
.onde-gastos li span { min-width: 0; overflow-wrap: anywhere; color: var(--texto-2); }
.cm-onde-barra { position: relative; }
.cm-onde-media { position: absolute; top: -3px; bottom: -3px; width: 2px; border-radius: var(--r-xxs); background: var(--texto-2); opacity: .5; }

/* ---------- 17. Microanima\xE7\xF5es ---------- */
.cc [aria-checked="true"] .caixa svg path, .cc .conta[data-paga] .conta-caixa svg path { stroke-dasharray: 24; animation: risca .28s ease-out both; }
@keyframes risca { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
.folha { animation: sobe-mola .34s cubic-bezier(.2,1.25,.4,1); }
@keyframes sobe-mola { from { transform: translateY(56px); opacity: .5; } to { transform: none; opacity: 1; } }
html[data-deslize="esq"] main { animation: entra-dir .24s ease-out; }
html[data-deslize="dir"] main { animation: entra-esq .24s ease-out; }
@keyframes entra-dir { from { transform: translateX(28px); opacity: .4; } to { transform: none; opacity: 1; } }
@keyframes entra-esq { from { transform: translateX(-28px); opacity: .4; } to { transform: none; opacity: 1; } }
.cabecalho .titulo { animation: placa .5s cubic-bezier(.3,1.5,.5,1) both; transform-origin: 20% 0; }
@keyframes placa { from { transform: rotate(-3deg); } 50% { transform: rotate(1.5deg); } to { transform: none; } }

/* ---------- 20. Abas dos Ajustes: r\xF3tulo curto no celular ---------- */
.seg-curto { display: none; }
@media (max-width: 520px) { .seg .seg-longo { display: none; } .seg .seg-curto { display: inline; } }

/* ---------- 21. Acessibilidade: alvos de toque de 44 px ---------- */
.btn-pequeno { min-height: 44px; }
.lousa-modo button, .lousa-nav button, .cc .btn-icone { min-width: 44px; min-height: 44px; }
/* v17.37 (piloto): faixa ilustrada no cabe\xE7alho do Mercado, s\xF3 no celular */
.cabecalho.cabecalho-com-faixa { flex-wrap: wrap; row-gap: 6px; }
.cabecalho.cabecalho-com-faixa > .linha-flex { flex: 1 1 100%; }
.faixa-comodo { flex: 0 0 100%; width: 100%; height: 40px; display: block; margin-top: 2px; }
.cc[data-largo="1"] .faixa-comodo { display: none; }
/* v17.35: rostos com humor, selinho de estado nos \xEDcones dos c\xF4modos, sauda\xE7\xE3o com o rosto de quem usa */
.boneco[data-humor] .b-olhos, .boneco[data-humor] .b-boca { display: none; }
.saudacao-linha { display: flex; align-items: center; gap: 8px; min-width: 0; }
.saudacao-rosto { display: inline-flex; flex: none; }
/* v17.39 */
.saudacao-frase { margin: 4px 0 0; font-size: var(--t2); font-weight: 600; opacity: .92; line-height: 1.3; }
/* cabe\xE7alho que encolhe ao rolar (celular): a faixa ilustrada recolhe e o cabe\xE7alho fica mais baixo */
.cc:not([data-largo="1"]) .cabecalho-fixo.cabecalho-com-faixa { transition: padding .2s ease; }
.cc:not([data-largo="1"]) .cabecalho-fixo .faixa-comodo { transition: height .2s ease, opacity .16s ease, margin .2s ease; }
html[data-rolou="1"] .cc:not([data-largo="1"]) .cabecalho-fixo .faixa-comodo { height: 0; opacity: 0; margin-top: -6px; }
html[data-rolou="1"] .cc:not([data-largo="1"]) .cabecalho-fixo.cabecalho-com-faixa { padding-bottom: 8px; }
html[data-movimento="parado"] .cabecalho-fixo .faixa-comodo, html[data-movimento="parado"] .cabecalho-fixo.cabecalho-com-faixa { transition: none; }
.porta-voa svg { width: 100%; height: 100%; }
.cc[data-largo="1"] .fab-comodo { display: none; }
.cc:not([data-largo="1"]) .tela-lazer .tela, .cc:not([data-largo="1"]) .tela-pets .tela { padding-bottom: 84px; }
.cm-quem-ini.cm-quem-rosto { background: none; width: 20px; height: 20px; }
.icone-comodo .ic-estado { transform-box: fill-box; transform-origin: 50% 50%; animation: selo-bate .32s cubic-bezier(.2,1.4,.4,1) both; }
/* v17.34: o \xEDcone da aba escolhida se redesenha, tra\xE7o a tra\xE7o (some com anima\xE7\xF5es pausadas) */
#app-nav button[aria-current="page"] svg :is(path, circle, rect, ellipse, line, polyline) { animation: nav-desenha .42s ease-out; }
@keyframes nav-desenha { from { stroke-dasharray: 0 120; fill-opacity: 0; } to { stroke-dasharray: 120 0; } }
html[data-movimento="parado"] #app-nav svg * { animation: none !important; }
@media (prefers-reduced-motion: reduce) { #app-nav svg * { animation: none !important; } }
/* v17.30: "Ver o m\xEAs / Ver a semana" vira uma p\xEDlula de verdade, leg\xEDvel nos dois temas. */
.lousa-modo { gap: 10px; margin-top: 10px; }
.lousa-modo-btn { font-size: var(--t2); font-weight: 800; color: var(--acao); background: #FFFFFF; border: 1.5px solid #9CC3C9;
  border-radius: var(--r-pill); padding: 0 16px; box-shadow: var(--sombra-1); }
.lousa-modo-seta { color: #0B3B41; background: rgba(255,255,255,.75); border: 1.5px solid #C5DAE1; border-radius: var(--r-pill); }

.chip { min-height: 44px; }
.btn.btn-importar, .jantar-btn { min-height: 44px; }
.cat { min-height: 76px; }
.cc :where(a, button, [role="button"], [tabindex]):focus-visible { outline: 3px solid var(--acao); outline-offset: 2px; }

/* ---------- 23. Computador: coluna da direita sem pilha de caixas ---------- */
${Ve} :is(.qc-painel, .pm-painel, .nm-painel, .lz-painel, .mm-painel) > .qc-cartao:not([class*=" "]) {
  background: transparent; border: 0; border-radius: 0; box-shadow: none; padding: 16px 4px 18px; border-top: 2px solid color-mix(in srgb, var(--cor-comodo, var(--divisor)) 70%, transparent); }
${Ve} :is(.qc-painel, .pm-painel, .nm-painel, .lz-painel, .mm-painel) > .qc-cartao:not([class*=" "]):first-child { border-top-width: 4px; }

/* ---------- 12. Casa larga: o c\xF4modo com algo a fazer fica mais aceso ---------- */
.cl-pendente { stroke: #F2B44A; stroke-width: 8; animation: pendente 3.2s ease-in-out infinite; pointer-events: none; }
@keyframes pendente { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }

/* ---------- 19. Casa da lateral: arquivo arrastado por cima ---------- */
.cs-comodo[data-solta] { outline: 4px dashed #E29578; outline-offset: 2px; background: rgba(255,221,210,.45); border-radius: var(--r-sm); }

/* ---------- 18. Busca que faz ---------- */
.busca-fazer .busca-grupo-t { color: var(--acao); }

/* ---------- 9. Noite: os c\xF4modos sem ilhas claras ---------- */
}

@layer escuro {
${na} .cc { ${Ls} }
${on(Xs).replace(/(^|\n)/g,"$1"+na+" ").replace(/, \.cc/g,", "+na+" .cc")}
${na} .hoje { background-color: #6E5236; background-image: radial-gradient(#62482F 1.2px, transparent 1.4px); border-color: #4A3424; }
${na} .hoje-item { background: #E9DFB8; } ${na} .hoje-lista li:nth-child(3n+2) .hoje-item { background: #E8C9D2; } ${na} .hoje-lista li:nth-child(3n) .hoje-item { background: #C6DCD8; }
${na} .selo-estado { color: #A8E3BE; background: #183D29; }
${na} .qc-caixinha { background: linear-gradient(180deg, #17363A, #12292E); border-color: #2B4A50; }
${na} .qc-divisao { background: #1C3A3F; color: #E4F1F3; } ${na} .qc-divisao[data-aberta] { background: #22454B; }
${na} .qc-divisao-nome { color: #E4F1F3; } ${na} .qc-divisao .qc-mini { color: #A9C5CB; }
${na} .qc-quarto { color: #F3E6D8; background: radial-gradient(circle at 12px 12px, rgba(131,197,190,.18) 2.2px, transparent 2.6px) 0 0/28px 28px, linear-gradient(180deg, #2E2A26, #26221F); border-color: #4A3C30; }
${na} .qc-quarto .qc-h2, ${na} .qc-quarto :is(h2, h3, p, b, strong) { color: #F3E6D8; } ${na} .qc-quarto .qc-mini { color: #D8C3AE; }
${na} .qc-quarto .qc-lembrete { background: transparent; color: #F3E6D8; }
${na} .dose[data-dada="1"] .dose-botao { border-color: #A8E3BE; color: #A8E3BE; background: #183D29; }
${na} [data-deslizar][data-arrastando] { background-image: linear-gradient(90deg, #183D29, transparent 70%); }
${na} .mascote-vazio[data-quem="marie"] ellipse:nth-of-type(2), ${na} .mascote-vazio[data-quem="marie"] circle { fill: #EDEFF5; }
/* v17.30: a lousa \xE9 branca tamb\xE9m no escuro; tudo o que est\xE1 escrito nela volta para as cores do dia
   (antes, "Ver o m\xEAs" e as setas sa\xEDam claras sobre o branco). */
${na} .cc .lousa-superficie, ${na} .cc .lm-superficie {
  --texto:#0B3B41; --texto-2:#3F646B; --texto-3:#577880; --borda:#6F8F97; --divisor:#C5DAE1; --acao:#006D77; --acao-press:#004147;
  --acao-suave:#83C5BE; --acao-clara:#DDF0EE; --superficie:#FFFFFF; --trilho:#E3EDF0; --trilho-2:#C9D9DE; --borda-cartao:#D3E5EA;
  --sobre-acao:#FFFFFF; --seg-fundo:#D7E9EE; color-scheme: light; color: #0B3B41; }
${na} .cc .lousa-modo-btn { color: #005A63; }
${na} .cc .lousa-modo :is(button:hover, button:focus-visible) { background: rgba(0,109,119,.10); }
}

@layer movimento {
html[data-movimento="parado"] .cl-pendente { animation: none !important; opacity: .8; }
@media (prefers-reduced-motion: reduce) { .cl-pendente, .selo-estado, .folha, .mascote-zz text, .mascote-bola { animation: none !important; } }
}

@layer senha {
/* ---------- 6. Entrada no tra\xE7o da ilustra\xE7\xE3o ---------- */
.folha-senha .campo { border: 2px solid #0B3B41; border-radius: var(--r-lg); }
.folha-senha .btn-principal { border: 2px solid #0B3B41; box-shadow: 0 4px 0 #0B3B41; }
.folha-senha .btn-principal:active { transform: translateY(3px); box-shadow: 0 1px 0 #0B3B41; }
.folha-senha .saudacao { font-weight: 800; letter-spacing: -.02em; }
${na} .folha-senha .campo { border-color: #A9C5CB; }
${na} .folha-senha .btn-principal { border-color: #0B2E33; box-shadow: 0 4px 0 #0B2E33; }
}
`;var Js=e=>`url("data:image/svg+xml,${encodeURIComponent(e)}")`,ec=Js('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .36  0 0 0 0 .28  0 0 0 .09 0"/></filter><rect width="220" height="220" filter="url(#g)"/></svg>'),ba='.cc[data-largo="1"]',oo='html[data-tema="escuro"]';var rn=`
@layer base {
/* ---------------- moldura da tela larga ---------------- */
html[data-largo] .cc-fundo { padding-top: 0; }
${ba} { --casa-w: clamp(240px, calc((100vh - 128px) / 2), 380px); --casa-larg: var(--casa-w); --coluna: 480px; max-width: none; margin: 0; display: grid; grid-template-columns: var(--casa-larg) minmax(0, 1fr);
  align-items: start; background: var(--pagina); border-radius: 0; box-shadow: none; min-height: 100vh; padding-bottom: 0; }
${ba} > .casa-lateral { grid-column: 1; grid-row: 1 / span 30; position: sticky; top: 0; height: 100vh; z-index: 6; }
${ba} > #app-conteudo { grid-column: 2; grid-row: 1; justify-self: center; width: 100%; max-width: var(--coluna); margin-top: 24px; min-height: calc(100vh - 24px);
  background: inherit; border-radius: var(--r-xl) var(--r-xl) 0 0; box-shadow: 0 10px 40px rgba(11,59,65,.14), 0 0 0 1px rgba(11,59,65,.05); overflow: clip; padding-bottom: calc(var(--nav) + 24px); }
${ba}[data-acao="1"] > #app-conteudo { padding-bottom: calc(var(--nav) + 104px); }
${ba}[data-secao="inicio"] > #app-conteudo { max-width: 1440px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 36px 40px; }
${ba} .nav, ${ba} .barra-acao, ${ba} .notas { left: var(--casa-larg); max-width: var(--coluna); }
${ba} .toast { left: var(--casa-larg); }
${ba} .veu { padding-left: var(--casa-larg); }

/* ---------------- a casa por dentro (v17.9) ---------------- */
html[data-casa-recolhida] ${ba} { --casa-larg: 76px; }
.casa-lateral { --topo: #A9D8E6; --chao: #9CC98E; --tinta: #0B3B41;
  position: relative; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; height: 100vh;
  overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; color: var(--tinta); background: linear-gradient(180deg, var(--topo) 0 50%, var(--chao) 50%); }
.casa-lateral[data-periodo="tarde"] { --topo: #F3B99B; }
.casa-lateral[data-periodo="noite"] { --topo: #0B1C2E; --chao: #5E7D62; --tinta: #EAF3F6; }
.cs-topo { width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 10px 10px 4px 10px; background: var(--topo); }
.casa-logo { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--r-md); font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; letter-spacing: -.02em; color: var(--tinta); }
.casa-logo svg { color: #006D77; }
.casa-logo:hover { background: rgba(255,255,255,.35); }
.cs-recolher { display: grid; place-items: center; width: 36px; height: 36px; border-radius: var(--r-md); color: var(--tinta); background: rgba(255,255,255,.4); }
.cs-recolher:hover { background: rgba(255,255,255,.75); }
.cs-casa { position: relative; width: var(--casa-w); aspect-ratio: 1 / 2; flex-shrink: 0; }
.cs-svg { display: block; width: 100%; height: 100%; }
.cs-comodos { position: absolute; inset: 0; pointer-events: none; }
.cs-comodo { position: absolute; pointer-events: auto; border-radius: var(--r-xxs); background: transparent; transition: box-shadow .2s ease, background .2s ease; }
.cs-comodo:hover { background: rgba(255,255,255,.14); box-shadow: inset 0 0 0 2px rgba(255,255,255,.8); }
.cs-comodo[aria-current="page"] { box-shadow: inset 0 0 0 3px #F4C25C, 0 0 18px rgba(244,194,92,.75); }
.cs-comodo-sotao { clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.cc .cs-comodo:focus-visible { outline: 3px solid #0B3B41; outline-offset: -3px; box-shadow: inset 0 0 0 6px #FFFFFF; }
.cc .cs-comodo-sotao:focus-visible { clip-path: none; }
.cs-numero { position: absolute; z-index: 2; transform: translate(-25%, -50%); display: grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box;
  border-radius: var(--r-pill); background: #0B3B41; color: #FFFFFF; font-size: var(--t0); font-weight: 900; line-height: 1; pointer-events: none; box-shadow: 0 0 0 2px #FFFDF6; }
.cs-numero[data-alerta] { background: #B04E2B; animation: cs-pulsa 2s ease-in-out infinite; }
.cs-novo { position: absolute; z-index: 3; width: 18px; height: 18px; transform: translate(-50%, -50%); pointer-events: none; filter: drop-shadow(0 0 4px rgba(244,194,92,.95)); animation: cs-brilha 1.8s ease-in-out infinite; }
.cs-segredo { position: absolute; z-index: 2; border-radius: var(--r-sm); background: transparent; }
.cs-segredo:hover { background: rgba(255,255,255,.18); }
.cs-bicho { position: absolute; z-index: 2; padding: 0; background: none; border: 0; }
.cs-bicho-corpo { display: block; width: 100%; height: 100%; transform-origin: 50% 100%; }
.cs-mia { left: 30%; top: 88.4%; width: 15.5%; aspect-ratio: 62 / 46; animation: cs-mia-passeia 16s ease-in-out infinite; }
.cs-mia .cs-bicho-corpo { animation: cs-vira 16s steps(1) infinite; }
.cs-mia .cs-patas { animation: cs-trote .34s ease-in-out infinite; }
.cs-mia .cs-rabo { transform-box: fill-box; transform-origin: 0% 100%; animation: cs-rabinho 1.2s ease-in-out infinite; }
.cs-mia[data-dorme] { animation: none; left: 52%; top: 90%; }
.cs-mia[data-dorme] .cs-bicho-corpo { animation: none; transform: rotate(-4deg); }
.cs-mia[data-dorme] .cs-patas, .cs-mia[data-dorme] .cs-rabo { animation: none; }
.cs-mia[data-dorme] .cs-olhos { transform-box: fill-box; transform-origin: center; transform: scaleY(.15); }
.cs-bola { position: absolute; z-index: 1; left: 26%; top: 94%; width: 3.6%; aspect-ratio: 1; border-radius: 50%; border: 1px solid #22323A; box-sizing: border-box;
  background: radial-gradient(circle at 35% 35%, #9DC1EE, #4F8DC9 62%); pointer-events: none; animation: cs-bola 16s ease-in-out infinite; }
.cs-bola[data-dorme] { animation: none; left: 44%; }
.cs-marie { left: 67.6%; top: 82.4%; width: 13.8%; aspect-ratio: 50 / 30; }
.cs-marie .cs-bicho-corpo { animation: cs-espreguica 9s ease-in-out infinite; }
.cs-marie .cs-rabo-gata { transform-box: fill-box; transform-origin: 0% 100%; animation: cs-rabinho 2.6s ease-in-out infinite; }
.cs-marie:not([data-dorme]) .cs-olhos-gata-fechados { display: none; }
.cs-marie[data-dorme] .cs-olhos-gata-abertos { display: none; }
.cs-marie[data-dorme] .cs-bicho-corpo { animation: cs-respira 3.6s ease-in-out infinite; }
.cs-marie:not([data-dorme]) .cs-zz { display: none; }
.cs-zz { position: absolute; right: 0; top: -40%; font-style: normal; font-size: var(--t1); font-weight: 800; color: #3F646B; opacity: 0; animation: cs-zz 2.8s ease-out infinite; pointer-events: none; }
.cs-bicho[data-reage] .cs-bicho-corpo { animation: cs-pulo .5s cubic-bezier(.3,1.6,.5,1) 2; }
/* v17.30: a\xE7\xF5es ao acaso (acoes.js) da Mia e da Marie na casa do computador */
.cs-bicho[data-acao="pula"] .cs-bicho-corpo, .cs-bicho[data-acao="late"] .cs-bicho-corpo { animation: cs-pulo .6s cubic-bezier(.3,1.6,.5,1) 2; }
.cs-bicho[data-acao="late"]::after, .cs-bicho[data-acao="miau"]::after { position: absolute; left: 50%; bottom: 96%; padding: 1px 7px; border-radius: var(--r-sm); background: #FFFFFF;
  border: 1.5px solid #22323A; color: #22323A; font: 800 11px/1.4 var(--fonte-titulo); white-space: nowrap; animation: cs-balao-fala 1.8s ease both; }
.cs-bicho[data-acao="late"]::after { content: "au!"; } .cs-bicho[data-acao="miau"]::after { content: "miau"; }
@keyframes cs-balao-fala { 0% { opacity: 0; transform: translate(-50%, 4px); } 15%, 80% { opacity: 1; transform: translate(-50%, 0); } 100% { opacity: 0; transform: translate(-50%, -3px); } }
.cs-mia[data-acao="abana"] .cs-rabo { animation: cs-rabinho .22s ease-in-out 8; }
.cs-mia[data-acao="fareja"] .cs-bicho-corpo { animation: cs-fareja 2.2s ease-in-out both; }
@keyframes cs-fareja { 0%, 100% { transform: rotate(0); } 20%, 40%, 60% { transform: rotate(-9deg) translateY(1px); } 30%, 50% { transform: rotate(-6deg); } }
.cs-marie[data-acao="espreguica"] .cs-bicho-corpo { animation: cs-estica 2.6s ease-in-out both; }
@keyframes cs-estica { 0%, 100% { transform: scale(1, 1); } 30%, 62% { transform: scale(1.16, .86); } 80% { transform: scale(.97, 1.04); } }
.cs-marie[data-acao="pisca"] .cs-olhos-gata-abertos, .cs-marie[data-acao="miau"] .cs-olhos-gata-abertos { display: none; }
.cs-marie[data-acao="pisca"] .cs-olhos-gata-fechados, .cs-marie[data-acao="miau"] .cs-olhos-gata-fechados { display: inline; }
.cs-marie[data-acao="rabo"] .cs-rabo-gata { animation: cs-rabinho .7s ease-in-out 3; }
.cs-fala { position: absolute; left: 50%; bottom: 100%; transform: translate(-50%, -4px); white-space: nowrap; padding: 3px 8px; border-radius: var(--r-md); background: #FFFDF6;
  color: #22323A; font-size: var(--t0); font-weight: 800; box-shadow: var(--sombra); }
.cs-carta { position: absolute; z-index: 3; left: var(--de-x); top: var(--de-y); width: 16px; height: 11px; margin: -5px 0 0 -8px; box-sizing: border-box; border: 1px solid #22323A; border-radius: var(--r-xxs);
  background: linear-gradient(to bottom right, transparent 47%, #22323A 48% 52%, transparent 53%) left top / 50% 70% no-repeat,
    linear-gradient(to bottom left, transparent 47%, #22323A 48% 52%, transparent 53%) right top / 50% 70% no-repeat, #FFFDF6;
  pointer-events: none; animation: cs-voa 1.7s cubic-bezier(.4,.1,.3,1) both; }
.cs-pe { width: 100%; flex: 1; box-sizing: border-box; display: flex; flex-wrap: nowrap; align-items: flex-start; justify-content: center; gap: 8px; padding: 10px; background: var(--chao); }
.casa-movimento, .cs-atalhos { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 36px; padding: 0 11px; border-radius: var(--r-pill);
  background: rgba(255,255,255,.8); border: 1.5px solid rgba(11,59,65,.2); color: #0B3B41; font-size: var(--t1); font-weight: 700; white-space: nowrap; }
.casa-movimento:hover, .cs-atalhos:hover { background: #FFFFFF; }
.cs-bilhete { position: fixed; z-index: 70; transform: translateY(-50%) rotate(-1deg); max-width: 250px; display: flex; flex-direction: column; gap: 2px; padding: 12px 13px 10px;
  background: #FFFBEA; color: #22323A; border-radius: var(--r-xxs) var(--r-md) var(--r-sm) var(--r-sm); box-shadow: var(--sombra-3); font-size: var(--t1); line-height: 1.35; pointer-events: none; animation: cs-bilhete .16s ease-out; }
.cs-bilhete strong { font-family: var(--fonte-titulo); font-size: var(--t3); }
.cs-bilhete[data-alerta] { background: #FFEFE7; }
.cs-bilhete-alfinete { position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; margin-left: -5px; border-radius: 50%; background: #E2574C; box-shadow: var(--sombra-1); }
.atalhos-lista { margin: 0; display: grid; gap: 10px; }
.atalhos-lista div { display: grid; grid-template-columns: 120px 1fr; gap: 10px; align-items: baseline; }
.atalhos-lista dt { font-weight: 700; }
.atalhos-lista dd { margin: 0; color: var(--texto-2); }
.atalhos-lista kbd { font: inherit; font-size: var(--t1); font-weight: 800; padding: 1px 7px; border-radius: var(--r-sm); border: 1px solid var(--borda); border-bottom-width: 2px; background: var(--superficie); }

/* recolhida: uma faixa de janelinhas */
.casa-lateral[data-recolhida] { gap: 6px; padding: 10px 0; background: var(--topo); }
.cs-abrir { display: grid; place-items: center; width: 52px; height: 46px; border-radius: var(--r-md); }
.cs-abrir:hover { background: rgba(255,255,255,.4); }
.cs-janelas { display: flex; flex-direction: column; align-items: center; gap: 7px; }
.cs-janela { position: relative; display: grid; place-items: center; width: 50px; height: 46px; box-sizing: border-box; border-radius: var(--r-md) var(--r-md) var(--r-xs) var(--r-xs);
  background: #D6E0E3; color: #0B3B41; border: 2px solid #8C5A3C; border-bottom-width: 5px; transition: background .3s ease; }
.cs-janela[data-aceso] { background: radial-gradient(circle at 50% 30%, #FFE7A3, #FFF1D6 72%); }
.cs-janela[aria-current="page"] { box-shadow: 0 0 0 3px #F4C25C, 0 0 14px rgba(244,194,92,.8); }
.cs-janela .cs-numero { left: auto; right: -8px; top: -8px; transform: none; }
.cs-novo-ponto { position: absolute; left: -5px; top: -5px; width: 10px; height: 10px; border-radius: 50%; background: #F4C25C; box-shadow: 0 0 0 2px #FFFFFF, 0 0 8px #F4C25C; }
.casa-lateral[data-recolhida] .casa-movimento { width: 44px; padding: 0; margin-top: auto; }

/* desenho: noite, anima\xE7\xF5es mi\xFAdas */
.cs-so-noite { display: none; }
.cs-casa[data-noite] .cs-so-noite { display: inline; }
.cs-casa[data-noite] .cs-engrenagem { stroke: #F3EBC8; }
.cs-vapor { animation: cs-vapor 2.4s ease-out infinite; }
.cs-d1 { animation-delay: .6s; } .cs-d2 { animation-delay: 1.2s; } .cs-d3 { animation-delay: 1.8s; }
.cs-mobile { transform-box: fill-box; transform-origin: 50% 0; animation: cs-mobile 4s ease-in-out infinite; }
.cs-luzinha, .cs-estrela { animation: cs-pisca 2.6s ease-in-out infinite; }
.cs-nuvem { animation: cs-nuvem 16s ease-in-out infinite alternate; } .cs-lenta { animation-duration: 24s; }
.cs-asas { transform-box: fill-box; transform-origin: center; animation: cs-asas .35s ease-in-out infinite; }
.cs-fumo { transform-box: fill-box; transform-origin: center; opacity: 0; animation: cs-fumo 3.4s ease-out infinite; }
.cs-fumo.cs-d1 { animation-delay: 1.1s; } .cs-fumo.cs-d2 { animation-delay: 2.2s; }
.cs-balao { transform-box: fill-box; transform-origin: 50% 100%; animation: cs-balanca 3.2s ease-in-out infinite alternate; }
.cs-passaro[data-voando] { animation: cs-voa-passaro 7s ease-in-out both; }
.cs-bau-tampa { transform-box: fill-box; transform-origin: 0% 100%; transition: transform .45s cubic-bezier(.3,1.4,.5,1); }
.cs-bau[data-aberto] .cs-bau-tampa { transform: rotate(-38deg); }
.cs-bau-papel { animation: cs-papel .5s ease-out both; }
.cs-svg .cs-zz { animation: cs-zz 2.8s ease-out infinite; }
.cs-apaga { transition: opacity .7s ease; }
.cs-bandeira { transform-box: fill-box; transform-origin: 50% 0; animation: cs-bandeira 2.6s ease-in-out infinite alternate; }
.cs-fogo { transform-box: fill-box; transform-origin: center; animation: cs-fogo 2.4s ease-out infinite; }
.cs-pipa { animation: cs-pipa 5s ease-in-out infinite alternate; }


/* ---------------- In\xEDcio de mesa ---------------- */
.mesa { padding-top: 30px; }
.mesa-topo { position: relative; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 18px; margin-bottom: 22px; }
.mesa-topo[data-enfeite] { padding-top: 46px; }
.mesa .inicio-data { margin: 0 0 4px; font-size: var(--t3); font-weight: 600; color: var(--texto-2); }
.mesa-saudacao { font-size: var(--t6); color: var(--texto); letter-spacing: -.03em; line-height: 1.1; }
.mesa-lancar { gap: 8px; min-height: 48px; padding: 0 18px; border-radius: var(--r-lg); }
.mesa-lancar kbd { font: inherit; font-size: var(--t0); font-weight: 800; padding: 1px 7px; border-radius: var(--r-sm); background: rgba(255,255,255,.35); border: 1px solid rgba(11,59,65,.2); }
.mesa .pergunta-dono { margin-bottom: 18px; }
.mesa-grade { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 20px; }
.mesa .mesa-hoje { grid-column: 1 / span 7; grid-row: 1; margin-top: 0; padding: 16px 20px 10px; border-radius: var(--r-xl); }
.mesa-retrato { grid-column: 8 / span 5; grid-row: 1 / span 2; }
.mesa-contas { grid-column: 1 / span 4; grid-row: 2; }
.mesa-mercado { grid-column: 5 / span 3; grid-row: 2; }
.mesa-semana { grid-column: 1 / span 7; grid-row: 3; }
.mesa-caderno { grid-column: 8 / span 5; grid-row: 3; }
@media (max-width: 1279px) {
  .mesa-grade { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .mesa .mesa-hoje { grid-column: 1 / -1; grid-row: 1; }
  .mesa-retrato { grid-column: 1 / span 3; grid-row: 2 / span 2; }
  .mesa-contas { grid-column: 4 / span 3; grid-row: 2; }
  .mesa-mercado { grid-column: 4 / span 3; grid-row: 3; }
  .mesa-semana { grid-column: 1 / -1; grid-row: 4; }
  .mesa-caderno { grid-column: 1 / -1; grid-row: 5; }
}
.mesa .hoje-titulo { font-size: var(--t35); }
.mesa .hoje-item span { font-size: var(--t3); }
.mesa-cartao { position: relative; display: block; box-sizing: border-box; width: 100%; min-width: 0; padding: 18px 20px; text-align: left; color: var(--texto);
  background: var(--superficie); border: 1.5px solid var(--borda-cartao); border-radius: var(--r-xl); box-shadow: var(--sombra); transition: transform .18s ease, box-shadow .18s ease; }
button.mesa-cartao { cursor: pointer; }
button.mesa-cartao:hover { transform: translateY(-3px); box-shadow: var(--sombra-3); }
.mesa-cartao-cab { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px; }
.mesa-cartao-cab .btn { white-space: nowrap; flex-shrink: 0; }
.mesa-cartao-titulo { display: flex; align-items: center; justify-content: space-between; gap: 6px; font-family: var(--fonte-titulo); font-size: var(--t35); font-weight: 800; }
.mesa-contas { display: flex; flex-direction: column; gap: 3px; overflow: hidden; }
.mesa-contas::before, .mesa-mercado::before { content: ""; position: absolute; left: 0; top: 18px; bottom: 18px; width: 5px; border-radius: 0 var(--r-xs) var(--r-xs) 0; background: #E29578; }
.mesa-mercado::before { background: #7FC8A9; }
.mesa-contas-rotulo { margin-top: 8px; font-size: var(--t2); font-weight: 600; color: var(--texto-2); }
.mesa-contas-valor { font-family: var(--fonte-titulo); font-size: var(--t55); font-weight: 800; letter-spacing: -.03em; line-height: 1.1; }
.mesa-contas[data-alerta] .mesa-contas-valor { color: var(--perigo-texto); }
.mesa-barra { display: block; height: 10px; margin: 8px 0 4px; border-radius: var(--r-sm); background: var(--trilho); overflow: hidden; }
.mesa-barra i { display: block; height: 100%; border-radius: var(--r-sm); background: linear-gradient(90deg, #006D77, #83C5BE); }
.mesa-contas[data-alerta] .mesa-barra i { background: linear-gradient(90deg, #B04E2B, #E29578); }
.mesa-contas-vazio { margin-top: 8px; }
.mesa-contas-fixas { margin-top: 10px; font-size: var(--t2); font-weight: 800; color: var(--acao); }
.mesa-contas-fixas[data-falta] { color: #9A4320; }
.mesa-mercado-lista { list-style: none; margin: 0; padding: 0; }
.mesa-mercado-item { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 42px; padding: 4px 2px; text-align: left; font-weight: 600; border-top: 1px solid var(--trilho); }
.mesa-mercado-lista li:first-child .mesa-mercado-item { border-top: 0; }
.mesa-mercado-item > span:last-child { min-width: 0; overflow-wrap: anywhere; }
.mesa-mercado-item .caixa { flex-shrink: 0; width: 20px; height: 20px; border-radius: var(--r-sm); border: 2px solid var(--borda); transition: background .15s, border-color .15s; }
.mesa-mercado-item:hover .caixa { border-color: var(--acao); background: var(--acao-clara); }
.mesa-mercado-anotar { display: flex; gap: 8px; margin-top: 10px; }
.mesa-mercado-anotar .campo { flex: 1; min-width: 0; height: 44px; }
.mesa-semana-dias { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 8px; }
.mesa-dia { display: flex; flex-direction: column; gap: 4px; min-width: 0; min-height: 106px; padding: 8px; border-radius: var(--r-md); background: #F1F7F8; }
.mesa-dia[data-passou] { background: transparent; box-shadow: inset 0 0 0 1.5px var(--trilho); }
.mesa-dia[data-hoje] { background: var(--acao); color: #FFFFFF; }
.mesa-dia-nome { font-size: var(--t0); font-weight: 800; color: var(--texto-2); }
.mesa-dia[data-hoje] .mesa-dia-nome { color: #FFFFFF; }
.mesa-dia-item { padding: 3px 6px; border-radius: var(--r-sm); background: #FFF1CC; color: #253238; font-size: var(--t0); font-weight: 700; line-height: 1.25;
  overflow-wrap: break-word; hyphens: auto; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.mesa-dia-item[data-tipo="cae"] { background: #E1F2EF; } .mesa-dia-item[data-tipo="pet"] { background: #EEE8F8; }
.mesa-dia-item[data-feito] { text-decoration: line-through; opacity: .6; }
.mesa-dia[data-hoje] .mesa-dia-item { background: rgba(0,0,0,.22); color: #FFFFFF; }
.mesa-dia-mais { font-size: var(--t0); font-weight: 800; }
.mesa-retrato { display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FFF8EE; border-color: #EADFC8; padding: 22px 22px 16px; }
.mesa-retrato .porta-retrato { width: 100%; }
.mesa-retrato .janela img { max-height: min(40vh, 380px); }
.mesa-retrato-vazio { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 26px 10px; text-align: center; }
.mesa-retrato-arte { display: grid; place-items: center; width: 150px; height: 120px; border-radius: var(--r-sm); padding: 12px;
  background: #FBF5EA; box-shadow: 0 0 0 12px #A26C46, 0 14px 26px rgba(60,35,15,.3); margin-bottom: 18px; transform: rotate(-1.5deg); }
/* Caderninho na mesa: a mesma pauta da p\xE1gina do caderninho, presa ao texto */
.mesa-caderno { --pauta: 1.75rem; --pauta-topo: .625rem; display: flex; flex-direction: column; align-items: flex-start; padding: var(--pauta-topo) 20px calc(var(--pauta) * .5) 42px;
  line-height: var(--pauta); color: #253238; border-color: #E6DCC6; border-radius: var(--r-sm) var(--r-xl) var(--r-xl) var(--r-sm);
  background: linear-gradient(90deg, transparent 26px, rgba(226,149,120,.55) 26px 27.5px, transparent 27.5px),
    repeating-linear-gradient(180deg, #FFFDF6 0 calc(var(--pauta) - 1px), rgba(131,197,190,.32) calc(var(--pauta) - 1px) var(--pauta));
  background-color: #FFFDF6; background-position: 0 0, 0 calc(var(--pauta-topo) + 1px - .175rem); }
.mesa-caderno-titulo { display: flex; align-items: center; gap: 6px; height: var(--pauta); font-size: var(--t1); font-weight: 800; color: #7A5600; position: relative; top: .125rem; }
.mesa-caderno .cad-frase, .mesa-caderno .cad-texto { line-height: var(--pauta); }
.mesa-caderno .cad-frase { font-size: var(--t4); }
.mesa-caderno .cad-contexto { line-height: var(--pauta); position: relative; top: .0625rem; }
.mesa-caderno-pe { font-size: var(--t1); line-height: var(--pauta); color: #5B686C; position: relative; top: .1875rem; }
.mesa .inicio-rodape { margin-top: 26px; text-align: center; }
}

@layer escuro {
.casa-lateral[data-periodo="noite"] .casa-logo svg { color: #83C5BE; }
.casa-lateral[data-periodo="noite"] .casa-logo:hover, .casa-lateral[data-periodo="noite"] .cs-abrir:hover { background: rgba(255,255,255,.08); }
.casa-lateral[data-periodo="noite"] .cs-recolher { background: rgba(255,255,255,.1); }
.casa-lateral[data-periodo="noite"] .cs-recolher:hover { background: rgba(255,255,255,.2); }
.casa-lateral[data-periodo="noite"] .casa-movimento, .casa-lateral[data-periodo="noite"] .cs-atalhos { background: rgba(11,28,46,.55); border-color: rgba(255,255,255,.35); color: #EAF3F6; }
.casa-lateral[data-periodo="noite"] .casa-movimento:hover, .casa-lateral[data-periodo="noite"] .cs-atalhos:hover { background: rgba(11,28,46,.8); }
.casa-lateral[data-periodo="noite"] .cs-janela:not([data-aceso]) { background: #2B3B50; color: #E6EEF2; }
${oo} .mesa-dia { background: #1B3A40; } ${oo} .mesa-dia[data-hoje] { background: #006D77; }
${oo} .mesa-dia-item { background: #4A4026; color: #FFF3D6; } ${oo} .mesa-dia-item[data-tipo="cae"] { background: #1F4A47; color: #E1F2EF; } ${oo} .mesa-dia-item[data-tipo="pet"] { background: #3A3152; color: #EEE8F8; }
${oo} .mesa-contas-fixas[data-falta] { color: #F2B79C; }
${oo} .mesa-retrato { background: #2A2620; border-color: #4A4234; }
${oo} .mesa-retrato-arte { background: #F6F1E7; box-shadow: 0 0 0 12px #7A5534, 0 14px 26px rgba(0,0,0,.4); }
${oo} .mesa-lancar kbd { border-color: rgba(255,255,255,.3); }
${oo} button.mesa-cartao:hover { box-shadow: var(--sombra-3); }
}

@layer pintado {















}

@layer movimento {
html[data-movimento="parado"] .cc *, html[data-movimento="parado"] .cc *::before, html[data-movimento="parado"] .cc *::after { animation: none !important; }
html[data-movimento="parado"] .notas, html[data-movimento="parado"] .cs-carta { display: none; }
@media (prefers-reduced-motion: reduce) { .cs-carta { display: none; } }
}
@keyframes cs-pulsa { 0%, 100% { box-shadow: 0 0 0 2px #FFFDF6; } 50% { box-shadow: 0 0 0 2px #FFFDF6, 0 0 0 6px rgba(176,78,43,.35); } }
@keyframes cs-brilha { 0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0); } 50% { transform: translate(-50%, -50%) scale(1.25) rotate(18deg); } }
@keyframes cs-mia-passeia { 0% { left: 28%; } 40% { left: 54%; } 50% { left: 54%; } 90% { left: 28%; } 100% { left: 28%; } }
@keyframes cs-vira { 0% { transform: scaleX(-1); } 50% { transform: scaleX(1); } }
@keyframes cs-trote { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1.5px); } }
@keyframes cs-rabinho { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-18deg); } }
@keyframes cs-bola { 0% { left: 24%; transform: rotate(0); } 36% { left: 66%; transform: rotate(540deg); } 50% { left: 66%; transform: rotate(540deg); } 86% { left: 24%; transform: rotate(0); } 100% { left: 24%; } }
@keyframes cs-espreguica { 0%, 78%, 100% { transform: scale(1, 1); } 84% { transform: scale(1.14, .9); } 90% { transform: scale(1, 1.04); } }
@keyframes cs-respira { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.05); } }
@keyframes cs-zz { 0% { opacity: 0; transform: translate(0, 0); } 30% { opacity: 1; } 100% { opacity: 0; transform: translate(6px, -12px); } }
@keyframes cs-pulo { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-22%); } }
@keyframes cs-voa { 0% { left: var(--de-x); top: var(--de-y); transform: scale(.4) rotate(-10deg); opacity: 0; } 15% { opacity: 1; transform: scale(1) rotate(-10deg); }
  100% { left: var(--para-x); top: var(--para-y); transform: scale(.5) rotate(10deg); opacity: 0; } }
@keyframes cs-bilhete { from { opacity: 0; transform: translateY(-50%) translateX(-6px) rotate(-1deg); } }
@keyframes cs-vapor { 0% { opacity: 0; transform: translateY(2px); } 40% { opacity: .8; } 100% { opacity: 0; transform: translateY(-8px); } }
@keyframes cs-mobile { 0%, 100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
@keyframes cs-pisca { 0%, 100% { opacity: .4; } 50% { opacity: 1; } }
@keyframes cs-nuvem { from { transform: translateX(0); } to { transform: translateX(18px); } }
@keyframes cs-asas { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(.3); } }
@keyframes cs-fumo { 0% { transform: translate(0, 0) scale(.6); opacity: 0; } 25% { opacity: .85; } 100% { transform: translate(9px, -30px) scale(1.5); opacity: 0; } }
@keyframes cs-balanca { from { transform: rotate(-4deg); } to { transform: rotate(4deg) translateY(-2px); } }
@keyframes cs-voa-passaro { 0% { transform: translate(0, 0); } 12% { transform: translate(30px, -30px); opacity: 1; } 28% { transform: translate(150px, -110px); opacity: 0; }
  70% { transform: translate(-140px, -70px); opacity: 0; } 86% { transform: translate(-30px, -14px); opacity: 1; } 100% { transform: translate(0, 0); } }
@keyframes cs-papel { from { transform: translateY(14px); opacity: 0; } }
@keyframes cs-bandeira { from { transform: rotate(-6deg); } to { transform: rotate(6deg); } }
@keyframes cs-fogo { 0% { transform: scale(.2); opacity: 0; } 30% { opacity: 1; } 100% { transform: scale(1.3); opacity: 0; } }
@keyframes cs-pipa { from { transform: translate(0, 0) rotate(-4deg); } to { transform: translate(10px, -6px) rotate(5deg); } }

/* "mais abaixo" no p\xE9 dos pain\xE9is que rolam por dentro (v17.19) */
:is(.qc-painel, .lm-painel)[data-mais="1"]::after { content: "mais abaixo \u2193"; position: sticky; bottom: 6px; z-index: 5; display: block; width: fit-content; margin: 8px auto 0; padding: 3px 12px; border-radius: var(--r-pill);
  background: #0B3B41; color: #FFFFFF; font-size: var(--t0); font-weight: 800; box-shadow: var(--sombra-papel-1); pointer-events: none; }
.cm-painel[data-mais="1"] .barra-acao::before { content: "h\xE1 mais campos, role \u2193"; display: block; position: static; width: fit-content; margin: -4px auto 8px; white-space: nowrap; padding: 3px 12px; border-radius: var(--r-pill);
  background: #0B3B41; color: #FFFFFF; font-size: var(--t0); font-weight: 800; box-shadow: var(--sombra-papel-1); pointer-events: none; }
/* v17.22: a cor do c\xF4modo no computador, como nas portas do celular: no avatar do cabe\xE7alho e numa
   faixa fina no topo dos cart\xF5es da coluna da direita. */
${ba}[data-contas-mesa] { --cor-comodo: #E29578; --cor-comodo-fundo: #FFF0EA; }
${ba}[data-lousa-mesa] { --cor-comodo: #83C5BE; --cor-comodo-fundo: #E6F4F2; }
${ba}[data-cae-mesa] { --cor-comodo: #F6C177; --cor-comodo-fundo: #FFF4DE; }
${ba}[data-lazer-mesa] { --cor-comodo: #A8BCE8; --cor-comodo-fundo: #E9EFFB; }
${ba}[data-mercado-mesa] { --cor-comodo: #7FC8A9; --cor-comodo-fundo: #E4F4EC; }
${ba}[data-pets-mesa] { --cor-comodo: #C3B5E0; --cor-comodo-fundo: #F1ECFA; }
${ba}[data-nos-mesa] { --cor-comodo: #F28482; --cor-comodo-fundo: #FFE4EC; }
${ba} :is(.qc-painel, .pm-painel, .nm-painel, .lz-painel, .mm-painel) > .qc-cartao, ${ba} .cm-painel, ${ba} .lm-painel { border-top: 4px solid var(--cor-comodo, var(--borda-cartao)); }
${ba} :is(.cm-avatar, .lm-avatar, .mm-sacola) { background: var(--cor-comodo-fundo, var(--trilho)); box-shadow: inset 0 0 0 2px var(--cor-comodo, transparent); }
${ba} :is(.cm-ajuda, .lm-ajuda) { width: 34px; height: 34px; min-height: 34px; border-radius: 50%; font-weight: 800; font-size: var(--t2); color: var(--texto-2); }
.pular-link { position: fixed; left: 12px; top: -60px; z-index: 4000; padding: 10px 16px; border-radius: var(--r-md); background: #0B3B41; color: #FFFFFF; font-weight: 800; text-decoration: none; }
.pular-link:focus { top: 12px; }
.cs-segredo { min-width: 24px; min-height: 24px; }
`;var Ks=e=>`url("data:image/svg+xml,${encodeURIComponent(e)}")`,rc=Ks('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .36  0 0 0 0 .28  0 0 0 .09 0"/></filter><rect width="220" height="220" filter="url(#g)"/></svg>'),ho='.cc[data-contas-mesa="1"]',Q='html[data-tema="escuro"]',nn=`
@layer base {
/* ---------------- moldura ---------------- */
${ho} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${ho}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${ho} main[data-contas-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) clamp(320px, 26vw, 380px); grid-template-areas: "topo painel" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 20px; align-items: start; }
${ho} .cm { display: contents; }
${ho} .cm-topo { grid-area: topo; }
${ho} .cm-corpo { grid-area: corpo; min-width: 0; container-type: inline-size; container-name: cmcorpo; }
${ho} .cm-painel { grid-area: painel; align-self: start; margin-top: 18px; position: sticky; top: 14px; max-height: calc(100vh - 32px); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin;
  box-sizing: border-box; background: var(--superficie); border: 1px solid var(--borda-cartao); border-radius: var(--r-xl); box-shadow: var(--sombra-3); }
${ho} .toast { left: calc(var(--casa-larg) + 28px); right: calc(clamp(320px, 26vw, 380px) + 48px); width: auto; max-width: 520px; bottom: 20px; }

/* ---------------- topo ---------------- */
.cm-topo { display: flex; align-items: center; justify-content: space-between; gap: 16px 20px; flex-wrap: wrap; padding: 20px 0 16px; }
.cm-topo-esq, .cm-topo-dir { display: flex; align-items: center; gap: 12px 16px; flex-wrap: wrap; min-width: 0; }
.cm-avatar { display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%; background: #FFDDD2; }
.cm-titulo { min-width: 0; margin-right: 6px; }
.cm-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.cm-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.cm-nav { display: flex; align-items: center; gap: 4px; }
.cm-nav-btn { display: grid; place-items: center; width: 34px; height: 34px; border-radius: var(--r-md); border: 1px solid var(--borda-cartao); background: var(--superficie); color: var(--texto); }
.cm-nav-btn:hover { border-color: var(--acao); color: var(--acao); }
.cm-nav-txt { min-width: 150px; text-align: center; font-weight: 800; font-size: var(--t3); color: var(--texto); }
.cm-nav-txt-suave { font-size: var(--t2); }
.cm-vistas .seg { min-width: 250px; }
.cm-busca { display: flex; align-items: center; gap: 8px; width: clamp(220px, 22vw, 320px); height: 42px; box-sizing: border-box; padding: 0 8px 0 12px; border-radius: var(--r-md);
  border: 1.5px solid var(--borda-cartao); background: var(--superficie); color: var(--texto-2); cursor: text; }
.cm-busca:focus-within { border-color: var(--acao); }
.cm-busca input { flex: 1; min-width: 0; border: 0; outline: none; background: transparent; font: inherit; font-size: var(--t2); color: var(--texto); }
.cm-busca kbd, .cm-legenda kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2);
  font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.cm-busca-x { display: grid; place-items: center; width: 28px; height: 28px; border-radius: var(--r-sm); color: var(--texto-2); }
.cm-importar { min-height: 42px; }

/* ---------------- grade do m\xEAs ---------------- */
.cm-grade { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 18px; align-items: start; }
.cm-grade > * { grid-column: span 12; min-width: 0; }
@container cmcorpo (min-width: 760px) {
  .cm-grade > .cm-saldo { grid-column: span 5; }
  .cm-grade > .cm-varal { grid-column: span 7; }
  .cm-grade > .cm-cal { grid-column: span 7; }
  .cm-grade > .cm-onde { grid-column: span 5; }
}
@container cmcorpo (min-width: 760px) { .cm-grade:not(:has(> .cm-onde)) > .cm-cal { grid-column: span 12; } }
@container cmcorpo (min-width: 560px) and (max-width: 759px) {
  .cm-grade:not(:has(> .cm-onde)) > .cm-cal { grid-column: span 12; }
  .cm-grade > .cm-cal, .cm-grade > .cm-onde { grid-column: span 6; }
}
.cm-cartao { position: relative; box-sizing: border-box; background: var(--superficie); border: 1px solid var(--borda-cartao); border-radius: var(--r-xl); padding: 16px 20px; color: var(--texto); }
.cm-cab { display: flex; align-items: baseline; justify-content: space-between; gap: 6px 14px; flex-wrap: wrap; margin-bottom: 10px; }
.cm-h2 { display: flex; align-items: center; gap: 7px; margin: 0; font-family: var(--fonte-titulo); font-size: var(--t35); font-weight: 800; color: var(--texto); }
.cm-h2 svg { color: var(--acao); }
.cm-mini { font-size: var(--t1); font-weight: 600; color: var(--texto-2); }
.cm-legenda { margin: 10px 0 0; font-size: var(--t1); line-height: 1.45; color: var(--texto-2); }
.cm-link { padding: 2px 4px; border-radius: var(--r-sm); font-size: var(--t1); font-weight: 800; color: var(--acao); text-decoration: underline; text-underline-offset: 2px; }
.cm-link:hover { color: var(--texto); }
.cm-bolinha { display: inline-block; width: 10px; height: 10px; border-radius: var(--r-xs); margin-right: 7px; flex-shrink: 0; }

/* ---------------- saldo com a Marie ---------------- */
.cm-saldo { background: #006D77; border-color: transparent; color: #FFFFFF; padding: 22px 22px 16px; overflow: hidden; }
.cm-saldo[data-falta] { background: #0B3B41; }
.cm-marie { position: absolute; right: 12px; top: 8px; width: 104px; height: 58px; pointer-events: none; }
.cm-marie svg { display: block; overflow: visible; }
.cm-marie-corpo, .cm-marie-cabeca, .cm-marie-patas, .cm-marie-rabo { transform-box: fill-box; }
.cm-marie[data-estado="dorme"] .cm-marie-corpo { transform-origin: 50% 100%; animation: cm-respira 3.6s ease-in-out infinite; }
.cm-marie[data-estado="dorme"] .cm-marie-cabeca { transform-origin: 70% 100%; animation: cm-respira-cabeca 3.6s ease-in-out infinite; }
.cm-marie[data-estado="espreguica"] .cm-marie-corpo { transform-origin: 0% 100%; animation: cm-espreguica 5.5s ease-in-out infinite; }
.cm-marie[data-estado="espreguica"] .cm-marie-patas { transform-origin: 100% 50%; animation: cm-patas 5.5s ease-in-out infinite; }
.cm-marie[data-estado="espreguica"] .cm-marie-cabeca { transform-origin: 60% 100%; animation: cm-cabeca-sobe 5.5s ease-in-out infinite; }
.cm-marie .cm-marie-rabo { transform-origin: 0% 100%; animation: cm-rabo 3s ease-in-out infinite; }
.cm-zz { position: absolute; left: 34px; top: -6px; font: 800 .82rem var(--fonte-titulo); color: #CDEBE8; }
.cm-zz i { position: absolute; font-style: normal; opacity: 0; animation: cm-zz 3s ease-out infinite; }
.cm-zz i + i { left: 9px; top: -7px; font-size: var(--t00); animation-delay: 1.5s; }
.cm-fechou { position: relative; z-index: 1; margin: -6px 110px 10px 0; padding: 6px 10px; border-radius: var(--r-md); background: rgba(255,255,255,.12); font-size: var(--t15); font-weight: 600; }
.cm-saldo-rot { margin: 0; font-size: var(--t2); font-weight: 700; color: #CDEBE8; }
.cm-saldo-num { margin: 2px 0 0; font-family: var(--fonte-titulo); font-size: clamp(2rem, 3.1vw, 2.6rem); font-weight: 800; letter-spacing: -.02em; line-height: 1.1; }
.cm-saldo-num .centavos { font-size: .6em; }
.cm-saldo[data-falta] .cm-saldo-num { color: #FFC9B5; }
.cm-saldo-nota { margin: 4px 0 0; font-size: var(--t1); color: #CDEBE8; }
.cm-saldo-linha { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 14px; font-size: var(--t2); }
.cm-saldo-linha > span { display: flex; flex-direction: column; gap: 1px; }
.cm-saldo .cm-mini { color: #DDF2EF; }
.cm-saldo-linha b { font-weight: 800; }
.cm-jarra { display: flex; align-items: center; gap: 10px; margin-top: 14px; padding: 8px 12px; border-radius: var(--r-md); background: rgba(255,255,255,.1); font-size: var(--t15); line-height: 1.4; }
.cm-jarra svg { flex-shrink: 0; }
.cm-link-claro { padding: 2px 4px; margin-left: -4px; border-radius: var(--r-sm); font-size: var(--t15); font-weight: 800; color: #FFFFFF; text-decoration: underline; text-underline-offset: 2px; display: inline-flex; align-items: center; gap: 6px; }
.cm-link-claro:hover { background: rgba(255,255,255,.14); }
.cm-resumo { margin-top: 10px; }

/* ---------------- varal ---------------- */
.cm-fios { display: flex; flex-direction: column; gap: 6px; }
.cm-fio { position: relative; padding-top: 4px; }
.cm-corda { position: absolute; left: -6px; right: -6px; top: 2px; width: calc(100% + 12px); height: 18px; }
.cm-envelopes { position: relative; display: grid; grid-template-columns: repeat(var(--n), minmax(0, 1fr)); gap: 10px; margin: 0; padding: 0; list-style: none; }
.cm-env-item { position: relative; display: flex; flex-direction: column; align-items: stretch; padding-top: 8px; transform-origin: 50% 0; animation: cm-balanca 4.2s ease-in-out infinite; animation-delay: var(--atraso, 0s); }
.cm-fios:hover .cm-env-item, .cm-fios:focus-within .cm-env-item { animation-play-state: paused; }
.cm-pregador { position: absolute; z-index: 2; left: 50%; top: 0; margin-left: -5px; }
.cm-env { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 2px; min-height: 96px; padding: 30px 6px 8px; box-sizing: border-box;
  border: 1.5px solid #22323A; border-radius: var(--r-xs); background: #FFFFFF; color: #0B3B41; text-align: center; box-shadow: 0 3px 0 rgba(11,59,65,.12); transition: transform .15s ease, box-shadow .15s ease; }
.cm-env:hover { transform: translateY(-2px); box-shadow: var(--sombra); }
.cm-aba { position: absolute; left: 0; top: 0; width: 100%; height: 26px; }
.cm-env-nome { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: var(--t15); font-weight: 800; }
.cm-env-valor { font-size: var(--t1); font-weight: 700; color: #3F5A60; }
.cm-env-sit { font-size: var(--t0); font-weight: 800; color: #4D6A70; }
.cm-env[data-estado="venceu"] { background: #FFE4DC; }
.cm-env[data-estado="venceu"] .cm-env-sit { color: #8F3A1C; }
.cm-env[data-estado="hoje"], .cm-env[data-estado="amanha"] { background: #FFF3D6; }
.cm-env[data-estado="hoje"] .cm-env-sit, .cm-env[data-estado="amanha"] .cm-env-sit { color: #6E4E00; }
.cm-env[data-estado="paga"] { background: #F7FBFA; color: #3F5A60; }
.cm-carimbo { display: inline-block; margin-top: 4px; padding: 1px 6px; border: 1.5px solid #3B8058; border-radius: var(--r-xs); color: #275C3D; font-size: var(--t00); font-weight: 900; letter-spacing: .04em;
  text-transform: uppercase; transform: rotate(-8deg); background: rgba(255,255,255,.6); }
.cm-env[data-carimbo] .cm-carimbo { animation: cm-carimba .55s cubic-bezier(.2,1.6,.5,1) both; }
.cm-env-outro { align-self: center; margin-top: 4px; min-height: 22px; padding: 1px 6px; border-radius: var(--r-sm); font-size: var(--t0); font-weight: 800; color: var(--acao); text-decoration: underline; text-underline-offset: 2px; }
.cm-env-outro:hover { color: var(--texto); }
.cm-varal-vazio { display: flex; flex-direction: column; gap: 10px; }
.cm-acoes { display: flex; flex-wrap: wrap; gap: 0 6px; margin: 4px 0 -6px -8px; }
.cm-acoes .btn-texto { min-height: 36px; font-size: var(--t15); }

/* ---------------- calend\xE1rio ---------------- */
.cm-semana, .cm-dias { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 5px; }
.cm-semana { margin-bottom: 4px; font-size: var(--t0); font-weight: 800; color: var(--texto-2); text-align: center; }
.cm-dia { position: relative; display: flex; align-items: flex-start; justify-content: flex-start; min-width: 0; height: 44px; padding: 4px 6px; box-sizing: border-box; border-radius: var(--r-sm);
  background: #F1F7F8; color: #0B3B41; font-size: var(--t1); font-weight: 800; }
.cm-dia[data-nivel="1"] { background: #D7EEEB; }
.cm-dia[data-nivel="2"] { background: #AEDCD6; }
.cm-dia[data-nivel="3"] { background: #74C0B7; }
.cm-dia[data-nivel="4"] { background: #006D77; color: #FFFFFF; }
.cm-dia[data-futuro] { background: transparent; box-shadow: inset 0 0 0 1px var(--trilho); color: var(--texto-2); }
.cm-dia[data-hoje] { box-shadow: inset 0 0 0 2.5px #E29578; }
.cm-dia:hover { box-shadow: inset 0 0 0 2px var(--acao); }
.cm-dia[aria-pressed="true"] { box-shadow: inset 0 0 0 3px #0B3B41, 0 0 0 2px #F4C25C; }
.cm-dia-env, .cm-cal-leg i { display: block; }
.cm-dia-env { position: absolute; right: 4px; bottom: 4px; width: 13px; height: 9px; box-sizing: border-box; border: 1.2px solid #22323A; border-radius: var(--r-xxs); background:
  linear-gradient(to bottom right, transparent 46%, #22323A 46% 54%, transparent 54%) top left / 50% 70% no-repeat,
  linear-gradient(to bottom left, transparent 46%, #22323A 46% 54%, transparent 54%) top right / 50% 70% no-repeat, #FFDDD2; }
.cm-dia-env[data-paga] { background-color: #DDF1E4; }
.cm-cal-leg { display: flex; align-items: center; gap: 5px; margin-top: 10px; font-size: var(--t0); font-weight: 700; color: var(--texto-2); }
.cm-cal-leg i { width: 14px; height: 14px; border-radius: var(--r-xs); background: #F1F7F8; }
.cm-cal-leg i[data-nivel="1"] { background: #D7EEEB; } .cm-cal-leg i[data-nivel="2"] { background: #AEDCD6; }
.cm-cal-leg i[data-nivel="3"] { background: #74C0B7; } .cm-cal-leg i[data-nivel="4"] { background: #006D77; }
.cm-cal-leg-env { display: inline-flex; align-items: center; gap: 5px; margin-left: auto; }
.cm-cal-leg-env .cm-dia-env { position: static; }

/* ---------------- para onde foi ---------------- */
.cm-onde-lista { display: flex; flex-direction: column; gap: 2px; margin: 0; padding: 0; list-style: none; }
.cm-onde-item { display: flex; align-items: center; gap: 4px; }
.cm-onde-btn { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 7px 8px; margin-left: -8px; border-radius: var(--r-md); text-align: left; color: var(--texto); }
.cm-onde-btn:hover { background: var(--pagina); }
.cm-onde-btn[aria-pressed="true"] { background: var(--acao-clara); box-shadow: inset 0 0 0 2px var(--acao); }
.cm-onde-topo { display: flex; justify-content: space-between; gap: 8px; font-size: var(--t15); font-weight: 700; }
.cm-onde-nome { display: flex; align-items: center; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cm-onde-valor { display: flex; align-items: baseline; gap: 6px; white-space: nowrap; font-weight: 800; font-variant-numeric: tabular-nums; }
.cm-onde-teto { font-weight: 600; color: var(--texto-2); }
.cm-var { font-size: var(--t0); font-weight: 800; }
.cm-var[data-var="sobe"] { color: #A3401F; }
.cm-var[data-var="desce"] { color: #2F6E47; }
.cm-var[data-var="igual"] { color: var(--texto-2); }
.cm-onde-item[data-passou] .cm-onde-valor { color: var(--perigo-texto); }
.cm-onde-barra { position: relative; display: block; height: 9px; border-radius: var(--r-pill); background: var(--trilho); overflow: visible; }
.cm-onde-barra > span { display: block; height: 100%; border-radius: var(--r-pill); }
.cm-onde-barra > i { position: absolute; top: -3px; width: 2.5px; height: 15px; border-radius: var(--r-xxs); background: #0B3B41; }
.cm-onde-tetobtn { display: grid; place-items: center; width: 30px; height: 30px; flex-shrink: 0; border-radius: var(--r-sm); color: var(--texto-2); }
.cm-onde-tetobtn:hover { background: var(--pagina); color: var(--acao); }
.cm-quem { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--trilho); }
.cm-quem-barra { display: flex; flex: 1 1 120px; height: 18px; gap: 2px; border-radius: var(--r-pill); overflow: hidden; }
.cm-quem-barra span { display: flex; align-items: center; padding-left: 7px; min-width: 18px; font-size: var(--t00); font-weight: 900; color: var(--sobre-p, #FFFFFF); background: var(--p1); }
.cm-quem-barra span[data-p="1"] { background: var(--p2); }
.cm-quem-txt { flex: 1 1 100%; font-size: var(--t1); font-weight: 600; color: var(--texto-2); }

/* ---------------- tabela ---------------- */
.cm-cab-tab { align-items: center; }
.cm-filtros { display: flex; flex-wrap: wrap; gap: 6px; }
.cm-pilula { min-height: 32px; padding: 4px 12px; border-radius: var(--r-pill); border: 1.5px solid var(--borda-cartao); background: var(--superficie); font-size: var(--t1); font-weight: 800; color: var(--texto); }
.cm-pilula:hover { border-color: var(--acao); }
.cm-pilula[aria-pressed="true"] { background: #0B3B41; border-color: #0B3B41; color: #FFFFFF; }
.cm-ativos { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; margin: -2px 0 10px; }
.cm-tirar { display: inline-flex; align-items: center; gap: 5px; min-height: 28px; padding: 2px 10px; border-radius: var(--r-pill); background: #FFF3D6; color: #5C4100; font-size: var(--t1); font-weight: 800; }
.cm-tirar:hover { background: #FFE6A8; }
.cm-grupo { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 10px; padding: 8px 12px; border-radius: var(--r-md); background: #FFF3D6; color: #3D2C00; font-size: var(--t15); }
.cm-grupo-btn { position: relative; }
.cm-grupo .btn-pequeno { min-height: 32px; font-size: var(--t1); }
.cm-dica-sel { margin: -4px 0 8px; }
.cm-rolar { overflow-x: auto; margin: 0 -8px; padding: 0 8px; }
.cm-tab { width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 0; font-size: var(--t15); }
.cm-th-cat { width: 132px; } .cm-th-forma { width: 128px; } .cm-th-quem { width: 78px; } .cm-th-valor { width: 128px; }
.cm-tab th { position: sticky; top: 0; z-index: 1; padding: 0 6px 6px; border-bottom: 1px solid var(--trilho); background: var(--superficie); text-align: left; font-size: var(--t0); font-weight: 800; color: var(--texto-2); white-space: nowrap; }
.cm-ordem { display: inline-flex; align-items: center; gap: 3px; padding: 4px 4px; margin-left: -4px; border-radius: var(--r-sm); font: inherit; color: inherit; text-transform: none; }
.cm-ordem:hover { color: var(--acao); }
th[aria-sort] .cm-ordem { color: var(--texto); }
.cm-th-valor, .cm-td-valor { text-align: right !important; }
.cm-th-valor .cm-ordem { margin-left: 0; margin-right: -4px; }
.cm-th-sel, .cm-td-sel { width: 26px; padding-right: 0 !important; }
.cm-th-data { width: 50px; }
.cm-tab td { position: relative; padding: 3px 6px; border-bottom: 1px solid var(--trilho); vertical-align: middle; }
.cm-tab tbody tr { outline: none; }
.cm-tab tbody tr:hover td { background: var(--pagina); }
.cm-tab tbody tr:focus-visible td { background: var(--acao-clara); box-shadow: inset 0 2px 0 var(--acao), inset 0 -2px 0 var(--acao); }
.cm-tab tbody tr:focus-visible td:first-child { box-shadow: inset 3px 2px 0 var(--acao), inset 0 -2px 0 var(--acao); }
.cm-tab tbody tr[data-sel] td { background: #FFF6DC; }
/* v17.24: receita com a linha verde clarinha e uma faixa \xE0 esquerda (o "+" continua). */
.cm-tab tbody tr[data-tipo="receita"] td { background: #E9F6EE; }
.cm-tab tbody tr[data-tipo="receita"] td:first-child { box-shadow: inset 4px 0 0 #2E8B57; }
.cm-tab tbody tr[data-tipo="receita"]:hover td { background: #DDF0E4; }
.cm-tab tbody tr[data-tipo="receita"] .cm-nada { color: #46605F; }
.cm-td-valor[data-receita] .cm-cel { color: #1E6B40; font-weight: 800; }
.cm-sel-filtro { appearance: auto; padding-right: 6px; cursor: pointer; }
.cm-sel-filtro[data-ativo] { background: var(--acao-clara); border-color: var(--acao); color: var(--acao-escura, var(--texto)); }
.cm-no-cartao { margin-top: 6px; }
.cm-tab tbody tr[data-virtual] .cm-td-data, .cm-tab tbody tr[data-virtual] .cm-td-valor { color: var(--texto-2); }
.cm-tab input[type="checkbox"] { width: 17px; height: 17px; margin: 0; accent-color: #006D77; cursor: pointer; }
.cm-td-data { font-weight: 700; color: var(--texto-2); white-space: nowrap; font-variant-numeric: tabular-nums; }
.cm-td-forma { color: var(--texto-2); font-size: var(--t1); white-space: nowrap; }
.cm-cel { display: inline-flex; align-items: center; gap: 6px; max-width: 100%; min-height: 32px; padding: 3px 6px; margin-left: -6px; border-radius: var(--r-sm); text-align: left; color: var(--texto); font: inherit; }
.cm-cel:hover { background: var(--superficie); box-shadow: inset 0 0 0 1.5px var(--borda-cartao); }
.cm-td-obs .cm-cel { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; white-space: normal; overflow-wrap: anywhere; line-height: 1.25; max-width: calc(100% + 6px); box-sizing: border-box; font-weight: 600; }
.cm-td-cat .cm-cel, .cm-td-quem .cm-cel { max-width: calc(100% + 6px); overflow: hidden; }
.cm-nada { color: var(--texto-3); font-weight: 600; font-style: italic; }
.cm-cat-pilula { display: inline-flex; align-items: center; gap: 4px; padding: 2px 9px; border-radius: var(--r-pill); font-size: var(--t1); font-weight: 800; white-space: nowrap;
  background: color-mix(in srgb, var(--cor) 32%, #FFFFFF); color: #0B3B41; }
.cm-seta { font-size: var(--t0); opacity: .7; }
.cm-quem-ini { display: inline-grid; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: var(--p1); color: var(--sobre-p, #FFFFFF); font-size: var(--t00); font-weight: 900; }
.cm-quem-ini[data-p="1"] { background: var(--p2); }
.cm-td-valor { font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.cm-td-valor .cm-cel { display: inline-block; margin-left: 0; margin-right: -6px; text-align: right; }
.cm-campo-cel { width: 100%; min-width: 120px; height: 32px; box-sizing: border-box; padding: 0 8px; border: 2px solid var(--acao); border-radius: var(--r-sm); background: var(--superficie); color: var(--texto); font: inherit; font-weight: 600; }
.cm-campo-valor { text-align: right; min-width: 100px; font-variant-numeric: tabular-nums; font-weight: 800; }
.cm-escolher { position: absolute; z-index: 20; left: 0; top: calc(100% - 2px); width: 220px; padding: 6px; box-sizing: border-box; border-radius: var(--r-md); background: var(--superficie);
  border: 1px solid var(--borda-cartao); box-shadow: var(--sombra-3); }
.cm-esc-busca { width: 100%; height: 32px; box-sizing: border-box; padding: 0 8px; margin-bottom: 4px; border: 1.5px solid var(--borda-cartao); border-radius: var(--r-sm); background: var(--pagina); color: var(--texto); font: inherit; font-size: var(--t15); }
.cm-esc-busca:focus { border-color: var(--acao); outline: none; }
.cm-esc-lista { display: flex; flex-direction: column; max-height: 260px; overflow-y: auto; }
.cm-esc-op { display: flex; align-items: center; gap: 8px; min-height: 32px; padding: 3px 8px; border-radius: var(--r-sm); text-align: left; font-size: var(--t15); font-weight: 700; color: var(--texto); }
.cm-esc-op[data-ativo] { background: var(--pagina); }
.cm-esc-op[aria-pressed="true"] { color: var(--acao); }
.cm-esc-op .ico-cat { flex-shrink: 0; }
.cm-aviso-copia { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.cm-sync { display: flex; align-items: center; justify-content: flex-end; gap: 10px; }
.cm-sync .cm-mini { display: inline-flex; align-items: center; gap: 6px; }

/* Coluna estreita (casa aberta em tela de 1366 a 1600): a tabela aperta sem esconder o valor. */
@container cmcorpo (max-width: 759px) {
  .cm-td-quem .cm-cel { font-size: 0; gap: 0; }
  .cm-td-quem .cm-quem-ini { font-size: var(--t00); }
  .cm-td-forma { white-space: normal; font-size: var(--t0); line-height: 1.2; min-width: 70px; }
  .cm-th-forma { width: 84px; } .cm-th-quem { width: 40px; } .cm-th-cat { width: 112px; } .cm-th-valor { width: 120px; }
  .cm-cat-pilula { padding: 2px 7px; font-size: var(--t0); }
  .cm-dia { height: 38px; padding: 3px 5px; font-size: var(--t1); }
  .cm-dia-env { width: 10px; height: 7px; right: 3px; bottom: 3px; }
}
@container cmcorpo (max-width: 600px) {
  .cm-td-forma, .cm-th-forma { display: none; }
}

/* ---------------- Ano e Planos largos ---------------- */
.cm-ano { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 18px; align-items: start; }
.cm-ano > * { grid-column: span 12; margin-top: 0 !important; min-width: 0; }
.cm-ano > .heroi { border-radius: var(--r-xl); }
.cm-ano > .secao:not(.heroi), .cm-planos .planos-largo > .secao { box-sizing: border-box; background: var(--superficie); border: 1px solid var(--borda-cartao); border-radius: var(--r-xl); padding: 16px 20px; }
.cm-ano > .cartao-suave { background: var(--superficie); }
.cm-ano > .vazio { padding: 40px; text-align: center; }
@container cmcorpo (min-width: 760px) {
  .cm-ano > .heroi { grid-column: span 7; }
  .cm-ano > [aria-label="M\xE9dias"] { grid-column: span 5; align-self: stretch; }
  .cm-ano .ano-cats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 26px; }
  .cm-planos .planos-largo { grid-template-columns: repeat(12, minmax(0, 1fr)); }
  .cm-planos .planos-largo > [aria-labelledby="t-venc"] { grid-column: span 5; }
  .cm-planos .planos-largo > [aria-labelledby="t-futuro"] { grid-column: span 7; }
}
.cm-ano .evol-ano { height: 220px; }
.cm-ano .evol-ano button { gap: 4px; }
.cm-ano .evol-ano .num { font-size: var(--t0); font-weight: 800; color: var(--texto-2); white-space: nowrap; }
@container cmcorpo (max-width: 759px) { .cm-ano .evol-ano .num { display: none; } }
.cm-ano .evol-ano .mes { font-size: var(--t1); text-transform: capitalize; }
.cm-planos .planos-largo { display: grid; grid-template-columns: minmax(0, 1fr); gap: 18px; align-items: start; }
.cm-planos .planos-largo > * { grid-column: 1 / -1; margin-top: 0 !important; min-width: 0; }
.cm-planos .planos-largo > .cartao { box-shadow: none; }
.cm-planos .caixinhas { grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }

/* ---------------- painel de lan\xE7ar ---------------- */
.cm-painel .lancar-tela, .cm-painel .lote { padding-bottom: 0; }
.cm-painel .cabecalho { padding: 14px 14px 14px; position: sticky; top: 0; z-index: 3; min-height: 0; }
.cm-painel .cabecalho-fixo { position: sticky; top: 0; border-radius: var(--r-xl) var(--r-xl) 0 0; }
.cm-painel .tela { padding: 0 14px 4px; }
.cm-painel .secao { margin-top: 14px; }
.cm-painel .seg-grande button { min-height: 44px; font-size: var(--t2); padding: 0 6px; gap: 5px; }
.cm-painel .barra-acao, .cm-painel .lote-acao { position: sticky; bottom: 0; left: auto; right: auto; max-width: none; width: auto; z-index: 3; padding: 10px 14px 12px; margin: 0;
  background: var(--superficie); border-top: 1px solid var(--borda); pointer-events: auto; transform: none; }
.cm-painel .barra-acao::before { display: none; }
.cm-painel .valor { min-height: 60px; }
.cm-painel .valor input { font-size: var(--t55); }
.cm-painel .cats { display: flex !important; flex-wrap: wrap; gap: 6px; }
.cm-painel .cat { flex-direction: row; gap: 6px; min-height: 36px; width: auto; padding: 3px 10px 3px 4px; border-radius: var(--r-pill); font-size: var(--t1); }
.cm-painel .cat .ico-cat { width: 26px !important; height: 26px !important; border-radius: var(--r-sm) !important; }
.cm-painel .cat .ico-cat svg { width: 17px; height: 17px; }
.cm-painel .cat .marca { display: none; }
.cm-painel .chips { flex-wrap: wrap; overflow: visible; }
.cm-painel .pessoa { min-height: 44px; }
.cm-painel .seta-valor { display: none; }
.cm-painel-pe { display: flex; flex-direction: column; gap: 12px; padding: 4px 14px 16px; }
.acabou { padding: 12px 12px 8px; border-radius: var(--r-lg); background: var(--pagina); }
.acabou-t { margin: 0 0 4px; font-size: var(--t0); font-weight: 800; color: var(--texto-2); text-transform: uppercase; letter-spacing: .04em; }
.acabou ul { margin: 0; padding: 0; list-style: none; }
.acabou-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; min-height: 34px; padding: 3px 6px; margin: 0 -6px; border-radius: var(--r-sm); font-size: var(--t15); color: var(--texto); text-align: left; box-sizing: content-box; }
.acabou-item:hover { background: var(--superficie); }
.acabou-nome { display: flex; align-items: center; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.soltar-print { display: flex; align-items: center; gap: 10px; padding: 14px; border: 2px dashed var(--trilho-2); border-radius: var(--r-lg); color: var(--texto-2); font-size: var(--t15); text-align: left; line-height: 1.35; }
.soltar-print:hover { border-color: var(--acao); color: var(--acao); }
.soltar-print b { color: var(--texto); }
.cm-soltar { position: fixed; z-index: 40; inset: 0 0 0 var(--casa-larg); display: grid; place-items: center; background: rgba(0,109,119,.18); backdrop-filter: blur(2px); pointer-events: none; }
.cm-soltar span { display: flex; align-items: center; gap: 12px; padding: 22px 30px; border: 3px dashed #006D77; border-radius: var(--r-xl); background: #FFFFFF; color: #0B3B41; font: 800 1.15rem var(--fonte-titulo); }

/* lote */
.lote-corpo { display: flex; flex-direction: column; gap: 8px; padding: 6px 14px 4px; }
.lote-topo { align-items: center; gap: 8px; flex-wrap: wrap; } .lote-topo .rotulo { margin: 0; }
.lote-mes { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; } .lote-mes .rotulo { margin: 0; } .lote-mes .lote-cat { width: auto; min-width: 170px; }
.lote-pdf { min-height: 34px; padding: 0 10px; font-size: var(--t1); }
.lote-outros { align-self: flex-start; min-height: 34px; font-size: var(--t1); }
.lote-texto { box-sizing: border-box; width: 100%; min-height: 110px; padding: 10px 12px; border-radius: var(--r-md); border: 1.5px solid var(--borda-cartao); background: var(--superficie); color: var(--texto);
  font: .8rem/1.55 ui-monospace, "SF Mono", Menlo, Consolas, monospace; resize: vertical; }
.lote-texto:focus { border-color: var(--acao); outline: none; }
.lote-aviso { font-size: var(--t1); }
.lote-lista { margin: 4px 0 0; padding: 0; list-style: none; border: 1px solid var(--trilho); border-radius: var(--r-md); overflow: hidden; }
.lote-item { display: grid; grid-template-columns: 20px 40px minmax(0, 1fr) 106px auto; gap: 6px; align-items: center; padding: 7px 8px; font-size: var(--t1); }
.lote-item + .lote-item { border-top: 1px solid var(--trilho); }
.lote-item:not([data-incluir]) { background: var(--pagina); }
.lote-item:not([data-incluir]) .lote-nome b, .lote-item:not([data-incluir]) .lote-valor { color: var(--texto-2); }
.lote-item[data-ja] { background: #FFF6E6; }
.lote-item input[type="checkbox"] { width: 17px; height: 17px; margin: 0; accent-color: #006D77; }
.lote-dia { font-weight: 700; color: var(--texto-2); font-variant-numeric: tabular-nums; }
.lote-nome { min-width: 0; }
.lote-nome b { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.lote-sub { display: block; font-size: var(--t0); color: var(--texto-2); }
.lote-ja { font-weight: 800; color: #8F3A1C; }
.lote-cat { width: 100%; height: 28px; padding: 0 4px; border-radius: var(--r-pill); border: 1.5px solid transparent; font: inherit; font-size: var(--t0); font-weight: 800; color: #0B3B41;
  background: color-mix(in srgb, var(--cor, #FFFFFF) 32%, #FFFFFF); }
.lote-cat[data-vazia] { border-color: #C2563A; background: #FFFFFF; color: #8F3A1C; }
.lote-valor { text-align: right; white-space: nowrap; }
.lote-opcoes { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }
}

@layer escuro {
${Q} .cm-saldo { background: #0F4148; }
${Q} .cm-env { background: #F4F8F7; }
${Q} .cm-dia { background: #17363C; color: #E4F1F3; }
${Q} .cm-dia[data-nivel="1"] { background: #1F4A4E; } ${Q} .cm-dia[data-nivel="2"] { background: #2C6A6A; } ${Q} .cm-dia[data-nivel="3"] { background: #3E918C; color: #04181B; }
${Q} .cm-dia[data-nivel="4"] { background: #83C5BE; color: #04181B; }
${Q} .cm-cal-leg i { background: #17363C; } ${Q} .cm-cal-leg i[data-nivel="1"] { background: #1F4A4E; } ${Q} .cm-cal-leg i[data-nivel="2"] { background: #2C6A6A; }
${Q} .cm-cal-leg i[data-nivel="3"] { background: #3E918C; } ${Q} .cm-cal-leg i[data-nivel="4"] { background: #83C5BE; }
${Q} .cm-dia[aria-pressed="true"] { box-shadow: inset 0 0 0 3px #F4C25C; }
${Q} .cm-onde-barra > i { background: #FFFFFF; }
${Q} .cm-var[data-var="sobe"] { color: #F4A98C; } ${Q} .cm-var[data-var="desce"] { color: #9BDDB2; }
${Q} .cm-pilula[aria-pressed="true"] { background: #83C5BE; border-color: #83C5BE; color: #04181B; }
${Q} .cm-tirar, ${Q} .cm-grupo { background: #4A3D1C; color: #FFF0CC; }
${Q} .cm-tab tbody tr[data-sel] td { background: #3A3218; }
${Q} .cm-tab tbody tr[data-tipo="receita"] td { background: #132A1E; }
${Q} .cm-tab tbody tr[data-tipo="receita"]:hover td { background: #183424; }
${Q} .cm-tab tbody tr[data-tipo="receita"] td:first-child { box-shadow: inset 4px 0 0 #5FBF85; }
${Q} .cm-td-valor[data-receita] .cm-cel { color: #8FE0AE; }
${Q} .cm-cat-pilula { background: color-mix(in srgb, var(--cor) 40%, #12292E); color: #F2FAFB; }
${Q} .lote-item[data-ja] { background: #3A2A1A; } ${Q} .lote-ja { color: #F4A98C; }
${Q} .lote-cat { background: color-mix(in srgb, var(--cor, #12292E) 40%, #12292E); color: #F2FAFB; }
${Q} .lote-cat[data-vazia] { background: #12292E; color: #F4A98C; }
${Q} .cm-soltar span { background: #12292E; color: #E4F1F3; border-color: #83C5BE; }
${Q} .cm-painel { box-shadow: var(--sombra-3); }
}

@layer pintado {









}

@layer movimento {
@media (prefers-reduced-motion: reduce) { .cm-env-item, .cm-marie *, .cm-zz i { animation: none !important; } .cm-zz i { opacity: .8; } }
html[data-movimento="parado"] .cm-zz i { opacity: .8; }
}
@keyframes cm-respira { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.05); } }
@keyframes cm-respira-cabeca { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-.6px); } }
@keyframes cm-espreguica { 0%, 62%, 100% { transform: scaleX(1); } 72% { transform: scaleX(1.12) scaleY(.92); } 84% { transform: scaleX(1.06) scaleY(.96); } }
@keyframes cm-patas { 0%, 62%, 100% { transform: translateX(0); } 72%, 84% { transform: translateX(-9px); } }
@keyframes cm-cabeca-sobe { 0%, 62%, 100% { transform: translate(0, 0) rotate(0); } 72% { transform: translate(-6px, -5px) rotate(-8deg); } 84% { transform: translate(-3px, -2px) rotate(-3deg); } }
@keyframes cm-rabo { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-10deg); } }
@keyframes cm-zz { 0% { opacity: 0; transform: translate(0, 0); } 30% { opacity: 1; } 100% { opacity: 0; transform: translate(7px, -13px); } }
@keyframes cm-balanca { 0%, 100% { transform: rotate(-1.6deg); } 50% { transform: rotate(1.6deg); } }
@keyframes cm-carimba { 0% { transform: rotate(-24deg) scale(2.2); opacity: 0; } 60% { opacity: 1; } 100% { transform: rotate(-8deg) scale(1); opacity: 1; } }
.resumo-lancar { display: none; }
.cm-painel .resumo-lancar { display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; min-height: 28px; margin: 0 0 6px; padding: 2px 8px; border-radius: var(--r-sm); background: transparent; color: var(--texto-2); font: 700 .82rem var(--fonte); }
.cm-painel .resumo-lancar:hover { background: var(--trilho); color: var(--texto); }
`;var Ye='.cc[data-largo="1"][data-casa-larga="1"]';var sn=`
@layer base {
${Ye} { display: block; }
${Ye} > #app-conteudo { max-width: none; margin: 0; min-height: 100vh; padding: 0; background: transparent; border-radius: 0; box-shadow: none; overflow: hidden; }
${Ye} #app-nav { display: none; }
${Ye} .toast { left: 50%; transform: translateX(-50%); width: auto; max-width: 520px; bottom: 84px; }
.cl { --grama: calc(min(100vh, 62.5vw) * .1133); position: relative; height: 100vh; overflow: hidden; display: grid; place-items: end center; background: linear-gradient(180deg, #A9D8E6 0, #E4F3F5 calc(100% - var(--grama)), #A8D49A calc(100% - var(--grama))); }
.cl[data-periodo="tarde"] { background: linear-gradient(180deg, #F3B99B 0, #F8D9C4 55%, #F6ECE4 calc(100% - var(--grama)), #A8D49A calc(100% - var(--grama))); }
.cl[data-periodo="noite"] { background: linear-gradient(180deg, #0B1C2E 0, #23476A calc(100% - var(--grama)), #A8D49A calc(100% - var(--grama))); }
.cl-palco { position: relative; width: min(100vw, calc(100vh * 1.6)); aspect-ratio: 1440 / 900; transform-origin: 0 0; transition: transform .48s cubic-bezier(.55,0,.3,1); container-type: inline-size; }
.cl-svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.cl-comodo, .cl-ponto { position: absolute; z-index: 2; border-radius: var(--r-sm); background: transparent; cursor: pointer; }
.cl-comodo:hover { background: rgba(255,255,255,.08); box-shadow: inset 0 0 0 3px rgba(226,149,120,.9); }
.cl-comodo:focus-visible, .cl-ponto:focus-visible, .cl-bola:focus-visible { outline: 3px solid #E29578; outline-offset: 2px; }
.cl-ponto:hover { background: rgba(255,255,255,.18); }
.cl-quintal { z-index: 1; border-radius: 0; }
.cl-quintal:hover { background: transparent; }
.cl-vivo { position: absolute; z-index: 3; pointer-events: none; padding: .25cqi .7cqi .3cqi; border-radius: .7cqi; background: #FFFDF8; border: 1.5px solid #EBC9B6; box-shadow: var(--sombra-papel-2); font-size: clamp(10px, .9cqi, 14px); font-weight: 800; color: #22323A; white-space: nowrap; }
.cl-vivo[data-destaque] { border-color: #E29578; }
.cl-vivo[data-alerta] { border-color: #C2342A; background: #FFF4F1; color: #8F2A20; }
.cl-postit, .cl-lista { position: absolute; z-index: 3; display: flex; flex-direction: column; gap: 2px; padding: .5cqi .4cqi; box-shadow: var(--sombra-papel-2); }
.cl-postit { background: #FFF2A8; transform: rotate(-3deg); }
.cl-lista { background: #FFFFFF; border: 1px solid #D9E2E5; transform: rotate(4deg); }
.cl-postit-item, .cl-lista-item { display: block; width: 100%; padding: 1px 2px; border-radius: var(--r-xxs); text-align: left; font-family: var(--fonte-titulo); font-size: clamp(9px, .78cqi, 13px); line-height: 1.15; color: #22323A; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cl-postit-item:hover, .cl-lista-item:hover { background: rgba(0,0,0,.06); text-decoration: line-through; text-decoration-thickness: 2px; }
.cl-postit-vazio { font-family: var(--fonte-titulo); font-size: clamp(9px, .75cqi, 12px); color: #56666B; }
.cl-roupa { position: absolute; z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 2px; background: transparent; }
.cl-roupa-pano { display: block; width: 46%; aspect-ratio: 1 / 1.1; border: 1.5px solid #22323A; border-radius: var(--r-xxs) var(--r-xxs) var(--r-sm) var(--r-sm); background: #83C5BE; transform-origin: 50% 0; }
.cl-roupa[data-k="1"] .cl-roupa-pano { background: #FFDDD2; } .cl-roupa[data-k="2"] .cl-roupa-pano { background: #9CC5EA; } .cl-roupa[data-k="3"] .cl-roupa-pano { background: #FFE07A; }
.cl-roupa:hover .cl-roupa-pano { transform: rotate(6deg); }
.cl-roupa-txt { max-width: 100%; font-family: var(--fonte-titulo); font-size: clamp(9px, .72cqi, 12px); font-weight: 700; line-height: 1.1; color: #22323A; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cl-bola { position: absolute; z-index: 4; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #9CC5EA, #2F6FB5 60%); border: 2px solid #22323A; cursor: grab; touch-action: none; transition: left .15s; }
.cl-mia { transition: transform .9s cubic-bezier(.4,0,.3,1); }
.cl-saudacao { position: absolute; z-index: 3; pointer-events: none; }
.cl-h1 { margin: 0; font-family: var(--fonte-titulo); font-weight: 800; font-size: clamp(30px, 3.3cqi, 54px); line-height: 1; color: #0B3B41; }
.cl-data { margin: 2px 0 0; font-family: var(--fonte-titulo); font-size: clamp(12px, 1.05cqi, 17px); color: #7A2E14; }
.cl[data-periodo="noite"] .cl-h1 { color: #FFF3D6; } .cl[data-periodo="noite"] .cl-data { color: #FFD3C2; }
.cl-hoje { position: absolute; z-index: 3; width: 18%; min-width: 190px; padding: .7cqi .8cqi .4cqi; border-radius: var(--r-md); background-color: #C79A63; background-image: radial-gradient(#B98A55 1.2px, transparent 1.4px); background-size: 9px 9px; border: 5px solid #8C5A3C; box-shadow: var(--sombra-papel-3); }
.cl-hoje-t { margin: 0 0 4px; font-family: var(--fonte-titulo); font-weight: 800; font-size: clamp(20px, 1.8cqi, 28px); line-height: 1; color: #FFFFFF; text-shadow: 0 1px 0 rgba(0,0,0,.3); }
.cl-hoje ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.cl-bilhete { position: relative; display: block; width: 100%; margin: 0; padding: 5px 8px 5px 10px; text-align: left; background: #FFF8D9; font-family: var(--fonte-titulo); font-size: clamp(11px, .9cqi, 14px); line-height: 1.2; color: #22323A; box-shadow: var(--sombra-papel-1); }
.cl-bilhete::before { content: ""; position: absolute; left: 50%; top: -4px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: #C2342A; }
.cl-bilhete[data-c="1"] { background: #FFE4EC; transform: rotate(1deg); } .cl-bilhete[data-c="2"] { background: #E1F2EF; transform: rotate(-1deg); } .cl-bilhete[data-c="3"] { background: #EEE8F8; }
.cl-bilhete[data-destaque] { box-shadow: 0 0 0 2px #E29578, 0 5px 8px -5px rgba(0,0,0,.45); }
button.cl-bilhete:hover { transform: translateY(-1px) rotate(0); }
.cl-calmo { margin-top: 2px; }
.cl-mais { background: transparent; font-size: 12px; font-weight: 800; color: #FFFFFF; text-decoration: underline; padding: 2px 0; }
.cl-barra { position: absolute; z-index: 5; right: 18px; bottom: 14px; display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
.cl-barra .btn { min-height: 42px; box-shadow: var(--sombra-papel-2); }
.cl-barra .btn-secundario { background: var(--superficie); }
.cl-barra .cl-icone { width: 42px; padding: 0; justify-content: center; }
.cl-barra kbd { margin-left: 4px; padding: 1px 6px; border-radius: var(--r-xs); background: rgba(255,255,255,.6); font: 800 .72rem var(--fonte); }
.cl[data-zoom] .cl-hoje, .cl[data-zoom] .cl-saudacao, .cl[data-zoom] .cl-barra, .cl[data-zoom] .cl-vivo { opacity: 0; transition: opacity .2s; }
/* movimento */
.cl-nuvem { animation: cl-vento 40s ease-in-out infinite alternate; }
.cl-fumo { animation: cl-fumo 3.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.cl-d1 { animation-delay: .5s; } .cl-d2 { animation-delay: 1s; }
.cl-estrela { animation: cl-brilha 3s ease-in-out infinite; }
.cl-luzinha { animation: cl-pisca 1.2s steps(2) infinite; }
.cl-rabo { transform-box: fill-box; transform-origin: 0 60%; animation: cl-abana 1.4s ease-in-out infinite alternate; }
.cl-rabo-gata { transform-box: fill-box; transform-origin: 0 100%; animation: cl-abana 3s ease-in-out infinite alternate; }
/* v17.30: a\xE7\xF5es ao acaso da Mia e da Marie na casa larga */
.cl-ator { transform-box: fill-box; transform-origin: 50% 100%; }
.cl-bolha { opacity: 0; }
.cl-ator[data-acao="late"] .cl-bolha, .cl-ator[data-acao="miau"] .cl-bolha { animation: cl-bolha 1.8s ease both; }
@keyframes cl-bolha { 0% { opacity: 0; transform: translateY(6px); } 15%, 80% { opacity: 1; transform: none; } 100% { opacity: 0; } }
.cl-ator-mia[data-acao="pula"], .cl-ator-mia[data-acao="late"] { animation: cl-pula .6s ease-in-out 2; }
@keyframes cl-pula { 0%, 100% { transform: translateY(0); } 45% { transform: translateY(-18px); } }
.cl-ator-mia[data-acao="abana"] { animation: cl-remexe .25s ease-in-out 7; }
@keyframes cl-remexe { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(4deg); } }
.cl-ator-marie[data-acao="espreguica"] { animation: cl-estica 2.6s ease-in-out both; }
@keyframes cl-estica { 0%, 100% { transform: scale(1, 1); } 30%, 62% { transform: scale(1.14, .86); } 80% { transform: scale(.97, 1.04); } }
.cl-ator-marie[data-acao="rabo"] .cl-rabo-gata { animation: cl-rabo-rapido .7s ease-in-out 3; }
@keyframes cl-rabo-rapido { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-24deg); } }
.cl-disco { transform-box: fill-box; transform-origin: center; animation: cl-gira 4s linear infinite; }
.cl-fogo { transform-box: fill-box; transform-origin: center; animation: cl-fogo 2.4s ease-out infinite; }
@keyframes cl-vento { from { transform: translateX(-18px); } to { transform: translateX(24px); } }
@keyframes cl-fumo { 0%, 100% { transform: translateY(0) scale(1); opacity: .95; } 50% { transform: translateY(-8px) scale(1.12); opacity: .7; } }
@keyframes cl-brilha { 50% { opacity: .35; } }
@keyframes cl-pisca { 50% { opacity: .3; } }
@keyframes cl-abana { from { transform: rotate(-10deg); } to { transform: rotate(12deg); } }
@keyframes cl-gira { to { transform: rotate(360deg); } }
@keyframes cl-fogo { 0% { transform: scale(.2); opacity: 0; } 30% { opacity: 1; } 100% { transform: scale(1.3); opacity: 0; } }
/* a nuvem e os bichos na transla\xE7\xE3o usam transform no grupo: n\xE3o animar o grupo da Mia por CSS de translateX quando parado */
html[data-movimento="parado"] .cl *, html[data-movimento="parado"] .cl-palco { animation: none !important; transition: none !important; }
@media (prefers-reduced-motion: reduce) { .cl *, .cl-palco { animation: none !important; transition: none !important; } }
}
@layer escuro {
html[data-tema="escuro"] .cl-vivo { background: #FFFDF8; color: #22323A; }
}
`;var co=ha(xo(),1);var ua=ha(Ma(),1),ko=(e,a)=>e&&Array.isArray(e[a])?e[a]:[],Lo=(e,...a)=>a.some(o=>o&&Wa(o).includes(e)),ne=e=>e&&String(e).length===10?ke(e):e&&String(e).length===7?Ba(e):"";function Ws(e,a){let o=String(a||"").trim();if(o.length<2)return[];let t=o.match(/^(?:r\$\s*)?(\d{1,6}(?:[.,]\d{1,2})?)\s+(.{2,60})$/i);if(t){let s=Math.round(Number(t[1].replace(",","."))*100);if(!(s>0))return[];let n=t[2].trim(),d=Wa(n),g=wo(e).filter(l=>!l.oculta),h=g.find(l=>Wa(l.nome)===d)||g.find(l=>Wa(l.nome).startsWith(d)||d.startsWith(Wa(l.nome)))||g.find(l=>l.id==="outros")||g[0];if(!h)return[];let f=Wa(h.nome)===d?"":n.charAt(0).toUpperCase()+n.slice(1);return[{id:"acao-gasto",tipo:"gasto",texto:`Lan\xE7ar ${$a(s)} em ${h.nome}${f?`: ${f}`:""}`,sub:"gasto de hoje",item:{tipo:"gasto",valor:s,tag:h.id,...f?{obs:f}:{}}}]}return/^\d/.test(o)||o.length>60?[]:ko(e,"mercado").some(s=>!s.comprado&&Wa(s.texto)===Wa(o))?[]:[{id:"acao-mercado",tipo:"mercado",texto:`P\xF4r "${o}" na lista do mercado`,sub:"lista de compras",item:{texto:o}}]}function Zs(e,a){let o=Wa(a.trim());if(o.length<2)return[];let t=wo(e),i=[],s=ko(e,"lancamentos").filter(l=>Lo(o,l.obs,l.tipo==="gasto"?Xa(t,l.tag).nome:"",$a(l.valor))).sort((l,k)=>String(k.data).localeCompare(String(l.data))).slice(0,8).map(l=>({id:"l"+l.id,texto:`${l.obs||(l.tipo==="gasto"?Xa(t,l.tag).nome:"Receita")} \xB7 ${$a(l.valor)}`,sub:`${ne(l.data)}${l.quem?` \xB7 ${l.quem}`:""}`,destino:"mes",ym:Z(l.data)}));s.length&&i.push({id:"contas",nome:"Contas",Icone:we,itens:s});let n=ko(e,"lousa").filter(l=>l&&Lo(o,l.texto)).sort((l,k)=>String(k.data).localeCompare(String(l.data))).slice(0,8).map(l=>({id:"r"+l.id,texto:l.texto,sub:`${ne(l.data)}${l.quem?` \xB7 ${l.quem}`:""}${l.feito?" \xB7 riscado":""}`,destino:"lousa"}));n.length&&i.push({id:"lousa",nome:"Lousa",Icone:be,itens:n});let d=ko(e,"caderninho").filter(l=>Lo(o,l.texto,l.titulo)).sort((l,k)=>String(k.data).localeCompare(String(l.data))).slice(0,8).map(l=>({id:"c"+l.id,texto:l.texto||l.titulo,sub:`${ne(l.data)} \xB7 ${l.tipo==="frase"?"frase":l.tipo==="primeira"?"primeira vez":"momento"}`,destino:"caderninho"})),g=ko(e,"caeNotas").filter(l=>l.area!=="lazer"&&Lo(o,l.titulo,l.texto)).sort((l,k)=>String(k.data||"").localeCompare(String(l.data||""))).slice(0,8).map(l=>({id:"n"+l.id,texto:l.titulo,sub:`${ne(l.data)} \xB7 ${l.area==="escola"?"escola":"sa\xFAde"}`,destino:l.area==="escola"?"escola":"saude"}));(d.length||g.length)&&i.push({id:"cae",nome:"Ca\xEA",Icone:wr,itens:[...d,...g].slice(0,8)});let h=ko(e,"caeNotas").filter(l=>l.area==="lazer"&&Lo(o,l.titulo,l.texto,l.lugar)).sort((l,k)=>String(k.data||"").localeCompare(String(l.data||""))).slice(0,8).map(l=>({id:"z"+l.id,texto:l.titulo,sub:l.tipo==="ideia"?"ideia no mural":`passeio${l.data?` \xB7 ${ne(l.data)}`:""}`,destino:"lazer"}));h.length&&i.push({id:"lazer",nome:"Lazer",Icone:Er,itens:h});let f=ko(e,"mercado").filter(l=>Lo(o,l.texto)).sort((l,k)=>(Number(k.em)||0)-(Number(l.em)||0)).slice(0,8).map(l=>({id:"m"+l.id,texto:l.texto,sub:l.comprado?"j\xE1 comprado":"na lista",destino:"mercado"}));return f.length&&i.push({id:"mercado",nome:"Mercado",Icone:kr,itens:f}),i}function ln({cofre:e,aoIr:a,aoFechar:o,aoAcao:t}){let[i,s]=(0,co.useState)(""),n=(0,co.useRef)(null);(0,co.useEffect)(()=>{let f=setTimeout(()=>n.current&&n.current.focus(),60);return()=>clearTimeout(f)},[]);let d=(0,co.useMemo)(()=>Zs(e,i),[e,i]),g=(0,co.useMemo)(()=>t?Ws(e,i):[],[e,i,t]),h=d.reduce((f,l)=>f+l.itens.length,0);return(0,ua.jsxs)(Za,{titulo:"Buscar na casita",aoFechar:o,children:[(0,ua.jsxs)("label",{className:"busca-campo",children:[(0,ua.jsx)(yr,{size:18,"aria-hidden":"true"}),(0,ua.jsx)("input",{ref:n,type:"search",value:i,placeholder:"Gasto, recado, frase do Ca\xEA, ideia, item\u2026","aria-label":"O que procurar",onChange:f=>s(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(g.length?(f.preventDefault(),t(g[0])):h&&(f.preventDefault(),a(d[0].itens[0])))}})]}),g.length?(0,ua.jsxs)("section",{className:"busca-grupo busca-fazer","aria-label":"Fazer agora",children:[(0,ua.jsxs)("h3",{className:"busca-grupo-t",children:[(0,ua.jsx)(Cr,{size:15,"aria-hidden":"true"})," Fazer agora"]}),(0,ua.jsx)("ul",{className:"busca-lista",children:g.map(f=>(0,ua.jsx)("li",{children:(0,ua.jsxs)("button",{type:"button",className:"busca-item busca-acao","data-tipo":f.tipo,onClick:()=>t(f),children:[(0,ua.jsx)("span",{className:"busca-item-t",children:f.texto}),(0,ua.jsxs)("span",{className:"busca-item-s",children:[f.sub," \xB7 Enter"]})]})},f.id))})]}):null,i.trim().length<2?(0,ua.jsxs)("p",{className:"legenda",style:{marginTop:10},children:["Procura em Contas, Lousa, Ca\xEA, Lazer e Mercado. Enter abre o primeiro resultado.",t?' Tamb\xE9m faz: "50 mercado" lan\xE7a o gasto, "leite" vai para a lista.':""]}):h?d.map(f=>(0,ua.jsxs)("section",{className:"busca-grupo","aria-label":f.nome,children:[(0,ua.jsxs)("h3",{className:"busca-grupo-t",children:[(0,ua.jsx)(f.Icone,{size:15,"aria-hidden":"true"})," ",f.nome]}),(0,ua.jsx)("ul",{className:"busca-lista",children:f.itens.map(l=>(0,ua.jsx)("li",{children:(0,ua.jsxs)("button",{type:"button",className:"busca-item",onClick:()=>a(l),children:[(0,ua.jsx)("span",{className:"busca-item-t",children:l.texto}),l.sub?(0,ua.jsx)("span",{className:"busca-item-s",children:l.sub}):null]})},l.id))})]},f.id)):g.length?null:(0,ua.jsxs)("p",{className:"legenda",style:{marginTop:10},children:['Nada com "',i.trim(),'".']})]})}var cn=`
@layer base {
.busca-campo { display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 14px; border-radius: var(--r-lg); border: 1.5px solid var(--borda); background: var(--superficie); color: var(--texto-2); }
.busca-campo:focus-within { border-color: var(--acao); box-shadow: 0 0 0 3px rgba(0,109,119,.18); }
.busca-campo input { flex: 1; min-width: 0; border: 0; background: transparent; font: inherit; font-size: var(--t3); color: var(--texto); outline: none; }
.busca-grupo { margin-top: 14px; }
.busca-grupo-t { display: flex; align-items: center; gap: 6px; margin: 0 0 4px; font-size: var(--t0); font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--texto-2); }
.busca-lista { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
.busca-item { display: flex; flex-direction: column; align-items: flex-start; gap: 1px; width: 100%; min-height: 44px; padding: 7px 10px; border-radius: var(--r-md); text-align: left; background: transparent; }
.busca-item:hover { background: var(--trilho); }
.busca-acao { background: var(--acao-clara); border: 1.5px solid var(--acao-suave); }
.busca-acao .busca-item-t { color: var(--acao); }
.busca-item-t { font-weight: 700; color: var(--texto); }
.busca-item-s { font-size: var(--t1); color: var(--texto-2); }
.inicio-botoes { display: flex; gap: 8px; flex-shrink: 0; }
}
`;var Oo=ha(xo(),1),Ha=ha(Ma(),1),Ge={},Xe={},pn={comodos:()=>import("./parte-IKAM7CSB.js"),mesa:()=>import("./parte-ZC24LVJN.js")};function He(e){return Ge[e]||(Ge[e]=pn[e]().then(a=>(Xe[e]=a,a)).catch(()=>new Promise(a=>setTimeout(a,1200)).then(()=>pn[e]()).then(a=>(Xe[e]=a,a))).catch(a=>{throw delete Ge[e],a})),Ge[e]}function Qs({aoTentar:e}){return(0,Ha.jsxs)("div",{className:"parte-faltou",role:"alert",children:[(0,Ha.jsx)("p",{children:(0,Ha.jsx)("b",{children:"Esta parte da casita ainda n\xE3o foi baixada."})}),(0,Ha.jsx)("p",{className:"apoio",children:"Parece que a internet caiu. Quando voltar, toque em tentar de novo."}),(0,Ha.jsx)("button",{type:"button",className:"btn btn-principal",onClick:e,children:"Tentar de novo"})]})}function _t(e,a){let o=()=>(0,Ha.jsx)(Qs,{aoTentar:()=>{try{window.location.reload()}catch(s){}}}),t=Oo.default.lazy(()=>He(e).then(s=>({default:s[a]}),()=>({default:o})));function i(s){let[n]=(0,Oo.useState)(()=>Xe[e]&&Xe[e][a]||t);return(0,Ha.jsx)(Oo.Suspense,{fallback:(0,Ha.jsx)("div",{className:"parte-abrindo",role:"status",children:"Abrindo\u2026"}),children:(0,Ha.jsx)(n,{...s})})}return i.displayName="Parte("+a+")",i}var dn=`
@layer base {
.parte-abrindo { padding: 48px 16px; text-align: center; color: var(--texto-2); font-weight: 600; }
.parte-faltou { margin: 32px 16px; padding: 20px; border-radius: var(--r-xl); background: var(--superficie); border: 1.5px solid var(--borda-cartao); text-align: center; }
.parte-faltou p { margin: 0 0 10px; }
}
`;var Je='.cc[data-cae-mesa="1"]',_='html[data-tema="escuro"]',al="var(--fonte-titulo)",ol="var(--fonte-titulo)",mn="clamp(300px, 25vw, 380px)",gn=`
@layer base {
${Je} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${Je}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${Je} main[data-cae-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) ${mn}; grid-template-areas: "topo topo" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 22px; align-items: start; }
${Je} .toast { left: calc(var(--casa-larg) + 28px); right: calc(${mn} + 48px); width: auto; max-width: 520px; bottom: 20px; }
.qc { display: contents; --mao: ${al}; --giz: ${ol}; }
.qc-topo { grid-area: topo; display: flex; align-items: center; gap: 14px 18px; flex-wrap: wrap; padding: 18px 0 16px; }
.qc-topo-esq { display: flex; align-items: center; gap: 14px; min-width: 0; }
.qc-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.qc-idade { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.qc-idade b { color: #9A4515; }
.qc-abas { display: flex; gap: 3px; padding: 3px; border-radius: var(--r-md); background: var(--seg-fundo); flex-wrap: wrap; }
.qc-aba { min-height: 40px; padding: 0 15px; border-radius: var(--r-md); font-size: var(--t2); font-weight: 700; color: var(--texto); }
.qc-aba:hover { background: rgba(255,255,255,.5); }
.qc-aba[aria-current="page"] { background: var(--superficie); font-weight: 800; box-shadow: var(--sombra-1); }
.qc-topo-dir { margin-left: auto; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.qc-topo-dir .btn { min-height: 42px; }
.qc kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2); font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.qc-corpo { grid-area: corpo; min-width: 0; display: flex; flex-direction: column; gap: 18px; container-type: inline-size; container-name: qccorpo; }
.qc-corpo .pergunta-dono { margin: 0; }
.qc-painel { grid-area: painel; align-self: start; position: sticky; top: 14px; max-height: calc(100vh - 28px); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin;
  display: flex; flex-direction: column; gap: 16px; padding: 2px 2px 10px; }
.qc-dupla { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 18px; align-items: start; }
.qc-dupla-larga { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); }
.qc-coluna { display: flex; flex-direction: column; gap: 18px; min-width: 0; }
@container qccorpo (max-width: 760px) { .qc-dupla { grid-template-columns: minmax(0, 1fr); } }

/* ---- cart\xF5es ---- */
.qc-cartao { position: relative; min-width: 0; background: var(--superficie); border: 1px solid var(--borda-cartao); border-radius: var(--r-xl); padding: 14px 16px; box-shadow: var(--sombra); }
.qc-cartao[data-tom="alerta"], .qc-emergencia { border: 2px solid #E9B4A2; background: #FFF8F5; color: #3B1A0E; }
.qc-cartao-suave { background: #F4F8F9; }
.qc-cartao-cab { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
.qc-cartao-ico { display: inline-flex; color: var(--acao); }
.qc-h2 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; color: var(--texto); }
.qc-emergencia .qc-h2 { color: #8F3A1C; }
.qc-h2-grande { font-size: var(--t4); }
.qc-cartao-acao { margin-left: auto; display: inline-flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.qc-mini { margin: 0; font-size: var(--t1); font-weight: 600; color: var(--texto-2); line-height: 1.4; }
.qc-vazio { margin: 4px 0; font-size: var(--t15); color: var(--texto-2); line-height: 1.45; }
.qc-link, .qc-link-forte { padding: 0 2px; font-size: inherit; font-weight: 800; color: var(--acao); text-decoration: underline; text-underline-offset: 2px; }
.qc-link-forte { color: var(--texto); }
.qc-botoes { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 10px; }
.qc-cartao-acao .qc-botoes, .qc-cartao-acao.qc-botoes { margin-top: 0; }
.qc-ini { display: inline-grid; place-items: center; border-radius: 50%; color: #FFFFFF; font-weight: 900; flex: 0 0 auto; line-height: 1; }
.qc-mao-cor { font-family: var(--fonte-titulo); font-size: 0.95em; font-weight: 700; color: #9A4515; }
.qc-giz { font-family: var(--fonte-titulo); font-weight: 800; }
.qc-giz-medio { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; line-height: 1; color: var(--texto); }
.qc-giz-grande { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; line-height: .95; color: var(--texto); }
.qc-giz-enorme { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t6); font-weight: 800; line-height: .9; color: var(--texto); }
.qc-dica { position: relative; display: inline-flex; align-items: center; vertical-align: middle; }
.qc-dica-btn { display: inline-grid; place-items: center; width: 22px; height: 22px; border-radius: 50%; border: 1.5px solid var(--borda); background: var(--superficie); color: var(--texto-2); font: 800 .78rem var(--fonte); cursor: pointer; }
.qc-dica-btn:hover, .qc-dica[data-aberta] .qc-dica-btn { background: #0B3B41; color: #FFFFFF; border-color: #0B3B41; }
.qc-dica-texto { position: absolute; z-index: 6; top: calc(100% + 8px); right: 0; width: min(300px, 70vw); padding: 10px 12px; border-radius: var(--r-md); background: #0B3B41; color: #FFFFFF; font-size: var(--t1); font-weight: 600; line-height: 1.4; box-shadow: var(--sombra-papel-3); }
.qc-dica-texto[hidden] { display: none; }
.qc-cartao-cab .qc-dica { margin-left: auto; }
.qc-cartao-acao + .qc-dica, .qc-cartao-cab .qc-dica + .qc-cartao-acao { margin-left: 8px; }
.qc-dica-linha { display: flex; align-items: center; gap: 8px; margin: 6px 0 0; font-size: var(--t1); color: var(--texto-2); }
/* v17.22: n\xFAmeros e dinheiro sempre em Inter; o giz fica para t\xEDtulos de parede, a letra de m\xE3o para o que algu\xE9m escreveu. */
.qc-num-medio { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; line-height: 1.1; letter-spacing: -.02em; font-variant-numeric: tabular-nums; color: var(--texto); }
.qc-num-grande { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; line-height: 1.05; letter-spacing: -.02em; font-variant-numeric: tabular-nums; color: var(--texto); }
.qc-num-enorme { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t6); font-weight: 800; line-height: 1; letter-spacing: -.02em; font-variant-numeric: tabular-nums; color: var(--texto); }
.qc-lista { margin: 0; padding: 0; list-style: none; }
.qc-lista > li { border-top: 1px solid var(--trilho); }
.qc-lista > li:first-child { border-top: 0; }
.qc-linha-simples { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 0; font-size: var(--t2); }
.qc-linha-btn { display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%; padding: 8px 2px; text-align: left; font-size: var(--t2); color: var(--texto); border-radius: var(--r-sm); }
.qc-linha-btn:hover { background: var(--fundo); }
.qc-chip-dias { flex-shrink: 0; padding: 2px 9px; border-radius: var(--r-pill); background: #E7F4F2; color: #0B5F67; font-size: var(--t0); font-weight: 800; }
.qc-chip-ok { flex-shrink: 0; padding: 2px 9px; border-radius: var(--r-pill); background: #E3F1DA; color: #1E5E37; font-size: var(--t0); font-weight: 800; }
.qc-linha-form { display: flex; gap: 8px; align-items: flex-end; flex-wrap: wrap; margin-top: 10px; }
.qc-linha-form > div, .qc-linha-form > label { flex: 1 1 140px; min-width: 0; }
.qc-linha-form .btn { min-height: 48px; }
.qc-rodape-cartao { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin: 10px 0 0; }
.qc-rotulo-sel { display: flex; flex-direction: column; min-width: 0; }
.qc-linha-edit { display: flex; flex-direction: column; gap: 6px; padding: 10px; border-radius: var(--r-md); border: 1px solid var(--borda-cartao); }
.qc-rotina-edit { display: grid; grid-template-columns: 44px 1fr 110px 130px auto; align-items: end; gap: 8px; }
.qc-item-edit { display: grid; grid-template-columns: 120px 1fr auto auto; gap: 8px; align-items: end; }
.qc-item-edit:has(> :nth-child(5)) { grid-template-columns: 110px 1fr 110px 150px auto; }
.qc-item-edit > select { min-height: 48px; }
.qc-check-linha { display: flex; align-items: center; gap: 8px; margin-top: 8px; font-size: var(--t15); font-weight: 600; }
.qc-quarto { position: relative; border-radius: var(--r-xl); padding: 16px 16px 30px; color: #3B2410;
  background: radial-gradient(circle at 12px 12px, rgba(131,197,190,.3) 2.2px, transparent 2.6px) 0 0/28px 28px, linear-gradient(180deg, #FFF9F3, #FFF1E6); border: 1px solid #F1DCCD; }
.qc-quarto .qc-mini { color: #6B5240; }
.qc-quarto .qc-h2 { color: #3B2410; }
.qc-rodape-madeira { position: absolute; left: 0; right: 0; bottom: 0; height: 16px; border-radius: 0 0 var(--r-xl) var(--r-xl); background: repeating-linear-gradient(90deg, #D9B48C 0 46px, #CFA57A 46px 48px); }
.qc-caixa { display: inline-grid; place-items: center; flex: 0 0 22px; width: 22px; height: 22px; border-radius: var(--r-sm); border: 2px solid var(--acao); background: var(--superficie); color: #FFFFFF; }
.qc-caixa[data-ok], [aria-checked="true"] > .qc-caixa { background: var(--acao); }
.qc-caixa-tracejada { border-style: dashed; opacity: .6; }
.qc-caixa-btn { display: grid; place-items: center; min-width: 32px; min-height: 32px; border-radius: var(--r-sm); }
.qc-selo-azul, .qc-selo-verde, .qc-selo-amarelo, .qc-selo-alerta { margin: 0 0 4px; font-size: var(--t0); font-weight: 900; letter-spacing: .07em; text-transform: uppercase; }
.qc-selo-azul { color: #1F5A7A; } .qc-selo-verde { color: #006D77; } .qc-selo-amarelo { color: #7A5300; } .qc-selo-alerta { color: #8F3A1C; }

/* ---- o dia numa r\xE9gua ---- */
.qc-proximo { padding: 3px 10px; border-radius: var(--r-pill); background: #FFF1EC; color: #8F3A1C; font-size: var(--t1); font-weight: 800; }
.qc-regua-medida { margin: 0 22px; }
.qc-regua-area { position: relative; height: 196px; margin: 4px 0 0; }
.qc-regua-linha { position: absolute; left: 0; right: 0; top: 46px; border-top: 2px dotted #9DBFC6; }
.qc-regua-h { position: absolute; top: 0; transform: translateX(-50%); font-size: var(--t0); font-weight: 800; color: var(--texto-2); }
.qc-regua-faixa { position: absolute; top: 33px; height: 26px; border-radius: var(--r-sm); background: #D7E9EE; color: #1F5A7A; font-size: var(--t1); font-weight: 800; display: flex; align-items: center; padding: 0 8px; overflow: hidden; white-space: nowrap; }
.qc-marco { position: absolute; top: 40px; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 2px; max-width: 110px; font-size: var(--t0); line-height: 1.15; text-align: center; color: var(--texto-2); }
.qc-marco-haste { height: calc(var(--fila) * 30px - 4px); border-left: 1.5px dotted #9DBFC6; }
.qc-marco b { font-weight: 800; color: var(--texto); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
.qc-marco-bola { width: 12px; height: 12px; border-radius: 50%; background: #83C5BE; box-shadow: 0 0 0 3px var(--superficie); }
.qc-marco[data-tipo="dose"] .qc-marco-bola { width: 16px; height: 16px; background: var(--superficie); border: 3px solid #E29578; box-sizing: border-box; }
.qc-marco[data-tipo="dose"] b { color: #8F3A1C; }
.qc-marco[data-tipo="dose"] .qc-marco-bola, .qc-marco[data-tipo="dada"] .qc-marco-bola, .qc-marco[data-tipo="pessoa"] .qc-marco-bola { margin: -2px 0 2px; }
.qc-marco[data-tipo="dada"] .qc-marco-bola, .qc-marco[data-tipo="pessoa"] .qc-marco-bola { width: 16px; height: 16px; background: var(--cor, #23744A); }
.qc-marco[data-tipo="dada"] b { color: var(--cor, #23744A); }
.qc-marco[data-tipo="evento"] .qc-marco-bola { background: #B5561A; border-radius: var(--r-xxs); transform: rotate(45deg); }
.qc-marco-sub { font-size: var(--t00); color: var(--texto-2); white-space: nowrap; }
.qc-regua-lista { list-style: none; margin: 8px 0 0; padding: 0 0 0 4px; display: flex; flex-direction: column; gap: 2px; }
.qc-marco-l { display: grid; grid-template-columns: 44px 16px minmax(0, 1fr); align-items: center; column-gap: 6px; padding: 3px 0; font-size: var(--t1); color: var(--texto-2); }
.qc-marco-l b { color: var(--texto); font-weight: 800; overflow-wrap: anywhere; }
.qc-marco-l .qc-marco-sub { grid-column: 3; white-space: normal; }
.qc-marco-l-h { font-weight: 800; font-variant-numeric: tabular-nums; }
.qc-marco-l .qc-marco-bola { justify-self: center; margin: 0; }
.qc-marco-l[data-tipo="dose"] b { color: #8F3A1C; }
.qc-marco-l[data-tipo="dada"] b { color: var(--cor, #23744A); }
.qc-marco-l[data-passou] .qc-marco-bola { opacity: .5; }
.qc-regua-agora { position: relative; height: 18px; border-top: 2.5px solid #D2392E; margin: 8px 0 2px; }
.qc-regua-agora span { position: absolute; top: -10px; left: 0; padding: 1px 6px; border-radius: var(--r-sm); background: #C2342A; color: #FFFFFF; font-size: var(--t00); font-weight: 900; }
.qc-agora { position: absolute; top: 18px; height: 170px; border-left: 2.5px solid #D2392E; }
.qc-agora-rot { position: absolute; top: 14px; transform: translateX(-50%); padding: 1px 6px; border-radius: var(--r-sm); background: #C2342A; color: #FFFFFF; font-size: var(--t00); font-weight: 900; white-space: nowrap; }

/* ---- caixinha de hoje ---- */
.qc-caixinha { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; padding: 14px 12px 12px; border-radius: var(--r-lg); background: linear-gradient(180deg, #EAF4F2, #DCEDEA); border: 1.5px solid #B9D8D3; }
.qc-divisao { position: relative; min-width: 0; min-height: 132px; padding: 14px 10px 10px; border-radius: var(--r-md); background: #F6F2EC; border: 2px solid var(--tampa); color: #22323A; }
.qc-divisao[data-aberta] { background: #FFFFFF; }
.qc-tampa { position: absolute; left: 6px; right: 6px; top: -10px; height: 14px; border-radius: var(--r-sm) var(--r-sm) var(--r-xxs) var(--r-xxs); background: var(--tampa); box-shadow: var(--sombra-1); transform-origin: left bottom; }
.qc-divisao[data-aberta] .qc-tampa { transform: rotate(-7deg) translateY(-5px); }
.qc-divisao-nome { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; line-height: 1; color: #0B3B41; }
.qc-dose { padding: 7px 0; border-top: 1px dashed #E3D7C6; }
.qc-dose-nome { margin: 0; font-size: var(--t15); font-weight: 800; overflow-wrap: anywhere; overflow-wrap: anywhere; hyphens: auto; }
.qc-divisao .qc-mini { color: #4D6A70; }
.qc-dose-dada { display: flex; align-items: center; gap: 5px; margin: 4px 0 0; font-size: var(--t0); font-weight: 800; }
.qc-dar { margin-top: 4px; min-height: 34px; }
.qc-atraso { margin: 3px 0 0; font-size: var(--t0); font-weight: 800; color: #8F3A1C; }
.qc-sos { display: flex; align-items: center; gap: 10px; margin-top: 10px; padding: 9px 12px; border-radius: var(--r-md); background: #FFF6E3; border: 1px solid #F1D9A6; color: #4E3A10; }
.qc-sos p { margin: 0; flex: 1; font-size: var(--t15); line-height: 1.35; }
.qc-sos .btn { flex-shrink: 0; }

/* ---- mochila ---- */
.qc-mochila-corpo { display: flex; gap: 12px; align-items: flex-start; }
.qc-checks { flex: 1; min-width: 0; margin: 0; padding: 0; list-style: none; }
.qc-checks > li { border-top: 1px solid var(--trilho); }
.qc-checks > li:first-child { border-top: 0; }
.qc-check { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 40px; padding: 6px 2px; text-align: left; font-size: var(--t2); color: var(--texto); border-radius: var(--r-sm); }
.qc-check:hover { background: var(--fundo); }
.qc-check[aria-checked="true"] .qc-check-txt { text-decoration: line-through; color: var(--texto-2); }
.qc-check[data-destaque] .qc-check-txt { font-weight: 800; color: #9A4515; }
.qc-check-txt { flex: 1; min-width: 0; }
.qc-fora { display: flex; align-items: center; gap: 10px; min-height: 36px; font-size: var(--t15); color: var(--texto-2); }

/* ---- varal ---- */
.qc-varal-cartao { background: linear-gradient(180deg, var(--superficie), #FFFBF6); }
.qc-varal { position: relative; padding-top: 20px; container: qcvaral / inline-size; }
.qc-varal-fio { position: absolute; left: -6px; top: 4px; width: calc(100% + 12px); height: 26px; }
.qc-varal-fotos { position: relative; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; margin: 0; padding: 0; list-style: none; }
.qc-polaroid { position: relative; display: flex; flex-direction: column; width: 100%; padding: 9px 9px 10px; background: #FFFFFF; border: 1px solid #EEE6DA; box-shadow: var(--sombra-papel-2); transform: rotate(var(--giro)); text-align: left; color: #22323A; transition: transform .15s; }
.qc-polaroid:hover { transform: rotate(0) translateY(-3px); }
.qc-prendedor { position: absolute; left: 50%; top: -14px; width: 12px; height: 26px; margin-left: -6px; border-radius: var(--r-xxs); background: linear-gradient(90deg, #E9C79A, #D7A86E); box-shadow: var(--sombra-1); }
.qc-polaroid-foto { display: block; height: 104px; overflow: hidden; border-radius: var(--r-xxs); background: #F2EEE8; }
.qc-polaroid-foto .cad-foto { width: 100%; height: 104px; object-fit: cover; margin: 0; border-radius: 0; }
.qc-polaroid-papel { display: flex; flex-direction: column; justify-content: center; gap: 4px; height: 104px; padding: 8px; border-radius: var(--r-xxs); background: #FFF6E3; overflow: hidden; }
.qc-polaroid[data-tipo="primeira"] .qc-polaroid-papel { background: #E7F4F2; }
.qc-polaroid[data-tipo="momento"] .qc-polaroid-papel { background: #F1ECFA; }
.qc-selo { font-size: var(--t00); font-weight: 900; letter-spacing: .07em; color: #006D77; text-transform: uppercase; }
.qc-polaroid-txt { font-family: var(--fonte-titulo); font-size: var(--t2); line-height: 1.12; overflow: hidden; overflow-wrap: anywhere; hyphens: auto; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; }
.qc-polaroid[data-tipo="frase"] .qc-polaroid-txt { color: #9A4515; font-weight: 700; }
.qc-polaroid-legenda { margin-top: 6px; font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.1; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.qc-polaroid-data { margin-top: 5px; font-size: var(--t00); font-weight: 700; color: #56666B; }
@container qccorpo (max-width: 820px) { .qc-varal-fotos { grid-template-columns: repeat(3, minmax(0, 1fr)); } .qc-varal-fotos > li:nth-child(n+4) { display: none; } }
@container qcvaral (max-width: 440px) { .qc-varal-fotos { grid-template-columns: repeat(2, minmax(0, 1fr)); } .qc-varal-fotos > li:nth-child(n+3) { display: none; } }

/* ---- girafa, emerg\xEAncia, pote ---- */
.qc-girafa-linha { display: flex; gap: 6px; align-items: flex-end; }
.qc-girafa-txt { flex: 1; min-width: 0; padding-bottom: 18px; display: flex; flex-direction: column; gap: 6px; align-items: flex-start; }
.qc-girafa-txt .qc-giz-grande { color: #3B2410; }
.qc-lembrete { margin: 0; padding: 8px 10px; border-radius: var(--r-md); background: #FFFFFF; border: 1px dashed #E29578; font-size: var(--t1); line-height: 1.35; color: #8F3A1C; }
.qc-dl { display: grid; grid-template-columns: 86px 1fr; gap: 5px 10px; margin: 0; font-size: var(--t15); }
.qc-dl dt { font-weight: 800; color: #6B4334; } .qc-dl dd { margin: 0; overflow-wrap: anywhere; }
.qc-emergencia .qc-mini { color: #6B4334; }
.qc-emergencia .btn { flex: 1 1 auto; justify-content: center; }
.qc-pote-mini { display: flex; gap: 12px; align-items: center; }
.qc-pote-txt { flex: 1; min-width: 0; }
.qc-pote-txt h2 { margin: 0; }
.btn-icone-q { width: 40px; height: 40px; min-height: 40px; padding: 0; justify-content: center; }

/* ---- ficha em tela cheia ---- */
.qc-tela-cheia { position: fixed; inset: 0; z-index: 3000; overflow: auto; }
.qc-ficha-cheia { background: #FFF8F5; color: #2E1208; padding: 28px clamp(20px, 5vw, 64px); display: flex; flex-direction: column; gap: 20px; }
.qc-ficha-cheia-cab { display: flex; align-items: center; gap: 14px; color: #B04E2B; flex-wrap: wrap; }
.qc-ficha-cheia-cab h2 { margin: 0; flex: 1; font-family: var(--fonte-titulo); font-size: clamp(1.8rem, 3vw, 2.6rem); color: #2E1208; }
.qc-ficha-cheia-cab h2 span { font-size: .55em; color: #6B4334; font-weight: 700; }
.qc-ficha-cheia-grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.qc-ficha-cheia-grade > div { padding: 16px 18px; border-radius: var(--r-lg); background: #FFFFFF; border: 2px solid #F3C9B8; }
.qc-ficha-cheia-grade h3 { margin: 0 0 6px; font-size: var(--t2); text-transform: uppercase; letter-spacing: .06em; color: #8F3A1C; }
.qc-ficha-cheia-grade p { margin: 0; font-size: var(--t4); line-height: 1.35; }
.qc-ficha-forte { font-weight: 800; font-size: var(--t5) !important; }
.qc-ficha-tel { display: inline-flex; align-items: center; gap: 8px; margin-top: 6px; font-size: var(--t5); font-weight: 800; color: #B04E2B; }

/* ---- Hora do Ca\xEA ---- */
.qc-hora { background: radial-gradient(120% 90% at 50% 0%, #BDE7F2, #83C5BE 55%, #5FAE9F); color: #0B3B41; cursor: pointer; user-select: none; -webkit-user-select: none; overflow: hidden; }
.qc-hora-ceu { position: absolute; inset: 0; pointer-events: none; }
.qc-hora-sol { position: absolute; right: 8%; top: 8%; width: 110px; height: 110px; border-radius: 50%; background: #FFE7A3; box-shadow: 0 0 60px #FFE7A3; }
.qc-hora-nuvem { position: absolute; width: 150px; height: 50px; border-radius: var(--r-pill); background: rgba(255,255,255,.6); }
.qc-hora-nuvem::before { content: ""; position: absolute; left: 30px; top: -25px; width: 70px; height: 70px; border-radius: 50%; background: inherit; }
.qc-hora-morro { position: absolute; left: -10%; right: -10%; bottom: -60px; height: 220px; border-radius: 50% 50% 0 0; background: #6FBF73; }
.qc-hora-morro2 { position: absolute; left: 30%; right: -20%; bottom: -80px; height: 200px; border-radius: 50% 50% 0 0; background: #4FA35A; }
.qc-forma { position: absolute; border-radius: 50%; opacity: .85; transform: translate(-50%, -50%); animation: qc-surge .5s cubic-bezier(.2,1.6,.4,1); pointer-events: none; }
.qc-forma[data-t="1"] { border-radius: 18%; transform: translate(-50%, -50%) rotate(14deg); }
.qc-forma[data-t="2"] { border-radius: 0; clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.qc-hora-palco, .qc-hora-fim { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; pointer-events: none; animation: qc-surge .45s cubic-bezier(.2,1.5,.4,1); }
.qc-hora-letra { margin: 0; font-family: var(--fonte-titulo); font-size: clamp(6rem, 18vw, 13rem); font-weight: 800; line-height: .9; color: #FFFFFF; text-shadow: 0 8px 0 rgba(11,59,65,.25); }
.qc-hora-nome { margin: 0; font-family: var(--fonte-titulo); font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 800; color: #0B3B41; }
.qc-hora-bicho { margin-top: 8px; filter: drop-shadow(0 10px 8px rgba(0,0,0,.18)); }
.qc-hora-sair { position: absolute; left: 22px; bottom: 20px; overflow: hidden; display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: var(--r-pill); background: rgba(11,59,65,.75); color: #FFFFFF; font-size: var(--t15); font-weight: 800; }
.qc-hora-barra { position: absolute; left: 0; bottom: 0; height: 4px; background: #F4C25C; }
.qc-hora-tempo { position: absolute; right: 22px; bottom: 20px; display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: var(--r-pill); background: rgba(11,59,65,.75); color: #FFFFFF; font-size: var(--t15); font-weight: 800; }
@keyframes qc-surge { from { transform: scale(.4); opacity: 0; } to { opacity: 1; } }

.qc-hora-previa { position: relative; height: 300px; border-radius: var(--r-lg); overflow: hidden; background: radial-gradient(120% 90% at 50% 0%, #BDE7F2, #83C5BE 55%, #5FAE9F); box-shadow: inset 0 0 0 10px #22323A, inset 0 0 0 12px #4A5A5E; }
.qc-hora-previa .qc-hora-sol { width: 70px; height: 70px; }
.qc-hora-previa .qc-hora-morro { height: 140px; bottom: -50px; }
.qc-hora-previa .qc-hora-morro2 { height: 120px; bottom: -60px; }
.qc-previa-letra { position: absolute; left: 0; right: 0; top: 14px; text-align: center; font-family: var(--fonte-titulo); font-size: var(--t6); font-weight: 800; line-height: 1; color: #FFFFFF; text-shadow: 0 6px 0 rgba(11,59,65,.25); }
.qc-previa-nome { position: absolute; left: 0; right: 0; top: 108px; text-align: center; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; color: #0B3B41; }
.qc-previa-bicho { position: absolute; left: 50%; bottom: 8px; transform: translateX(-50%); }
.qc-previa-tucano { position: absolute; right: 7%; top: 20px; }
.qc-previa-arara { position: absolute; left: 6%; top: 18px; }
.qc-hora-config { display: grid; grid-template-columns: 200px 1fr; gap: 16px; margin-top: 12px; align-items: start; }
.qc-regras { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.qc-regras li { padding: 9px 11px; border-radius: var(--r-md); background: var(--fundo); font-size: var(--t1); line-height: 1.35; color: var(--texto-2); }
.qc-regras b { color: var(--texto); }

/* ---- rotina ---- */
.qc-rotina { display: grid; grid-template-columns: repeat(var(--n), minmax(0, 1fr)); gap: 8px; margin: 0; padding: 10px 0 8px; list-style: none; }
.qc-fig { position: relative; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 10px 4px 8px; border-radius: var(--r-lg); background: var(--superficie); border: 1.5px solid var(--borda-cartao); text-align: center; }
.qc-fig[data-passou] { background: var(--fundo); }
.qc-fig[data-passou] .qc-figura { opacity: .45; }
.qc-fig[data-agora] { border: 3px solid #D2392E; transform: scale(1.06); box-shadow: 0 8px 18px -8px rgba(226,72,61,.6); }
.qc-fig-agora { position: absolute; top: -11px; padding: 1px 7px; border-radius: var(--r-sm); background: #C2342A; color: #FFFFFF; font-size: var(--t00); font-weight: 900; text-transform: uppercase; }
.qc-fig-nome { font-family: var(--fonte-titulo); font-size: var(--t1); font-weight: 800; line-height: 1; color: var(--texto); }

/* ---- folhas de papel (consulta, quem cuida) ---- */
.qc-folha-papel { padding: 16px; border-radius: var(--r-xs); background: #FFFFFF; color: #22323A; border: 1px solid #DCE6E9; box-shadow: var(--sombra-papel-3); font-size: var(--t1); line-height: 1.45; }
.qc-folha-papel p { margin: 0 0 4px; }
.qc-folha-papel .qc-mini { color: #4D6A70; }
.qc-folha-cab { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.qc-folha-t { margin: 0 !important; font-size: var(--t2); font-weight: 900; color: #0B3B41; }
.qc-folha-sec { margin: 10px 0 2px !important; font-size: var(--t00); font-weight: 900; letter-spacing: .06em; text-transform: uppercase; color: #006D77; }
.qc-folha-alerta { color: #B04E2B; }
.qc-folha-lista { margin: 0; padding: 0; list-style: none; }
.qc-folha-linhas span { display: block; height: 16px; border-bottom: 1px solid #C9D6DA; }
.qc-cuida-campos { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 0; }
.qc-cuida .chips-quebra { margin-bottom: 4px; }

/* ---- sa\xFAde ---- */
.qc-porta + .qc-porta { margin-top: 14px; }
.qc-porta-cab { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; }
.qc-etiqueta { display: inline-flex; align-items: center; gap: 6px; padding: 4px 11px; border-radius: var(--r-pill); background: #FFF3D6; color: #5C4100; font-size: var(--t15); font-weight: 800; }
.qc-porta-grade { display: grid; grid-template-columns: 72px repeat(var(--cols), minmax(0, 1fr)); gap: 7px; align-items: center; padding: 12px; border-radius: var(--r-lg); background: linear-gradient(180deg, #EAF4F2, #DCEDEA); border: 1.5px solid #B9D8D3; color: #0B3B41; }
.qc-porta-dia { text-align: center; font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; }
.qc-porta-dia[data-hoje] { color: #C2342A; }
.qc-porta-hora { font-size: var(--t1); font-weight: 800; }
.qc-porta-cel { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-height: 54px; border-radius: var(--r-sm); border: 2px solid #D9D0C3; background: #F2EEE8; font-size: var(--t0); font-weight: 800; text-align: center; line-height: 1.1; color: #4D6A70; }
.qc-porta-cel[data-estado="dada"] { background: #FFFFFF; border-color: var(--cor); color: var(--cor); }
.qc-porta-cel[data-estado="falta"] { background: #FFF1EC; border-color: #E29578; color: #8F3A1C; }
.qc-porta-cel[data-estado="hoje"] { background: #E7F4F2; border-color: #006D77; color: #006D77; }
.qc-porta-cel[data-estado="vazio"] { background: transparent; border-style: dashed; border-color: rgba(0,0,0,.08); }
button.qc-porta-cel:hover { filter: brightness(.97); box-shadow: 0 0 0 2px rgba(0,109,119,.25); }
.qc-febre-topo { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.qc-febre-graf { display: block; margin-top: 6px; }
.qc-pergunta { display: flex; align-items: center; gap: 8px; padding: 6px 0; font-size: var(--t2); }
.qc-pergunta-txt { flex: 1; min-width: 0; overflow-wrap: anywhere; }
.qc-pergunta[data-feita] .qc-pergunta-txt { color: var(--texto-2); }
.qc-resposta { margin-top: 8px; padding: 10px; border-radius: var(--r-md); background: var(--fundo); }
.qc-carteira { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 14px; align-items: start; }
.qc-carteira-livro { padding: 10px 12px; border-radius: var(--r-md); border: 2px solid #6FA8C9; background: #F4FAFD; color: #0B3B41; }
.qc-carteira-livro .qc-mini { color: #3F5A60; }
.qc-tabela { width: 100%; border-collapse: collapse; font-size: var(--t15); }
.qc-tabela td, .qc-tabela th { padding: 6px 4px; border-top: 1px solid #E3EDF0; text-align: left; vertical-align: top; }
.qc-tabela th { font-size: var(--t0); text-transform: uppercase; letter-spacing: .05em; color: var(--texto-2); border-top: 0; }
.qc-papeis { display: flex; flex-wrap: wrap; gap: 12px; margin: 0; padding: 4px; list-style: none; }
.qc-papel { display: flex; flex-direction: column; gap: 4px; width: 132px; padding: 8px; background: #FFFFFF; border: 1px solid #DCE6E9; box-shadow: var(--sombra-papel-2); transform: rotate(var(--giro)); text-align: left; color: #22323A; }
.qc-papel .cad-foto { width: 100%; height: 80px; object-fit: cover; margin: 0; border-radius: var(--r-xxs); }
.qc-papel-pdf { display: grid; place-items: center; height: 80px; border-radius: var(--r-xxs); background: repeating-linear-gradient(45deg, #FDE3D8 0 8px, #FFF0E9 8px 16px); font-weight: 900; color: #8F3A1C; }
.qc-papel-t { font-size: var(--t1); font-weight: 800; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.qc-receitas-mesa .secao { margin: 12px 0 0; padding: 0; border: 0; background: transparent; box-shadow: none; }
.qc-receitas-mesa .receitas { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; }
.qc-caixinha-mesa .secao { margin: 0; border-radius: var(--r-xl); }

/* ---- crescer ---- */
.qc-curvas { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.qc-curva { margin: 0; }
.qc-curva-t { margin-bottom: 4px; font-size: var(--t2); font-weight: 800; color: var(--texto); }
.qc-tempo { position: relative; height: 150px; margin: 8px 50px 0; }
.qc-tempo-linha { position: absolute; left: 0; right: 0; top: 70px; height: 4px; border-radius: var(--r-xxs); background: linear-gradient(90deg, #83C5BE var(--hoje), var(--trilho) var(--hoje)); }
.qc-tempo-ponto { position: absolute; top: 64px; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 4px; width: 120px; text-align: center; }
.qc-tempo-ponto[data-cima] { flex-direction: column-reverse; top: auto; bottom: 74px; }
.qc-tempo-bola { width: 16px; height: 16px; border-radius: 50%; background: var(--cor); box-shadow: 0 0 0 3px var(--superficie); flex-shrink: 0; }
.qc-tempo-txt { font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.05; font-weight: 700; color: var(--cor); }
.qc-tempo-txt .qc-mini { font-family: var(--fonte); font-weight: 600; }
.qc-tempo-hoje { position: absolute; bottom: 0; transform: translateX(-50%); padding: 1px 6px; border-radius: var(--r-sm); background: #C2342A; color: #FFFFFF; font-size: var(--t00); font-weight: 900; text-transform: uppercase; }
.qc-tempo-anos { display: flex; justify-content: space-between; margin: 4px 50px 0; font-size: var(--t0); font-weight: 800; color: var(--texto-2); }
.qc-tamanhos { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
.qc-tamanho { padding: 10px 12px; border-radius: var(--r-lg); background: #FFFDF6; border: 1.5px solid #EFE2C2; color: #3B2E10; }
.qc-tamanho .qc-mini { color: #6B5320; }
.qc-tamanho .qc-giz-grande { color: #3B2E10; }
.qc-tamanhos-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.qc-tamanho-edit { display: grid; grid-template-columns: 90px 1fr; gap: 6px; }
.qc-tamanhos-form .qc-botoes { grid-column: 1 / -1; }
.qc-batente-cartao .qc-batente { display: block; margin-top: 6px; }
.qc-mao-svg { font-family: var(--fonte-titulo); }

/* ---- caderno ---- */
.qc-caderno { position: relative; display: grid; grid-template-columns: 1fr 1fr; border-radius: var(--r-sm); background: #FFFDF8; color: #22323A; box-shadow: 0 14px 26px -14px rgba(0,0,0,.4), inset 0 0 0 1px #E8DFC9; }
.qc-caderno:focus-visible { outline: 3px solid var(--acao); outline-offset: 3px; }
.qc-pagina { min-width: 0; padding: 12px 26px 14px 30px; background: repeating-linear-gradient(180deg, transparent 0 27px, rgba(143,183,196,.35) 27px 28px); }
.qc-pagina + .qc-pagina { padding: 12px 30px 14px 26px; border-left: 1px solid #E8DFC9; }
.qc-pagina-mes { margin: 0 0 4px; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; color: #8F6A3C; text-transform: capitalize; }
.qc-lombada { position: absolute; left: 50%; top: 0; bottom: 0; width: 20px; margin-left: -10px; background: linear-gradient(90deg, transparent, rgba(0,0,0,.08), transparent); pointer-events: none; }
.qc-entrada { border-bottom: 1px solid #D9E2E5; }
.qc-entrada-btn { display: flex; flex-direction: column; gap: 3px; width: 100%; padding: 10px 2px 12px; text-align: left; color: #22323A; border-radius: var(--r-sm); }
.qc-entrada-btn:hover { background: rgba(255,221,210,.25); }
.qc-entrada-selo { font-size: var(--t00); font-weight: 900; letter-spacing: .07em; text-transform: uppercase; color: #006D77; }
.qc-entrada[data-tipo="frase"] .qc-entrada-selo { color: #9A4515; }
.qc-entrada[data-tipo="momento"] .qc-entrada-selo { color: #5B3F94; }
.qc-entrada-txt { font-family: var(--fonte-titulo); font-size: var(--t3); line-height: 1.18; }
.qc-entrada[data-tipo="frase"] .qc-entrada-txt { font-size: var(--t4); font-weight: 700; color: #9A4515; }
.qc-entrada-foto .cad-foto { width: 140px; height: 100px; object-fit: cover; margin: 4px 0; border-radius: var(--r-xs); }
.qc-entrada-btn .qc-mini { color: #56666B; }
.qc-folhear { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 10px; }
.qc-umano { background: linear-gradient(135deg, #FFF6E3, var(--superficie)); }
${_} .qc-umano { background: var(--superficie); }
.qc-umano-lista { display: flex; gap: 18px; flex-wrap: wrap; margin: 6px 0 0; padding: 0; list-style: none; }
.qc-umano-lista li { display: flex; gap: 12px; align-items: center; flex: 1 1 280px; }
.qc-umano-lista li > span:last-child { display: flex; flex-direction: column; gap: 3px; }
.qc-umano-foto .cad-foto { width: 100px; height: 80px; object-fit: cover; margin: 0; padding: 5px; background: #FFFFFF; box-shadow: var(--sombra-papel-2); transform: rotate(-2deg); }
.qc-umano-txt { font-family: var(--fonte-titulo); font-size: var(--t3); line-height: 1.15; color: var(--texto); }
.qc-umano-txt[data-tipo="frase"] { font-weight: 700; color: #9A4515; }
.qc-estante { display: flex; gap: 14px; align-items: flex-end; flex-wrap: wrap; }
.qc-prateleira { flex: 1 1 260px; display: flex; align-items: flex-end; gap: 6px; min-height: 196px; padding: 0 10px; border-bottom: 10px solid #B98A5E; border-radius: 0 0 var(--r-xs) var(--r-xs); overflow-x: auto; }
.qc-lombada-livro { position: relative; flex: 0 0 38px; display: flex; align-items: center; justify-content: center; border-radius: var(--r-xs) var(--r-xs) var(--r-xxs) var(--r-xxs); background: var(--cor); box-shadow: inset -4px 0 0 rgba(0,0,0,.12), 0 2px 0 rgba(0,0,0,.15); color: #FFFFFF; }
.qc-lombada-livro:hover { transform: translateY(-4px); }
.qc-lombada-livro span { writing-mode: vertical-rl; transform: rotate(180deg); font-size: var(--t0); font-weight: 800; text-shadow: 0 1px 1px rgba(0,0,0,.35); white-space: nowrap; overflow: hidden; max-height: calc(100% - 12px); }
.qc-favorito { position: absolute; top: -14px; color: #C98A12; fill: #F4C25C; }
.qc-estante-vazia { align-self: center; }
.qc-estante-lado { flex: 0 1 220px; display: flex; flex-direction: column; gap: 6px; align-items: flex-start; }
.qc-livrinho { display: flex; justify-content: center; perspective: 600px; padding: 6px 0 12px; }
.qc-livrinho-capa, .qc-livrinho-pag { width: 120px; height: 160px; padding: 10px; background: #FFFFFF; border: 1px solid #DCE6E9; box-shadow: var(--sombra-papel-3); }
.qc-livrinho-capa { transform: rotateY(12deg); transform-origin: right; border-radius: var(--r-sm) 0 0 var(--r-sm); background: #FFDDD2; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }
.qc-livrinho-capa p { margin: 0; text-align: center; font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; line-height: .95; color: #8F3A1C; }
.qc-livrinho-pag { transform: rotateY(-12deg); transform-origin: left; border-radius: 0 var(--r-sm) var(--r-sm) 0; font-family: var(--fonte-titulo); font-size: var(--t1); color: #9A4515; overflow: hidden; }
.qc-livrinho-pag p { margin: 0 0 4px; }
.qc-livrinho-pag span { font-family: var(--fonte); font-size: var(--t00); color: #56666B; }
.qc-imp-livro, .qc-imp-consulta-esc { display: none; }
.qc-pote-grande { display: flex; gap: 14px; align-items: center; }
.qc-curva-pal { display: block; margin-top: 8px; }
.qc-chips-pal { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.qc-chip-pal { padding: 2px 10px; border-radius: var(--r-pill); background: #FFF6E3; border: 1px solid #F1D9A6; font-family: var(--fonte-titulo); font-size: var(--t1); color: #6B4600; }
.qc-chip-pal:hover { border-color: #C98A12; }
.qc-pote-form { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; }
.qc-dic { width: 100%; border-collapse: collapse; margin-top: 4px; }
.qc-dic td { padding: 5px 4px; border-top: 1px solid var(--trilho); font-size: var(--t15); vertical-align: middle; }
.qc-dic td.qc-mao-cor { font-size: var(--t35); white-space: nowrap; }
.qc-dic-acoes { text-align: right; white-space: nowrap; }

/* ---- escola ---- */
.qc-subabas { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.qc-subabas .btn { margin-left: auto; }
.qc-seg { display: inline-flex; gap: 4px; margin-left: 8px; }
.qc-mural-moldura { border-radius: var(--r-md); padding: 10px; background: linear-gradient(180deg, #9C6B4A, #7E5235); box-shadow: var(--sombra-papel-3); }
.qc-mural { display: grid; grid-template-columns: 104px repeat(var(--dias), minmax(0, 1fr)); gap: 10px; padding: 14px; border-radius: var(--r-xs); color: #22323A;
  background: radial-gradient(circle at 20% 30%, rgba(120,72,30,.18) 1px, transparent 1.6px) 0 0/9px 9px, radial-gradient(circle at 70% 60%, rgba(255,240,210,.35) 1px, transparent 1.8px) 0 0/13px 13px, linear-gradient(180deg, #D3A877, #C49460);
  box-shadow: inset 0 2px 8px rgba(0,0,0,.25); }
.qc-mural-dia { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.qc-mural-dia[data-passado] > * { opacity: .62; }
.qc-mural-cab { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0 6px; margin: 0; padding: 4px 8px; border-radius: var(--r-sm); background: rgba(255,253,246,.92); color: #0B3B41; }
.qc-mural-cab .qc-giz { font-size: var(--t5); line-height: 1; }
.qc-mural-cab .qc-giz { white-space: nowrap; }
.qc-mural-cab b { font-size: var(--t00); font-weight: 900; letter-spacing: .06em; }
.qc-mural-dia[data-hoje] .qc-mural-cab { background: #0B3B41; color: #FFFFFF; }
.qc-amanha { color: #9A4515; }
.qc-fixo { margin: 0; padding: 7px 8px 6px; border-radius: var(--r-xxs); background: #E7F4F2; border-left: 5px solid #006D77; box-shadow: var(--sombra-papel-1); font-size: var(--t1); font-weight: 800; line-height: 1.2; color: #0B3B41; }
.qc-fixo > span:first-child { display: block; font-size: var(--t00); font-weight: 900; letter-spacing: .07em; text-transform: uppercase; color: #006D77; }
.qc-fixo .qc-mini { color: #3F5A60; }
.qc-semaula { padding: 10px 8px; border-radius: var(--r-xxs); background: #FFE4DC; box-shadow: var(--sombra-papel-1); text-align: left; font-size: var(--t2); font-weight: 900; color: #8F3A1C; line-height: 1.2; }
.qc-semaula span { font-weight: 700; font-size: var(--t1); }
.qc-mural-recados { display: flex; flex-direction: column; gap: 12px; min-height: 90px; padding-top: 4px; }
.qc-bilhete { position: relative; display: flex; flex-direction: column; gap: 2px; padding: 13px 9px 8px; background: var(--fundo-b, #FFFFFF); background: var(--fundo); box-shadow: var(--sombra-papel-1); transform: rotate(var(--giro)); text-align: left; color: #22323A; }
.qc-bilhete:hover { transform: rotate(0) translateY(-2px); }
.qc-tacha { position: absolute; left: 50%; top: -6px; width: 13px; height: 13px; margin-left: -6px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FFFFFF 0 14%, var(--tacha) 36%, var(--tacha) 70%, rgba(0,0,0,.35)); box-shadow: var(--sombra-1); }
.qc-bilhete-txt { font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.12; overflow-wrap: anywhere; }
.qc-bilhete .qc-mini { color: #4D6A70; }
.qc-mural-mais { align-self: flex-start; display: grid; place-items: center; width: 30px; height: 30px; border-radius: var(--r-sm); border: 1.5px dashed rgba(255,253,246,.85); color: #FFFDF6; opacity: .75; }
.qc-mural-mais:hover { opacity: 1; background: rgba(255,255,255,.15); }
.qc-mural-rot { display: flex; align-items: center; margin: 0; padding: 0 8px; border-radius: var(--r-sm); background: rgba(255,253,246,.92); font-size: var(--t0); font-weight: 800; color: #0B3B41; }
.qc-mural-cel { min-height: 40px; padding: 6px 8px; border-radius: var(--r-xs); background: #FFFDF6; font-size: var(--t0); line-height: 1.25; color: #5C4100; text-align: left; overflow-wrap: anywhere; }
.qc-mural-cel[data-passado] { opacity: .62; }
button.qc-mural-cel:hover { box-shadow: 0 0 0 2px #F4C25C; }
.qc-mural-input { border: 2px solid #F4C25C; font: inherit; font-size: var(--t1); }
.qc-mural-jantar { font-family: var(--fonte-titulo); font-size: var(--t1); color: #3B2E10; }
.qc-mural-lb { display: flex; flex-direction: column; gap: 3px; }
.qc-lb { display: flex; align-items: center; justify-content: space-between; gap: 4px; font-size: var(--t00); font-weight: 800; color: #4D6A70; }
.qc-lb select { min-height: 26px; max-width: 70%; border-radius: var(--r-sm); border: 1px solid #E3D7C6; background: #FFFFFF; font: inherit; font-size: var(--t0); font-weight: 800; }
.qc-mural-criar { text-align: center; font-weight: 800; color: #0B3B41; }
.qc-colar { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr); gap: 18px; align-items: start; }
.qc-colar-txt { min-height: 170px; font-size: var(--t15); }
.qc-achados { min-width: 0; }
.qc-achado { display: flex; align-items: flex-start; gap: 6px; padding: 8px 0; }
.qc-achado:not([data-sim]) .qc-achado-campos { opacity: .5; }
.qc-achado-tipo { flex: 0 0 auto; min-width: 70px; margin-top: 6px; padding: 2px 8px; border-radius: var(--r-pill); background: var(--fundo); font-size: var(--t0); font-weight: 800; text-align: center; color: #1F5A7A; }
.qc-achado-tipo[data-tipo="pedido"] { color: #1E5E37; background: #E3F1DA; }
.qc-achado-tipo[data-tipo="semaula"] { color: #8F3A1C; background: #FFE4DC; }
.qc-achado-tipo[data-tipo="aviso"] { color: #8F3A1C; background: #FDE7E7; }
.qc-achado-campos { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.qc-achado-titulo { flex: 1 1 180px; min-height: 38px; font-size: var(--t15); }
.qc-achado-data { flex: 0 0 150px; min-height: 38px; font-size: var(--t15); }
.qc-achado-itens { flex-basis: 100%; display: flex; flex-wrap: wrap; gap: 5px; }
.qc-chip-item { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: var(--r-pill); background: #E7F4F2; color: #0B5F67; font-size: var(--t0); font-weight: 800; }
.qc-chip-item[data-tipo="pagar"] { background: #FFF3D6; color: #5C4100; }
.qc-chip-item[data-tipo="fantasia"], .qc-chip-item[data-tipo="levar"] { background: #FFE4DC; color: #7A2E14; }
.qc-chip-item[data-tipo="assinar"], .qc-chip-item[data-tipo="responder"] { background: #DCEBF7; color: #1F4E79; }
.qc-chip-item button { display: grid; place-items: center; width: 18px; height: 18px; border-radius: 50%; }
.qc-bilhetes { display: grid; grid-template-columns: minmax(0, 1fr) 260px; gap: 14px; align-items: stretch; }
.qc-bilhetes > .qc-mini:first-child, .qc-bilhetes > :empty { display: none; }
.qc-soltar { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; min-height: 130px; padding: 14px; border-radius: var(--r-md); border: 2px dashed #9DBFC6; background: var(--fundo); text-align: center; color: var(--texto); font-size: var(--t15); }
.qc-soltar:hover, [data-sobre] .qc-soltar { border-color: var(--acao); background: #E7F4F2; }
.qc-amanha-cartao { background: linear-gradient(180deg, var(--superficie), #F4FAF9); }
${_} .qc-amanha-cartao { background: var(--superficie); }
.qc-amanha-hora { margin: 4px 0 8px; font-size: var(--t15); line-height: 1.6; }
.qc-semaula-cartao { border: 2px solid #F3C9B8; background: #FFF8F5; color: #3B1A0E; }
.qc-semaula-cartao .qc-link-forte { color: #3B1A0E; }
.qc-pessoa-ini { display: inline-grid; place-items: center; flex: 0 0 30px; width: 30px; height: 30px; border-radius: 50%; background: #FFDDD2; color: #0B3B41; font-weight: 900; }
.qc-chip-pessoa { display: inline-block; margin: 2px 4px 0 0; padding: 1px 8px; border-radius: var(--r-pill); border: 1.5px solid var(--cor); color: var(--cor); font-weight: 800; }
.qc-ano { position: relative; height: 230px; margin: 8px 30px 0; }
.qc-ano-mes { position: absolute; top: 0; padding-left: 6px; border-left: 2px solid #9DBFC6; font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; color: var(--texto); text-transform: capitalize; }
.qc-ano-linha { position: absolute; left: 0; right: 0; top: 112px; height: 4px; border-radius: var(--r-xxs); background: linear-gradient(90deg, #83C5BE var(--hoje), var(--trilho) var(--hoje)); }
.qc-ano-semaula { position: absolute; top: 100px; min-width: 8px; height: 28px; border-radius: var(--r-xxs); background: repeating-linear-gradient(45deg, #F3C9B8 0 3px, #FFF1EC 3px 6px); }
.qc-ano-ferias { position: absolute; right: 0; top: 100px; height: 28px; border-radius: var(--r-sm); background: linear-gradient(90deg, #FFE7A3, #FFD27A); font-size: var(--t0); font-weight: 900; color: #5C4100; padding: 0 10px; }
.qc-ano-ev { position: absolute; top: 106px; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; width: 112px; text-align: center; }
.qc-ano-ev[data-fila="0"] { top: auto; bottom: calc(230px - 122px); flex-direction: column-reverse; }
.qc-ano-ev[data-fila="2"] .qc-ano-t { margin-top: 50px; }
.qc-ano-bola { width: 14px; height: 14px; border-radius: 50%; background: #B5561A; box-shadow: 0 0 0 3px var(--superficie); }
.qc-ano-t { margin: 4px 0; font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.05; font-weight: 700; color: #9A4515; }
.qc-ano-ev:hover .qc-ano-t { text-decoration: underline; }
.qc-ano-hoje { position: absolute; top: 132px; transform: translateX(-50%); padding: 1px 6px; border-radius: var(--r-sm); background: #C2342A; color: #FFFFFF; font-size: var(--t00); font-weight: 900; text-transform: uppercase; }
.qc-ano-legenda { display: flex; align-items: center; gap: 6px; }
.qc-hach { display: inline-block; width: 12px; height: 12px; border-radius: var(--r-xxs); background: repeating-linear-gradient(45deg, #F3C9B8 0 3px, #FFF1EC 3px 6px); }
.qc-contas3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin: 10px 0 8px; }
.qc-contas3 > div { padding: 10px 12px; border-radius: var(--r-md); color: #22323A; }
.qc-contas3 .qc-mini { color: #3F5A60; } .qc-contas3 .qc-giz-grande { color: #0B3B41; }
.qc-contas3 [data-tom="sol"] { background: #FFF6E3; } .qc-contas3 [data-tom="pessego"] { background: #FFF1EC; } .qc-contas3 [data-tom="verde"] { background: #E7F4F2; }
.qc-eventos { display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; list-style: none; }
.qc-evento { display: flex; align-items: center; gap: 12px; width: 100%; padding: 8px 10px; border-radius: var(--r-md); border: 1px solid var(--borda-cartao); text-align: left; color: var(--texto); }
.qc-evento:hover, .qc-evento[aria-pressed="true"] { border-color: var(--acao); background: var(--fundo); }
.qc-evento-data { display: flex; flex-direction: column; align-items: center; min-width: 40px; line-height: 1; }
.qc-evento-data b { font-family: var(--fonte-titulo); font-size: var(--t4); }
.qc-evento-data span { font-size: var(--t00); font-weight: 800; text-transform: uppercase; color: var(--texto-2); }
.qc-evento-txt { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; font-size: var(--t15); }
.qc-barra { display: block; height: 6px; border-radius: var(--r-pill); background: var(--trilho); overflow: hidden; }
.qc-barra > span { display: block; height: 100%; border-radius: var(--r-pill); background: #23744A; }
.qc-evento-cab { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 8px; }
.qc-evento-cab > div { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.qc-cal { flex: 0 0 72px; display: flex; flex-direction: column; align-items: center; border-radius: var(--r-md); overflow: hidden; border: 2px solid #1F5A7A; background: var(--superficie); }
.qc-cal span:first-child { align-self: stretch; padding: 3px; background: #1F5A7A; color: #FFFFFF; font-size: var(--t0); font-weight: 900; text-align: center; }
.qc-cal b { font-family: var(--fonte-titulo); font-size: var(--t5); line-height: 1.1; color: var(--texto); }
.qc-cal span:last-child { margin-bottom: 4px; font-size: var(--t00); font-weight: 800; color: var(--texto-2); }
.qc-convite { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 10px; padding: 10px 12px; border-radius: var(--r-md); background: #FFF6E3; color: #4E3A10; }
.qc-convite p { margin: 0; flex: 1 1 160px; font-size: var(--t15); }
.qc-amigos { display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: 8px; margin: 0; padding: 0; list-style: none; }
.qc-amigos li { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.qc-amigos li[data-perto] .qc-amigo { background: #FFF6E3; border: 2px solid #F4C25C; color: #22323A; }
.qc-amigos li[data-perto] .qc-mini { color: #6B5320; }
.qc-amigo { display: flex; flex-direction: column; align-items: center; gap: 2px; width: 100%; padding: 10px 6px; border-radius: var(--r-lg); border: 1.5px solid var(--borda-cartao); background: var(--superficie); color: var(--texto); text-align: center; }
.qc-amigo-ini { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; color: #FFFFFF; font-weight: 900; font-size: var(--t3); }
.qc-galeria { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 18px; margin: 0; padding: 4px 4px 8px; list-style: none; }
.qc-trabalho { margin: 0; padding: 8px 8px 10px; background: #FFFFFF; box-shadow: var(--sombra-papel-2); transform: rotate(var(--giro)); color: #22323A; }
.qc-trabalho .cad-foto { width: 100%; height: 110px; object-fit: cover; margin: 0; border-radius: var(--r-xxs); }
.qc-trabalho figcaption { display: flex; flex-direction: column; margin-top: 6px; }
.qc-trabalho figcaption .qc-mini { color: #56666B; }
.qc-trabalho-acoes { display: flex; align-items: center; gap: 4px; margin-top: 6px; }
.qc-trabalho-acoes .chip { min-height: 30px; padding: 0 8px; font-size: var(--t0); }
.qc-trabalho-acoes .btn-icone { margin-left: auto; }
.qc-diario-linha { display: grid; grid-template-columns: 64px 1fr; gap: 8px; align-items: center; padding: 6px 0; border-top: 1px solid var(--trilho); }
.qc-diario-semana { display: flex; justify-content: space-between; margin-top: 10px; padding: 10px 14px; border-radius: var(--r-md); background: var(--fundo); }
.qc-diario-semana > span { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.qc-carinha { font-size: var(--t4); line-height: 1; }

@container qccorpo (max-width: 860px) {
  .qc-colar, .qc-bilhetes, .qc-carteira, .qc-curvas, .qc-hora-config { grid-template-columns: minmax(0, 1fr); }
  .qc-regras { grid-template-columns: minmax(0, 1fr); }
  .qc-rotina { grid-template-columns: repeat(auto-fill, minmax(88px, 1fr)); }
}
}

@layer escuro {
${_} .qc-carteira-livro .qc-selo-azul { color: #1F5A7A; } ${_} .qc-mural-jantar .qc-mini { color: #4D6A70; } ${_} .qc-umano-txt[data-tipo="frase"] { color: #F2B48C; }
${_} .qc-idade b { color: #F0A57E; }
${_} .qc-mao-cor { color: #F0A57E; }
${_} .qc-cartao[data-tom="alerta"], ${_} .qc-emergencia, ${_} .qc-semaula-cartao { background: #2B1A14; border-color: #7A3C26; color: #FFE2D6; }
${_} .qc-emergencia .qc-h2, ${_} .qc-dl dt, ${_} .qc-emergencia .qc-mini, ${_} .qc-semaula-cartao .qc-link-forte, ${_} .qc-selo-alerta { color: #FFC9B4; }
${_} .qc-cartao-suave { background: #10262A; }
${_} .qc-chip-dias { background: #173F3F; color: #BDE7E2; }
${_} .qc-chip-ok { background: #1E3A28; color: #BFE5C8; }
${_} .qc-proximo { background: #3A231B; color: #FFC9B4; }
${_} .qc-marco-bola { box-shadow: 0 0 0 3px var(--superficie); }
${_} .qc-marco[data-tipo="dose"] b, ${_} .qc-marco-l[data-tipo="dose"] b { color: #FFC9B4; }
${_} .qc-regua-faixa { background: #173F4A; color: #BFE3EE; }
${_} .qc-sos { background: #2E2614; border-color: #6B5320; color: #FFE9B8; }
${_} .qc-varal-cartao { background: var(--superficie); }
${_} .qc-selo-azul { color: #9CCBE6; } ${_} .qc-selo-verde { color: #8ED8CF; } ${_} .qc-selo-amarelo { color: #F4D58A; }
${_} .qc-etiqueta { background: #3A2F12; color: #FFE9B8; }
${_} .qc-tempo-txt { filter: brightness(1.45); }
${_} .qc-ano-t { color: #F0A57E; }
${_} .qc-achado-tipo { background: #173F3F; color: #BDE7E2; }
${_} .qc-evento-data span { color: var(--texto-2); }
${_} .qc-soltar:hover, ${_} [data-sobre] .qc-soltar { background: #173F3F; }
${_} .qc-convite { background: #2E2614; color: #FFE9B8; }
${_} .qc-amigos li[data-perto] .qc-amigo { background: #2E2614; color: #FFE9B8; }
${_} .qc-amigos li[data-perto] .qc-mini { color: #F4D58A; }
}

@layer pintado {



}

@layer movimento {
html[data-movimento="reduzido"] .qc-forma, html[data-movimento="reduzido"] .qc-hora-palco, html[data-movimento="reduzido"] .qc-hora-fim { animation: none; }
@media (prefers-reduced-motion: reduce) { .qc-forma, .qc-hora-palco, .qc-hora-fim { animation: none; } .qc-polaroid, .qc-bilhete, .qc-lombada-livro { transition: none; } }
}

@media print {
  .qc-imp-copia { padding: 0; border: 0; box-shadow: none; font-family: Georgia, "Times New Roman", serif; font-size: 11.5pt; line-height: 1.5; }
  .qc-imp-copia .qc-folha-cab { display: flex; align-items: center; gap: 10pt; margin-bottom: 8pt; }
  .qc-imp-copia .qc-folha-t { font-size: 18pt; font-weight: 700; }
  .qc-imp-copia .qc-folha-sec { margin: 12pt 0 3pt !important; font-size: 10pt; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #000000; border-bottom: 1px solid #000000; }
  .qc-imp-copia p { margin: 0 0 4pt; }
  .qc-imp-copia .qc-mini { font-size: 10pt; color: #000000; }
  .qc-imp-copia .qc-folha-linhas { height: auto; background: none; }
  .qc-imp-copia .qc-folha-linhas span { display: block; height: 9mm; border-bottom: 1px solid #888888; }
  .qc-imp-copia.qc-imp-livro { display: block !important; }
  .qc-imp-livro section { page-break-after: always; break-after: page; min-height: 240mm; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 12pt; text-align: center; }
  .qc-imp-livro .qc-livro-capa h1 { font-family: var(--fonte-titulo); font-size: 44.64pt; margin: 0; }
  .qc-imp-livro .qc-livro-selo { font-size: 11pt; letter-spacing: .08em; text-transform: uppercase; }
  .qc-imp-livro .qc-livro-txt { font-family: var(--fonte-titulo); font-size: 22.36pt; line-height: 1.25; max-width: 160mm; }
  .qc-imp-livro img { max-width: 150mm; max-height: 130mm; object-fit: contain; border: 6pt solid #FFFFFF; box-shadow: 0 0 0 1px #999999; }
  .qc-livro-trabalhos { display: grid; grid-template-columns: 1fr 1fr; gap: 10mm; }
  .qc-livro-trabalhos img { max-width: 80mm; max-height: 80mm; }
}
`;var el=e=>`url("data:image/svg+xml,${encodeURIComponent(e)}")`,xc=el('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .36  0 0 0 0 .28  0 0 0 .09 0"/></filter><rect width="220" height="220" filter="url(#g)"/></svg>'),po='.cc[data-lousa-mesa="1"]',xa='html[data-tema="escuro"]',tl="var(--fonte-titulo)",rl="var(--fonte-titulo)",un=`
@layer base {
/* ================= pe\xE7as do celular e do computador ================= */
.recado-conta { display: inline-flex; align-items: center; gap: 4px; margin-top: 3px; padding: 1px 8px; border-radius: var(--r-pill); background: #FFF3D6; color: #6E4E00; font-size: var(--t1); font-weight: 800; }
.recado-papel { align-self: flex-start; display: inline-flex; align-items: center; gap: 4px; min-height: 32px; margin-top: 4px; padding: 2px 10px; border-radius: var(--r-pill); border: 1.5px solid #9DBFC6; color: #1F5A7A; font-size: var(--t1); font-weight: 800; background: var(--superficie); }
.recado-papel:hover { border-color: #1F5A7A; }
.recado-meio { display: flex; flex-direction: column; flex: 1; min-width: 0; }
.papel-campo { display: flex; flex-direction: column; gap: 8px; }
.papel-previa { display: flex; align-items: flex-start; gap: 12px; }
.papel-previa img, .papel-previa .papel-carregando { width: 110px; height: 110px; object-fit: cover; border-radius: var(--r-sm); border: 1px solid var(--borda-cartao); flex-shrink: 0; }
.papel-grande { display: grid; place-items: center; min-height: 160px; border-radius: var(--r-md); background: var(--fundo); overflow: hidden; }
.papel-grande img { display: block; max-width: 100%; max-height: 60vh; object-fit: contain; }
.papel-sem { font-size: var(--t1); color: var(--texto-2); padding: 8px; }
.papel-carregando { display: block; width: 100%; height: 100%; min-height: 40px; background: linear-gradient(90deg, var(--trilho), var(--fundo), var(--trilho)); background-size: 200% 100%; animation: lp-carrega 1.2s linear infinite; }

.contagens { display: flex; flex-wrap: wrap; gap: 10px; margin: 0; padding: 0; list-style: none; }
.contagem { position: relative; display: flex; align-items: center; gap: 8px; min-height: 52px; padding: 6px 12px 6px 22px; border-radius: var(--r-md); background: #FFF3D6; color: #6E4E00;
  box-shadow: var(--sombra-papel-1); transform: rotate(1.2deg); text-align: left; }
.contagens li:nth-child(2) .contagem { transform: rotate(-1.4deg); background: #FFE4DC; color: #7A2E14; }
.contagens li:nth-child(3) .contagem { transform: rotate(.8deg); background: #E1F2EF; color: #0B4F57; }
.contagem:hover { transform: rotate(0) translateY(-2px); }
.contagem-ima { position: absolute; left: 6px; top: 8px; width: 12px; height: 12px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FFFFFF 0 12%, #E2563C 34% 70%, rgba(0,0,0,.35)); box-shadow: var(--sombra-1); }
.contagem-num { font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; line-height: .9; }
.contagem-txt { font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.1; max-width: 140px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
.contagem[data-hoje] .contagem-txt::first-line { font-weight: 700; }

.ficou { margin-top: 12px; padding: 12px 14px; border-radius: var(--r-lg); background: #FFF1EC; border: 1px solid #F3C9B8; color: #3B1A0E; }
.ficou-t { margin: 0 0 6px; font-size: var(--t2); font-weight: 800; color: #8F3A1C; }
.ficou ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
.ficou-linha { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.ficou-texto { font-weight: 700; overflow-wrap: anywhere; }
.ficou-dia { flex-shrink: 0; font-size: var(--t1); font-weight: 700; color: #8F3A1C; }
.ficou-botoes { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 6px; }
.ficou .btn-pequeno { min-height: 36px; }
.ficou .btn-texto { color: #8F3A1C; min-height: 36px; }

.fim-do-dia { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin: 12px 0; padding: 12px 16px; border-radius: var(--r-lg); background: #0B3B41; color: #FFFFFF; }
.fim-do-dia > svg { color: #F4C25C; flex-shrink: 0; }
.fim-do-dia p { flex: 1 1 260px; margin: 0; font-size: var(--t2); line-height: 1.45; }
.fim-botoes { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.fim-do-dia .btn-secundario { background: transparent; color: #FFFFFF; border-color: rgba(255,255,255,.6); }
.fim-do-dia .btn-texto { color: #FFDDD2; }
.cc .fim-do-dia :focus-visible { outline-color: #FFFFFF; }

.pecas-dia { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--trilho-2); }
.pecas-linha { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 8px; }
.pecas-rot { display: inline-flex; align-items: center; gap: 5px; min-width: 76px; font-size: var(--t1); font-weight: 800; color: var(--texto-2); text-transform: uppercase; letter-spacing: .04em; }
.vezes { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
.vez { display: inline-flex; align-items: center; gap: 6px; min-height: 36px; padding: 2px 10px 2px 3px; border-radius: var(--r-pill); border: 1.5px solid var(--borda-cartao); background: var(--superficie); color: var(--texto); font-size: var(--t2); font-weight: 700; }
.vez:hover { border-color: var(--acao); }
.vez-ini { display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: var(--p1); color: var(--sobre-p, #FFFFFF); font-size: var(--t1); font-weight: 900; }
.vez[data-p="1"] .vez-ini { background: var(--p2); }
.vez[data-vazia] { border-style: dashed; color: var(--texto-2); }
.vez[data-vazia] .vez-ini { background: var(--trilho); color: var(--texto); }
.jantar-btn { display: inline-flex; align-items: center; gap: 5px; min-height: 36px; padding: 2px 12px; border-radius: var(--r-md); border: 1.5px solid #EFE2C2; background: #FFFDF6; color: #5C4100; font-family: var(--fonte-titulo); font-size: var(--t2); text-align: left; }
.jantar-btn[data-vazio] { font-family: inherit; font-size: var(--t2); font-weight: 700; border-style: dashed; }
.jantar-btn:hover { border-color: #B98A1E; }
.dias-semana { display: flex; flex-wrap: wrap; gap: 6px; }
.dias-semana .chip { min-width: 52px; justify-content: center; }
.lista-tarefas { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.tarefa-linha { display: grid; grid-template-columns: 1fr auto; grid-template-rows: auto auto; column-gap: 8px; width: 100%; min-height: 52px; padding: 8px 12px; border-radius: var(--r-md); border: 1px solid var(--borda-cartao); background: var(--superficie); text-align: left; color: var(--texto); }
.tarefa-linha .legenda { grid-column: 1; }
.tarefa-linha svg { grid-column: 2; grid-row: 1 / span 2; align-self: center; color: var(--texto-2); }

/* ================= Lousa do computador ================= */
${po} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${po}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${po} main[data-lousa-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) clamp(300px, 24vw, 360px); grid-template-areas: "topo painel" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 20px; align-items: start; }
${po} .lm { display: contents; --canetao: ${tl}; --giz: ${rl}; }
${po} .lm-topo { grid-area: topo; }
${po} .lm-corpo { grid-area: corpo; min-width: 0; container-type: inline-size; container-name: lmcorpo; }
${po} .lm-painel { grid-area: painel; align-self: start; position: sticky; top: 14px; margin-top: 18px; max-height: calc(100vh - 32px); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin;
  display: flex; flex-direction: column; gap: 14px; padding-bottom: 8px; }
${po} .toast { left: calc(var(--casa-larg) + 28px); right: calc(clamp(300px, 24vw, 360px) + 48px); width: auto; max-width: 520px; bottom: 20px; }
${po} .fab-anotar.lm-anotar { position: static; transform: none; box-shadow: 0 3px 0 var(--primaria-press); min-height: 42px; }

.lm-topo { display: flex; align-items: center; justify-content: space-between; gap: 14px 18px; flex-wrap: wrap; padding: 20px 0 14px; }
.lm-topo-esq, .lm-topo-dir { display: flex; align-items: center; gap: 10px 14px; flex-wrap: wrap; min-width: 0; }
.lm-avatar { display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%; background: #D9EAF0; }
.lm-titulo { min-width: 0; margin-right: 6px; }
.lm-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.lm-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.lm-nav { display: flex; align-items: center; gap: 4px; }
.lm-nav-btn { display: grid; place-items: center; width: 34px; height: 34px; border-radius: var(--r-md); border: 1px solid var(--borda-cartao); background: var(--superficie); color: var(--texto); }
.lm-nav-btn:hover { border-color: var(--acao); color: var(--acao); }
.lm-nav-txt { min-width: 150px; text-align: center; font-weight: 800; color: var(--texto); }
.lm-vistas .seg { min-width: 260px; }
.lm-busca { display: flex; align-items: center; gap: 8px; width: clamp(180px, 16vw, 260px); height: 42px; box-sizing: border-box; padding: 0 8px 0 12px; border-radius: var(--r-md); border: 1.5px solid var(--borda-cartao); background: var(--superficie); color: var(--texto-2); cursor: text; }
.lm-busca:focus-within { border-color: var(--acao); }
.lm-busca input { flex: 1; min-width: 0; border: 0; outline: none; background: transparent; font: inherit; font-size: var(--t2); color: var(--texto); }
.lm-busca kbd, .lm-legenda kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2); font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.lm-busca-x { display: grid; place-items: center; width: 28px; height: 28px; border-radius: var(--r-sm); color: var(--texto-2); }
.lm-imprimir { min-height: 42px; }
.lm-link { padding: 2px 4px; border-radius: var(--r-sm); font-size: var(--t1); font-weight: 800; color: var(--acao); text-decoration: underline; text-underline-offset: 2px; display: inline-flex; align-items: center; gap: 5px; }
.lm-mini { font-size: var(--t1); font-weight: 600; color: var(--texto-2); }
.lm-corpo .pergunta-dono { margin-bottom: 12px; }

/* ---- o quadro branco ---- */
.lm-quadro { position: relative; border-radius: var(--r-md); padding: 10px; background: linear-gradient(180deg, #E4E9EB, #C3CDD0); box-shadow: 0 14px 30px rgba(11,59,65,.16), inset 0 1px 0 #FFFFFF; color: #0B3B41;
  --q-0: #2F6FB5; }
.lm-canto { position: absolute; width: 18px; height: 18px; border-radius: var(--r-xs); background: linear-gradient(135deg, #9AA6AA, #6E7B80); }
.lm-canto:nth-child(1) { left: -4px; top: -4px; } .lm-canto:nth-child(2) { right: -4px; top: -4px; } .lm-canto:nth-child(3) { left: -4px; bottom: -4px; } .lm-canto:nth-child(4) { right: -4px; bottom: -4px; }
.lm-superficie { position: relative; border-radius: var(--r-xs); padding: 14px 16px 0; background: radial-gradient(120% 90% at 20% 10%, #FFFFFF, #F3F6F7 60%, #ECF1F2); box-shadow: inset 0 0 0 1px #D2DBDE, inset 0 2px 8px rgba(0,0,0,.06); }
.lm-cabeca { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px 18px; flex-wrap: wrap; margin-bottom: 8px; }
.lm-cabeca-esq { display: flex; align-items: flex-start; gap: 6px 18px; flex-wrap: wrap; min-width: 0; flex: 1 1 360px; }
.lm-titulo-mes { margin: -6px 0 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; line-height: 1; color: #0B3B41; text-transform: capitalize; }
.lm-semana-datas { margin: 6px 0 0; font-family: var(--fonte-titulo); font-size: var(--t2); color: #3F5A60; }
.lm-metas { display: flex; flex-direction: column; gap: 2px; min-width: 0; color: #1E6B44; }
.lm-metas-rot { display: flex; align-items: center; gap: 6px; margin: 0; font-size: var(--t0); font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.lm-icone { display: grid; place-items: center; width: 26px; height: 26px; border-radius: var(--r-sm); color: inherit; }
.lm-icone:hover { background: rgba(35,116,74,.1); }
.lm-meta { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t4); line-height: 1.15; overflow-wrap: anywhere; }
.lm-pequenas { display: flex; flex-wrap: wrap; gap: 2px 14px; margin: 2px 0 0; padding: 0; list-style: none; }
.lm-pequena { display: inline-flex; align-items: center; gap: 6px; min-height: 30px; font-family: var(--fonte-titulo); font-size: var(--t2); color: #1E6B44; }
.lm-caixa { width: 13px; height: 13px; border: 2px solid currentColor; border-radius: var(--r-xxs); flex-shrink: 0; }
.lm-pequena[data-feita] { text-decoration: line-through; color: #4F6B5C; }
.lm-pequena[data-feita] .lm-caixa { background: currentColor; }
.lm-metas .lm-link { color: #1E6B44; align-self: flex-start; }
.lm-abrir-mes { display: inline-flex; align-items: center; gap: 8px; min-height: 40px; margin-top: 4px; padding: 4px 14px; border-radius: var(--r-md); border: 2px dashed #7BB394; color: #1E6B44; font-family: var(--fonte-titulo); font-size: var(--t2); background: rgba(255,255,255,.6); }
.lm-abrir-mes:hover { border-style: solid; }

.lm-semana { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 5px; margin-bottom: 4px; }
.lm-semana span { text-align: center; font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; color: #4F6266; }
.lm-grade { display: flex; flex-direction: column; gap: 5px; }
.lm-linha { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 5px; }
.lm-dia { position: relative; display: flex; flex-direction: column; gap: 1px; min-width: 0; min-height: 112px; padding: 4px 6px 6px; box-sizing: border-box; border-radius: var(--r-sm); background: #FFFFFF; box-shadow: 0 0 0 1px #E3EBED; }
.lm-vazio { background: rgba(255,255,255,.35); box-shadow: none; }
.lm-dia[data-passado] { background: #F4F7F8; }
.lm-dia[data-hoje] { box-shadow: inset 0 0 0 2px #E2563C; }
.lm-dia[data-escolhido] { box-shadow: inset 0 0 0 2.5px #0B3B41, 0 0 0 3px #F4C25C; }
.lm-dia[data-alvo], .lm-coluna[data-alvo], .lm-postits[data-alvo], .lm-cartao[data-alvo] { box-shadow: inset 0 0 0 2.5px #2F6FB5; background: #EAF2FB; }
.lm-num { display: inline-flex; align-items: center; gap: 4px; align-self: flex-start; min-width: 30px; min-height: 28px; padding: 0 4px; margin: -2px 0 0 -4px; border-radius: var(--r-sm);
  font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; line-height: 1; color: #22323A; }
.lm-num:hover { background: #EEF4F5; }
.lm-dia[data-hoje] .lm-num { color: #B83A22; }
.lm-hoje { font-family: var(--fonte-titulo); font-size: var(--t1); font-weight: 800; color: #B83A22; }
.lm-itens { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.lm-rec { display: block; max-width: 100%; min-height: 22px; padding: 1px 2px; margin: 0 -2px; border-radius: var(--r-xs); text-align: left;
  font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.12; color: var(--q); overflow: hidden; overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; cursor: grab; }
.lm-rec .lm-rep { display: inline; vertical-align: -1px; margin-left: 2px; }
.lm-rec:hover { background: #F1F5F6; }
.lm-rec[data-feito] { color: #56676B; text-decoration: line-through; text-decoration-color: var(--q); text-decoration-thickness: 2px; }
.lm-rep { flex-shrink: 0; opacity: .8; }
.lm-adesivo { display: flex; align-items: center; max-width: 100%; min-height: 22px; margin-top: 2px; padding: 0 6px; border-radius: var(--r-sm); background: #FFFFFF; border: 1.5px solid var(--q); color: var(--q);
  font-size: var(--t0); font-weight: 800; text-align: left; white-space: nowrap; overflow: hidden; box-shadow: 0 1px 0 rgba(0,0,0,.08); }
.lm-adesivo[data-feito] { color: #56676B; border-style: dashed; }
.lm-adesivo-txt { overflow: hidden; text-overflow: ellipsis; }
.lm-marquinha { display: block; height: 16px; margin: 2px 0; border-radius: var(--r-sm); background: radial-gradient(60% 50% at 40% 50%, rgba(47,111,181,.10), transparent 70%), radial-gradient(40% 40% at 70% 40%, rgba(194,65,107,.09), transparent 70%); }
.lm-mais { align-self: flex-start; min-height: 22px; padding: 0 4px; margin-left: -4px; border-radius: var(--r-xs); font-family: var(--fonte-titulo); font-size: var(--t1); color: #3F5A60; }
.lm-escrever { display: flex; flex-direction: column; gap: 2px; margin-top: 3px; }
.lm-escrever:not([data-grande]) { position: absolute; z-index: 20; left: 4px; top: 24px; width: max(calc(100% - 8px), 280px); gap: 4px; margin: 0; padding: 8px; box-sizing: border-box; border-radius: var(--r-md); background: #FFFFFF; box-shadow: 0 14px 30px -10px rgba(0,0,0,.45), 0 0 0 1px #E3EBED; }
.lm-escrever input { width: 100%; min-width: 0; height: 30px; box-sizing: border-box; padding: 0 6px; border-radius: var(--r-sm); border: 2px solid var(--q); background: #FFFFFF; color: var(--q); font-family: var(--fonte-titulo); font-size: var(--t2); outline: none; }
.lm-entendi { font-size: var(--t00); font-weight: 800; color: #3F5A60; line-height: 1.2; }

.lm-postits { display: flex; align-items: flex-start; gap: 12px; margin-top: 14px; padding: 6px 4px; border-radius: var(--r-sm); }
.lm-postits-rot { flex-shrink: 0; margin: 2px 0 0; font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; line-height: 1; color: #4F6266; text-transform: capitalize; }
.lm-postits ul { display: flex; flex-wrap: wrap; gap: 14px; margin: 0; padding: 0; list-style: none; }
.lm-postit { display: flex; flex-direction: column; justify-content: space-between; gap: 4px; width: 124px; min-height: 70px; padding: 8px 9px; box-sizing: border-box; background: #FFF2A8; text-align: left;
  box-shadow: var(--sombra-papel-2); transform: rotate(-2deg); font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.15; color: #22323A; cursor: grab; }
.lm-postit[data-cor="1"] { background: #FFD6E0; transform: rotate(1.6deg); }
.lm-postit[data-cor="2"] { background: #D4F0E4; transform: rotate(-1deg); }
.lm-postit:hover { transform: rotate(0) translateY(-2px); }
.lm-postit[data-feito] { text-decoration: line-through; color: #56676B; }
.lm-postit-quem { font-family: var(--fonte); font-size: var(--t00); font-weight: 800; color: #5C5340; text-decoration: none; }
.lm-postit-novo { align-items: center; justify-content: center; flex-direction: row; background: rgba(255,255,255,.6); border: 2px dashed #B9C6CA; box-shadow: none; transform: none; font-family: var(--fonte); font-size: var(--t1); font-weight: 800; color: #3F5A60; cursor: pointer; }

.lm-bandeja { display: flex; align-items: flex-end; justify-content: space-between; gap: 8px 12px; flex-wrap: wrap; margin: 12px -16px 0; padding: 10px 16px 8px; background: linear-gradient(180deg, #CBD4D7, #B4C0C4); border-top: 1px solid #A7B4B8; border-radius: 0 0 var(--r-xs) var(--r-xs); }
.lm-canetas { display: flex; align-items: flex-end; gap: 6px; }
.lm-caneta, .lm-apagador { display: flex; flex-direction: column; align-items: center; gap: 3px; min-height: 44px; padding: 0 3px; border-radius: var(--r-sm); transition: transform .15s ease; }
.lm-caneta-corpo { display: flex; align-items: center; width: 74px; height: 14px; }
.lm-caneta-corpo i { width: 10px; height: 8px; border-radius: var(--r-xxs) 0 0 var(--r-xxs); background: var(--q); }
.lm-caneta-corpo b { flex: 1; height: 14px; border-radius: var(--r-xxs); background: linear-gradient(180deg, #FFFFFF, #E6ECEE); border: 1px solid #B9C6CA; }
.lm-caneta-corpo em { width: 18px; height: 14px; border-radius: 0 var(--r-sm) var(--r-sm) 0; background: var(--q); }
.lm-caneta[aria-pressed="true"] { transform: translateY(-8px) rotate(-4deg); }
.lm-caneta[data-filtrando] .lm-caneta-corpo { outline: 2px solid #0B3B41; outline-offset: 2px; border-radius: var(--r-xs); }
.lm-caneta-nome { font-size: var(--t0); font-weight: 800; color: #24353A; }
.lm-bandeja-dica { flex: 1 1 200px; margin: 0; font-size: var(--t0); font-weight: 700; color: #24353A; text-align: center; }
.lm-apagador-corpo { display: block; width: 70px; height: 18px; border-radius: var(--r-xs) var(--r-xs) var(--r-xxs) var(--r-xxs); background: linear-gradient(180deg, #22323A 0 45%, #F2F2EE 45%); box-shadow: var(--sombra-1); }
.lm-apagador:hover { transform: translateX(-4px) rotate(-3deg); }

/* ---- a semana ---- */
.lm-colunas { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 6px; }
.lm-coluna { display: flex; flex-direction: column; gap: 4px; min-width: 0; min-height: 220px; padding: 6px 7px 10px; border-radius: var(--r-sm); background: #FFFFFF; box-shadow: 0 0 0 1px #E3EBED; }
.lm-coluna[data-passado] { background: #F4F7F8; }
.lm-coluna[data-hoje] { box-shadow: inset 0 0 0 2px #E2563C; }
.lm-coluna[data-escolhido] { box-shadow: inset 0 0 0 2.5px #0B3B41, 0 0 0 3px #F4C25C; }
.lm-col-cab { display: flex; align-items: baseline; gap: 6px; padding: 0 2px 5px; border-bottom: 2px solid #D2DBDE; border-radius: var(--r-xs) var(--r-xs) 0 0; text-align: left; }
.lm-coluna[data-hoje] .lm-col-cab { border-bottom-color: #E2563C; }
.lm-col-dia { font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; line-height: 1; color: #0B3B41; }
.lm-col-num { font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; color: #4F6266; }
.lm-coluna[data-hoje] .lm-col-dia { color: #B83A22; }
.lm-itens-col .lm-rec { font-size: var(--t3); -webkit-line-clamp: 4; }
.lm-agora { position: relative; display: block; height: 14px; margin: 3px 0; font-size: var(--t00); font-weight: 900; color: #B83A22; }
.lm-agora::after { content: ""; position: absolute; left: 30px; right: -2px; top: 7px; border-top: 2px dashed #E2563C; }
.lm-faixas { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; }
.lm-faixa { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px 6px; align-items: center; }
.lm-faixa-nome { grid-column: 1 / -1; font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; line-height: 1.1; color: #0B3B41; }
.lm-faixa-cel { display: flex; align-items: center; justify-content: center; gap: 4px; min-height: 38px; border-radius: var(--r-sm); background: rgba(255,255,255,.7); }
.lm-vez { display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--p1); color: var(--sobre-p, #FFFFFF); font-size: var(--t0); font-weight: 900; }
.lm-vez[data-p="1"] { background: var(--p2); }
.lm-vez[data-vazia] { background: #FFFFFF; color: #3F5A60; border: 1.5px dashed #8EA3A8; }
.lm-vez:hover { transform: scale(1.08); }
.lm-jantar { display: flex; align-items: center; justify-content: center; width: 100%; min-height: 44px; padding: 3px 6px; border-radius: var(--r-sm); background: #FFFDF6; border: 1px solid #EFE2C2; color: #5C4100;
  font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.1; text-align: center; overflow-wrap: anywhere; }
.lm-jantar[data-vazio] { background: transparent; border-style: dashed; color: #6E5A2A; }
.lm-semana-acoes { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; margin-top: 10px; }

/* ---- a lista ---- */
.lm-lista { display: flex; flex-direction: column; gap: 12px; padding: 16px 20px; border-radius: var(--r-xl); background: var(--superficie); border: 1px solid var(--borda-cartao); }
.lm-lista-titulo { margin: 0 0 2px; font-size: var(--t2); font-weight: 800; color: var(--texto); }
.lm-lista-dia[data-hoje] .lm-lista-titulo { color: #B83A22; }
.lm-lista .recado-linha, .lm-painel .recado-linha { font-family: var(--fonte-titulo); font-weight: 400; font-size: var(--t3); line-height: 1.2; }

/* ---- painel ---- */
.lm-cartao { box-sizing: border-box; padding: 14px 16px; border-radius: var(--r-xl); background: var(--superficie); border: 1px solid var(--borda-cartao); }
.lm-h2 { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin: 0 0 6px; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; color: var(--texto); }
.lm-recados .recado { padding: 6px 0; }
.lm-recados .recado[data-apagado] { opacity: 1; }
.lm-rapido { margin-top: 12px; padding: 12px; border-radius: var(--r-lg); background: var(--pagina); border: 1.5px dashed var(--trilho-2); }
.lm-rapido-rot { margin: 0 0 6px; font-size: var(--t1); font-weight: 800; color: var(--texto-2); }
.lm-rapido-canetas { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.lm-pilula-caneta { min-height: 30px; padding: 0 10px; border-radius: var(--r-pill); border: 1.5px solid var(--q); background: var(--superficie); color: var(--q); font-size: var(--t1); font-weight: 800; }
.lm-pilula-caneta[aria-pressed="true"] { background: var(--q); color: #FFFFFF; }
.lm-rapido-campo input { width: 100%; height: 42px; box-sizing: border-box; padding: 0 12px; border-radius: var(--r-md); border: 2px solid var(--q); background: var(--superficie); color: var(--q); font-family: var(--fonte-titulo); font-size: var(--t3); outline: none; }
.lm-rapido-campo .lm-mini { margin: 6px 0 0; }
.lm-papeis { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 4px 0 10px; padding: 0; list-style: none; }
.lm-papel { position: relative; display: flex; flex-direction: column; gap: 6px; width: 100%; padding: 16px 8px 8px; box-sizing: border-box; background: #FFFDF6; border: 1px solid #E8DFC9; box-shadow: var(--sombra-papel-1); transform: rotate(-1.5deg); text-align: left; }
.lm-papel[data-giro="1"] { transform: rotate(1.2deg); background: #FFFFFF; }
.lm-papel:hover { transform: rotate(0) translateY(-2px); }
.lm-papel-ima { position: absolute; left: 50%; top: -7px; margin-left: -8px; }
.lm-papel-foto { display: block; height: 70px; overflow: hidden; border-radius: var(--r-xxs); background: #F1F5F6; }
.lm-papel-foto img { display: block; width: 100%; height: 100%; object-fit: cover; }
.lm-papel-txt { font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.1; color: #22323A; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.lm-valeus { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: var(--t15); }
.lm-valeus li { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.lm-mao { font-family: var(--fonte-titulo); font-size: var(--t2); color: var(--q); }
.lm-placar { display: flex; gap: 14px; align-items: flex-end; margin: 6px 0; }
.lm-placar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; font-size: var(--t15); color: var(--texto); }
.lm-placar-barra { display: block; width: 100%; border-radius: var(--r-sm) var(--r-sm) var(--r-xxs) var(--r-xxs); background: var(--p1); }
.lm-placar-col[data-p="1"] .lm-placar-barra { background: var(--p2); }
.lm-legenda { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 14px; margin: 12px 0 0; padding: 0; list-style: none; font-size: var(--t1); font-weight: 700; color: var(--texto-2); }
.lm-legenda li { display: inline-flex; align-items: center; gap: 5px; }
.lm-legenda i { width: 16px; height: 4px; border-radius: var(--r-xxs); background: var(--q); }
.lm-legenda li.lm-legenda-dica { display: block; flex-basis: 100%; font-weight: 600; line-height: 1.8; }

/* casa aberta em tela de notebook: os dias apertam sem perder o texto */
@container lmcorpo (max-width: 700px) {
  .lm-titulo-mes { font-size: var(--t6); }
  .lm-dia { min-height: 96px; padding: 3px 4px 5px; }
  .lm-rec { font-size: var(--t15); }
  .lm-faixa-nome { font-size: var(--t4); }
  .lm-coluna { padding: 5px 4px 8px; }
  .lm-itens-col .lm-rec { font-size: var(--t2); }
  .lm-postit { width: 108px; }
}
}

@layer escuro {
/* A lousa continua branca no escuro (\xE9 uma lousa de verdade): as cores dos canet\xF5es ficam as do dia. */
${xa} .lm-quadro [data-q="0"] { --q: #2F6FB5; } ${xa} .lm-quadro [data-q="1"] { --q: #C2416B; } ${xa} .lm-quadro [data-q="2"] { --q: #23744A; }
${xa} .lm-quadro [data-q="c"] { --q: #B5561A; } ${xa} .lm-quadro [data-q="l"] { --q: #1F6F8C; } ${xa} .lm-quadro [data-q="p"] { --q: #7B4FB5; } ${xa} .lm-quadro [data-q="k"] { --q: #8A6D1F; }
${xa} .lm-quadro { background: linear-gradient(180deg, #5E6D72, #3E4C51); box-shadow: var(--sombra-3); }
${xa} .lm-superficie { background: radial-gradient(120% 90% at 20% 10%, #F4F7F8, #E3EAEC 60%, #DDE5E7); }
${xa} .lm-dia, ${xa} .lm-coluna { background: #FBFDFD; } ${xa} .lm-dia[data-passado], ${xa} .lm-coluna[data-passado] { background: #EDF2F3; }
${xa} .ficou { background: #3A2219; border-color: #7A3C28; color: #FFE3D8; } ${xa} .ficou-t, ${xa} .ficou-dia, ${xa} .ficou .btn-texto { color: #F4A98C; }
${xa} .recado-conta { background: #4A3D1C; color: #FFF0CC; }
${xa} .recado-papel { color: #9DD3EA; border-color: #4E7F8C; }
${xa} .jantar-btn { background: #3A3218; border-color: #5C4F2A; color: #FFF0CC; }
${xa} .lm-rapido-campo input, ${xa} .lm-pilula-caneta { background: #12292E; }
${xa} .lm-papel { background: #F6F1E7; }
${xa} .fim-do-dia { background: #081619; border: 1px solid #2B4A50; }
}

@layer pintado {







}

@layer movimento {
html[data-movimento="parado"] .papel-carregando { animation: none; }
}
@keyframes lp-carrega { from { background-position: 200% 0; } to { background-position: 0 0; } }

/* ================= folha da geladeira (impress\xE3o) ================= */
.lm-impressao, .lm-impressao-copia { display: none; }
@media print {
  html[data-imprimindo] body > *:not(.lm-impressao-copia) { display: none !important; }
  html[data-imprimindo] .lm-impressao-copia { display: block !important; color: #000000; background: #FFFFFF; font-family: Georgia, "Times New Roman", serif; }
  html[data-imprimindo] body { background: #FFFFFF !important; margin: 0; }
  .lm-impressao-copia h1 { margin: 0 0 10px; font-family: var(--fonte-titulo); font-size: 18.6pt; font-weight: 800; }
  .lm-impressao-copia table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .lm-impressao-copia th, .lm-impressao-copia td { border: 1px solid #000000; padding: 5pt 6pt; vertical-align: top; text-align: left; font-size: 11pt; }
  .lm-impressao-copia th { font-size: 10pt; text-transform: uppercase; letter-spacing: .05em; }
  .imp-semana th:nth-child(1) { width: 14%; } .imp-semana th:nth-child(2) { width: 42%; } .imp-semana th:nth-child(3) { width: 26%; }
  .imp-semana td { height: 30mm; }
  .imp-semana td span, .imp-mes td span { display: block; font-family: var(--fonte-titulo); font-size: 10.32pt; line-height: 1.25; }
  .imp-linha { display: block; margin-top: 8mm; border-bottom: 1px dotted #000000; }
  .imp-mes td { height: 30mm; font-size: 9pt; } .imp-mes td span { font-size: 9.5pt; }
  .imp-pe { margin-top: 8pt; font-size: 9pt; }
  @page { size: A4; margin: 12mm; }
}
`;var La=ha(xo(),1);var q=ha(Ma(),1),Ut=e=>`${e.slice(8,10)}/${e.slice(5,7)}`,il=[{id:"gasto",nome:"Gasto",Icone:Te},{id:"receita",nome:"Receita",Icone:Me},{id:"varios",nome:"V\xE1rios",Icone:Fe}];function xn({cofre:e,cats:a,aoTrocar:o,aoLancar:t}){let i=e.pessoas||["Xan","Isa"],[s]=Re(i),[n,d]=(0,La.useState)(""),g="vista",[h,f]=(0,La.useState)(null),[l,k]=(0,La.useState)(null),[S,V]=(0,La.useState)({}),[u,b]=(0,La.useState)(null),[N,A]=(0,La.useState)(null),ia=(0,La.useRef)(null),E=async x=>{if(!x)return;b({lendo:!0,nome:x.name});let C=await Ri(x);if(!C.ok){b({erro:C.motivo,nome:x.name});return}V({}),d(C.linhas.join(`
`)),f("cartao"),A(Pi(Ot(C.linhas.join(`
`),fa).itens.filter(j=>!j.credito))),b({nome:x.name,resumo:C.csv?`Arquivo ${x.name} lido.`:Oi(C),confere:C.csv?!0:C.confere,ignorados:C.ignorados,csv:!!C.csv})},la=l||s||null,ca=Ne(a),R=ca.map(x=>x.id),fa=za(),X=(0,La.useMemo)(()=>Ot(n,fa),[n,fa]),I=(0,La.useMemo)(()=>_i(X.itens,e.lancamentos).map(x=>{let C=`${x.linha}|${x.valor}`,j=S[C]||{},M=j.tag!==void 0?j.tag:qi(x.nome,e.lojas,R),aa=!!N&&Z(x.data)!==N;return{...x,chave:C,tag:M,fora:aa,escolhida:j.tag!==void 0,incluir:j.incluir!==void 0?j.incluir:!x.ja&&!x.credito&&!aa}}),[X,e.lancamentos,e.lojas,S,N]),Sa=(x,C)=>V(j=>{let M={...j,[x]:{...j[x]||{},...C}};if(C.tag!==void 0){let aa=I.find(L=>L.chave===x),pa=aa?Mo(aa.nome):"";pa&&I.forEach(L=>{L.chave!==x&&!(j[L.chave]&&j[L.chave].tag!==void 0)&&Mo(L.nome)===pa&&(M[L.chave]={...M[L.chave]||{},tag:C.tag})})}return M}),va=I.filter(x=>x.incluir),ya=va.filter(x=>!x.tag).length,ja=va.reduce((x,C)=>x+C.valor,0),Ca=x=>g==="cartao"?Z(x.parcela&&!u?jt(x.data,x.parcela.k):jt(x.data,1)):Z(x.data),Ra=[...new Set(va.map(Ca))],Ea=va.length>0&&!ya&&!!la,H=n.trim()?va.length?ya?`Falta categoria em ${Ta(ya,"gasto")}`:la?`Lan\xE7ar ${Ta(va.length,"gasto")} \xB7 ${$a(ja)}`:"Escolha quem pagou":"Marque ao menos um gasto":"Cole as linhas acima",T=()=>{if(!Ea)return;let x=t(va.map(C=>({valor:C.valor,tag:C.tag,data:C.data,nome:C.nome,parcelas:1,todas:!1,parcela:C.parcela,escolhida:C.escolhida,daFatura:!!(u&&u.resumo&&!u.csv)})),{tipo:g,quem:la,pago:h});x&&!x.erro&&(d(""),V({}),b(null),f(null),A(null))},mo=(0,La.useMemo)(()=>{let x=[],C=Z(fa);for(let j=0;j<13;j++)x.push(C),C=$r(C);return N&&!x.includes(N)&&x.push(N),x},[fa,N]),Na=va.filter(x=>!x.tag).map(x=>x.chave),Va=ca.find(x=>x.id==="outros");return(0,q.jsxs)("div",{className:"lote",onKeyDown:x=>{x.key==="Enter"&&(x.ctrlKey||x.metaKey)&&(x.preventDefault(),T())},children:[(0,q.jsxs)("div",{className:"cabecalho",style:{paddingBottom:8},children:[(0,q.jsx)("h2",{className:"so-leitor",children:"Lan\xE7ar v\xE1rios de uma vez"}),(0,q.jsx)("div",{style:{flex:1},children:(0,q.jsx)(Ce,{grande:!0,rotulo:"O que lan\xE7ar",valor:"varios",aoEscolher:x=>{x!=="varios"&&o(x)},opcoes:il})})]}),(0,q.jsxs)("div",{className:"lote-corpo",children:[(0,q.jsxs)("div",{className:"entre lote-topo",children:[(0,q.jsx)("label",{className:"rotulo",htmlFor:"lote-texto",children:"Cole aqui as linhas da fatura ou do extrato"}),(0,q.jsxs)("button",{type:"button",className:"btn btn-secundario btn-pequeno lote-pdf",onClick:()=>ia.current&&ia.current.click(),disabled:!!(u&&u.lendo),children:[(0,q.jsx)(wt,{size:16,"aria-hidden":"true"})," ",u&&u.lendo?"Lendo o arquivo\u2026":"Ler a fatura (PDF ou CSV)"]}),(0,q.jsx)("input",{ref:ia,type:"file",accept:"application/pdf,.pdf,text/csv,.csv",className:"so-leitor",tabIndex:-1,"aria-hidden":"true","data-teste":"arquivo-fatura",onChange:x=>{let C=x.target.files&&x.target.files[0];x.target.value="",E(C)}})]}),u&&u.erro?(0,q.jsxs)("div",{className:"aviso aviso-erro lote-aviso",role:"alert",children:[(0,q.jsx)(Ka,{size:16,"aria-hidden":"true"}),(0,q.jsx)("span",{children:u.erro})]}):null,u&&u.resumo?(0,q.jsxs)("div",{className:`aviso ${u.confere?"aviso-info":"aviso-alerta"} lote-aviso lote-resumo-pdf`,role:"status",children:[(0,q.jsx)(wt,{size:16,"aria-hidden":"true"}),(0,q.jsxs)("span",{children:[u.resumo,u.ignorados.length?` Ficaram de fora: ${u.ignorados.map(x=>`${x.texto} (${x.motivo})`).join("; ")}.`:""," Cada gasto entra no dia da compra; as parcelas, com o n\xFAmero delas."]})]}):null,u&&u.resumo&&N?(0,q.jsxs)("div",{className:"lote-mes",children:[(0,q.jsx)("label",{className:"rotulo",htmlFor:"lote-mes",children:"A fatura se refere aos gastos de"}),(0,q.jsx)("select",{id:"lote-mes",className:"lote-cat",value:N,onChange:x=>{A(x.target.value),V(C=>{let j={};return Object.entries(C).forEach(([M,aa])=>{let{incluir:pa,...L}=aa;j[M]=L}),j})},children:mo.map(x=>(0,q.jsx)("option",{value:x,children:ye(x)},x))}),I.some(x=>x.fora&&!x.credito)?(0,q.jsxs)("span",{className:"legenda",children:[Ta(I.filter(x=>x.fora&&!x.credito).length,"gasto \xE9","gastos s\xE3o")," de outro m\xEAs: v\xEAm desmarcados."]}):null]}):null,(0,q.jsx)("textarea",{id:"lote-texto",className:"lote-texto",rows:5,value:n,spellCheck:!1,onChange:x=>d(x.target.value),placeholder:`03/10 PADARIA REAL        12,50
05/10 IFOOD *RESTAURANTE   58,90
14/10 PETZ               96,30 2/3`,"aria-describedby":"lote-dica"}),(0,q.jsx)("p",{id:"lote-dica",className:"legenda",children:'Uma compra por linha. O app separa o dia, o nome e o valor, sugere a categoria pelo nome e avisa o que parece j\xE1 lan\xE7ado. "2/3" no fim \xE9 a parcela 2 de 3.'}),X.naoEntendidas.length?(0,q.jsxs)("div",{className:"aviso aviso-alerta lote-aviso",role:"status",children:[(0,q.jsx)(Ka,{size:16,"aria-hidden":"true"}),(0,q.jsxs)("span",{children:["N\xE3o achei o valor em ",Ta(X.naoEntendidas.length,"linha"),": ",X.naoEntendidas.slice(0,3).map(x=>`"${x.texto.slice(0,40)}"`).join(", "),". Corrija no texto (o valor precisa de v\xEDrgula, como 12,50)."]})]}):null,I.length?(0,q.jsx)("ul",{className:"lote-lista","aria-label":"Gastos lidos",children:I.map(x=>{let C=x.tag?Xa(a,x.tag):null;return(0,q.jsxs)("li",{className:"lote-item","data-incluir":x.incluir?"1":void 0,"data-ja":x.ja?"1":void 0,children:[(0,q.jsx)("input",{type:"checkbox",checked:x.incluir,onChange:j=>Sa(x.chave,{incluir:j.target.checked}),"aria-label":`Incluir ${x.nome}, ${$a(x.valor)}`}),(0,q.jsx)("span",{className:"lote-dia",children:Ut(x.data)}),(0,q.jsxs)("span",{className:"lote-nome",children:[(0,q.jsx)("b",{children:x.nome}),x.ja?(0,q.jsxs)("span",{className:"lote-sub lote-ja",children:["j\xE1 lan\xE7ado em ",Ut(x.ja),"?"]}):null,x.credito?(0,q.jsx)("span",{className:"lote-sub lote-ja",children:"entrada ou estorno: fica de fora"}):null,x.fora&&!x.credito?(0,q.jsxs)("span",{className:"lote-sub lote-ja lote-fora",children:["de ",Ba(Z(x.data)),", fora do m\xEAs escolhido"]}):null,x.parcela?(0,q.jsxs)("span",{className:"lote-sub",children:["parcela ",x.parcela.k," de ",x.parcela.n,g==="cartao"?`, fatura de ${Ba(Ca(x))}`:""]}):null,x.aConferir?(0,q.jsx)("span",{className:"lote-sub lote-ja",children:"sem data: entra hoje"}):null]}),(0,q.jsxs)("select",{className:"lote-cat",value:x.tag||"",onChange:j=>Sa(x.chave,{tag:j.target.value||null}),"aria-label":`Categoria de ${x.nome}`,style:C?{"--cor":C.cor}:void 0,"data-vazia":C?void 0:"1",children:[(0,q.jsx)("option",{value:"",children:"Categoria\u2026"}),ca.map(j=>(0,q.jsx)("option",{value:j.id,children:j.nome},j.id))]}),(0,q.jsx)("b",{className:"lote-valor n",children:(0,q.jsx)(Bt,{v:x.valor})})]},x.chave)})}):null,Na.length>1&&Va?(0,q.jsxs)("button",{type:"button",className:"btn btn-texto lote-outros",onClick:()=>V(x=>{let C={...x};return Na.forEach(j=>{C[j]={...C[j]||{},tag:"outros"}}),C}),children:["P\xF4r os ",Na.length," sem categoria em Outros"]}):null,X.ignoradas?(0,q.jsxs)("p",{className:"legenda",children:[Ta(X.ignoradas,"linha de total, saldo ou pagamento ficou","linhas de total, saldo ou pagamento ficaram")," de fora."]}):null,(0,q.jsxs)("div",{className:"lote-opcoes",children:[(0,q.jsx)(Le,{valor:h,aoEscolher:f,uid:"lote"}),(0,q.jsx)("p",{className:"legenda campo-dica",children:"Cada gasto entra no dia dele; as parcelas, com o n\xFAmero delas."}),(0,q.jsx)("span",{className:"rotulo",style:{marginTop:10},children:"Pago por"}),(0,q.jsx)(Ae,{rotulo:"Pago por",pessoas:i,valor:la,aoEscolher:k})]})]}),(0,q.jsx)("div",{className:"lote-acao",children:(0,q.jsxs)("button",{type:"button",className:"btn btn-principal btn-grande btn-bloco","aria-disabled":!Ea,onClick:T,children:[Ea?(0,q.jsx)(Qo,{size:22,strokeWidth:3,"aria-hidden":"true"}):null,H]})})]})}function fn({cofre:e,cats:a,aoEditar:o}){let t=(0,La.useMemo)(()=>{let i=new Set;return[...e.lancamentos||[]].filter(s=>s.em&&!s.arquivado).sort((s,n)=>Number(n.em)-Number(s.em)||String(s.id).localeCompare(String(n.id))).filter(s=>{let n=s.compra?s.compra.id:s.id;return i.has(n)?!1:(i.add(n),!0)}).slice(0,4)},[e.lancamentos]);return t.length?(0,q.jsxs)("section",{className:"acabou","aria-labelledby":"acabou-t",children:[(0,q.jsx)("h2",{id:"acabou-t",className:"acabou-t",children:"Acabou de lan\xE7ar"}),(0,q.jsx)("ul",{children:t.map(i=>{let s=re(a,i);return(0,q.jsx)("li",{children:(0,q.jsxs)("button",{type:"button",className:"acabou-item",onClick:()=>o(i),"aria-label":`${i.obs||s.nome}, ${s.nome}, ${$a(i.valor)}, ${Ut(i.data)}. Clique para editar.`,children:[(0,q.jsxs)("span",{className:"acabou-nome",children:[(0,q.jsx)("span",{className:"cm-bolinha",style:{background:s.cor},"aria-hidden":"true"}),i.obs?`${i.obs} \xB7 ${s.nome}`:s.nome]}),(0,q.jsxs)("b",{className:"n",children:[i.tipo==="receita"?"+ ":"",i.compra&&i.compra.de>1?`${i.compra.de}x `:"",(0,q.jsx)(Bt,{v:i.valor})]})]})},i.id)})})]}):null}function hn({aoImportar:e}){return(0,q.jsxs)("button",{type:"button",className:"soltar-print",onClick:e,children:[(0,q.jsx)(ve,{size:20,"aria-hidden":"true"}),(0,q.jsxs)("span",{children:[(0,q.jsx)("b",{children:"Arraste aqui o print"})," da fatura ou do extrato, ou clique para escolher"]})]})}var K=ha(xo(),1);var v=ha(Ma(),1),bn=120;function nl({cofre:e,cats:a,editando:o,aoSalvar:t,aoFechar:i,aoExcluir:s,aoAlterado:n,aoAcaoRecorrente:d,aoImportar:g,aoPagarConta:h,aoContasFixas:f,aoVarios:l,tipoPedido:k}){let S=!!(o&&o.recorrente),[V,u]=(0,K.useState)(o?o.tipo:"gasto"),[b,N]=(0,K.useState)(o?o.valor:0),[A,ia]=(0,K.useState)(o?o.tag:null),[E,la]=(0,K.useState)(o?o.quem:Oe(e.pessoas||["Xan","Isa"])),[ca]=Re(e.pessoas||["Xan","Isa"]);(0,K.useEffect)(()=>{!o&&!E&&ca&&la(ca)},[ca]);let[R,fa]=(0,K.useState)(o?o.data:null),X=R||za(),I=(0,K.useId)().replace(/:/g,""),Sa=!1,va=Ee(),[ya,ja]=(0,K.useState)(!1),[Ca,Ra]=(0,K.useState)(o&&o.pago?o.pago:null),[Ea,H]=(0,K.useState)(1),[T,mo]=(0,K.useState)(o&&o.obs?o.obs:""),[Na,Va]=(0,K.useState)(o&&o.bicho?o.bicho:""),x=(0,K.useRef)(null),C=(0,K.useRef)(null),j=(0,K.useRef)(null),M=(0,K.useRef)(null),aa=(0,K.useRef)(!1),pa=!o,L=V==="receita",z=L?Se:Ne(a),P=pa&&!L&&Ea>1,pt=P?"parcelado":"vista",to=P&&b>=Ea?ii(b,Ea):[],U=b>0&&!!A&&!!E&&(!P||b>=Ea),Pa=(0,K.useMemo)(()=>L||A?null:zi(e,T,z.map(F=>F.id)),[e,T,L,A,z]),Ja=(0,K.useMemo)(()=>{if(!pa||L||!h||!T.trim())return null;let F=Mo(T);return F.length<3?null:ie(e,Z(X),a).contas.find(ta=>{if(ta.paga)return!1;let uo=Mo(ta.nome);return uo===F||F.length>=4&&(uo.startsWith(F)||F.startsWith(uo))})||null},[e,T,X,pa,L,a]),me=()=>{let F=h(Ja.id,Z(X),{valor:b||Ja.previsto,forma:pt,parcelas:Ea,quem:E,pagoEm:X});F&&!F.erro&&(N(0),ia(null),ja(!1),fa(null),mo(""),Va(""),Ra(null),H(1))},zo=(0,K.useMemo)(()=>pa?ui(e,V,6).filter(F=>L||z.some(ta=>ta.id===F.tag)).slice(0,3):[],[e,V,pa,a]),Eo=(0,K.useRef)(JSON.stringify([b,A,E,R,T]));(0,K.useEffect)(()=>{n&&n(o?JSON.stringify([b,A,E,R,T])!==Eo.current:b>0||!!A||!!T)},[b,A,E,R,T,o,n]),(0,K.useEffect)(()=>{if(!i||!o)return;let F=ta=>{ta.key==="Escape"&&!document.querySelector(".veu")&&i()};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[i,o]);let Vo=F=>{F!==V&&(u(F),ia(null),H(1),ja(!1))};(0,K.useEffect)(()=>{k&&k.t&&Vo(k.t)},[k]);let Yo=Z(X),bo=!L&&A&&e.tetos?e.tetos[A]:0,vo=(0,K.useMemo)(()=>bo&&mi(ao(e,Yo))[A]||0,[e,Yo,A,bo]),Fo=L?"recebeu":"pagou",dt=()=>o?S&&o.instanciaMes?`Salvar a partir de ${Ba(o.instanciaMes)}`:"Salvar altera\xE7\xE3o":b===0?"Digite o valor":E?A?P&&b<Ea?"Valor menor que as parcelas":ya?`Repetir ${$a(b)} todo m\xEAs`:P?`Lan\xE7ar ${Ea}x de ${$a(to[to.length-1])}`:`Lan\xE7ar ${$a(b)}`:L?"Escolha o tipo":"Escolha a categoria":`Escolha quem ${Fo}`,Go=()=>{b===0&&x.current?x.current.focus():!E&&C.current?C.current.querySelector("button").focus():!A&&j.current&&(j.current.scrollIntoView({block:"center",behavior:"smooth"}),j.current.querySelector("button").focus())},mt=()=>{let F={id:o?o.id:null,tipo:V,valor:b,tag:A,quem:E,data:X};L||(F.bicho=A==="pets"&&Na?Na:null,F.pago=Ca||null);let ta=T.trim();return ta&&(F.obs=ta.slice(0,bn)),F},go=F=>{if(!U){Go();return}t(mt(),{escopo:F||(S?"daqui":void 0),repete:ya&&pa&&!P,parcelas:P?Ea:0,noDia:!0}),pa&&(N(0),ia(null),ja(!1),fa(null),mo(""),Va(""),Ra(null),H(1))},Ao=o?S?"Editar recorrente":L?"Editar receita":"Editar gasto":L?"Nova receita":"Novo gasto",gt=o&&o.compra?Io(e.lancamentos,o):0;return(0,v.jsxs)("div",{className:"lancar-tela","data-tipo":V,onKeyDown:F=>{F.key==="Enter"&&(F.ctrlKey||F.metaKey)&&(F.preventDefault(),go())},children:[o?(0,v.jsxs)("div",{className:"cabecalho cabecalho-fixo",children:[(0,v.jsx)("button",{type:"button",className:"btn-icone btn-icone-borda",onClick:i,"aria-label":"Fechar sem salvar",children:(0,v.jsx)(qt,{size:22,"aria-hidden":"true"})}),(0,v.jsx)("h1",{className:"titulo",style:{fontSize:"var(--t4)",flex:1,textAlign:"center"},children:Ao}),(0,v.jsx)("span",{style:{width:44}})]}):(0,v.jsxs)("div",{className:"cabecalho",style:{paddingBottom:8},children:[(0,v.jsx)("h1",{className:"so-leitor",children:Ao}),(0,v.jsx)("div",{style:{flex:1},children:(0,v.jsx)(Ce,{grande:!0,rotulo:"O que lan\xE7ar",valor:V,aoEscolher:F=>F==="varios"?l():Vo(F),opcoes:[{id:"gasto",nome:"Gasto",Icone:Te},{id:"receita",nome:"Receita",Icone:Me},...l?[{id:"varios",nome:"V\xE1rios",Icone:Fe}]:[]]})})]}),(0,v.jsxs)("div",{className:"tela",children:[pa&&!L&&f?(()=>{let F=ie(e,Z(za()),a),ta=F.contas.length-F.pagas;return F.contas.length&&!ta?null:(0,v.jsxs)("button",{type:"button",className:"atalho-contas",onClick:f,children:[(0,v.jsx)(we,{size:18,"aria-hidden":"true"}),(0,v.jsx)("span",{children:F.contas.length?ta?`Contas fixas de ${Ba(Z(za()))}: ${ta} a pagar`:`Contas fixas de ${Ba(Z(za()))}: todas pagas`:"Cadastrar as contas fixas do m\xEAs (aluguel, luz, escola\u2026)"}),(0,v.jsx)(Ft,{size:18,"aria-hidden":"true"})]})})():null,S?(0,v.jsxs)("div",{className:"aviso aviso-info",style:{marginTop:12},children:[(0,v.jsx)(kt,{size:18,"aria-hidden":"true"}),(0,v.jsxs)("span",{children:["Este valor se repete todo m\xEAs. Escolha abaixo se a mudan\xE7a vale a partir de ",o.instanciaMes?Ba(o.instanciaMes):"agora",", s\xF3 neste m\xEAs ou em todos."]})]}):null,o&&o.compra?(0,v.jsxs)("div",{className:"aviso aviso-info",style:{marginTop:12},children:[(0,v.jsx)(Fr,{size:18,"aria-hidden":"true"}),(0,v.jsx)("span",{children:o.compra.de===1?`Compra no cart\xE3o em ${jr(o.compra.dataCompra).toLowerCase()}, na fatura de ${ye(Z(o.data))}.`:`Parcela ${o.compra.n} de ${o.compra.de} da compra de ${$a(gt)}. A mudan\xE7a vale s\xF3 para esta parcela.`})]}):null,(0,v.jsxs)("div",{className:"secao com-seta",children:[!o&&e.lancamentos.length<3&&!e.fixas.length?(0,v.jsx)(vi,{texto:"comece pelo valor",lado:"esquerda",className:"seta-valor"}):null,(0,v.jsxs)("div",{className:"entre rotulo-com-acao",children:[(0,v.jsx)("label",{className:"rotulo",htmlFor:`${I}-campo-valor`,children:P?"Valor total da compra":"Valor"}),g&&!L&&!o?(0,v.jsxs)("button",{type:"button",className:"btn btn-secundario btn-pequeno btn-importar",onClick:g,"aria-label":"Importar print de gastos",title:"V\xE1rios gastos de uma vez, lidos de um print",children:[(0,v.jsx)(ve,{size:16,"aria-hidden":"true"})," Importar print"]}):null]}),(0,v.jsxs)("div",{className:"valor",onClick:()=>x.current&&x.current.focus(),children:[(0,v.jsx)("span",{className:"valor-rs","aria-hidden":"true",children:"R$"}),(0,v.jsx)("input",{id:`${I}-campo-valor`,ref:x,type:"text",inputMode:"numeric",enterKeyHint:"next",autoComplete:"off","aria-describedby":`${I}-dica-valor`,placeholder:"0,00",value:b===0?"":zt(b),onChange:F=>{let ta=F.target.value.replace(/\D/g,"").slice(0,9);N(ta?parseInt(ta,10):0)},onFocus:F=>{let ta=F.target.value;if(o&&!aa.current){aa.current=!0,F.target.select();return}F.target.setSelectionRange(ta.length,ta.length)},onKeyDown:F=>{F.key==="Enter"&&(F.preventDefault(),M.current?M.current.focus():F.target.blur())},style:{color:L?"var(--acao)":"var(--texto)",fontSize:zt(b).length>9?"var(--t5)":void 0}}),b>0?(0,v.jsx)("button",{type:"button",className:"btn-icone","aria-label":"Apagar valor",onClick:F=>{F.stopPropagation(),N(0),x.current&&x.current.focus()},children:(0,v.jsx)(qt,{size:20,"aria-hidden":"true"})}):null]}),(0,v.jsx)("p",{id:`${I}-dica-valor`,className:"legenda campo-dica",children:"Digite s\xF3 os n\xFAmeros: 1250 vira R$ 12,50."})]}),(0,v.jsxs)("div",{className:"secao secao-obs",children:[(0,v.jsxs)("label",{className:"rotulo",htmlFor:`${I}-campo-obs`,children:["Observa\xE7\xE3o ",(0,v.jsx)("span",{className:"rotulo-opcional",children:"(opcional)"})]}),(0,v.jsx)("input",{id:`${I}-campo-obs`,ref:M,className:"campo campo-obs",value:T,maxLength:bn,autoComplete:"off",enterKeyHint:"done",placeholder:L?"Ex.: sal\xE1rio de outubro":"O que foi? Ex.: feira do m\xEAs, farm\xE1cia",onChange:F=>mo(F.target.value),onKeyDown:F=>{F.key==="Enter"&&F.target.blur()}}),(0,v.jsx)("div",{role:"status","aria-live":"polite",className:"so-leitor",children:Ja?`${Ja.nome} est\xE1 nas contas do m\xEAs, ainda a pagar.`:Pa&&Pa!==A?`Sugest\xE3o de categoria: ${Xa(a,Pa).nome}.`:""}),Ja?(0,v.jsxs)("div",{className:"aviso aviso-info conta-parecida",style:{marginTop:10},children:[(0,v.jsxs)("span",{children:[Ja.nome," est\xE1 nas contas de ",Ba(Z(X)),", ainda a pagar."]}),(0,v.jsxs)("button",{type:"button",className:"btn btn-secundario btn-pequeno",onClick:me,disabled:!E,children:["Marcar como paga",b?` (${$a(b)})`:` (${$a(Ja.previsto)})`]})]}):null,Pa&&Pa!==A?(0,v.jsxs)("button",{type:"button",className:"chip chip-sugestao",onClick:F=>{ia(Pa),F.detail===0&&setTimeout(()=>{let ta=j.current&&j.current.querySelector(".cat[aria-pressed='true']");ta&&ta.focus()},30)},children:[(0,v.jsx)(Dt,{cat:Xa(a,Pa),tam:22})," Parece ",Xa(a,Pa).nome,": usar esta categoria"]}):null]}),zo.length?(0,v.jsxs)("div",{style:{marginTop:16},children:[(0,v.jsx)("span",{className:"rotulo",id:`${I}-rot-recentes`,children:"Repetir um recente"}),(0,v.jsx)("div",{className:"chips",role:"group","aria-labelledby":`${I}-rot-recentes`,children:zo.map(F=>{let ta=L?Se.find(Xo=>Xo.id===F.tag)||Se[0]:Xa(a,F.tag),uo=A===F.tag&&E===F.quem;return(0,v.jsxs)("button",{type:"button",className:"chip","aria-pressed":uo,onClick:()=>{ia(F.tag),la(F.quem)},children:[ta.nome," \xB7 ",F.quem]},F.tag+F.quem)})})]}):null,(0,v.jsxs)("div",{className:"secao",ref:j,children:[(0,v.jsx)("span",{className:"rotulo",id:`${I}-rot-cat`,children:L?"Tipo de receita":"Categoria"}),(0,v.jsx)("div",{className:"cats",role:"group","aria-labelledby":`${I}-rot-cat`,style:L?{gridTemplateColumns:"1fr 1fr"}:void 0,children:z.map(F=>(0,v.jsxs)("button",{type:"button",className:"cat","aria-pressed":A===F.id,onClick:()=>ia(F.id),children:[A===F.id?(0,v.jsx)("span",{className:"marca","aria-hidden":"true",children:(0,v.jsx)(Qo,{size:13,strokeWidth:3.5})}):null,(0,v.jsx)(Dt,{cat:F,tam:Sa?44:34}),(0,v.jsx)("span",{children:F.nome})]},F.id))}),!L&&A==="pets"?(0,v.jsxs)("div",{className:"bicho-escolha",role:"group","aria-label":"De quem \xE9 o gasto",children:[(0,v.jsx)("span",{className:"rotulo",children:"De quem \xE9"}),(0,v.jsx)("div",{className:"chips-quebra",children:[["mia","Mia"],["marie","Marie"],["ambas","As duas"]].map(([F,ta])=>(0,v.jsx)("button",{type:"button",className:"chip","aria-pressed":Na===F,onClick:()=>Va(Na===F?"":F),children:ta},F))})]}):null,bo?(0,v.jsxs)("p",{className:"legenda",style:{marginTop:8,color:vo+b>bo?"var(--perigo-texto)":void 0,fontWeight:650},children:[Xa(a,A).nome," em ",Ba(Yo),": ",qe(vo)," de ",qe(bo),pa&&b?`, ${qe(vo+(P?to[0]||0:b))} com este`:"","."]}):null]}),L?null:(0,v.jsxs)("div",{className:"secao",children:[(0,v.jsx)(Le,{valor:Ca,aoEscolher:Ra,uid:I}),pa?(0,v.jsx)(wi,{n:Ea,setN:F=>{H(F),(typeof F=="function"?2:F)>1&&ja(!1)},uid:I,data:X,centavos:b}):null]}),(0,v.jsxs)("div",{className:"secao",ref:C,children:[(0,v.jsxs)("span",{className:"rotulo",id:`${I}-rot-quem`,children:["Quem ",Fo]}),(0,v.jsx)(Ae,{rotulo:`Quem ${Fo}`,pessoas:e.pessoas,valor:E,aoEscolher:la})]}),(0,v.jsxs)("div",{className:"secao",children:[(0,v.jsx)("span",{className:"rotulo",children:"Quando"}),(0,v.jsxs)("div",{className:"chips-quebra",children:[(0,v.jsx)(Kr,{valor:X,aoMudar:fa,Icone:be,prefixo:P?"Compra: ":"",rotulo:P?"Data da compra":"Data"}),pa&&!P?(0,v.jsxs)("button",{type:"button",className:"chip","aria-pressed":ya,onClick:()=>ja(!ya),children:[(0,v.jsx)(kt,{size:16,"aria-hidden":"true"})," Repete todo m\xEAs"]}):null]}),ya&&pa?(0,v.jsxs)("p",{className:"legenda campo-dica",children:["Repete todo dia ",Number(X.slice(8,10)),". Perto da data, o M\xEAs avisa que ",L?"vai cair":"vai vencer","."]}):null]}),S&&o.instanciaMes?(0,v.jsxs)("div",{className:"secao pilha",children:[(0,v.jsxs)("button",{type:"button",className:"btn btn-secundario btn-bloco",onClick:()=>go("mes"),children:["Salvar s\xF3 em ",Ba(o.instanciaMes)]}),(0,v.jsx)("button",{type:"button",className:"btn btn-secundario btn-bloco",onClick:()=>go("todos"),children:"Corrigir em todos os meses, inclusive os anteriores"}),(0,v.jsxs)("button",{type:"button",className:"btn btn-secundario btn-bloco",onClick:()=>d("pular",o),children:["N\xE3o teve em ",Ba(o.instanciaMes)]}),(0,v.jsxs)("button",{type:"button",className:"btn btn-perigo-sec btn-bloco",onClick:()=>d("encerrar",o),children:["Parar de repetir depois de ",Ba(o.instanciaMes)]})]}):null,o&&!S?(0,v.jsx)("div",{className:"secao",children:(0,v.jsxs)("button",{type:"button",className:"btn btn-perigo-sec btn-bloco",onClick:()=>s(o),children:[(0,v.jsx)(zr,{size:18,"aria-hidden":"true"})," ",o.compra&&o.compra.de>1?"Excluir parcelas":"Excluir lan\xE7amento"]})}):null]}),(0,v.jsxs)("div",{className:"barra-acao",children:[va?(0,v.jsxs)("button",{type:"button",className:"resumo-lancar",onClick:()=>{C.current&&C.current.scrollIntoView({block:"center",behavior:"smooth"})},"aria-label":`Conferir quem ${Fo}, quando e como`,children:[(0,v.jsx)("span",{children:E||`quem ${Fo}?`}),(0,v.jsx)("span",{"aria-hidden":"true",children:"\xB7"}),(0,v.jsx)("span",{children:X===za()?"hoje":ke(X)}),!L&&(Ca||P)?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{"aria-hidden":"true",children:"\xB7"}),(0,v.jsx)("span",{children:[Ca?ni(Ca).toLowerCase():"",P?`${Ea}x`:""].filter(Boolean).join(" ")})]}):null,ya&&pa?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{"aria-hidden":"true",children:"\xB7"}),(0,v.jsx)("span",{children:"todo m\xEAs"})]}):null,(0,v.jsx)(Ft,{size:14,"aria-hidden":"true"})]}):null,(0,v.jsxs)("button",{type:"button",className:"btn btn-principal btn-grande btn-bloco","aria-disabled":!U,onClick:()=>go(),children:[U&&pa?(0,v.jsx)(Qo,{size:22,strokeWidth:3,"aria-hidden":"true"}):null,dt()]})]})]})}var Ke=K.default.memo(nl);var We='.cc[data-mercado-mesa="1"]',Oa='html[data-tema="escuro"]';var vn="clamp(300px, 25vw, 370px)",Fn=`
@layer base {
${We} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${We}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${We} main[data-mercado-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) ${vn}; grid-template-areas: "topo topo" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 22px; align-items: start; }
${We} .toast { left: calc(var(--casa-larg) + 28px); right: calc(${vn} + 48px); width: auto; max-width: 520px; bottom: 20px; }
.mm { display: contents; }
.mm-topo { grid-area: topo; display: flex; align-items: center; gap: 14px 18px; flex-wrap: wrap; padding: 18px 0 16px; }
.mm-topo-esq { display: flex; align-items: center; gap: 14px; min-width: 0; }
.mm-sacola { display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%; background: #FFDDD2; }
.mm-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.mm-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.mm-sub b { color: #9A4515; }
.mm-anotar { position: relative; margin-left: auto; display: flex; align-items: center; gap: 8px; width: min(340px, 100%); min-height: 44px; padding: 0 10px; box-sizing: border-box; border-radius: var(--r-md); border: 1.5px solid var(--borda-cartao); background: var(--superficie); }
.mm-anotar:focus-within { border-color: var(--acao); box-shadow: 0 0 0 3px var(--acao-clara); }
.mm-anotar-mais { color: var(--acao); flex: 0 0 auto; }
.mm-anotar input { flex: 1; min-width: 0; min-height: 40px; border: 0; outline: none; background: transparent; font: inherit; font-size: var(--t2); color: var(--texto); }
.mm-anotar kbd, .mm kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2); font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.mm-anotar-erro { position: absolute; left: 0; top: calc(100% + 4px); margin: 0; z-index: 2; }
.mm-corpo { gap: 18px; }
.mm-giz { font-family: var(--fonte-titulo); font-weight: 800; }
.mm-mao { font-family: var(--fonte-titulo); }
.mm-chip { flex-shrink: 0; display: inline-flex; align-items: center; padding: 2px 9px; border-radius: var(--r-pill); background: #EEF4F5; color: #33474C; font-size: var(--t0); font-weight: 800; white-space: nowrap; }
.mm-chip[data-tom="aviso"] { background: #FFF3D6; color: #5C4100; }
.mm-chip[data-tom="ok"] { background: #E3F1DA; color: #1E5E37; }
.mm-chip[data-tom="falta"] { background: #FFE4DC; color: #7A2E14; }
.mm-editar { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: var(--r-sm); color: var(--texto-2); flex: 0 0 auto; }
.mm-editar:hover, .mm-editar:focus-visible { background: var(--fundo); color: var(--acao); }
.mm-vazio-bloco { margin: 18px 6px; font-family: var(--fonte-titulo); font-size: var(--t3); color: #55666B; }

/* ---- a lista da geladeira ---- */
.mm-lista .qc-cartao-cab { row-gap: 10px; }
.mm-lojas { display: flex; gap: 3px; padding: 3px; border-radius: var(--r-md); background: var(--seg-fundo); flex-wrap: wrap; }
.mm-loja { min-height: 34px; padding: 0 12px; border-radius: var(--r-sm); font-size: var(--t15); font-weight: 700; color: var(--texto); }
.mm-loja[aria-pressed="true"] { background: var(--superficie); font-weight: 800; box-shadow: var(--sombra-1); }
.mm-loja-n { font-size: var(--t0); font-weight: 900; opacity: .7; }
.mm-modos { gap: 6px; }
.mm-bloco { position: relative; padding: 26px 24px 16px; border-radius: var(--r-xs); color: #22323A;
  background: #FFFDF8;
  box-shadow: 0 16px 30px -18px rgba(0,0,0,.45), inset 0 0 0 1px #E8DFC9; }
.mm-bloco::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 12px; background: repeating-linear-gradient(90deg, #E8DFC9 0 6px, transparent 6px 12px); opacity: .7; }
.mm-ima { position: absolute; left: 50%; top: -12px; width: 26px; height: 26px; margin-left: -13px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FFFFFF 0 12%, #E2483D 34%, #B53328 75%); box-shadow: var(--sombra-1); }
.mm-colunas { columns: 2; column-gap: 34px; }
@container qccorpo (max-width: 820px) { .mm-colunas { columns: 1; } }
.mm-corredor { break-inside: avoid; margin-bottom: 12px; }
.mm-corredor-t { display: flex; align-items: center; gap: 8px; margin: 0 0 2px; font-size: var(--t5); line-height: 1.1; color: #0B3B41; }
.mm-corredor-n { display: inline-grid; place-items: center; flex: 0 0 24px; width: 24px; height: 24px; border-radius: var(--r-sm); color: #FFFFFF; font: 900 .78rem var(--fonte); }
.mm-itens { margin: 0; padding: 0; list-style: none; }
/* a pauta do caderno \xE9 a linha de cada item (sempre alinhada com o texto) */
.mm-item { display: flex; align-items: center; gap: 6px; min-height: 34px; border-bottom: 1px solid rgba(143,183,196,.45); }
.mm-item[data-na-hora] { background: #FFF6DA; box-shadow: -6px 0 0 #FFF6DA, 6px 0 0 #FFF6DA; }
.mm-item-marca { flex: 1; min-width: 0; display: flex; align-items: center; gap: 10px; padding: 4px 0; text-align: left; color: inherit; }
.mm-caixa { display: inline-grid; place-items: center; flex: 0 0 22px; width: 22px; height: 22px; border-radius: var(--r-sm); border: 2px solid #4D6A70; background: #FFFFFF; color: #FFFFFF; }
.mm-item-marca:hover .mm-caixa { border-color: var(--acao); }
.mm-item[data-comprado] .mm-caixa { background: #0B6A73; border-color: #0B6A73; }
.mm-item-nome { font-family: var(--fonte-titulo); font-size: var(--t3); line-height: 1.15; min-width: 0; overflow-wrap: anywhere; }
.mm-item[data-comprado] .mm-item-nome { color: #66777C; text-decoration: line-through; text-decoration-thickness: 2px; }
.mm-item-qtd { font-size: var(--t1); font-weight: 800; color: #55666B; white-space: nowrap; }
.mm-item-dir { display: flex; align-items: center; gap: 6px; flex: 0 1 auto; min-width: 0; }
.mm-origem { display: inline-block; max-width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 1px 8px; border-radius: var(--r-pill); background: #EEF4F5; color: #33474C; font-size: var(--t0); font-weight: 800; }
.mm-origem[data-tipo="jantar"] { background: #FFF3D6; color: #5C4100; }
.mm-origem[data-tipo="escola"] { background: #FFE4DC; color: #7A2E14; }
.mm-origem[data-tipo="despensa"] { background: #FDE7E7; color: #8F2A20; }
.mm-origem[data-tipo="sempre"] { background: #E7F4F2; color: #0B5F67; }
.mm-origem[data-tipo="pronta"] { background: #EDE7F6; color: #4A2F7A; }
.mm-origem[data-tipo="recado"] { background: #FFE9A8; color: #4D3700; }
.mm-origem[data-tipo="lazer"] { background: #E3F1DA; color: #1E5E37; }
.mm-carrinho { font-size: var(--t0); font-weight: 800; white-space: nowrap; }
.mm-itens-curtos .mm-item-nome { font-size: var(--t3); }
.mm-itens-curtos .mm-origem { max-width: 110px; }

/* ---- colar ---- */
.mm-colar { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); gap: 18px; align-items: start; }
@container qccorpo (max-width: 760px) { .mm-colar { grid-template-columns: minmax(0, 1fr); } }
.mm-achado { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: var(--t2); }
.mm-achado-nome { flex: 1; min-width: 0; }
.mm-mono { font-family: "Courier New", ui-monospace, monospace; font-size: var(--t15); }

/* ---- ao lado ---- */
.mm-no-mercado { border: 2px solid #F4C25C; background: #FFFBEF; color: #2B2410; }
.mm-no-cab { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.mm-no-mercado .qc-mini { color: #4D4433; }
.mm-pedir .rotulo { color: #2B2410; }
.mm-pedir-linha { display: flex; gap: 6px; }
.mm-pedir-linha .campo { flex: 1; min-width: 0; }
.mm-hora { display: flex; flex-direction: column; gap: 4px; padding: 8px 0; }
.mm-hora-cab { display: flex; align-items: center; gap: 8px; justify-content: space-between; font-size: var(--t2); }
.mm-barra { display: block; height: 8px; border-radius: var(--r-pill); background: #E3EDF0; overflow: hidden; }
.mm-barra > span { display: block; height: 100%; border-radius: var(--r-pill); }
.mm-teto { height: 12px; margin: 8px 0 4px; border-radius: var(--r-pill); background: #E3EDF0; overflow: hidden; }
.mm-teto > span { display: block; height: 100%; border-radius: var(--r-pill); }
.mm-dois-botoes { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.mm-dois-botoes .btn { justify-content: center; }

/* ---- despensa ---- */
.mm-armario { padding: 16px 20px 8px; border-radius: var(--r-lg); background: linear-gradient(180deg, #FFF6EA, #F5E6D2); border: 1px solid #E8D3B8; color: #3B2410; }
.mm-armario .qc-mini { color: #5A4330; }
.mm-armario-vazio { padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; }
.mm-prateleira + .mm-prateleira { margin-top: 14px; }
.mm-potes { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 10px; padding: 0 4px; }
.mm-tabua { display: block; height: 14px; margin: 0 -10px; border-radius: var(--r-xxs); background: linear-gradient(180deg, #C9A57A, #A8774A); box-shadow: var(--sombra-papel-1); }
.mm-pote { position: relative; display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0; padding-bottom: 4px; }
.mm-pote-vidro { position: relative; display: block; width: 62px; height: 78px; border-radius: var(--r-sm) var(--r-sm) var(--r-md) var(--r-md); background: rgba(255,255,255,.8); border: 2px solid #9C8B76; overflow: hidden; box-shadow: inset 0 0 0 3px rgba(255,255,255,.6); cursor: pointer; }
.mm-pote-vidro:hover { transform: translateY(-2px); }
.mm-pote-vidro:focus-visible { outline: 3px solid var(--acao); outline-offset: 2px; }
.mm-pote[data-alerta] .mm-pote-vidro { border-color: #B53328; }
.mm-pote-cheio { position: absolute; left: 0; right: 0; bottom: 0; opacity: .78; transition: height .25s; }
.mm-pote-tampa { position: absolute; left: -2px; right: -2px; top: -2px; height: 12px; border-radius: var(--r-xs); background: #9C6B4A; }
.mm-pote-rotulo { position: absolute; left: 6px; right: 6px; top: 30px; padding: 2px 0; border-radius: var(--r-xxs); background: #FFFDF6; font-size: 8.5px; font-weight: 900; text-align: center; color: #3B2410; overflow: hidden; white-space: nowrap; }
.mm-pote-nome { font-size: var(--t1); font-weight: 800; text-align: center; overflow-wrap: anywhere; line-height: 1.2; }
.mm-pote-nivel { font-size: var(--t0); font-weight: 800; color: #6B5240; }
.mm-pote[data-alerta] .mm-pote-nivel { color: #A3271D; }
.mm-pote .mm-editar { position: absolute; top: -4px; right: -2px; width: 24px; height: 24px; background: #FFFDF6; border: 1px solid #E8D3B8; opacity: 0; }
.mm-pote:hover .mm-editar, .mm-pote .mm-editar:focus-visible { opacity: 1; }
@media (hover: none) { .mm-pote .mm-editar { opacity: 1; } }
.mm-sugestoes { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.mm-faixa-alerta { display: flex; align-items: center; gap: 10px; margin-top: 10px; padding: 10px 12px; border-radius: var(--r-md); background: #FFF1EC; color: #3B1A0E; }
.mm-faixa-alerta p { margin: 0; flex: 1; font-size: var(--t15); }
.mm-semana { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 8px; }
@container qccorpo (max-width: 900px) { .mm-semana { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.mm-dia { display: flex; flex-direction: column; gap: 5px; min-width: 0; padding: 10px; border-radius: var(--r-md); background: #FFFDF6; border: 1px solid #EFE2C2; color: #3B2E10; }
.mm-dia .qc-mini { color: #5E5235; }
.mm-dia[data-hoje] { border: 2px solid #E29578; }
.mm-dia[data-vazio] { background: #F7F9FA; border-color: #E3EDF0; }
.mm-dia-t { font-size: var(--t5); line-height: 1; }
.mm-dia-prato { font-size: var(--t3); line-height: 1.15; overflow-wrap: anywhere; }
.mm-ing { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 3px; font-size: var(--t1); }
.mm-ing li { display: flex; align-items: center; gap: 5px; overflow-wrap: anywhere; }
.mm-ing-marca { display: inline-grid; place-items: center; flex: 0 0 13px; width: 13px; height: 13px; border-radius: var(--r-xxs); border: 1.5px solid #B5561A; color: #FFFFFF; }
.mm-ing li:not([data-estado="falta"]) .mm-ing-marca { background: #23744A; border-color: #23744A; }
.mm-dia .mm-chip { align-self: flex-start; white-space: normal; }
.mm-prontas { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 10px; }
.mm-pronta { display: flex; flex-direction: column; gap: 6px; align-items: flex-start; padding: 12px; border-radius: var(--r-lg); background: var(--superficie); border: 1.5px solid var(--borda-cartao); border-top: 6px solid var(--cor); }
.mm-pronta-cab { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; width: 100%; }
.mm-pronta .qc-mini { flex: 1; }
.mm-cor { width: 32px; height: 32px; border-radius: 50%; border: 3px solid transparent; }
.mm-cor[aria-pressed="true"] { border-color: var(--texto); }
.mm-outra[data-tipo="feira"] { background: #FFF8E8; border-color: #EFDDB0; color: #3B2E10; }
.mm-outra[data-tipo="feira"] .qc-mini, .mm-outra[data-tipo="feira"] .qc-vazio { color: #5E5235; }

/* ---- folhas ---- */
.mm-loja-edit { display: flex; flex-direction: column; gap: 10px; padding: 12px; border-radius: var(--r-lg); border: 1px solid var(--borda-cartao); }
.mm-ordem { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.mm-ordem li { display: flex; align-items: center; gap: 8px; padding: 4px 6px 4px 8px; border-radius: var(--r-md); border: 1px solid var(--borda-cartao); background: var(--superficie); cursor: grab; }
.mm-ordem li[data-arrastando] { opacity: .5; }
.mm-ordem-pega { color: var(--texto-2); flex: 0 0 auto; }
.mm-ordem-nome { flex: 1; font-weight: 700; }

/* ---- voltei ---- */
.mm-cupom-grade { display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: 20px; align-items: start; }
@container qccorpo (max-width: 720px) { .mm-cupom-grade { grid-template-columns: minmax(0, 1fr); } }
.mm-cupom { padding: 14px 14px 18px; background: #FFFFFF; color: #2E2A28; font-family: "Courier New", ui-monospace, monospace; font-size: var(--t1); box-shadow: var(--sombra-papel-3); border: 1px solid #E5E5E5; transform: rotate(-.8deg); }
.mm-cupom ul { margin: 0; padding: 4px 0; list-style: none; border-top: 1px dashed #999999; border-bottom: 1px dashed #999999; }
.mm-cupom li { padding: 2px 0; overflow-wrap: anywhere; }
.mm-cupom-cab { margin: 0 0 6px; text-align: center; font-weight: 700; }
.mm-cupom-total { display: flex; justify-content: space-between; margin: 6px 0 0; font-weight: 700; font-size: var(--t15); }
.mm-conf { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: var(--t15); }
.mm-conf-nome { flex: 1; min-width: 0; overflow-wrap: anywhere; }
.mm-conf-ok { display: inline-grid; place-items: center; width: 32px; color: #23744A; }
.mm-conf-mais { display: inline-grid; place-items: center; width: 32px; color: #9A4515; }
.mm-lancar { border: 2px solid #23744A; }
.mm-lancar-grade { display: grid; grid-template-columns: minmax(180px, 260px) minmax(0, 1fr); gap: 16px; align-items: start; }
@container qccorpo (max-width: 640px) { .mm-lancar-grade { grid-template-columns: minmax(0, 1fr); } }
.mm-partes { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-top: 8px; padding: 10px; border-radius: var(--r-md); background: #F4F8F9; }
.mm-parte-resto { grid-column: 1 / -1; margin: 0; }
.mm-barras { position: relative; display: flex; align-items: flex-end; gap: 8px; height: 150px; padding-top: 6px; }
.mm-barras-teto { position: absolute; z-index: 1; left: 0; right: 0; border-top: 2px dashed #B53328; }
.mm-barra-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 0; }
.mm-barra-v { position: relative; display: flex; justify-content: center; width: 100%; border-radius: var(--r-sm) var(--r-sm) var(--r-xxs) var(--r-xxs); }
.mm-barra-v > span { padding-top: 4px; font-size: var(--t00); font-weight: 900; color: #0B3B41; }
.mm-barra-m { height: 18px; font-size: var(--t0); font-weight: 800; color: var(--texto-2); }
.mm-quem { display: flex; gap: 10px; }
.mm-quem-p { flex: 1; min-width: 0; padding: 10px; border-radius: var(--r-md); background: color-mix(in srgb, var(--cor) 9%, var(--superficie)); }
.mm-quem-nome { display: flex; align-items: center; gap: 6px; margin: 0; font-weight: 800; }
.mm-quem-p .qc-giz-medio { margin-top: 4px; }

/* ---- celular ---- */
.mercado-lojas { margin: 0 0 12px; overflow-x: auto; scrollbar-width: none; }
.mercado-lojas button { flex: 1 0 auto; padding: 0 14px; white-space: nowrap; }
.mercado-vou { margin: 0 0 14px; }
.mercado-la { display: flex; align-items: center; gap: 10px; margin: 0 0 14px; padding: 10px 12px; border-radius: var(--r-lg); border: 2px solid #F4C25C; background: #FFFBEF; color: #2B2410; }
.mercado-la p { margin: 0; flex: 1; font-size: var(--t2); line-height: 1.35; }
.mercado-pedidos .mercado-secao-titulo { display: flex; align-items: center; gap: 6px; color: #6B4A00; }
.mercado-item[data-na-hora] { background: #FFF6DA; }
}

@layer escuro {
${Oa} .mm-sub b { color: #F0A57E; }
${Oa} .mm-chip { background: #1D3438; color: #D4E6E9; }
${Oa} .mm-chip[data-tom="aviso"] { background: #3A2E10; color: #FFE3A3; }
${Oa} .mm-chip[data-tom="ok"] { background: #173A26; color: #BDE5C9; }
${Oa} .mm-chip[data-tom="falta"] { background: #3E2016; color: #FFCBB8; }
${Oa} .mm-pronta { background: var(--superficie); }
${Oa} .mm-partes { background: #10262A; }
${Oa} .mm-quem-p { background: #10262A; }
${Oa} .mercado-la, ${Oa} .mm-no-mercado { background: #2E2710; border-color: #8C6B1E; color: #FFF1C9; }
${Oa} .mercado-la p, ${Oa} .mm-no-mercado .qc-mini, ${Oa} .mm-pedir .rotulo { color: #FFF1C9; }
${Oa} .mercado-item[data-na-hora] { background: #3A3115; }
}

@media print {
  .mm-imp-copia, .lm-impressao-copia.mm-imp { width: 105mm; font-family: Georgia, "Times New Roman", serif; font-size: 11pt; line-height: 1.35; color: #000000; }
  .lm-impressao-copia.mm-imp .mm-imp-cab { display: flex; justify-content: space-between; align-items: baseline; gap: 8pt; padding-bottom: 4pt; margin-bottom: 6pt; border-bottom: 1.5pt solid #000000; }
  .lm-impressao-copia.mm-imp .mm-imp-t { font-family: var(--fonte-titulo); font-size: 16.12pt; line-height: 1; }
  .lm-impressao-copia.mm-imp .mm-imp-grupo { break-inside: avoid; margin-bottom: 6pt; }
  .lm-impressao-copia.mm-imp .mm-imp-sec { margin: 0 0 2pt; font-size: 9pt; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .lm-impressao-copia.mm-imp .mm-imp-item { display: flex; align-items: center; gap: 6pt; margin: 0; padding: 2pt 0; font-family: var(--fonte-titulo); font-size: 10.75pt; border-bottom: 0.5pt solid #BBBBBB; }
  .lm-impressao-copia.mm-imp .mm-imp-caixa { display: inline-block; flex: 0 0 9pt; width: 9pt; height: 9pt; border: 1pt solid #000000; border-radius: 2pt; }
}
`;var Ze='.cc[data-lazer-mesa="1"]',ma='html[data-tema="escuro"]';var wn="clamp(300px, 25vw, 370px)",yn=`
@layer base {
${Ze} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${Ze}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${Ze} main[data-lazer-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) ${wn}; grid-template-areas: "topo topo" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 22px; align-items: start; }
${Ze} .toast { left: calc(var(--casa-larg) + 28px); right: calc(${wn} + 48px); width: auto; max-width: 520px; bottom: 20px; }
.lz { display: contents; }
.lz kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2); font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.lz .btn-principal kbd { background: rgba(255,255,255,.9); color: #0B3B41; border-color: transparent; }
.lz-topo { grid-area: topo; display: flex; align-items: center; gap: 14px 18px; flex-wrap: wrap; padding: 18px 0 16px; }
.lz-topo-esq { display: flex; align-items: center; gap: 14px; min-width: 0; }
.lz-medalha { display: grid; place-items: center; }
.lz-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.lz-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.lz-sub b { color: #9A4515; }
.lz-hoje-tempo { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: var(--r-pill); background: var(--superficie); border: 1px solid var(--borda-cartao); font-size: var(--t2); color: var(--texto); }
.lz-hoje-tempo > span:not(.lz-tempo-ico) { color: var(--texto-2); font-weight: 700; }
.lz-hoje-onde { font-size: var(--t0); }
.lz-topo-dir { margin-left: auto; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.lz-topo-dir .btn { min-height: 42px; }
.lz-corpo { gap: 18px; }
.lz-rot { margin: 0 0 4px; font-size: var(--t15); font-weight: 800; color: var(--texto); }
.lz-giz-medio { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; line-height: 1; color: var(--texto); }
.lz-h2-giz { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 800; line-height: 1; color: #0B3B41; }
.lz-tempo-ico { display: inline-flex; flex: 0 0 auto; }
.lz-tempo-ico[data-icone="sol"] { color: #C98A0A; }
.lz-tempo-ico[data-icone="nuvem-sol"] { color: #B5791A; }
.lz-tempo-ico[data-icone="nuvem"] { color: #55666B; }
.lz-tempo-ico[data-icone="chuva"] { color: #2F6FB5; }
.lz-tempo-ico[data-icone="tempestade"] { color: #6B4FA8; }
.lz-quem { display: inline-flex; gap: 3px; align-items: center; flex-wrap: wrap; }
.lz-pet { display: inline-flex; align-items: center; gap: 3px; height: 22px; padding: 0 7px; border-radius: var(--r-pill); background: #FFF3E0; color: #8A4E0E; font-size: var(--t0); font-weight: 900; }
.lz-pet[data-pet="marie"] { background: #EEF1F4; color: #46555A; }

/* ---- a trilha ---- */
.lz-trilha { position: relative; min-height: 360px; padding: 16px 18px 22px; border-radius: var(--r-xl); overflow: hidden; border: 1px solid #BFE0E4; color: #0B3B41;
  background: linear-gradient(180deg, #BFE6EE 0%, #DDF2F4 46%, #EEF8F2 100%); }
.lz-ceu { position: absolute; inset: 0; pointer-events: none; }
.lz-paisagem { position: absolute; inset: 0; width: 100%; height: 100%; }
.lz-sol { position: absolute; right: 46px; top: 22px; width: 52px; height: 52px; border-radius: 50%; background: radial-gradient(circle, #FFE07A 0 55%, #F4C25C 56%); box-shadow: 0 0 0 10px rgba(255,224,122,.25), 0 0 0 22px rgba(255,224,122,.12); animation: lz-brilho 6s ease-in-out infinite alternate; }
.lz-nuvem { position: absolute; width: 90px; height: 26px; border-radius: var(--r-pill); background: rgba(255,255,255,.9); animation: lz-vento 22s ease-in-out infinite alternate; }
.lz-nuvem::before, .lz-nuvem::after { content: ""; position: absolute; border-radius: 50%; background: inherit; }
.lz-nuvem::before { width: 38px; height: 38px; left: 14px; top: -18px; }
.lz-nuvem::after { width: 30px; height: 30px; left: 44px; top: -12px; }
.lz-n1 { left: 22%; top: 34px; }
.lz-n2 { left: 58%; top: 20px; transform: scale(.75); animation-duration: 30s; animation-delay: -8s; }
.lz-n3 { left: 80%; top: 70px; transform: scale(.6); animation-duration: 26s; animation-delay: -14s; opacity: .8; }
@keyframes lz-vento { from { translate: -24px 0; } to { translate: 24px 0; } }
@keyframes lz-brilho { from { box-shadow: 0 0 0 8px rgba(255,224,122,.25), 0 0 0 18px rgba(255,224,122,.1); } to { box-shadow: 0 0 0 12px rgba(255,224,122,.3), 0 0 0 26px rgba(255,224,122,.12); } }
.lz-arvore { position: absolute; width: 34px; height: 54px; background: linear-gradient(#6B4423, #6B4423) 50% 100%/6px 16px no-repeat, radial-gradient(circle at 50% 40%, #3F9455 0 60%, transparent 62%) 50% 0/34px 40px no-repeat; }
.lz-arvore-p { transform: scale(.7); }
.lz-trilha-cab { position: relative; z-index: 1; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.lz-hoje-peao { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: var(--r-pill); background: #0B6A73; color: #FFFFFF; font-size: var(--t1); font-weight: 800; }
.lz-paradas { --cols: var(--n); position: relative; z-index: 1; display: grid; grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); gap: 12px; margin: 10px 0 0; padding: 0; list-style: none; align-items: start; }
@container qccorpo (max-width: 900px) { .lz-paradas { --cols: 4; } .lz-parada:nth-child(n+5) { display: none; } }
.lz-parada { margin-top: var(--alt); display: flex; flex-direction: column; gap: 7px; min-width: 0; }
.lz-placa { position: relative; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding: 6px 9px; border-radius: var(--r-sm); color: #FFF8EC; font-size: var(--t1); background: linear-gradient(180deg, #B98A5E, #94653E); box-shadow: 0 3px 0 #6E4529, 0 6px 10px -6px rgba(0,0,0,.5); }
.lz-placa::before, .lz-placa::after { content: ""; position: absolute; top: 5px; width: 5px; height: 5px; border-radius: 50%; background: #6E4529; }
.lz-placa::before { left: 4px; } .lz-placa::after { right: 4px; }
.lz-placa b { padding-left: 4px; text-shadow: 0 1px 0 rgba(0,0,0,.25); }
.lz-feriadao { display: inline-flex; align-items: center; gap: 3px; padding: 1px 7px; border-radius: var(--r-pill); background: #FFE07A; color: #5C4100; font-size: var(--t00); font-weight: 900; }
.lz-casas { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.lz-casa { position: relative; display: flex; flex-direction: column; gap: 4px; min-height: 60px; padding: 6px 8px 7px; border-radius: var(--r-md); background: rgba(255,255,255,.94); border: 1px solid rgba(11,59,65,.12); box-shadow: var(--sombra-papel-2); transition: transform .15s, outline-color .15s; }
.lz-casa[data-feriado] { border-top: 4px solid #C2342A; }
.lz-casa[data-livre] { background: rgba(255,255,255,.6); border: 2px dashed #5F9A90; box-shadow: none; }
.lz-casa[data-sobre] { outline: 3px solid #E29578; outline-offset: 2px; transform: scale(1.04); background: #FFF6EF; }
.lz-casa-cab { display: flex; align-items: center; justify-content: space-between; gap: 4px; }
.lz-casa-dia { font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; line-height: 1; color: #0B3B41; }
.lz-casa-tempo { display: inline-flex; align-items: center; gap: 2px; font-size: var(--t0); font-weight: 800; color: #33474C; }
.lz-fita { display: -webkit-inline-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-height: 1.25; gap: 3px; align-self: flex-start; max-width: 100%; padding: 1px 7px; border-radius: var(--r-sm); background: #FFE4DC; color: #7A2E14; font-size: var(--t00); font-weight: 800; overflow: hidden; white-space: normal; overflow-wrap: break-word; }
.lz-fita[data-tipo="aniv"] { background: #FFF3D6; color: #5C4100; }
.lz-fita[data-tipo="escola"] { background: #E7F4F2; color: #0B5F67; }
.lz-bilhete { display: flex; flex-direction: column; align-items: flex-start; gap: 1px; width: 100%; padding: 5px 9px; border-radius: var(--r-sm); background: var(--cor); color: #FFFFFF; text-align: left; font-size: var(--t0);
  -webkit-mask: radial-gradient(circle 5px at 0 50%, transparent 96%, #000) left/51% 100% no-repeat, radial-gradient(circle 5px at 100% 50%, transparent 96%, #000) right/51% 100% no-repeat;
  mask: radial-gradient(circle 5px at 0 50%, transparent 96%, #000) left/51% 100% no-repeat, radial-gradient(circle 5px at 100% 50%, transparent 96%, #000) right/51% 100% no-repeat; }
.lz-bilhete b { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.15; }
.lz-bilhete span { font-size: var(--t00); font-weight: 700; opacity: .92; }
.lz-bilhete:hover, .lz-bilhete:focus-visible { filter: brightness(1.08); }
.lz-livre { display: flex; flex-direction: column; align-items: center; gap: 1px; width: 100%; margin-top: auto; padding: 2px; border-radius: var(--r-sm); color: #24564F; font-size: var(--t1); font-weight: 900; }
.lz-livre span { font-size: var(--t00); font-weight: 700; color: #3F6A62; }
.lz-livre:hover, .lz-livre:focus-visible { background: rgba(95,154,144,.14); }

/* ---- ingresso ---- */
.lz-ingresso { display: grid; grid-template-columns: minmax(240px, 300px) minmax(0, 1fr); border-radius: var(--r-xl); overflow: hidden; background: var(--superficie); border: 1px solid var(--borda-cartao); box-shadow: var(--sombra); }
@container qccorpo (max-width: 760px) { .lz-ingresso { grid-template-columns: minmax(0, 1fr); } }
.lz-canhoto { position: relative; padding: 18px 22px 18px 18px; color: #FFFFFF; background: linear-gradient(160deg, var(--cor), color-mix(in srgb, var(--cor) 70%, #000000)); }
.lz-canhoto::after { content: ""; position: absolute; right: -8px; top: 0; bottom: 0; width: 16px; background: radial-gradient(circle 6px at 8px 12px, var(--superficie) 96%, transparent) 0 0/16px 22px repeat-y; }
.lz-sobre { margin: 0; font-size: var(--t0); font-weight: 900; letter-spacing: .1em; opacity: .9; }
.lz-giz-grande { margin: 6px 0 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; line-height: .95; color: #FFFFFF; overflow-wrap: anywhere; }
.lz-mao-clara { margin: 6px 0 0; font-family: var(--fonte-titulo); font-size: var(--t2); }
.lz-quando { margin: 12px 0 0; font-size: var(--t3); font-weight: 800; }
.lz-falta { margin: 2px 0 10px; font-size: var(--t1); opacity: .92; }
.lz-vao { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 6px 8px; border-radius: var(--r-md); background: rgba(255,255,255,.16); }
.lz-ficam { font-size: var(--t0); font-weight: 800; }
.lz-ingresso-vazio .lz-canhoto { min-height: 160px; }
.lz-ingresso-corpo { padding: 16px 18px; min-width: 0; }
.lz-ingresso-grade { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); gap: 18px; }
@container qccorpo (max-width: 860px) { .lz-ingresso-grade { grid-template-columns: minmax(0, 1fr); } }
.lz-lado { display: flex; flex-direction: column; gap: 12px; }
.lz-tempo-dia { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: 0; }
.lz-aviso-chuva { display: flex; align-items: flex-start; gap: 6px; margin: 6px 0 0; padding: 6px 9px; border-radius: var(--r-md); background: #E3F0FB; color: #1F4E79; font-size: var(--t1); }
.lz-levar { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.lz-barrinha { display: block; height: 7px; border-radius: var(--r-pill); background: #E3EDF0; overflow: hidden; }
.lz-barrinha > span { display: block; height: 100%; background: #23744A; }
.lz-levar-lista { margin: 0; padding: 0; list-style: none; }
.lz-levar-lista li { display: flex; align-items: center; gap: 4px; border-bottom: 1px solid var(--trilho); font-size: var(--t2); }
.lz-levar-t { flex: 1; min-width: 0; }
.lz-levar-t[data-feito] { color: var(--texto-2); text-decoration: line-through; }
.lz-x { display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: var(--r-sm); color: var(--texto-2); }
.lz-x:hover { background: var(--fundo); }
.lz-levar-novo { display: flex; gap: 6px; margin-top: 4px; }
.lz-levar-novo .campo { flex: 1; min-width: 0; min-height: 38px; }
.lz-sugestoes { display: flex; gap: 4px; flex-wrap: wrap; }
.lz-sugestoes .chip { min-height: 30px; font-size: var(--t0); }

/* ---- viagem ---- */
.lz-viagem-grade { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) minmax(0, 1fr); gap: 16px; }
@container qccorpo (max-width: 900px) { .lz-viagem-grade { grid-template-columns: minmax(0, 1fr); } }
.lz-roteiro { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 5px; }
.lz-roteiro li { display: grid; grid-template-columns: 52px minmax(0, 1fr); align-items: center; gap: 6px; }
.lz-roteiro-dia { font-weight: 800; font-size: var(--t15); }
.lz-roteiro .campo { min-height: 38px; }
.lz-pet-linha { display: flex; flex-direction: column; gap: 4px; margin: 0 0 8px; padding: 8px 10px; border-radius: var(--r-md); background: #FFF3E0; color: #3B2410; font-size: var(--t15); }
.lz-pet-linha[data-pet="marie"] { background: #EEF1F4; color: #22323A; }
.lz-pet-linha label { display: flex; align-items: center; gap: 5px; }
.lz-pet-linha .campo { min-height: 38px; }

/* ---- mural ---- */
.lz-filtros { margin-bottom: 12px; }
.lz-cortica { position: relative; padding: 28px 24px 24px; border-radius: var(--r-lg);
  background: radial-gradient(circle at 20% 30%, rgba(255,255,255,.18) 1px, transparent 1.6px) 0 0/9px 9px, radial-gradient(circle at 70% 60%, rgba(120,72,30,.2) 1px, transparent 1.6px) 0 0/7px 7px, linear-gradient(135deg, #C99A62, #B88550);
  box-shadow: inset 0 0 0 8px #8C5A3C, inset 0 0 0 10px #6E4529; }
.lz-cortica-vazio { margin: 10px 0 0; text-align: center; font-family: var(--fonte-titulo); font-size: var(--t3); color: #FFF8EC; }
.lz-postais { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 28px 18px; }
.lz-postal { position: relative; display: flex; flex-direction: column; gap: 4px; padding: 12px 12px 10px; background: #FFFDF8; color: #22323A; border-top: 6px solid var(--cor); box-shadow: var(--sombra-papel-3); transform: rotate(var(--rot)); transition: transform .18s ease; cursor: grab; }
.lz-postal:hover, .lz-postal:focus-within { transform: rotate(0deg) translateY(-3px); z-index: 2; }
.lz-postal[data-arrastando] { opacity: .45; }
.lz-postal .qc-mini { color: #3F5A60; }
.lz-tacha { position: absolute; left: 50%; top: -12px; width: 15px; height: 15px; margin-left: -7px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FFFFFF 0 15%, #E2483D 40%, #B53328 80%); box-shadow: var(--sombra-1); }
.lz-selo { position: absolute; right: 10px; top: 10px; display: grid; place-items: center; width: 38px; height: 44px; box-sizing: border-box; background: color-mix(in srgb, var(--cor) 16%, #FFFFFF); border: 3px dotted #FFFDF8; outline: 1.5px solid color-mix(in srgb, var(--cor) 55%, #FFFFFF); outline-offset: -5px; transform: rotate(4deg); }
.lz-selo span { font-size: 7px; font-weight: 900; letter-spacing: .05em; color: var(--cor); transform: rotate(-12deg); }
.lz-selo::after { content: ""; position: absolute; left: -18px; top: 12px; width: 34px; height: 22px; border-radius: 50%; border: 1.5px solid rgba(34,50,58,.3); }
.lz-postal-cat { font-size: var(--t00); font-weight: 900; letter-spacing: .08em; text-transform: uppercase; color: var(--cor); padding-right: 46px; }
.lz-postal-t { margin: 0; padding-right: 44px; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 700; line-height: 1.12; color: #22323A; overflow-wrap: anywhere; }
.lz-postal-txt { white-space: pre-line; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.lz-etiquetas { display: flex; flex-wrap: wrap; gap: 4px; }
.lz-etq { padding: 1px 7px; border-radius: var(--r-pill); background: #EEF4F5; color: #2B3E43; font-size: var(--t00); font-weight: 800; }
.lz-postal-pe { display: flex; align-items: center; gap: 6px; margin-top: 4px; }
.lz-coracoes { display: inline-flex; gap: 3px; }
.lz-coracao { display: inline-grid; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: #E3EDF0; color: #8A9A9E; }
.lz-coracao[data-on] { background: var(--cor-p); color: #FFFFFF; }
.lz-topam { font-weight: 700; }
.lz-postal-acoes { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; margin-top: 6px; }
.lz-postal .btn-texto { color: #0B5F67; }
.lz-topo[aria-pressed="true"] { color: #A3264F !important; }
.lz-editar { margin-left: auto; color: #3F5A60; }
.lz-postal-novo { padding: 0; background: rgba(255,255,255,.18); border: 2px dashed rgba(255,248,236,.85); box-shadow: none; transform: none; cursor: default; }
.lz-postal-novo button { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; width: 100%; min-height: 150px; color: #FFF8EC; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 700; }
.lz-postal-novo kbd { background: rgba(255,255,255,.85); }

/* ---- ao lado ---- */
.lz-dias { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 4px; }
.lz-dias li { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 6px 2px; border-radius: var(--r-md); font-size: var(--t1); }
.lz-dias li[data-hoje] { background: var(--fundo); }
.lz-dias-nome { font-size: var(--t0); font-weight: 800; color: var(--texto-2); }
.lz-dias-min { color: var(--texto-2); font-weight: 700; font-size: var(--t0); }
.lz-dias-chuva { font-size: var(--t00); font-weight: 800; color: #2F6FB5; }
.lz-fonte { margin: 8px 0 0; font-size: var(--t00); color: var(--texto-2); }
.lz-fonte a { color: inherit; font-weight: 800; }
.lz-busca .qc-linha-btn span { display: inline-flex; align-items: center; gap: 6px; }
.lz-a-dois { background: #FFF0F4; border-color: #F3C9D6; color: #3A1020; }
.lz-a-dois .qc-h2, .lz-a-dois .qc-cartao-ico { color: #6E1F3B; }
.lz-a-dois .qc-mini, .lz-a-dois .qc-vazio, .lz-a-dois .rotulo { color: #5A2A3A; }
.lz-a-dois-t { display: flex; flex-direction: column; align-items: flex-start; gap: 1px; padding: 0; text-align: left; color: #4A1427; }
.lz-mao-grande { font-family: var(--fonte-titulo); font-size: var(--t4); font-weight: 700; line-height: 1.1; }
.lz-fica { margin-top: 10px; }
.lz-data { display: flex; align-items: center; gap: 8px; padding: 7px 0; font-size: var(--t15); }
.lz-data-dia { display: flex; flex-direction: column; width: 52px; flex: 0 0 auto; font-weight: 800; font-size: var(--t15); line-height: 1.1; }
.lz-data-dia span { font-size: var(--t0); font-weight: 700; color: var(--texto-2); }
.lz-data-ico { flex: 0 0 auto; color: #0B6A73; }
.lz-data[data-tipo="feriado"] .lz-data-ico { color: #C2342A; }
.lz-data[data-tipo="aniversario"] .lz-data-ico { color: #B5791A; }
.lz-data-t { display: flex; flex-direction: column; min-width: 0; }
.lz-mem-lista { margin: 0; padding: 4px 0 0; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.lz-mem-lista button { display: flex; flex-direction: column; gap: 3px; width: 100%; padding: 6px 6px 8px; background: #FFFFFF; color: #22323A; border: 1px solid #EEE6DA; box-shadow: var(--sombra-papel-2); transform: rotate(var(--rot)); text-align: left; }
.lz-mem-lista button:hover { transform: rotate(0deg); }
.lz-mem-foto { display: grid; place-items: center; height: 46px; background: color-mix(in srgb, var(--cor) 22%, #FFFFFF); color: var(--cor); }
.lz-mem-t { font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.1; overflow-wrap: anywhere; }
.lz-mem-lista .qc-mini { color: #55666B; }
}

@layer escuro {
${ma} .lz-sub b { color: #F0A57E; }
${ma} .lz-trilha { border-color: #23434A; background: linear-gradient(180deg, #12303E 0%, #17394A 50%, #1B3B36 100%); }
${ma} .lz-paisagem path:nth-child(1) { fill: #2E5B3C; } ${ma} .lz-paisagem path:nth-child(2) { fill: #264E33; }
${ma} .lz-sol { background: radial-gradient(circle, #F4EFD8 0 55%, #D9D2B4 56%); box-shadow: 0 0 0 10px rgba(244,239,216,.12); }
${ma} .lz-nuvem { background: rgba(200,215,220,.25); }
${ma} .lz-h2-giz { color: #E8F4F6; }
${ma} .lz-casa { background: rgba(16,38,42,.92); border-color: #2C4A50; }
${ma} .lz-casa[data-livre] { background: rgba(16,38,42,.55); border-color: #6FB3A7; }
${ma} .lz-casa-dia { color: #E8F4F6; } ${ma} .lz-casa-tempo { color: #C9DCDF; }
${ma} .lz-livre, ${ma} .lz-livre span { color: #A7DDD3; }
${ma} .lz-aviso-chuva { background: #13304A; color: #CFE3F6; }
${ma} .lz-a-dois { background: #2E1520; border-color: #6A3046; color: #FBE3EC; }
${ma} .lz-a-dois .qc-h2, ${ma} .lz-a-dois .qc-cartao-ico, ${ma} .lz-a-dois-t, ${ma} .lz-a-dois .qc-mini, ${ma} .lz-a-dois .qc-vazio, ${ma} .lz-a-dois .rotulo { color: #FBE3EC; }
${ma} .lz-pet-linha { background: #33240F; color: #FBE9D0; } ${ma} .lz-pet-linha[data-pet="marie"] { background: #1D2A2E; color: #E3EEF0; }
${ma} .lz-barrinha, ${ma} .lz-coracao { background: #23383C; }
}

@layer movimento {
html[data-movimento="reduzido"] .lz-nuvem, html[data-movimento="reduzido"] .lz-sol, html[data-movimento="parado"] .lz-nuvem, html[data-movimento="parado"] .lz-sol { animation: none; }
@media (prefers-reduced-motion: reduce) { .lz-nuvem, .lz-sol { animation: none; } .lz-postal, .lz-casa { transition: none; } }
}
`;var Qe='.cc[data-pets-mesa="1"]',oa='html[data-tema="escuro"]';var kn="clamp(300px, 25vw, 370px)",qn=`
@layer base {
/* Lan\xE7ar um gasto em Pets: de quem \xE9 (vale no celular tamb\xE9m). */
.bicho-escolha { margin-top: 8px; }

${Qe} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${Qe}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${Qe} main[data-pets-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) ${kn}; grid-template-areas: "topo topo" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 22px; align-items: start; }
${Qe} .toast { left: calc(var(--casa-larg) + 28px); right: calc(${kn} + 48px); width: auto; max-width: 520px; bottom: 20px; }
.pm { display: contents; }
.pm kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2); font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.pm-topo { grid-area: topo; display: flex; align-items: center; gap: 14px 18px; flex-wrap: wrap; padding: 18px 0 16px; }
.pm-topo-esq { display: flex; align-items: center; gap: 12px; min-width: 0; }
.pm-rostos { display: inline-flex; }
.pm-rostos > * + * { margin-left: -12px; }
.pm-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.pm-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.pm-sub b { color: #9A4515; }
.pm-topo-dir { margin-left: auto; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.pm-topo-dir .btn { min-height: 42px; }
.pm-corpo { gap: 18px; }
.pm-giz { font-family: var(--fonte-titulo); font-weight: 800; line-height: 1; }
.pm-mao { font-family: var(--fonte-titulo); }
.pm-dupla { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 18px; }
@container qccorpo (max-width: 860px) { .pm-dupla { grid-template-columns: minmax(0, 1fr); } }
.pm-dono { display: inline-flex; align-items: center; height: 20px; padding: 0 7px; margin-left: 4px; border-radius: var(--r-pill); background: #E7F4F2; color: #0B5F67; font-size: var(--t00); font-weight: 900; vertical-align: 1px; }
.pm-dono[data-pet="mia"] { background: #FFF0DD; color: #8A4E0E; }
.pm-dono[data-pet="marie"] { background: #EFEAF7; color: #4A2F7A; }

/* ---- a cena ---- */
.pm-cena-cartao { padding: 10px; }
.pm-cena { position: relative; aspect-ratio: 1000 / 540; border-radius: var(--r-lg); overflow: hidden; container-type: inline-size; container-name: pmcena; }
.pm-cena-svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.pm-cena-pe { padding: 8px 6px 2px; }
.pm-titulo-lado { position: absolute; top: 2.5%; margin: 0; font-size: clamp(1.3rem, 3.4cqi, 2.3rem); color: #0B3B41; text-shadow: 0 1px 0 rgba(255,255,255,.7); pointer-events: none; }
.pm-etq { position: absolute; z-index: 2; display: flex; flex-direction: column; align-items: flex-start; gap: 1px; max-width: 34%; box-sizing: border-box; padding: 5px 9px 6px; border-radius: var(--r-sm); text-align: left; color: #22323A;
  background: rgba(255,255,255,.95); border: 1.5px solid color-mix(in srgb, var(--cor) 45%, #FFFFFF); box-shadow: var(--sombra-papel-2); transition: transform .15s, box-shadow .15s; font-size: clamp(.62rem, 1.15cqi, .78rem); }
.pm-etq:hover, .pm-etq:focus-visible { transform: translateY(-2px) rotate(-1deg); box-shadow: var(--sombra-papel-3); }
.pm-etq-t { font-weight: 900; color: var(--cor); font-size: 1.04em; }
.pm-etq-l { font-weight: 700; line-height: 1.2; color: #33474C; }
.pm-etq[data-alerta] { border: 2px solid #C2342A; background: #FFF4F1; }
.pm-etq[data-alerta] .pm-etq-l { color: #8F2A20; }
.pm-etq[data-alerta]::after { content: "!"; position: absolute; right: -8px; top: -8px; display: grid; place-items: center; width: 18px; height: 18px; border-radius: 50%; background: #C2342A; color: #FFFFFF; font-size: var(--t0); font-weight: 900; }
.pm-etq-fio { position: absolute; left: 14px; top: -9px; width: 2px; height: 9px; background: color-mix(in srgb, var(--cor) 60%, #FFFFFF); }
@container pmcena (max-width: 460px) { .pm-etq-l { display: none; } .pm-etq { padding: 3px 7px 4px; } .pm-etq-fio { display: none; } }
@container pmcena (max-width: 380px) { .pm-etq:not([data-alerta]) { display: none; } }
.pm-alvo { position: absolute; z-index: 1; border-radius: 40%; }
.pm-alvo:focus-visible { outline: 3px solid #E29578; outline-offset: 2px; }
.pm-rabo { transform-box: fill-box; transform-origin: 0% 100%; animation: pm-abana 1.1s ease-in-out infinite alternate; }
.pm-rabo-gata { transform-box: fill-box; transform-origin: 100% 100%; animation: pm-rabo 5s ease-in-out infinite alternate; }
.pm-zz { animation: pm-zz 3s ease-in-out infinite; }
.pm-nuvem { animation: pm-vento 24s ease-in-out infinite alternate; }
.pm-bolinha { transform-box: fill-box; transform-origin: 50% 0%; animation: pm-balanco 3.4s ease-in-out infinite alternate; }
@keyframes pm-abana { from { transform: rotate(-8deg); } to { transform: rotate(10deg); } }
@keyframes pm-rabo { from { transform: rotate(0deg); } to { transform: rotate(6deg); } }
@keyframes pm-zz { 0%, 100% { opacity: .2; translate: 0 4px; } 50% { opacity: 1; translate: 0 -4px; } }
@keyframes pm-vento { from { translate: -20px 0; } to { translate: 26px 0; } }
@keyframes pm-balanco { from { transform: rotate(-10deg); } to { transform: rotate(10deg); } }

/* ---- hoje com elas: patinhas carimbadas ---- */
.pm-carimbos { margin: 4px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.pm-carimbo { position: relative; display: flex; flex-direction: column; align-items: center; gap: 2px; width: 100%; min-height: 104px; padding: 10px 8px 9px; border-radius: var(--r-lg); text-align: center; color: var(--texto);
  background: var(--pagina); border: 2px dashed color-mix(in srgb, var(--cor) 55%, #FFFFFF); transition: transform .15s; }
.pm-carimbo b { font-size: var(--t15); line-height: 1.15; }
.pm-carimbo:hover, .pm-carimbo:focus-visible { transform: translateY(-2px); }
.pm-carimbo-pata { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%; color: color-mix(in srgb, var(--cor) 40%, #FFFFFF); background: color-mix(in srgb, var(--cor) 8%, #FFFFFF); }
.pm-carimbo[data-feito] { border-style: solid; background: color-mix(in srgb, var(--cor) 9%, var(--superficie)); }
.pm-carimbo[data-feito] .pm-carimbo-pata { color: #FFFFFF; background: var(--cor); transform: rotate(-12deg); animation: pm-carimba .32s ease-out; }
@keyframes pm-carimba { from { transform: scale(1.6) rotate(-30deg); opacity: 0; } to { transform: scale(1) rotate(-12deg); opacity: 1; } }

/* ---- plaquinhas das coleiras ---- */
.pm-placas { display: flex; flex-direction: column; gap: 14px; }
.pm-placa { position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; padding: 0; text-align: center; color: #22323A; }
.pm-coleira { display: block; width: 100%; height: 18px; border-radius: var(--r-sm); background: repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0 6px, transparent 6px 18px), #C2342A; box-shadow: inset 0 -3px 0 rgba(0,0,0,.18); }
.pm-placa[data-pet="marie"] .pm-coleira { background: repeating-linear-gradient(90deg, rgba(255,255,255,.3) 0 6px, transparent 6px 18px), #7B5BA6; }
.pm-placa-corpo { position: relative; display: flex; flex-direction: column; align-items: center; gap: 3px; width: 86%; margin-top: -4px; padding: 20px 14px 14px; border-radius: 14px 14px 46% 46% / 14px 14px 30% 30%;
  background: linear-gradient(160deg, #FFE7A8, #E8B94A 60%, #C99A2E); box-shadow: inset 0 2px 0 rgba(255,255,255,.6), 0 8px 16px -10px rgba(0,0,0,.55); }
.pm-placa[data-pet="marie"] .pm-placa-corpo { background: linear-gradient(160deg, #F4F1F8, #CFC6DD 60%, #A99CBD); }
.pm-placa-furo { position: absolute; top: 6px; width: 12px; height: 12px; border-radius: 50%; background: var(--superficie); box-shadow: inset 0 1px 2px rgba(0,0,0,.35); }
.pm-placa-nome { font-size: var(--t55); color: #3B2410; }
.pm-placa[data-pet="marie"] .pm-placa-nome { color: #3A2560; }
.pm-placa-linhas { display: flex; flex-direction: column; gap: 1px; font-size: var(--t1); line-height: 1.3; }
.pm-placa-linhas b { margin-right: 4px; font-size: var(--t00); text-transform: uppercase; letter-spacing: .05em; opacity: .75; }
.pm-placa-vazia { font-family: var(--fonte-titulo); font-size: var(--t1); color: #5C4100; }
.pm-placa:hover .pm-placa-corpo, .pm-placa:focus-visible .pm-placa-corpo { transform: rotate(-2deg); }
.pm-placa-corpo { transition: transform .2s; transform-origin: 50% 0; }
.pm-contato { margin: 2px 0; font-size: var(--t2); }
.pm-contato a { color: #8F3A1C; font-weight: 800; }

/* ---- gasto no m\xEAs ---- */
.pm-barra-gasto { display: flex; height: 12px; margin: 8px 0 6px; border-radius: var(--r-pill); overflow: hidden; background: var(--trilho); }
.pm-barra-gasto span { display: block; height: 100%; }

/* ---- carteirinha ---- */
.pm-caderneta { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); border-radius: var(--r-md); overflow: hidden; background: #FFFDF6; border: 1px solid #E8DCC4; box-shadow: inset 0 0 0 6px #F7EFDD; color: #22323A; }
@container qccorpo (max-width: 760px) { .pm-caderneta { grid-template-columns: minmax(0, 1fr); } }
.pm-cart-pag { padding: 14px 16px 16px; min-height: 160px; background: repeating-linear-gradient(180deg, transparent 0 27px, #EEE4CF 27px 28px); }
.pm-cart-pag + .pm-cart-pag { border-left: 2px dashed #E3D3B0; }
.pm-cart-nome { margin: 0 0 8px; font-size: var(--t55); color: #8F3A1C; }
.pm-cart-pag[data-pet="marie"] .pm-cart-nome { color: #4A2F7A; }
.pm-cart-vazia { margin: 0; font-family: var(--fonte-titulo); color: #6B5240; }
.pm-adesivos { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 10px; }
.pm-adesivo button { position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; padding: 8px 10px 9px; border-radius: var(--r-sm); text-align: left; color: #22323A; background: #FFFFFF;
  border-left: 5px solid var(--cor); box-shadow: 0 1px 0 #E3D3B0, 0 6px 12px -8px rgba(0,0,0,.4); transform: rotate(var(--rot)); transition: transform .15s; }
.pm-adesivo button:hover, .pm-adesivo button:focus-visible { transform: rotate(0deg) scale(1.03); }
.pm-adesivo-t { font-weight: 900; font-size: var(--t15); line-height: 1.15; color: var(--cor); }
.pm-adesivo-d { font-family: var(--fonte-titulo); font-size: var(--t1); }
.pm-adesivo-p { font-size: var(--t0); font-weight: 800; color: #33474C; }
.pm-adesivo-p[data-atrasada] { color: #C2342A; }
.pm-carimbo-vet::after { content: "VET"; }
.pm-carimbo-vet { position: absolute; right: 6px; bottom: 6px; padding: 0 4px; border: 1.5px solid currentColor; border-radius: var(--r-xs); color: rgba(194,52,42,.4); font-size: var(--t00); font-weight: 900; letter-spacing: .08em; transform: rotate(-14deg); }

/* ---- rel\xF3gio e balan\xE7a ---- */
.pm-relogio { display: grid; grid-template-columns: minmax(150px, 220px) minmax(0, 1fr); gap: 14px; align-items: center; }
.pm-relogio svg { width: 100%; height: auto; }
.pm-relogio svg text { font-family: var(--fonte); }
.pm-legenda { display: flex; flex-direction: column; gap: 4px; margin: 0 0 6px; font-size: var(--t15); font-weight: 700; }
.pm-legenda i { display: inline-block; width: 12px; height: 12px; margin-right: 5px; border-radius: 50%; vertical-align: -1px; }
.pm-aviso { margin: 6px 0 0; padding: 5px 8px; border-radius: var(--r-sm); background: #E7F4F2; color: #0B3B41; font-size: var(--t1); }
.pm-aviso[data-atrasada] { background: #FDE7E7; color: #8F2A20; }
.pm-peso { display: grid; grid-template-columns: 110px minmax(0, 1fr); gap: 10px; align-items: center; padding: 6px 0; }
.pm-peso + .pm-peso { border-top: 1px solid var(--trilho); }
.pm-peso-nome { margin: 0; font-size: var(--t5); }
.pm-peso-v { margin: 0; font-weight: 900; font-size: var(--t3); color: var(--texto); }

/* ---- rem\xE9dios e perguntas ---- */
.pm-rem { display: flex; align-items: center; gap: 8px; padding: 6px 0; flex-wrap: wrap; }
.pm-rem-t { display: flex; flex-direction: column; align-items: flex-start; flex: 1 1 160px; min-width: 0; text-align: left; font-size: var(--t2); color: var(--texto); }
.pm-rem-t:hover b { text-decoration: underline; }
.pm-rem-doses { display: flex; gap: 2px; }
.pm-rem-doses .qc-caixa-btn { display: flex; flex-direction: column; gap: 1px; min-width: 38px; padding: 2px; }
.pm-rem-hora { font-size: var(--t00); font-weight: 800; color: var(--texto-2); }
.pm-perg { display: flex; align-items: center; gap: 4px; padding: 4px 0; font-size: var(--t2); }
.pm-perg-t { flex: 1; min-width: 0; }
.pm-perg-novo { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
.pm-perg-novo .chip { min-height: 30px; font-size: var(--t1); }

/* ---- folha para quem cuida ---- */
.pm-qc { display: flex; flex-direction: column; gap: 8px; }
.pm-qc-previa { max-height: 220px; overflow: auto; padding: 10px 12px; border-radius: var(--r-md); background: #FFFDF6; border: 1px solid #E8DCC4; color: #22323A; font-size: var(--t1); line-height: 1.4; }
.pm-qc-previa p { margin: 0 0 2px; }
.pm-qc-t { margin: 0 0 4px !important; font-size: var(--t5); color: #0B3B41; }
.pm-qc-sec { margin: 8px 0 2px !important; font-size: var(--t0); font-weight: 900; letter-spacing: .07em; text-transform: uppercase; color: #8F3A1C; }

/* ---- varal ---- */
.pm-varal { position: relative; padding-top: 14px; }
.pm-varal-fio { position: absolute; left: -6px; right: -6px; top: 16px; height: 22px; border-top: 2px solid #8C5A3C; border-radius: 0 0 50% 50% / 0 0 100% 100%; }
.pm-varal ul { position: relative; margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px 14px; }
.pm-polaroid { position: relative; display: flex; flex-direction: column; gap: 3px; width: 100%; padding: 8px 8px 10px; background: #FFFFFF; color: #22323A; text-align: left; border: 1px solid #EEE6DA;
  box-shadow: var(--sombra-papel-2); transform: rotate(var(--rot)); transform-origin: 50% 0; transition: transform .2s; }
.pm-polaroid:hover, .pm-polaroid:focus-visible { transform: rotate(0deg) translateY(2px); }
.pm-prendedor { position: absolute; left: 50%; top: -12px; width: 10px; height: 22px; margin-left: -5px; border-radius: var(--r-xxs); background: linear-gradient(90deg, #C99A62, #E3BB86); box-shadow: var(--sombra-1); }
.pm-polaroid-foto { display: grid; place-items: center; aspect-ratio: 1; overflow: hidden; background: #EEF4F5; }
.pm-polaroid-foto img { width: 100%; height: 100%; object-fit: cover; }
.pm-polaroid-t { min-height: 1.2em; font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.15; overflow-wrap: anywhere; }
.pm-polaroid .qc-mini { color: #55666B; }

/* ---- patinhas da Mia ---- */
.pm-patas-grade { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 18px; align-items: center; }
@container qccorpo (max-width: 640px) { .pm-patas-grade { grid-template-columns: minmax(0, 1fr); } }
.pm-patas { display: grid; grid-template-rows: repeat(7, 18px); grid-auto-flow: column; grid-auto-columns: 18px; gap: 3px; }
.pm-patas span { display: grid; place-items: center; border-radius: var(--r-xs); background: #F3EDE4; color: #C9792F; }
.pm-patas span[data-n="-1"] { background: transparent; }
.pm-patas span[data-n="1"] { background: #FFE8CC; }
.pm-patas span[data-n="2"] { background: #F2B477; color: #6E3A0C; }
.pm-quem-foi { display: flex; gap: 12px; margin: 8px 0 0; font-weight: 800; font-size: var(--t2); }
.pm-quem-foi span { display: inline-flex; align-items: center; gap: 5px; }

/* ---- gostos ---- */
.pm-gostos { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 14px; }
@container qccorpo (max-width: 640px) { .pm-gostos { grid-template-columns: minmax(0, 1fr); } }
.pm-gosto { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; width: 100%; padding: 12px 14px; border-radius: var(--r-lg); text-align: left; color: #3B2410; background: #FFF6EA; border: 1px solid #F1D9B8; }
.pm-gosto[data-pet="marie"] { color: #2E2244; background: #F6F2FB; border-color: #DCD0EC; }
.pm-gosto:hover, .pm-gosto:focus-visible { filter: brightness(.98); }
.pm-gosto-nome { font-size: var(--t55); margin-bottom: 2px; }
.pm-gosto-rot { margin-top: 4px; font-size: var(--t00); font-weight: 900; letter-spacing: .06em; text-transform: uppercase; color: #23744A; }
.pm-gosto-rot[data-tom="nao"] { color: #A3341F; }
.pm-gosto .pm-mao { font-size: var(--t3); line-height: 1.2; }

/* ---- ritmos ---- */
.pm-selo { flex-shrink: 0; padding: 2px 9px; border-radius: var(--r-pill); font-size: var(--t0); font-weight: 800; background: #E7F4F2; color: #0B5F67; }
.pm-selo[data-tom="perto"] { background: #FFF3D6; color: #5C4100; }
.pm-selo[data-tom="atraso"] { background: #FDE7E7; color: #8F2A20; }
.pm-selo[data-tom="nada"] { background: var(--fundo); color: var(--texto-2); }
.pm-shop { display: flex; align-items: center; gap: 6px; padding: 3px 0; font-size: var(--t2); flex-wrap: wrap; }
.pm-shop-t { flex: 1; min-width: 0; }
.pm-shop-t[data-comprado] { color: var(--texto-2); text-decoration: line-through; }
.mm-origem[data-tipo="pets"] { background: #FFF0DD; color: #8A4E0E; }

/* ---- folha da rotina ---- */
.pm-rot-edit { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(90px, 1fr) minmax(90px, .9fr) 40px; gap: 8px; align-items: end; }
@media (max-width: 560px) { .pm-rot-edit { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); } }

/* ---- veterin\xE1rio em tela cheia ---- */
.pm-tela-vet { background: #FFF8F5; color: #2E1208; padding: 28px clamp(20px, 5vw, 64px); display: flex; flex-direction: column; gap: 20px; }
.pm-tela-fechar { align-self: flex-end; }
.pm-tela-t { margin: 0; font-family: var(--fonte-titulo); font-size: clamp(1.8rem, 3vw, 2.6rem); color: #2E1208; }
.pm-tela-tels { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
.pm-tela-tel { display: flex; flex-direction: column; gap: 4px; padding: 18px 20px; border-radius: var(--r-xl); background: #C2342A; color: #FFFFFF; text-decoration: none; font-size: var(--t3); font-weight: 700; }
.pm-tela-tel b { font-size: clamp(1.8rem, 3vw, 2.4rem); letter-spacing: .02em; }
.pm-tela-tel:hover, .pm-tela-tel:focus-visible { background: #A3291F; }
.pm-tela-bichos { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
.pm-tela-bichos > div { padding: 16px 18px; border-radius: var(--r-lg); background: #FFFFFF; border: 2px solid #F3C9B8; font-size: var(--t35); }
.pm-tela-bichos p { margin: 0 0 4px; }
.pm-tela-nome { font-size: var(--t6); color: #8F3A1C; }
}

@layer escuro {
${oa} .pm-peso-nome[data-pet="mia"] { color: #F0B27A !important; } ${oa} .pm-peso-nome[data-pet="marie"] { color: #C9B4EA !important; } ${oa} .pm-peso-nome[data-pet="ambas"] { color: #8ED8CF !important; }
${oa} .pm-sub b { color: #F0A57E; }
${oa} .pm-cena-svg .pm-ceu { fill: #1C3A48; }
${oa} .pm-cena-svg .pm-sol { fill: #F4EFD8; }
${oa} .pm-cena-svg .pm-parede { fill: #2C2433; }
${oa} .pm-cena-svg .pm-listra { stroke: #352C3E; }
${oa} .pm-titulo-lado { color: #E8F4F6 !important; text-shadow: 0 1px 0 rgba(0,0,0,.5); }
${oa} .pm-etq { background: rgba(16,30,34,.94); color: #E3EEF0; border-color: #3E5A60; }
${oa} .pm-etq-t { color: color-mix(in srgb, var(--cor) 45%, #FFFFFF); }
${oa} .pm-etq-l { color: #C9DCDF; }
${oa} .pm-etq[data-alerta] { background: #3A1A14; border-color: #E06A50; }
${oa} .pm-etq[data-alerta] .pm-etq-l { color: #FFC9B4; }
${oa} .pm-carimbo-pata { background: color-mix(in srgb, var(--cor) 18%, #10262A); }
${oa} .pm-carimbo[data-feito] .pm-carimbo-pata { background: var(--cor); color: #FFFFFF; }
${oa} .pm-dono { background: #173F3F; color: #BDE7E2; }
${oa} .pm-dono[data-pet="mia"] { background: #3A2610; color: #FBD9AE; }
${oa} .pm-dono[data-pet="marie"] { background: #2B2140; color: #DCCFF2; }
${oa} .pm-aviso { background: #173F3F; color: #CFEDEA; } ${oa} .pm-aviso[data-atrasada] { background: #3A1A14; color: #FFC9B4; }
${oa} .pm-selo { background: #173F3F; color: #BDE7E2; } ${oa} .pm-selo[data-tom="perto"] { background: #3A2E10; color: #F4D58A; } ${oa} .pm-selo[data-tom="atraso"] { background: #3A1A14; color: #FFC9B4; }
${oa} .pm-patas span { background: #22343A; } ${oa} .pm-patas span[data-n="1"] { background: #5A3A16; color: #FBD9AE; } ${oa} .pm-patas span[data-n="2"] { background: #B87830; color: #2A1606; }
${oa} .pm-patas span[data-n="-1"] { background: transparent; }
${oa} .pm-contato a { color: #FFC9B4; }
${oa} .mm-origem[data-tipo="pets"] { background: #3A2610; color: #FBD9AE; }
}

@layer movimento {
html[data-movimento="reduzido"] .pm-rabo, html[data-movimento="reduzido"] .pm-rabo-gata, html[data-movimento="reduzido"] .pm-zz, html[data-movimento="reduzido"] .pm-nuvem, html[data-movimento="reduzido"] .pm-bolinha,
html[data-movimento="parado"] .pm-rabo, html[data-movimento="parado"] .pm-rabo-gata, html[data-movimento="parado"] .pm-zz, html[data-movimento="parado"] .pm-nuvem, html[data-movimento="parado"] .pm-bolinha { animation: none; }
@media (prefers-reduced-motion: reduce) { .pm-rabo, .pm-rabo-gata, .pm-zz, .pm-nuvem, .pm-bolinha, .pm-carimbo-pata { animation: none !important; } .pm-etq, .pm-carimbo, .pm-placa-corpo, .pm-adesivo button, .pm-polaroid { transition: none; } }
}

@media print {
  .lm-impressao-copia.pm-qc-imp { font-family: Georgia, "Times New Roman", serif; font-size: 12pt; line-height: 1.45; color: #000000; }
  .lm-impressao-copia.pm-qc-imp .pm-qc-t { font-family: var(--fonte-titulo); font-size: 18.6pt; margin: 0 0 8pt !important; }
  .lm-impressao-copia.pm-qc-imp .pm-qc-sec { margin: 12pt 0 3pt !important; font-size: 10pt; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #000000; border-bottom: 1px solid #000000; }
  .lm-impressao-copia.pm-qc-imp p { margin: 0 0 3pt; }
  html[data-imprimindo] .lm-impressao-copia.pm-caderneta { display: grid !important; grid-template-columns: 1fr 1fr; box-shadow: none; border: 1px solid #000000; background: #FFFFFF; }
  .lm-impressao-copia.pm-caderneta .pm-cart-pag { background: none; }
  .lm-impressao-copia.pm-caderneta .pm-adesivo button { transform: none; box-shadow: none; border: 1px solid #999999; border-left: 5px solid var(--cor); }
}
`;var at='.cc[data-nos-mesa="1"]',W='html[data-tema="escuro"]';var zn="clamp(300px, 25vw, 370px)",En=`
@layer base {
${at} > #app-conteudo { max-width: 1720px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${at}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${at} main[data-nos-mesa] { display: grid; grid-template-columns: minmax(0, 1fr) ${zn}; grid-template-areas: "topo topo" "corpo painel"; grid-template-rows: auto 1fr; column-gap: 22px; align-items: start; }
${at} .toast { left: calc(var(--casa-larg) + 28px); right: calc(${zn} + 48px); width: auto; max-width: 520px; bottom: 20px; }
.nm { display: contents; }
.nm kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; box-sizing: border-box; border-radius: var(--r-sm); border: 1px solid var(--trilho-2); font: 800 .72rem var(--fonte); color: var(--texto-2); background: var(--pagina); }
.nm-topo { grid-area: topo; display: flex; align-items: center; gap: 14px 18px; flex-wrap: wrap; padding: 18px 0 16px; }
.nm-topo-esq { display: flex; align-items: center; gap: 12px; min-width: 0; }
.nm-coracao-2 { transform-origin: 62px 30px; animation: nm-bate 3.2s ease-in-out infinite; }
@keyframes nm-bate { 0%, 70%, 100% { transform: scale(1); } 78% { transform: scale(1.08); } 86% { transform: scale(.98); } 92% { transform: scale(1.05); } }
.nm-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.nm-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.nm-sub b { color: #A3264F; }
.nm-topo-dir { margin-left: auto; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.nm-topo-dir .btn { min-height: 42px; }
.nm-btn-aceno { background: #FFDDD2; border-color: #E29578; color: #0B3B41; }
.nm-btn-aceno:hover { background: #FFCDBD; }
.nm-btn-sofa { background: #006D77; border-color: #006D77; color: #FFFFFF; }
.nm-btn-sofa:hover { background: #00565E; }
.nm-aceno-ancora { position: relative; }
.nm-aceno-n { display: inline-grid; place-items: center; width: 18px; height: 18px; margin-left: 2px; border-radius: 50%; background: #E29578; color: #0B3B41; font-size: var(--t0); }
.nm-aceno-menu { position: absolute; right: 0; top: calc(100% + 6px); z-index: 40; width: 250px; padding: 10px; border-radius: var(--r-lg); background: var(--superficie); border: 1px solid var(--borda-cartao); box-shadow: var(--sombra-papel-3); display: flex; flex-direction: column; gap: 4px; }
.nm-aceno-op { width: 100%; padding: 8px 10px; border-radius: var(--r-md); text-align: left; font-weight: 700; color: var(--texto); background: var(--pagina); }
.nm-aceno-op:hover, .nm-aceno-op:focus-visible { background: #FFE4EC; color: #7A1F40; }
.nm-aceno-recebidos { padding: 6px 8px; border-radius: var(--r-md); background: #FFE4EC; color: #7A1F40; font-size: var(--t15); font-weight: 700; }
.nm-aceno-recebidos p { margin: 0; display: flex; align-items: center; gap: 5px; }
.nm-corpo { gap: 18px; }
.nm-mao { font-family: var(--fonte-titulo); }
.nm-giz-grande { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; line-height: .95; }
.nm-giz-enorme { margin: 0; font-family: var(--fonte-titulo); font-size: clamp(2.6rem, 5vw, 4rem); font-weight: 800; line-height: .95; }
.nm-sobre { margin: 0; font-size: var(--t0); font-weight: 900; letter-spacing: .12em; }
.nm-selo { display: inline-flex; align-items: center; padding: 1px 8px; margin-left: 6px; border-radius: var(--r-pill); background: #FFF3D6; color: #5C4100; font-size: var(--t0); font-weight: 900; }
.nm-btn-claro { background: rgba(255,255,255,.14); border: 1.5px solid rgba(255,255,255,.75); color: #FFFFFF; }
.nm-btn-claro:hover:not(:disabled) { background: rgba(255,255,255,.26); }
.nm-btn-ouro { background: #FFE07A; border: 1.5px solid #FFE07A; color: #3B2410; font-weight: 800; }
.nm-btn-ouro:hover:not(:disabled) { background: #FFD24A; }
.nm-lapis { width: 26px; height: 26px; min-height: 26px; padding: 0; display: inline-grid; place-items: center; vertical-align: middle; }

/* ---- a sala ---- */
.nm-sala-cartao { padding: 10px; }
.nm-sala { position: relative; aspect-ratio: 1000 / 540; border-radius: var(--r-lg); overflow: hidden; container-type: inline-size; container-name: nmsala; }
.nm-sala-svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.nm-sala-pe { padding: 8px 6px 2px; }
.nm-etq { position: absolute; z-index: 2; display: flex; flex-direction: column; align-items: flex-start; gap: 1px; max-width: 34%; box-sizing: border-box; padding: 5px 9px 6px 12px; border-radius: var(--r-xs) var(--r-md) var(--r-md) var(--r-xs); text-align: left; color: #22323A;
  background: #FFFDF8; border: 1.5px solid #EBC9B6; box-shadow: var(--sombra-papel-2); transition: transform .15s, box-shadow .15s; font-size: clamp(.62rem, 1.15cqi, .8rem); }
.nm-etq::before { content: ""; position: absolute; left: 4px; top: 50%; width: 5px; height: 5px; margin-top: -2.5px; border-radius: 50%; background: #E29578; }
.nm-etq:hover, .nm-etq:focus-visible { transform: translateY(-2px) rotate(-1deg); box-shadow: var(--sombra-papel-3); }
.nm-etq-t { font-weight: 900; letter-spacing: .04em; text-transform: uppercase; font-size: .9em; color: var(--cor); }
.nm-etq-l { font-family: var(--fonte-titulo); font-size: 0.96em; line-height: 1.15; color: #22323A; }
.nm-etq[data-destaque] { border-color: #E29578; background: #FFF4EF; }
.nm-etq[data-destaque]::after { content: "\u2665"; position: absolute; right: -8px; top: -9px; display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: #E29578; color: #0B3B41; font-size: var(--t0); }
.nm-etq-fio { position: absolute; left: 16px; top: -12px; width: 2px; height: 12px; background: #C9A27A; }
/* Sala estreita: s\xF3 os t\xEDtulos; bem estreita, s\xF3 o aceno (o resto est\xE1 nos cart\xF5es logo abaixo). */
@container nmsala (max-width: 500px) { .nm-etq-l { display: none; } .nm-etq { padding: 3px 7px 4px 10px; } .nm-etq-fio { display: none; } }
@container nmsala (max-width: 380px) { .nm-etq:not([data-destaque]) { display: none; } }
.nm-rabo { transform-box: fill-box; transform-origin: 0% 50%; animation: nm-abana 1.4s ease-in-out infinite alternate; }
.nm-rabo-gata { transform-box: fill-box; transform-origin: 0% 50%; animation: nm-rabo 5s ease-in-out infinite alternate; }
.nm-zz { animation: nm-zz 3s ease-in-out infinite; }
.nm-vapor { animation: nm-vapor 3s ease-in-out infinite; }
.nm-chama { transform-box: fill-box; transform-origin: 50% 100%; animation: nm-chama .9s ease-in-out infinite alternate; }
.nm-aceno-voa { animation: nm-sobe 2.6s ease-in-out infinite; }
.nm-disco-gira { transform-box: fill-box; transform-origin: 50% 50%; animation: nm-gira 4s linear infinite; }
.nm-estrelinha, .nm-pisca { animation: nm-pisca 2.8s ease-in-out infinite; }
.nm-estrelinha:nth-child(3n), .nm-pisca:nth-child(4n) { animation-delay: -1.2s; }
.nm-nuvem { animation: nm-vento 26s ease-in-out infinite alternate; }
.nm-bandeira-sobe { transform-box: fill-box; transform-origin: 0% 100%; animation: nm-bandeira 2.4s ease-in-out infinite alternate; }
@keyframes nm-abana { from { transform: rotate(-6deg); } to { transform: rotate(8deg); } }
@keyframes nm-rabo { from { transform: rotate(0deg); } to { transform: rotate(8deg); } }
@keyframes nm-zz { 0%, 100% { opacity: .2; translate: 0 4px; } 50% { opacity: 1; translate: 0 -4px; } }
@keyframes nm-vapor { 0%, 100% { opacity: 0; translate: 0 4px; } 50% { opacity: .7; translate: 0 -4px; } }
@keyframes nm-chama { from { transform: scale(1, 1); } to { transform: scale(.85, 1.15); } }
@keyframes nm-sobe { 0% { translate: 0 6px; opacity: .6; } 50% { translate: 0 -6px; opacity: 1; } 100% { translate: 0 6px; opacity: .6; } }
@keyframes nm-gira { to { transform: rotate(360deg); } }
@keyframes nm-pisca { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }
@keyframes nm-vento { from { translate: -14px 0; } to { translate: 14px 0; } }
@keyframes nm-bandeira { from { transform: rotate(0deg); } to { transform: rotate(-6deg); } }

/* ---- parede de retratos ---- */
.nm-parede-retratos { margin: 6px 0 0; padding: 14px 6px 4px; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 22px 18px;
  border-radius: var(--r-md); }
.nm-moldura { position: relative; display: flex; flex-direction: column; gap: 6px; width: 100%; padding: 9px 9px 8px; background: #5A3A2A; border-radius: var(--r-xxs); transform: rotate(var(--rot)); box-shadow: var(--sombra-papel-3); transition: transform .2s; text-align: left; }
.nm-moldura::before { content: ""; position: absolute; left: 50%; top: -12px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: #8C5A3C; box-shadow: var(--sombra-1); }
.nm-moldura[data-ouro] { background: linear-gradient(135deg, #E8C66A, #C9A227 50%, #A88214); }
.nm-moldura:hover, .nm-moldura:focus-visible { transform: rotate(0deg) scale(1.03); }
.nm-moldura-foto { display: grid; place-items: center; aspect-ratio: 4 / 3; overflow: hidden; background: #FFFFFF; border: 6px solid #FFFFFF; }
.nm-moldura-foto img, .nm-moldura-foto .cad-foto { width: 100%; height: 100%; object-fit: cover; border-radius: 0; max-height: none; }
.nm-moldura-legenda { font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.15; color: #FFF8EC; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.nm-moldura[data-ouro] .nm-moldura-legenda { color: #3B2410; font-weight: 700; }

/* ---- correio ---- */
.nm-bilhete-novo { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.nm-bilhetes { margin: 0; padding: 10px 4px 4px; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px 18px; }
.nm-bilhete { position: relative; display: flex; flex-direction: column; gap: 3px; padding: 14px 14px 10px; background: #FFF8D6; color: #22323A; border-radius: var(--r-xxs); transform: rotate(var(--rot)); box-shadow: var(--sombra-papel-2); }
.nm-bilhete[data-tipo="noticia"] { background: #E3F4F1; }
.nm-bilhete[data-novo] { outline: 3px solid #E29578; outline-offset: 3px; }
.nm-fita { position: absolute; left: 50%; top: -8px; width: 54px; height: 16px; margin-left: -27px; background: rgba(226,149,120,.55); }
.nm-bilhete-tipo { font-size: var(--t00); font-weight: 900; letter-spacing: .07em; text-transform: uppercase; color: #6B5320; }
.nm-bilhete[data-tipo="noticia"] .nm-bilhete-tipo { color: #0B5F67; }
.nm-bilhete-texto { font-family: var(--fonte-titulo); font-size: var(--t2); line-height: 1.22; overflow-wrap: anywhere; }
.nm-bilhete-pe { display: flex; align-items: center; gap: 5px; font-size: var(--t0); color: #4D6A70; }
.nm-bilhete-x { position: absolute; right: 2px; top: 2px; }
.nm-conta { align-self: flex-start; margin-top: 4px; background: #FFFFFF; border: 1.5px solid #0B6A73; color: #0B5F67; }
.nm-conta[aria-pressed="true"] { background: #0B6A73; color: #FFFFFF; }
.nm-conta-recebida { align-self: flex-start; margin-top: 4px; padding: 1px 8px; border-radius: var(--r-pill); background: #0B6A73; color: #FFFFFF; font-size: var(--t0); font-weight: 800; }

/* ---- encontro, pote, m\xFAsica ---- */
.nm-encontro { background-color: #006D77; background-image: linear-gradient(160deg, #006D77, #0B3B41); color: #FFFFFF; border: 0; }
.nm-encontro .nm-giz-grande { color: #FFFFFF; margin-top: 4px; overflow-wrap: anywhere; }
.nm-encontro-quando { margin: 6px 0 0; font-weight: 800; font-size: var(--t2); }
.nm-fica { display: flex; flex-direction: column; gap: 3px; margin-top: 10px; padding: 8px 10px; border-radius: var(--r-md); background: rgba(255,255,255,.12); }
.nm-fica label { font-size: var(--t0); font-weight: 800; }
.nm-fica .campo { min-height: 36px; background: #FFFFFF; color: #22323A; }
.nm-convite { margin: 10px 0 8px; font-family: var(--fonte-titulo); font-size: var(--t2); }
.nm-encontro .btn { margin-top: 8px; }
.nm-pote { display: grid; grid-template-columns: 80px minmax(0, 1fr); gap: 12px; align-items: center; }
.nm-pote-svg[data-sorteando] { animation: nm-sacode .5s ease-in-out; }
@keyframes nm-sacode { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-8deg); } 75% { transform: rotate(8deg); } }
.nm-papel { margin: 0; padding: 8px 10px; background: #FFF3D6; border-radius: var(--r-xxs); font-family: var(--fonte-titulo); font-size: var(--t3); line-height: 1.2; color: #3A2E5C; box-shadow: var(--sombra-papel-2); transform: rotate(-1.5deg); animation: nm-papel .45s ease-out; }
@keyframes nm-papel { from { transform: translateY(18px) rotate(-12deg) scale(.6); opacity: 0; } to { transform: translateY(0) rotate(-1.5deg) scale(1); opacity: 1; } }
.nm-pote-aberto { margin-top: 6px; padding: 10px; border-radius: var(--r-md); background: var(--pagina); }
.nm-papeis { margin: 8px 0 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 6px; }
.nm-papeis li { display: inline-flex; align-items: center; gap: 2px; padding: 2px 4px 2px 9px; border-radius: var(--r-xs); background: #FFF8D6; color: #3B2410; font-family: var(--fonte-titulo); font-size: var(--t1); }
.nm-musica { display: flex; gap: 12px; align-items: center; }
.nm-musica-txt { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.nm-musica-txt .nm-mao { margin: 0; font-size: var(--t35); line-height: 1.15; overflow-wrap: anywhere; }
.nm-musica-pessoa { margin: 2px 0 0; display: flex; align-items: center; gap: 6px; font-size: var(--t15); overflow-wrap: anywhere; }
.nm-musica a, .nm-sofa a { color: inherit; font-weight: 800; }
.nm-disco { flex: 0 0 auto; }
.qc-chip-dias[data-hoje] { background: #006D77; color: #FFFFFF; }

/* ---- a conversa ---- */
.nm-mesa-cartao { padding: 0; border: 0; overflow: visible; background: transparent; }
.nm-mesa-madeira { padding: 22px 26px 22px; border-radius: var(--r-xl); color: #FFF8EC; background: radial-gradient(ellipse at 50% 30%, #B98A5E, #8C5A3C); box-shadow: var(--sombra); }
.nm-mesa-madeira .nm-giz-grande { color: #FFF8EC; margin-top: 2px; }
.nm-mesa-txt { margin: 6px 0 0; font-weight: 700; }
.nm-mesa-pe { margin: 12px 0 0; font-size: var(--t1); opacity: .92; }
.nm-cartas-mini { display: flex; gap: 10px; justify-content: center; padding: 14px 0 6px; flex-wrap: wrap; }
.nm-cartas-mini span { display: flex; flex-direction: column; gap: 4px; width: 130px; min-height: 120px; padding: 10px; border-radius: var(--r-md); background: #FFF8EC; color: #22323A; font-size: var(--t15); font-weight: 800; line-height: 1.2; transform: rotate(var(--rot)); box-shadow: var(--sombra-papel-3); }
.nm-cartas-mini b { font-family: var(--fonte-titulo); font-size: var(--t4); line-height: 1; color: #8F3A1C; }
.nm-acordo { background: #FFFDF6; border-color: #E8DCC4; color: #22323A; }
.nm-combinados { margin: 0; padding: 0; list-style: none; }
.nm-combinado { display: grid; grid-template-columns: 22px minmax(0, 1fr) auto; gap: 10px; align-items: start; padding: 12px 0; border-top: 1px dashed #D9C7A0; }
.nm-combinado:first-child { border-top: 0; }
.nm-combinado-coracao { font-family: var(--fonte-titulo); font-size: var(--t3); line-height: .9; color: #C2416B; }
.nm-combinado-txt { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.nm-combinado-texto { text-align: left; font-family: var(--fonte-titulo); font-size: var(--t3); line-height: 1.25; color: #22323A; }
.nm-combinado-texto:hover { text-decoration: underline; }
.nm-acordo .qc-mini { color: #5A4A30; }
.nm-rever { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin-top: 4px; padding: 5px 8px; border-radius: var(--r-md); background: #FFF3D6; font-size: var(--t1); font-weight: 800; color: #5C4100; }
.nm-rever .chip { min-height: 28px; font-size: var(--t0); background: #FFFFFF; }
.nm-assinaturas { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
.nm-assinatura { font-family: var(--fonte-titulo); font-size: var(--t4); line-height: 1.05; transform: rotate(-4deg); padding: 0 4px; border-radius: var(--r-sm); }
.nm-assinatura:nth-child(2) { transform: rotate(3deg); }
.nm-assinatura:disabled { cursor: default; opacity: 1; }
.nm-assinatura:not(:disabled):hover { background: #FFF3D6; }
.nm-falta { padding: 1px 8px; border-radius: var(--r-pill); background: #FFE4EC; color: #7A1F40; font-size: var(--t0); font-weight: 800; }
.nm-gaveta { margin: 6px 0 0; padding: 8px 10px; list-style: none; border-radius: var(--r-md); background: #F4EDDE; }
.nm-gaveta li { display: flex; align-items: center; gap: 8px; padding: 3px 0; font-size: var(--t15); color: #5A4A30; }
.nm-gaveta li span:first-child { flex: 1; text-decoration: line-through; text-decoration-color: rgba(90,74,48,.4); }
.nm-leque { position: relative; display: flex; justify-content: center; align-items: flex-end; min-height: 230px; padding: 14px 0 26px; }
.nm-carta-costas { width: 150px; height: 200px; margin-left: -34px; border-radius: var(--r-lg); display: flex; align-items: flex-end; padding: 12px; transform: rotate(calc((var(--k) - 1.5) * 7deg)) translateY(calc(var(--k) * 2px)); box-shadow: var(--sombra-papel-3);
  background: repeating-linear-gradient(45deg, rgba(255,255,255,.18) 0 8px, transparent 8px 16px), var(--fundo-naipe); border: 3px solid #FFFFFF; }
.nm-carta-costas:first-child { margin-left: 0; }
.nm-carta-naipe { font-size: var(--t00); font-weight: 900; letter-spacing: .1em; text-transform: uppercase; color: var(--cor-naipe); }
.nm-carta-costas .nm-carta-naipe { color: #FFFFFF; }
[data-naipe="leve"] { --fundo-naipe: #C99A2E; --cor-naipe: #8A6D1F; --papel-naipe: #FFF3D6; }
[data-naipe="lembranca"] { --fundo-naipe: #23948C; --cor-naipe: #0B5F67; --papel-naipe: #E7F4F2; }
[data-naipe="sonho"] { --fundo-naipe: #7B5BA6; --cor-naipe: #4A2F7A; --papel-naipe: #EEEAF7; }
[data-naipe="fundo"] { --fundo-naipe: #C2416B; --cor-naipe: #7A1F40; --papel-naipe: #FFE4EC; }
.nm-carta-grande { width: min(360px, 100%); min-height: 210px; padding: 18px 20px; border-radius: var(--r-lg); background: var(--papel-naipe); border: 2.5px solid var(--cor-naipe); box-shadow: var(--sombra-papel-3); animation: nm-vira .45s ease-out; }
.nm-carta-grande p { margin: 10px 0 0; font-family: var(--fonte-titulo); font-size: var(--t4); line-height: 1.22; color: #22323A; }
@keyframes nm-vira { from { transform: rotateY(90deg) scale(.9); opacity: .3; } to { transform: rotateY(0) scale(1); opacity: 1; } }
.nm-aprendi { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }
.nm-aprendi label { font-size: var(--t1); font-weight: 800; }
.nm-ficha { padding: 10px 12px; margin-bottom: 8px; border-radius: var(--r-md); background: #EEF5FC; border: 1px solid #C9DDF2; color: #22323A; }
.nm-ficha[data-pessoa="1"] { background: #FFF0F5; border-color: #F4C9D8; }
.nm-ficha-cab { margin: 0 0 4px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; font-size: var(--t2); }
.nm-ficha-cab .btn { margin-left: auto; }
.nm-ficha-l { margin: 2px 0; font-size: var(--t15); display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
.nm-ficha-l b { color: #4D6A70; }
.nm-ficha-l .nm-mao { font-size: var(--t3); }
.nm-ficha .qc-mini { color: #4D6A70; }
.nm-aprendi-lista { margin-top: 6px; padding-top: 6px; border-top: 1px dashed rgba(0,0,0,.15); }
.nm-cardapios { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.nm-cardapio { padding: 12px 10px; border-radius: var(--r-sm); background: #FFFDF6; border: 1.5px solid #3B2410; box-shadow: 3px 3px 0 #3B2410; color: #22323A; min-width: 0; }
.nm-cardapio-t { margin: 0; text-align: center; font-family: var(--fonte-titulo); font-size: var(--t3); font-weight: 800; line-height: 1; }
.nm-cardapio-sub { margin: 2px 0 6px; text-align: center; font-size: var(--t00); letter-spacing: .08em; font-weight: 900; color: #8F3A1C; }
.nm-cardapio ul { margin: 0; padding: 0; list-style: none; }
.nm-cardapio li { display: flex; align-items: center; gap: 2px; border-bottom: 1px dotted #C9A27A; }
.nm-prato { flex: 1; min-width: 0; padding: 3px 0; text-align: left; font-family: var(--fonte-titulo); font-size: var(--t1); line-height: 1.2; color: #22323A; overflow-wrap: anywhere; }
button.nm-prato:hover { color: #A3264F; }
.nm-hoje-faco { display: inline-block; margin-left: 4px; padding: 0 6px; border-radius: var(--r-pill); background: #006D77; color: #FFFFFF; font-family: var(--fonte); font-size: var(--t00); font-weight: 900; }
.nm-sugestoes .chip { min-height: 28px; font-size: var(--t0); }
.nm-tempo-l { display: flex; align-items: flex-start; gap: 8px; }

/* ---- a nossa hist\xF3ria ---- */
.nm-ceu-cartao { padding: 0; border: 0; }
.nm-ceu { position: relative; aspect-ratio: 1000 / 420; border-radius: var(--r-xl) var(--r-xl) 0 0; overflow: hidden; background: linear-gradient(180deg, #14213D, #24345E 60%, #3A2E5C); color: #FFFFFF; container-type: inline-size; }
.nm-ceu-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.nm-ceu-titulo { position: absolute; left: 22px; top: 14px; pointer-events: none; }
.nm-ceu-titulo p { margin: 2px 0 0; font-size: var(--t1); opacity: .85; }
.nm-ceu-pe { display: flex; align-items: center; gap: 12px; justify-content: space-between; padding: 10px 16px 12px; background: var(--superficie); border: 1px solid var(--borda-cartao); border-top: 0; border-radius: 0 0 var(--r-xl) var(--r-xl); }
.nm-estrela { position: absolute; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 0; width: 120px; margin-left: -60px; margin-top: -14px; color: #FFE07A; text-align: center; }
.nm-estrela svg { filter: drop-shadow(0 0 8px rgba(255,224,122,.8)); transition: transform .2s; }
.nm-estrela:hover svg, .nm-estrela:focus-visible svg, .nm-estrela[data-aberta] svg { transform: scale(1.35); }
.nm-estrela[data-sonho] { color: #FFB8CF; }
.nm-estrela-ano { font-family: var(--fonte-titulo); font-size: clamp(1rem, 2.2cqi, 1.4rem); font-weight: 800; color: #FFFFFF; line-height: 1; }
.nm-estrela-t { font-family: var(--fonte-titulo); font-size: clamp(.68rem, 1.4cqi, .9rem); color: #CFE0F2; line-height: 1.1; }
.nm-estrela-proxima { color: #FFE07A; opacity: .8; left: auto; margin-left: 0; width: auto; max-width: 110px; }
.nm-estrela-proxima svg { stroke-dasharray: 3 3; filter: none; }
.nm-polaroid-ceu { position: absolute; z-index: 3; right: 3%; bottom: 8%; width: min(240px, 42%); padding: 10px 10px 8px; background: #FFFFFF; color: #22323A; transform: rotate(2deg); box-shadow: var(--sombra-papel-3); animation: nm-papel .35s ease-out; max-height: 84%; overflow: auto; }
.nm-polaroid-foto { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #EEF4F5; margin-bottom: 6px; }
.nm-polaroid-foto img, .nm-polaroid-foto .cad-foto { width: 100%; height: 100%; object-fit: cover; max-height: none; border-radius: 0; }
.nm-polaroid-t { margin: 0; font-size: var(--t35); line-height: 1.15; }
.nm-polaroid-d { margin: 2px 0 0; font-size: var(--t0); font-weight: 800; color: #4D6A70; }
.nm-polaroid-txt { margin: 6px 0 0; font-size: var(--t15); line-height: 1.35; white-space: pre-wrap; }
.nm-ceu-vazio { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); margin: 0; width: 80%; text-align: center; font-family: var(--fonte-titulo); font-size: var(--t3); color: #CFE0F2; }
.nm-quando { display: grid; grid-template-columns: 90px minmax(0, 1fr) 90px; gap: 8px; }
.nm-foto-folha { display: block; max-width: 260px; }
.nm-foto-folha img, .nm-foto-folha .cad-foto { width: 100%; height: auto; border-radius: var(--r-sm); }
.nm-sonhos-cartao { background: linear-gradient(180deg, #DDF2F4, var(--superficie) 70%); }
.nm-baloes { margin: 0; padding: 4px 0 8px; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; align-items: start; }
.nm-baloes li { margin-top: var(--alto); }
.nm-balao { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 100%; text-align: center; color: #22323A; }
.nm-balao svg { animation: nm-flutua 5s ease-in-out infinite; animation-delay: var(--atraso); }
@keyframes nm-flutua { 0%, 100% { transform: translateY(0) rotate(-1.5deg); } 50% { transform: translateY(-8px) rotate(1.5deg); } }
.nm-balao-t { font-family: var(--fonte-titulo); font-size: var(--t2); line-height: 1.15; }
.nm-balao-de { display: inline-flex; align-items: center; gap: 3px; font-size: var(--t0); color: #4D6A70; }
.nm-balao-passo, .nm-balao-cx { padding: 3px 8px; border-radius: var(--r-sm); background: #FFFFFF; border: 1px dashed #83C5BE; font-size: var(--t0); color: #0B5F67; }
.nm-balao-cx { border-style: solid; background: #E7F4F2; font-weight: 800; }
.nm-balao:hover .nm-balao-t, .nm-balao:focus-visible .nm-balao-t { text-decoration: underline; }
.nm-capsula { background: #FFF8F0; color: #3B1A0E; }
.nm-capsula .qc-mini { color: #6B4334; }
.nm-envelopes { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
.nm-envelope { display: flex; align-items: center; gap: 10px; }
.nm-envelope-arte { position: relative; flex: 0 0 auto; width: 58px; height: 40px; border-radius: var(--r-xxs); background: #F3E2C7; border: 1.5px solid #C9A27A; overflow: hidden; }
.nm-envelope-arte::before { content: ""; position: absolute; left: -2px; right: -2px; top: -22px; height: 40px; border-bottom: 1.5px solid #C9A27A; transform: rotate(0) skewY(0); background: linear-gradient(160deg, transparent 49%, #C9A27A 50%, transparent 51%), linear-gradient(20deg, transparent 49%, #C9A27A 50%, transparent 51%); }
.nm-selo-cera { position: absolute; left: 50%; top: 50%; display: grid; place-items: center; width: 22px; height: 22px; margin: -9px 0 0 -11px; border-radius: 50%; background: #C2342A; color: #FFE4DC; box-shadow: var(--sombra-1); }
.nm-envelope[data-pode] .nm-selo-cera { animation: nm-bate 1.8s ease-in-out infinite; }
.nm-envelope[data-aberta] .nm-envelope-arte { background: #FFFDF6; }
.nm-envelope-txt { flex: 1; min-width: 0; font-size: var(--t15); }
.nm-carta-aberta { margin-top: 10px; padding: 14px 16px; border-radius: var(--r-sm); background: repeating-linear-gradient(180deg, #FFFDF6 0 25px, #EADFC6 25px 26px); border: 1px solid #E3D3B0; animation: nm-papel .45s ease-out; }
.nm-carta-de { margin: 0 0 6px; font-size: var(--t2); color: #8F3A1C; }
.nm-carta-texto { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t2); line-height: 1.55; white-space: pre-wrap; color: #22323A; }
.nm-carta-papel { font-family: var(--fonte-titulo); font-size: var(--t2); line-height: 1.5; background: repeating-linear-gradient(180deg, #FFFDF6 0 23px, #EADFC6 23px 24px); }
.nm-neste { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
.nm-neste li { display: flex; gap: 10px; align-items: center; font-size: var(--t15); }
.nm-neste-foto { flex: 0 0 auto; width: 76px; padding: 4px; background: #FFFFFF; box-shadow: var(--sombra-papel-2); transform: rotate(-3deg); }
.nm-neste-foto img, .nm-neste-foto .cad-foto { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; max-height: none; border-radius: 0; }
.nm-aniv { background: linear-gradient(160deg, #FFE4EC, #FFF3D6); color: #3B1A2A; border-color: #F4C9D8; }
.nm-aniv .qc-h2 { color: #7A1F40; }
.nm-aniv-txt { margin: 0; font-size: var(--t2); line-height: 1.45; }
.nm-aniv[data-festa] { background: linear-gradient(160deg, #FFD3E1, #FFE9B0); }
.nm-livro { display: flex; gap: 12px; align-items: center; }
.nm-livro-capa { flex: 0 0 auto; display: grid; place-items: center; width: 74px; height: 96px; border-radius: var(--r-xs) var(--r-md) var(--r-md) var(--r-xs); background: linear-gradient(90deg, #8F3A1C 0 8px, #C2416B 8px); color: #FFFFFF; text-align: center; box-shadow: var(--sombra-papel-2); font-family: var(--fonte-titulo); font-size: var(--t2); font-weight: 800; line-height: .95; }

/* ---- telas cheias ---- */
.nm-tela-mesa, .nm-tela-noite, .nm-tela-sofa { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 28px clamp(20px, 5vw, 64px) 40px; color: #FFF8EC; }
.nm-tela-mesa { background: radial-gradient(ellipse at 50% 35%, #B98A5E, #6E4529); }
.nm-tela-noite { background: radial-gradient(ellipse at 50% 20%, #3A2E5C, #14213D 70%); }
.nm-tela-sofa { background: radial-gradient(ellipse at 30% 40%, #3B2A2A, #120E18 75%); }
.nm-tela-fechar { align-self: flex-end; }
.nm-cartas-mesa { display: flex; gap: 16px; align-items: flex-end; justify-content: center; flex-wrap: wrap; padding: 10px 0; }
.nm-carta-mesa { display: flex; flex-direction: column; gap: 6px; width: 170px; min-height: 200px; padding: 16px 14px; border-radius: var(--r-lg); background: #FFF3D6; color: #22323A; text-align: left; transform: rotate(var(--rot)); box-shadow: var(--sombra-papel-3); opacity: .75; transition: transform .25s, opacity .25s, width .25s; }
.nm-carta-mesa[data-aberta] { width: 260px; min-height: 260px; opacity: 1; outline: 4px solid #FFE07A; transform: rotate(0) translateY(-10px); background: #FFE4EC; }
.nm-carta-mesa[data-feita] { opacity: .55; }
.nm-carta-mesa b { font-size: var(--t3); line-height: 1.2; }
.nm-carta-n { font-family: var(--fonte-titulo); font-size: var(--t5); line-height: 1; color: #8F3A1C; }
.nm-carta-d { font-family: var(--fonte-titulo); font-size: var(--t2); line-height: 1.3; }
.nm-mesa-controles, .nm-mesa-nav { display: flex; gap: 10px; align-items: center; justify-content: center; flex-wrap: wrap; }
.nm-vez, .nm-relogio { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: var(--r-pill); background: rgba(255,255,255,.16); font-weight: 800; }
.nm-relogio { font-variant-numeric: tabular-nums; }
.nm-virou { width: min(560px, 100%); display: flex; flex-direction: column; gap: 6px; padding: 12px 14px; border-radius: var(--r-lg); background: rgba(0,0,0,.18); }
.nm-virou label { font-weight: 800; }
.nm-virou .campo { background: #FFFFFF; color: #22323A; }
.nm-ok { margin: 0; font-size: var(--t15); font-weight: 700; color: #FFE07A; }
.nm-retro { display: flex; flex-direction: column; align-items: center; gap: 12px; max-width: 760px; text-align: center; animation: nm-papel .6s ease-out; }
.nm-retro-foto { display: block; max-width: min(70vw, 640px); padding: 10px 10px 14px; background: #FFFFFF; box-shadow: var(--sombra-papel-3); transform: rotate(-1.5deg); }
.nm-retro-foto img, .nm-retro-foto .cad-foto { display: block; width: 100%; max-height: 56vh; object-fit: contain; border-radius: 0; }
.nm-retro-icone { color: #FFE07A; }
.nm-retro-txt { margin: 0; font-family: var(--fonte-titulo); font-size: clamp(1.3rem, 2.6vw, 2rem); line-height: 1.25; }
.nm-retro-data { margin: 0; font-size: var(--t2); opacity: .8; }
.nm-sofa { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 36px; align-items: center; width: min(1100px, 100%); flex: 1; }
@media (max-width: 860px) { .nm-sofa { grid-template-columns: minmax(0, 1fr); } }
.nm-sofa-foto { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.nm-sofa-lado { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
.nm-sofa-pergunta { margin: 0; font-family: var(--fonte-titulo); font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.2; color: #FFF3D6; }
.nm-sofa-musica { display: flex; align-items: center; gap: 12px; margin-top: 8px; }
.nm-sofa-musica p { margin: 2px 0; }
.nm-sofa-pe { margin: 10px 0 0; font-size: var(--t15); opacity: .7; }
}

@layer escuro {
${W} .nm-cardapio .qc-mini { color: #56666B; }
${W} .nm-sub b { color: #FF9DBA; }
${W} .nm-etq { background: rgba(16,30,34,.94); border-color: #4A3A40; color: #E3EEF0; }
${W} .nm-etq-l { color: #E3EEF0; }
${W} .nm-etq-t { color: #F0A57E; }
${W} .nm-etq[data-destaque] { background: #3A1A28; border-color: #E37A9D; }
${W} .nm-sala-svg .nm-parede { fill: #3A2A30; } ${W} .nm-sala-svg .nm-listra { stroke: #42303A; }
${W} .nm-acordo, ${W} .nm-capsula { background: #2A231A; border-color: #4A3B26; color: #F4E8D2; }
${W} .nm-combinado-texto, ${W} .nm-acordo .qc-mini, ${W} .nm-capsula .qc-mini { color: #F4E8D2; }
${W} .nm-combinado { border-color: #5A4A30; }
${W} .nm-gaveta { background: #33291C; } ${W} .nm-gaveta li { color: #E8DCC4; }
${W} .nm-ficha { background: #15283B; border-color: #2B4A6A; color: #E3EEF0; } ${W} .nm-ficha[data-pessoa="1"] { background: #33182A; border-color: #6A3046; }
${W} .nm-ficha-l b, ${W} .nm-ficha .qc-mini { color: #B9CDD2; }
${W} .nm-aniv { background: linear-gradient(160deg, #3A1A28, #33291C); border-color: #6A3046; color: #FBE3EC; } ${W} .nm-aniv .qc-h2 { color: #FFB8CF; }
${W} .nm-sonhos-cartao { background: linear-gradient(180deg, #12303A, var(--superficie) 70%); } ${W} .nm-balao { color: #E3EEF0; } ${W} .nm-balao-de { color: #B9CDD2; }
${W} .nm-balao-passo { background: #10262A; color: #A7DDD3; } ${W} .nm-balao-cx { background: #173F3F; color: #BDE7E2; }
${W} .nm-aceno-op:hover, ${W} .nm-aceno-op:focus-visible, ${W} .nm-aceno-recebidos { background: #3A1A28; color: #FFD3E1; }
${W} .nm-ceu-pe { background: var(--superficie); }
${W} .nm-pote-aberto { background: #10262A; }
}

@layer movimento {
html[data-movimento="reduzido"] .nm *, html[data-movimento="parado"] .nm *, html[data-movimento="reduzido"] .nm-tela-mesa *, html[data-movimento="parado"] .nm-tela-mesa * { animation: none !important; }
@media (prefers-reduced-motion: reduce) { .nm *, .nm-tela-mesa *, .nm-tela-noite *, .nm-tela-sofa * { animation: none !important; transition: none !important; } }
}

@media print {
  .lm-impressao-copia.nm-imp-livro .nm-livro-linha { margin: 0 0 4pt; font-family: var(--fonte-titulo); font-size: 12.04pt; }
}
`;var Vt='.cc[data-ajustes-mesa="1"]',sl='html[data-tema="escuro"]',An=`
@layer base {
${Vt} > #app-conteudo { max-width: 1500px; margin-top: 0; min-height: 100vh; background: transparent; border-radius: 0; box-shadow: none; overflow: visible; padding: 0 28px 48px; }
${Vt}[data-acao] > #app-conteudo { padding-bottom: 48px; }
${Vt} .toast { left: calc(var(--casa-larg) + 28px); width: auto; max-width: 520px; bottom: 20px; }
.aj-topo { display: flex; align-items: center; gap: 14px; padding: 18px 0 16px; }
.aj-h1 { margin: 0; font-family: var(--fonte-titulo); font-size: var(--t5); font-weight: 800; letter-spacing: -.02em; color: var(--texto); }
.aj-sub { margin: 2px 0 0; font-size: var(--t15); font-weight: 700; color: var(--texto-2); }
.aj-grade { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 18px; align-items: start; }
.aj-grade[data-grupo="aparelho"] { grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); }
.aj-imp-caderno { display: none; }
.aj-lojas { list-style: none; margin: 10px 0 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.aj-loja { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 150px) 36px; align-items: center; gap: 8px; min-height: 40px; border-bottom: 1px solid var(--borda); }
.aj-loja-nome { font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-transform: capitalize; }
.aj-loja select { min-height: 34px; border-radius: var(--r-sm); border: 1px solid var(--borda); background: var(--superficie); color: var(--texto); font: inherit; font-size: var(--t2); padding: 0 6px; }
.aj-lojas-busca { margin-top: 8px; width: 100%; }
@media print {
  html[data-imprimindo] .aj-imp-caderno.lm-impressao-copia { display: block !important; padding: 0; }
  .aj-imp-caderno h1 { font-size: 26pt; margin: 0 0 4pt; }
  .aj-imp-caderno .aj-imp-sub { margin: 0 0 18pt; font-size: 11pt; color: #444; }
  .aj-imp-caderno section { break-before: page; }
  .aj-imp-caderno section:first-of-type { break-before: auto; }
  .aj-imp-caderno h2 { font-size: 20pt; margin: 0 0 10pt; border-bottom: 1pt solid #000; }
  .aj-imp-caderno ul { list-style: none; margin: 0; padding: 0; }
  .aj-imp-caderno li { margin: 0 0 7pt; font-size: 11.5pt; line-height: 1.35; break-inside: avoid; }
  .aj-imp-caderno .aj-imp-data { display: inline-block; min-width: 150pt; color: #444; font-size: 10pt; }
  .aj-imp-caderno i { color: #666; }
}
.aj-grupos { display: flex; flex-direction: column; gap: 6px; margin: 0 0 18px; }
.aj .aj-grupos .seg { width: fit-content; }
.aj-grupos-dica { margin: 0; }
.aj-col { display: flex; flex-direction: column; gap: 18px; min-width: 0; }

.aj .secao { margin: 0; padding: 16px 18px; background: var(--superficie); border: 1px solid var(--borda-cartao); border-radius: var(--r-xl); box-shadow: var(--sombra); }
.aj .secao-titulo { margin-top: 0; }
.aj .aj-risco { grid-column: 1 / -1; margin-bottom: 0 !important; display: grid; grid-template-columns: minmax(0, 1fr) auto; grid-template-areas: "t b" "l b"; column-gap: 18px; align-items: center; border-color: #E9B4A2; background: #FFF8F5; }
.aj .aj-risco .secao-titulo { grid-area: t; margin: 0; }
.aj .aj-risco .btn { grid-area: b; width: auto; }
.aj .aj-risco .legenda { grid-area: l; margin: 2px 0 0; }
.aj .aniv-linha { display: grid; grid-template-columns: minmax(0, 1fr) minmax(150px, 1fr); gap: 8px; }
.aj .pessoas { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 8px; }
}
@layer escuro {
${sl} .aj .aj-risco { background: #2B1A14; border-color: #7A3C26; }
}
`;var eo=ha(xo(),1);var $=ha(Ma(),1);function Cn({aoFicar:e,aoSair:a}){return(0,$.jsxs)(Za,{titulo:"Sair sem salvar?",aoFechar:e,children:[(0,$.jsx)("p",{className:"apoio",style:{marginBottom:16},children:"A altera\xE7\xE3o feita neste lan\xE7amento vai se perder."}),(0,$.jsxs)("div",{className:"pilha",children:[(0,$.jsx)("button",{type:"button",className:"btn btn-principal btn-bloco","data-autofoco":!0,onClick:e,children:"Continuar editando"}),(0,$.jsx)("button",{type:"button",className:"btn btn-perigo-sec btn-bloco",onClick:a,children:"Sair sem salvar"})]})]})}function Dn({cofre:e,item:a,aoExcluir:o,aoFechar:t}){let i=si(e.lancamentos,a.compra.id),s=i.filter(n=>n.compra.n>=a.compra.n);return(0,$.jsxs)(Za,{titulo:"Excluir parcelas",aoFechar:t,children:[(0,$.jsxs)("p",{className:"apoio",style:{marginBottom:16},children:["Compra de ",$a(Io(e.lancamentos,a))," em ",a.compra.de,"x. As parcelas anteriores a esta continuam no hist\xF3rico, a menos que a compra toda seja exclu\xEDda."]}),(0,$.jsxs)("div",{className:"pilha",children:[(0,$.jsxs)("button",{type:"button",className:"btn btn-secundario btn-bloco","data-autofoco":!0,onClick:()=>o(!1),children:["Esta e as pr\xF3ximas (",s.length,")"]}),(0,$.jsxs)("button",{type:"button",className:"btn btn-perigo-sec btn-bloco",onClick:()=>o(!0),children:["A compra toda (",i.length,")"]}),(0,$.jsx)("button",{type:"button",className:"btn btn-texto",onClick:t,children:"Cancelar"})]})]})}function Bn({folha:e,aoFechar:a,aoAbrir:o,aoDescartar:t}){let[i,s]=(0,eo.useState)(""),[n,d]=(0,eo.useState)(!1);return(0,$.jsxs)(Za,{titulo:e.orfa?"Lan\xE7amentos guardados neste aparelho":"Senha da c\xF3pia",aoFechar:a,children:[(0,$.jsx)("p",{className:"apoio",style:{marginBottom:12},children:e.orfa?"Este aparelho tem lan\xE7amentos que n\xE3o chegaram a subir antes de a senha ser trocada. Digite a senha antiga para junt\xE1-los aos de agora.":"Esta c\xF3pia foi feita com outra senha. Digite a senha que valia quando ela foi salva."}),(0,$.jsxs)("div",{className:"pilha",children:[(0,$.jsx)(Yr,{rotulo:"Senha da c\xF3pia",value:i,mostrar:n,aoMostrar:()=>d(!n),erro:e.erro,"data-autofoco":"",onChange:g=>s(g.target.value),onKeyDown:g=>{g.key==="Enter"&&i&&o(i)}}),(0,$.jsx)("button",{type:"button",className:"btn btn-principal btn-bloco","aria-disabled":!i,onClick:()=>i&&o(i),children:"Abrir e juntar"}),e.orfa?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("button",{type:"button",className:"btn btn-texto",onClick:a,children:"Agora n\xE3o (pergunto de novo depois)"}),(0,$.jsx)("button",{type:"button",className:"btn btn-texto",style:{color:"var(--perigo-texto)"},onClick:t,children:"Descartar esses lan\xE7amentos"})]}):null]})]})}function $n({listar:e,aoEscolher:a,aoFechar:o}){let[t,i]=(0,eo.useState)(null),[s,n]=(0,eo.useState)(""),[d,g]=(0,eo.useState)(null);return(0,eo.useEffect)(()=>{let h=!0;return e().then(f=>{h&&i(f)}).catch(()=>{h&&n("N\xE3o deu para ver as c\xF3pias agora. Confira a internet e tente de novo.")}),()=>{h=!1}},[e]),(0,$.jsxs)(Za,{titulo:"Restaurar de um dia",aoFechar:o,children:[(0,$.jsx)("p",{className:"apoio",style:{marginBottom:12},children:"Todo dia em que voc\xEAs lan\xE7am algo, a nuvem guarda uma c\xF3pia daquele dia. Escolher um dia junta o que havia nele com o que est\xE1 aqui agora: nada do que existe hoje \xE9 apagado."}),s?(0,$.jsx)("p",{className:"apoio",role:"alert",children:s}):null,!t&&!s?(0,$.jsx)("p",{className:"apoio","aria-live":"polite",children:"Procurando as c\xF3pias\u2026"}):null,t&&!t.length?(0,$.jsx)("p",{className:"apoio",children:"Ainda n\xE3o h\xE1 c\xF3pias na nuvem. A primeira \xE9 feita no pr\xF3ximo lan\xE7amento."}):null,t&&t.length?(0,$.jsx)("div",{children:t.slice(0,60).map(h=>(0,$.jsxs)("button",{type:"button",className:"linha","aria-disabled":!!d,onClick:async()=>{d||(g(h),await a(h),g(null))},children:[(0,$.jsx)(vr,{size:20,"aria-hidden":"true",style:{color:"var(--acao)"}}),(0,$.jsx)("span",{className:"linha-meio",children:(0,$.jsx)("span",{className:"linha-nome",children:ae(h)})}),(0,$.jsx)("span",{className:"legenda",children:d===h?"Abrindo\u2026":"Juntar"})]},h))}):null]})}function Sn({contagem:e,aoFechar:a,aoConfirmar:o}){let[t,i]=(0,eo.useState)(""),[s,n]=(0,eo.useState)(!1),d=t.trim().toUpperCase()==="APAGAR";return(0,$.jsx)(Za,{titulo:"Apagar tudo?",aoFechar:a,children:(0,$.jsxs)("div",{className:"pilha",children:[(0,$.jsxs)("div",{className:"aviso aviso-alerta",children:[(0,$.jsx)(Ka,{size:18,"aria-hidden":"true"}),(0,$.jsxs)("span",{children:["Apaga de vez, nos dois aparelhos: ",Ta(e.lancamentos,"lan\xE7amento"),", ",Ta(e.fixas,"recorrente"),", ",Ta(e.tetos,"teto")," e ",Ta(e.caixinhas,"caixinha"),e.familia?`, al\xE9m de tudo das se\xE7\xF5es da fam\xEDlia (${Ta(e.familia,"registro","registros")}: lousa, Ca\xEA com rem\xE9dios, receitas, ficha e medidas, Lazer, Mercado, Mia e Marie e N\xF3s dois, com as fotos)`:"",". A senha tamb\xE9m deixa de valer."]})]}),(0,$.jsx)("p",{className:"apoio",children:"N\xE3o tem como desfazer. Se quiser guardar o hist\xF3rico, cancele e salve uma c\xF3pia antes."}),(0,$.jsx)("p",{className:"apoio",children:"As c\xF3pias di\xE1rias guardadas na nuvem, o arquivo de anos antigos e todas as fotos (receitas, porta-retratos e caderninho) tamb\xE9m s\xE3o apagadas."}),(0,$.jsxs)("div",{children:[(0,$.jsx)("label",{className:"rotulo",htmlFor:"campo-apagar",children:"Para confirmar, escreva APAGAR"}),(0,$.jsx)("input",{id:"campo-apagar",className:"campo",value:t,autoCapitalize:"characters",autoComplete:"off",onChange:g=>i(g.target.value)})]}),(0,$.jsx)("button",{type:"button",className:"btn btn-principal btn-bloco","data-autofoco":!0,onClick:a,children:"Cancelar, n\xE3o quero apagar"}),(0,$.jsx)("button",{type:"button",className:"btn btn-perigo btn-bloco","aria-disabled":!d||s,onClick:async()=>{!d||s||(n(!0),await o(),n(!1))},children:s?"Apagando\u2026":"Apagar tudo e recome\xE7ar"})]})})}function jn(e,a){return e.modo==="memoria"?{texto:"Este aparelho n\xE3o deixa o app gravar. Salve a c\xF3pia de seguran\xE7a antes de fechar.",Icone:Ka}:e.soLeitura?{texto:"O outro aparelho j\xE1 est\xE1 numa vers\xE3o mais nova do app, e esta aqui n\xE3o sabe gravar na base dele. Feche e abra o app para atualizar. At\xE9 l\xE1, d\xE1 para olhar, mas n\xE3o lan\xE7ar.",acao:"Atualizar o app",aoAgir:()=>window.location.reload(),Icone:yt}:e.navegadorAntigo?{texto:"A base est\xE1 compactada e este navegador \xE9 antigo demais para abrir. Atualize o sistema do celular (iOS 16.4 ou mais novo) ou o Chrome. Nada foi gravado por cima.",Icone:Ka}:e.ilegivel?{texto:"A nuvem tem dados que este aparelho n\xE3o consegue ler, e nada foi gravado por cima. Se o outro aparelho apagou tudo ou trocou a senha, feche e abra o app. Se n\xE3o, grave os dados daqui.",acao:"Gravar os dados daqui",aoAgir:()=>a.forcarGravacao(),Icone:Ka}:e.recusa?{texto:e.recusa===403||e.recusa===401?"A nuvem recusou o envio: a prote\xE7\xE3o da base n\xE3o aceitou este aparelho. Os lan\xE7amentos est\xE3o guardados aqui. Toque em Tentar agora; se continuar, me mande este aviso.":`A nuvem recusou o envio (c\xF3digo ${e.recusa}). Os lan\xE7amentos est\xE3o guardados neste aparelho. Se continuar, me mande este aviso.`,acao:"Tentar agora",aoAgir:()=>a.tentarAgora(),Icone:Ka}:e.offline?{texto:e.pendente?"Sem conex\xE3o. O que voc\xEAs anotarem ou lan\xE7arem fica guardado neste aparelho e sobe sozinho.":"Sem conex\xE3o agora.",acao:"Tentar agora",aoAgir:()=>a.tentarAgora(),Icone:Ar}:e.versaoAntiga?{texto:"O outro aparelho ainda est\xE1 na vers\xE3o antiga do app. Feche e abra o site nele para atualizar, antes de lan\xE7ar.",Icone:qr}:e.versaoNova?{texto:"H\xE1 uma vers\xE3o mais nova do app no outro aparelho. Feche e abra o app para atualizar este tamb\xE9m.",acao:"Atualizar o app",aoAgir:()=>window.location.reload(),Icone:yt}:e.arquivoFaltando?{texto:"Parte do arquivo de anos antigos n\xE3o abriu agora. Os anos atuais est\xE3o normais; o app tenta de novo sozinho.",Icone:br}:null}var Ro=ha(xo(),1);var sa=ha(Ma(),1),ll=(e,a)=>e&&Array.isArray(e[a])?e[a]:[],In="casita-conquistas-vistas",Yt=()=>{try{return JSON.parse(localStorage.getItem(In)||"{}")}catch(e){return{}}},Nn=e=>{try{let a=Yt();a[e]=1;let o=Object.keys(a);o.length>60&&o.slice(0,o.length-60).forEach(t=>delete a[t]),localStorage.setItem(In,JSON.stringify(a))}catch(a){}};function cl(e,a,o=12){let t=ll(e,"mercado"),i=t.length>0&&t.every(b=>b.comprado),s=Lr(e,a,o),n=s.totalDoses>0&&s.faltam===0,d=new Date(a+"T12:00:00"),g=(d.getDay()+6)%7,h=new Date(d);h.setDate(d.getDate()-g);let f=[];for(let b=0;b<=g;b++){let N=new Date(h);N.setDate(h.getDate()+b),f.push(N.toISOString().slice(0,10))}let l=Object.assign({},Et(e,Z(f[0])).porDia,Et(e,Z(a)).porDia),k=f.flatMap(b=>(l[b]||[]).filter(N=>!N.doCae&&!N.doPet)),S=k.length>=3&&k.every(b=>b.feito),V=ie(e,Z(a),wo(e)),u=V.contas.length>0&&V.pagas===V.contas.length;return{mercado:i,remedios:n,lousa:S,contas:u,semana:f[0]}}function pl(e,a){let o=new Date(a+"T12:00:00");o.setDate(1),o.setMonth(o.getMonth()-1);let t=Z(o.toISOString().slice(0,10)),i=ao(e,t);return i.length<5?null:di(i)-pi(i)>=0?t:null}var dl={mercado:{t:"Lista zerada!",s:"Tudo no carrinho.",arte:()=>(0,sa.jsx)("span",{className:"cq-sacola",children:(0,sa.jsx)(_e,{id:"mercado",tam:64})})},remedios:{t:"Rem\xE9dios de hoje: todos dados",s:"A girafa agradece.",arte:()=>(0,sa.jsxs)("span",{className:"cq-girafa",children:[(0,sa.jsx)(_e,{id:"cae",tam:64}),(0,sa.jsx)("i",{"aria-hidden":"true",children:"\u2605"})]})},lousa:{t:"Semana da lousa toda riscada",s:"Nada pendente at\xE9 hoje.",arte:()=>(0,sa.jsx)("span",{className:"cq-lousa",children:(0,sa.jsx)(_e,{id:"lousa",tam:64})})},contas:{t:"Contas do m\xEAs: todas pagas",s:"O varal ficou vazio e a Mia comemora.",arte:()=>(0,sa.jsx)("span",{className:"cq-mia",children:(0,sa.jsx)(Nt,{quem:"mia",tam:84})})},mes:{t:"",s:"Fechou sem faltar dinheiro.",arte:()=>(0,sa.jsx)("span",{className:"cq-mia",children:(0,sa.jsx)(Nt,{quem:"mia",tam:84})})}};function Tn({cofre:e,hoje:a,hora:o}){let[t,i]=(0,Ro.useState)(null),s=(0,Ro.useRef)(null);if((0,Ro.useEffect)(()=>{if(!e)return;let g=cl(e,a,o),h=s.current;s.current=g;let f=null;if(h)for(let k of["remedios","mercado","lousa","contas"]){let S=k+":"+(k==="lousa"?g.semana:k==="contas"?Z(a):a);if(g[k]&&!h[k]&&!Yt()[S]){f={tipo:k},Nn(S);break}}else{let k=pl(e,a);k&&!Yt()["mes:"+k]&&(f={tipo:"mes",ym:k},Nn("mes:"+k))}if(!f)return;i({...f,t:Date.now()}),Mi([14,60,22]);let l=setTimeout(()=>i(null),3200);return()=>clearTimeout(l)},[e,a]),!t)return null;let n=dl[t.tipo],d=t.tipo==="mes"?`${Ba(t.ym)} no azul!`:n.t;return(0,sa.jsxs)("div",{className:"conquista",role:"status","data-tipo":t.tipo,children:[n.arte(),(0,sa.jsxs)("span",{className:"cq-texto",children:[(0,sa.jsx)("b",{children:d}),(0,sa.jsx)("span",{children:n.s})]})]},t.t)}function Mn({texto:e="Abrindo\u2026"}){let a="#22323A";return(0,sa.jsxs)("div",{className:"carregando",role:"status",children:[(0,sa.jsxs)("svg",{className:"carregando-balao",viewBox:"0 0 120 170",width:"120",height:"170","aria-hidden":"true",focusable:"false",children:[(0,sa.jsxs)("g",{className:"cb-sobe",children:[(0,sa.jsx)("path",{d:"M44 86 L54 118 M76 86 L66 118",stroke:a,strokeWidth:"2"}),(0,sa.jsx)("path",{d:"M60 10 c-30 0 -44 22 -40 44 c3 16 18 28 32 36 h16 c14 -8 29 -20 32 -36 c4 -22 -10 -44 -40 -44z",fill:"#E29578",stroke:a,strokeWidth:"3",strokeLinejoin:"round"}),(0,sa.jsx)("path",{d:"M60 10 c-11 7 -15 23 -14 40 c1 14 4 25 4 40 h20 c0 -15 3 -26 4 -40 c1 -17 -3 -33 -14 -40z",fill:"#FFDDD2",stroke:a,strokeWidth:"3",strokeLinejoin:"round"}),(0,sa.jsx)("path",{d:"M42 120 L60 104 L78 120 Z",fill:"#E29578",stroke:a,strokeWidth:"3",strokeLinejoin:"round"}),(0,sa.jsx)("rect",{x:"46",y:"120",width:"28",height:"24",fill:"#FFFFFF",stroke:a,strokeWidth:"3",strokeLinejoin:"round"}),(0,sa.jsx)("path",{d:"M56 144 v-10 a4 4 0 0 1 8 0 v10",fill:"#006D77",stroke:a,strokeWidth:"2.4"})]}),(0,sa.jsx)("ellipse",{className:"cb-sombra",cx:"60",cy:"164",rx:"22",ry:"3",fill:"#0B3B41",opacity:".15"})]}),(0,sa.jsx)("p",{className:"apoio",children:e})]})}var Ln=`
@layer base {
.conquista { position: fixed; left: 50%; bottom: calc(96px + env(safe-area-inset-bottom, 0px)); z-index: 60; transform: translateX(-50%);
  display: flex; align-items: center; gap: 12px; width: min(360px, calc(100vw - 32px)); padding: 10px 16px 10px 10px; border-radius: var(--r-xl);
  background: var(--superficie); border: 2px solid #22323A; box-shadow: 0 6px 0 #22323A, 0 18px 30px -12px rgba(0,0,0,.35);
  animation: cq-entra .5s cubic-bezier(.2,1.4,.4,1) both, cq-sai .35s 2.85s ease-in forwards; pointer-events: none; }
.cc[data-largo="1"] ~ .conquista, .cc[data-largo="1"] .conquista { bottom: 28px; }
.cq-texto { display: flex; flex-direction: column; min-width: 0; }
.cq-texto b { font-size: var(--t3); font-weight: 800; color: var(--texto); }
.cq-texto span { font-size: var(--t2); color: var(--texto-2); }
.conquista > span:first-child { flex-shrink: 0; position: relative; display: block; }
.cq-mia { animation: cq-pula .6s .3s ease-in-out 3; }
.cq-sacola { animation: cq-balanca .5s .3s ease-in-out 3; transform-origin: 50% 100%; }
.cq-girafa i { position: absolute; right: -4px; top: -6px; font-style: normal; font-size: 22px; color: #F2C14E; text-shadow: 0 0 0 #22323A, 1px 1px 0 #22323A; animation: cq-brilha .8s ease-in-out 3; }
.cq-lousa { animation: cq-balanca .5s .3s ease-in-out 2; transform-origin: 50% 100%; }
.carregando { min-height: 70vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 48px 16px; text-align: center; }
.cb-sobe { animation: cb-sobe 2.6s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 0; }
.cb-sombra { animation: cb-sombra 2.6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
@keyframes cb-sobe { 0%, 100% { transform: translateY(6px) rotate(-2deg); } 50% { transform: translateY(-6px) rotate(2deg); } }
@keyframes cb-sombra { 0%, 100% { transform: scaleX(1); opacity: .18; } 50% { transform: scaleX(.75); opacity: .1; } }
@keyframes cq-entra { from { transform: translate(-50%, 40px) scale(.8); opacity: 0; } to { transform: translateX(-50%); opacity: 1; } }
@keyframes cq-sai { to { transform: translate(-50%, 30px); opacity: 0; } }
@keyframes cq-pula { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes cq-balanca { 0%, 100% { transform: rotate(0); } 33% { transform: rotate(-8deg); } 66% { transform: rotate(8deg); } }
@keyframes cq-brilha { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(1.4) rotate(20deg); } }
}
@layer movimento {
html[data-movimento="parado"] .conquista, html[data-movimento="parado"] .conquista *, html[data-movimento="parado"] .carregando * { animation: none !important; }
@media (prefers-reduced-motion: reduce) { .conquista, .conquista *, .carregando * { animation: none !important; } }
}
`;var ml=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ot(e){let a=e.length,o=a+1+8+63&-64,t=new Uint8Array(o);t.set(e),t[a]=128;let i=a*8,s=new DataView(t.buffer);s.setUint32(o-4,i>>>0,!1),s.setUint32(o-8,Math.floor(i/4294967296),!1);let n=1779033703,d=3144134277,g=1013904242,h=2773480762,f=1359893119,l=2600822924,k=528734635,S=1541459225,V=new Uint32Array(64);for(let N=0;N<o;N+=64){for(let I=0;I<16;I++)V[I]=s.getUint32(N+I*4,!1);for(let I=16;I<64;I++){let Sa=V[I-15],va=V[I-2],ya=(Sa>>>7|Sa<<25)^(Sa>>>18|Sa<<14)^Sa>>>3,ja=(va>>>17|va<<15)^(va>>>19|va<<13)^va>>>10;V[I]=V[I-16]+ya+V[I-7]+ja>>>0}let A=n,ia=d,E=g,la=h,ca=f,R=l,fa=k,X=S;for(let I=0;I<64;I++){let Sa=(ca>>>6|ca<<26)^(ca>>>11|ca<<21)^(ca>>>25|ca<<7),va=ca&R^~ca&fa,ya=X+Sa+va+ml[I]+V[I]>>>0,ja=(A>>>2|A<<30)^(A>>>13|A<<19)^(A>>>22|A<<10),Ca=A&ia^A&E^ia&E,Ra=ja+Ca>>>0;X=fa,fa=R,R=ca,ca=la+ya>>>0,la=E,E=ia,ia=A,A=ya+Ra>>>0}n=n+A>>>0,d=d+ia>>>0,g=g+E>>>0,h=h+la>>>0,f=f+ca>>>0,l=l+R>>>0,k=k+fa>>>0,S=S+X>>>0}let u=new Uint8Array(32),b=new DataView(u.buffer);return[n,d,g,h,f,l,k,S].forEach((N,A)=>b.setUint32(A*4,N,!1)),u}var Gt=(...e)=>{let a=new Uint8Array(e.reduce((t,i)=>t+i.length,0)),o=0;for(let t of e)a.set(t,o),o+=t.length;return a},Aa={enc:e=>{let a=new Uint8Array(e),o="";for(let t=0;t<a.length;t+=4096)o+=String.fromCharCode(...a.subarray(t,t+4096));return btoa(o)},dec:e=>Uint8Array.from(atob(e),a=>a.charCodeAt(0))};function et(){try{return!!(window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey)}catch(e){return!1}}function qo(e){let a=new Uint8Array(e);return window.crypto.getRandomValues(a),a}async function gl(e,a,o){let t=await crypto.subtle.importKey("raw",new TextEncoder().encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:a,iterations:o,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}function ul(e,a){let o=ot(Gt(new TextEncoder().encode(e),a));for(let t=0;t<3e4;t++)o=ot(o);return o}function xl(e,a,o){let t=new Uint8Array(o),i=0,s=0;for(;i<o;){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,s++,!1),t.set(ot(Gt(e,a,n)).subarray(0,Math.min(32,o-i)),i),i+=32}return t}var On=e=>/^a[12]$/.test(String(e).split(".")[0])?"aes":"js",Po=()=>typeof CompressionStream!="undefined"&&typeof DecompressionStream!="undefined";async function Rn(e,a){let o=new Blob([e]).stream().pipeThrough(a?new CompressionStream("gzip"):new DecompressionStream("gzip"));return new Uint8Array(await new Response(o).arrayBuffer())}var ea=class extends Error{};async function _o(e,a,{modo:o="aes",iteracoes:t=15e4}={}){if(o==="aes"){if(!et())throw new ea("Este navegador n\xE3o tem a prote\xE7\xE3o necess\xE1ria. Abra o site pelo endere\xE7o com https, no Safari ou no Chrome.");return{modo:"aes",k:await gl(e,a,t),iteracoes:t}}return{modo:"js",k:ul(e,a),iteracoes:0}}async function le(e,a,{comprimir:o=!1}={}){let t=new TextEncoder().encode(a),i="a1";o&&Po()&&(t=await Rn(t,!0),i="a2");let s=qo(12);if(e.modo!=="aes")throw new ea("Formato antigo n\xE3o grava mais.");let n=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},e.k,t);return i+"."+Aa.enc(s)+"."+Aa.enc(n)}var se="Este navegador \xE9 antigo demais para abrir a base compactada. Atualize o sistema do celular (iOS 16.4 ou mais novo) ou o Chrome.";async function ce(e,a){let o=String(a).split(".");if(o[0]==="a1"||o[0]==="a2"){if(e.modo!=="aes")throw new ea("formato");let t=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:Aa.dec(o[1])},e.k,Aa.dec(o[2])));if(o[0]==="a2"){if(!Po())throw new ea(se);t=await Rn(t,!1)}return new TextDecoder().decode(t)}if(o[0]==="j1"){if(e.modo!=="js")throw new ea("formato");let t=Aa.dec(o[1]),i=Aa.dec(o[2]),s=Aa.dec(o[3]),n=ot(Gt(e.k,i)).subarray(0,16);for(let h=0;h<16;h++)if(n[h]!==s[h])throw new ea("senha");let d=xl(e.k,t,i.length),g=new Uint8Array(i.length);for(let h=0;h<i.length;h++)g[h]=i[h]^d[h];return new TextDecoder().decode(g)}throw new ea("formato")}var Pn=e=>e&&Number(e.it)||15e4;async function tt(e,a){return _o(e,Aa.dec(a.salt),{modo:On(a.dados),iteracoes:Pn(a)})}async function rt(e,a,o,{comprimir:t=!1}={}){let i={v:2,salt:Aa.enc(a),dados:await le(e,JSON.stringify(o),{comprimir:t})};return e.iteracoes&&e.iteracoes!==15e4&&(i.it=e.iteracoes),i}async function Uo(e,a){let o;try{o=await ce(e,a.dados)}catch(i){throw new ea(i&&i.message===se?se:"senha")}let t;try{t=JSON.parse(o)}catch(i){throw new ea("senha")}if(!t||typeof t!="object"||!Array.isArray(t.lancamentos))throw new ea("senha");return t}var Xt=()=>Aa.enc(qo(32));async function pe(e){return{modo:"aes",k:await crypto.subtle.importKey("raw",Aa.dec(e),"AES-GCM",!1,["encrypt","decrypt"]),iteracoes:0}}var _n=e=>!!e&&On(e.dados)==="aes"&&Pn(e)<6e5;async function Un(e,a){let o=qo(12),t=await crypto.subtle.encrypt({name:"AES-GCM",iv:o},e.k,a);return"a1."+Aa.enc(o)+"."+Aa.enc(new Uint8Array(t))}async function Vn(e,a){let o=String(a).split(".");if(o[0]!=="a1")throw new ea("formato");return new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:Aa.dec(o[1])},e.k,Aa.dec(o[2])))}var it=[3e3,8e3,2e4,45e3,9e4],nt="contas-da-casa:cache-orfao",Yn="contas-da-casa:aparelho",st="contas-da-casa:historico",Gn="contas-da-casa:limpeza-fotos",Xn="contas-da-casa:antigo-visto",de=(e,a)=>`contas-da-casa:arquivo:${e}:${a}`,lt="legado",Jt=864e5,fl=2,hl=.4,bl=.5;function Kt(){let e=O.ler(Yn);return e||(e="a"+ze(),O.gravar(Yn,e)),e}function vl(e,a,o=Date.now()){let t=[];for(let i=1;i<=12;i++){let s=`${a}-${String(i).padStart(2,"0")}`;ao(e,s).forEach(n=>{if(!n.virtual){t.push(n);return}let d={...n,id:`arq-${n.recorrenteId}-${s}`,em:o};delete d.virtual,t.push(d)})}return t}var Hn=e=>Number(String(e.data).slice(0,4));async function Wt(e,a){for(let o of e||[])try{let t=JSON.parse(await ce(await pe(o),a.dados));if(t&&Array.isArray(t.lancamentos))return t}catch(t){}throw new ea("arquivo")}var Fl=(e,a)=>{let o=new Map;return(e||[]).forEach(t=>o.set(t.id,t)),(a||[]).forEach(t=>{let i=o.get(t.id);o.set(t.id,!i||(Number(t.em)||0)>(Number(i.em)||0)?t:i)}),[...o.values()]},Jn=e=>new Set([...e.receitas||[],...e.retratos||[],...Ue(e),...Nr(e),...Mr(e),...Tr(e),...Ir(e)].map(a=>a&&a.id)),ct=class{constructor({obter:a,aplicar:o,aoStatus:t,aoZerar:i,aoOutraSenha:s,aoArquivo:n}){this.obter=a,this.aplicar=d=>{o(d),this.modo==="nuvem"&&d&&d.acesso&&oe(d.acesso)},this.aoStatus=t||(()=>{}),this.aoZerar=i||(()=>{}),this.aoOutraSenha=s||(()=>{}),this.aoArquivo=n||(()=>{}),this.modo="memoria",this.ch=null,this.salt=null,this.pacoteBase=null,this.fonteBase=null,this.gravando=!1,this.deNovo=!1,this.pendente=!1,this.offline=!1,this.recusa=null,this.ilegivel=!1,this.forcar=!1,this.avisoVersaoAte=0,this.gravouV9=!1,this.tentativa=0,this.timerRetry=null,this.timerAgendar=null,this.ultimoSucesso=null,this.tamanho=0,this.memoria={},this.aparelho=null,this.remoto=null,this.remotoCompactado=!1,this.soLeitura=!1,this.versaoNova=!1,this.memoPacote=null,this.cacheDe=null,this.ultimoTexto=null,this.arquivados={},this.arquivoFaltando=!1,this.arquivando=!1,this.arquivoTentadoEm=0,this.arquivosDaCopia=null,this.reforcou=!1,this.fotos=new Map}get saltB64(){return this.salt?Aa.enc(this.salt):null}status(){this.aoStatus({modo:this.modo,offline:this.offline,pendente:this.pendente,recusa:this.recusa,ilegivel:this.ilegivel,versaoAntiga:Date.now()<(this.avisoVersaoAte||0),ultimoSucesso:this.ultimoSucesso,uso:this.tamanho/Ie,soLeitura:this.soLeitura,versaoNova:this.versaoNova,compactado:this.remotoCompactado,navegadorAntigo:!!this.navegadorAntigo,arquivoFaltando:this.arquivoFaltando})}antigoPorPerto(){let a=Number(O.ler(Xn))||0;return Date.now()-a<30*Jt}deveCompactar(a){if(!Po()||this.antigoPorPerto())return!1;if(this.remotoCompactado||this.tamanho/Ie>hl)return!0;let o=Date.now()-120*Jt;return Object.values(a&&a.aparelhos||{}).filter(i=>i&&Number(i.formato)>=10&&Number(i.em)>o).length>=fl}async pacoteDe(a,o=this.ch,t=this.salt){let i=this.deveCompactar(a),s=this.memoPacote;if(s&&s.cofre===a&&s.comprimir===i&&s.ch===o)return s.pacote;let n=await rt(o,t,a,{comprimir:i});return this.memoPacote={cofre:a,comprimir:i,ch:o,pacote:n},n}conferirVersao(a){let o=this.soLeitura;this.soLeitura=(Number(a.minLeitor)||0)>jo,this.versaoNova=(Number(a.versao)||0)>jo,o!==this.soLeitura&&this.status()}registrar(a){this.aparelho||(this.aparelho=Kt());let o=(a.aparelhos||{})[this.aparelho],t=Po()?jo:9;return o&&Number(o.formato)===t&&Date.now()-Number(o.em)<7*Jt?a:{...a,aparelhos:{...a.aparelhos||{},[this.aparelho]:{formato:t,em:Date.now()}}}}temCopia(){try{let a=O.lerJSON(So);if(a&&a.pacote&&a.pacote.dados)return!0;let o=O.lerJSON(no);return!!(o&&o.dados)}catch(a){return!1}}async iniciar(){Qr()?this.modo="nuvem":O.ok()?this.modo="navegador":this.modo="memoria";let a=O.lerJSON(So),o=a&&a.pacote&&a.pacote.dados?a.pacote:null,t=O.lerJSON(no),i=t&&t.dados?t:null;if(this.modo==="nuvem"){let s;try{s=await Qa()}catch(n){return this.offline=!(n instanceof Ya),this.recusa=n instanceof Ya?n.status:null,this.status(),o?(this.pacoteBase=o,this.fonteBase="cache",{estado:"travado",offline:!0}):{estado:"semConexao",offline:!0}}if(this.offline=!1,s.existe){let n=null;try{n=JSON.parse(s.texto)}catch(d){n=null}return this.tamanho=(s.texto||"").length,n&&n.dados?(this.pacoteBase=n,this.fonteBase="nuvem",this.pacoteBaseEm=s.atualizadoEm||null,{estado:"travado"}):o?(this.pacoteBase=o,this.fonteBase="cache",{estado:"travado"}):i?(this.pacoteBase=i,this.fonteBase="local",{estado:"travado"}):{estado:"novo"}}return o?(this.pacoteBase=o,this.fonteBase="cache",{estado:"travado"}):i?(this.pacoteBase=i,this.fonteBase="local",{estado:"travado"}):{estado:"novo"}}return this.modo==="navegador"&&i?(this.pacoteBase=i,this.fonteBase="local",{estado:"travado"}):{estado:"novo"}}usarCopia(a){this.pacoteBase=a,this.fonteBase="copia",this.arquivosDaCopia=a&&a.arquivos||null}guardarOrfa(a){!a||!a.pacote||O.lerJSON(nt)||O.gravar(nt,a)}orfa(){return O.lerJSON(nt)}descartarOrfa(){O.apagar(nt)}async entrar(a,{memoria:o}={}){let t=this.pacoteBase;if(!t)throw new ea("sem base");let i=await tt(a,t),s=No(await Uo(i,t)),n=this.fonteBase==="nuvem"&&!s.versao;s.base||(s={...s,base:lt}),this.ch=i,this.salt=Aa.dec(t.salt),this.pendente=!1,this.memoPacote=null,this.remoto=null,this.remotoCompactado=String(t.dados).startsWith("a2."),this.arquivados={},this.conferirVersao(s),this.fonteBase==="nuvem"&&this.pacoteBaseEm&&(this.remoto={cofre:s,atualizadoEm:this.pacoteBaseEm});let d=!!(o&&o.lancamentos),g=O.lerJSON(So);if(g&&g.pacote&&g.pacote.dados){let f=null;try{let l=g.pacote.salt===t.salt?i:await tt(a,g.pacote);f=No(await Uo(l,g.pacote))}catch(l){f=null}if(f)if((f.base||lt)===s.base){n&&f.versao&&(this.avisoVersaoAte=Date.now()+30*60*1e3);let k=Ga(s,f);lo(k,s)||(this.pendente=!0),s=k}else g.pendente&&!d&&this.guardarOrfa(g);else g.pendente&&!d&&this.guardarOrfa(g)}if(o&&o.lancamentos&&(o.base||lt)===s.base){let f=Ga(o,s);lo(f,s)||(this.pendente=!0),s=f}(this.fonteBase==="local"||this.fonteBase==="copia"||this.fonteBase==="cache")&&(this.pendente=!0),et()&&(i.modo==="js"||_n(t))&&(this.anterior={salt:t.salt,ch:i},this.salt=qo(16),this.ch=await _o(a,this.salt,{iteracoes:6e5}),this.pendente=!0,this.reforcou=!0);let h=this.registrar(s);return h!==s&&(s=h,this.pendente=!0),this.lembrarNomes(s),this.modo==="nuvem"&&(s.acesso||(s={...s,acesso:De()},this.pendente=!0),oe(s.acesso)),s}async criar(a){if(!et())throw new ea("Este navegador n\xE3o tem a prote\xE7\xE3o necess\xE1ria. Abra o site pelo endere\xE7o com https, no Safari ou no Chrome.");let o=qo(16),t=await _o(a,o,{iteracoes:6e5});this.aparelho=Kt();let i=this.registrar({...ti(),base:ze(),versao:jo,...this.modo==="nuvem"?{acesso:De()}:{}}),s=await rt(t,o,i),n=JSON.stringify(s);if(this.modo==="nuvem"){let d;await oe(i.acesso);try{let g=await Qa(),h={existe:!1};if(g.existe){let f=null;try{f=JSON.parse(g.texto)}catch(l){f=null}if(f&&f.dados)throw new ea("O outro celular acabou de criar a base. Feche e abra o app, e entre com a senha dele.");h={atualizadoEm:g.atualizadoEm}}d=await so(n,h)}catch(g){throw g instanceof ea?g:g instanceof Ya&&(g.status===403||g.status===401)?new ea("A base est\xE1 protegida e este celular ainda n\xE3o tem acesso a ela. Crie a base num celular que j\xE1 usava o app antes de apagar; depois entre aqui com a senha nova."):g instanceof Ya?new ea(`A nuvem recusou a grava\xE7\xE3o (c\xF3digo ${g.status}). Me mande esta mensagem.`):new ea("Sem conex\xE3o. Para criar a base, o celular precisa estar na internet.")}if(d.conflito)throw new ea("O outro celular acabou de criar a base. Feche e abra o app, e entre com a senha dele.");this.ultimoSucesso=Date.now(),this.remoto=d.atualizadoEm?{cofre:i,atualizadoEm:d.atualizadoEm}:null,this.ultimoTexto=n}else O.gravar(no,n);return this.ch=t,this.salt=o,this.tamanho=n.length,this.fonteBase="nuvem",this.memoPacote={cofre:i,comprimir:!1,ch:t,pacote:s},this.salvarCache(s,!1),this.cacheDe=i,this.arquivados={},this.lembrarNomes(i),this.status(),i}bloquear(){this.sessaoFotos=(this.sessaoFotos||0)+1,this.ch=null,this.memoPacote=null,this.fotos=new Map,clearTimeout(this.timerRetry),clearTimeout(this.timerAgendar)}lembrarNomes(a){a&&Array.isArray(a.pessoas)&&O.gravar($t,a.pessoas)}salvarCache(a,o){O.gravar(So,{pacote:a,pendente:!!o,em:Date.now()})}async guardarLocal(){if(!this.ch)return;let a=this.obter();if(this.cacheDe===a)return;let o=await this.pacoteDe(a);this.obter()===a&&(this.modo==="nuvem"?(this.salvarCache(o,!0),this.pendente=!0,this.cacheDe=a):this.modo==="navegador"&&O.gravar(no,JSON.stringify(o)))}agendar(a=250){clearTimeout(this.timerAgendar),this.timerAgendar=setTimeout(()=>this.gravar(),a)}marcarFalha(a){a instanceof Ya?(this.recusa=a.status,this.offline=!1):(this.offline=!0,this.recusa=null),this.status(),clearTimeout(this.timerRetry);let o=it[Math.min(this.tentativa,it.length-1)];this.tentativa++,this.timerRetry=setTimeout(()=>this.gravar(),o)}async lerRemoto({leve:a=!1}={}){if(a&&this.remoto&&this.remoto.atualizadoEm){let n=await Qa(void 0,{soVersao:!0});if(n.existe&&n.atualizadoEm===this.remoto.atualizadoEm)return{tipo:"igual",atualizadoEm:n.atualizadoEm}}let o=await Qa(),t=o.atualizadoEm||null;if(this.remoto=null,!o.existe)return{tipo:"vazio",atualizadoEm:t};this.tamanho=(o.texto||"").length;let i=null;try{i=JSON.parse(o.texto)}catch(n){return{tipo:"ilegivel",atualizadoEm:t}}if(i&&i.zerado){if(i.prova&&i.salt===this.saltB64)try{if(await ce(this.ch,i.prova)==="zerado:"+i.zerado)return{tipo:"zerado",atualizadoEm:t}}catch(n){}return{tipo:"ilegivel",atualizadoEm:t}}if(!i||!i.dados||!i.salt)return{tipo:"ilegivel",atualizadoEm:t};let s=i.salt===this.saltB64?this.ch:this.anterior&&i.salt===this.anterior.salt?this.anterior.ch:null;if(!s)return{tipo:"outraSenha",atualizadoEm:t};try{let n=No(await Uo(s,i)),d=this.aparelho&&n.aparelhos&&n.aparelhos[this.aparelho];return this.registroEnviado&&(!d||Number(d.em)<this.registroEnviado)&&O.gravar(Xn,String(Date.now())),!n.versao&&this.gravouV9&&(this.avisoVersaoAte=Date.now()+30*60*1e3),n.base||(n.base=lt),this.remotoCompactado=String(i.dados).startsWith("a2."),this.conferirVersao(n),s===this.ch&&t&&(this.remoto={cofre:n,atualizadoEm:t}),{tipo:"ok",cofre:n,atualizadoEm:t}}catch(n){return n&&n.message===se?{tipo:"navegadorAntigo",atualizadoEm:t}:{tipo:"ilegivel",atualizadoEm:t}}}forcarGravacao(){this.forcar=!0,this.gravar()}tentarAgora(){return Wr(),this.gravar()}async gravar(){if(!this.ch)return;if(this.gravando){this.deNovo=!0;return}this.gravando=!0,clearTimeout(this.timerRetry);let a=!1;try{do{this.deNovo=!1;let o=this.obter();if(this.modo!=="nuvem"){let l=await this.pacoteDe(o);this.modo==="navegador"?O.gravar(no,JSON.stringify(l)):this.memoria[no]=l,this.pendente=!1,this.ultimoSucesso=Date.now();continue}if(this.cacheDe!==o){let l=await this.pacoteDe(o);this.obter()===o&&(this.salvarCache(l,!0),this.cacheDe=o)}if(this.pendente=!0,this.status(),this.soLeitura)return;let t=o,i=!1,s=!!(this.remoto&&this.remoto.atualizadoEm&&!this.forcar);for(let l=0;l<6&&!i;l++){let k;if(s)k={tipo:"ok",cofre:this.remoto.cofre,atualizadoEm:this.remoto.atualizadoEm},s=!1;else try{k=await this.lerRemoto()}catch(ia){this.marcarFalha(ia);return}let S=null,V={atualizadoEm:k.atualizadoEm};if(k.tipo==="zerado"){if(this.fonteBase!=="copia"){this.aoZerar();return}}else if(k.tipo==="outraSenha"){this.aoOutraSenha();return}else if(k.tipo==="navegadorAntigo"){this.navegadorAntigo=!0,this.status();return}else if(k.tipo==="ilegivel"){if(!this.forcar){this.ilegivel=!0,this.status();return}}else k.tipo==="vazio"?V={existe:!1}:S=k.cofre;if(this.soLeitura){this.status();return}if(t=Ga(this.obter(),S),S&&To(t,S)){i=!0;break}let u=await this.pacoteDe(t),b=JSON.stringify(u),N;try{N=await so(b,V)}catch(ia){this.marcarFalha(ia);return}if(N.conflito){this.remoto=null,l>0&&await new Promise(ia=>setTimeout(ia,150+Math.random()*300));continue}this.tamanho=b.length,this.ultimoTexto=b,this.remotoCompactado=String(u.dados).startsWith("a2."),this.remoto=N.atualizadoEm?{cofre:t,atualizadoEm:N.atualizadoEm}:null;let A=this.aparelho&&t.aparelhos&&t.aparelhos[this.aparelho];A&&(this.registroEnviado=Math.max(this.registroEnviado||0,Number(A.em)||0)),this.gravouV9=!0,i=!0,a=!0}if(!i){this.offline=!1,this.status(),clearTimeout(this.timerRetry);let l=it[Math.min(this.tentativa,it.length-1)];this.tentativa++,this.timerRetry=setTimeout(()=>this.gravar(),l);return}this.forcar=!1,this.ilegivel=!1,this.offline=!1,this.recusa=null,this.tentativa=0,this.ultimoSucesso=Date.now(),this.limparFotosSemFicha(),this.fonteBase="nuvem",this.anterior=null;let n=this.obter(),d=Ga(n,t);lo(d,n)||this.aplicar(d);let g=To(d,t),h=await this.pacoteDe(g?t:d),f=this.obter()!==d&&!To(this.obter(),d);this.salvarCache(h,!g||f),this.cacheDe=g&&!f?this.obter():null,this.pendente=!g||f,this.pendente&&(this.deNovo=!0)}while(this.deNovo)}catch(o){typeof console!="undefined"&&console.error("Falha ao gravar",o),this.marcarFalha(o)}finally{this.gravando=!1,this.status()}a&&this.copiaDoDia().catch(()=>{}),!this.pendente&&this.ch&&this.depoisDeGravar()}depoisDeGravar(){(async()=>{await this.carregarArquivos(),await this.dobrarNoArquivo(),await this.arquivarSePreciso()})().catch(()=>{})}async sincronizar(){if(!this.ch||this.modo!=="nuvem"||this.gravando)return;if(this.pendente&&!this.soLeitura||this.ilegivel){this.gravar();return}let a;try{a=await this.lerRemoto({leve:!0})}catch(i){i instanceof Ya?this.recusa=i.status:this.offline=!0,this.status();return}if(this.offline=!1,this.recusa=null,this.ultimoSucesso=Date.now(),a.tipo==="igual"){this.arquivoFaltando&&this.depoisDeGravar(),this.status();return}if(a.tipo==="navegadorAntigo"){this.navegadorAntigo=!0,this.status();return}if(a.tipo==="zerado"){this.fonteBase!=="copia"?this.aoZerar():this.gravar();return}if(a.tipo==="outraSenha"){this.aoOutraSenha();return}if(a.tipo!=="ok"){this.gravar();return}let o=this.obter(),t=Ga(o,a.cofre);lo(t,o)||this.aplicar(t),To(t,a.cofre)?(this.obter()===t||lo(this.obter(),t))&&(this.salvarCache(await this.pacoteDe(t),!1),this.cacheDe=t):this.soLeitura||this.gravar(),this.depoisDeGravar(),this.status()}async copiaDoDia(){if(this.modo!=="nuvem"||!this.ultimoTexto)return;let a=this.obter(),o=za();this.aparelho||(this.aparelho=Kt());let t=`${o}|${a.base}`,i=O.ler(st)||"";if(!(i===t||i===t+"|falhou"))try{let s=await so(this.ultimoTexto,{existe:!1},Zr(o,a.base,this.aparelho));return O.gravar(st,t),s}catch(s){s instanceof Ya&&O.gravar(st,t+"|falhou")}}async diasComCopia(){let a=this.obter().base,o=await te("historico"),t=new Map;return o.forEach(({nome:i,em:s})=>{let n=i.slice(0,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(n)||!i.startsWith(`${n}-${a}-`))return;let d=t.get(n);(!d||s>d.em)&&t.set(n,{nome:i,em:s})}),this.copiasPorDia=t,[...t.keys()].sort().reverse()}async copiaDe(a){let o=this.copiasPorDia&&this.copiasPorDia.get(a);if(!o)throw new ea("Essa c\xF3pia n\xE3o existe mais.");let t=await Qa(`historico/${encodeURIComponent(o.nome)}`);if(!t.existe)throw new ea("Essa c\xF3pia n\xE3o existe mais.");return JSON.parse(t.texto)}async carregarArquivos(){let a=this.obter(),o=a.arquivo&&a.arquivo.anos||[],t=a.arquivo&&a.arquivo.chaves||[],i=o.filter(d=>!this.arquivados[d]);if(!i.length){this.arquivoFaltando&&(this.arquivoFaltando=!1,this.status());return}if(this.carregandoArquivos)return;this.carregandoArquivos=!0;let s=!1,n=!1;try{for(let d of i){let g=Be(a.base,d),h=null;if(this.modo==="nuvem")try{let f=await Qa(g);f.existe&&(h=JSON.parse(f.texto))}catch(f){}if(h||(h=O.lerJSON(de(a.base,d))),!h&&this.arquivosDaCopia&&this.arquivosDaCopia[d]){h=this.arquivosDaCopia[d];try{await so(JSON.stringify(h),{existe:!1},g)}catch(f){}}if(!h){n=!0;continue}try{let f=await Wt(t,h);this.arquivados[d]=f.lancamentos.map(l=>({...l,arquivado:!0})),O.gravar(de(a.base,d),h),s=!0}catch(f){n=!0}}}finally{this.carregandoArquivos=!1}this.arquivoFaltando=n,s&&this.aoArquivo(this.listaArquivada()),this.status()}listaArquivada(){return Object.keys(this.arquivados).sort().flatMap(a=>this.arquivados[a])}async gravarArquivo(a,o,t){let i=a.arquivo&&a.arquivo.chaves||[];if(!i.length)return null;let s=new Set(a.excluidos||[]),n=Be(a.base,o);for(let d=0;d<4;d++){let g=await Qa(n),h=t,f={existe:!1};if(g.existe){let u=await Wt(i,JSON.parse(g.texto));h=Fl(u.lancamentos,t),f={atualizadoEm:g.atualizadoEm}}h=h.filter(u=>!s.has(u.id)).map(u=>{let b={...u};return delete b.arquivado,b});let l={tipo:"arquivo",base:a.base,ano:o,lancamentos:h},k=await pe(i[0]),S={v:2,arq:1,ano:o,dados:await le(k,JSON.stringify(l),{comprimir:Po()})};if(!(await so(JSON.stringify(S),f,n)).conflito)return O.gravar(de(a.base,o),S),h}return null}tirarDaBase(a,o){let t=this.obter(),i={chaves:[],anos:[],...t.arquivo||{}},s={...i.itens||{}},n=new Set(t.lancamentos.map(h=>h.id));o.forEach(h=>{if(n.has(h.id)){let f=Number(h.em)||0;(!(h.id in s)||f>s[h.id])&&(s[h.id]=f)}});let d={...i,itens:s},g=t.lancamentos.filter(h=>!ri(d,h));return this.arquivados[a]=o.map(h=>({...h,arquivado:!0})),{agora:t,lancamentos:g,arquivo:d}}async dobrarNoArquivo(){if(this.arquivando||this.soLeitura||this.modo!=="nuvem"||!this.ch)return;let a=this.obter(),o=new Set(a.arquivo&&a.arquivo.anos||[]);if(!o.size)return;let t={};a.lancamentos.forEach(n=>{let d=Hn(n);o.has(d)&&(t[d]=t[d]||[]).push(n)});let i=Object.keys(t).map(Number);if(!i.length)return;this.arquivando=!0;let s=!1;try{for(let n of i){let d=await this.gravarArquivo(a,n,t[n]);if(!d)continue;let{agora:g,lancamentos:h,arquivo:f}=this.tirarDaBase(n,d);this.aplicar({...g,lancamentos:h,arquivo:f}),s=!0}s&&(this.aoArquivo(this.listaArquivada()),this.cacheDe=null)}finally{this.arquivando=!1}s&&(await this.guardarLocal(),this.gravar())}async arquivarSePreciso(){if(this.arquivando||this.soLeitura||this.modo!=="nuvem"||!this.ch||!this.remotoCompactado||this.antigoPorPerto())return;let a=typeof window!="undefined"&&window.__CASITA_LIMIAR_ARQUIVO__!=null?window.__CASITA_LIMIAR_ARQUIVO__:bl;if(this.tamanho/Ie<a||Date.now()-this.arquivoTentadoEm<10*60*1e3)return;let o=new Date().getFullYear()-2,t=[...new Set(this.obter().lancamentos.map(Hn))].filter(s=>s>1999&&s<=o).sort((s,n)=>s-n);if(!t.length)return;let i=t[0];this.arquivando=!0,this.arquivoTentadoEm=Date.now();try{let s=this.obter();if(!s.arquivo||!(s.arquivo.chaves||[]).length){if(this.aplicar({...s,arquivo:{chaves:[Xt()],anos:s.arquivo&&s.arquivo.anos||[],itens:s.arquivo&&s.arquivo.itens||{}}}),this.arquivando=!1,await this.guardarLocal(),await this.gravar(),this.pendente)return;this.arquivando=!0,s=this.obter()}let n=await this.gravarArquivo(s,i,vl(s,i));if(!n)return;let{agora:d,lancamentos:g,arquivo:h}=this.tirarDaBase(i,n);this.aplicar({...d,lancamentos:g,arquivo:{...h,anos:[...new Set([...h.anos||[],i])].sort((f,l)=>f-l)},minLeitor:Math.max(Number(d.minLeitor)||0,10)}),this.aoArquivo(this.listaArquivada()),this.arquivando=!1,await this.guardarLocal(),this.gravar()}finally{this.arquivando=!1}}async conferirAgora(a=7e3){if(this.modo!=="nuvem"||!this.ch)return{ok:!0,local:!0};let o=Date.now()+a,t=async()=>{for(;this.gravando&&Date.now()<o;)await new Promise(s=>setTimeout(s,120))};await t();let i;try{i=await this.lerRemoto()}catch(s){return s instanceof Ya?(this.recusa=s.status,this.offline=!1):this.offline=!0,this.status(),{ok:!1,offline:!(s instanceof Ya)}}if(this.offline=!1,this.recusa=null,this.ultimoSucesso=Date.now(),i.tipo==="ok"||i.tipo==="vazio"){let s=this.obter(),n=i.tipo==="ok"?Ga(s,i.cofre):s;if(lo(n,s)||this.aplicar(n),(i.tipo==="vazio"||!To(n,i.cofre)||this.pendente)&&!this.soLeitura){try{await this.gravar()}catch(d){}await t()}return this.status(),{ok:!0}}return this.sincronizar(),{ok:!1,offline:!1,problema:i.tipo}}async guardarFoto(a,o){if(this.soLeitura)return{ok:!1,texto:"Atualize o app antes de guardar fotos."};let t=this.obter();if(!t.base)return{ok:!1,texto:"A base ainda n\xE3o est\xE1 pronta."};let i="rc"+ze(),s=Xt(),n=await pe(s),d={v:2,foto:1,tipo:o,dados:await Un(n,a)},g=JSON.stringify(d);if(g.length>103e4)return{ok:!1,texto:"Arquivo grande demais, mesmo reduzido."};if(this.modo==="nuvem")try{if(!(await so(g,{existe:!1},ee(t.base,i))).ok)return{ok:!1,texto:"A nuvem n\xE3o aceitou a foto agora. Tente de novo."}}catch(h){return{ok:!1,texto:h instanceof Ya?"A nuvem recusou a foto.":"Sem conex\xE3o. Guardar foto precisa de internet."}}else{if(this.modo==="navegador")return{ok:!1,texto:"Guardar fotos precisa da nuvem configurada."};this.memoria["foto:"+i]=g}return this.fotos.set(i,{bytes:a,tipo:o}),{ok:!0,ficha:{id:i,tipo:o,chave:s,tam:a.length}}}async abrirFoto(a){if(this.fotos.has(a.id))return this.fotos.get(a.id);let o=this.sessaoFotos||0,t=this.obter(),i=null;if(this.modo==="nuvem"){let g=await Qa(ee(t.base,a.id));if(!g.existe)throw new Error("sumiu");i=g.texto}else this.modo==="navegador"?i=O.ler(`contas-da-casa:foto:${t.base}:${a.id}`):i=this.memoria["foto:"+a.id];if(!i)throw new Error("sumiu");let s=JSON.parse(i),d={bytes:await Vn(await pe(a.chave),s.dados),tipo:a.tipo||s.tipo||"imagem"};if((this.sessaoFotos||0)!==o)throw new Error("trancado");return this.fotos.set(a.id,d),this.fotos.size>6&&this.fotos.delete(this.fotos.keys().next().value),d}fotoEmUso(a){let o=this.obter();return!!(o&&Jn(o).has(a))}async apagarFoto(a){let o=this.obter();if(this.fotos.delete(a.id),this.modo==="nuvem")try{return await $e(ee(o.base,a.id))}catch(t){return!1}return this.modo==="navegador"&&O.apagar(`contas-da-casa:foto:${o.base}:${a.id}`),!0}async limparFotosSemFicha(){if(this.modo!=="nuvem"||this.soLeitura||this.limpandoFotos)return;let a=this.obter();if(!a||!a.base||!Array.isArray(a.receitas))return;let o=za();if(O.ler(Gn)!==o){this.limpandoFotos=!0;try{O.gravar(Gn,o);let t=`contas-da-casa:foto-${a.base}-`,i=Jn(a),s=await te("cofre",{maximo:1e5}),n=Date.now()-864e5;for(let{nome:d,em:g}of s){let h=d.slice(t.length);if(!d.startsWith(t)||i.has(h)||!g||!(Date.parse(g)<n))continue;let f=parseInt(h.slice(2,10),36);if(!(!(f>0)||f>n))try{await $e(`cofre/${encodeURIComponent(d)}`)}catch(l){}}}catch(t){}finally{this.limpandoFotos=!1}}}async lancamentosDoArquivoDaCopia(a,o){let t=[],i=o.arquivo&&o.arquivo.chaves||[];for(let s of Object.values(a&&a.arquivos||{}))try{t.push(...(await Wt(i,s)).lancamentos)}catch(n){}return t}async conferirSenha(a){try{let o=await _o(a,this.salt,{modo:this.ch.modo,iteracoes:this.ch.iteracoes}),t=await le(this.ch,"teste");return await ce(o,t)==="teste"}catch(o){return!1}}async trocarSenha(a,o){if(!await this.conferirSenha(a))return{ok:!1,texto:"A senha atual n\xE3o confere."};if(this.soLeitura)return{ok:!1,texto:"Atualize o app antes de trocar a senha."};let t=qo(16),i=await _o(o,t,{iteracoes:6e5});if(this.modo==="nuvem"){for(let n=0;n<5;n++){let d;try{d=await this.lerRemoto()}catch(S){return{ok:!1,texto:"Sem conex\xE3o. Trocar a senha precisa de internet."}}if(d.tipo==="outraSenha")return{ok:!1,texto:"A senha j\xE1 foi trocada no outro aparelho."};if(d.tipo==="zerado")return this.aoZerar(),{ok:!1,texto:"A base foi apagada no outro aparelho."};if(d.tipo==="ilegivel")return{ok:!1,texto:"A nuvem tem dados que este celular n\xE3o consegue ler. Resolva o aviso no topo antes de trocar a senha."};if(d.tipo==="ok"&&(Number(d.cofre.minLeitor)||0)>jo)return this.soLeitura=!0,this.status(),{ok:!1,texto:"Atualize o app antes de trocar a senha."};let g={...Ga(this.obter(),d.tipo==="ok"?d.cofre:null),...this.modo==="nuvem"?{acesso:De(),acessoEm:Date.now()}:{}},h=await this.pacoteDe(g,i,t),f=JSON.stringify(h),l;try{l=await so(f,d.tipo==="vazio"?{existe:!1}:{atualizadoEm:d.atualizadoEm})}catch(S){return{ok:!1,texto:"Sem conex\xE3o. Trocar a senha precisa de internet."}}if(l.conflito)continue;this.ch=i,this.salt=t,this.ultimoTexto=f,oe(g.acesso),this.remoto=l.atualizadoEm?{cofre:g,atualizadoEm:l.atualizadoEm}:null;let k=Ga(this.obter(),g);return this.aplicar(k),this.salvarCache(await this.pacoteDe(k),!lo(k,g)),this.cacheDe=null,this.pendente=!lo(k,g),this.pendente&&this.agendar(),{ok:!0,texto:"Senha trocada. Avise a outra pessoa: o outro celular vai pedir a senha nova."}}return{ok:!1,texto:"N\xE3o deu para trocar agora. Tente de novo em instantes."}}let s=await rt(i,t,this.obter());return this.modo==="navegador"&&O.gravar(no,JSON.stringify(s)),this.ch=i,this.salt=t,this.memoPacote=null,{ok:!0,texto:"Senha trocada."}}async pacoteParaCopia(){try{await this.carregarArquivos()}catch(s){}let a=this.obter(),o={...await this.pacoteDe(a)},t=a.arquivo&&a.arquivo.anos||[],i=[];if(t.length){let s={};t.forEach(n=>{let d=O.lerJSON(de(a.base,n));d?s[n]=d:i.push(n)}),o.arquivos=s}return{pacote:o,faltando:i}}async abrirCopia(a,o){if(a.arquivos&&(this.arquivosDaCopia={...this.arquivosDaCopia||{},...a.arquivos}),a.salt===this.saltB64&&!o)return No(await Uo(this.ch,a));if(!o)throw new ea("precisaSenha");let t=await tt(o,a);return No(await Uo(t,a))}async zerar(){let a=Date.now(),o=this.obter(),t=0;if(this.modo==="nuvem"){let i={v:2,zerado:a,salt:this.saltB64,prova:await le(this.ch,"zerado:"+a)};try{let s=await Qa();if((await so(JSON.stringify(i),s.existe?{atualizadoEm:s.atualizadoEm}:{existe:!1})).conflito)return{ok:!1,texto:"O outro celular gravou agora mesmo. Tente apagar de novo."}}catch(s){return{ok:!1,texto:"Sem conex\xE3o. Apagar tudo precisa de internet, para o outro celular saber."}}t=await this.apagarCopiasDaNuvem(o)}else O.apagar(no);return o&&o.base&&(o.arquivo&&o.arquivo.anos||[]).forEach(i=>O.apagar(de(o.base,i))),o&&o.base&&[...o.receitas||[],...o.retratos||[],...Ue(o)].forEach(i=>O.apagar(`contas-da-casa:foto:${o.base}:${i.id}`)),O.apagar(st),this.esquecer(),{ok:!0,naoApagadas:t}}async apagarCopiasDaNuvem(a){if(!a||!a.base)return 0;let o=(a.arquivo&&a.arquivo.anos||[]).map(i=>Be(a.base,i));[...a.receitas||[],...a.retratos||[],...Ue(a)].forEach(i=>o.push(ee(a.base,i.id)));try{(await te("cofre",{maximo:1e5})).forEach(({nome:s})=>{s.startsWith(`contas-da-casa:foto-${a.base}-`)&&o.push(`cofre/${encodeURIComponent(s)}`)})}catch(i){}try{(await te("historico",{maximo:1e5})).forEach(({nome:s})=>{s.slice(10).startsWith(`-${a.base}-`)&&o.push(`historico/${encodeURIComponent(s)}`)})}catch(i){return o.length+1}let t=0;for(let i of[...new Set(o)])try{await $e(i)||t++}catch(s){t++}return t}esquecer(){O.apagar(So),O.apagar(ai),O.apagar($t),this.ch=null,this.salt=null,this.pendente=!1,this.pacoteBase=null,this.ilegivel=!1,this.forcar=!1,this.remoto=null,this.memoPacote=null,this.cacheDe=null,this.ultimoTexto=null,this.arquivados={},this.arquivosDaCopia=null,this.fotos=new Map,clearTimeout(this.timerRetry)}};var wl=(()=>{let e=new Uint32Array(256);for(let a=0;a<256;a++){let o=a;for(let t=0;t<8;t++)o=o&1?3988292384^o>>>1:o>>>1;e[a]=o>>>0}return e})();function yl(e){let a=4294967295;for(let o=0;o<e.length;o++)a=wl[(a^e[o])&255]^a>>>8;return(a^4294967295)>>>0}function kl(e){let a=new TextEncoder,o=[],t=[],i=0;e.forEach(({nome:f,texto:l})=>{let k=a.encode(f),S=a.encode(l),V=yl(S),u=new DataView(new ArrayBuffer(30));u.setUint32(0,67324752,!0),u.setUint16(4,20,!0),u.setUint16(6,2048,!0),u.setUint16(8,0,!0),u.setUint16(10,0,!0),u.setUint16(12,33,!0),u.setUint32(14,V,!0),u.setUint32(18,S.length,!0),u.setUint32(22,S.length,!0),u.setUint16(26,k.length,!0),u.setUint16(28,0,!0),o.push(new Uint8Array(u.buffer),k,S);let b=new DataView(new ArrayBuffer(46));b.setUint32(0,33639248,!0),b.setUint16(4,20,!0),b.setUint16(6,20,!0),b.setUint16(8,2048,!0),b.setUint16(10,0,!0),b.setUint16(12,0,!0),b.setUint16(14,33,!0),b.setUint32(16,V,!0),b.setUint32(20,S.length,!0),b.setUint32(24,S.length,!0),b.setUint16(28,k.length,!0),b.setUint16(30,0,!0),b.setUint16(32,0,!0),b.setUint16(34,0,!0),b.setUint16(36,0,!0),b.setUint32(38,0,!0),b.setUint32(42,i,!0),t.push(new Uint8Array(b.buffer),k),i+=30+k.length+S.length});let s=t.reduce((f,l)=>f+l.length,0),n=new DataView(new ArrayBuffer(22));n.setUint32(0,101010256,!0),n.setUint16(8,e.length,!0),n.setUint16(10,e.length,!0),n.setUint32(12,s,!0),n.setUint32(16,i,!0);let d=[...o,...t,new Uint8Array(n.buffer)],g=new Uint8Array(d.reduce((f,l)=>f+l.length,0)),h=0;return d.forEach(f=>{g.set(f,h),h+=f.length}),g}var Zn=e=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,""),Kn=e=>{let a="",o=e+1;for(;o>0;){let t=(o-1)%26;a=String.fromCharCode(65+t)+a,o=Math.floor((o-1)/26)}return a},Wn={texto:0,cabecalho:1,moeda:2,numero:0,pct:3};function ql({colunas:e,linhas:a}){let o=e.map((n,d)=>`<col min="${d+1}" max="${d+1}" width="${n.largura||14}" customWidth="1"/>`).join(""),t=(n,d,g,h)=>n==null||n===""?"":typeof n=="number"&&Number.isFinite(n)?`<c r="${g}" s="${h}"><v>${n}</v></c>`:`<c r="${g}" t="inlineStr" s="${h}"><is><t xml:space="preserve">${Zn(n)}</t></is></c>`,i=`<row r="1">${e.map((n,d)=>t(n.titulo,"texto",Kn(d)+"1",Wn.cabecalho)).join("")}</row>`,s=a.map((n,d)=>`<row r="${d+2}">${n.map((g,h)=>t(g,e[h].tipo,Kn(h)+(d+2),Wn[e[h].tipo||"texto"]||0)).join("")}</row>`).join("");return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>${o}</cols><sheetData>${i}${s}</sheetData></worksheet>`}var zl=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="&quot;R$&quot;\\ #,##0.00"/></numFmts><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="4"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/><xf numFmtId="9" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`;function Qn(e){let a=[{nome:"[Content_Types].xml",texto:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${e.map((o,t)=>`<Override PartName="/xl/worksheets/sheet${t+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`},{nome:"_rels/.rels",texto:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`},{nome:"xl/workbook.xml",texto:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${e.map((o,t)=>`<sheet name="${Zn(o.nome).slice(0,31)}" sheetId="${t+1}" r:id="rId${t+1}"/>`).join("")}</sheets></workbook>`},{nome:"xl/_rels/workbook.xml.rels",texto:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${e.map((o,t)=>`<Relationship Id="rId${t+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${t+1}.xml"/>`).join("")}<Relationship Id="rId${e.length+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`},{nome:"xl/styles.xml",texto:zl},...e.map((o,t)=>({nome:`xl/worksheets/sheet${t+1}.xml`,texto:ql(o)}))];return kl(a)}function as(e,a){let o=new Set(e.lancamentos.map(u=>Z(u.data)));if(e.fixas.length){let u=e.fixas.map(A=>A.desde.slice(0,7)).sort()[0],b=[...o,fo()].sort().pop(),N=0;for(;u<=b&&N++<600;)o.add(u),u=Sr(u)}let t=[...o].sort().flatMap(u=>ao(e,u)).sort((u,b)=>u.data.localeCompare(b.data)),i=u=>u.virtual?"Sim":u.recorrenteId?"Sim, valor alterado no m\xEAs":"N\xE3o",s=u=>u.compra?li(u).replace(/^./,b=>b.toUpperCase()):gi(u)==="fixo"?"Fixo":"\xC0 vista",n={nome:"Lan\xE7amentos",colunas:[{titulo:"Data",largura:12},{titulo:"M\xEAs",largura:9},{titulo:"Tipo",largura:9},{titulo:"Categoria",largura:18},{titulo:"Pessoa",largura:12},{titulo:"Entrada",largura:13,tipo:"moeda"},{titulo:"Sa\xEDda",largura:13,tipo:"moeda"},{titulo:"Forma",largura:16},{titulo:"Total da compra",largura:15,tipo:"moeda"},{titulo:"Recorrente",largura:24},{titulo:"Observa\xE7\xE3o",largura:34}],linhas:t.map(u=>[ae(u.data),Z(u.data),u.tipo==="gasto"?"Gasto":"Receita",re(a,u).nome,u.quem,u.tipo==="receita"?u.valor/100:null,u.tipo==="gasto"?u.valor/100:null,s(u),u.compra&&u.compra.de>1?Io(e.lancamentos,u)/100:null,i(u),u.obs||""])},d={};t.filter(u=>u.tipo==="gasto").forEach(u=>{let b=Z(u.data)+"|"+u.tag;d[b]=(d[b]||0)+u.valor});let g=e.tetos||{},h={nome:"Por categoria",colunas:[{titulo:"M\xEAs",largura:9},{titulo:"Categoria",largura:18},{titulo:"Gasto",largura:13,tipo:"moeda"},{titulo:"Teto atual",largura:13,tipo:"moeda"},{titulo:"% do teto",largura:10,tipo:"pct"}],linhas:Object.entries(d).sort((u,b)=>u[0].localeCompare(b[0])).map(([u,b])=>{let[N,A]=u.split("|"),ia=re(a,{tipo:"gasto",tag:A}).nome,E=g[A]||0;return[N,ia,b/100,E?E/100:null,E?Math.round(b/E*100)/100:null]})},f={};t.forEach(u=>{let b=Z(u.data);f[b]=f[b]||{r:0,g:0},u.tipo==="gasto"?f[b].g+=u.valor:f[b].r+=u.valor});let l={nome:"Saldo por m\xEAs",colunas:[{titulo:"M\xEAs",largura:9},{titulo:"Entrou",largura:14,tipo:"moeda"},{titulo:"Saiu",largura:14,tipo:"moeda"},{titulo:"Sobrou",largura:14,tipo:"moeda"}],linhas:Object.entries(f).sort().map(([u,b])=>[u,b.r/100,b.g/100,(b.r-b.g)/100])},k=e.caixinhas||[],S=u=>(k.find(b=>b.id===u)||{}).nome||"Caixinha exclu\xEDda",V={nome:"Caixinhas",colunas:[{titulo:"Data",largura:12},{titulo:"Caixinha",largura:22},{titulo:"Pessoa",largura:12},{titulo:"Guardou",largura:13,tipo:"moeda"},{titulo:"Tirou",largura:13,tipo:"moeda"},{titulo:"Saldo atual",largura:14,tipo:"moeda"}],linhas:(e.guardados||[]).filter(u=>k.some(b=>b.id===u.caixinha)).sort((u,b)=>u.data.localeCompare(b.data)||(u.em||0)-(b.em||0)).map(u=>[ae(u.data),S(u.caixinha),u.quem,u.valor>0?u.valor/100:null,u.valor<0?-u.valor/100:null,ci(e,u.caixinha)/100])};return k.length?[n,h,l,V]:[n,h,l]}var p=ha(Ma(),1),os=()=>{ki.forEach(e=>{try{localStorage.removeItem(e)}catch(a){}}),It(null),Rt()},[El,Al,Cl,Dl,Bl,es,$l,Sl,jl,Nl,Il,Tl,Ml]=["Lista","Mes","Planos","Ajustes","CategoriaFolha","Importar","Lousa","Cae","Lazer","Mercado","Pets","NosDois","Caderninho"].map(e=>_t("comodos",e)),[Ll,Ol,Rl,Pl,_l,Ul,Vl,Yl,Gl,Xl]=["CasaLarga","CasaLateral","InicioLargo","ContasMesa","LousaMesa","CaeMesa","MercadoMesa","LazerMesa","PetsMesa","NosMesa"].map(e=>_t("mesa",e)),ts="17.40 \xB7 10/11/2026",Hl=5*60*1e3;function rs(e,a,o){let t=a instanceof Blob?a:new Blob([a],{type:o||"application/json"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=e,s.rel="noopener",document.body.appendChild(s),s.click(),setTimeout(()=>{document.body.removeChild(s),URL.revokeObjectURL(i)},2e3)}var Jl={inicio:{nome:"In\xEDcio",Icone:ra.casa},lancar:{nome:"Lan\xE7ar",Icone:ra.moeda},mes:{nome:"M\xEAs",Icone:ra.pizza},planos:{nome:"Planos",Icone:ra.alvo},lista:{nome:"Lista",Icone:ra.lista},lousa:{nome:"Lousa",Icone:ra.lousa},caehoje:{nome:"Hoje",Icone:ra.sol},brincar:{nome:"Brincar",Icone:ra.saude},saude:{nome:"Sa\xFAde",Icone:ra.saude},escola:{nome:"Escola",Icone:ra.mochila},crescer:{nome:"Crescer",Icone:ra.regua},caderninho:{nome:"Caderno",Icone:ra.caderno},lazer:{nome:"Lazer",Icone:ra.arvore},mercado:{nome:"Lista",Icone:ra.carrinho},despensa:{nome:"Despensa",Icone:ra.pote},voltei:{nome:"Voltei",Icone:ra.sacola},petsaude:{nome:"Sa\xFAde",Icone:ra.patacura},cuidados:{nome:"Cuidados",Icone:ra.banheira},petcantinho:{nome:"O cantinho",Icone:ra.pata},petcarteira:{nome:"A carteirinha",Icone:ra.carteira},petdiario:{nome:"O di\xE1rio",Icone:ra.diario},retratos:{nome:"Retratos",Icone:ra.retratos},combinados:{nome:"Combinados",Icone:ra.combinados},carinho:{nome:"Carinho",Icone:ra.coracao},nosala:{nome:"A sala",Icone:ra.coracao},nosconversa:{nome:"A conversa",Icone:ra.coracao},noshistoria:{nome:"A nossa hist\xF3ria",Icone:ra.coracao},ajustes:{nome:"Ajustes",Icone:ra.engrenagem}},Zt={inicio:["inicio","ajustes"],contas:["inicio","lancar","mes","planos","lista","ajustes"],lousa:["inicio","lousa","ajustes"],cae:["inicio","caehoje","saude","escola","crescer","caderninho","ajustes"],lazer:["inicio","lazer","ajustes"],mercado:["inicio","mercado","ajustes"],pets:["inicio","petsaude","cuidados","ajustes"],nos:["inicio","retratos","combinados","carinho","ajustes"]},Qt={lancar:"contas",mes:"contas",planos:"contas",lista:"contas",lousa:"lousa",saude:"cae",escola:"cae",crescer:"cae",caderninho:"cae",caehoje:"cae",brincar:"cae",lazer:"lazer",mercado:"mercado",despensa:"mercado",voltei:"mercado",petsaude:"pets",cuidados:"pets",petcantinho:"pets",petcarteira:"pets",petdiario:"pets",retratos:"nos",combinados:"nos",carinho:"nos",nosala:"nos",nosconversa:"nos",noshistoria:"nos",inicio:"inicio"};function J(e){let a=(0,y.useRef)(e);return a.current=e,(0,y.useCallback)((...o)=>a.current(...o),[])}function ar(){let[e,a]=(0,y.useState)("carregando"),[o,t]=(0,y.useState)(""),[i,s]=(0,y.useState)(!1),[n,d]=(0,y.useState)(je),g=(0,y.useRef)(n),[h,f]=(0,y.useState)([]),[l,k]=(0,y.useState)("inicio"),[S,V]=(0,y.useState)("inicio"),u=(0,y.useRef)("inicio");u.current=l;let b=(0,y.useCallback)(r=>{k(c=>{let m=typeof r=="function"?r(c):r;return Qt[m]&&V(Qt[m]),m})},[]);(0,y.useEffect)(()=>{let r=window.visualViewport,c=D=>!!D&&(D.tagName==="TEXTAREA"||D.tagName==="SELECT"||D.tagName==="INPUT"&&!/^(checkbox|radio|button|submit|file|range|color)$/i.test(D.type||"")),m=()=>{let D=r?r.height:window.innerHeight;c(document.activeElement)&&D<500?document.documentElement.setAttribute("data-teclado","1"):document.documentElement.removeAttribute("data-teclado")},w=()=>setTimeout(m,60);return document.addEventListener("focusin",w),document.addEventListener("focusout",w),r?r.addEventListener("resize",m):window.addEventListener("resize",m),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",w),r?r.removeEventListener("resize",m):window.removeEventListener("resize",m),document.documentElement.removeAttribute("data-teclado")}},[]);let[N,A]=(0,y.useState)(fo()),ia=(0,y.useRef)(fo());(0,y.useEffect)(()=>{let r=setInterval(()=>{let c=fo();if(c!==ia.current){let m=ia.current;ia.current=c,A(w=>w===m?c:w)}},3e4);return()=>clearInterval(r)},[]);let[E,la]=(0,y.useState)(null),ca=(0,y.useRef)(null);ca.current=E;let[R,fa]=(0,y.useState)(!1),X=(0,y.useRef)(!1),[I,Sa]=(0,y.useState)(null),va=(0,y.useRef)(null),ya=(0,y.useRef)(null),[ja,Ca]=(0,y.useState)(null),[Ra,Ea]=(0,y.useState)({modo:"memoria",offline:!1,pendente:!1,ultimoSucesso:null,uso:0}),[H,T]=(0,y.useState)(null),mo=!1,Na=Ee();(0,y.useEffect)(()=>{if(!Na)return;let r=".cm-painel, .qc-painel, .lm-painel",c=()=>document.querySelectorAll(r).forEach(ga=>{let da=ga.scrollHeight-ga.clientHeight-ga.scrollTop>24;da!==(ga.getAttribute("data-mais")==="1")&&(da?ga.setAttribute("data-mais","1"):ga.removeAttribute("data-mais"))}),m=0,w=()=>{cancelAnimationFrame(m),m=requestAnimationFrame(c)};document.addEventListener("scroll",w,!0),window.addEventListener("resize",w);let D=setInterval(c,800);return c(),()=>{document.removeEventListener("scroll",w,!0),window.removeEventListener("resize",w),clearInterval(D),cancelAnimationFrame(m)}},[Na]),(0,y.useEffect)(()=>{At()!=="solto"&&document.documentElement.setAttribute("data-movimento",At()),Pr()==="nao"&&document.documentElement.setAttribute("data-textura","0"),Ct()==="recolhida"&&document.documentElement.setAttribute("data-casa-recolhida","1")},[]);let Va=(0,y.useRef)(null),x=(0,y.useRef)(null),C=(0,y.useRef)(null),j=(0,y.useRef)(!1),M=(0,y.useMemo)(()=>{if(!h.length)return n;let r=new Set(n.lancamentos.map(c=>c.id));return{...n,lancamentos:n.lancamentos.concat(h.filter(c=>!r.has(c.id)))}},[n,h]),aa=(0,y.useMemo)(()=>wo(n),[n]),pa=(0,y.useCallback)(r=>{g.current=r,d(r)},[]),L=(0,y.useRef)(null);L.current||(L.current=new ct({obter:()=>g.current,aplicar:r=>pa(r),aoStatus:r=>Ea(r),aoZerar:()=>Ja.current(),aoOutraSenha:()=>me.current(),aoArquivo:r=>f(r)}));let z=L.current,P=J((r,c,m)=>{clearTimeout(va.current),ya.current=m||null,Sa({texto:r,tipo:c||"ok",desfazer:!!m}),va.current=setTimeout(()=>{Sa(null),ya.current=null},m?7e3:c==="erro"?6e3:3600)}),pt=()=>{let r=ya.current;ya.current=null,clearTimeout(va.current),Sa(null),r&&r()},to=(0,y.useCallback)(r=>{if(z.soLeitura)return!1;let c=r(g.current);return c===g.current||(pa(c),z.guardarLocal(),z.agendar()),!0},[pa,z]),U=J((r,c)=>{if(z.soLeitura)return P("Atualize o app antes de lan\xE7ar: feche e abra de novo.","erro"),null;let m=r(g.current);return m?m.erro?(c&&c.calado||P(m.erro,"erro"),m):(m.cofre&&m.cofre!==g.current&&to(()=>m.cofre),m.aviso&&P(m.aviso.texto,m.aviso.tipo,m.desfazer?()=>to(m.desfazer):void 0),m.festa&&c&&c.festa&&Ca({t:Date.now(),tipo:"gasto"}),m):null}),Pa=(0,y.useCallback)(async r=>(C.current=z.iniciar().then(c=>(s(!!c.offline),c.estado!=="travado"&&!(c.estado==="semConexao"&&j.current)&&a(c.estado),c)),t(r||""),a("travado"),C.current),[z]),Ja=(0,y.useRef)(()=>{});Ja.current=()=>{z.esquecer(),os(),pa(je),f([]),Va.current=null,la(null),T(null),t("A base foi apagada no outro aparelho. Crie uma senha nova para recome\xE7ar."),a("novo")};let me=(0,y.useRef)(()=>{});me.current=()=>{Va.current=g.current,j.current=!0,z.bloquear(),T(null),Pa("A senha foi trocada ou refor\xE7ada no outro aparelho. Digite a senha (se ningu\xE9m trocou, \xE9 a mesma de sempre).")},(0,y.useEffect)(()=>{z.temCopia()?(C.current=z.iniciar().then(r=>(s(!!r.offline),Ea(c=>({...c,modo:z.modo})),r.estado!=="travado"&&a(r.estado),r)),a("travado")):(async()=>{let r=await z.iniciar();s(!!r.offline),Ea(c=>({...c,modo:z.modo})),a(r.estado)})();try{"serviceWorker"in navigator&&window.isSecureContext&&!window.__CASITA_SEM_SW__&&navigator.serviceWorker.register("sw.js").catch(()=>{})}catch(r){}try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch(r){}},[z]),(0,y.useEffect)(()=>{if(e==="aberto")try{localStorage.setItem("contas-da-casa:aniversarios",JSON.stringify((n.aniversarios||[]).filter(r=>r&&r.data).map(r=>({nome:r.nome,dia:r.data.slice(5)}))))}catch(r){}},[e,n.aniversarios]),(0,y.useEffect)(()=>{let r=()=>{Vr(),Ur()};r();let c=setInterval(r,6e4);return()=>clearInterval(c)},[]),(0,y.useEffect)(()=>{if(e!=="aberto")return;let r=()=>{if(document.visibilityState==="hidden"){x.current=Date.now(),z.guardarLocal(),z.gravar();return}let D=x.current?Date.now()-x.current:0;if(x.current=null,D>Hl&&z.modo!=="memoria"){Va.current=g.current,j.current=!0,z.bloquear(),Gi(0),Rt(),la(null),T(null),Pa("O app se trancou depois de 5 minutos fora. Digite a senha para continuar.");return}z.sincronizar()},c=()=>z.gravar();document.addEventListener("visibilitychange",r),window.addEventListener("online",c);let m=Date.now(),w=setInterval(()=>{if(document.visibilityState!=="visible")return;(["inicio","lousa","saude","caehoje","mercado","despensa","voltei","petcantinho","nosala","nosconversa","retratos","combinados","carinho","caderninho"].includes(u.current)||Date.now()-m>=19500)&&(m=Date.now(),z.sincronizar())},6e3);return()=>{document.removeEventListener("visibilitychange",r),window.removeEventListener("online",c),clearInterval(w)}},[e,z,Pa]),(0,y.useEffect)(()=>{e==="aberto"&&z.sincronizar()},[l,e,z]);let zo=(0,y.useRef)(null),Eo=E?"editar":R?"importar":l,Vo=(0,y.useRef)(Eo);(0,y.useEffect)(()=>{if(Vo.current===Eo)return;Vo.current=Eo;let r=zo.current;if(!mo||!r||!r.animate||(Lt("pagina"),document.documentElement.getAttribute("data-movimento")==="parado")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let c=(r.closest("#app-conteudo")||r.closest(".cc")||r).getBoundingClientRect(),m=document.createElement("div");m.className="pagina-vira",m.setAttribute("aria-hidden","true"),m.style.left=c.left+"px",m.style.width=c.width+"px",document.body.appendChild(m);let w=m.animate([{transform:"perspective(1600px) rotateY(0deg)",opacity:1},{transform:"perspective(1600px) rotateY(-96deg)",opacity:.5}],{duration:460,easing:"cubic-bezier(.45,.05,.55,.95)",fill:"forwards"}),D=()=>m.remove();w.onfinish=D,w.oncancel=D,setTimeout(D,900)},[Eo,mo]),(0,y.useEffect)(()=>{if(!ja)return;Lt("moeda");let r=setTimeout(()=>Ca(null),1600);return()=>clearTimeout(r)},[ja]);let Yo=async r=>{try{C.current&&await C.current;let c=await z.entrar(r,{memoria:j.current?Va.current:null});return pa(c),f([]),{ok:!0}}catch(c){return{ok:!1,erro:c instanceof ea&&c.message&&c.message!=="senha"&&c.message!=="sem base"?c.message:"Senha n\xE3o confere."}}},bo=async r=>{try{let c=await z.criar(r);return pa(c),f([]),{ok:!0}}catch(c){return{ok:!1,erro:c instanceof ea?c.message:"N\xE3o deu para criar a senha neste navegador. Tente pelo Safari ou pelo Chrome atualizado."}}},vo=(0,y.useRef)(!1),Fo=()=>{if(vo.current){vo.current=!1;let m=((g.current||{}).lancamentos||[]).length;setTimeout(()=>P(`C\xF3pia restaurada: ${m} ${m===1?"lan\xE7amento":"lan\xE7amentos"} e tudo o mais que ela guardava.`),400)}j.current=!1,Va.current=null,t(""),a("aberto"),b(c=>c||"inicio"),z.pendente?z.gravar():z.sincronizar(),z.carregarArquivos().catch(()=>{}),z.status();let r=z.orfa();r&&r.pacote&&T({tipo:"senhaCopia",pacote:r.pacote,orfa:!0})},dt=r=>{let c;try{c=JSON.parse(r)}catch(m){return{erro:"Este arquivo n\xE3o \xE9 uma c\xF3pia de seguran\xE7a do app."}}return!c||!c.salt||!c.dados?{erro:"Este arquivo n\xE3o \xE9 uma c\xF3pia de seguran\xE7a do app."}:(z.usarCopia(c),vo.current=!0,t("C\xF3pia carregada. Digite a senha que valia quando ela foi feita."),a("travado"),null)},Go=J((r,c)=>{let m=U(w=>Pe(w,aa,r,E,c));!m||m.erro||(la(null),m.mes&&A(m.mes),m.festa&&Ca({t:Date.now(),tipo:r.tipo}))}),mt=J((r,c,m)=>{let w=U(D=>Ni(D,aa,r,c,m),{festa:!0});return w&&!w.erro&&A(c),w}),go=J((r,c)=>{let m=U(w=>Ci(w,r,c));m&&!m.erro&&la(null)}),Ao=J(r=>{if(r.compra&&r.compra.de>1){T({tipo:"parcelas",item:r});return}let c=g.current.lancamentos.find(w=>w.id===r.id);if(!c){St(g.current,r.data)&&P(Tt,"erro"),la(null);return}if(c.recorrenteId&&g.current.fixas.some(w=>w.id===c.recorrenteId)){go("pular",{recorrenteId:c.recorrenteId,instanciaMes:Z(c.data)});return}let m=U(w=>Ei(w,c.id));m&&!m.erro&&la(null)}),gt=(r,c)=>{let m=U(w=>Ai(w,r,c));T(null),m&&!m.erro&&la(null)},F=J((r,c)=>{if(r.arquivado||St(g.current,r.data)){P(Tt,"erro");return}let m=r.recorrenteId?g.current.fixas.find(w=>w.id===r.recorrenteId):null;if(r.virtual||m){let w=m;if(!w)return;let D=r.virtual?null:r;la({id:w.id,recorrenteId:w.id,recorrente:!0,instanciaMes:Z(r.data),tipo:w.tipo||"receita",valor:D?D.valor:w.valor,tag:D?D.tag:w.tag,quem:D?D.quem:w.quem,data:r.data,obs:D?D.obs:w.obs})}else la(r);X.current=!1,c&&c.semRolar||window.scrollTo(0,0)}),ta=(r,c)=>{let m=U(w=>Mt(w,r,c));!m||m.erro||(fa(!1),Co(null),Ca({t:Date.now(),tipo:"gasto"}))},[uo,Xo]=(0,y.useState)("um"),[ls,cs]=(0,y.useState)(null),[or,Co]=(0,y.useState)(null),ge=(0,y.useRef)(null),er=J(r=>{if(ca.current&&X.current&&ca.current.id!==r.id){P("H\xE1 uma edi\xE7\xE3o aberta com mudan\xE7as: salve ou feche antes de abrir outra.","alerta");return}ge.current=document.activeElement,fa(!1),Co(null),F(r,{semRolar:!0}),setTimeout(()=>{let c=document.querySelector('.cm-painel input[inputmode="numeric"]');c&&c.focus()},60)}),ps=J((r,c)=>{let m=U(w=>Mt(w,r,c));return m&&!m.erro&&Ca({t:Date.now(),tipo:"gasto"}),m}),tr=J(r=>{if(ca.current&&X.current){P("H\xE1 uma edi\xE7\xE3o aberta com mudan\xE7as: salve ou feche antes de importar.","alerta");return}la(null),Co(r),fa(!0)}),rr=J(()=>{if(ca.current&&X.current){P("H\xE1 uma edi\xE7\xE3o aberta com mudan\xE7as: salve ou feche antes de importar.","alerta");return}la(null),Co(null),fa(!0)}),ds=J(()=>Xo("lote")),ms=J(r=>{Xo("um"),cs({t:r,n:Date.now()})});(0,y.useEffect)(()=>{if(E||!ge.current)return;let r=ge.current;ge.current=null,setTimeout(()=>{r.isConnected&&(document.activeElement===document.body||!document.activeElement)&&r.focus()},30)},[E]),(0,y.useEffect)(()=>{let r=c=>{X.current&&(c.preventDefault(),c.returnValue="")};return window.addEventListener("beforeunload",r),()=>window.removeEventListener("beforeunload",r)},[]);let[ir,gs]=(0,y.useState)(0),Da=J(r=>{if(r==="contas-mes"&&(A(fo()),gs(Date.now()),r="mes"),R&&fa(!1),E&&X.current){T({tipo:"sair",destino:r});return}la(null),b(r),window.scrollTo(0,0)}),Y=Na&&e==="aberto",us=Rr();(0,y.useEffect)(()=>{!Y&&l==="brincar"&&b("caehoje")},[Y,l]),(0,y.useEffect)(()=>{!Y&&(l==="despensa"||l==="voltei")&&b("mercado")},[Y,l]),(0,y.useEffect)(()=>{!Y&&(l==="nosala"||l==="noshistoria")?b("retratos"):!Y&&l==="nosconversa"&&b("combinados")},[Y,l]),(0,y.useEffect)(()=>{!Y&&(l==="petcantinho"||l==="petdiario")?b("cuidados"):!Y&&l==="petcarteira"&&b("petsaude")},[Y,l]),(0,y.useEffect)(()=>(Y?document.documentElement.setAttribute("data-largo","1"):document.documentElement.removeAttribute("data-largo"),()=>document.documentElement.removeAttribute("data-largo")),[Y]);let[xs,ut]=(0,y.useState)(!1),[fs,Ho]=(0,y.useState)(!1),hs=J(r=>{let c=Oe(g.current.pessoas),m;r.tipo==="gasto"?m=U(w=>Pe(w,aa,{...r.item,quem:c,data:za()},null,{parcelas:0,repete:!1})):m=U(w=>Ui(w,{texto:r.item.texto.charAt(0).toUpperCase()+r.item.texto.slice(1),quem:c})),m&&!m.erro&&Ho(!1)}),nr=(0,y.useRef)(S);nr.current=S,(0,y.useEffect)(()=>{if(e!=="aberto")return;let r=null;try{r=new URLSearchParams(window.location.search).get("ir")}catch(c){}if(!(!r||!["lancar","mercado","lousa"].includes(r))){try{window.history.replaceState(null,"",window.location.pathname+window.location.hash)}catch(c){}setTimeout(()=>Da(r),80)}},[e]),(0,y.useEffect)(()=>{let r=c=>{["lancar","mes","planos","lista"].includes(u.current)||Da("mes"),setTimeout(()=>tr(c.detail),60)};return document.addEventListener("casita-soltar-contas",r),()=>document.removeEventListener("casita-soltar-contas",r)},[]),(0,y.useEffect)(()=>{if(He(Na?"mesa":"comodos").catch(()=>{}),Na){let r=setTimeout(()=>He("comodos").catch(()=>{}),2500);return()=>clearTimeout(r)}},[Na]),(0,y.useEffect)(()=>Y?void 0:Li(),[Y]),(0,y.useEffect)(()=>{if(Y){document.documentElement.removeAttribute("data-rolou");return}let r=document.documentElement,c=()=>{let m=window.scrollY;m>56?r.hasAttribute("data-rolou")||r.setAttribute("data-rolou","1"):m<12&&r.hasAttribute("data-rolou")&&r.removeAttribute("data-rolou")};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>{window.removeEventListener("scroll",c),r.removeAttribute("data-rolou")}},[Y]),(0,y.useEffect)(()=>{if(Y)return;let r=zo.current;if(!r)return;let c=null,m=ga=>{for(let da=ga;da&&da!==r;da=da.parentElement){if(da.matches&&da.matches("input, textarea, select, [contenteditable], [data-sem-deslize], [data-deslizar], .veu, .folha"))return!0;if(da.scrollWidth>da.clientWidth+4){let Ia=getComputedStyle(da).overflowX;if(Ia==="auto"||Ia==="scroll")return!0}}return!1},w=ga=>{let da=ga.touches[0];c=ga.touches.length===1&&!m(ga.target)&&!document.querySelector(".veu")?{x:da.clientX,y:da.clientY,t:Date.now()}:null},D=ga=>{if(!c)return;let da=ga.changedTouches[0],Ia=da.clientX-c.x,qa=da.clientY-c.y,G=Date.now()-c.t;if(c=null,Math.abs(Ia)<70||Math.abs(qa)>Math.abs(Ia)*.6||G>700)return;let ro=(Zt[nr.current]||[]).filter(he=>he!=="inicio"&&he!=="ajustes"),$o=ro.indexOf(u.current);if($o<0)return;let io=ro[$o+(Ia<0?1:-1)];io&&(document.documentElement.setAttribute("data-deslize",Ia<0?"esq":"dir"),Da(io),setTimeout(()=>document.documentElement.removeAttribute("data-deslize"),400))};return r.addEventListener("touchstart",w,{passive:!0}),r.addEventListener("touchend",D,{passive:!0}),()=>{r.removeEventListener("touchstart",w),r.removeEventListener("touchend",D)}},[Y,e]),(0,y.useEffect)(()=>{let r=()=>Ho(!0);return document.addEventListener("casita-busca",r),()=>document.removeEventListener("casita-busca",r)},[]),(0,y.useEffect)(()=>{if(!Y)return;let r=()=>ut(!0),c=m=>{if(m.ctrlKey||m.metaKey||m.altKey||m.repeat)return;let w=m.target;if(w&&(w.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(w.tagName))||document.querySelector(".veu, .qc-tela-cheia"))return;let D=m.key;if(D==="Escape"&&u.current!=="inicio"&&(!w||w===document.body)){Da("inicio");return}if(D==="?"){m.preventDefault(),ut(!0);return}if(D==="/"&&!["contas","lousa"].includes(Qt[u.current]||u.current)){m.preventDefault(),Ho(!0);return}if(D==="["){m.preventDefault(),Or(Ct()==="recolhida"?"aberta":"recolhida");return}let ga=!!(w&&w.closest&&w.closest(".casa-lateral, .mesa, .cl"))||(!w||w===document.body)&&u.current==="inicio";if(D==="0"){m.preventDefault(),Da("inicio");return}if(/^[1-7]$/.test(D)&&ga&&document.querySelector(".cl")){m.preventDefault(),document.dispatchEvent(new CustomEvent("casita-entrar-comodo",{detail:Number(D)-1}));return}if(/^[1-7]$/.test(D)&&ga){m.preventDefault(),Da(hi[Number(D)-1].destino);return}if(D!=="n"&&D!=="N")return;m.preventDefault(),Xo("um"),Da("lancar");let da=0,Ia=()=>{let qa=[...document.querySelectorAll('#app-conteudo input[inputmode="numeric"]')].find(G=>G.offsetParent);if(qa){qa.focus();return}++da<8&&setTimeout(Ia,50)};setTimeout(Ia,30)};return document.addEventListener("keydown",c),document.addEventListener("casita-atalhos",r),()=>{document.removeEventListener("keydown",c),document.removeEventListener("casita-atalhos",r)}},[Y]),(0,y.useEffect)(()=>{e==="aberto"&&Hr(()=>{let r=window.history.state||{};if(!(r.folhas||[]).length)if(u.current!=="inicio"&&!r.casitaFora)try{window.history.pushState({...r,casitaFora:!0},"")}catch(c){}else u.current==="inicio"&&r.casitaFora&&Xr()})},[l,e]),(0,y.useEffect)(()=>{let r=()=>{if(Gr())return;let c=window.history.state||{};if(!(c.casitaFora||(c.folhas||[]).length||u.current==="inicio")){if(ca.current&&X.current)try{window.history.pushState({...c,casitaFora:!0},"")}catch(m){}Da("inicio")}};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[Da]);let bs=(r,c)=>{U(m=>Bi(m,r,c)),T(null)},sr=(r,c)=>{let m=U(w=>$i(w,aa,r,c));m&&!m.erro&&T(null)},lr=(0,y.useMemo)(()=>{let r={};return M.lancamentos.forEach(c=>{c.tipo==="gasto"&&(r[c.tag]=(r[c.tag]||0)+1)}),M.fixas.forEach(c=>{(c.tipo||"receita")==="gasto"&&(r[c.tag]=(r[c.tag]||0)+1)}),r},[M]),vs=J(r=>{U(c=>Si(c,r))}),Fs=J(r=>{let c=g.current.pessoas||[],m=U(w=>ji(w,r));if(!m||m.erro)return m;r=r.map(w=>String(w||"").replace(/\s+/g," ").trim().slice(0,16));try{let w=localStorage.getItem(yi),D=c.indexOf(w);D>=0&&r[D]&&r[D]!==w&&It(r[D])}catch(w){}return z.lembrarNomes({pessoas:r}),m}),xt=J(async()=>{try{let{pacote:r,faltando:c}=await z.pacoteParaCopia();rs(`casita-copia-${za()}.json`,JSON.stringify(r,null,1)),to(m=>({...m,ultimaCopia:za()})),c.length?P(`C\xF3pia salva, mas sem ${c.length===1?"o ano":"os anos"} ${c.join(", ")} do arquivo, que n\xE3o abriu agora. Com internet, salve outra depois.`,"alerta"):P("C\xF3pia salva neste aparelho. Guarde o arquivo num lugar seguro.")}catch(r){P("N\xE3o deu para salvar a c\xF3pia agora.","erro")}}),ft=J(async(r,c)=>{let m;try{m=typeof r=="string"?JSON.parse(r):r}catch(G){m=null}if(!m||!m.salt||!m.dados){P("Este arquivo n\xE3o \xE9 uma c\xF3pia de seguran\xE7a do app.","erro");return}let w;try{w=await z.abrirCopia(m,c)}catch(G){let ro=!!(H&&H.orfa);if(G.message==="precisaSenha"){T({tipo:"senhaCopia",pacote:m,orfa:ro});return}if(c){T({tipo:"senhaCopia",pacote:m,orfa:ro,erro:"Essa senha n\xE3o abre."});return}P(G instanceof ea&&G.message!=="senha"?G.message:"N\xE3o deu para abrir essa c\xF3pia.","erro");return}let D=await z.lancamentosDoArquivoDaCopia(m,w),ga=new Set(w.lancamentos.map(G=>G.id)),da=w.lancamentos.concat(D.filter(G=>!ga.has(G.id))),Ia=new Set(M.lancamentos.map(G=>G.id)),qa=da.filter(G=>!Ia.has(G.id)&&!(g.current.excluidos||[]).includes(G.id)).length;if(!to(G=>Ga(G,{...w,lancamentos:da,base:G.base,arquivo:G.arquivo}))){P("Atualize o app antes de juntar uma c\xF3pia.","erro");return}z.depoisDeGravar(),H&&H.orfa&&z.descartarOrfa(),T(null),P(qa?`C\xF3pia juntada: ${Ta(qa,"lan\xE7amento novo","lan\xE7amentos novos")}.`:"C\xF3pia lida. N\xE3o havia nada novo nela (o que foi exclu\xEDdo depois da c\xF3pia continua exclu\xEDdo).")}),ws=async r=>{try{await ft(await z.copiaDe(r))}catch(c){P("N\xE3o deu para abrir a c\xF3pia desse dia agora.","erro")}},ys=(0,y.useCallback)(()=>z.diasComCopia(),[z]),ks=J(()=>{try{let r=Qn(as(M,aa));rs(`casita-${za()}.xlsx`,new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),to(c=>({...c,ultimoExport:za()})),P("Planilha salva neste aparelho.")}catch(r){P("N\xE3o deu para gerar a planilha agora.","erro")}}),qs=J((r,c)=>z.trocarSenha(r,c)),zs=async()=>{let r=await z.zerar();if(!r.ok){P(r.texto,"erro");return}os(),T(null),la(null),pa(je),f([]),t(r.naoApagadas?`Base apagada. ${Ta(r.naoApagadas,"c\xF3pia antiga da nuvem n\xE3o p\xF4de ser apagada","c\xF3pias antigas da nuvem n\xE3o puderam ser apagadas")} agora (sem internet ou com as regras antigas do Firebase). Elas continuam embaralhadas com a senha antiga.`:""),b("inicio"),A(fo()),a("novo")},cr=(0,y.useMemo)(()=>{if(n.lancamentos.length<20)return!1;if(!n.ultimaCopia)return!0;let[r,c,m]=n.ultimaCopia.split("-").map(Number);return(Date.now()-new Date(r,c-1,m).getTime())/864e5>30},[n]),Es=(0,y.useMemo)(()=>ao(M,N),[M,N]),As=J(()=>{fa(!0),window.scrollTo(0,0)}),pr=J(()=>{z.sincronizar(),(z.offline||z.pendente)&&z.gravar()}),dr=J(r=>T({tipo:"categoria",cat:r,foco:"teto"})),Cs=J(r=>T({tipo:"categoria",cat:r,foco:"nome"})),mr=J(r=>P(r,"erro")),ht=J(()=>Da("lancar")),gr=J(()=>Da("ajustes")),Ds=J(()=>T({tipo:"zerar"})),Bs=J(()=>T({tipo:"restaurar"})),ur=J(r=>{X.current=r}),_a=J(r=>Da(r)),xr=(0,y.useMemo)(()=>({conferir:()=>z.conferirAgora(),obter:()=>g.current,enviar:()=>{z.guardarLocal(),z.gravar()}}),[z]),fr=J(({valor:r,quem:c,limpar:m,partes:w})=>{let D=new Set((g.current.mercado||[]).filter(qa=>qa.comprado).map(qa=>String(qa.texto).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim())).size,ga=D?`Lista de mercado (${D} ${D===1?"item":"itens"})`:"",da=(w&&w.length?w.filter(qa=>qa.valor>0):[{tag:"mercado",valor:r}]).map(qa=>({tipo:"gasto",valor:qa.valor,tag:qa.tag,quem:c,data:za(),...ga?{obs:qa.tag==="mercado"?ga:`${ga}, parte`}:{}})),Ia=U(qa=>{let G=null;for(let $o of da){let io=Pe(G?G.cofre:qa,aa,$o,null,{parcelas:0,repete:!1});if(!io||io.erro)return io;if(G){let he=G.desfazer,Ss=io.desfazer;G={...io,desfazer:js=>he(Ss(js))}}else G=io}if(!G||G.erro||!m||!D)return G;let ro=Vi(G.cofre);return ro.erro?G:{...G,cofre:ro.cofre,desfazer:$o=>G.desfazer(ro.desfazer($o))}});return!Ia||Ia.erro?!1:(Ca({t:Date.now(),tipo:"gasto"}),!0)}),Ua=(0,y.useMemo)(()=>({guardar:(r,c)=>z.guardarFoto(r,c),abrir:r=>z.abrirFoto(r),apagar:r=>!r||!r.id?Promise.resolve(!1):new Promise(c=>setTimeout(()=>{c(z.fotoEmUso(r.id)?!1:z.apagarFoto(r))},9e3))}),[z]),bt=(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("style",{children:Dr+Br+oi+Ki+an+rn+nn+un+gn+Fn+yn+qn+En+An+sn+bi+dn+cn+tn+Ln+Ii+Yi+_r+Ti})});if(e==="carregando")return(0,p.jsxs)("div",{className:"cc-fundo",children:[bt,(0,p.jsx)("div",{className:"cc","data-sem-nav":"1",children:(0,p.jsx)(Mn,{})})]});if(e!=="aberto")return(0,p.jsxs)("div",{className:"cc-fundo",children:[bt,(0,p.jsx)("div",{className:"cc","data-sem-nav":"1",children:(0,p.jsx)(ei,{modo:e,aviso:o,offline:i,aoEntrar:Yo,aoCriar:bo,aoAbrir:Fo,aoUsarCopia:dt,aoTentarDeNovo:async()=>{a("carregando");let r=await z.iniciar();s(!!r.offline),a(r.estado)}})})]});let $s=!!E||R||l==="lancar",Do=jn(Ra,z),Jo=l==="inicio"&&!E&&!R,hr=Zt[E||R?"contas":S]||Zt.contas,ka=!E&&!R?l:null,wa=Y&&["lancar","mes","planos","lista"].includes(l),ue=Y&&l==="lousa"&&!E&&!R,Bo=Y&&xi.some(([r])=>r===l)&&!E&&!R,Ko=Y&&fi.some(([r])=>r===l)&&!E&&!R,xe=Y&&l==="lazer"&&!E&&!R,fe=Y&&l==="ajustes"&&!E&&!R,Wo=Y&&["nosala","nosconversa","noshistoria","retratos","combinados","carinho"].includes(l)&&!E&&!R,Zo=Y&&["petcantinho","petcarteira","petdiario","petsaude","cuidados"].includes(l)&&!E&&!R,vt=Y&&Jo&&us==="casa";return(0,p.jsxs)("div",{className:"cc-fundo",children:[bt,(0,p.jsxs)("div",{className:"cc","data-acao":$s?"1":"0","data-secao":Jo?"inicio":S,"data-sem-nav":Jo?"1":void 0,"data-largo":Y?"1":void 0,"data-contas-mesa":wa?"1":void 0,"data-lousa-mesa":ue?"1":void 0,"data-cae-mesa":Bo?"1":void 0,"data-mercado-mesa":Ko?"1":void 0,"data-lazer-mesa":xe?"1":void 0,"data-pets-mesa":Zo?"1":void 0,"data-nos-mesa":Wo?"1":void 0,"data-ajustes-mesa":fe?"1":void 0,"data-casa-larga":vt?"1":void 0,children:[Y?(0,p.jsx)("a",{className:"pular-link",href:"#app-conteudo",onClick:r=>{r.preventDefault();let c=document.querySelector("#app-conteudo h1, #app-conteudo h2");c&&(c.setAttribute("tabindex","-1"),c.focus())},children:"Pular para o conte\xFAdo"}):null,Y&&!vt?(0,p.jsx)(Ol,{cofre:n,vista:M,aba:E||R?"lancar":l,secao:E||R?"contas":S,noInicio:Jo,aoIr:_a,fotos:Ua,versao:ts}):null,(0,p.jsxs)("div",{id:"app-conteudo",children:[Do?(0,p.jsxs)("div",{className:"faixa",role:"status",children:[(0,p.jsx)(Do.Icone,{size:18,"aria-hidden":"true",style:{flexShrink:0}}),(0,p.jsx)("span",{children:Do.texto}),Do.acao?(0,p.jsx)("button",{type:"button",className:"btn btn-texto",onClick:Do.aoAgir,children:Do.acao}):null]}):null,(0,p.jsxs)("main",{ref:zo,"data-contas-mesa":wa?"1":void 0,"data-lousa-mesa":ue?"1":void 0,"data-cae-mesa":Bo?"1":void 0,"data-mercado-mesa":Ko?"1":void 0,"data-lazer-mesa":xe?"1":void 0,"data-pets-mesa":Zo?"1":void 0,"data-nos-mesa":Wo?"1":void 0,"data-ajustes-mesa":fe?"1":void 0,children:[Bo?(0,p.jsx)(Ul,{cofre:n,aba:l,executar:U,aoIr:_a,fotos:Ua,saude:xr,status:Ra}):null,wa?(0,p.jsx)(Pl,{cofre:M,cats:aa,ym:N,setYm:A,aba:l,aoIr:_a,executar:U,aoEditar:er,aoExcluir:Ao,aoTeto:dr,aoDefinirTetos:gr,aoImportar:rr,aoSoltar:tr,aoAvisar:mr,aoLancar:ht,status:Ra,precisaCopia:cr,aoSalvarCopia:xt,aoAtualizar:pr,abrirContas:ir}):null,ka==="inicio"?vt?(0,p.jsx)(Ll,{cofre:n,vista:M,aoIr:_a,fotos:Ua,executar:U}):Y?(0,p.jsx)(Rl,{cofre:n,vista:M,aoIr:_a,fotos:Ua,executar:U}):(0,p.jsx)(Xi,{cofre:n,vista:M,aoIr:_a,fotos:Ua}):null,ka==="lousa"?ue?(0,p.jsx)(_l,{cofre:n,executar:U,aoIr:_a,fotos:Ua}):(0,p.jsx)($l,{cofre:n,executar:U,aoIr:_a,fotos:Ua}):null,!Bo&&(ka==="caehoje"||ka==="saude"||ka==="escola"||ka==="crescer")?(0,p.jsx)(Sl,{cofre:n,area:ka,executar:U,fotos:Ua,saude:xr,status:ka==="saude"||ka==="caehoje"?Ra:null}):null,ka==="lazer"?xe?(0,p.jsx)(Yl,{cofre:n,contas:M,executar:U,aoIr:_a}):(0,p.jsx)(jl,{cofre:n,executar:U}):null,Ko?(0,p.jsx)(Vl,{cofre:n,contas:M,cats:aa,aba:l,executar:U,aoIr:_a,aoLancarGasto:fr}):null,ka==="mercado"&&!Ko?(0,p.jsx)(Nl,{cofre:n,executar:U,aoLancarGasto:fr}):null,!Bo&&ka==="caderninho"?(0,p.jsx)(Ml,{cofre:n,executar:U,fotos:Ua}):null,Wo?(0,p.jsx)(Xl,{cofre:n,contas:M,aba:l,executar:U,aoIr:_a,fotos:Ua}):null,!Wo&&(ka==="retratos"||ka==="combinados"||ka==="carinho")?(0,p.jsx)(Tl,{cofre:n,area:ka,executar:U,fotos:Ua}):null,Zo?(0,p.jsx)(Gl,{cofre:n,contas:M,aba:l,executar:U,aoIr:_a,fotos:Ua}):null,!Zo&&(ka==="petsaude"||ka==="cuidados")?(0,p.jsx)(Il,{cofre:n,area:ka==="petsaude"?"saude":"cuidados",executar:U}):null,R&&!E&&!wa?(0,p.jsx)(es,{cofre:M,cats:aa,aoFechar:()=>{fa(!1),Co(null)},aoLancar:ta}):null,E&&!wa?(0,p.jsx)(Ke,{cofre:M,cats:aa,editando:E,aoSalvar:Go,aoFechar:()=>Da(l),aoExcluir:Ao,aoAcaoRecorrente:go,aoAlterado:ur},"ed-"+E.id+(E.instanciaMes||"")):null,(0,p.jsxs)("div",{className:wa?"cm-painel":void 0,role:wa?"complementary":void 0,"aria-label":wa?"Lan\xE7ar":void 0,hidden:Y?!wa:!!E||R||l!=="lancar",children:[wa&&E?(0,p.jsx)(Ke,{cofre:M,cats:aa,editando:E,aoSalvar:Go,aoFechar:()=>Da(l),aoExcluir:Ao,aoAcaoRecorrente:go,aoAlterado:ur},"ed-"+E.id+(E.instanciaMes||"")):null,wa&&R&&!E?(0,p.jsx)(es,{cofre:M,cats:aa,soltos:or,aoFechar:()=>{fa(!1),Co(null)},aoLancar:ta},or?"soltos":"importar"):null,(0,p.jsx)("div",{hidden:wa&&(!!E||R||uo!=="um"),children:(0,p.jsx)(Ke,{cofre:M,cats:aa,aoSalvar:Go,aoImportar:wa?void 0:As,aoPagarConta:mt,aoContasFixas:wa?void 0:()=>Da("contas-mes"),aoVarios:wa?ds:void 0,tipoPedido:ls},"novo")}),Y?(0,p.jsx)("div",{hidden:!wa||!!E||R||uo!=="lote",children:(0,p.jsx)(xn,{cofre:M,cats:aa,aoTrocar:ms,aoLancar:ps})}):null,wa&&!E&&!R?(0,p.jsxs)("div",{className:"cm-painel-pe",children:[(0,p.jsx)(fn,{cofre:M,cats:aa,aoEditar:er}),(0,p.jsx)(hn,{aoImportar:rr})]}):null]}),!E&&!R&&l==="mes"&&!wa?(0,p.jsx)(Al,{ym:N,setYm:A,cofre:M,cats:aa,status:Ra,precisaCopia:cr,aoSalvarCopia:xt,aoAtualizar:pr,aoLancar:ht,aoTeto:dr,aoDefinirTetos:gr,aoAvisar:mr,executar:U,abrirContas:ir}):null,!E&&!R&&l==="planos"&&!wa?(0,p.jsx)(Cl,{cofre:M,cats:aa,executar:U}):null,!E&&!R&&l==="lista"&&!wa?(0,p.jsx)(El,{ym:N,setYm:A,itens:Es,cats:aa,pessoas:n.pessoas,aoEditar:F,aoLancar:ht}):null,!E&&!R&&l==="ajustes"?(0,p.jsx)(Dl,{cofre:M,cats:aa,usoPorCat:lr,status:Ra,versao:ts,aoCategoria:Cs,aoSalvarNomes:Fs,aoSalvarAniversarios:vs,aoSalvarCopia:xt,aoJuntarCopia:ft,aoExportar:ks,aoRestaurarDia:Bs,aoTrocarSenha:qs,aoPedirZerar:Ds,avisar:P,mesa:fe,aoMudarLoja:(r,c)=>U(m=>Di(m,r,c))}):null]})]}),!Jo&&!wa&&!ue&&!Bo&&!Ko&&!xe&&!Zo&&!Wo&&!fe?(0,p.jsx)("nav",{className:"nav",id:"app-nav","aria-label":"Se\xE7\xF5es","data-n":hr.length,children:hr.map(r=>{let c=Jl[r],m=!E&&!R&&l===r;return(0,p.jsxs)("button",{type:"button","data-aba":r,"aria-current":m?"page":void 0,onClick:()=>Da(r),children:[(0,p.jsx)("span",{className:"bolha",children:(0,p.jsx)(c.Icone,{size:24,strokeWidth:m?2.5:2,"aria-hidden":"true"})}),c.nome]},r)})}):null,H&&H.tipo==="sair"?(0,p.jsx)(Cn,{aoFicar:()=>T(null),aoSair:()=>{let r=H.destino;T(null),la(null),X.current=!1,b(r)}}):null,H&&H.tipo==="parcelas"?(0,p.jsx)(Dn,{cofre:n,item:H.item,aoExcluir:r=>gt(H.item,r),aoFechar:()=>T(null)}):null,H&&H.tipo==="categoria"?(0,p.jsx)(Bl,{cat:H.cat,cofre:n,uso:H.cat&&lr[H.cat.id]||0,foco:H.foco,aoSalvar:r=>bs(H.cat,r),aoEsconder:r=>sr(r,!0),aoMostrar:r=>sr(r,!1),aoFechar:()=>T(null)}):null,H&&H.tipo==="senhaCopia"?(0,p.jsx)(Bn,{folha:H,aoFechar:()=>T(null),aoAbrir:r=>ft(H.pacote,r),aoDescartar:()=>{z.descartarOrfa(),T(null),P("Lan\xE7amentos guardados descartados.")}}):null,H&&H.tipo==="restaurar"?(0,p.jsx)($n,{listar:ys,aoEscolher:ws,aoFechar:()=>T(null)}):null,H&&H.tipo==="zerar"?(0,p.jsx)(Sn,{aoFechar:()=>T(null),aoConfirmar:zs,contagem:{lancamentos:M.lancamentos.length,fixas:n.fixas.length,tetos:Object.keys(n.tetos||{}).length,caixinhas:(n.caixinhas||[]).length,familia:["lousa","lousaMeses","caeNotas","remedios","doses","receitas","medidas","mercado","petNotas","combinados","retratos","obrigados","queridos","caderninho","tarefasCasa","jantares","despensa","listasProntas"].reduce((r,c)=>r+(n[c]||[]).length,0)+(n.ficha?1:0)}}):null,fs?(0,p.jsx)(ln,{cofre:n,aoFechar:()=>Ho(!1),aoIr:r=>{Ho(!1),r.ym&&A(r.ym),Da(r.destino)},aoAcao:hs}):null,xs&&Y?(0,p.jsxs)(Za,{titulo:"Atalhos do teclado",aoFechar:()=>ut(!1),children:[(0,p.jsxs)("dl",{className:"atalhos-lista",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"N"})}),(0,p.jsx)("dd",{children:"Lan\xE7ar um gasto"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("dt",{children:[(0,p.jsx)("kbd",{children:"1"})," a ",(0,p.jsx)("kbd",{children:"7"})]}),(0,p.jsx)("dd",{children:"Entrar nos c\xF4modos: N\xF3s dois, Ca\xEA, Contas, Lousa, Mercado, Lazer, Mia e Marie (no In\xEDcio ou com o foco na casa)"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("dt",{children:[(0,p.jsx)("kbd",{children:"0"})," ",(0,p.jsx)("kbd",{children:"Esc"})]}),(0,p.jsx)("dd",{children:"Voltar ao In\xEDcio (o Esc fecha antes a folha aberta, se houver)"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"["})}),(0,p.jsx)("dd",{children:"Recolher ou abrir a casa ao lado"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"?"})}),(0,p.jsx)("dd",{children:"Ver estes atalhos"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"/"})}),(0,p.jsx)("dd",{children:"Buscar na casita toda (nas Contas e na Lousa, a busca de l\xE1)"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"F"})}),(0,p.jsx)("dd",{children:"No quarto do Ca\xEA: anotar uma frase dele. Na Escola, Ctrl + V (fora de um campo) l\xEA a mensagem colada"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("dt",{children:[(0,p.jsx)("kbd",{children:"I"})," ",(0,p.jsx)("kbd",{children:"P"})]}),(0,p.jsx)("dd",{children:"No Lazer: pregar uma ideia e marcar um passeio. Ctrl + V (fora de um campo) l\xEA um evento colado"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"A"})}),(0,p.jsx)("dd",{children:"No Mercado: anotar na lista. Ctrl + V (fora de um campo) separa os itens de uma lista colada"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"B"})}),(0,p.jsx)("dd",{children:"Em N\xF3s dois: escrever um bilhete (agrade\xE7o ou not\xEDcia boa)"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"A"})}),(0,p.jsx)("dd",{children:"Em Mia e Marie: anotar um cuidado, vacina, peso ou consulta"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("dt",{children:[(0,p.jsx)("kbd",{children:"M"})," ",(0,p.jsx)("kbd",{children:"S"})," ",(0,p.jsx)("kbd",{children:"L"})," ",(0,p.jsx)("kbd",{children:"H"})]}),(0,p.jsx)("dd",{children:"Na Lousa: m\xEAs, semana, lista e voltar para hoje. Setas andam pelos dias; Enter escreve no dia; num recado, X risca e Alt + seta muda o dia"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("dt",{children:[(0,p.jsx)("kbd",{children:"\u2191"})," ",(0,p.jsx)("kbd",{children:"\u2193"})," ",(0,p.jsx)("kbd",{children:"Enter"})," ",(0,p.jsx)("kbd",{children:"Delete"})]}),(0,p.jsx)("dd",{children:"Na tabela das Contas: andar, abrir a edi\xE7\xE3o completa e excluir (com Desfazer). Um clique numa c\xE9lula corrige ali mesmo (fixos e parcelas abrem a edi\xE7\xE3o completa). Espa\xE7o seleciona; Shift + clique seleciona v\xE1rios; Ctrl + clique marca um a um"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:"Mouse"}),(0,p.jsx)("dd",{children:"Na Lousa: dois cliques num dia escrevem nele; arraste um recado para outro dia"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("dt",{children:[(0,p.jsx)("kbd",{children:"Ctrl"})," + ",(0,p.jsx)("kbd",{children:"Enter"})]}),(0,p.jsx)("dd",{children:"Salvar a folha aberta"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("kbd",{children:"Esc"})}),(0,p.jsx)("dd",{children:"Fechar a folha aberta"})]})]}),(0,p.jsx)("p",{className:"legenda",style:{marginTop:12},children:"Os atalhos n\xE3o valem enquanto se digita num campo."})]}):null,(0,p.jsx)("div",{id:"app-folhas"}),ja?(0,p.jsx)(Fi,{chave:ja.t}):null,(0,p.jsx)(Tn,{cofre:n,hoje:za(),hora:new Date().getHours()+new Date().getMinutes()/60}),(0,p.jsx)(Jr,{toast:I,aoDesfazer:pt})]})]})}var is=document.getElementById("root");try{(0,ss.createRoot)(is).render(ns.default.createElement(ar))}catch(e){is.innerHTML='<div style="font-family:system-ui;padding:24px;line-height:1.6"><b>N\xE3o foi poss\xEDvel abrir o app.</b><br>Detalhe: '+String(e&&e.message)+"</div>"}
