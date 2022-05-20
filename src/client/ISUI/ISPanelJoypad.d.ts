declare module 'ISUI' {
    export class ISPanelJoypadInstance extends ISUIElementInstance {
        protected constructor();

        joypadButtons: { [offset: number]: ISButtonInstance };
        joypadButtonsY: { [offset: number]: ISButtonInstance };
        ISButtonA: ISButtonInstance;
        ISButtonB: ISButtonInstance;
        ISButtonX: ISButtonInstance;
        ISButtonY: ISButtonInstance;
        backgroundColor: RGBA;
        borderColor: RGBA;
        joypadIndex: number;
        joypadIndexY: number;
        downX: number;
        downY: number;
        moving: boolean;
        mouseOver: boolean;
        moveWithMouse: boolean;
        background: boolean;

        initialise(): void;
        setVisible(visible: boolean, joypadData: JoypadData): void;
        insertNewLineOfButtons(
            button1: ISButtonInstance,
            button2: ISButtonInstance,
            button3: ISButtonInstance,
            button4: ISButtonInstance,
            button5: ISButtonInstance,
            button6: ISButtonInstance,
            button7: ISButtonInstance,
            button8: ISButtonInstance,
            button9: ISButtonInstance,
            button10: ISButtonInstance
        ): void;

        insertNewListOfButtons(list: { [offset: number]: ISButtonInstance }): void;
        insertNewListOfButtonsList(list: { [offset: number]: ISButtonInstance }): void;
        noBackground(): void;
        /** Upstream compatability with ISFishingUI */
        close: (()=> void) | any;
        setISButtonForA(button: ISButtonInstance): void;
        setISButtonForB(button: ISButtonInstance): void;
        setISButtonForY(button: ISButtonInstance): void;
        setISButtonForX(button: ISButtonInstance): void;
        onJoypadDown(button: ISButtonInstance, joypadData: JoypadData): void;
        getVisibleChildren(joypadIndexY: number): { [offset: number]: ISUIElementInstance };
        getClosestChild(children: { [offset: number]: ISUIElementInstance }, x: number): number;
        onJoypadDirLeft(joypadData: JoypadData): void;
        onJoypadDirRight(joypadData: JoypadData): void;
        onJoypadDirUp(joypadData: JoypadData): void;
        onJoypadDirDown(joypadData: JoypadData): void;
        getJoypadFocus(): ISUIElementInstance;
        setJoypadFocus(child: ISUIElementInstance, joypadData: JoypadData): void;
        restoreJoypadFocus(joypadData: JoypadData): void;
        clearJoypadFocus(joypadData: JoypadData): void;
        ensureVisible(): void;
        isFocusOnControl(): boolean;
        onMouseUp(x: number, y: number): void;
        onMouseUpOutside(x: number, y: number): void;
        onMouseDown(x: number, y: number): void;
        onMouseMoveOutside(deltaX: number, deltaY: number): void;
        onMouseMove(deltaX: number, deltaY: number): void;
        prerender(): void;
    }

    export class ISPanelJoypad {
        private constructor();

        new(x: number, y: number, width: number, height: number): ISPanelJoypadInstance;
    }
}
