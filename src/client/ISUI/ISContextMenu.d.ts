import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export type ISContextMenuOnSelectFunction = (
        target: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
        param5: any,
        param6: any,
        param7: any,
        param8: any,
        param9: any,
        param10: any
    ) => void;

    export type ISContextMenuOption = {
        id: number;
        name: string;
        onSelect: ISContextMenuOnSelectFunction;
        param1: any;
        param2: any;
        param3: any;
        param4: any;
        param5: any;
        param6: any;
        param7: any;
        param8: any;
        param9: any;
        param10: any;
        subOption: ISContextMenuOption;
        checkMark: boolean;
    };

    export class ISContextMenuInstance extends ISPanelInstance {
        protected constructor();

        zoom: number;
        font: UIFont;
        padY: number;
        fontHgt: number;
        itemHgt: number;
        padTopBottom: number;
        backgroundColorMouseOver: RGBA;
        optionPool: ISContextMenuOption[];
        numOptions: number;
        visibleCheck: boolean;
        forceVisible: boolean;
        toolTip: string | null;
        subOptionNums: number;
        player: number;
        scrollIndicatorHgt: number;
        arrowUp: Texture;
        arrowDown: Texture;
        tickTexture: Texture;
        mouseOut: boolean;
        instanceMap: ISContextMenuInstance[];
        subInstance: ISContextMenuInstance | null;
        subMenu: ISContextMenuInstance | null;

        isMouseOut(): boolean;

        hideSelfAndChildren2(): void;
        ensureVisible(): void;
        hideSelf(): void;
        hideAndChildren(): void;
        showTooltip(option: any): void;
        hideToolTip(): void;
        closeAll(): void;
        calcHeight(): void;
        calcWidth(): number;
        isOptionSingleMenu(): boolean;
        isAnyVisible(): boolean;
        getIndexForSubMenu(subMenu: ISContextMenuInstance): number;
        addDefaultOptions(): void;
        getDefaultOptionCount(): number;
        setSlideGoalX(startX: number, finalX: number): void;
        setSlideGoalY(startY: number, finalY: number): void;
        updateSlideGoalX(): void;
        updateSlideGoalY(): void;
        displayAncestor(ancestor: any): void;
        displaySubMenu(subMenu: ISContextMenuInstance, option: ISContextMenuOption): void;
        getRootY(): number;
        getItemY(index: number): number;
        getIndexAt(x: number, y: number): number;
        topmostMenuWithMouse(x: number, y: number): ISContextMenuInstance | null;
        allocOption(
            name: string,
            target: any,
            onSelect: ISContextMenuOnSelectFunction,
            param1: any,
            param2: any,
            param3: any,
            param4: any,
            param5: any,
            param6: any,
            param7: any,
            param8: any,
            param9: any,
            param10: any
        ): ISContextMenuOption;

        addOption(
            name: string,
            target: any,
            onSelect: ISContextMenuOnSelectFunction,
            param1: any,
            param2: any,
            param3: any,
            param4: any,
            param5: any,
            param6: any,
            param7: any,
            param8: any,
            param9: any,
            param10: any
        ): ISContextMenuOption;
        getOptionFromName(name: string): ISContextMenuOption;
        addOptionOnTop(
            name: string,
            target: any,
            onSelect: ISContextMenuOnSelectFunction,
            param1: any,
            param2: any,
            param3: any,
            param4: any,
            param5: any,
            param6: any,
            param7: any,
            param8: any,
            param9: any,
            param10: any
        ): ISContextMenuOption;
        removeLastOption(): void;
        addSubMenu(option: ISContextMenuOption, menu: ISContextMenuInstance): void;
        addActionsOption(
            text: string,
            getActionsFunction: Function,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any,
            arg7: any,
            arg8: any,
            arg9: any,
            arg10: any
        ): ISContextMenuOption;
        setOptionChecked(option: ISContextMenuOption, checked: boolean): void;
        clear(): void;
        isEmpty(): boolean;
        getScrollAreaHeight(): number;
        setFont(font: UIFont): void;
        setFontFromOption(): void;
        getNew(parentContext: ISContextMenuInstance): ISContextMenuInstance;
        getSubMenu(num: number): ISContextMenuInstance;
        getSubInstance(num: number): ISContextMenuInstance;
    }

    export class ISContextMenu {
        private constructor();

        static wantNoise: boolean;

        static new(x: number, y: number, width: number, height: number, zoom: number): ISContextMenuInstance;
        static get(player: number, x: number, y: number): ISContextMenuInstance;
        static noise(msg: string): void;
    }
}
