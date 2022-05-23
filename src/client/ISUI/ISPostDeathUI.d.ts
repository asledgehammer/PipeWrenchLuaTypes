import { zombie } from "Zomboid";
type IsoPlayer = zombie.characters.IsoPlayer;

declare module 'ISUI' {
    export class ISPostDeathUIInstance extends ISPanelJoypadInstance {
        protected constructor();

        screenX: number;
        screenWidth: number;
        screenHeight: number;
        playerIndex: number;
        textY: number;
        buttonRespawn: ISButtonInstance;
        buttonExit: ISButtonInstance;
        buttonQuit: ISButtonInstance;
        timeOfDeath: number;
        waitOver: boolean;
        quitToDesktopDialog: ISModalDialogInstance;

        configButton(button: ISButtonInstance): void;
        onQuitToDesktop(): void;
        onConfirmQuitToDesktop(button: ISButtonInstance): void;
        onExit(): void;
        onRespawn(): void;
        onJoypadBeforeDeactivate(joypadData: JoypadData): void;
        onJoypadReactivate(joypadData: JoypadData): void;
        
    }

    export class ISPostDeathUI {
        private constructor();

        static instance: ISPostDeathUIInstance;

        static new(playerIndex: number): ISPostDeathUIInstance;

        static OnPlayerDeath(playerObj: IsoPlayer): void;
    }
}
