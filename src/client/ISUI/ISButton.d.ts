declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export class ISButtonInstance extends ISPanelInstance {
        protected constructor();

        repeatWhilePressedFunc: ((element: ISUIElementInstance, button: ISButtonInstance) => any) | null;
        isJoypad: boolean | null;
        joypadTexture: zombie.core.textures.Texture | null;
        joypadTextureWH: number;

        enable: boolean;
        isButton: true;

        allowMouseUpProcessing: boolean | null;

        fade: zombie.ui.UITransition;
        sounds: { [which: string]: string };

        backgroundColorMouseOver: { r: number; g: number; b: number; a: number };
        backgroundColorPressed: { r: number; g: number; b: number; a: number };
        textureColor: { r: number; g: number; b: number; a: number };
        textColor: { r: number; g: number; b: number; a: number };

        displayBackground: boolean | null;
        blinkImage: boolean | null;
        blinkImageAlpha: number | null;
        blinkImageAlphaIncrease: boolean | null;
        blinkBG: boolean | null;
        blinkBGAlpha: number | null;
        blinkBGAlphaIncrease: boolean | null;
        forcedWidthImage: number | null;
        forcedHeightImage: number | null;
        overlayText: string | null;
        textureOverride: zombie.core.textures.Texture | null;

        font: zombie.ui.UIFont;
        title: string | null;
        yoffset: number | null;

        onmousedown: ((target: ISUIElementInstance, button: ISButtonInstance, x: number, y: number) => void) | null;
        onmouseover: ((target: ISUIElementInstance, self: ISButtonInstance, x: number, y: number) => void) | null;
        onmouseout:
            | ((target: ISUIElementInstance, self: ISButtonInstance, deltaX: number, deltaY: number) => void)
            | null;
        tooltip: string | null;
        onclick:
            | ((
                  target: ISUIElementInstance,
                  button: ISButtonInstance,
                  arg1: any | null,
                  arg2: any | null,
                  arg3: any | null,
                  arg4: any | null
              ) => void)
            | null;

        forceClick(): any | null;
        setJoypadButton(texture: zombie.core.textures.Texture): void;
        clearJoypadButton(): void;
        setImage(image: zombie.core.textures.Texture | null): void;
        forceImageSize(width: number, height: number): void;
        setFont(font: zombie.ui.UIFont | null): void;
        getTitle(): string | null;
        setTitle(title: string | null): void;

        setOnMouseOverFunction(
            onmouseover: ((target: ISUIElementInstance, self: ISButtonInstance, x: number, y: number) => void) | null
        ): void;
        setOnMouseOutFunction(
            onmouseout:
                | ((target: ISUIElementInstance, self: ISButtonInstance, deltaX: number, deltaY: number) => void)
                | null
        ): void;
        setDisplayBackground(background: boolean): void;
        updateTooltip(): void;
        setRepeatWhilePressed(func: ((target: ISUIElementInstance, button: ISButtonInstance) => any) | null): void;
        setBackgroundRGBA(r: number, g: number, b: number, a: number): void;
        setBackgroundColorMouseOverRGBA(r: number, g: number, b: number, a: number): void;
        setBorderRGBA(r: number, g: number, b: number, a: number): void;
        setTextureRGBA(r: number, g: number, b: number, a: number): void;
        setEnable(enabled: boolean): void;
        isEnabled(): boolean;
        setTooltip(tooltip: string | null): void;
        setWidthToTitle(minWidth: number, isJoypad: boolean): void;
        setOnClick(
            onclick:
                | ((
                      target: ISUIElementInstance,
                      button: ISButtonInstance,
                      arg1: any | null,
                      arg2: any | null,
                      arg3: any | null,
                      arg4: any | null
                  ) => void)
                | null,
            arg1: any | null,
            arg2: any | null,
            arg3: any | null,
            arg4: any | null
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
            onclick:
                | ((
                      target: ISUIElementInstance,
                      button: ISButtonInstance,
                      arg1: any | null,
                      arg2: any | null,
                      arg3: any | null,
                      arg4: any | null
                  ) => void)
                | null,
            onmousedown: ((target: ISUIElementInstance, button: ISButtonInstance, x: number, y: number) => void) | null,
            allowMouseUpProcessing: boolean
        ): ISButtonInstance;
    }
}
