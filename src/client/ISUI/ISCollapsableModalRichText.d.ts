import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;

declare module 'ISUI' {
    export type ISCollapsableModalRichTextOnClickFunction = (
        target: any,
        button: ISButtonInstance,
        param1: any,
        param2: any
    ) => void;

    export class ISCollapsableModalRichTextInstance extends ISCollapsableWindowInstance {
        protected constructor();

        onclick: ISCollapsableModalRichTextOnClickFunction;
        name: string;
        text: string;
        yesno: boolean;
        target: any;
        yes: ISButtonInstance;
        no: ISButtonInstance;
        ok: ISButtonInstance;
        player: number;
        param1: any;
        param2: any;
        chatText: ISRichTextPanelInstance;

        updateButtons(): void;
        destroy(): void;
        onClick(button: ISButtonInstance): void;
    }

    export class ISCollapsableModalRichText {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            text: string,
            yesno: boolean,
            target: any,
            onclick: ISCollapsableModalRichTextOnClickFunction,
            player: IsoPlayer
        ): ISCollapsableModalRichTextInstance;
    }
}
