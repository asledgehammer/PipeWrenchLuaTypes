declare module 'ISUI' {
    import { zombie } from "Zomboid";

    export class ISBBQWindow {
        private constructor();

        static OnFillWorldObjectContextMenu(player: zombie.characters.IsoPlayer, context: ISContextMenuInstance, worldobjects: zombie.iso.IsoObject[], test: boolean): boolean;
        static onDisplayInfo(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue): void;
        static FindPropaneTank(player: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue): zombie.inventory.InventoryItem;
        static onAddFuel(playerObj: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue, fuelType: string): void;
        static onAddMultipleFuel(playerObj: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue): void;
        static onAddAllFuel(playerObj: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue): void;
        static onLightFromLiterature(playerObj: zombie.characters.IsoPlayer, itemType: string, lighter: zombie.inventory.InventoryItem, bbq: zombie.iso.objects.IsoBarbecue): void;
        static onLightFromPetrol(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, lighter: zombie.inventory.InventoryItem, petrol: zombie.inventory.InventoryItem, bbq: zombie.iso.objects.IsoBarbecue): void;
        static onLightFromKindle(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, percedWood: zombie.inventory.InventoryItem, stickOrBranch: zombie.inventory.InventoryItem, bbq: zombie.iso.objects.IsoBarbecue): void;
        static onExtinguish(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue): void;
        static onInsertPropaneTank(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue, tank: zombie.inventory.InventoryItem): void;
        static onRemovePropaneTank(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue, tank: zombie.inventory.InventoryItem): void;
        static onToggle(worldobjects: zombie.iso.IsoObject[], player: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue, tank: zombie.inventory.InventoryItem): void;
    }
}
