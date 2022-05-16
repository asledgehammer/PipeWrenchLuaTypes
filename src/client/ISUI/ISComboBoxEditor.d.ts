import { zombie } from "Zomboid";

// TODO: Implement.

declare module 'ISUI' {
    export class ISComboBoxEditorInstance extends ISTextEntryBoxInstance {
        protected constructor();
    }

    export class ISComboBoxEditor {
        private constructor();

        static new(): ISComboBoxEditorInstance;
    }
}