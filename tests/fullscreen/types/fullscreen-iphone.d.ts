import { Fullscreen } from './fullscreen';
export declare class FullscreenIphone implements Fullscreen {
    private touchStartY;
    constructor();
    private addStyles;
    private addEventListeners;
    private handleTouchStart;
    private handleTouchEnd;
    isFullscreen(): boolean;
}
