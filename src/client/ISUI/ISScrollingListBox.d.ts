import { zombie } from "Zomboid";
type InventoryItem = zombie.inventory.InventoryItem;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export type ISScrollingListBoxEntry = {
        text: string,
        item: InventoryItem,
        tooltip: any /* Unknown */,
        itemindex: number,
        height: number
    };

    export class ISScrollingListBoxInstance extends ISPanelJoypadInstance {
        protected constructor();

        items: ISScrollingListBoxEntry[];
        onmousedown: Function;
        onmousedblclick: Function;
        target: any; /* Unknown */
        count: number;
        itemheightoverride: any; /* Unknown */
        selected: number;
        smoothScrollTargetY: number;
        smoothScrollY: number;
        tooltipUI: ISToolTipInstance;
        altBgColor: RGBA;
        listHeaderColor: RGBA;
        drawBorder: boolean;
        font: UIFont;
        fontHgt: number;
        itemPadY: number;
        itemheight: number;
        columns: {name: string, size: number}[]; /* Unknown */
        listHeight: number;
        doRepaintStencil: boolean;

        rowAt(x: number, y: number): number;
        topOfItem(index: number): number;
        prevVisibleIndex(index: number): number;
        nextVisibleItem(index: number): number;
        isMouseOverScrollBar(): boolean;
        addItem(name: string, item: InventoryItem): number;
        insertItem(index: number, name: string, item: InventoryItem): number;
        removeItem(itemText: string): InventoryItem;
        removeItemByIndex(itemIndex: number): InventoryItem;
        removeFirst(): void;
        size(): number;
        setOnMouseDownFunction(target: any /* Unknown */, onmousedown: Function): void;
        setOnMouseDoubleClick(target: any /* Unknown */, onmousedblclick: Function): void;
        doDrawItem(y: number, item: InventoryItem, alt: any /* Unknown & Unused */): number;
        clear(): void;
        /** (Empty Method) */
        scrollToSelected(): void;
        sort(): void;
        updateTooltip(): void;
        updateSmoothScrolling(): void;
        setFont(font: UIFont, padY: number): void;
        addColumn(columnName: string, size: number): void;
    }

    export class ISScrollingListBox {
        private constructor();

        joypadListIndex: number;

        static new(x: number, y: number, width: number, height: number): ISScrollingListBoxInstance;
    }
}