import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private touchStartY;
    private startingInnerHeight;
    private div;
    private id?;
    constructor();
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
