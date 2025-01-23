import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private touchStartY;
    private scrollSpeedLimit;
    private div;
    private id?;
    constructor();
    private addElement;
    private addEventListeners;
    private handleOrientationChange;
    private handleTouchStart;
    private handleTouchMove;
    private handleTouchEnd;
    private getHeightValue;
    isFullscreen(): boolean;
}
