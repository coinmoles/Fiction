import Phaser, { Game } from 'phaser'
import GameScene from './scenes/GameScene'

import MainMenuScene from './scenes/MainMenuScene'
import { FULLHEIGHT, FULLWIDTH } from './util/scaleConstants';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: FULLWIDTH,
	height: FULLHEIGHT,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MainMenuScene, GameScene]
}

export default new Phaser.Game(config)
