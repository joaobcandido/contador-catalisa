"use strict";const formatarDigito=t=>`0${t}`.slice(-2),atualizar=t=>{const e=document.getElementById("segundos"),o=document.getElementById("minutos"),a=document.getElementById("horas"),n=document.getElementById("dias"),r=t%60,s=Math.floor(t%3600/60),i=Math.floor(t%86400/3600),m=Math.floor(t/86400);e.textContent=formatarDigito(r),o.textContent=formatarDigito(s),a.textContent=formatarDigito(i),n.textContent=formatarDigito(m)},contagemRegressiva=t=>{const e=setInterval((()=>{0===t&&clearInterval(e),atualizar(t),t--}),1e3)},tempoRestante=()=>{const t=new Date("2024-11-18 10:00:00"),e=Date.now();return Math.floor((t-e)/1e3)};contagemRegressiva(tempoRestante());