declare module 'ISUI' {

    export type ISModalDialogOnClick = (target: any, button: ISButtonInstance, param1: any, param2: any) => void;

    export class ISModalDialogInstance extends ISPanelJoypadInstance {
        protected constructor();

        name: string | null;
        text: string | null;
        yesno: boolean;
        target: any;
        onclick: ISModalDialogOnClick;
        yes: ISButtonInstance;
        no: ISButtonInstance;
        ok: ISButtonInstance;
        player: number;

        destroy(): void;
        onClick(button: ISButtonInstance): void;
        onJoypadBeforeDeactivate(joypadData: JoypadData): void;
    }

    export class ISModalDialog {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            text: string,
            yesno: boolean,
            target: any,
            onclick: ISModalDialogOnClick,
            player: number,
            param1: any,
            param2: any
        ): ISModalDialogInstance;

        static CalcSize(width: number, height: number, text: string): {width: number, height: number};
    }
}
