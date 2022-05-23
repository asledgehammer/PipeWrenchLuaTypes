declare module 'ISUI' {
    export class ISRainPanelInstance extends ISPanelInstance {
        protected constructor();

        intensity: number;
        speed: ISSpinBoxInstance;
        alpha: ISTextEntryBoxInstance;
        reloadButton: ISButtonInstance;

        changeIntensity(): void;
        changeSpeed(): void;
        onChangeAlpha(): void;
        reloadTextures(): void;
    }

    export class ISRainPanel {
        private constructor();

        // (Guessing that this is an inherited new method since none are defined)
        static new(x: number, y: number, width: number, height: number): ISRainPanelInstance;
    }
}
