import { zombie } from 'Zomboid';

declare module 'ISUI' {
    export type ISModalRichTextOnClickFunction = (
        target: any /* Unknown */,
        button: ISButtonInstance,
        param1: any,
        param2: any
    ) => void;

    export class ISModalRichTextInstance extends ISPanelJoypadInstance {
        protected constructor();

        yesno: boolean;
        yes: ISButtonInstance;
        no: ISButtonInstance;
        ok: ISButtonInstance;
        chatText: ISRichTextPanelInstance;
        destroyOnClick: boolean;
        player: number;
        /** (Possible Typ0) */
        joyfocus: JoyFocus;
        prevFocus: JoyFocus;
        onclick: ISModalRichTextOnClickFunction;
        alwaysOnTop: boolean;
        name: string;
        text: string;
        param1: any;
        param2: any;

        updateButtons(): void;
        destroy(): void;
        onClick(button: ISButtonInstance): void;
        setHeightToContents(): void;
    }

    export class ISModalRichText {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            text: string,
            yesno: boolean,
            target: any,
            onclick: ISModalRichTextOnClickFunction,
            player: number,
            param1: any,
            param2: any
        ): ISModalRichTextInstance;
    }
}
