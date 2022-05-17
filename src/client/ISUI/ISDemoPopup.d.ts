declare module 'ISUI' {
    export class ISDemoPopupInstance extends ISPanelInstance {
        protected constructor();

        richtext: ISRichTextPanelInstance;
        timer: number;

        setInfo(item: any /* Unused */): void;
        removeSelf(): void;
    }

    export class ISDemoPopup {
        private constructor();

        static instance: ISDemoPopupInstance;

        static new(x: number, y: number, width: number, height: number): ISDemoPopupInstance;
        static OnJoypadActivate(id: any /* Unused */): void;
        static getInstance(): ISDemoPopupInstance;
    }
}
