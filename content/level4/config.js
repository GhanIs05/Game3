export const level4Config = {
    gravity: 1400,
    plaYerSpeed: 400,
    jumpForce: 650,
    nbLives: 3,
    playerStartPosX: 1500,
    playerStartPosY: 100,
    spiderPositions: [
        () => vec2(2000, 300),
        () => vec2(2200, 300),
        () => vec2(3900, 300),
        () => vec2(4000, 300),
        () => vec2(5800, 300),
        () => vec2(5800, 300),
        
    ],
    spiderRanges: [300, 150, 150, 300, 150, 300],
    spiderDurations: [2, 1, 1, 2],
    spiderType: 1,
    fishPositions: [
        () => vec2(2595, 600),
        () => vec2(2655, 600),
        () => vec2(2755, 600),
        () => vec2(2855, 600),
        () => vec2(2955, 600),
        () => vec2(2655, 600),
        () => vec2(5000, 600),
        () => vec2(5100, 600),
        
      ],
      fishAmplitudes: [300, 500, 400, 500, 900, 800,300, 400, 600, 800],
      fishType: 1,
}