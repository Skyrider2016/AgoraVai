document.getElementById('add-btn').addEventListener('click', () => {
  const list = document.getElementById('character-list');
  const card = document.createElement('div');
  card.className = 'character-card';

  card.innerHTML = `
    <div class="character-row">
      <select>
        <option>D</option><option>C</option><option>B</option><option>A</option><option>S</option>
      </select>
      <input type="text">
      <input type="number">
      <input type="text">
      <span class="remove">✖</span>
    </div>
    <div class="sub-info">
      <span>vida:</span>
      <input type="number" placeholder="HP atual">
      <span>/</span>
      <input type="number" placeholder="HP total">
      <span>Anot:</span>
      <input type="text" placeholder="Anotações">
      <span class="tag-button">🏷️</span>
    </div>
  `;

  list.appendChild(card);

  card.querySelector('.remove').addEventListener('click', () => card.remove());

  card.querySelector('.tag-button').addEventListener('click', () => {
    const tag = document.createElement('div');
    tag.className = 'tag-entry';
    tag.innerHTML = `
      <div class="circle"></div>
      <input type="text" placeholder="Nota">
      <input type="number" placeholder="Turnos">
      <button>-</button>
    `;
    tag.querySelector('button').addEventListener('click', () => tag.remove());
    card.appendChild(tag);
  });
});

document.getElementById('roll-btn').addEventListener('click', () => {
  const cards = document.querySelectorAll('.character-card');
  cards.forEach(card => {
    const initInput = card.querySelector('input[type=number]');
    initInput.value = Math.floor(Math.random() * 20) + 1;
  });
});

document.getElementById('clear-btn').addEventListener('click', () => {
  document.getElementById('character-list').innerHTML = '';
});

document.getElementById('cycle-btn').addEventListener('click', () => {
  const list = document.getElementById('character-list');
  const first = list.firstElementChild;
  if (first) {
    list.appendChild(first);
  }
});
