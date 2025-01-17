import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private vhValue;
    private threshold;
    private swipeDist;
    private touchStartY;
    private div;
    private id?;
    constructor();
    private doMeasurements;
    private getHeightValue;
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
