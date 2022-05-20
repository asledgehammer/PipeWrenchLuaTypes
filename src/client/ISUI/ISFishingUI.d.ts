import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type ItemContainer = zombie.inventory.ItemContainer;
type IsoGridSquare = zombie.iso.IsoGridSquare;
type Zone = zombie.iso.IsoMetaGrid$Zone;

declare module 'ISUI' {
    export class ISFishingUIInstance extends ISPanelJoypadInstance {
        protected constructor();

        close: ISButtonInstance;
        ok: ISButtonInstance;
        cancel: ISButtonInstance;
        rods: ISRadionButtonsInstance;
        lures: ISRadioButtonsInstance;
        containersLbl: ISLabelInstance;
        containerSelector: ISComboBoxInstance;
        badPadY: number;
        btnHgt: number;
        padBottom: number;
        barY: number;
        usingSpear: boolean;
        maxFish: number;
        items_array: InventoryItem[];
        player: IsoPlayer;
        selectedRod: any; /* Unknown */
        luresEnabled: boolean;
        zoneProgress: number;
        /** Note: Possibly typed wrong in Lua code. */
        joyfocus: any;
        ISButtonA: ISButtonInstance;
        checkStuffTime: number;
        containers: ItemContainer[];
        canFishDistance: boolean;
        clickedSquare: IsoGridSquare;
        fishes: any; /* Unknown */
        checkPlayerX: number;
        checkPlayerY: number;
        clickedSquareX: number;
        clickedSquareY: number;
        clickedSquareZ: number;
        squareWithSameZone: IsoGridSquare[];
        squareWithOtherZone: IsoGridSquare[];
        squareWithoutZone: IsoGridSquare[];
        titleY: number;
        barHgt: number;
        fgBar: RGBA;
        rgBarOrange: RGBA;
        fgBarRed: RGBA;
        buttonBorderColor: RGBA;

        updateSize(): void;
        clickedRod(buttons: ISButtonInstance[], index: number): void;
        updateRods(): void;
        updateSelectedRod(): void;
        updateLures(): void;
        checkInventory(): void;
        checkInventoryRods(): boolean;
        checkInventoryLures(): boolean;
        checkInventoryBags(): boolean;
        getSelectedBag(): any; /* Unknown */
        updateButtons(currentAction: any /* Uknown */): void;
        onClick(button: ISButtonInstance): void;
        onJoypadBeforeDeactivate(joypadData: JoypadData): void;
        onJoypadBeforeReactivate(joypadData: JoypadData): void;
        setFish(item: InventoryItem): void;
        doBagOptions(): void;
        updateZoneProgress(zoneClicked: Zone): void;
        equipItems(): void;
        checkPlayerPosition(): void;
        pickBestSquare(squares: IsoGridSquare[]): IsoGridSquare;
    }

    export class ISFishingUI {
        private constructor();

        static instance: ISFishingUIInstance;
        static messages: string[];

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            player: IsoPlayer,
            clickedSquare: IsoGridSquare
        ): ISFishingUIInstance;
    }
}
