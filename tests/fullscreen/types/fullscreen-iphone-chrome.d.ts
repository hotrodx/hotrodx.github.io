import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private touchStartY;
    private div;
    private id?;
    constructor();
    private addElement;
    private checkFullscreen;
    private addEventListeners;
    private handleOrientationChange;
    private handleTouchStart;
    private restartInterval;
    private handleTouchEnd;
    private getHeightValue;
    isFullscreen(): boolean;
}
