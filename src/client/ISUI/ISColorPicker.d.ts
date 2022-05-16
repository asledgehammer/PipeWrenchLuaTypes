import { zombie } from 'Zomboid';

declare module 'ISUI' {
    export type ISColorPickerFunction = (
        target: any,
        color: RGB,
        mouseUp: boolean,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any
    ) => void;

    export class ISColorPickerInstance extends ISPanelJoypadInstance {
        protected constructor();

        borderSize: number;
        buttonSize: number;
        columns: number;
        rows: number;
        index: number;
        pickedArgs: any[];
        pickedTarget: any;
        pickedFunc: ISColorPickerFunction;
        colors: RGB[];
        otherFct: boolean;
        mouseDown: boolean;
        joyfocus: JoyFocus;

        removeSelf(): void;
        picked(hide: boolean): void;
        picked2(hide: boolean): void;
        setInitialColor(initial: RGB): void;
        setPickedFunc(func: ISColorPickerFunction, arg1: any, arg2: any, arg3: any, arg4: any): void;
        setColors(colors: RGB[], columns: number, rows: number): void;
    }

    export class ISColorPicker {
        private constructor();

        static new(x: number, y: number, hsbFactor: HSBFactor): ISColorPickerInstance;
    }
}
