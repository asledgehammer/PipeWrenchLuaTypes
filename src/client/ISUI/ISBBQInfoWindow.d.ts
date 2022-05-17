import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type IsoBarbecue = zombie.iso.objects.IsoBarbecue;

declare module 'ISUI' {
    export class ISBBQInfoWindowInstance extends ISCollapsableWindowInstance {
        protected constructor();

        object: IsoBarbecue;
        character: IsoPlayer;
        playerNum: number;
        panel: ISToolTipInstance;
        spriteName: string;
        isLit: boolean;
        fuelAmount: number;

        setObject(bbq: IsoBarbecue): void;
    }

    export class ISBBQInfoWindow {
        private constructor();

        static new(x: number, y: number, character: IsoPlayer, bbq: IsoBarbecue): ISBBQInfoWindowInstance;
    }
}
