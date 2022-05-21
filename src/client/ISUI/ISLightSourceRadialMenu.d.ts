import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type Recipe = zombie.scripting.objects.Recipe;
import { ISBaseObjectInstance } from 'shared';

declare module 'ISUI' {
    export class ISLightSourceRadialMenuInstance extends ISBaseObjectInstance {
        protected constructor();

        character: IsoPlayer;
        playerNum: number;

        center(): void;
        getInsertBatteryRecipe(item: InventoryItem, containerList: any /* Unknown */): Recipe;
        getRemoveBatteryRecipe(item: InventoryItem, containerList: any /* Unknown */): Recipe;
        fillMenuForItem(menu: any /* Unknown */, item: InventoryItem): void;
        fillMenu(): void;
        display(): void;
        onEquipLight(item: InventoryItem, primary: boolean): void;
        onInsertBattery(item: InventoryItem): void;
        onRemoveBattery(item: InventoryItem): void;
        onToggle(item: InventoryItem): void;
        onLightCandle(item: InventoryItem): void;
        onExtinguishCandle(item: InventoryItem): void;
    }

    export class ISLightSourceRadialMenu {
        private constructor();

        static new(character: IsoPlayer): ISLightSourceRadialMenuInstance;
        static checkKey(key: number): boolean;
        static onKeyPressed(key: number): void;
        static onKeyRepeat(key: number): void;
        static onKeyReleased(key: number): void;
    }
}
