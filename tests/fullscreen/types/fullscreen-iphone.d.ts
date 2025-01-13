import { Fullscreen } from './fullscreen';
export declare class FullscreenIphone implements Fullscreen {
    private touchStartY;
    private div;
    constructor();
    private addElement;
    private addEventListeners;
    private handleTouchStart;
    private handleTouchEnd;
    isFullscreen(): boolean;
}
