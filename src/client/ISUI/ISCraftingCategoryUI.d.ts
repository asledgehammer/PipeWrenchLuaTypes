import { zombie } from 'Zomboid';
type IsoGameCharacter = zombie.characters.IsoGameCharacter;
type Texture = zombie.core.textures.Texture;
type InventoryItem = zombie.inventory.InventoryItem;

declare module 'ISUI' {
    export class ISCraftingCategoryUIInstance extends ISPanelJoypadInstance {
        protected constructor();

        craftingUI: ISCraftingCategoryUIInstance;
        character: IsoGameCharacter;
        favoriteStar: Texture;
        favCheckedTex: Texture;
        favNotCheckedTex: Texture;
        favPadX: number;
        favWidth: number;
        lastText: string;
        filterEntry: ISTextEntryBoxInstance;
        filterAll: ISTickBoxInstance;
        filteringAll: boolean;
        recipes: ISScrollingListBoxInstance;
        selected: number;

        filter(): void;
        syncAllFilters(): void;
        drawRecipesMap(y: number, item: InventoryItem, alt?: any /* Unused */): number;
        getFavoriteX(): number;
        isMouseOverFavorite(x: number): boolean;
        onMouseDown_Recipes(x: number, y: number): void;
        create(): void;
        onFilterAll(index: number, selected: any /* Unused */): void;
        addToFavorite(fromKeyboard: boolean): void;
        onMouseDoubleClick_Recipes(x: number, y: number): void;
    }

    export class ISCraftingCategoryUI {
        private constructor();

        static readonly SMALL_FONT_HGT: number;
        static readonly MEDIUM_FONT_HGT: number;
        static instance: ISCraftingCategoryUIInstance;

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            craftingUI: ISCraftingCategoryUIInstance
        ): ISCraftingCategoryUIInstance;
    }
}
