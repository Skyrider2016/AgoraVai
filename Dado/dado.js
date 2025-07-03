let rotX = 0;
let rotY = 0;

function rolarDado() {
  resultado.textContent = ""; // limpa antes de rolar

  const valores = {
    1: { x: 0,   y: 0 },
    2: { x: -90, y: 0 },
    3: { x: 0,   y: -90 },
    4: { x: 0,   y: 90 },
    5: { x: 90,  y: 0 },
    6: { x: 180, y: 0 }
  };

  const valor = Math.floor(Math.random() * 6) + 1;
  const rot = valores[valor];

  // ROTACIONAR CUMULATIVAMENTE
  rotX += 720 + rot.x;
  rotY += 720 + rot.y;

  // MOVIMENTO ALEATÓRIO
  const deslocamentoX = Math.floor(Math.random() * 200 - 100);
  const deslocamentoY = Math.floor(Math.random() * 100 - 50);

  dado.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  dado.style.top = `${deslocamentoY}px`;
  dado.style.left = `${deslocamentoX}px`;

  setTimeout(() => {
    resultado.textContent = `Resultado: ${valor}`;
  }, 2500);
}
