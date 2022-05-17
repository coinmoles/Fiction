import Phaser, { Game } from 'phaser'
import GameScene from './scenes/GameScene'

import MainMenuScene from './scenes/MainMenuScene'
import { HEIGHT, WIDTH } from './util/constants'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: WIDTH,
	height: HEIGHT,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MainMenuScene, GameScene]
}

console.log(WIDTH, HEIGHT);
export default new Phaser.Game(config)
