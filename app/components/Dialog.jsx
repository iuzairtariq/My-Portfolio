import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { motion } from 'motion/react'
import { Download, FileCode } from "lucide-react"
import Image from "next/image"

export default function DialogComp() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    My Resume <FileCode />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>My Resume</DialogTitle>
                    <DialogDescription>
                        You can view and download my resume here.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Image src='/uzair-resume.jpg' height={100} width={400} className="mx-auto" alt="uzair resume" />
                    {/* <iframe
                        src="/uzair-resume.pdf"
                        width="100%"
                        height="500px"
                        title="Resume"
                    ></iframe> */}
                </div>
                <DialogFooter>
                    <a href="/uzair-resume.pdf" download>
                        <Button variant="default">Download <Download /></Button>
                    </a>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
