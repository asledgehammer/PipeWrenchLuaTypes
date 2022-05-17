import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;

import { ValuePlotterInstance } from 'DebugUIs/DebugMenu';

declare module 'ISUI' {
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
        player: IsoPlayer;
        playerNum: number;
        borderColor: RGBA;
        backgroundColor: RGBA;
        greyCol: RGBA;
        anchorLeft: boolean;
        anchorRight: boolean;
        anchorTop: boolean;
        anchorBottom: boolean;
        isCollapsed: boolean;
        collapseCounter: number;
        title: string;
        resizable: boolean;
        drawFrame: boolean;
        richtext: string;
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
                func: any;
                col: RGBA;
            };
        };
        colInfo: { [offset: number]: RGBA };
        clearOnNextRun: boolean;

        // Unknown & Undefined Properties
        hotKeyPanels: any;
        playerInfo: any;
        subFocus: any;
        currentTile: any;
        currentStage: any;
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
        getTitleLabel(labelID: string): ISLabelInstance;
        getValueLabel(labelID: string): ISLabelInstance;
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
        setPlayer(player: IsoPlayer): void;
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
            player: IsoPlayer
        ): InterpolationPlayerPeriodDebugInstance;

        static OnOpenPanel(player: IsoPlayer): InterpolationPlayerPeriodDebugInstance;
    }
}
