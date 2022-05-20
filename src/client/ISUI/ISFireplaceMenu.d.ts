import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type IsoObject = zombie.iso.IsoObject;
type IsoFireplace = zombie.iso.objects.IsoFireplace;

declare module 'ISUI' {
    export class ISFireplaceMenu {
        private constructor();

        static OnFillWorldObjectContextMenu(
            player: number,
            context: ISContextMenuInstance,
            worldobjects: IsoObject[],
            test: boolean
        ): boolean;
        static OnDisplayInfo(worldobjects: IsoObject[], player: number, fireplace: IsoFireplace): void;
        static toPlayerInventory(playerObj: IsoPlayer, item: InventoryItem): void;
        static onAddFuel(playerObj: IsoPlayer, fireplace: IsoFireplace, fuelType: string): void;
        static addFuel(playerObj: IsoPlayer, fireplace: IsoFireplace, fuelItems: InventoryItem[]): void;
        static onAddMultipleFuel(playerObj: IsoPlayer, fireplace: IsoFireplace, fuelType: string): void;
        static onAddAllFuel(playerObj: IsoPlayer, fireplace: IsoFireplace): void;
        static onLightFromLiterature(
            playerObj: IsoPlayer,
            itemType: string,
            lighter: InventoryItem,
            fireplace: IsoFireplace,
            fuelAmount: number
        ): void;
        static onLightFromPetrol(
            worldobjects: IsoObject[],
            player: number,
            lighter: InventoryItem,
            petrol: InventoryItem,
            fireplace: IsoFireplace
        ): void;
        static onLightFromKindle(
            worldobjects: IsoObject[],
            player: number,
            percedWood: InventoryItem,
            stickOrBranch: boolean,
            fireplace: IsoFireplace
        ): void;
        static onExtinguish(worldobjects: IsoObject[], player: number, fireplace: IsoFireplace): void;
    }
}
