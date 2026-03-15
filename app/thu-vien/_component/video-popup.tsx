"use client";

import { useState } from "react";
import { FocusRail, type FocusRailItem } from "@/components/focus-rail";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_ITEMS: FocusRailItem[] = [
    {
        id: 1,
        title: "Neon Tokyo",
        description: "Experience the vibrant nightlife and illuminated streets of Shinjuku.",
        meta: "Urban • Travel",
        imageSrc: "/images/ho-boi-fenica.webp",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        href: "#tokyo",
    },
    {
        id: 2,
        title: "Nordic Silence",
        description: "Minimalist architecture meeting the raw beauty of the Icelandic coast.",
        meta: "Design • Nature",
        imageSrc: "/images/nha-tre-fenica.webp",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        href: "#nordic",
    },
    {
        id: 3,
        title: "Sahara Echoes",
        description: "Wandering through the timeless dunes under an endless golden sun.",
        meta: "Adventure • Heat",
        imageSrc: "/images/sanh-fenica.webp",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        href: "#sahara",
    },
    {
        id: 4,
        title: "Cyber Future",
        description: "A glimpse into a technological singularity where AI meets humanity.",
        meta: "Tech • AI",
        imageSrc: "/images/finica-goc-nhin-thu-ba.webp",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        href: "#cyber",
    },
    {
        id: 5,
        title: "Deep Ocean",
        description: "The crushing pressure and alien beauty of the Mariana Trench.",
        meta: "Science • Deep",
        imageSrc: "/images/ban-do-vi-tri-fenica.webp",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        href: "#ocean",
    },
];

export default function VideoPopup() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <FocusRail
                items={DEMO_ITEMS}
                autoPlay={false}
                loop={true}
                onEvent={() => setOpen(true)}
            />
            <Dialog open={open} onOpenChange={setOpen}>
                <AnimatePresence>
                    {open && (
                        <DialogContent className="border-none bg-transparent shadow-none p-0 max-w-6xl! w-full!">
                            <DialogHeader>
                                <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
                            </DialogHeader>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, y: 80 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 18,
                                }}
                                className="rounded-3xl overflow-hidden shadow-2xl bg-black w-full"
                            >
                                <div className="aspect-video h-[80vh] w-full">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                        title="Video"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                </div>
                            </motion.div>
                        </DialogContent>
                    )}
                </AnimatePresence>
            </Dialog>
        </div>
    );
}