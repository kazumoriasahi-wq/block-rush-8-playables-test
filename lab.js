const frame=document.getElementById('gameFrame'),log=document.getElementById('log');let n=0;
document.getElementById('controls').addEventListener('click',e=>{const command=e.target.dataset.command;if(command)frame.contentWindow.postMessage({command},location.origin);});
document.getElementById('reload').onclick=()=>{frame.src='mock-sandbox.html?reload='+Date.now();};
addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==frame.contentWindow||event.data?.source!=='br8-mock')return;const item=event.data;log.textContent=(++n)+'. '+item.type+(item.detail===undefined?'':' '+item.detail)+'\n'+log.textContent;});
