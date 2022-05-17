import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type IsoThumpable = zombie.iso.objects.IsoThumpable;

declare module 'ISUI' {
    export type ISDigitalCodeOnClickFunction = (
        target: any /* Unknown */,
        button: ISButtonInstance,
        character: IsoPlayer,
        padlock: any /* Unknown */,
        thumpable: IsoThumpable
    ) => void;

    export class ISDigitalCodeInstance extends ISPanelJoypadInstance {
        protected constructor();

        button1p: ISButtonInstance;
        number1: ISTextEntryBoxInstance;
        button1m: ISButtonInstance;
        button2p: ISButtonInstance;
        number2: ISTextEntryBoxInstance;
        button2m: ISButtonInstance;
        button3p: ISButtonInstance;
        number3: ISTextEntryBoxInstance;
        button3m: ISButtonInstance;
        ok: ISButtonInstance;
        character: IsoPlayer;
        name: string;
        target: any; /* Unknown */
        onclick: ISDigitalCodeOnClickFunction;
        player: number;
        playerX: number;
        playerY: number;
        padlock: any; /* Unknown */
        thumpable: IsoThumpable;
        new: boolean;

        destroy(): void;
        onClick(button: ISButtonInstance): void;
        increment(value: number): void;
        decrement(value: number): void;
        getCode(): number;
    }

    export class ISDigitalCode {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            target: any,
            onclick: ISDigitalCodeOnClickFunction,
            player: number,
            padlock: any,
            thumpable: IsoThumpable,
            isNew: boolean
        ): ISDigitalCodeInstance;
    }
}
