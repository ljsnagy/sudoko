import Zepto from 'zepto';
import GameGrid from './gameGrid.js';
import InputController from './inputController.js';

Zepto(function load() {
  var controller = new InputController(document.getElementById('game-controller'));
  var grid = new GameGrid(document.getElementById('game-grid'), controller);

  controller.insert();
});

