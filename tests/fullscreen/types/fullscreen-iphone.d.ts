import { Fullscreen } from './fullscreen';
export declare class FullscreenIphone implements Fullscreen {
    private touchStartY;
    private startingInnerHeight;
    private div;
    private id?;
    constructor();
    private getHeightValue;
    private doMeasurements;
    private addElement;
    private addEventListeners;
    private doFullscreen;
    private undoFullscreen;
    private handleOrientationChange;
    private handleTouchStart;
    private restartInterval;
    private handleTouchEnd;
    isFullscreen(): boolean;
}
