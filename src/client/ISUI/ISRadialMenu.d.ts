declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export type ISRadialMenuSliceCommand = {
            command: string,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any
    };
    export type ISRadialMenuSlice = {
        text: string,
        texture: zombie.core.textures.Texture | null,
        command: ISRadialMenuSliceCommand
    };

    export class ISRadialMenuInstance extends ISPanelJoypadInstance {
        protected constructor();

        javaObject: zombie.ui.RadialMenu;

        slices: {[offset: number]: ISRadialMenuSlice};
        hideWhenButtonReleased: ISButtonInstance;

        innerRadius: number;
        outerRadius: number;
        playerNum: number;

        instantiate(): void;
        onMouseDown(x: number, y: number): void;
        onMouseDownOutside(x: number, y: number): void;
        clear(): void;
        addSlice(text: string, texture: zombie.core.textures.Texture | null, command: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): void;
        setSliceText(sliceIndex: number, text: string): void;
        setSliceTexture(sliceIndex: number, texture: zombie.core.textures.Texture | null): void;
        getSliceCommand(sliceIndex: number): ISRadialMenuSliceCommand;
        center(): void;
        onGainJoypadFocus(joypadData: any): void;
        onJoypadDown(button: ISButtonInstance, joypadData: any): void;
        setHideWhenButtonReleased(button: ISButtonInstance): void;
        undisplay(): void;
    }

    export class ISRadialMenu {
        private constructor();

        static new(
            x: number,
            y: number,
            innerRadius: number,
            outerRadius: number,
            playerNum: number
        ): ISRadialMenuInstance;
    }
}