import { zombie } from "Zomboid";
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export class ISComboBoxInstance extends ISPanelInstance {
        protected constructor();

        image: Texture;
        font: UIFont;
        fade: UITransition;
        textColor: RGBA;
        onChange: Function;
        onChangeArgs: any[];
        options: any[];
        target: any;
        tooltip: string | null;
        baseHeight: number;
        selected: number;
        expanded: boolean;
        isCombobox: boolean;
        disabled: boolean;
        editable: boolean;

        showPopup(): void;
        hidePopup(): void;
        setJoypadFocused(focused: boolean): void;
        forceClick(): void;
        select(option: any): void;
        selectData(data: any): void;
        find(func: Function, arg1: any, arg2: any): number;
        addOption(option: any): void;
        addOptionWithData(option: any, data: any): void;
        contains(text: string): boolean;
        getOptionText(index: number): string | any | null;
        getOptionTooltip(index: number): string | null;
        setToolTipMap(tooltipmap: any): void;
        getSelectedText(): string | null;
        setWidthToOptions(minWidth: number): void;
        clear(): void;
        setEditable(editable: boolean): void;
        isEditable(): boolean;
        setFilterText(text: string): void;
        getFilterText(): string | null;
        hasFilterText(): boolean;
    }

    export class ISComboBox {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            target: any,
            onChange: Function,
            onChangeArg1: any,
            onChangeArg2: any
        ): ISComboBoxInstance;
    }
}