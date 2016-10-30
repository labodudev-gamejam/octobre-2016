/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnOrderManager {
  public jsonLevel: any = undefined;
	private spriteGenerator: SpriteGenerator = new SpriteGenerator();

  constructor(public spriteManager: SpriteManager, public orderManager: OrderManager, public pathToJson: string) {
    Data.JSONLoader.Exec(pathToJson, (data: Array<any>) => {
      this.jsonLevel = data;
    });
  }


  Exec(currentTime: number): void {
    // Traite la queue
    if (this.jsonLevel[currentTime]) {
      for (var key in this.jsonLevel[currentTime]) {
        for (var x in this.jsonLevel[currentTime][key]) {
          this.orderManager.Add(new Order(currentTime, this.jsonLevel[currentTime][key][x], Data.Ressources.RandomPosOrder()));

    			for (var i in this.jsonLevel[currentTime][key][x]) {
    				let spriteMovable = this.spriteGenerator.Exec(this.jsonLevel[currentTime][key][x][i]);

    				if (!spriteMovable) { // C'est un corps
              let posBody: any = Data.Ressources.RandomPosBody();
    					let spriteClickable = new SpriteClickable(undefined, global.size.width / 2 + posBody.x, global.size.height + posBody.y, Data.Ressources.bodies[this.jsonLevel[currentTime][key][x][i]], "body", this.jsonLevel[currentTime][key][x][i]);
              spriteClickable.angle = posBody.angle;
              spriteClickable.SetSpriteManager(this.spriteManager);
              this.spriteManager.Add(spriteClickable);
            }
            else {
              spriteMovable.SetSpriteManager(this.spriteManager);
              this.spriteManager.Add(spriteMovable);
            }
          }
  			}
      }
    }
  }

  Clear():void {
    delete this.jsonLevel;
    this.spriteGenerator.Clear();
    delete this.spriteGenerator;
  }
}