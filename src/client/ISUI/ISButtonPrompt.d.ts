declare module 'ISUI' {

    import { zombie } from 'Zomboid';
    type IsoPlayer = zombie.characters.IsoPlayer;
    type Texture = zombie.core.textures.Texture;
    type IsoDirections = zombie.iso.IsoDirections;
    type IsoObject = zombie.iso.IsoObject;
    type IsoDoor = zombie.iso.objects.IsoDoor;
    type IsoWindow = zombie.iso.objects.IsoWindow;
    type BaseVehicle = zombie.vehicles.BaseVehicle;
    type VehiclePart = zombie.vehicles.VehiclePart;

    export class ISButtonPromptInstance extends ISUIElementInstance {
        protected constructor();

        background: boolean;
        backgroundColor: ISUIColor;
        borderColor: ISUIColor;
        player: IsoPlayer;
        buttonA: number;
        buttonB: number;
        buttonX: number;
        buttonY: number;
        buttonLB: number;
        buttonRB: number;
        movableIconPickup: Texture;
        movableIconPlace: Texture;
        movableIconRotate: Texture;
        movableIconScrap: Texture;

        getTopOf(): number;
        isLootIcon(): boolean;
        interact(worldobjects: IsoObject[]): void;
        climbFence(): void;
        climbOverWall(dir: IsoDirections): void;
        climbInWindow(window: IsoWindow): void;
        openWindow(window: IsoWindow): void;
        closeWindow(window: IsoWindow): void;
        openDoor(door: IsoDoor): void;
        smashWindow(window: IsoWindow): void;
        cmdShowInventory(): void;
        cmdShowLoot(): void;
        cmdToggleLight(light: IsoObject): void;
        cmdToggleStove(stove: IsoObject): void;
        openDeviceOptions(device: IsoObject): void;
        cmdUseVehicle(vehicle: BaseVehicle, part: VehiclePart): void;
        cmdEnterVehicle(vehicle: BaseVehicle, seat: number): void;
        cmdCloseVehicleDoor(playerObj: IsoPlayer, part: VehiclePart): void;
        cmdOpenVehicleDoor(playerObj: IsoPlayer, part: VehiclePart): void;
        cmdExitVehicle(): void;
        stopAction(): void;
        getBestAButtonAction(dir: IsoDirections): void;
        testAButtonAction(dir: IsoDirections): void;
        doAButtonDoorOrWindowOrWindowFrame(dir: IsoDirections, obj: IsoObject): void;
        getBestBButtonAction(dir: IsoDirections): void;
        testBButtonAction(dir: IsoDirections): void;
        doBButtonDoorOrWindowOrWindowFrame(dir: IsoDirections, obj: IsoObject): void;
        getBestYButtonAction(dir: IsoDirections): void;
        getBestXButtonAction(dir: IsoDirections): void;
        getXButtonObjects(dir: IsoDirections): IsoObject[] | null;
        getBestLBButtonAction(dir: IsoDirections): void;
        getBestRBButtonAction(dir: IsoDirections): void;
        onAPress(): void;
        onBPress(): void;
        onXPress(): void;
        onYPress(): void;
        onLBPress(): void;
        onRBPress(): void;
        setAPrompt(prompt: string, func: any, param1: any, param2: any, param3: any, param4: any): void;
        setBPrompt(prompt: string, func: any, param1: any, param2: any, param3: any, param4: any): void;
        setXPrompt(prompt: string, func: any, param1: any, param2: any, param3: any, param4: any): void;
        setYPrompt(prompt: string, func: any, param1: any, param2: any, param3: any, param4: any): void;
        setLBPrompt(prompt: string, func: any, param1: any, param2: any, param3: any, param4: any): void;
        setRBPrompt(prompt: string, func: any, param1: any, param2: any, param3: any, param4: any): void;
        onJoypadButtonReleased(button: ISButtonInstance): void;
    }

    export class ISButtonPrompt {
        private constructor();

        static new(player: IsoPlayer): ISButtonPromptInstance;
    }
}
