import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private div;
    constructor();
    private addElement;
    private addEventListeners;
    private handleOrientationChange;
    private handleTouchEnd;
    private getHeightValue;
    isFullscreen(): boolean;
}
