window.onload=function(){
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain]
    };

    var game = new Phaser.Game(config);
}