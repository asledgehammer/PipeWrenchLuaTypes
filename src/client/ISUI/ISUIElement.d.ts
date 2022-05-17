import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIElement = zombie.ui.UIElement;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISUIElementInstance {
        protected constructor();

        visibleFunction: (target: ISUIElementInstance, self: ISUIElementInstance) => void;
        onMouseDoubleClick: (x: number, y: number) => void;
        children: { [id: number]: ISUIElementInstance };
        javaObject: UIElement;
        parent: ISUIElementInstance;
        target: ISUIElementInstance;
        nested: ISUIElementInstance;
        hscroll: ISScrollBar;
        vscroll: ISScrollBar;
        joyFocus: JoyFocus;
        controller: any; /* Unknown */
        visibleTarget: any; /* Unknown */
        dock: string;
        ID: number;
        x: number;
        y: number;
        width: number;
        height: number;
        anchorLeft: boolean;
        anchorRight: boolean;
        anchorTop: boolean;
        anchorBottom: boolean;
        minimumWidth: number;
        minimumHeight: number;
        scrollwidth: number;
        removed: boolean;
        wantKeyEvents: boolean;
        forceCursorVisible: boolean;
        keepOnScreen: boolean;
        enabled: boolean;

        initialise(): void;
        setController(controller: boolean): void;
        setAnchorBottom(bAnchor: boolean): void;
        setAnchorTop(bAnchor: boolean): void;
        setAnchorLeft(bAnchor: boolean): void;
        setAnchorRight(bAnchor: boolean): void;
        getKeepOnScreen(): boolean;
        /** @param x (double) */
        setX(x: number): void;
        /** @param y (double) */
        setY(y: number): void;
        /** @param width (double) */
        setWidth(width: number): void;
        /** @param height (double) */
        setHeight(height: number): void;
        getWidth(): number;
        getHeight(): number;
        getRight(): number;
        getBottom(): number;
        getXScroll(): number;
        /** @param width (double) */
        setWidthAndParentWidth(width: number): void;
        /** @param height (double) */
        setHeightAndParentHeight(height: number): void;
        getYScroll(): number;
        getMouseX(): number;
        getMouseY(): number;
        getCentreX(): number;
        getCentreY(): number;
        getX(): number;
        getY(): number;
        isEnabled(): boolean;
        setEnabled(enabled: boolean): void;
        getAbsoluteX(): number;
        isMouseOver(): boolean;
        suspendStencil(): void;
        resumeStencil(): void;
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        setStencilRect(x: number, y: number, width: number, height: number): void;
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        clearStencilRect(x: number, y: number, width: number, height: number): void;
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        repaintStencilRect(x: number, y: number, width: number, height: number): void;
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns {{x: number, y: number, w: number, h: number}}
         */
        clampStencilRectToParent(
            x: number,
            y: number,
            width: number,
            height: number
        ): { x: number; y: number; w: number; h: number };
        /**
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        ignoreWidthChange(): void;
        /** @returns (double) */
        getMaxDrawHeight(): number;
        /** @param height (double) */
        setMaxDrawHeight(height: number): void;
        /**
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        clearMaxDrawHeight(): void;
        ignoreHeightChange(): void;
        getAbsoluteY(): number;
        /**
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        recalcSize(): void;
        setCapture(capture: boolean): void;
        getIsCaptured(): boolean;
        setFollowGameWorld(follow: boolean): void;

        /** (Same as ISUIElement#isFollowGameWorld()) */
        getIsFollowGameWorld(): boolean;
        isFollowGameWorld(): boolean;
        /** @param playerNumber (int) */
        setRenderThisPlayerOnly(playerNumber: number): void;
        /** @returns (int) */
        getRenderThisPlayerOnly(): number;
        onLoseJoypadFocus(joypadData: JoypadData): void;
        onGainJoypadFocus(joypadData: JoypadData): void;

        /** @param joypadData (Filler for downstream property signature) */
        setVisible(visible: boolean, joypadData?: JoypadData): void;
        getJavaObject(): UIElement;
        /** (The same as ISUIElement#isVisible()) */
        getIsVisible(): boolean;
        isVisible(): boolean;
        isReallyVisible(): boolean;

        /** @param _joypadData (Filler for downstream property signature) */
        onJoypadDown(button: ISButtonInstance, joypadData?: JoypadData): void;
        /** @param joypadData (Filler for downstream property signature) */
        onJoypadDirUp(joypadData?: JoypadData): void;
        /** @param joypadData (Filler for downstream property signature) */
        onJoypadDirDown(joypadData?: JoypadData): void;
        /** @param joypadData (Filler for downstream property signature) */
        onJoypadDirLeft(joypadData?: JoypadData): void;
        /** @param joypadData (Filler for downstream property signature) */
        onJoypadDirRight(joypadData?: JoypadData): void;
        instantiate(): void;
        createChildren(): void;
        /**
         * @param texture
         * @param texLX (double)
         * @param texLY (double)
         * @param texRX (double)
         * @param texRY (double)
         * @param brx (double)
         * @param bry (double)
         * @param blx (double)
         * @param bly (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         * @param alpha (double)
         */
        drawTextureAllPoint(
            texture: Texture,
            texLX: number,
            texLY: number,
            texRX: number,
            texRY: number,
            brx: number,
            bry: number,
            blx: number,
            bly: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaled(
            texture: Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param scale (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaledUniform(
            texture: Texture,
            x: number,
            y: number,
            scale: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaledAspect(
            texture: Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaledAspect2(
            texture: Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTexture(
            texture: Texture,
            x: number,
            y: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawTextureTiledX(
            texture: Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        drawTextureTiledY(
            texture: Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;
        DrawTextureAngle(texture: Texture, centerX: number, centerY: number, angle: number): void;
        drawTextureScaledStatic(
            texture: Texture,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawTextureStatic(
            texture: Texture,
            x: number,
            y: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawRect(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawRectStatic(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawRectBorderStatic(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawRectBorder(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawLine2(
            x: number,
            y: number,
            x2: number,
            y2: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;
        drawTextZoomed(
            text: string,
            x: number,
            y: number,
            zoom: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawTextUntrimmed(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawTextCentre(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawText(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawTextRight(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        setAlwaysOnTop(flag: boolean): void;
        drawTextStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawTextCentreStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawTextStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        drawTextRightStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: UIFont
        ): void;
        addToUIManager(): void;
        removeFromUIManager(): void;
        backMost(): void;
        addScrollBars(addHorizontal: boolean): void;
        isVScrollBarVisible(): boolean;
        getParent(): ISUIElementInstance;
        getChildren(): { [id: number]: ISUIElementInstance };
        addChild(otherElement: ISUIElementInstance): void;
        removeChild(otherElement: ISUIElementInstance): void;
        clearChildren(): void;
        onMouseWheel(delta: number): boolean;
        onMouseUp(x: number, y: number): void;
        /**
         * @param target (unknown)
         * @param onMouseDoubleClick (unknown)
         */
        setOnMouseDoubleClick(target: any, onMouseDoubleClick: any): void;
        onRightMouseUpOutside(x: number, y: number): void;
        onRightMouseDownOutside(x: number, y: number): void;
        onMouseUpOutside(x: number, y: number): void;
        onMouseDownOutside(x: number, y: number): void;
        onFocus(x: number, y: number): void;
        bringToTop(): void;
        onRightMouseUp(x: number, y: number): void;
        onRightMouseDown(x: number, y: number): void;
        onMouseMove(deltaX: number, deltaY: number): void;
        onMouseMoveOutside(deltaX: number, deltaY: number): void;
        containsPoint(x: number, y: number): boolean;
        containsPointLocal(x: number, y: number): boolean;
        shrinkY(y: number): void;
        shrinkX(x: number): void;
        update(): void;
        prerender(): void;
        render(): void;
        setScrollWidth(width: number): void;
        setScrollHeight(height: number): void;
        getScrollWidth(): number;
        getScrollHeight(): number;
        setScrollChildren(flag: boolean): void;
        getScrollChildren(): boolean;
        setScrollWithParent(flag: boolean): void;
        getScrollWithParent(): boolean;
        setYScroll(y: number): void;
        updateScrollbars(): void;
        setXScroll(x: number): void;
        getScrollAreaWidth(): number;
        getScrollAreaHeight(): number;
        /**
         * @param title
         * @param resizable
         * @param subClass (unknown) (Lua class object)
         *
         * @returns (unknown) (Lua class object instance)
         */
        wrapInCollapsableWindow(title: string, resizable: boolean, subClass: any): any;
        isRemoved(): boolean;
        setRemoved(removed: boolean): void;
        setUIName(name: string): void;
        /**
         * @param name (This is an unused variable. Looks like this variable is an artifact of the design phase of this feature)
         */
        getUIName(name: string): string;
        toString(): string;
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param value (0.0 to 1.0)
         * @param foreground RGBA
         */
        drawProgressBar(x: number, y: number, width: number, height: number, value: number, foreground: RGBA): void;
        /** @param playerNum (int) */
        stayOnSplitScreen(playerNum: number): void;
        setWantKeyEvents(want: boolean): void;
        setForceCursorVisible(force: boolean): void;
    }

    export class ISUIElement {
        private constructor();

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns The new ISUIElement instance.
         */
        static new(x: number, y: number, width: number, height: number): ISUIElementInstance;
    }
}
