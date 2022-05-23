declare module 'ISUI' {
    export class ISOptionPanelInstance extends ISPanelInstance {
        protected constructor();

        options: any; /* Unknown */
        selected: number;
        hover: number;
        expanded: boolean;
        marginLeft: number;
        marginRight: number;
        margonTop: number;
        marginBottom: number;
        addY: number;

        addCombo(
            name: string,
            options: any /* Unknown */,
            selected: number,
            target: any /* Unknown */,
            onchange: ISComboBoxOnChangeFunction
        ): void;
    }

    export class ISOptionPanel {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISOptionPanelInstance;
    }
}
