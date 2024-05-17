const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
  });
  
  document.body.appendChild(app.view);
  
  let player;
  let obstacles = [];
  let isJumping = false;
  let score = 0;
  let scoreText;
  
  player = PIXI.Sprite.from('cube.png');
  player.vy = 0;
  player.vx = 0;
  player.anchor.set(0.5);
  player.scale.set(0.3);
  player.x = 200;
  player.y = app.screen.height;
  app.stage.addChild(player);
  
  scoreText = new PIXI.Text('Score: 0', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff });
  scoreText.position.set(10, 10);
  app.stage.addChild(scoreText);
  
  app.ticker.add((delta) => {
    score += 0.1;
    scoreText.text = 'Score: ' + Math.floor(score);
  
    player.vy += 0.5;
    player.y += player.vy;
    player.x += player.vx;
  
    if (player.y > app.screen.height - player.height / 2) {
      player.y = app.screen.height - player.height / 2;
      player.vy = 0;
      isJumping = false;
    }
  
    if (player.x < player.width / 2) {
      player.x = player.width / 2;
    } else if (player.x > app.screen.width - player.width / 2) {
      player.x = app.screen.width - player.width / 2;
    }
  
    obstacles.forEach((obstacle) => {
      obstacle.x -= 5;
      if (obstacle.x + obstacle.width < 0) {
        app.stage.removeChild(obstacle);
        obstacles.splice(obstacles.indexOf(obstacle), 1);
      }
      if (player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y < obstacle.y + obstacle.height &&
          player.y + player.height > obstacle.y) {
        gameOver();
      }
    });
  
    if (obstacles.length < 1) {
      const obstacleTexture = PIXI.Texture.from('spike.png');
      const obstacle = new PIXI.Sprite(obstacleTexture);
      obstacle.anchor.set(0.5);
      obstacle.x = app.screen.width + Math.random() * 400;
      obstacle.y = app.screen.height - obstacle.height / 2;
      app.stage.addChild(obstacle);
      obstacles.push(obstacle);
    }
  });
  
  function jump() {
    if (!isJumping) {
      player.vy = -20;
      isJumping = true;
    }
  }
  
  function startGame() {
    app.ticker.start();
  }
  
  function restartGame() {
    location.reload();
  }
  
  function gameOver() {
    app.ticker.stop();
    const gameOverText = new PIXI.Text('Score: ' + Math.floor(score) + '\nPress Jump to Restart', { fontFamily: 'Arial', fontSize: 36, fill: 0xffffff, align: 'center' });
    gameOverText.anchor.set(0.5);
    gameOverText.x = app.screen.width / 2;
    gameOverText.y = app.screen.height / 2;
    app.stage.addChild(gameOverText);
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        restartGame();
      }
    });
  }
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      if (!app.ticker.started) {
        startGame();
      } else {
        jump();
      }
    }
  });