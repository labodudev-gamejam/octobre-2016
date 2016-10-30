/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteManager {
  listSprite: any = {"body": [], "head": [], "leg": [], "arml": [], "armr": [], "button": [], "staticImage": [], "clickableImage": []};
  numberSprite: number = 0;
  constructor() {}

  protected Init():void {

  }

  public Update():string {
    for (var type in this.listSprite) {
      for (var key in this.listSprite[type]) {
        this.listSprite[type][key].Update();

				if (this.listSprite[type][key] && this.listSprite[type][key].type && this.listSprite[type][key].type == "body" && this.listSprite[type][key].ClickIn()) {
          let keyElement: any = this.listSprite[type][key];
          this.Remove(this.listSprite[type][key]);
					return keyElement.name;
				}
		  }
    }

		return undefined;
  }

  public Draw(context: any):void {
    for (var type in this.listSprite) {
      for (var key in this.listSprite[type]) {
        this.listSprite[type][key].Draw(context);
      }
    }
  }

  Add(sprite: Sprite): void {
		if (sprite) {
      this.numberSprite++;
	    this.listSprite[sprite.type].push(sprite);
		}
  }

  Remove(sprite: Sprite): void {
    for (var type in this.listSprite) {
      for (var i = 0; i < this.listSprite[type].length; i++) {
        if (this.listSprite[type][i] == sprite) {
          this.listSprite[type].splice(i, 1);
          this.numberSprite--;
        }
      }
    }
  }

  Clear():void {

  }

  Resize():void {
    for (var i = 0; i < this.listSprite["body"].length; i++) {
        this.listSprite["body"][i].Resize();
    }
  }
}
