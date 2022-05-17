import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type IsoObject = zombie.iso.IsoObject;
type IsoBarbecue = zombie.iso.objects.IsoBarbecue;

declare module 'ISUI' {
    export class ISBBQWindow {
        private constructor();

        static OnFillWorldObjectContextMenu(
            player: IsoPlayer,
            context: ISContextMenuInstance,
            worldobjects: IsoObject[],
            test: boolean
        ): boolean;
        static onDisplayInfo(worldobjects: IsoObject[], player: IsoPlayer, bbq: IsoBarbecue): void;
        static FindPropaneTank(player: IsoPlayer, bbq: IsoBarbecue): InventoryItem;
        static onAddFuel(playerObj: IsoPlayer, bbq: IsoBarbecue, fuelType: string): void;
        static onAddMultipleFuel(playerObj: IsoPlayer, bbq: IsoBarbecue): void;
        static onAddAllFuel(playerObj: IsoPlayer, bbq: IsoBarbecue): void;
        static onLightFromLiterature(
            playerObj: IsoPlayer,
            itemType: string,
            lighter: InventoryItem,
            bbq: IsoBarbecue
        ): void;
        static onLightFromPetrol(
            worldobjects: IsoObject[],
            player: IsoPlayer,
            lighter: InventoryItem,
            petrol: InventoryItem,
            bbq: IsoBarbecue
        ): void;
        static onLightFromKindle(
            worldobjects: IsoObject[],
            player: IsoPlayer,
            percedWood: InventoryItem,
            stickOrBranch: InventoryItem,
            bbq: IsoBarbecue
        ): void;
        static onExtinguish(worldobjects: IsoObject[], player: IsoPlayer, bbq: IsoBarbecue): void;
        static onInsertPropaneTank(
            worldobjects: IsoObject[],
            player: IsoPlayer,
            bbq: IsoBarbecue,
            tank: InventoryItem
        ): void;
        static onRemovePropaneTank(
            worldobjects: IsoObject[],
            player: IsoPlayer,
            bbq: IsoBarbecue,
            tank: InventoryItem
        ): void;
        static onToggle(worldobjects: IsoObject[], player: IsoPlayer, bbq: IsoBarbecue, tank: InventoryItem): void;
    }
}
