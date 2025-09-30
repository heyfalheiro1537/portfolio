'use client'
import { Project } from "@/lib/models/project"
import { useState } from "react"



export function ZoomableImage({ project }: { project: Project }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Imagem normal */}
            <div className="relative transition delay-30 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer" onClick={() => {
                setIsOpen(true);
            }}>
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full rounded-lg opacity-100 duration-300 cursor-pointer "

                />
                <div className="absolute inset-0 rounded-lg" ></div>
            </div>

            {/* Modal para zoom */}
            {isOpen && (

                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black/80 z-50 transition-opacity ease-in-out duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg contrast-150"
                    />
                </div>


            )
            }

        </>
    )
}
