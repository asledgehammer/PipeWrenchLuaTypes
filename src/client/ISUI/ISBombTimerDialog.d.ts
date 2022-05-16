declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export class ISBombTimerDialogInstance extends ISPanelJoypadInstance {
        protected constructor();

        button1m: ISButtonInstance;
        button5m: ISButtonInstance;
        button10m: ISButtonInstance;
        button1p: ISButtonInstance;
        button5p: ISButtonInstance;
        button10p: ISButtonInstance;
        textBox: ISTextEntryBoxInstance;
        yes: ISButtonInstance;
        no: ISButtonInstance;
        player: zombie.characters.IsoPlayer;
        playerNum: number;
        playerX: number;
        playerY: number;
        name: string | null;
        prompt: string;
        time: number;
        target: any;
        targetFunc: any;
        param1: any;
        param2: any;
        param3: any;
        param4: any;

        destroy(): void;
        onButton(button: ISButtonInstance): void;
        addTime(seconds: number): void;
        getTime(): number;
    }

    export class ISBombTimerDialog {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            prompt: string,
            time: number,
            player: zombie.characters.IsoPlayer,
            target: any,
            targetFunc: any,
            param1: any,
            param2: any,
            param3: any,
            param4: any
        ): ISBombTimerDialogInstance;
    }
}
