"use client";

import { Button } from "@/app/_components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/app/_components/ui/dialog";
import { BotIcon, Loader2Icon, PaperclipIcon } from "lucide-react";
import { generateAiReport } from "./_actions/generate-ai-report";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Markdown from 'react-markdown'
import Link from "next/link";

interface AiReportButtonProps {
    hasPremiumPlan: boolean
    month: string
}

const AiReportButton = ({ month, hasPremiumPlan }: AiReportButtonProps) => {
    const [report, setReport] = useState<string | null>(null);
    const [reportIsLoading, setReportIsLoading] = useState(false);

    const handleGenerateReport = async () => {
        try {
            setReportIsLoading(true);
            const aiReport = await generateAiReport({ month });
            setReport(aiReport);
        } catch (error) {
            console.error(error);
        } finally {
            setReportIsLoading(false);
        }
    }
    return (
        <Dialog onOpenChange={(open) => {
            if (!open) {
                setReport(null);
            }
        }}>
            <DialogTrigger asChild>
                <Button variant={"ghost"}>
                    Relatório AI
                    <BotIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[600px]">
                {hasPremiumPlan ? (
                    <>
                        <DialogHeader>
                            <div className="flex items-center gap-2">
                                <PaperclipIcon className="text-primary" />
                                <DialogTitle>Relatório AI</DialogTitle>
                            </div>
                            <DialogDescription>
                                Use inteligência artificial para gerar relatórios automáticos sobre suas finanças.
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="prose prose-h3:text-white prose-h4:text-white prose-strong:text-white max-h-[450px] text-white">
                            <Markdown>{report}</Markdown>
                        </ScrollArea>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant={"ghost"}>Cancelar</Button>
                            </DialogClose>
                            <Button
                                onClick={handleGenerateReport}
                                disabled={reportIsLoading}
                            >
                                {reportIsLoading && <Loader2Icon className="animate-spin" />}
                                Gerar relatório
                            </Button>
                        </DialogFooter>
                    </>
                ) : (
                    <>
                        <DialogHeader>
                            <div className="flex items-center gap-2">
                                <PaperclipIcon className="text-primary" />
                                <DialogTitle>Relatório AI</DialogTitle>
                            </div>
                            <DialogDescription>
                                Você precisa do plano Premium para gerar relatórios automáticos.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant={"ghost"}>Cancelar</Button>
                            </DialogClose>
                            <Button asChild>
                                <Link href="/subscription">
                                    Assinar plano premium
                                </Link>
                            </Button>
                        </DialogFooter>
                    </>
                )
                }
            </DialogContent>
        </Dialog>
    );
}

export default AiReportButton;