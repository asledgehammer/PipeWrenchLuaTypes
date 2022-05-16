declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export type ISJoypadData = {};

    export class ISPanelJoypadInstance extends ISUIElementInstance {
        protected constructor();

        __index: ISUIElementInstance;
        x: number;
        y: number;
        background: boolean;
        backgroundColor: ISUIColor;
        borderColor: ISUIColor;
        width: number;
        height: number;
        anchorLeft: boolean;
        anchorRight: boolean;
        anchorTop: boolean;
        anchorBottom: boolean;
        joypadButtons: { [offset: number]: ISButtonInstance };
        joypadIndex: number;
        joypadButtonsY: { [offset: number]: ISButtonInstance };
        joypadIndexY: number;
        moveWithMouse: boolean;

        ISButtonA: ISButtonInstance | null;
        ISButtonB: ISButtonInstance | null;
        ISButtonX: ISButtonInstance | null;
        ISButtonY: ISButtonInstance | null;

        moving: boolean | null;
        downX: number | null;
        downY: number | null;
        mouseOver: boolean | null;

        initialise(): void;
        setVisible(visible: boolean, joypadData: ISJoypadData): void;
        insertNewLineOfButtons(
            button1: ISButtonInstance | null,
            button2: ISButtonInstance | null,
            button3: ISButtonInstance | null,
            button4: ISButtonInstance | null,
            button5: ISButtonInstance | null,
            button6: ISButtonInstance | null,
            button7: ISButtonInstance | null,
            button8: ISButtonInstance | null,
            button9: ISButtonInstance | null,
            button10: ISButtonInstance | null
        ): void;

        insertNewListOfButtons(list: { [offset: number]: ISButtonInstance }): void;
        insertNewListOfButtonsList(list: { [offset: number]: ISButtonInstance }): void;
        noBackground(): void;
        close(): void;
        setISButtonForA(button: ISButtonInstance): void;
        setISButtonForB(button: ISButtonInstance): void;
        setISButtonForY(button: ISButtonInstance): void;
        setISButtonForX(button: ISButtonInstance): void;
        onJoypadDown(button: ISButtonInstance, joypadData: ISJoypadData): void;
        getVisibleChildren(joypadIndexY: number): { [offset: number]: ISUIElementInstance };
        getClosestChild(children: { [offset: number]: ISUIElementInstance }, x: number): number;
        onJoypadDirLeft(joypadData: ISJoypadData): void;
        onJoypadDirRight(joypadData: ISJoypadData): void;
        onJoypadDirUp(joypadData: ISJoypadData): void;
        onJoypadDirDown(joypadData: ISJoypadData): void;
        getJoypadFocus(): ISUIElementInstance | null;
        setJoypadFocus(child: ISUIElementInstance, joypadData: ISJoypadData): void;
        restoreJoypadFocus(joypadData: ISJoypadData): void;
        clearJoypadFocus(joypadData: ISJoypadData): void;
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
