declare module 'ISUI' {
    export class ISDuplicateKeybindDialogInstance extends ISPanelInstance {
        protected constructor();

        o: ISPanelInstance;
        key: number;
        keybindName: string;
        keybind2Name: string;
        label: ISLabelInstance;
        clear: ISButtonInstance;
        keep: ISButtonInstance;
        cancel: ISButtonInstance;

        destroy(): void;
        onCancel(): void;
        onKeep(): void;
        onClear(): void;
        assignKey(keyText: string, keybind: any /* Unknown */, key: number): void;
        nextDuplicate(): void;
    }

    export class ISDuplicateKeybindDialog {
        private constructor();

        static new(key: number, keybindName: string, keybind2Name: string): ISDuplicateKeybindDialogInstance;
    }
}
