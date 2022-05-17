import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type Texture = zombie.core.textures.Texture;
type InventoryItem = zombie.inventory.InventoryItem;
type ItemContainer = zombie.inventory.ItemContainer;

declare module 'ISUI' {
    export type ISEquippedItemFakeObject = {
        x: number;
        y: number;
        w: number;
        h: number;
        getX(): number;
        getY(): number;
        getWidth(): number;
        getHeight(): number;
    };

    export type ISEquippedItemMouseOver = {
        object: ISEquippedItemFakeObject;
        displayString: string;
    };

    export class ISEquippedItemInstance extends ISPanelInstance {
        protected constructor();

        mouseOverList: ISEquippedItemMouseOver[];
        chr: IsoPlayer;
        inventory: ItemContainer;
        /* ISPlayerDataObject.lootInventory */
        loot: ISInventoryPageInstance;
        /* ISPlayerDataObject.characterInfo */
        infopanel: ISCharacterInfoWindowInstance;
        handMainTexture: Texture;
        HandSecondaryTexture: Texture;
        inventoryTexture: Texture;
        inventoryTextureOn: Texture;
        craftingIcon: Texture;
        craftingIconOn: Texture;
        heartIcon: Texture;
        heartIconOn: Texture;
        movableIcon: Texture;
        movableIconPickup: Texture;
        movableIconPlace: Texture;
        movableIconRotate: Texture;
        movableIconScrap: Texture;
        mapIconOff: Texture;
        mapIconOn: Texture;
        debugIcon: Texture;
        debugIconOn: Texture;
        clientIcon: Texture;
        clientIconOn: Texture;
        adminIcon: Texture;
        adminIconOn: Texture;
        searchIconOn: Texture;
        searchIconOff: Texture;
        healthIconOscillatorLevel: number;
        healthIconOscillator: number;
        healthIconOscillatorDecelerator: number;
        healthIconOscillatorRate: number;
        healthIconOscillatorScalar: number;
        healthIconOscillatorStartLevel: number;
        healthIconOscillatorStep: number;
        previousHealth: number;
        mainHand: ISImageInstance;
        offHand: ISImageInstance;
        invBtn: ISButtonInstance;
        healthBtn: ISButtonInstance;
        craftingBtn: ISButtonInstance;
        movableBtn: ISButtonInstance;
        movableTooltip: ISMovablesIconToolTipInstance;
        movablePopup: ISMobablesIconPopupInstance;
        searchBtn: ISButtonInstance;
        mapBtn: ISButtonInstance;
        mapPopup: ISMapPopupInstance;
        debugBtn: ISButtonInstance;
        clientBtn: ISButtonInstance;
        adminBtn: ISButtonInstance;
        tooltip: ISToolTipInstance;

        getDraggedEquippableItem(): InventoryItem;
        getDraggedEquippableItems(): { primaryItem: InventoryItem; secondaryItem: InventoryItem };
        renderFPS(): void;
        onOptionMouseDown(button: ISButtonInstance, x: number, y: number): void;
        checkToolTip(): void;
        doToolTip(state: boolean, text: string): void;
        checkBounds(boundsItem: InventoryItem, x: number, y: number): boolean;
        addMouseOverToolTipItem(object: ISEquippedItemFakeObject, displayString: string): void;
        onMouseUpPrimary(x: number, y: number): void;
        onMouseUpSecondary(x: number, y: number): void;
        rightClickPrimary(x: number, y: number): void;
        rightClickSecondary(x: number, y: number): void;
    }

    export class ISEquippedItem {
        private constructor();

        static instance: ISEquippedItemInstance;
        static text: string;

        static new(x: number, y: number, width: number, height: number, chr: IsoPlayer): ISEquippedItemInstance;
    }
}
