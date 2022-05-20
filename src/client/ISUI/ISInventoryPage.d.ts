import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type Texture = zombie.core.textures.Texture;
type ItemContainer = zombie.inventory.ItemContainer;
type IsoDirections = zombie.iso.IsoDirections;
type IsoObject = zombie.iso.IsoObject;
type IsoGridSquare = zombie.iso.IsoGridSquare;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    type TurnOnOffInstance = {
        isPowered: (object: IsoObject) => boolean;
        isActivated: (object: IsoObject) => boolean;
        toggle: (object: IsoObject) => void;
    };

    const TurnOnOff: {
        ClothingDryer: TurnOnOffInstance;
        ClothingWasher: TurnOnOffInstance;
        CombinationWasherDryer: TurnOnOffInstance;
        Stove: TurnOnOffInstance;
    };

    export class ISInventoryPageInstance extends ISPanelInstance {
        protected constructor();

        backpacks: any; /* Unknown */
        backpackChoice: number;
        zoom: number;
        inventory: ItemContainer;
        onCharacter: boolean;
        titlebarbkg: Texture;
        infoBtn: Texture;
        statusbarbkg: Texture;
        resizeimage: Texture;
        invbasic: Texture;
        closebutton: Texture;
        collapsebutton: Texture;
        pinbutton: Texture;
        conDefault: Texture;
        highlightColors: RGB;
        /** Definitions/ContainerButtonIcons */
        containerIconMaps: ContainerButtonIcons;
        pin: boolean;
        isCollapsed: boolean;
        collapseCounter: number;
        title: string;
        titleFont: UIFont;
        titleFontHgt: number;
        buttonSize: number;

        player: number;
        minimumHeight: number;
        minimumWIdth: number;
        inventoryPane: ISInventoryPaneInstance;

        closeButton: ISButtonInstance;
        infoButton: ISButtonInstance;
        pinButton: ISButtonInstance;
        collapseButton: ISButtonInstance;
        mouseOverButton: ISButtonInstance;
        // Note: Cannot be present. A method with the same name exists..
        //   transferAll: ISButtonInstance;
        //   lootAll: ISButtonInstance;
        //   removeAll: ISButtonInstance;
        //   toggleStove: ISButtonInstance;

        resizeWidget: ISResizeWidgetInstance;
        resizeWidget2: ISResizeWidgetInstance;

        totalWeight: number;
        infoRichText: ISModalRichTextInstance;
        coloredInv: any; /* Unknown */
        lastDir: IsoDirections;
        lastSquare: IsoGridSquare;
        blinkContainer: boolean;
        blinkContainerType: string;
        blinkAlpha: number;
        blinkAlphaIncrease: boolean;
        blinkAlphaContainer: number;
        blinkAlphaIncreaseContainer: boolean;
        forceSelectedContainer: ItemContainer;
        forceSelectedContainerTime: number;
        capacity: number;
        buttonPool: any; /* Unknown */
        lookDir: IsoDirections;
        selectedSqDrop: IsoGridSquare;
        render3DItems: boolean;
        render3DItemRot: number;
        render3DItemXOffset: number;
        render3DItemYOffset: number;
        render3DItemZOffset: number;

        /** (Empty Method) */
        onChangeFilter(selected: any /* Unused */): void;
        titleBarHeight(selected: any /* Unused */): number;
        /** (Empty Method) */
        refreshWeight(): void;
        lootAll(): void;
        transferAll(): void;
        toggleStove(): void;
        syncToggleStove(): void;
        setInfo(text: string): void;
        onInfo(): void;
        collapse(): void;
        setPinned(): void;
        isRemoveButtonVisible(): boolean;
        setBlinkingContainer(blinking: boolean, containerType: string): void;
        setForceSelectedContainer(container: ItemContainer): void;
        getCurrentBackpackIndex(): number;
        prevUnlockedContainer(index: number, wrap: boolean): number;
        nextUnlockedContainer(index: number, wrap: boolean): number;
        selectPrevContainer(): void;
        selectNextContainer(): void;
        ensureVisible(index: number): void;
        selectContainer(button: ISButtonInstance): void;
        setNewContainer(inventory: any /* Unknown */): void;
        selectButtonForContainer(container: any /* Unknown */): void;
        onMouseDown(x: number, y: number): void;
        isCycleContainerKeyDown(): boolean;
        onBackpackMouseDown(button: ISButtonInstance, x: number, y: number): void;
        onBackpackRightMouseDown(x: number, y: number): void;
        addContainerButton(
            container: ItemContainer,
            texture: Texture,
            name: string,
            tooltip: ISTooltipInstance
        ): ISButtonInstance;
        checkExplored(container: ItemContainer, playerObj: IsoPlayer): void;
        refreshBackpacks(): void;
        onMouseOverButton(button: ISButtonInstance, x: number, y: number): void;
        onMouseOutButton(button: ISButtonInstance, x: number, y: number): void;
        canPutIn(): boolean;
        RestoreLayout(name: string, layout: any /* Unknown */): void;
        SaveLayout(name: string, layout: any /* Unknown */): void;
        onInventoryContainerSizeChanged(): void;
        removeAll(): void;
        render3DItemPreview(): void;
    }

    export class ISInventoryPage {
        private constructor();

        static bagSoundDelay: number;
        static bagSoundTime: number;
        static renderDirty: boolean;

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            inventory: ItemContainer,
            onCharacter: boolean,
            zoom: number
        ): ISInventoryPageInstance;
        static loadWeight(inv: ItemContainer): number;
        static dirtyUI(): void;
        static GetFloorContainer(playerNum: number): ItemContainer;

        static onKeyPressed(key: number): void;
        static toggleInventory(): void;
        static ContainerSizeChanged(): void;
        static onInventoryFontChanged(): void;
        static OnContainerUpdate(object: IsoObject /* Unused */): void;
        static ongamestart(): void;
    }
}
