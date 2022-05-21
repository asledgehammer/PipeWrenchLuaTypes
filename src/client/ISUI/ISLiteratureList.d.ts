import { zombie } from 'Zomboid';

declare module 'ISUI' {
    export class ISListeratureListInstance extends ISScrollingListBoxInstance {
        protected constructor();
    }

    export class ISListeratureList {
        private constructor();

        static new(): ISListeratureListInstance;
    }
}
