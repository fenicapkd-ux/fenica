"use client";

import { useState } from "react";
import { FocusRail, type FocusRailItem } from "@/components/focus-rail";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_ITEMS: FocusRailItem[] = [
    {
        id: 1,
        title: "FENICA",
        description: "TVC GIỚI THIỆU DỰ ÁN.",
        meta: "Urban • Travel",
        imageSrc: "/images/ho-boi-fenica.webp",
        src: "https://www.youtube.com/embed/-0AZrdK1gqw?si=kbsPSJMRdENHcS6d?autoplay=1",
        href: "#",
    },
    {
        id: 2,
        title: "FENICA",
        description: "TIẾN ĐỘ DỰ ÁN FENICA T1.2026",
        meta: "Design • Nature",
        imageSrc: "/images/nha-tre-fenica.webp",
        src: "https://www.youtube.com/embed/WUgCPpu0FSY?si=ajGoSn_9UDwhtQpU?autoplay=1",
        href: "#",
    },
    {
        id: 3,
        title: "FENICA",
        description: "HÃY ĐÓN NHẬN TỔ ẤM CỦA BẠN CÙNG FENICA",
        meta: "Adventure • Heat",
        imageSrc: "/images/sanh-fenica.webp",
        src: "https://www.youtube.com/embed/zb0oUP5FM5o?si=jR3GFm4GGdlpDBjN?autoplay=1",
        href: "#",
    },
    {
        id: 4,
        title: "FENICA",
        description: "LƯU TRỌN KHOẢNH KHẮC ĐÁNG NHỚ TẠI LỄ KHỞI CÔNG DỰ ÁN FENICA",
        meta: "Tech • AI",
        imageSrc: "/images/finica-goc-nhin-thu-ba.webp",
        src: "https://www.youtube.com/embed/DCUf5m2EcHM?si=6HsH0fqm_yihjis-?autoplay=1",
        href: "#",
    },
    {
        id: 5,
        title: "FENICA",
        description: "VỊ TRÍ DỰ ÁN FENICA",
        meta: "Science • Deep",
        imageSrc: "/images/ban-do-vi-tri-fenica.webp",
        src: "https://www.youtube.com/embed/HjqWocSeD_U?si=LpIvvmRcUeN9reok?autoplay=1",
        href: "#",
    },
];

export default function VideoPopup() {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    return (
        <div className="w-full">
            <FocusRail
                items={DEMO_ITEMS}
                autoPlay={false}
                loop={true}
                onEvent={(index) => {
                    setOpen(true);
                    setIdx(index);
                }}
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
                                        src={DEMO_ITEMS[idx].src ?? ''}
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