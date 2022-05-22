import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;

declare module 'ISUI' {
    export class ISLiteratureMediaListInstance extends ISScrollingListBoxInstance {
        protected constructor();
    }

    export class ISLiteratureMediaList {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            character: IsoPlayer
        ): ISLiteratureMediaListInstance;
    }
}
