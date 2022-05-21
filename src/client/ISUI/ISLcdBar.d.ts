import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export class ISLcdBarInstance extends ISPanelInstance {
        protected constructor();

        charW: number;
        charH: number;
        gridColor: RGBA;
        greyCol: RGBA;
        ledColor: RGBA;
        ledTextColor: RGBA;
        lcdwidth: number;
        isOn: boolean;
        lcdfont: Texture;
        lcdback: Texture;
        pos: number;
        posCounter: number;
        doScroll: boolean;
        textMode: boolean;
        textCache: string;

        toggleOn(flag: boolean): void;
        renderChar(position: number, index: number, red: number, green: number, blue: number, alpha: number): void;
        isSpecial(char: string): boolean;
        printChar(position: number, char: string): void;
        renderBackground(red: number, green: number, blue: number, alpha: number): void;
        setDoScroll(flag: boolean): void;
        setTextMode(flag: boolean): void;
        setText(text: string): void;
    }

    export class ISLcdBar {
        private constructor();

        static charW: number;
        static charH: number;
        /** (Regex) */
        static indexes: string;
        static unsupported: string[];
        /** These characters need a '%' appended in string.find */
        static special: string[];

        static new(x: number, y: number, charWidth: number): ISLcdBarInstance;
    }
}
