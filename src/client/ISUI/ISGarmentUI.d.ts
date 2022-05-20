import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type BloodBodyPartType = zombie.characterTextures.BloodBodyPartType;
type Clothing = zombie.inventory.types.Clothing;

declare module 'ISUI' {
    export class ISGarmentUIInstance extends ISCollapsableWindowInstance {
        protected constructor();

        chr: IsoPlayer;
        playerNum: number;
        title: string;
        clothing: Clothing;
        sex: string;
        fgBar: RGBA;
        progressX1: number;
        progressX2: number;
        progressX3: number;
        progressWidth: number;
        progressWidth1: number;
        progressWidth2: number;
        progressWidth3: number;
        progressWidthTotal: number;
        progressHeight: number;
        noRepairWidth: number;
        bodyPartColumn: number;
        biteColumn: number;
        scratchColumn: number;
        bulletColumn: number;
        texturesYOffset: number;
        texturesHeight: number;
        addedHeight: number;
        drawJoypadFocus: boolean;
        listbox: ISScrollingListBoxInstance;
        parts: any; /* Unknown */
        texturesY: number;
        items: any; /* Unknown */
        selected: number;
        mouseoverselected: number;

        calculateHeight(doListHeight: boolean): void;
        onBodyPartListRightMouseUp(x: number, y: number): void;
        doPatch(
            fabric: InventoryItem,
            thread: InventoryItem,
            needle: InventoryItem,
            part: BloodBodyPartType,
            context: ISContextMenuInstance,
            submenu: ISContextMenuInstance
        ): ISContextMenuInstance | void;
        getPaddablePartsNumber(clothing: Clothing, parts: BloodBodyPartType[]): number;
        doContextMenu(part: BloodBodyPartType, x: number, y: number): ISContextMenuInstance;
        doDrawItem(y: number, item: InventoryItem, alt: any /* Unused */): number;
        addTextures(type: string, textureName: string, overlayName: string): void;
        create(): void;
        calcProgressWidths(): void;
        calcProgressPositions(): void;
        calcColumnWidths(): void;
    }

    export class ISGarmentUI {
        private constructor();

        static windows: any; /* Unknown */

        static new(x: number, y: number, character: IsoPlayer, clothing: Clothing): ISGarmentUIInstance;
    }
}
