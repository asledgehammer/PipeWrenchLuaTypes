import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export class ISButtonInstance extends ISPanelInstance {
        protected constructor();

        repeatWhilePressedFunc: (element: ISUIElementInstance, button: ISButtonInstance) => any;
        onmousedown: (target: ISUIElementInstance, button: ISButtonInstance, x: number, y: number) => void;
        onmouseover: (target: ISUIElementInstance, self: ISButtonInstance, x: number, y: number) => void;
        onmouseout: (target: ISUIElementInstance, self: ISButtonInstance, deltaX: number, deltaY: number) => void;
        onclick: (
            target: ISUIElementInstance,
            button: ISButtonInstance,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any
        ) => void;
        tooltip: string;
        enable: boolean;
        allowMouseUpProcessing: boolean;
        isJoypad: boolean;
        joypadTexture: Texture;
        joypadTextureWH: number;
        isButton: true;
        fade: UITransition;
        sounds: { [which: string]: string };
        backgroundColorMouseOver: RGBA;
        backgroundColorPressed: RGBA;
        textureColor: RGBA;
        textColor: RGBA;
        displayBackground: boolean;
        blinkImage: boolean;
        blinkImageAlpha: number;
        blinkImageAlphaIncrease: boolean;
        blinkBG: boolean;
        blinkBGAlpha: number;
        blinkBGAlphaIncrease: boolean;
        forcedWidthImage: number;
        forcedHeightImage: number;
        overlayText: string;
        textureOverride: Texture;
        font: UIFont;
        title: string;
        yoffset: number;

        forceClick(): any;
        setJoypadButton(texture: Texture): void;
        clearJoypadButton(): void;
        setImage(image: Texture): void;
        forceImageSize(width: number, height: number): void;
        setFont(font: UIFont): void;
        getTitle(): string;
        setTitle(title: string): void;

        setOnMouseOverFunction(
            onmouseover: (target: ISUIElementInstance, self: ISButtonInstance, x: number, y: number) => void
        ): void;
        setOnMouseOutFunction(
            onmouseout: (target: ISUIElementInstance, self: ISButtonInstance, deltaX: number, deltaY: number) => void
        ): void;
        setDisplayBackground(background: boolean): void;
        updateTooltip(): void;
        setRepeatWhilePressed(func: (target: ISUIElementInstance, button: ISButtonInstance) => any): void;
        setBackgroundRGBA(r: number, g: number, b: number, a: number): void;
        setBackgroundColorMouseOverRGBA(r: number, g: number, b: number, a: number): void;
        setBorderRGBA(r: number, g: number, b: number, a: number): void;
        setTextureRGBA(r: number, g: number, b: number, a: number): void;
        setEnable(enabled: boolean): void;
        isEnabled(): boolean;
        setTooltip(tooltip: string): void;
        setWidthToTitle(minWidth: number, isJoypad: boolean): void;
        setOnClick(
            onclick: (
                target: ISUIElementInstance,
                button: ISButtonInstance,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any
            ) => void,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any
        ): void;
        setSound(which: string, soundName: string): void;
    }

    export class ISButton {
        private constructor();

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param title (string)
         * @param clickTarget (callback)
         * @param onclick (callback)
         * @param onmousedown (callback)
         * @param allowMouseUpProcessing (boolean)
         *
         * @returns The new ISButton instance.
         */
        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            title: string,
            clickTarget: ISUIElementInstance,
            onclick: (
                target: ISUIElementInstance,
                button: ISButtonInstance,
                arg1: any,
                arg2: any,
                arg3: any,
                arg4: any
            ) => void,
            onmousedown: (target: ISUIElementInstance, button: ISButtonInstance, x: number, y: number) => void,
            allowMouseUpProcessing: boolean
        ): ISButtonInstance;
    }
}
