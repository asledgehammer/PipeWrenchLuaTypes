import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type InventoryItem = zombie.inventory.InventoryItem;
type ItemContainer = zombie.inventory.ItemContainer;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class DraggedItemsInstance {
        protected constructor();

        playerNum: number;
        inventoryPane: ISInventoryPaneInstance;
        items: InventoryItem[];
        mouseOverContainer: ItemContainer;
        mouseOverItemCount: number;
        mouseOverWhat: string;
        itemNotOK: boolean[];

        getDropContainer(): { container: ItemContainer; what: string };
        update(): void;
        cannotDropItem(item: InventoryItem): boolean;
        reset(): void;
    }
    export class DraggedItems {
        private constructor();

        static new(inventoryPane: ISInventoryPaneInstance): DraggedItemsInstance;
    }

    export class ISInventoryPaneInstance extends ISPanelInstance {
        protected constructor();

        player: number;
        treeexpicon: Texture;
        treecolicon: Texture;
        expandicon: Texture;
        filtericon: Texture;
        collapseicon: Texture;
        equippedItemIcon: Texture;
        equippedInHotbar: Texture;
        brokenItemIcon: Texture;
        frozenItemIcon: Texture;
        poisonIcon: Texture;
        minimumHeight: number;
        minimumWidth: number;
        // Note: Cannot be present. A method with the same name exists..
        //   expandAll: ISButtonInstance;
        //   collapseAll: ISButtonInstance;
        column2: number;
        column3: number;
        column4: number;
        filterMenu: ISButtonInstance;
        headerHgt: number;
        nameHeader: ISResizableButtonInstance;
        typeHeader: ISResizableButtonInstance;
        itemHgt: number;
        font: UIFont;
        contextButton1: ISButtonInstance;
        contextButton2: ISButtonInstance;
        contextButton3: ISButtonInstance;
        buttonOption: number;
        items: any; /* Unknown */
        collapsed: any; /* Unknown */
        itemSortFunc: (a: InventoryItem, b: InventoryItem) => boolean;
        smoothScrollY: number;
        smoothScrollTargetY: number;
        selected: any; /* Unknown */
        mouseOverOption: number;
        previousMouseUp: number;
        dragStarted: boolean;
        draggedItems: DraggedItemsInstance;
        dragging: boolean;
        draggingX: number;
        draggingY: number;
        draggingMarquis: boolean;
        draggingMarquisX: number;
        draggingMarquisY: number;
        removeAllDialog: ISModalDialogInstance;
        doController: boolean;
        joyselection: number;
        toolRender: ISToolTipInvInstance;
        inventoryPage: ISInventoryPageInstance;
        firstSelect: number;
        mode: string;
        itemslist: any; /* Unknown */
        itemindex: {
            [itemName: string]: {
                items: { [index: number]: InventoryItem };
                count: number;
                name: string;
                equipped: boolean;
                inHotbar: boolean;
            };
        };
        hotbar: any; /* Unknown */
        texScale: number;
        favoriteStar: Texture;
        highlightItem: boolean;
        fontHgt: number;
        zoom: number;

        onResizeColumn(button: ISButtonInstance): void;
        onResize(): void;
        onContext(button: ISButtonInstance): void;
        collapseAll(button: ISButtonInstance): void;
        expandAll(button: ISButtonInstance): void;
        onFilterMenu(button: ISButtonInstance): void;
        sortByWeight(isAscending: boolean): void;
        sortByName(button: ISButtonInstance): void;
        sortByType(button: ISButtonInstance): void;
        SaveLayout(name: string, layout: any /* Unknown */): void;
        RestoreLayout(name: string, layout: any /* Unknown */): void;
        rowAt(x: number, y: number): number;
        topOfItem(index: number): number;
        selectIndex(index: number): void;
        hideButtons(): void;
        doButtons(y: any /* Not sure if number or string */): void;
        toggleStove(): any; /* Unknown */
        sortItemsByType(items: InventoryItem[]): void;
        sortItemsByWeight(items: InventoryItem[]): void;
        sortItemsByTypeAndWeight(items: InventoryItem[]): void;
        transferItemsByWeight(items: InventoryItem[], container: ItemContainer): void;
        removeAll(player: number): void;
        onConfirmDelete(button: ISButtonInstance): void;
        lootAll(): void;
        transferAll(): void;
        updateTooltip(): void;
        doContextualDblClick(item: InventoryItem): void;
        canPutIn(): boolean;
        doJoypadExpandCollapse(): void;
        doGrabOnJoypadSelected(): void;
        doContextOnJoypadSelected(): void;
        updateSmoothScrolling(): void;
        rendericons(): void;
        saveSelection(selected: InventoryItem[]): any /* Unknown */;
        restoreSelection(selected: InventoryItem[]): void;
        refreshContainer(): void;
        renderdetails(doDragged: boolean): void;
        drawProgressBar(x: number, y: number, width: number, height: number, f: number, fg: RGBA): void;
        drawTextAndProgressBar(
            text: string,
            fraction: number,
            xoff: number,
            top: number,
            fgText: RGBA,
            fgBar: RGBA
        ): void;
        drawItemDetails(item: InventoryItem, y: number, xoff: number, yoff: number, red: boolean): void;
        setMode(mode: string): void;
        onInventoryFontChanged(): void;
    }

    export class ISInventoryPane {
        private constructor();

        static highlightItem: InventoryItem;

        static itemSortByWeightAsc: (a: InventoryItem, b: InventoryItem) => boolean;
        static itemSortByWeightDesc: (a: InventoryItem, b: InventoryItem) => boolean;
        static itemSortByNameInc: (a: InventoryItem, b: InventoryItem) => boolean;
        static itemSortByNameDesc: (a: InventoryItem, b: InventoryItem) => boolean;
        static itemSortByCatInc: (a: InventoryItem, b: InventoryItem) => boolean;
        static itemSortByCatDesc: (a: InventoryItem, b: InventoryItem) => boolean;

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            inventory: ItemContainer,
            zoom: number
        ): ISInventoryPaneInstance;
        static getActualItems(items: InventoryItem[]): InventoryItem[];
    }
}
