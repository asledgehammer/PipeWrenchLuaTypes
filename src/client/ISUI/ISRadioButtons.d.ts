import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export type ISRadioButtonsOption = {
        text: string;
        data: any;
        texture: Texture;
        enabled: boolean;
    };

    export type ISRadioButtonsChangeOptionFunction =
        | ((target1: any, target2: any, arg1: any, arg2: any, arg3: any, arg4: any) => void)
        | ((
              target1: any,
              radioButtons: ISRadioButtonsInstance,
              target3: any,
              arg1: any,
              arg2: any,
              arg3: any,
              arg4: any
          ) => void);

    export class ISRadioButtonsInstance extends ISPanelInstance {
        protected constructor();

        textureCircle: Texture;
        textureIndicator: Texture;
        choicesColor: RGBA;
        options: ISRadioButtonsOption[];
        leftMargin: number;
        boxSize: number;
        textGap: number;
        textureSize: number;
        font: UIFont;
        fontHgt: number;
        itemGap: number;
        itemHgt: number;
        isRadioButtons: boolean;
        tooltip: ISToolTipInstance;
        joypadIndex: number;
        changeOptionFunc: Function;
        changeOptionTarget: any; /* Unknown */
        changeOptionArgs: any[];
        enable: boolean;
        autoWidth: boolean;
        selected: number;
        mouseOverIndex: number;
        _textColor: RGBA;
        joypadFocused: number;
        enabled: boolean;

        getTextColor(index: number, color: RGBA): void;
        addOption(text: string, data: any /* Unknown */, texture: Texture, enabled: boolean): number;
        checkIndex(index: number): number;
        setOptionText(index: number, text: string): void;
        getOptionText(index: number): string;
        setOptionData(index: number, data: any /* Unknown */): void;
        getOptionData(index: number): any; /* Unknown */
        setOptionTexture(index: number, texture: Texture): void;
        getOptionTexture(index: number): Texture;
        setOptionEnabled(index: number, enabled: boolean): void;
        getOptionEnabled(index: number): boolean;
        clear(): void;
        isEmpty(): boolean;
        getNumOptions(): number;
        setFont(font: UIFont): void;
        setWidthToFit(): void;
        setSelected(index: number): void;
        isSelected(index: number): boolean;
        setJoypadFocused(focused: boolean): void;
        forceClicked(): void;
    }

    export class ISRadioButtons {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            target: any /* Unknown */,
            changeOptionFunc: Function,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any
        ): ISRadioButtonsInstance;
    }
}
