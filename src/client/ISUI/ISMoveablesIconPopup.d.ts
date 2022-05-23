declare module 'ISUI' {
    export class ISMoveablesIconPopupInstance extends ISPanelInstance {
        protected constructor();

        owner: ISEquippedItemInstance;
    }

    export class ISMoveablesIconPopup {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISMoveablesIconPopupInstance;
    }
}
