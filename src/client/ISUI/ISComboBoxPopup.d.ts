import { zombie } from "Zomboid";
type InventoryItem = zombie.inventory.InventoryItem;

declare module 'ISUI' {
    export class ISComboBoxPopupInstance {
        protected constructor();

        doDrawItem(y: number, item: InventoryItem, alt?: any /* Unused */): number;
        setComboBox(comboBox: ISComboBoxInstance): void;
    }

    export class ISComboBoxPopup {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISComboBoxPopupInstance;
    }
}
