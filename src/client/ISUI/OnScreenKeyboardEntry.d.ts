import { zombie } from 'Zomboid';
type UITextBox2 = zombie.ui.UITextBox2;
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export class OnScreenKeyboardEntryInstance extends ISPanelJoypadInstance {
        protected constructor();

        javaObject: UITextBox2;

        /** (Possible typ0) */
        joyfocus: JoyFocus;

        focus(): void;
        unfocus(): void;
        isFocused(): boolean;
        getText(): string;
        setText(text: string): void;
        getCursorLine(): number;
        setCursorLine(line: number): void;
        setMultipleLine(multipleLine: boolean): void;
        isMultipleLine(): boolean;
        setMaxLines(max: number): void;
        getCursorPos(): number;
    }
    export class OnScreenKeyboardEntry {
        private constructor();

        static new(x: number, y: number, width: number, height: number): OnScreenKeyboardEntryInstance;
    }
}
