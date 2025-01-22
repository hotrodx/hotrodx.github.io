import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private touchStartY;
    private div;
    private id?;
    constructor();
    private addElement;
    private addEventListeners;
    private handlePageShow;
    private handleOrientationChange;
    private handleTouchStart;
    private handleTouchEnd;
    private getHeightValue;
    isFullscreen(): boolean;
}
