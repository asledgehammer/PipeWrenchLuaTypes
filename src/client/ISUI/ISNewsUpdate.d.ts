declare module 'ISUI' {
    export type ISNewsUpdateOnClickFunction = (target: any, button: ISButtonInstance, param1: any, param2: any) => void;

    export class ISNewsUpdateInstance extends ISPanelJoypadInstance {
        protected constructor();

        versionCombo: ISComboBoxInstance;
        yesno: boolean;
        yes: ISButtonInstance;
        no: ISButtonInstance;
        ok: ISButtonInstance;
        chatText: ISRichTextPanelInstance;
        destroyOnClick: boolean;
        name: string;
        target: any;
        onclick: ISNewsUpdateOnClickFunction;
        player: number;
        param1: any;
        param2: any;

        onVersionSelected(): void;
        updateButtons(): void;
        destroy(): void;
        onClick(button: ISButtonInstance): void;
    }

    export class ISNewsUpdate {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            yesno: boolean,
            target: any /* Unknown */,
            onclick: ISNewsUpdateOnClickFunction,
            player: number,
            param1: any,
            param2: any
        ): ISNewsUpdateInstance;
    }
}
