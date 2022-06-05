import Phaser from 'phaser';
import EndScene from './scenes/EndScene';
import GameScene from './scenes/GameScene'

import MainMenuScene from './scenes/MainMenuScene'
import Map0Scene from './scenes/Map0Scene';
import { FULLHEIGHT, FULLWIDTH } from './util/scaleConstants';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: FULLWIDTH,
	height: FULLHEIGHT,
	scene: [MainMenuScene, GameScene, EndScene, Map0Scene]
}

export default new Phaser.Game(config);
