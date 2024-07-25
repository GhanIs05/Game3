export const level5Config = {
    gravity: 1400,
    plaYerSpeed: 400,
    jumpForce: 650,
    nbLives: 3,
    playerStartPosX: 1500,
    playerStartPosY: 100,
    spiderPositions: [
        () => vec2(2000, 300),
        () => vec2(2500, 100),
        () => vec2(3500, 300),
        () => vec2(3700, 300),
        () => vec2(5200, 100),

        
    ],
    spiderRanges: [150, 150, 300, 150, 150],
    spiderDurations: [2, 1, 1, 2, 1],
    spiderType: 1,
    fishPositions: [
        () => vec2(2600, 600),
        () => vec2(2700, 600),
        () => vec2(2800, 600),
        () => vec2(4700, 600),
        () => vec2(4800, 800),
        () => vec2(4900, 800),
    
      ],
      fishAmplitudes: [300, 500, 400, 500, 900, 800,300, 400, 600, 800],
      fishType: 1,
}