import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export type ISGradientBarSettings = {
        radius: number;
        darkAlpha: number;
        colBorder: RGBA;
        colBorderInner: RGBA;
        doKnob: boolean;
    };

    export class ISGradientBarInstance extends ISPanelInstance {
        protected constructor();

        value: number;
        gradientTex: Texture;
        highlightTex: Texture;
        highlightTex_L: Texture;
        highlightTex_R: Texture;
        settings: ISGradientBarSettings;

        setGradientTexture(texture: Texture): void;
        setHighlightRadius(radius: number): void;
        setDarkAlpha(alpha: number): void;
        setBorderColor(alpha: number, red: number, green: number, blue: number): void;
        setBorderInnerColor(alpha: number, red: number, green: number, blue: number): void;
        setDoKnob(flag: boolean): void;
        setValue(value: number): void;
    }

    export class ISGradientBar {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISGradientBarInstance;
    }
}
