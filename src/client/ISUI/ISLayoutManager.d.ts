declare module 'ISUI' {
    export type ISLayoutWindow = {
        [id: string]: string;
        name: string;
    };

    export type ISLayout = {
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        windows: ISLayoutWindow[];
        visible: boolean;
        pinned: boolean;
    };

    export class ISLayoutManager {
        private constructor();

        static windows: any; /* Unknown */
        static enableLog: boolean;

        static RegisterWindow(name: string, funcs: Function[], target: any /* Unknown */): void;
        static DefaultRestoreWindow(window: ISWindowInstance): void;
        static DefaultSaveWindow(window: ISWindowInstance, layout: ISLayout): void;
        static SaveWindowVisible(window: ISWindowInstance, layout: ISLayout): void;
        static TryRestore(name: string): void;
        static CallRestoreLayout(name: string, layout: ISLayout): void;
        static CallSaveLayout(name: string, layout: ISLayout): void;
        static FindResizeWidget(window: ISWIndowInstance): ISResizeWidgetInstance;
        static ReadIni(): void;
        static WriteIni(): void;
        /** (Empty Method) */
        static SaveLayout(name: string, window: ISWindowInstance): void;
        static OnPostSave(): void;
    }
}
