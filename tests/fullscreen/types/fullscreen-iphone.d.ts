import { Fullscreen } from './fullscreen';
export declare class FullscreenIphone implements Fullscreen {
    private touchStartY;
    private dvhValue;
    private vhValue;
    private diff;
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
    private handleTouchEnd;
    isFullscreen(): boolean;
}
