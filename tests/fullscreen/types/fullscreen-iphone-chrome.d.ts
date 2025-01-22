import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private div;
    private id?;
    constructor();
    private addElement;
    private addEventListeners;
    private handleOrientationChange;
    private handleTouchEnd;
    private getHeightValue;
    isFullscreen(): boolean;
}
