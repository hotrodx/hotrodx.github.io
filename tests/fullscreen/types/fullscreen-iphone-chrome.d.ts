import { Fullscreen } from './fullscreen';
export declare class FullscreenIphoneChrome implements Fullscreen {
    private threshold;
    private swipeDist;
    private touchStartY;
    private div;
    private id?;
    constructor();
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
