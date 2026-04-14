"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const thpaceInstanceRef = useRef<any>(null);

    useEffect(() => {
        let resizeObserver: ResizeObserver | null = null;
        let rafId: number | null = null;

        const setupCanvasSize = (canvas: HTMLCanvasElement) => {
            // Match canvas bitmap to CSS size * DPR for crisp rendering
            const dpr = window.devicePixelRatio || 1;
            const { width, height } = canvas.getBoundingClientRect();
            const nextW = Math.max(1, Math.round(width * dpr));
            const nextH = Math.max(1, Math.round(height * dpr));
            if (canvas.width !== nextW) canvas.width = nextW;
            if (canvas.height !== nextH) canvas.height = nextH;
        };

        const init = async () => {
            try {
                const { ThpaceGL } = await import("thpace");

                const canvas = canvasRef.current;
                if (!canvas) return;

                // Ensure initial size before creating the effect
                setupCanvasSize(canvas);

                const settings = {
                    colors: ["rgb(119, 117, 115)", "rgba(56, 2, 57, 1)", "rgba(49, 12, 21, 0.8)"],
                    triangleSize: 150,
                    pointAnimationSpeed: 7200,
                    bleed: 60,
                    noise: 100,
                    animationOffset: 200,
                    pointVariationY: 50,
                };

                // Some libs need creation deferred to next frame after layout
                rafId = requestAnimationFrame(() => {
                    thpaceInstanceRef.current = ThpaceGL.create(canvas, settings);
                });

                // Keep canvas crisp on resize
                resizeObserver = new ResizeObserver(() => {
                    setupCanvasSize(canvas);
                    // If the lib has a resize API, call it; otherwise recreate or let it adapt.
                    if (thpaceInstanceRef.current?.resize) {
                        thpaceInstanceRef.current.resize();
                    }
                });
                resizeObserver.observe(canvas);
            } catch (error) {
                console.error("Failed to load ThpaceGL:", error);
            }
        };

        init();

        return () => {
            if (rafId != null) cancelAnimationFrame(rafId);
            if (resizeObserver) resizeObserver.disconnect();
            // Clean up effect if API exists
            try {
                thpaceInstanceRef.current?.destroy?.();
                thpaceInstanceRef.current = null;
            } catch { }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="make-me-cool"
            className="absolute inset-0 -z-10 min-w-100"
            style={{ pointerEvents: "none" }}
        />
    );
}
