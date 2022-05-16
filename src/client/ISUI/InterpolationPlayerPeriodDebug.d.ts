declare module 'ISUI' {
    import { zombie } from 'Zomboid';
    import { ValuePlotterInstance } from 'DebugUIs/DebugMenu';

    export type TitleValueLabelPair = {
        titleLabel: ISLabelInstance;
        valueLabel: ISLabelInstance;
    };

    export class InterpolationPlayerPeriodDebugInstance extends ISCollapsableWindowInstance {
        protected constructor();

        labels: { [id: string]: TitleValueLabelPair };
        x: number;
        y: number;
        width: number;
        height: number;
        player: zombie.characters.IsoPlayer | null;
        playerNum: number;
        borderColor: { r: number; g: number; b: number; a: number };
        backgroundColor: { r: number; g: number; b: number; a: number };
        greyCol: { r: number; g: number; b: number; a: number };
        anchorLeft: boolean;
        anchorRight: boolean;
        anchorTop: boolean;
        anchorBottom: boolean;
        isCollapsed: boolean | null;
        collapseCounter: number | null;
        title: string | null;
        resizable: boolean | null;
        drawFrame: boolean | null;
        richtext: string | null;
        overrideBPrompt: boolean;
        isJoypadWindow: boolean;
        hourStamp: number;
        dayStamp: number;
        monthStamp: number;
        year: number;
        historyM1: ValuePlotterInstance;
        varInfo: {
            [offset: number]: {
                name: string;
                desc: string;
                min: number;
                max: number;
                func: any,
                col: { r: number; g: number; b: number; a: number };
            }
        };
        colInfo: {[offset: number]: {
            r: number,
            g: number,
            b: number,
            a: number
        }};
        clearOnNextRun: boolean;

        // Unknown & Undefined Properties
        hotKeyPanels: any;
        playerInfo: any;
        subFocus: null;
        currentTile: null;
        currentStage: null;
        /////////////////////////////////

        initialise(): void;
        createChildren(): void;
        addLabel(currentX: number, currentY: number, labelID: string, title: string): number;
        addLabelValue(
            currentX: number,
            currentY: number,
            width: number,
            type: string,
            labelID: string,
            title: string,
            defaultValue: number
        ): number;
        getTitleLabel(labelID: string): ISLabelInstance | null;
        getValueLabel(labelID: string): ISLabelInstance | null;
        initVariables(): void;
        addColor(red: number, green: number, blue: number): void;
        addVarInfo(name: string, description: string, min: number, max: number, func: any): void;
        updateValues(): void;
        onMouseWheel(delta: number): boolean;
        onButtonToggle(button: ISButtonInstance): void;
        onResize(): void;
        update(): void;
        prerender(): void;
        stayOnSplitScreen(): void;
        render(): void;
        setPlayer(player: zombie.characters.IsoPlayer): void;
        close(): void;
        clear(): void;
    }

    export class InterpolationPlayerPeriodDebug {
        private constructor();

        static instance: InterpolationPlayerPeriodDebugInstance;
        /** Default: 0 */
        static shiftDown: number;
        /** Default: false */
        static eventsAdded: boolean;

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            player: zombie.characters.IsoPlayer
        ): InterpolationPlayerPeriodDebugInstance;

        static OnOpenPanel(player: zombie.characters.IsoPlayer): InterpolationPlayerPeriodDebugInstance;
    }
}
