class Clock {
  constructor() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
    this.lastUpdateTime = 0;
  }

  // Démarrer ou reprendre le temps
  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = Date.now() - this.elapsedTime;
      this.lastUpdateTime = this.startTime;
    }
  }

  // Mettre le jeu en pause
  pause() {
    if (this.isRunning) {
      this.isRunning = false;
      this.elapsedTime = Date.now() - this.startTime;
    }
  }

  // Réinitialiser le temps
  reset() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  // Obtenir le temps écoulé en millisecondes
  getElapsedTime() {
    if (this.isRunning) {
      this.elapsedTime = Date.now() - this.startTime;
    }
    return this.elapsedTime;
  }

  // Mettre à jour le temps (à appeler dans la boucle de jeu)
  update() {
    if (this.isRunning) {
      const currentTime = Date.now();
      const deltaTime = currentTime - this.lastUpdateTime;
      this.lastUpdateTime = currentTime;
      return deltaTime;
    }
    return 0;
  }
}
