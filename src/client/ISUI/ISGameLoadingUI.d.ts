import { zombie } from 'Zomboid';

declare module 'ISUI' {
    export class ISGameLoadingUIInstance extends ISPanelJoypadInstance {
        protected constructor();

        status: any; /* Unknown */
        buttonQuit: ISButtonInstance;

        configButton(button: ISButtonInstance): void;
        onExitToDesktop(): void;
        onExit(): void;
    }
    export class ISGameLoadingUI {
        private constructor();

        static instance: ISGameLoadingUIInstance;

        static new(status: any /* Unknown */): ISGameLoadingUIInstance;
        static OnJoypadActivateUI(id: number): void;
    }
}
