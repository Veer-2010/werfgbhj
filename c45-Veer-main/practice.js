function setup() {
    createCanvas(800, 600);
    background(255);
    // Create two kites, one for each player. 
    kite1 = new Kite();
    kite2 = new Kite();
} function draw() {
    // Update the position of each kite.
    kite1.update();
    kite2.update();
    // Check if the kites collide.
    if (kite1.collidesWith(kite2)) {
        // If the kites collide, stop the game. 
        noLoop();
        // Display a message indicating which player won. 
        if (kite1.score > kite2.score) {
            text("Player 1 wins!", 200, 200);
        }
        else { text("Player 2 wins!", 200, 200); }
    } // Draw the kites.
    kite1.draw();
    kite2.draw();
} class Kite {
    constructor() {
        // Initialize the kite's position and velocity. 
        this.x = width / 2; this.y = height / 2; this.vx = 0; this.vy = 0;
        // Initialize the kite's score. 
        this.score = 0;
    } update() {
        // Update the kite's position based on its velocity. 
        this.x += this.vx; this.y += this.vy;
        // Check if the kite has hit the edge of the screen
        // Check if the kite has hit the edge of the screen.
        if (this.x < 0 || this.x > width) {
            this.vx = -this.vx;
        } if (this.y < 0 || this.y > height) {
            this.vy = -this.vy;
        }
    } draw() {
        // Draw the kite at its current position.
        fill(255, 0, 0); circle(this.x, this.y, 50);
    } collidesWith(other) {
        // Check if the kite collides with another kite.
        return (this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y) < 2500;
    }
}