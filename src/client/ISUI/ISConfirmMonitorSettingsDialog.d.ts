declare module 'ISUI' {
    export class ISConfirmMonitorSettingsDialogInstance extends ISModalDialogInstance {
        protected constructor();

        startTime: number;
    }

    export class ISConfirmMonitorSettingsDialog {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            callback: Function,
            param1: any,
            param2: any
        ): ISConfirmMonitorSettingsDialogInstance;
    }
}
