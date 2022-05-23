import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export type ISRadioOptionMethod = (target: any /* Unknown */, option: any) => void;

    export class ISRadioOptionInstance extends ISPanelInstance {
        protected constructor();

        tickTexture: Texture;
        choicesColor: RGBA;
        name: string;
        options: any; /* Unknown */
        optionCount: number;
        selected: number;
        leftMargin: number;
        changeOptionMethod: ISRadioOptionMethod;
        changeOptionTarget: any; /* Unknown */
        mouseOverOption: number;

        addOption(name: string): void;
    }

    export class ISRadioOption {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            name: string,
            changeOptionTarget: any /* Unknown */,
            changeOptionMethod: ISRadioOptionMethod
        ): ISRadioOptionInstance;
    }
}
