import { Fullscreen } from './fullscreen';
export declare class FullscreenIphone implements Fullscreen {
    private touchStartY;
    private div;
    constructor();
    private addElement;
    private addEventListeners;
    private handleOrientationChange;
    private handleTouchStart;
    private handleTouchEnd;
    isFullscreen(): boolean;
}
