document.addEventListener("DOMContentLoaded", function() {
  const companyLogoElement = document.getElementById('companyLogo');
  
  setTimeout(() => {
    companyLogoElement.style.opacity = 0;
    
  }, 3000);
});

var grp = document.getElementById("grpLogo");

setTimeout(() => {
  grp.style.display = 'block';
}, 3000);
setTimeout(() => {
  grp.style.display = 'none';
}, 6000);


setTimeout(() => {
  slider.style.display = 'block';
  PrevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
},6000)

const slider = document.getElementById('slider');
const slides = document.getElementById('slides');
const PrevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderButton = document.getElementById('slider-button');

let slideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  const translateValue = -index * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % 3;
  showSlide(slideIndex);
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function prevSlide() {
  console.log('running');
  slideIndex = (slideIndex - 1 + 3) % 3;
  showSlide(slideIndex);
}

PrevBtn.addEventListener('click', function() {
  console.log('clicked');
  prevSlide();
  stopAutoSlide();
});

nextBtn.addEventListener('click', function() {
  console.log('clicked')
  nextSlide();
  stopAutoSlide();
});

autoSlideInterval = setInterval(nextSlide, 3000);


$(document).ready(function() {
  var startButton = $("#startButton");
  var startlevel = $("#level");
  const canvas = document.querySelector('#my-canvas')
  const c = canvas.getContext('2d')

  var homepage = document.getElementById("homepage");
  

 
  setTimeout(() => {
    homepage.style.display = 'block';
  }, 6000);

  
  startButton.click(function() {
    hideHomepage();
    startCanvasGame();
  });

  startlevel.click(function() {
    hideHomepage();
    showlevel();
  })

  let aagam=0;
  const resumeBtn = document.getElementById('resumeBtn');
  const homeBtn = document.getElementById('homeBtn');
  const restartBtn = document.getElementById('restartBtn');
  const scoreBoard = document.getElementById('scoreBoard');

  const gameOverBox = document.getElementById('gameOverBox');
  const homeBtn1 = document.getElementById('homeBtn1');
  const restartBtn1 = document.getElementById('restartBtn1');
  const gameOverDistance = document.getElementById('gameOverDistance');

  const l1 = document.getElementById('l1');
  const l2 = document.getElementById('l2');
  const l3 = document.getElementById('l3');
  const l4 = document.getElementById('l4');
  const l5 = document.getElementById('l5');
  const l6 = document.getElementById('l6');
  const l7 = document.getElementById('l7');
  const l8 = document.getElementById('l8');
  const l9 = document.getElementById('l9');
  const l10 = document.getElementById('l10');
  const l11 = document.getElementById('l11');
  const l12 = document.getElementById('l12');


  function hideHomepage() {
    homepage.style.display = "none";
  }
  function showlevel()  {
    main.style.display = "block";

    document.getElementById('row1').style.display = 'block';
    document.getElementById('row2').style.display = 'block';
    document.getElementById('row3').style.display = 'block';
    title.style.display = "block";

    l1.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=1;
      console.log(aagam);
      startCanvasGame();
    });

    l2.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=2;
      console.log(aagam);
      startCanvasGame();
    });
    l3.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=3;
      console.log(aagam);
      startCanvasGame();
    });
    l4.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=4;
      console.log(aagam);
      startCanvasGame();
    });
    l5.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=5;
      console.log(aagam);
      startCanvasGame();
    });
    l6.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=6;
      console.log(aagam);
      startCanvasGame();
    });
    l7.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=7;
      console.log(aagam);
      startCanvasGame();
    });
    l8.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=8;
      console.log(aagam);
      startCanvasGame();
    });
    l9.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=9;
      console.log(aagam);
      startCanvasGame();
    });
    l10.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=10;
      console.log(aagam);
      startCanvasGame();
    });
    l11.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=11;
      console.log(aagam);
      startCanvasGame();
    });
    l12.addEventListener('click', function () {
      main.style.display = "none";
      document.getElementById('row1').style.display = 'none';
      document.getElementById('row2').style.display = 'none';
      document.getElementById('row3').style.display = 'none';
      aagam=12;
      console.log(aagam);
      startCanvasGame();
    });

  }

function startCanvasGame() {
const gravity = 0.3

canvas.width=innerWidth
canvas.height=innerHeight

let a=0;
if(slideIndex==0)
{
a=0;

document.body.style.backgroundImage = "url('X:\pro/ice1.jpg')";
document.body.style.backgroundSize = '1600px 900px';
}
else if(slideIndex==1)
{
a=1;
document.body.style.backgroundImage = "url('X:\pro/lava1.jpg')";
document.body.style.backgroundSize = '1600px 900px';
}
else if(slideIndex==2)
{
a=2;
document.body.style.backgroundImage = "url('X:\pro/space.jpg')";
document.body.style.backgroundSize = '1600px 900px';

}
class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
    this.alpha = 1; // Particle opacity
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.02; // Reduce opacity over time
  }

  draw() {
    c.globalAlpha = this.alpha;
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    c.closePath();
    c.fill();
    c.globalAlpha = 1; // Reset global alpha
  }

  isFaded() {
    return this.alpha <= 0;
  }
}

class Fireball {
  constructor(x,y) {
    this.x = x
    this.y = y 
    this.particles = [];

  }

  explode() {
    // Create a burst of particles
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1; // Random speed between 1 and 4
      const size = Math.random() * 3 + 1; // Random size between 1 and 4
      const color = `rgba(255, ${Math.random() * 50}, 0, 1)`;

      const particle = new Particle(this.x, this.y, size, color, Math.cos(angle) * speed, Math.sin(angle) * speed);
      this.particles.push(particle);
    }
  }

  update() {
    // Update particles
    this.particles.forEach(particle => particle.update());

    // Remove faded particles
    this.particles = this.particles.filter(particle => !particle.isFaded());
  }

  draw() {
    // Draw particles
    this.particles.forEach(particle => particle.draw());
  }
}

class player {
  constructor(){
    this.position = {
        x:200,
        y:200
    }
    this.valocity={
        x:0,
        y:1
    }

    this.width  = 50
    this.width1=4
    this.height = 50

    this.isExploding = false;
        this.explosion;

   
  }

  

  draw()
  {

    
    c.fillStyle = 'black'
    c.fillRect(this.position.x, this.position.y , this.width , this.height)

    //want to make a circle in square
    c.beginPath();
    c.arc(this.position.x + 40, this.position.y +10, this.width1, 0, Math.PI * 2);
    c.fillStyle = 'white';
    c.fill();
    c.closePath();

    if (this.isExploding) {
      this.explosion.draw();
    } 

  }
  explode(x,y) {
    p.position.x = x-10000;
    p.position.y = y-10000;
    this.explosion= new Fireball(x,y);
    this.isExploding = true;
    
    this.explosion.explode();
  }

  update(){
   
    this.draw()
     this.position.y += this.valocity.y
     this.position.x += this.valocity.x

     if(this.position.y + this.height + this.valocity.y <=canvas.height)
     this.valocity.y += gravity
     if (this.isExploding) {
      this.explosion.update();
      if (this.explosion.particles.length === 0) {
        this.isExploding = false;
      }
    }
    
    

  }
}

class platform {
  constructor(x, y, width, height,ima) {
  
    this.position = { x, y };
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.ima1='X:\pro/iceland.jpg';
    this.ima2='X:\pro/lavaland.png';
    this.ima3='X:\pro/spaceland.png';
    if(a==0)
    {
      this.image.src = this.ima1;
    }
    else if(a==1)
    {
      this.image.src = this.ima2;
    }
    else if(a==2)
    {
      this.image.src = this.ima3;
    }
    
  }

  draw() {
    c.fillStyle = 'black';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.jay();
  }
  jay(){
    c.save();

    // Set the desired opacity (between 0 and 1)
    const opacity = 0.5; // You can adjust this value
    c.globalAlpha = opacity;

    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    c.restore();
  }
}

  let p = new player()
  const platformImageSrc = 'X:\pro/lavaland.png'; 
let totalDistance = 0;
const pls = [];

function generateRandomPlatform(startX, endX) {
  
  const minWidth = 200;
  const maxWidth = 400;
  const minHeight = 50;
  const maxHeight = 500;

  const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  const x = Math.floor(Math.random() * (endX - startX - width + 1)) + startX;
  const y = canvas.height - height;

  return new platform(x, y, width, height,platformImageSrc);
  
}


function initializePlatforms() {
  
  // Generate initial ground platform with increased height
  pls.push(new platform(0, canvas.height - 50, 1000000, 50, '#008000')); // Set endless width

  // Generate additional platforms above the ground
  const groundPlatform = pls[0];
  for (let i = groundPlatform.position.x; i < groundPlatform.position.x + groundPlatform.width; i += 200) {
    pls.push(generateRandomPlatform(i, i + 200));
  }
  pls.forEach(pl => pl.draw());
  
}

const triangleImageSrc = ['X:\pro/icetri.png', 'X:\pro/lavatri.png', 'X:\pro/spacetri.png'];
class Triangle {
  
  constructor(x, y, size,ima) {
    
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = `black`;
    this.image = new Image();
    this.image.src = ima;
  }

  draw() {
    
   
    const { x, y, size, color } = this;
    pls.push(new platform(x-100,y,200,5000,'#008000'));
    
    

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + size, y);
    c.lineTo(x + size / 2, y - size);
    c.closePath();

    c.fillStyle = color;
    c.fill();
    c.drawImage(this.image, x, y - size, size, size); 
  }
}

const tris = [
                new Triangle(1000, 500, 45,triangleImageSrc[a]),
                
];
class Eye {
  constructor(x, y, size, color) {
    this.position = { x, y };
    this.size = size;
    this.color = color;
  }

  draw() {
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
    c.fill();
  }
}
function draw1() {
  
  
  // Draw platforms
  pls.forEach(platform => {
    platform.draw();
  });
  
  tris.forEach(Triangle => {
    Triangle.draw();
  });
  
  enemys.forEach(enemy => {
    enemy.draw();
  })
       projectiles.forEach(projectile => {
         projectile.draw();
       });
}


function update1() {

  // enemy.update();
  enemys.forEach(enemy => {
    enemy.update();
  })
}
  
  const keys = {
  
    right:{pressed:false},
    left:{pressed:false},
    jump:{pressed:false}
  }
  let isPaused = false;
  
  

  const projectiles = [];

  
  const enemyImageSrc = [
    'X:\pro/iceenemy.png',
    'X:\pro/lavaenemy.png',
    'X:\pro/spaceenemy.png',
    // Add more image paths as needed
  ];
class Bullet {
  constructor(x, y, width, height, color, velocityX, velocityY) {
    this.position = { x, y };
    this.width = width;
    this.height = height;
    this.color = color;
    
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.particles = [];
    this.image = new Image();
    this.ima1='X:\pro/icebullet.png';
    this.ima2='X:\pro/lavabullet.png';
    this.ima3='X:\pro/spacebullet.png';
    if(a==0)
    {
      this.image.src = this.ima1;
    
    }
    else if(a==1)
    {
      this.image.src = this.ima2;
    }
    else if(a==2)
    {
      this.image.src = this.ima3;
    }
  }

  draw() {
    
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height+10);
    c.drawImage(
      this.image,
      this.position.x-20,
      this.position.y-20,
      this.width+40,
      this.height+40
    )
  }

  update() {
    this.position.x += this.velocityX;
    this.position.y += this.velocityY;

    if(p.position.x < this.position.x + 20 &&
      p.position.x + p.width > this.position.x &&
      p.position.y < this.position.y + 40 &&
      p.position.y + p.height > this.position.y)
       {
      p.explode(p.position.x + p.width / 2, p.position.y + p.height / 2);
        showGameOverBox(totalDistance)
      }
      pls.forEach((pl)=>{
        if(pl.position.x < this.position.x + 2 &&
          pl.position.x + pl.width > this.position.x &&
          pl.position.y < this.position.y + 40 &&
          pl.position.y + pl.height > this.position.y)
          {
            this.position.x=this.position.x-10000
            this.position.y=this.position.y-10000
          }
      })
      
  }
}
class Enemy {
  constructor(x, y, width, height, color, visionRange, visionAngle, moveDistance,ima) {
    this.position = { x, y };
    this.width = width;
    this.height = height;
    this.color = color;
    this.visionRange = 650;
    this.image = new Image() ;
    this.image.src = ima;
    this.visionAngle = visionAngle; // Angle in radians
    this.moveDistance = moveDistance;
    this.direction = 1; // 1 for right, -1 for left
    this.bullets = [];
    this.playerLastPosition = { x: 0, y: 0 };
    this.lastShootTime = Date.now();
    this.shootDelay = 3000; // Set the delay between bullets in milliseconds (3 seconds in this case)
    this.radius= 40
    this.eyeRadius = 8
     this. eyeOffsetY= 20
      this.eyeOffsetX= 5
      this.eyeColor= '#FF0000'
      this.eyebrowHeight= 5

  }

  shoot() {
    const currentTime = Date.now();
    
    // Check if enough time has passed since the last shot
    if (currentTime - this.lastShootTime >= this.shootDelay) {
      const dxPlayer = this.playerLastPosition.x - (this.position.x + this.width / 2);
      const dyPlayer = this.playerLastPosition.y - (this.position.y + this.height / 2);
      const anglePlayer = Math.atan2(dyPlayer, dxPlayer);
      const bulletSpeed = 5; // You can adjust the bullet speed

      const newBullet = new Bullet(
        this.position.x + this.width / 2,
        this.position.y + this.height / 2,
        10,
        5,
        'red', // Yellow color for bullets
        bulletSpeed * Math.cos(anglePlayer), // X component of velocity
        bulletSpeed * Math.sin(anglePlayer)  // Y component of velocity
      );

      this.bullets.push(newBullet);
      this.lastShootTime = currentTime; // Update the last shoot time
    }
  }

  update() {
    // Move the enemy within a specific distance
    this.position.x += 2 * this.direction;

    // Check if the player is within the vision range and angle
    const playerCenterX = p.position.x + p.width / 2;
    const playerCenterY = p.position.y + p.height / 2;
    this.playerLastPosition = { x: playerCenterX, y: playerCenterY };

    const dxPlayer = playerCenterX - (this.position.x + this.width / 2);
    const dyPlayer = playerCenterY - (this.position.y + this.height / 2);
    const anglePlayer = Math.atan2(dyPlayer, dxPlayer);
    const distancePlayer = Math.sqrt(dxPlayer * dxPlayer + dyPlayer * dyPlayer);
    const angleDiffPlayer = Math.abs(anglePlayer - Math.PI / 2); // Angle difference with the forward direction
   
    if (this.position.x <= this.moveDistance[0] || this.position.x >= this.moveDistance[1]) {
      this.direction *= -1; // Reverse direction
    }
    
    // console.log(this.visionRange);
    if (distancePlayer < this.visionRange ) {
      // Player is within vision range, and platform is in range
      if (angleDiffPlayer < this.visionAngle / 2) {
        // Player is within the angle of vision, shoot
        if(p.width1==0)
        {
        
        }
        else
        {
          this.shoot();
        }
      }
    }

    // Update bullets
    this.bullets.forEach(bullet => bullet.update());

    // Remove bullets that go off-screen
    this.bullets = this.bullets.filter(bullet => bullet.position.x < canvas.width && bullet.position.x > 0);

    // Change direction when reaching the boundaries
    if ( this.position.x > 100 + this.moveDistance) {
      this.direction *= -1;
    }
  }

  draw() {
  
       // Draw the filled arc for the light cone
       c.fillStyle = 'rgba(255, 255, 0, 0.2)';
       c.beginPath();
       c.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
       c.arc(
         this.position.x + this.width / 2,
         this.position.y + this.height / 2,
         this.visionRange,
         Math.PI / 2 - this.visionAngle / 2, // Start from the top
         Math.PI / 2 + this.visionAngle / 2  // End at the bottom
       );
       c.closePath();
       c.fill();
       c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    
    // Draw bullets
    this.bullets.forEach(bullet => bullet.draw());
  }
}

let  enemys =[ 
          
          new Enemy(1800, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [1800, 2400],enemyImageSrc[a]),
          new Enemy(3500, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [3500, 4300],enemyImageSrc[a]),
          new Enemy(5800, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [5800, 6400],enemyImageSrc[a]),
          new Enemy(8000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [8000, 8800],enemyImageSrc[a]),
          new Enemy(10000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [10000, 10800],enemyImageSrc[a]),
          new Enemy(12000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [12000, 12800],enemyImageSrc[a]),
          new Enemy(15000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [15000, 15800],enemyImageSrc[a]),
          new Enemy(17000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [17000, 17800],enemyImageSrc[a]),
          new Enemy(20000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [20000, 20800],enemyImageSrc[a]),
          new Enemy(23000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [23000, 23800],enemyImageSrc[a]),
          new Enemy(25000, 50, 150, 50, '#FF0000', 300, Math.PI / 1.5, [25000, 25800],enemyImageSrc[a]),
          new Enemy(28000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [28000, 28800],enemyImageSrc[a]),
          new Enemy(30000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [30000, 30800],enemyImageSrc[a]),
          new Enemy(32000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [32000, 32800],enemyImageSrc[a]),
          new Enemy(34000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [34000, 34800],enemyImageSrc[a]),
          new Enemy(36000, 50, 150, 150, '#FF0000', 300, Math.PI / 1.5, [36000, 36800],enemyImageSrc[a]),
        ]

function init()
{
 p = new player()
//const pl=new platform()
 pls=[
  new platform({x:0,
                y:640,
              width:3500,
              height:100
            }),
  new platform({x:0,
                y:0,
              width:100,
              height:1000}),
  new platform({x:100,
                y:550,
              width:250,
              height:300}),
  new platform({x:1500,
                y:550,
              width:1200,
              height:300}),
  new platform({x:1700,
                y:450,
              width:850,
              height:300}),
  new platform({x:1900,
                y:350,
              width:500,
              height:300}),

  new platform({x:3000,
                y:550,
              width:100,
              height:100}), 
  new platform({x:3800,
                y:640,
              width:3500,
              height:100
            }),     
  new platform({x:3200,
              y:550,
            width:180,
            height:400
          }),
  new platform({x:4000,
            y:550,
          width:180,
          height:400
        }),
  new platform({x:4500,
          y:550,
        width:930,
        height:400}),
  new platform({x:4700,
          y:450,
        width:600,
        height:400}),
  new platform({x:4880,
          y:250,
        width:250,
        height:400}),
  new platform({x:5500,
          y:550,
        width:230,
        height:400}),
          ]

}

function showGameOverBox(distance) {
  gameOverDistance.textContent = `Distance Covered: ${distance} units`;
  gameOverBox.style.display = 'block';
}

homeBtn1.addEventListener('click', function () {
  // Implement home button functionality
  console.log('Home button clicked');
  hidegameBox();
  homepage.style.display = "block";
  gameOverBox.style.display = 'none';
  totalDistance = 0;
  cancelAnimationFrame(animationId);
  slider.style.display = 'block';
  canvas.height = 2;
  canvas.width = 2;
});

restartBtn1.addEventListener('click', function () {
  // Implement restart button functionality
  console.log('Restart button clicked');
  gameOverBox.style.display = 'none';
  hidegameBox();
  totalDistance = 0;
  
startCanvasGame();
  });
  
homeBtn.addEventListener('click', function () {
  // Implement home button functionality
  console.log('Home button clicked');
  homepage.style.display = "block";
  gameOverBox.style.display = 'none';
  hidePauseBox();
  hidegameBox();
  totalDistance = 0;
  cancelAnimationFrame(animationId);
  slider.style.display = 'block';
  canvas.height = 2;
  canvas.width = 2;
});
 // Change 10 to your desired number of fires
 function togglePause() {
  isPaused = !isPaused;

  if (isPaused) {
    pauseGame();
    showPauseBox();
  } else {
    resumeGame();
    hidePauseBox();
  }
}
function showwinBox() {
  winningBox.style.display = 'block';
}
function pauseGame() {
  // Pause any game-related logic here
}
nextBtn.addEventListener('click', function () {
  winningBox.style.display = 'none';
  aagam++;
  totalDistance = 0;
  startCanvasGame();
});
function resumeGame() {
  // Resume any game-related logic here
}

function showPauseBox() {
  pauseBox.style.display = 'block';
}

function hidePauseBox() {
  pauseBox.style.display = 'none';
}

// Event listeners for box buttons
resumeBtn.addEventListener('click', function () {
  togglePause();
});



restartBtn.addEventListener('click', function () {
  // Implement restart button functionality
  console.log('Restart button clicked');
  gameOverBox.style.display = 'none';
  hidePauseBox();
  hidegameBox();
  totalDistance = 0;
  startCanvasGame();
  });
  function hidegameBox() {
    gameOverBox.style.display = 'none';
  }

  
  

    homeBtn2.addEventListener('click', function () {
      // Implement home button functionality
      console.log('Home button clicked');
      winningBox.style.display = 'none';
      homepage.style.display = "block";
      totalDistance = 0;
      startCanvasGame();  
      
    
    });
    restartBtn2.addEventListener('click', function () {
      // Implement restart button functionality
      console.log('Restart button clicked');
      winningBox.style.display = 'none';
      totalDistance = 0;
      
  startCanvasGame();
      });
 

let scrolloffset = 0
function animation()
{

  animationId= requestAnimationFrame(animation)
  c.clearRect(0, 0, canvas.width, canvas.height) 
  
  p.draw()
  p.update()
  draw1()
  update1()

  if(keys.right.pressed && p.position.x < 400)
  {
    p.valocity.x = 10
  }
  else if (keys.left.pressed && p.position.x > 100)
  {
    p.valocity.x = -5
  }
  else 
  {
    p.valocity.x=0
  }

  if(keys.right.pressed)
  {
    
    totalDistance += 2;
    scoreBoard.innerText = `Distance: ${totalDistance.toFixed(2)} units`;

        // Add fade-in animation to the scoreboard
        scoreBoard.style.opacity = 1;
  }

  switch(aagam)
  {
    case 1:
          if(totalDistance === 1000)
          {
            showwinBox();
          }
          break;
    case 2:
          if(totalDistance === 2000)
          {
            showwinBox();
          }
          break;
    case 3:
          if(totalDistance === 3000)
          {
            showwinBox();
          }
          break;
    case 4:
          if(totalDistance === 4000)
          {
            showwinBox();
          }
          break;
    case 5:
          if(totalDistance === 5000)
          {
            showwinBox();
          }
          break;
    case 6:
          if(totalDistance === 6000)
          {
            showwinBox();
          }
          break;
    case 7:
          if(totalDistance === 7000)
          {
            showwinBox();
          }
          break;
    case 8:
          if(totalDistance === 8000)
          {
            showwinBox();
          }
          break;
    case 9:
          if(totalDistance === 9000)  
          {
            showwinBox();
          }
          break;
    case 10:
          if(totalDistance === 10000)
          {
            showwinBox();
          }
          break;
    case 11:
          if(totalDistance === 11000)
          {
            showwinBox();
          }
          break;
    case 12:
          if(totalDistance === 12000)
          {
            showwinBox();
          }
          break;
  }
  tris.forEach(tri => {
    if(p.position.x < tri.x + tri.size &&
    p.position.x + p.width > tri.x &&
    p.position.y < tri.y &&
    p.position.y + p.height > tri.y - tri.size)
    {
      p.explode(p.position.x + p.width / 2, p.position.y + p.height / 2);
      showGameOverBox(totalDistance);  
    }
  });


  if(keys.right.pressed)
  {
    scrolloffset += 5
    enemys.forEach((enemy) =>
     {enemy.position.x -= 2
      enemy.moveDistance[0] -= 2
      enemy.moveDistance[1] -= 2})
    
    pls.forEach((pl) =>
     { pl.position.x -= 5})

     tris.forEach((tri)=>
     {tri.x -=5})
      
   
  }
  else if(keys.left.pressed)
  {
    scrolloffset -= 5
    pls.forEach((pl) => 
    {pl.position.x += 5})

    enemys.forEach((enemy) =>
     {enemy.position.x += 2
      enemy.moveDistance[0] += 2
      enemy.moveDistance[1] += 2})
     tris.forEach((tri)=>
     {tri.x +=5})
  }
  

 
  pls.forEach((pl) =>
  { 
    
  //upar stand ke liye
  if(p.position.y + p.height <= pl.position.y 
    && p.position.y + p.height + p.valocity.y >= pl.position.y
    && p.position.x + p.width >= pl.position.x
    && p.position.x <= pl.position.x + pl.width)
  {
    p.valocity.y = 0
    
  }
if(keys.left.pressed)
  {
  
    if (
      p.position.x + p.width > pl.position.x &&
      p.position.x < pl.position.x + pl.width &&
      p.position.y + p.height > pl.position.y
      ) 
      {
       p.position.x = pl.position.x + pl.width
      
       p.width1=0
      }
    }

    if(keys.right.pressed)
    {
   if (
    p.position.x < pl.position.x + pl.width &&
    p.position.x + p.width > pl.position.x &&
    p.position.y < pl.position.y + pl.height &&
    p.position.y + p.height > pl.position.y
    ) {
     
      p.position.x = pl.position.x-50
    
      p.width1=0
      }
    }
   })

  if(p.position.y > canvas.height)
  {
    
    showGameOverBox(totalDistance);
    
  }


}
initializePlatforms()
animation()


addEventListener('keydown',({keyCode}) => {

  
  switch (keyCode)
  {
    case 37:
      
      keys.left.pressed = true
      p.width1=4


      break
    case 39:
      
      keys.right.pressed = true
        p.width1=4
      break

    case 38:
      
          keys.jump.pressed = true
          
          p.valocity.y -= 10
          p.width1=4
          break
    case 27:
      
        togglePause();
        break
    
  }
})

addEventListener('keyup',({keyCode}) => {

  switch (keyCode)
  {
    case 37:
      
      keys.left.pressed = false
      break
    case 39:
      
      keys.right.pressed = false
        break

    case 38:
      
        keys.jump.pressed = false
        p.valocity.y = 0
       
      
        break
  
  }
})
}
});