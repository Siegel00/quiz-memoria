const imagens = [
      'https://www.gstatic.com/android/keyboard/emojikitchen/20241023/u1f4a5/u1f4a5_u1f30c.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20240610/u2b50/u2b50_u2604-ufe0f.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f636/u1f636_u1f47d.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20230127/u1f31c/u1f31c_u2b50.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20240206/u1f31c/u1f31c_u1f30c.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20241021/u1f6f8/u1f6f8_u1f355.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20240206/u1fa90/u1fa90_u1f642.png',
      'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f601/u1f601_u1f30d.png'
    ];
    let cartas = [...imagens, ...imagens].sort(() => 0.5 - Math.random());
    const tabuleiro = document.querySelector('.tabuleiro');
    let primeiraCarta = null;
    let segundaCarta = null;
    let travar = false;
    let tentativas = 0;
    let paresEncontrados = 0;

    function atualizarPontuacao() {
      document.getElementById('pontuacao').textContent = `Tentativas: ${tentativas}`;
    }

    function criarCarta(imagem) {
      const carta = document.createElement('div');
      carta.classList.add('carta');
      carta.dataset.imagem = imagem;

      const frente = document.createElement('div');
      frente.classList.add('frente');

      const verso = document.createElement('div');
      verso.classList.add('verso');
      verso.style.backgroundImage = `url(${imagem})`;

      // Verificar se a imagem carrega
      const img = new Image();
      img.src = imagem;
      img.onerror = () => console.error(`Erro ao carregar imagem: ${imagem}`);

      carta.appendChild(frente);
      carta.appendChild(verso);

      carta.addEventListener('click', () => {
        if (travar || carta.classList.contains('virada') || carta === primeiraCarta) return;

        carta.classList.add('virada');
        if (!primeiraCarta) {
          primeiraCarta = carta;
        } else {
          segundaCarta = carta;
          travar = true;

          setTimeout(() => {
            const img1 = primeiraCarta.dataset.imagem;
            const img2 = segundaCarta.dataset.imagem;

            tentativas++;
            atualizarPontuacao();

            if (img1 === img2) {
              paresEncontrados++;
              if (paresEncontrados === imagens.length) {
                setTimeout(() => alert('Parabéns! Você venceu!'), 500);
              }
            } else {
              primeiraCarta.classList.remove('virada');
              segundaCarta.classList.remove('virada');
            }

            primeiraCarta = null;
            segundaCarta = null;
            travar = false;
          }, 1000);
        }
      });

      return carta;
    }

    function iniciarJogo() {
      tabuleiro.innerHTML = '';
      cartas = [...imagens, ...imagens].sort(() => 0.5 - Math.random());
      tentativas = 0;
      paresEncontrados = 0;
      atualizarPontuacao();

      cartas.forEach(imagem => {
        const carta = criarCarta(imagem);
        tabuleiro.appendChild(carta);
      });
    }

    document.getElementById('reiniciar').addEventListener('click', iniciarJogo);

    document.getElementById('voltar').addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    iniciarJogo();