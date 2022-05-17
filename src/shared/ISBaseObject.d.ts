declare module 'shared' {
    export class ISBaseObjectInstance {
        protected constructor();

        initialise(): void;
        derive(type: string): any;
    }

    export class ISBaseObject {
        private constructor();

        static new(): ISBaseObjectInstance;
    }
}
