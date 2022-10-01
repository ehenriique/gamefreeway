//ator

let yAtor = 366;
let xAtor = 80;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentoAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) yAtor += 3;
  }
}

function podeSeMover() {
  return yAtor < 366;
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 245, 60));
  text(meusPontos, width / 3, 30);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}
