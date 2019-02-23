var game = new Phaser.game(800, 600, Phaser.AUTO, {preload:preload, create:create, update:update});
var score = 0;
var life = 3;

function preload(){
    game.load.image('sky','assets/sky.png');
    game.load.image('ground','assets/platform.png');
    game.load.image('star','assets/star.png');

    game.load.spritesheet('dude','assets/dude.png',32,48);
    game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0,0,'sky');

    platforms = game.add.physicsGroup();
    platforms.enableBody = true;

    var ground = platforms.create(0,550,'ground');
    ground.scale.setTo(2,2);
    ground.body.immovable = true;

    var ledge = platforms.create(400,400,'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-100,250,'ground');

    var style = {font: "bold 32px Futura", fill;"white"}

    scoreLabel = game.add.text(300,560,"Score",style);
    scoreText = game.add.text(420,560,score,style);
    lifeLable = game.add.text(10,5,"Lives: ",style);
    lifeText = game.add.text(120,2,life,style);
}

function update(){

}