import { zombie } from "Zomboid";
type Texture = zombie.core.textures.Texture;
type RadialProgressBar = zombie.ui.RadialProgressBar;

declare module 'ISUI' {
    export class ISRadialProgressBarInstance extends ISUIElementInstance {
        protected constructor();

        javaObject: RadialProgressBar;
        texture: Texture;

        getValue(): number;
        setValue(value: number): void;
        setTexture(texture: Texture): void;
        getTexture(): Texture;
    }

    export class ISRadialProgressBar {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            texturePath: string
        ): ISRadialProgressBarInstance;
    }
}