import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;

declare module 'ISUI' {
    export class ISListeratureListInstance extends ISScrollingListBoxInstance {
        protected constructor();
    }

    export class ISListeratureList {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            character: IsoPlayer
        ): ISListeratureListInstance;
    }
}
