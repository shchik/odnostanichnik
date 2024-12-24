const CHARACTERS = "123456789";

export class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.context = context;
    this.lastUpdateTime = 15; // Время последнего обновления
    this.updateDelay = 45; // Задержка между обновлениями в миллисекундах
  }

  drawSymbol() {
    const currentTime = performance.now();
    if (currentTime - this.lastUpdateTime < this.updateDelay) {
      return; // Пропускаем обновление, если не прошло достаточно времени
    }

    this.lastUpdateTime = currentTime;

    if (this.y === 0 && Math.random() < 0.92) {
      return;
    }

    const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
    const symbol = CHARACTERS[characterIndex];

    this.context.fillText(symbol, this.x, this.y);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}
