import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type HandWeapon = zombie.inventory.types.HandWeapon;
type InventoryItem = zombie.inventory.InventoryItem;

import { ISBaseObjectInstance } from 'shared';

declare module 'ISUI' {
    class BaseCommandInstance {
        protected constructor();

        frm: any; /* Unknown */
        character: IsoPlayer;

        getWeapon(): HandWeapon;
        fillMenu(menu: any, weapon: HandWeapon): void;
    }
    class BaseCommand {
        private constructor();

        static new(frm: any /* Unknown */): BaseCommandInstance;
    }

    class CInsertMagazineInstance extends BaseCommandInstance {
        protected constructor();

        invoke(): void;
    }
    class CInsertMagazine {
        private constructor();

        static new(frm: any /* Unknown */): CInsertMagazineInstance;
    }

    class CEjectMagazineInstance extends BaseCommandInstance {
        protected constructor();

        invoke(): void;
    }
    class CEjectMagazine {
        private constructor();

        static new(frm: any /* Unknown */): CEjectMagazineInstance;
    }

    class CLoadBulletsInMagazineInstance extends BaseCommandInstance {
        protected constructor();

        getMagazine(weapon: HandWeapon): InventoryItem;
        hasBulletsForMagazine(weapon: HandWeapon): boolean;
        invoke(): void;
    }
    class CLoadBulletsInMagazine {
        private constructor();

        static new(frm: any /* Unknown */): CLoadBulletsInMagazineInstance;
    }

    class CLoadRoundsInstance extends BaseCommandInstance {
        protected constructor();

        hasBullets(weapon: HandWeapon): boolean;
        invoke(): void;
    }
    class CLoadRounds {
        private constructor();

        static new(frm: any /* Unknown */): CLoadRoundsInstance;
    }

    class CUnloadRoundsInstance extends BaseCommandInstance {
        protected constructor();

        invoke(): void;
    }
    class CUnloadRounds {
        private constructor();

        static new(frm: any /* Unknown */): CUnloadRoundsInstance;
    }

    class CRackInstance extends BaseCommandInstance {
        protected constructor();

        invoke(): void;
    }
    class CRack {
        private constructor();

        static new(frm: any /* Unknown */): CRackInstance;
    }

    export class ISFirearmRadialMenuInstance extends ISBaseObjectInstance {
        protected constructor();

        center(): void;
        getWeapon(): HandWeapon;
        fillMenu(): void;
        display(): void;
    }

    export class ISFirearmRadialMenu {
        private constructor();

        static new(character: IsoPlayer): ISFirearmRadialMenuInstance;
        static checkWeapon(playerObj: IsoPlayer): boolean;
        static getBestLBButtonAction(buttonPrompt: ISButtonPromptInstance /* Unused */): boolean;
        static getBestRBButtonAction(buttonPrompt: ISButtonPromptInstance): boolean;
        static onRepeatRBumper(buttonPrompt: ISButtonPromptInstance): boolean;
        static onJoypadButtonReleased(buttonPrompt: ISButtonPromptInstance, button: ISButtonInstance): void;
        static checkKey(key: number): boolean;
        static onKeyPressed(key: number): void;
        static onKeyRepeat(key: number): void;
        static onKeyReleased(key: number): void;
    }
}
