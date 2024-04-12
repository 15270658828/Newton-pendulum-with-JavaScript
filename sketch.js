// 导入 Matter.js 的必要模块
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// 声明所有变量
let engine, world;
let bob1, bob2, bob3, bob4, bob5;
let roofObject;
let rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  // 创建屋顶对象
  roofObject = new roof(400, 250, 230, 20);

  // 创建五个小球，第一个小球的质量是其他小球的两倍
  bob1 = new bob(320, 500, 40, {density: 0.01}); // 使用修改后的构造函数，为第一个小球增加密度
  bob2 = new bob(360, 500, 40);
  bob3 = new bob(400, 500, 40);
  bob4 = new bob(440, 500, 40);
  bob5 = new bob(480, 500, 40);

  // 创建绳子对象，连接小球和屋顶
  rope1 = new rope(bob1.body, roofObject.body, -80, 0);
  rope2 = new rope(bob2.body, roofObject.body, -40, 0);
  rope3 = new rope(bob3.body, roofObject.body, 0, 0);
  rope4 = new rope(bob4.body, roofObject.body, 40, 0);
  rope5 = new rope(bob5.body, roofObject.body, 80, 0);

  Engine.run(engine);
}

function draw() {
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

// 在按下向上的箭头键时，对第一个小球应用一个向左的力
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -0.5, y: 0});
  }
}
