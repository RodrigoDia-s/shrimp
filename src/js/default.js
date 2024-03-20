document.getElementById('btnSim').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('btnNao').addEventListener('click', function() {
    window.location.href = './src/terceira_pagina.html';
  });
  
  document.getElementById('btnNaoPopup').addEventListener('click', function() {
    window.location.href = './src/terceira_pagina.html';
  });
  
  document.getElementById('btnSimPopup').addEventListener('click', function() {
    // Aqui você pode adicionar a lógica para o botão "Sim" do popup, como redirecionar para outra página
    // Por exemplo:
    window.location.href = './src/camaraokk.html';
  });
  
  document.getElementById('btnNaoPopup').addEventListener('click', function() {
    // Aqui você pode adicionar a lógica para o botão "Não" do popup, se desejar
  });
  