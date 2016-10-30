var Sprite = (function () {
    function Sprite(x, y, zone, type, name) {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.type = type;
        this.name = name;
        this.offset = { x: 0, y: 0 };
        this.colliderPoint = [];
        this.spriteManager = undefined;
        this.scale = {
            x: 1.0,
            y: 1.0
        };
        this.basePos = { x: 0, y: 0 };
        this.basePos.x = x;
        this.basePos.y = y;
        this.Init();
    }
    Sprite.prototype.SetSpriteManager = function (spriteManager) {
        this.spriteManager = spriteManager;
    };
    Sprite.prototype.Init = function () {
        if (this.zone && this.zone.collider) {
            for (var key in this.zone.collider) {
                this.colliderPoint[key] = new ColliderPoint(this.zone.collider[key].x, this.zone.collider[key].y);
            }
        }
    };
    Sprite.prototype.Update = function () {
        for (var key in this.colliderPoint) {
            this.colliderPoint[key].Update(this.x, this.y, 0);
        }
    };
    Sprite.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.scale(this.scale.x, this.scale.y);
        context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2) + this.offset.x, -(this.zone.height / 2) + this.offset.y, this.zone.width, this.zone.height);
        context.restore();
        for (var key in this.colliderPoint) {
            this.colliderPoint[key].Draw(context);
        }
    };
    Sprite.prototype.Clear = function () {
        delete this.colliderPoint;
        delete this.offset;
        delete this.zone;
    };
    Sprite.prototype.SetPos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    Sprite.prototype.AnimateScale = function () {
        var _this = this;
        setInterval(function () { _this.scale = Utils.Animate.Scale(_this.scale); }, 80);
    };
    Sprite.prototype.Resize = function () {
        this.diff = global.lastSize.height - global.size.height;
        this.y = this.basePos.y - this.diff;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map