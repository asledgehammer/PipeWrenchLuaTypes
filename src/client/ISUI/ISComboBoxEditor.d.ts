declare module 'ISUI' {
    export class ISComboBoxEditorInstance extends ISTextEntryBoxInstance {
        protected constructor();

        comboBox: ISComboBoxInstance;
        parentCombo: ISComboBoxInstance;
    }

    export class ISComboBoxEditor {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            comboBox: ISComboBoxInstance
        ): ISComboBoxEditorInstance;
    }
}
