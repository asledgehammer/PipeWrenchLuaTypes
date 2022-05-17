declare module 'ISUI' {
    export class ISBackButtonWheelInstance extends ISRadialMenuInstance {
        protected constructor();

        __index: ISBackButtonWheelInstance;

        center(): void;
        addCommands(): void;
        onGainJoypadFocus(joypadData: any): void;
        onLoseJoypadFocus(joypadData: any): void;
        onJoypadDown(button: ISButtonInstance, joypadData: any): void;
        onCommand(command: string): void;
    }

    export class ISBackButtonWheel {
        private constructor();
        static new(playerNum: number): ISBackButtonWheelInstance;
    }
}
