import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private touchStartY;
    private vhValue;
    private dvhValue;
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
    private handleResize;
    private handleTouchStart;
    private restartInterval;
    private handleTouchEnd;
    isFullscreen(): boolean;
}
