/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Level11 extends MainScene {
  constructor() {
    super();
    this.Start();
    this.InitOrder();
    this.timer = new Timer(1000, 120, this);
  }

  public InitOrder() {
    this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-1.json');
  }

  public Spawn(currentTime: number):void {
    this.spawnOrderManager.Exec(currentTime);
  }

  protected DrawChildScene(context: any):void {
    this.orderManager.Draw(context);
  }
}