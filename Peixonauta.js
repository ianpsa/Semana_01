var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:{
        preload: preload,
        create: create,
        update: update
    },
};

var game =  new Phaser.Game(config);

function preload() {
    //faz pré-carregamento das imagens.
    this.load.image('bg', 'assets/bg_azul-claro.png')
    // a imagem original foi editada no photoshop para economizar linhas, pois os assets seriam fixos :)
    this.load.image('logo', 'assets/logo-inteli_azul.png')
    this.load.image('predador', 'assets/Peixes/tubarao.png')
    this.load.image('presa', 'assets/Peixes/baiacu.png')
    //fiz este chão de areia no photoshop.
    this.load.image('areia', 'assets/chao_Areia.png')
}

function create() {
    //adiciona imagens na tela como a logo, background e a alga.
    this.add.image(400, 300, 'bg');
    this.add.image(400, 579, 'areia')
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adiciona assets dinâmicos como a presa e o predador
    presa = this.add.image(300, 300, 'presa').setScale(0.3);

    predador = this.add.image(400, 300, 'predador');
    predador.setFlip(true, false);


};

function update() {
    //adiciona controles do tubarãozin.   
    predador.x = this.input.x;
    predador.y = this.input.y;
  //faz com que a presa siga proporcionalmente o tubarão.
    presa.x = this.input.x*1.3
    presa.y = this.input.y*1.3
    //se a subtração dos valores do eixo x e y forem respectivamente menores ou iguais a 20 e 30
    // então somar 120 ao eixo y da presa (vai para baixo).
    // o tubarão nunca capturará o Baiacu :)
 if(predador.x - presa.x <= 20 && predador.y - presa.y <= 30 ){
    presa.y = this.input.y+120

}
// limita o posicionamento do baiacu até respectivamente 750 no eixo x e 50 no mesmo eixo
if(presa.x >= 750) {
    presa.x = 750
            }
else if(presa.x <= 50){
    presa.x = 50
            }
}

