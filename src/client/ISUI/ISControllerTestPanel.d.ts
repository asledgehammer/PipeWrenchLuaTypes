declare module 'ISUI' {
    
    export type ISControllerTestPanelMainOptions = {
        labelJoypadSensitivity: ISLabelInstance;
        btnJoypadSensitivityP: ISButtonInstance;
        btnJoypadSensitivityM: ISButtonInstance;
    }
    
    export class ISControllerTestPanelInstance extends ISPanelInstance {
        protected constructor();

        combo: ISComboBoxInstance;
        axisY: {} | number;
        axisLabelWid: number;
        axisHgt: number;
        axisPadY: number;
        buttonX: number;
        buttonWid: number;
        buttonGapX: number;
        buttonGapY: number;
        smallFontHgt: number;
        selectedController: any;
        mainOptions: ISControllerTestPanelMainOptions;

        onControllerSelected(): void;
        joypadSensitivityM(): void;
        joypadSensitivityP(): void;
        setControllerCombo(): void;
        OnGamepadConnect(index: number): void;
        OnGamepadDisconnect(index: number): void;
    }

    export class ISControllerTestPanel {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISControllerTestPanelInstance;
    }
}
