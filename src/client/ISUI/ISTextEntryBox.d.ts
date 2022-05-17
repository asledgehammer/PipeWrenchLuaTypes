import { zombie } from 'Zomboid';
type UIFont = zombie.ui.UIFont;
type UITextBox2 = zombie.ui.UITextBox2;
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export class ISTextEntryBoxInstance extends ISPanelJoypadInstance {
        protected constructor();

        font: UIFont;
        fade: UITransition;
        javaObject: UITextBox2;
        joypadFocused: ISUIElementInstance;
        tooltipUI: ISToolTipInstance;
        title: string;
        tooltip: string;
        currentText: string;
        logIndex: number;
        keepLog: boolean;

        onCommandEntered(): void;
        onTextChange(): void;
        ignoreFirstInput(): void;
        setOnlyNumbers(onlyNumbers: boolean): void;
        getText(): string;
        setEditable(editable: boolean): void;
        setSelectable(enable: boolean): void;
        setMultipleLine(multiple: boolean): void;
        isMultipleLine(): boolean;
        setMaxLines(max: number): void;
        getMaxLines(): number;
        setClearButton(hasButton: boolean): void;
        setText(text: string): void;
        onPressDown(): void;
        onPressUp(): void;
        focus(): void;
        unfocus(): void;
        getInternalText(): string;
        setMasked(flag: boolean): void;
        setMaxTextLength(length: number): void;
        setForceUpperCase(forceUpperCase: boolean): void;
        getCursorPos(): number;
        setCursorPos(charIndex: number): void;
        clear(): void;
        setHasFrame(hasFrame: boolean): void;
        setFrameAlpha(alpha: number): void;
        getFrameAlpha(): number;
        setValid(valid: boolean): void;
        setTooltip(text: string): void;
        selectAll(): void;
        setJoypadFocused(focused: any, joypadData: JoypadData): void;
    }

    export class ISTextEntryBox {
        private constructor();

        static new(title: string, x: number, y: number, width: number, height: number): ISTextEntryBoxInstance;
    }
}
