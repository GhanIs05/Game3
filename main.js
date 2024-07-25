import kaboom from "./libs/kaboom.mjs"
import { level1Mappings, level1Layout } from "./content/level1/level1Layout.js"
import { level2Mappings, level2Layout } from "./content/level2/level2Layout.js"
import { level3Mappings, level3Layout } from "./content/level3/level3Layout.js"
import { level4Mappings, level4Layout } from "./content/level4/level4Layout.js"
import { level5Mappings, level5Layout } from "./content/level5/level5Layout.js"
import { level6Mappings, level6Layout } from "./content/level6/level6Layout.js"
import { Player } from "./entities/player.js"
import { Camera } from "./utils/Camera.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { level1Config } from "./content/level1/config.js"
import { level2Config } from "./content/level2/config.js"
import { level3Config } from "./content/level3/config.js"
import { level4Config } from "./content/level4/config.js"
import { level5Config } from "./content/level5/config.js"
import { level6Config } from "./content/level6/config.js"
import { Spiders } from "./entities/Spiders.js"
import { Fish } from "./entities/Fish.js"
import { Flames } from "./entities/Flames.js"
import { Axes } from "./entities/Axes.js"
import { Saws } from "./entities/Saws.js"
import { Birds } from "./entities/Birds.js"
import { bgSoundManager } from "./utils/BGSoundManager.js"



kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

load.fonts()
load.sounds()
load.assets()

const scenes = {
    menu: () => {
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })
          bgSoundManager.play("bg-sound")
          uiManager.displayMainMenu()

    },
    controls: () => {
        uiManager.displayControlsMenu()
    },
    1: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })
        bgSoundManager.addSound("water-ambience", {
            volume: 0.2,
            loop: true,
          })
          bgSoundManager.play("water-ambience")
          bgSoundManager.play("bg-sound")


        setGravity(1400)

        const level1 = new Level()
        level1.drawBackground("forest-background2")
        level1.drawMapLayout(level1Layout, level1Mappings)
        
        const player = new Player(
            level1Config.playerStartPosX,
            level1Config.playerStartPosY,
            level1Config.plaYerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVulnerability()
        player.update()

        const fish = new Fish(
            level1Config.fishPositions.map((fishPos) => fishPos()),
            level1Config.fishAmplitudes,
            level1Config.fishType
          )
          fish.setMovementPattern()

        const spiders = new Spiders(
            level4Config.spiderPositions.map(spiderPos => spiderPos()),

            level1Config.spiderRanges,
            level1Config.spiderDurations,
            level1Config.spiderType
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level1.drawWaves("water", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)

    },
    2: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("lava-ambience", {volume: 0.5, loop: true })
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })
        bgSoundManager.play("bg-sound")
        bgSoundManager.play("lava-ambience")
        setGravity(1400)

        const level2 = new Level()
        level2.drawBackground("castle-background")
        level2.drawMapLayout(level2Layout, level2Mappings)
        
        const player = new Player(
            level2Config.playerStartPosX,
            level2Config.playerStartPosY,
            level2Config.plaYerSpeed,
            level2Config.jumpForce,
            level2Config.nbLives,
            2,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVulnerability()
        player.update()

        const spiders = new Spiders(
            level2Config.spiderPositions.map((spiderPos) => spiderPos()),
            level2Config.spiderAmplitudes,
            level2Config.spiderSpeeds,
            level2Config.spiderType
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()

        const flames = new Flames(
            level2Config.flamePositions.map((flamePos) => flamePos()),
            level2Config.flameAmplitudes,
            level2Config.flameType
          )
        flames.setMovementPattern()

        const axes = new Axes(
            level2Config.axesPositions.map(axesPos => axesPos()), 
            level2Config.axesSwingDurations
        )
        axes.setMovementPattern()

        const saws = new Saws(
            level2Config.sawPositions.map(sawPos => sawPos()),
            level2Config.sawRanges
        )
        saws.setMovementPattern()
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level2.drawWaves("lava", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)

    },
    3: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("strong-wind", { volume: 1.5, loop: true })
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })
          bgSoundManager.play("bg-sound")
        bgSoundManager.play("strong-wind")
        setGravity(1400)

        const level3 = new Level()
        level3.drawBackground("sky-background-0")
        level3.drawBackground("sky-background-1")
        level3.drawBackground("sky-background-2")

        level3.drawMapLayout(level3Layout, level3Mappings)
        
        const player = new Player(
            level3Config.playerStartPosX,
            level3Config.playerStartPosY,
            level3Config.plaYerSpeed,
            level3Config.jumpForce,
            level3Config.nbLives,
            3,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVulnerability()
        player.update()

        const birds = new Birds(
            level3Config.birdPositions.map(birdPos => birdPos()),
            level3Config.birdRanges,
            level3Config.birdType
        )
        birds.setMovementPattern()
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level3.drawWaves("clouds", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)
        
    },
    4: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })


        setGravity(1400)

        const level4 = new Level()
        level4.drawBackground("forest-background2")
        level4.drawMapLayout(level4Layout, level4Mappings)
        
        const player = new Player(
            level4Config.playerStartPosX,
            level4Config.playerStartPosY,
            level4Config.plaYerSpeed,
            level4Config.jumpForce,
            level4Config.nbLives,
            4,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.enableMobVulnerability()
        player.update()

        const fish = new Fish(
            level4Config.fishPositions.map((fishPos) => fishPos()),
            level4Config.fishAmplitudes,
            level4Config.fishType
          )
          fish.setMovementPattern()

        const spiders = new Spiders(
            level4Config.spiderPositions.map(spiderPos => spiderPos()),

            level4Config.spiderRanges,
            level4Config.spiderDurations,
            level4Config.spiderType
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level4.drawWaves("water", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)
        
    },

    5: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })

        setGravity(1400)

        const level5 = new Level()
        level5.drawBackground("forest-background2")
        level5.drawMapLayout(level5Layout, level5Mappings)
        
        const player = new Player(
                level5Config.playerStartPosX,
                level5Config.playerStartPosY,
                level5Config.plaYerSpeed,
                level5Config.jumpForce,
                level5Config.nbLives,
                5,
                false
            )
            player.enablePassthrough()
            player.enableCoinPickUp()
            player.enableMobVulnerability()
            player.update()
    
            const fish = new Fish(
                level5Config.fishPositions.map((fishPos) => fishPos()),
                level5Config.fishAmplitudes,
                level5Config.fishType
              )
              fish.setMovementPattern()
    
            const spiders = new Spiders(
                level5Config.spiderPositions.map(spiderPos => spiderPos()),
                level5Config.spiderRanges,
                level5Config.spiderDurations,
                level5Config.spiderType
            )
            spiders.setMovementPattern()
            spiders.enablePassthrough()
            
            const camera = new Camera()
            camera.attach(player.gameObj, 0, 200)
    
            level5.drawWaves("water", "wave")
    
            uiManager.addDarkBg()
    
            uiManager.displayCoinCount()
            player.updateCoinCount(uiManager.coinCountUI)
    
            uiManager.displayLivesCount()
            player.updateLives(uiManager.livesCountUI)

    },
    6: () => {
        bgSoundManager.pauseAllSounds()
        bgSoundManager.addSound("bg-sound", {
            volume: 0.2,
            loop: true,
          })

        setGravity(1400)

        const level6 = new Level()
        level6.drawBackground("castle-background")
        level6.drawMapLayout(level6Layout, level6Mappings)
        
        const player = new Player(
                level6Config.playerStartPosX,
                level6Config.playerStartPosY,
                level6Config.plaYerSpeed,
                level6Config.jumpForce,
                level6Config.nbLives,
                6,
                true
            )
            player.enablePassthrough()
            player.enableCoinPickUp()
            player.enableMobVulnerability()
            player.update()
    
            const spiders = new Spiders(
                level6Config.spiderPositions.map(spiderPos => spiderPos()),
                level6Config.spiderRanges,
                level6Config.spiderDurations,
                level6Config.spiderType
            )
            spiders.setMovementPattern()
            spiders.enablePassthrough()

            const saws = new Saws(
                level6Config.sawPositions.map(sawPos => sawPos()),
                level6Config.sawRanges
            )
            saws.setMovementPattern()

            const axes = new Axes(
                level6Config.axesPositions.map(axesPos => axesPos()), 
                level6Config.axesSwingDurations
            )
            axes.setMovementPattern()
            
            const camera = new Camera()
            camera.attach(player.gameObj, 0, 200)
    
            level6.drawWaves("lava", "wave")
    
            uiManager.addDarkBg()
    
            uiManager.displayCoinCount()
            player.updateCoinCount(uiManager.coinCountUI)
    
            uiManager.displayLivesCount()
            player.updateLives(uiManager.livesCountUI)
    },
    gameover: async () => uiManager.displayGameOverScreen(),
    end: async ()=> uiManager.displayEndGameScreen(),
    }


for(const key in scenes) {
    scene(key, scenes[key])
}

go("menu")