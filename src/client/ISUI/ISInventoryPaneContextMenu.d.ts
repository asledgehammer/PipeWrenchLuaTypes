import { java, zombie } from 'Zomboid';
type ArrayList<E> = java.util.ArrayList<E>;
type BodyPart = zombie.characters.BodyDamage.BodyPart;
type IsoPlayer = zombie.characters.IsoPlayer;
type WeaponPart = zombie.inventory.types.WeaponPart;
type InventoryItem = zombie.inventory.InventoryItem;
type ItemContainer = zombie.inventory.ItemContainer;
type AlarmClock = zombie.inventory.types.AlarmClock;
type Clothing = zombie.inventory.types.Clothing;
type InventoryContainer = zombie.inventory.types.InventoryContainer;
type Drainable = zombie.inventory.types.Drainable;
type DrainableComboItem = zombie.inventory.types.DrainableComboItem;
type Food = zombie.inventory.types.Food;
type HandWeapon = zombie.inventory.types.HandWeapon;
type Literature = zombie.inventory.types.Literature;
type MapItem = zombie.inventory.types.MapItem;
type IsoObject = zombie.iso.IsoObject;
type EvolvedRecipe = zombie.scripting.objects.EvolvedRecipe;
type Fixing = zombie.scripting.objects.Fixing;
type Fixer = zombie.scripting.objects.Fixing$Fixer;
type VehiclePart = zombie.vehicles.VehiclePart;
type IsoTrap = zombie.iso.objects.IsoTrap;
type Recipe = zombie.scripting.objects.Recipe;
type Texture = zombie.core.textures.Texture;
type RecipeSource = zombie.scripting.objects.Recipe$Source;

declare module 'ISUI' {
    type CraftTooltipContent = {
        type: 'text' | 'image';

        // Common
        x: number;
        y: number;
        width: number;
        height: number;

        // Text-Specific
        text?: string;
        r?: number;
        g?: number;
        b?: number;

        // Image-Specific
        texture?: Texture;
    };
    type CraftTooltipTextContent = RGB & {
        type: string;
        x: number;
        y: number;
        width: number;
        height: number;
        text: string;
    };

    type CraftTooltipImageContent = {
        type: string;
        x: number;
        y: number;
        width: number;
        height: number;
        texture: Texture;
    };

    class CraftTooltipInstance {
        protected constructor();

        contents: CraftTooltipContent[];
        playerNum: number;
        character: IsoPlayer;
        containerList: ArrayList<ItemContainer>;
        typesAvailable: { [id: string]: number };
        recipe: Recipe;

        addText(x: number, y: number, text: string, red: number, green: number, blue: number): void;
        addImage(x: number, y: number, textureName: string): void;
        getSingleSourceText(source: RecipeSource): string;
        /** @returns true if item2's type is in item1's getClothingExtraItem() list. */
        isExtraClothingItemOf(item1: InventoryItem, item2: InventoryItem): boolean;
        isWaterSource(item: InventoryItem, count: number): boolean;
        getContainers(): void;
        getAvailableItemsType(): void;
        layoutContents(x: number, y: number): { width: number; height: number };
        renderContents(): void;
        reset(): void;
    }
    class CraftTooltip {
        private constructor();

        static tooltipPool: any; /* Unknown */
        static tooltipsUsed: any; /* Unknown */

        static new(): CraftTooltipInstance;
        static addToolTip(): any; /* Unknown */
        static releaseAll(): void;
    }

    export class ISInventoryPaneContextMenuInstance {
        protected constructor();

        // Non-static methods but no constructor?
        onRenameFoodClick(button: ISButtonInstance, player: IsoPlayer, item: InventoryItem): void;
        onRenameBagClick(button: ISButtonInstance, player: IsoPlayer, item: InventoryItem): void;
    }

    export class ISInventoryPaneContextMenu {
        private constructor();

        static tooltipPool: any; /* Unknown */
        static tooltipsUsed: any; /* Unknown */

        static new(): ISInventoryPaneContextMenuInstance;
        /** MAIN METHOD FOR CREATING RIGHT CLICK CONTEXT MENU FOR INVENTORY ITEMS */
        static createMenu(
            player: number,
            isInPlayerInventory: boolean,
            items: InventoryItem[],
            x: number,
            y: number,
            origin: any /* Unknown */
        ): ISContextMenuInstance | void;
        static createMenuNoItems(playerNum: number, isLoot: boolean, x: number, y: number): ISContextMenuInstance;
        static doStoveMenu(context: ISContextMenuInstance, playerNum: number): void;
        static doTrashCanMenu(context: ISContextMenuInstance, playerNum: number): void;
        static doLiteratureMenu(context: ISContextMenuInstance, items: InventoryItem[], player: number): void;
        static doBandageMenu(context: ISContextMenuInstance, items: InventoryItem[], player: number): void;
        static canRipItem(playerObj: IsoPlayer, item: InventoryItem): boolean;
        static doClothingRecipeMenu(
            playerObj: IsoPlayer,
            clothing: Clothing,
            items: InventoryItem[],
            context: ISContextMenuInstance
        ): void;
        static onInspectClothing(playerObj: IsoPlayer, clothing: Clothing): void;
        static onInspectClothingUI(player: IsoPlayer, clothing: Clothing): void;
        static doClothingPatchMenu(player: number, clothing: Clothing, context: ISContextMenuInstance): void;
        static removePatch(
            player: any /* Unknown */,
            clothing: Clothing,
            part: any /* Unknown */,
            needle: InventoryItem
        ): void;
        static removeAllPatches(
            player: any /* Unknown */,
            clothing: Clothing,
            parts: any /* Unknown */,
            needle: InventoryItem
        ): void;
        static repairClothing(
            player: any /* Unknown */,
            clothing: Clothing,
            part: any /* Unknown */,
            fabric: InventoryItem,
            thread: InventoryItem,
            needle: InventoryItem
        ): void;
        static repairAllClothing(
            player: any /* Unknown */,
            clothing: Clothing,
            parts: any /* Unknown */,
            fabric: InventoryItem,
            thread: InventoryItem,
            needle: InventoryItem,
            onlyHoles: boolean
        ): void;
        static doWearClothingTooltip(
            playerObj: IsoPlayer,
            newItem: InventoryItem,
            currentItem: InventoryItem,
            option: any /* Unknown */
        ): InventoryItem[];
        static doWearClothingMenu(
            player: number,
            clothing: Clothing,
            items: InventoryItem[],
            context: ISContextMenuInstance
        ): void;
        static doChangeFireModeMenu(playerObj: IsoPlayer, weapon: HandWeapon, context: ISContextMenuInstance): void;
        static onChangefiremode(playerObj: IsoPlayer, weapon: HandWeapon, newfiremode: string): void;
        static doReloadMenuForBullets(
            playerObj: IsoPlayer,
            bullet: InventoryItem,
            context: ISContextMenuInstance
        ): void;
        static doReloadMenuForMagazine(
            playerObj: IsoPlayer,
            magazine: InventoryItem,
            context: ISContextMenuInstance
        ): void;
        static doBulletMenu(playerObj: IsoPlayer, weapon: HandWeapon, context: ISContextMenuInstance): void;
        static doReloadMenuForWeapon(playerObj: IsoPlayer, weapon: HandWeapon, context: ISContextMenuInstance): void;
        static transferIfNeeded(playerObj: IsoPlayer, item: InventoryItem): void;
        static onEjectMagazine(playerObj: IsoPlayer, weapon: HandWeapon): void;
        static transferBullets(playerObj: IsoPlayer, ammoType: string, currentAmmo: number, maxAmmo: number): number;
        static onInsertMagazine(playerObj: IsoPlayer, weapon: HandWeapon, magazine: InventoryItem): void;
        static onRackGun(playerObj: IsoPlayer, weapon: HandWeapon, magazine: InventoryItem): void;
        static onLoadBulletsIntoFirearm(playerObj: IsoPlayer, weapon: HandWeapon): void;
        static onUnloadBulletsFromFirearm(playerObj: IsoPlayer, weapon: HandWeapon): void;
        static doMagazineMenu(playerObj: IsoPlayer, magazine: InventoryItem, context: ISContextMenuInstance): void;
        static onLoadBulletsInMagazine(playerObj: IsoPlayer, magazine: InventoryItem, ammoCount: number): void;
        static onUnloadBulletsFromMagazine(playerObj: IsoPlayer, magazine: InventoryItem): void;
        static getEvoItemCategories(items: InventoryItem[], evorecipe: EvolvedRecipe): Food[];
        static onPlaceCarBatteryCharger(playerObj: IsoPlayer, carBatteryCharger: any /* Unknown */): void;
        static onRipClothing(playerObj: IsoPlayer, items: InventoryItem[]): void;
        static onCraftSheetRope(playerObj: IsoPlayer, items: InventoryItem[]): void;
        static addItemInEvoRecipe(
            subMenuRecipe: any /* Unknown */,
            baseItem: InventoryItem,
            evoItem: InventoryItem,
            extraInfo: any /* Unknown */,
            evorecipe2: EvolvedRecipe,
            player: any /* Unknown */
        ): void;
        static addEatTooltip(option: any /* Unknown */, items: InventoryItem[], percent: number): void;
        static doEatOption(
            context: ISContextMenuInstance,
            cmd: string,
            items: InventoryItem[],
            player: number,
            playerObj: IsoPlayer,
            foodItems: Food[]
        ): void;
        static checkConsolidate(
            drainable: Drainable,
            player: number,
            context: ISContextMenuInstance,
            previousPourInto: any /* Unknown */
        ): void;
        static onConsolidate(drainable: Drainable, intoItem: any /* Unknown */, player: any /* Unknown */): void;
        static OnTriggerRemoteController(remoteController: any /* Unknown */, player: number): void;
        static OnLinkRemoteController(
            itemToLink: InventoryItem,
            remoteController: any /* Unknown */,
            player: number
        ): void;
        static isAllFav(items: InventoryItem[]): boolean;
        static isAnyAllowed(container: ItemContainer, items: InventoryItem[]): boolean;
        static isAllNoDropMoveable(items: InventoryItem[]): boolean;
        static OnResetRemoteControlID(item: InventoryItem, player: number): void;
        static doDrinkForThirstMenu(
            context: ISContextMenuInstance,
            playerObj: IsoPlayer,
            waterContainer: DrainableComboItem
        ): void;
        static onDrinkForThirst(waterContainer: DrainableComboItem, playerObj: IsoPlayer): void;
        static onDrink(
            items: InventoryItem[],
            waterContainer: DrainableComboItem,
            percentage: number,
            player: number
        ): void;
        static onAddItemInEvoRecipe(
            recipe: EvolvedRecipe,
            baseItem: InventoryItem,
            usedItem: InventoryItem,
            player: number
        ): void;
        static buildFixingMenu(
            brokenObject: IsoObject,
            player: number,
            fixing: Fixing,
            fixOption: any /* Unknown & Unused */,
            subMenuFix: any /* Unknown */,
            vehiclePart: VehiclePart
        ): void;
        static getContainers(character: IsoPlayer): ItemContainer[];
        static addFixerSubOption(
            brokenObject: IsoObject,
            player: number,
            fixing: Fixing,
            fixer: Fixer,
            subMenuFix: any /* Unknown */,
            vehiclePart: VehiclePart
        ): any; /* Unknown */
        static onFix(
            brokenObject: IsoObject,
            player: number,
            fixing: Fixing,
            fixer: Fixer,
            vehiclePart: VehiclePart
        ): void;
        static onDyeHair(hairDye: InventoryItem, playerObj: IsoPlayer, beard: any /* Unknown */): void;
        static onDryMyself(towels: InventoryItem[], player: number): void;
        static onSetBombTimer(trap: IsoTrap, player: number): void;
        static onSetBombTimerClick(button: ISButtonInstance, player: number, item: InventoryItem): void;
        static onStopAlarm(alarm: AlarmClock, player: number): void;
        static onSetAlarm(alarm: AlarmClock, player: number): void;
        static onRenameMap(map: MapItem, player: number): void;
        static onRenameBag(bag: any /* Unknown */, player: number): void;
        static onRenameFood(food: Food, player: number): void;
        static onCheckMap(map: MapItem, player: number): void;
        static onWriteSomething(notebook: Literature, editable: boolean, player: number): void;
        static dryMyself(item: InventoryItem, player: number): void;
        static onApplyBandage(bandages: any /* Unknown */, bodyPart: BodyPart, player: number): void;
        static applyBandage(item: InventoryItem, bodyPart: BodyPart, player: number): void;
        static haveDamagePart(playerId: number): BodyPart[];
        static onLiteratureItems(items: InventoryItem[], player: number): void;
        static readItem(item: InventoryItem, player: number): void;
        static onUnEquip(items: InventoryItem[], player: number): void;
        static unequipItem(item: InventoryItem, player: number): void;
        static onWearItems(items: InventoryItem[], player: number): void;
        static onActivateItem(light: any /* Unknown */, player: any /* Unknown & Unused */): void;
        /** Wear a clothe, loot it first if it's not in the player's inventory. */
        static wearItem(item: InventoryItem, player: number): void;
        static onPutItems(items: InventoryItem[], player: number): void;
        static canMoveTo(items: InventoryItem[], dest: any, player: number): InventoryContainer | ItemContainer | null;
        static hasRoomForAny(playerObj: IsoPlayer, container: ItemContainer, items: InventoryItem[]): boolean;
        static canUnpack(items: InventoryItem, player: number): boolean;
        static onFavorite(items: InventoryItem[], item2: InventoryItem, fav: boolean): void;
        static onMoveItemsTo(items: InventoryItem[], dest: any, player: number): void;
        static canAddManyItems(recipe: Recipe, selectedItem: InventoryItem, playerObj: IsoPlayer): boolean;
        static addDynamicalContextMenu(
            selectedItem: InventoryItem,
            context: ISContextMenuInstance,
            recipeList: any /* Unknown */,
            player: number,
            containerList: any /* Unknown */
        ): void;
        static addToolTip(): ISToolTipInstance;
        static OnCraft(selectedItem: InventoryItem, recipe: Recipe, player: number, all: boolean): void;
        static OnCraftComplete(
            completedAction: any /* Unknown*/,
            recipe: Recipe,
            playerObj: IsoPlayer,
            container: ItemContainer,
            containers: ItemContainer[],
            selectedItem: InventoryItem
        ): void;
        static eatItem(item: InventoryItem, percentage: number, player: number): void;
        static OnPrimaryWeapon(items: InventoryItem[], player: number): void;
        static OnReload(items: InventoryItem[], player: number): void;
        static onPillsItems(items: InventoryItem[], player: number): void;
        static takePill(item: InventoryItem, player: number): void;
        static OnTwoHandsEquip(items: InventoryItem[], player: number): void;
        static OnSecondWeapon(items: InventoryItem[], player: number): void;
        static equipWeapon(weapon: HandWeapon, primary: boolean, twoHands: boolean, player: number): void;
        static onInformationItems(items: InventoryItem[]): void;
        static information(item: InventoryItem): void;
        static removeToolTip(): void;
        /**
         * Function that goes through all items selected and eats them. eat only 1 of the item list
         */
        static onEatItems(items: InventoryItem[], percentage: number, player: number): void;
        static onPlaceTrap(weapon: HandWeapon, player: IsoPlayer): void;
        static onRemoveUpgradeWeapon(weapon: HandWeapon, part: WeaponPart, playerObj: IsoPlayer): void;
        static onUpgradeWeapon(weapon: HandWeapon, part: WeaponPart, player: IsoPlayer): void;
        static onDropItems(items: InventoryItem[], player: number): void;
        static litCandleExtinguish(item: InventoryItem, player: number): InventoryItem;
        static dropItem(item: InventoryItem, player: number): void;
        static onGrabItems(items: InventoryItem[], player: number): void;
        static transferItems(items: InventoryItem[], playerInv: ItemContainer, player: number, dontWalk: boolean): void;
        static onGrabHalfItems(items: InventoryItem[], player: number): void;
        static onEditItem(items: InventoryItem[], player: IsoPlayer, item: InventoryItem): void;
        static onGrabOneItems(items: InventoryItem[], player: number): void;
        static onTransferWater(
            items: InventoryItem[],
            itemFrom: InventoryItem,
            itemTo: InventoryItem,
            player: number
        ): void;
        static onEmptyWaterContainer(items: InventoryItem[], waterSource: InventoryItem, player: number): void;
        static canReplaceStoreWater(item: InventoryItem): boolean;
        static canReplaceStoreWater2(itemType: string): boolean;
        static onDumpContents(items: InventoryItem[], item: InventoryItem, time: number, player: number): void;
        static startWith(text: string, start: string): string;
        static getRealEvolvedItemUse(evoItem: InventoryItem, evorecipe2: EvolvedRecipe, cookingLvl: number): number;
        static doEquipOption(
            context: ISContextMenuInstance,
            playerObj: IsoPlayer,
            IsWeapon: boolean,
            items: InventoryItem[],
            player: number
        ): void;
        static equipHeavyItem(playerObj: IsoPlayer, item: InventoryItem): void;
        static onMakeUp(makeup: InventoryItem, playerObj: IsoPlayer): void;
        static doGrabMenu(context: ISContextMenuInstance, items: InventoryItem[], player: number): void;
        static doEvorecipeMenu(
            context: ISContextMenuInstance,
            items: InventoryItem[],
            player: number,
            evorecipe: EvolvedRecipe,
            baseItem: InventoryItem,
            containerList: ItemContainer[]
        ): void;
        static doMakeUpMenu(context: ISContextMenuInstance, makeup: InventoryItem, playerObj: IsoPlayer): void;
        static getItemInstance(type: string): InventoryItem;
        static doClothingItemExtraMenu(
            context: ISContextMenuInstance,
            clothingItemExtra: any /* Unknown */,
            playerObj: IsoPlayer
        ): void;
        static onClothingItemExtra(item: InventoryItem, extra: any /* Unknown */, playerObj: IsoPlayer): void;
        static doPlace3DItemOption(
            items: InventoryItem[],
            player: any /* Either number or IsoPlayer */,
            context: ISContextMenuInstance
        ): void;
        static onPlaceItemOnGround(items: InventoryItem[], playerObj: IsoPlayer): void;
    }
}
