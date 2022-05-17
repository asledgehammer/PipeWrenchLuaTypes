import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;

declare module 'ISUI' {
    export class ISDPadWheels {
        static onDisplayLeft(joypadData: JoypadData): void;
        static onDisplayRight(joypadData: JoypadData): void;
        static onDisplayUp(joypadData: JoypadData): void;
        static onDisplayDown(joypadData: JoypadData): void;
        static onEquipPrimary(playerObj: IsoPlayer, item: InventoryItem): void;
        static onToggleLight(playerObj: IsoPlayer, item: InventoryItem): void;
        static onShout(playerObj: IsoPlayer): void;
    }
}
