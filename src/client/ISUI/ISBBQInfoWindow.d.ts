declare module 'ISUI' {
    import { zombie } from "Zomboid";

    export class ISBBQInfoWindowInstance extends ISCollapsableWindowInstance {
        protected constructor();
        
        object: zombie.iso.objects.IsoBarbecue;
        character: zombie.characters.IsoPlayer;
        playerNum: number;
        panel: ISToolTipInstance;
        spriteName: string;
        isLit: boolean;
        fuelAmount: number;

        setObject(bbq: zombie.iso.objects.IsoBarbecue): void;
    }

    export class ISBBQInfoWindow {
        private constructor();

        static new(x: number, y: number, character: zombie.characters.IsoPlayer, bbq: zombie.iso.objects.IsoBarbecue): ISBBQInfoWindowInstance;
    }
}