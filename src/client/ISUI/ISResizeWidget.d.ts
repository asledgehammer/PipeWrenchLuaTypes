declare module 'ISUI' {
    export class ISResizeWidgetInstance extends ISPanelInstance {
        protected constructor();
    }

    export class ISResizeWidget {
        static new(): ISResizeWidgetInstance;
    }
}