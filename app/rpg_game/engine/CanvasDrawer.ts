"use client";

export class CanvasDrawer {
    canvas: HTMLElement;
    ctx: CanvasRenderingContext2D;

    public draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#6c7b94";
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(500, 500);
        this.ctx.stroke();
    }
    public hello() {
        console.log("hello");
    }


    constructor() {
        this.canvas = document.createElement('gameCanvas');
    }

}