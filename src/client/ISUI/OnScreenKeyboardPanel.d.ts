import { zombie } from 'Zomboid';
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export class OnScreenKeyboardPanelInstance extends ISPanelJoypadInstance {
        protected constructor();

        buttonX: number;
        buttonY: number;
        buttonW: number;
        buttonH: number;
        buttonPadX: number;
        buttonPadY: number;
        rowOfButtons: any; /* Unknown */
        enable: boolean;
        joypadFocused: boolean;
        fade: UITransition;
        backgroundColorMouseOver: RGBA;
        pressed: boolean;
        defaultButton: ISButtonInstance;

        createButton_Char(chLower: string, chUpper: string): ISButtonInstance;
        createButton(
            textLower: string,
            textUpper: string,
            keyFunction: OnScreenKeyboardKeyFunction,
            arg1: any,
            arg2: any
        ): ISButtonInstance;
        createButton2(
            x: number,
            y: number,
            width: number,
            height: number,
            text: string,
            keyFunction: OnScreenKeyboardKeyFunction,
            arg1: any,
            arg2: any
        ): ISButtonInstance;
        renderButton(): void;
        onButtonPressed(button: ISButtonInstance): void;
    }

    export class OnScreenKeyboardPanel {
        private constructor();

        static new(x: number, y: number, parent: any /* Unknown */): OnScreenKeyboardPanelInstance;
    }
}
