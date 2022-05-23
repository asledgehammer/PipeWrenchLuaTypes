declare module 'ISUI' {
    export class OnScreenKeyboard {
        private constructor();

        static instance: ISOnScreenKeyboardInstance;

        static IsVisible(): boolean;
        static Hide(): void;
        static Show(
            playerNum: number,
            textEntryBox: ISTextEntryBoxInstance,
            joypadData: JoypadData
        ): ISOnScreenKeyboardInstance;
    }
}
