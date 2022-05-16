declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export class InterpolationPeriodDebugInstance extends ISCollapsableWindowInstance {
        protected constructor();

        player: zombie.characters.IsoPlayer;
        playerNum: number;
        borderColor: { r: number; g: number; b: number; a: number };
        backgroundColor: { r: number; g: number; b: number; a: number };
        greyCol: { r: number; g: number; b: number; a: number };
        isCollapsed: boolean;
        collapseCounter: number;
        title: string;
        resizable: boolean;
        drawFrame: boolean;
        currentTile: any | null;
        richtext: string | null;
        overrideBPrompt: boolean;
        subFocus: any | null;
        zombie: zombie.characters.IsoZombie | null;
        hotKeyPanels: any | null;
        isJoypadWindow: boolean;
        hourStamp: number;
        dayStamp: number;
        monthStamp: number;
        year: number;
        zombieInfo: any | null;

        OnOpenPanel(zombie: zombie.characters.IsoZombie): InterpolationPeriodDebugInstance;
        addLabel(curX: number, curY: number, labelID: number, title: string): number;
        addLabelValue(
            curX: number,
            curY: number,
            width: number,
            type: string,
            labelID: number,
            title: string,
            defaultValue: any
        ): number;
        getTitleLabel(labelID: number): string | null;
        getValueLabel(labelID: number): any | null;
        initVariables(): void;
        addColor(red: number, green: number, blue: number): void;
        updateValues(): void;
        onMouseWheel(delta: number): boolean;
        onButtonToggle(button: ISButtonInstance): void;
        onResize(): void;
        setZombie(zombie: zombie.characters.IsoZombie): void;
        close(): void;
        clear(): void;
    }

    export class InterpolationPeriodDebug {
        private constructor();
        
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param player (IsoPlayer)
         */
        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            player: zombie.characters.IsoPlayer
        ): InterpolationPeriodDebugInstance;
    }
}
