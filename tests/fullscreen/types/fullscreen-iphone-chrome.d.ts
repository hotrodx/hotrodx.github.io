import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private touchStartY;
    private div;
    private id?;
    constructor();
    private addElement;
    private addEventListeners;
    private handleOrientationChange;
    private handleTouchStart;
    private handleTouchEnd;
    private handleTouchCancel;
    private getHeightValue;
    isFullscreen(): boolean;
}
