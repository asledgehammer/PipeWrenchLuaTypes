import { zombie } from 'Zomboid';

declare module 'ISUI' {
    export class ISInfoContainerInstance extends ISCollapsableWindowInstance {
        protected constructor();

        panel: ISPanelInstance;
    }

    export class ISInfoContainer {
        private constructor();

        static instance: ISInfoContainerInstance;

        static new(x: number, y: number, width: number, height: number): ISInfoContainerInstance;
        static doInfo(title: string, infopanel: any /* Unknown */): void;
        static get(title: string): ISInfoContainerInstance;
    }
}
