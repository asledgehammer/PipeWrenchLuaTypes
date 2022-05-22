import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type InventoryItem = zombie.inventory.InventoryItem;
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export class ISMakeUpUIInstance extends ISCollapsableWindowJoypadInstance {
        protected constructor();

        character: IsoPlayer;
        item: InventoryItem;
        title: string;
        desc: string;
        playerNum: number;
        needsUpdateLayout: boolean;
        needsUpdateAvatar: boolean;
        avatarPanel: ISUI3DModelInstance;
        avatarBackgroundTexture: Texture;
        avatarX: number;
        avatarY: number;
        avatarWidth: number;
        avatarHeight: number;
        avatarXOffset: number;
        avatarYOffset: number;
        avatarZoom: number;
        makeUpSelected: boolean;
        previousMakeUp: boolean;
        prevFocus: JoyFocus;
        drawJoypadFocus: boolean;
        comboMakeup: ISComboBoxInstance;
        add: ISButtonInstance;
        remove: ISButtonInstance;
        leftPanel: ISPanelInstance;
        rightPanel: ISPanelInstance;
        location: ISComboBoxInstance;
        removeMakeUpCombo: ISComboBoxInstance;
        addMakeupLbl: ISLabelInstance;
        removeMakeupLbl: ISLabelInstance;

        onSelectRemoveMakeUp(): void;
        onRemoveMakeUp(): void;
        initRemoveMakeUpCombo(): void;
        initLocationCombo(): void;
        reinit(): void;
        reinitCombos(): void;
        setWidthToChildren(panel: ISPanelInstance, minWidth: number): void;
        updateLayout(): void;
        onApplyMakeUp(): void;
        onSelectMakeUp(): void;
        onSelectLocation(): void;
        updateAvatar(): void;
        displayBodyPart(cat: any /* Unknown */): void;
    }

    export class ISMakeUpUI {
        private constructor();

        static windows: { [index: number]: ISUIElementInstance };

        static new(x: number, y: number, item: InventoryItem, character: IsoPlayer): ISMakeUpUIInstance;
        static OnPlayerDeath(playerObj: IsoPlayer): void;
    }
}
