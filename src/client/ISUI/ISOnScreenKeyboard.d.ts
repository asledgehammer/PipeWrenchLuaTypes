import { zombie } from 'Zomboid';
type UITextBox2 = zombie.ui.UITextBox2;
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export type OnScreenKeyboardKeyFunction = (lower: string, upper: string) => void;

    export class ISOnScreenKeyboardInstance extends ISPanelJoypadInstance {
        protected constructor();

        entry: OnScreenKeyboardEntryInstance;
        buttonPadY: number;
        keyPanel: OnScreenKeyboardPanelInstance;
        shiftDown: boolean;
        capsLock: boolean;
        textEntryBox: ISTextEntryBoxInstance;
        setBlockMovement: boolean;
        playerNum: number;
        /** (Possible typ0) */
        joyfocus: JoyFocus;
        prevFocus: JoyFocus;
        transition: number;
        buttonCapsLock: ISButtonInstance;
        buttonLShift: ISButtonInstance;
        buttonRShift: ISButtonInstance;

        KeyFunction_Char(chLower: string, chUpper: string): void;
        KeyFunction_KeyCode(keyCode: number): void;
        KeyFunction_CapsLock(): void;
        KeyFunction_Enter(): void;
        KeyFunction_Hide(): void;
        accept(): void;
        hide(): void;
        shrinkWrap(panel: ISPanelInstance): void;
        setButtonNames(): void;
        checkRightTrigger(joypadData: JoypadData): void;
        show(playerNum: number, textEntryBox: ISTextEntryBoxInstance): void;
        setMultipleLine(multipleLine: boolean): void;
        getCurrentText(): string;
        focusOnEntry(joypadData: JoypadData): void;
    }

    export class ISOnScreenKeyboard {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISOnScreenKeyboardInstance;
    }
}
