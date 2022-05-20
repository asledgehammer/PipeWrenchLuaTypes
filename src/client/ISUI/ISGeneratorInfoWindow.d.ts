import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type IsoGenerator = zombie.iso.objects.IsoGenerator;

declare module 'ISUI' {
    export class ISGeneratorInfoWindowInstance extends ISCollapsableWindowInstance {
        protected constructor();

        character: IsoPlayer;
        playerNum: number;
        object: IsoGenerator;
        panel: ISToolTipInstance;
        /** Note: Possible typ0 */
        joyfocus: JoyFocus;
        fuel: number;
        condition: number;
        drawJoypadFocus: boolean;

        setObject(object: IsoGenerator): void;
    }

    export class ISGeneratorInfoWindow {
        private constructor();

        static windows: any; /* Unknown */

        static new(x: number, y: number, character: IsoPlayer, object: IsoGenerator): ISGeneratorInfoWindowInstance;
        static getRichText(object: IsoGenerator, displayStats: boolean): string;
    }
}
