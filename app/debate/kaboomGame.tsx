import React, { useEffect } from 'react';
import kaboom from 'kaboom';

const GameComponent: React.FC = () => {
  useEffect(() => {
    // Initialize kaboom
    const k = kaboom();

    // Game logic
    k.scene('main', () => {
      // Add a player character
      const player = k.add([
        k.sprite('player'),
        k.pos(12, 12),
        k.scale(1),
        k.origin('center'),
        k.color(0, 0, 1),
      ]);

      // Move player with arrow keys
      k.keyPress('left', () => {
        player.move(-50, 0);
      });
      k.keyPress('right', () => {
        player.move(50, 0);
      });
      k.keyPress('up', () => {
        player.move(0, -50);
      });
      k.keyPress('down', () => {
        player.move(0, 50);
      });
    });

    // Start the game scene
    // TODO;
  }, []);

  return <canvas id="game-canvas" width={400} height={300}></canvas>;
};

export default kaboomGame;