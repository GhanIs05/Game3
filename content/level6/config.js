export const level6Config = {
    gravity: 1400,
    plaYerSpeed: 400,
    jumpForce: 650,
    nbLives: 3,
    playerStartPosX: 1500,
    playerStartPosY: 100,
    spiderPositions: [
        () => vec2(1800, 300),
        () => vec2(3000, 300),
        () => vec2(5400, -50)
    ],
    spiderRanges: [150, 150, 300, 150, 150],
    spiderDurations: [2, 1, 1, 2, 1],
    spiderType: 1,

    sawPositions: [
        () => vec2(2500, 150),
        () => vec2(4800, 150)
    ],
    sawRanges: [300, 500],

    axesPositions: [
        () => vec2(3800, -50),
        
      ],
    axesSwingDurations: [1, 2, 3, 2],

}