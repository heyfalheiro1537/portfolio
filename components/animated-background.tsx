"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const loadThpace = async () => {
            try {
                const { ThpaceGL } = await import("thpace")

                if (canvasRef.current) {
                    const settings = {
                        colors: ['rgba(71, 75, 82, 1)', '#30275fff', '#0c334cff'],
                        triangleSize: 100,
                        pointAnimationSpeed: 3600,
                        bleed: 40,
                        noise: 100,
                        animationOffset: 400,
                        pointVariationY: 50

                    }

                    ThpaceGL.create(canvasRef.current, settings)
                }
            } catch (error) {
                console.error("Failed to load ThpaceGL:", error)
            }
        }

        loadThpace()
    }, [])

    return (
        <canvas
            ref={canvasRef}
            id="make-me-cool"
            className="absolute inset-0 -z-10 opacity-100"
            style={{ pointerEvents: "none" }}
        />
    )
}
