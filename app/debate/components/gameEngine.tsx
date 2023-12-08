import kaboom, { GameObj, KaboomCtx, SpriteComp } from "kaboom";
import { DialogDebate } from "../models/debate.model";

function render(dialogs: DialogDebate, answerSet: number, game: KaboomCtx): GameObj<any>[]
{

    const spriteSize = {
        width: 500,
        height: 500,
    };
    const barSize = {
        width: 750,
        height: 400,
    };
    let allLoopSprites: GameObj<any>[] = [];

    const dialog = dialogs.getCurrentDialog();
    const answers = dialogs.getAnswers();
    const speaker = dialog.speaker;
    let speakerObj: SpriteComp = game.sprite(speaker.path);
    let barObj: SpriteComp = game.sprite("bar");
    speakerObj.flipX = (dialog.speaker.facing === "right");
    barObj.flipX = (dialog.speaker.facing === "left");
    allLoopSprites.push(game.add([
        speakerObj,
        game.pos(game.width() / 2, game.height() / 2),
        game.anchor("center"),
        game.scale(
            (game.height() / spriteSize.width) / 1.2,
            (game.height() / spriteSize.height) / 1.2,
        ),
    ]));
    allLoopSprites.push(game.add([
        barObj,
        game.pos(
            (game.width() / 2.5) * (dialog.speaker.facing === "right" ? 1.5 : 1),
            game.height() / 1.3),
        game.anchor("center"),
        game.scale(
            (game.width() / barSize.width),
            (game.height() / barSize.height),
        ),
    ]));
    allLoopSprites.push(game.add([
        game.rect(game.width() - 60, game.height() / 6),
        game.pos(game.width() / 2, game.height() - game.height() / 12),
        game.anchor("center"),
        game.color(0, 0, 0),
    ]));
    allLoopSprites.push(game.add([
        game.text(dialog.text, {
            size: 48,
            width: game.width() - 80,
            font: "sans-serif",
        }),
        game.pos(game.width() / 2, game.height() - game.height() / 12),
        game.anchor("center"),
        // game.color(1, 1, 1),
    ]));
    if (answers.length > 0 && dialog.canBeAnswered) {
        allLoopSprites.push(game.add([
            game.rect(game.width() / 8, game.height() / 4),
            game.pos(game.width() - game.width() / 16, game.height() / 2),
            game.anchor("center"),
            game.color(0, 0, 0),
        ]));
        allLoopSprites.push(game.add([
            game.rect(game.width() / 8, 32),
            game.pos(game.width() - game.width() / 16, game.height() / 2),
            game.anchor("center"),
            game.color(122, 122, 122),
        ]));
        for (let i = answerSet - 1; i <= answerSet + 1; i++) {
            if (i >= 0 && i < answers.length) {
                allLoopSprites.push(game.add([
                    game.text(answers[i].text, {
                        size: 24,
                        width: game.width() / 8 - 10,
                        font: "sans-serif",
                    }),
                    game.pos(game.width() - game.width() / 16, game.height() / 2 + 32 * (i - answerSet)),
                    game.anchor("center"),
                    // game.color(1, 1, 1),
                ]));
            }
        }
    }
    return allLoopSprites;

}

export default function debate(canvasref: HTMLCanvasElement, dialogs: DialogDebate)
{
    const assetRoot = "debate/assets/"
    const game = kaboom({
        width: canvasref.parentElement?.clientWidth,
        height: canvasref.parentElement?.clientHeight - 60,
        // if you don't want to import to the global namespace
        global: false,
        // if you don't want kaboom to create a canvas and insert under document.body
        canvas: canvasref,
    });

    const back = game.loadSprite("back" , assetRoot + "Courtroom.jpg");
    const bar = game.loadSprite("bar" , assetRoot + "Court_bar.png");
    const acc0 = game.loadSprite("acc0" , assetRoot + "sprite_lawyer_accusation_0.png");
    const acc1 = game.loadSprite("acc1" , assetRoot + "sprite_lawyer_accusation_1.png");
    const def0 = game.loadSprite("def0" , assetRoot + "sprite_lawyer_defense_0.png");
    const def1 = game.loadSprite("acc1" , assetRoot + "sprite_lawyer_defense_1.png");
    const tomm = game.loadSprite("tomm" , assetRoot + "sprite_lawyer_tomette.png");
    
    game.add([
        game.sprite("back"),
        game.pos(game.width() / 2, game.height() / 2),
        game.anchor("center"),
        game.scale(game.width(), game.height()),
    ]);


    let allLoopSprites: GameObj<any>[] = [];
    let currentSetAnswer = 0;

    let beforeRender = () => {
        allLoopSprites.forEach((sprite) => {
            sprite.destroy();
        });
        allLoopSprites = render(dialogs, currentSetAnswer, game);
    }

    game.onKeyPress("space", () => {
        dialogs.nextDialog();
        beforeRender();
    });
    
    game.onKeyPress("enter", () => {
        dialogs.nextDialog();
        beforeRender();
    });

    game.onKeyPress("up", () => {
        if (currentSetAnswer > 0) {
            currentSetAnswer--;
            beforeRender();
        }
    });

    game.onKeyPress("down", () => {
        if (currentSetAnswer < dialogs.getAnswers().length - 1) {
            currentSetAnswer++;
            beforeRender();
        }
    });

    game.onKeyPress("right", () => {
        dialogs.nextDialogAnswer(dialogs.getAnswers()[currentSetAnswer]);
        beforeRender();
    });

    beforeRender();

    return game;
}