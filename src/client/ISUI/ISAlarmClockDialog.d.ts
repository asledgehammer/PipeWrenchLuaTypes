import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type AlarmClock = zombie.inventory.types.AlarmClock;

declare module 'ISUI' {
    export class ISAlarmClockDialogInstance extends ISPanelJoypadInstance {
        protected constructor();

        alarm: AlarmClock;
        character: IsoPlayer;
        player: IsoPlayer;
        playerX: number;
        playerY: number;
        anchorLeft: boolean;
        anchorRight: boolean;
        anchorTop: boolean;
        anchorBottom: boolean;
        width: number;
        height: number;
        name: string;
        backgroundColor: RGBA;
        borderColor: RGBA;
        button1p: ISButtonInstance;
        button1m: ISButtonInstance;
        button2p: ISButtonInstance;
        button2m: ISButtonInstance;
        ok: ISButtonInstance;
        setAlarm: ISTickBoxInstance;
        hours: ISTextEntryBoxInstance;
        mins: ISTextEntryBoxInstance;
        number1: ISTextEntryBoxInstance;
        number2: ISTextEntryBoxInstance;
        number3: ISTextEntryBoxInstance;
        joypadIndexY: number;
        joypadIndex: number;
        joypadButtons: { [offset: number]: ISButtonInstance };
        joypadButtonsY: { [offset: number]: ISButtonInstance };

        initialise(): void;
        destroy(): void;
        onClick(button: ISButtonInstance): void;
        incrementHour(value: ISTextEntryBoxInstance): void;
        decrementHour(value: ISTextEntryBoxInstance): void;
        incrementMin(value: ISTextEntryBoxInstance): void;
        decrementMin(value: ISTextEntryBoxInstance): void;
        prerender(): void;
        render(): void;
        update(): void;
        onGainJoypadFocus(joypadData: any): void;
        onJoypadDown(button: ISButtonInstance): void;
        getCode(): number;
    }

    export class ISAlarmClockDialog {
        private constructor();
        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            player: IsoPlayer,
            alarm: AlarmClock
        ): ISAlarmClockDialogInstance;
    }
}
