import { zombie } from 'Zomboid';

declare module 'ISUI' {
    export type ISRichTextOnClickFunction = (
        target: any,
        button: ISButtonInstance,
        param1: any,
        param2: any,
        param3: any,
        param4: any
    ) => void;

    export class ISRichTextBoxInstance extends ISPanelJoypadInstance {
        protected constructor();

        target: any; /* Unknown */
        onclick: ISRichTextOnClickFunction;
        yes: ISButtonInstance;
        no: ISButtonInstance;
        fontHgt: number;
        entry: ISTextEntryBoxInstance;
        chatText: ISRichTextPanelInstance;
        validateTarget: any; /* Unknown */
        validateFunc: Function;
        validateArgs: any[];
        validateTooltipText: string;
        player: number;
        name: Text;
        text: string;
        param1: any;
        param2: any;
        param3: any;
        param4: any;
        defaultEntryText: string;        
    }

    export class ISRichTextBox {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            text: string,
            defaultEntryText: string,
            target: any /* Unknown */,
            onclick: ISRichTextOnClickFunction,
            player: number,
            param1: any,
            param2: any,
            param3: any,
            param4: any
        ): ISRichTextBoxInstance;
    }
}
