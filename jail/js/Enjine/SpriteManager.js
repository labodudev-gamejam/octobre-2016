var SpriteManager = (function () {
    function SpriteManager() {
        this.listSprite = { "body": [], "head": [], "leg": [], "arml": [], "armr": [], "button": [], "staticImage": [], "clickableImage": [] };
        this.numberSprite = 0;
    }
    SpriteManager.prototype.Init = function () {
    };
    SpriteManager.prototype.Update = function () {
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Update();
                if (this.listSprite[type][key] && this.listSprite[type][key].type && this.listSprite[type][key].type == "body" && this.listSprite[type][key].ClickIn()) {
                    var keyElement = this.listSprite[type][key];
                    this.Remove(this.listSprite[type][key]);
                    return keyElement.name;
                }
            }
        }
        return undefined;
    };
    SpriteManager.prototype.Draw = function (context) {
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Draw(context);
            }
        }
    };
    SpriteManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.numberSprite++;
            this.listSprite[sprite.type].push(sprite);
        }
    };
    SpriteManager.prototype.Remove = function (sprite) {
        for (var type in this.listSprite) {
            for (var i = 0; i < this.listSprite[type].length; i++) {
                if (this.listSprite[type][i] == sprite) {
                    this.listSprite[type].splice(i, 1);
                    this.numberSprite--;
                }
            }
        }
    };
    SpriteManager.prototype.Clear = function () {
    };
    SpriteManager.prototype.Resize = function () {
        for (var i = 0; i < this.listSprite["body"].length; i++) {
            this.listSprite["body"][i].Resize();
        }
    };
    return SpriteManager;
}());
//# sourceMappingURL=SpriteManager.js.map