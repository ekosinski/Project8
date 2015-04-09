
        window.onload = function () {
            // You might want to start with a template that uses GameStates:
            //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic

            // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
            // You will need to change the fourth parameter to "new Phaser.Game()" from
            // 'phaser-example' to 'game', which is the id of the HTML element where we
            // want the game to go.
            // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
            // You will need to change the paths you pass to "game.load.image()" or any other
            // loading functions to reflect where you are putting the assets.
            // All loading functions will typically all be found inside "preload()".

            "use strict";

            // code patterned after the tank example

            //Germ = function (index, game, player) {

            //    var x = game.world.randomX;
            //    var y = game.world.randomY;

            //    this.game = game;
            //    this.health = 3;
            //   this.player = player;
            //    this.alive = true;

            //    this.germ = game.add.sprite(x, y, 'germ');

            //    this.germ.anchor.set(0.5);

            //    this.germ.name = index.toString();
            //    game.physics.enable(this.germ, Phaser.Physics.ARCADE);
            //    this.germ.body.immovable = false;
            //    this.germ.body.collideWorldBounds = true;
            //    this.germ.body.bounce.setTo(1, 1);

            //    this.germ.angle = game.rnd.angle();

            //    game.physics.arcade.velocityFromRotation(this.germ.rotation, 100, this.germ.body.velocity);

            //};

            //Germ.prototype.damage = function () {

            //    this.health -= 1;

            //    if (this.health <= 0) {
            //        this.alive = false;

            //        this.germ.kill();

            //        return true;
            //    }

            //    return false;

            //};

            //Germ.prototype.update = function () {

            //};

            var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

            function preload() {
                game.load.image('corona', 'assets/blue.png');
                game.load.image('corona2','assets/red.png');
                game.load.image('corona3','assets/orange.png');
                game.load.image('corona4','assets/purple.png');
                game.load.image('corona5','assets/green.png');
                game.load.image('corona6','assets/white.png');
                game.load.image('corona7','assets/brown.png');
                game.load.image('corona8','assets/cyan.png');
                game.load.image('corona9','assets/pink.png');
                game.load.image('corona10','assets/yellow.png');
            }

            var emitter;
            var emitter2;
            var emitter3;
            var emitter4;
            var emitter5;
            var emitter6;
            var emitter7;
            var emitter8;
            var emitter9;
            var emitter10;
            

            function create() {

                game.stage.backgroundColor = '#000000';

                emitter = game.add.emitter(game.world.centerX, 500, 200);

                emitter.makeParticles('corona');

                emitter.setRotation(0, 0);
                emitter.setAlpha(0.3, 0.8);
                emitter.setScale(0.5, 1);
                emitter.gravity = -200;

                //  false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
                //  The 5000 value is the lifespan of each particle before it's killed
                emitter.start(false, 5000, 100);

                emitter2 = game.add.emitter(game.world.centerX - 200, 200);
                emitter2.makeParticles('corona2');
                emitter2.setRotation(0,0);
                emitter2.setAlpha(0.3,0.8);
                emitter2.setScale(0.5,1);
                emitter2.gravity = -200;
                emitter2.start(false, 5000, 100);

                emitter3 = game.add.emitter(game.world.centerX + 300, 400);
                emitter3.makeParticles('corona3');
                emitter3.setRotation(0,0);
                emitter3.setAlpha(0.3,0.8);
                emitter3.setScale(0.4,0.9);
                emitter3.gravity = -200;
                emitter3.start(false, 5000, 100);

                emitter4 = game.add.emitter(game.world.centerX - 250, 500);
                emitter4.makeParticles('corona4');
                emitter4.setRotation(0,0);
                emitter4.setAlpha(0.3,0.8);
                emitter4.setScale(0.5,1.1);
                emitter4.gravity = -200;
                emitter4.start(false,5000,100);

                emitter5 = game.add.emitter(game.world.centerX + 50, 300);
                emitter5.makeParticles('corona5');
                emitter5.setRotation(0,0);
                emitter5.setAlpha(0.3,0.8);
                emitter5.setScale(0.4,1);
                emitter5.gravity = -200;
                emitter5.start(false,5000,100);

                emitter6 = game.add.emitter(game.world.centerX + 300, 200);
                emitter6.makeParticles('corona6');
                emitter6.setRotation(0,0);
                emitter6.setAlpha(0.3,0.8);
                emitter6.setScale(0.5,0.9);
                emitter6.gravity = -200;
                emitter6.start(false,5000,100);

                emitter7 = game.add.emitter(game.world.centerX, 200, 200);
                emitter7.makeParticles('corona7');
                emitter7.setRotation(0,0);
                emitter7.setAlpha(0.3,0.8);
                emitter7.setScale(0.4,1);
                emitter7.gravity = - 200;
                emitter7.start(false,5000,100);

                emitter8 = game.add.emitter(game.world.centerX + 310, 500);
                emitter8.makeParticles('corona8');
                emitter8.setRotation(0,0);
                emitter8.setAlpha(0.3,0.8);
                emitter8.setScale(0.4,1);
                emitter8.gravity = -200;
                emitter8.start(false,5000,100);

                emitter9 = game.add.emitter(game.world.centerX - 90, 400, 200);
                emitter9.makeParticles('corona9');
                emitter9.setRotation(0,0);
                emitter9.setAlpha(0.3,0.8);
                emitter9.setScale(0.4,1);
                emitter9.gravity = -200;
                emitter9.start(false,5000,100);

                emitter10 = game.add.emitter(game.world.centerX + 90, 550, 200);
                emitter10.makeParticles('corona10');
                emitter10.setRotation(0,0);
                emitter10.setAlpha(0.3,0.8);
                emitter10.setScale(0.4,1);
                emitter10.gravity = -200;
                emitter10.start(false,5000,100);

            }

            function render() {
                // game.debug.text(emitter.total, 32, 32);
            }


        };