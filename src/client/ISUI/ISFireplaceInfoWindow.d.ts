import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type IsoFireplace = zombie.iso.objects.IsoFireplace;

declare module 'ISUI' {
    export class ISFireplaceInfoWindowInstance extends ISCollapsableWindowInstance {
        protected constructor();

        character: IsoPlayer;
        playerNum: number;
        object: IsoFireplace;
        panel: ISToolTipInstance;
        /** Note: looks like a typ0 with casing. */
        joyfocus: JoyFocus;
        spriteName: string;
        isLit: boolean;
        fuelAmount: number;
        drawJoypadFocus: boolean;

        setObject(fireplace: IsoFireplace): void;
    }
    export class ISFireplaceInfoWindow {
        private constructor();

        static new(x: number, y: number, character: IsoPlayer, fireplace: IsoFireplace): ISFireplaceInfoWindowInstance;
    }
}
