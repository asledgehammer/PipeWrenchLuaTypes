import { Texture, zombie } from 'Zomboid';
type IsoGameCharacter = zombie.characters.IsoGameCharacter;
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type ItemContainer = zombie.inventory.ItemContainer;
type EvolvedRecipe = zombie.scripting.objects.EvolvedRecipe;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISCraftingUIInstance extends ISCollapsableWindowInstance {
        protected constructor();

        selectedIndex: any[]; /* Unknown */
        categories: any; /* Unknown */
        recipesList: { [id: string]: { [index: number]: any } }; /* Unknown */
        recipesListH: { [index: number]: string }; /* Unknown */
        containerList: any[]; /* Unknown */
        selected: any; /* Unknown */
        catList: any; /* Unknown */
        selectedRecipeItem: any; /* Unknown */
        panel: ISTabPanelInstance;
        craftInProgress: boolean;
        knownRecipes: number;
        totalRecipes: number;
        allRecipesList: any[];
        character: IsoGameCharacter;
        tickBox: ISTickBoxInstance;
        playerNum: number;
        itemheight: number;
        font: UIFont;
        recipeListHasFocus: boolean;
        ingredientPanel: ISScrollingListBoxInstance;
        TreeExpanded: Texture;
        refreshTypesAvailableMS: number;
        PoisonTexture: Texture;
        ingredientListbox: ISScrollingListBoxInstance;
        catListButtons: ISButtonInstance[];
        drawJoypadFocus: boolean;
        LabelClose: string;
        LabelCraftOne: string;
        LabelCraftAll: string;
        LabelFavorite: string;
        bottomInfoText1: string;
        bottomInfoText2: string;
        keysRichText: ISRichTextLayoutInstance;
        keysText: string;
        noteRichText: ISRichTextLayoutInstance;
        craftOneButton: ISButtonInstance;
        craftAllButton: ISButtonInstance;
        debugGiveIngredientsButton: ISButtonInstance;
        needRefreshIngredientPanel: boolean;
        LabelDashWidth: number;
        LabelDash: string;
        addIngredientButton: ISButtonInstance;
        taskLabel: ISLabelInstance;
        fgBar: RGBA;
        lineH: number;
        count: number;
        ItemInstances: { [id: string]: InventoryItem };

        getRecipeListBox(): any; /* Unknown */
        setVisible(bVisible: boolean): void;
        refresh(): void;
        isWaterSource(item: InventoryItem, count: number): boolean;
        transferItems(): InventoryItem[];
        getAvailableItemsType(): number[];
        getContainers(): void;
        refreshTickBox(): void;
        drawNonEvolvedIngredient(y: number, item: InventoryItem, alt: any /* Unused */): number;
        /**
         * @returns True if item2's type is in item1's `getClothingExtraItem()` list.
         */
        isExtraClothingItemOf(item1: InventoryItem, item2: InventoryItem): boolean;
        removeExtraClothingItemsFromList(index: number, item: InventoryItem, itemList: InventoryItem[]): void;
        /** Non-evolved recipes. */
        refreshIngredientPanel(): void;
        drawEvolvedIngredient(y: number, item: InventoryItem, alt: any /* Unused */): number;
        onDblClickIngredientListbox(data: any): void;
        onAddRandomIngredient(button: ISButtonInstance): void;
        onAddIngredient(): void;
        /** Evolved recipes only. */
        refreshIngredientList(): void;
        onActivateView(): void;
        populateRecipesList(): void;
        sortList(): void;
        isKeyConsumed(key: number): boolean;
        onKeyRelease(key: number): void;
        getFavoriteModDataString(recipe: EvolvedRecipe | any /* Unknown */): string;
        getFavoriteModDataLocalString(recipe: EvolvedRecipe | any /* Unknown */): string;
        onResize(): void;
        addItemInEvolvedRecipe(button: ISButtonInstance): void;
        craftAll(): void;
        craft(button: ISButtonInstance, all: boolean): void;
        onCraftComplete(
            completedAction: any /* Unknown */,
            recipe: any /* Unknown */,
            container: ItemContainer,
            containers: any /* Unknown */
        ): void;
        GetItemInstance(type: string): InventoryItem;
        debugGiveIngredients(): void;
    }

    export class ISCraftingUI {
        private constructor();

        static instance: ISCraftingUIInstance;
        static readonly largeFontHeight: number;
        static readonly mediumFontHeight: number;
        static readonly smallFontHeight: number;
        static bottomInfoHeight: number;
        static qwertyConfiguration: boolean;
        static bottomTextSpace: string;
        /** {@link Keyboard.KEY_LEFT} */
        static readonly leftCategory: number;
        /** {@link Keyboard.KEY_RIGHT} */
        static readonly rightCategory: number;
        /** {@link Keyboard.KEY_UP} */
        static readonly upArrow: number;
        /** {@link Keyboard.KEY_DOWN} */
        static readonly downArrow: number;

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            character: IsoGameCharacter
        ): ISCraftingUIInstance;
        static load(): void;
        static onKeyPressed(key: number): void;
        static onPressKey(key: number): void;
        static toggleCraftingUI(): void;
        static sortByName(a: any, b: any): any; /* Unknown */
        static ReturnItemsToOriginalContainer(playerObj: IsoPlayer, items: InventoryItem[]): void;
    }
}
