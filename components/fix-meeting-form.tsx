"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

export default function MeetingModal() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        datetime: "",
        meetType: "",
        agenda: "",
        reminder: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");

        try {
            // Simulation of API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setMsg("✅ Meeting fixed successfully!");
            setForm({ name: "", email: "", datetime: "", meetType: "", agenda: "", reminder: false });
            setTimeout(() => {
                setOpen(false);
                setMsg("");
            }, 2000);
        } catch (error) {
            setMsg("❌ Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Fixed Sticky Button with Tailwind CSS */}
            <ul className="fixed top-1/2 -translate-y-1/2 -right-[45px] max-md:-right-[30px] z-[100] list-none m-0 p-0">
                <li className="w-[140px] max-md:w-[100px] h-auto bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] rounded-l-[30px] max-md:rounded-l-[20px] shadow-lg transition-all duration-300 ease-in-out hover:w-[160px] max-md:hover:w-[115px] hover:-translate-x-[15px] max-md:hover:-translate-x-[5px] hover:from-blue-700 hover:to-teal-600 group">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setOpen(true); }}
                        className="flex items-center justify-center w-full h-full text-white font-bold text-[15px] max-md:text-[11px] py-3 px-2 no-underline"
                    >
                        Fix Meeting
                    </a>
                </li>
            </ul>

            {/* Modal Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center">Fix a Meeting</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="grid gap-6 py-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your full name"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="datetime">Date & Time</Label>
                                <Input
                                    id="datetime"
                                    type="datetime-local"
                                    required
                                    value={form.datetime}
                                    onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="type">Meeting Type</Label>
                                <Select
                                    value={form.meetType}
                                    onValueChange={(val) => setForm({ ...form, meetType: val })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose type..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Video call (Google Meet/Zoom)">Video call (Google Meet/Zoom)</SelectItem>
                                        <SelectItem value="Phone call">Phone call</SelectItem>
                                        <SelectItem value="In-person">In-person</SelectItem>
                                        <SelectItem value="Quick sync (15 min)">Quick sync (15 min)</SelectItem>
                                        <SelectItem value="Deep-dive (60 min)">Deep-dive (60 min)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="agenda">Agenda / Notes</Label>
                            <Textarea
                                id="agenda"
                                placeholder="What do you want to discuss?"
                                value={form.agenda}
                                onChange={(e) => setForm({ ...form, agenda: e.target.value })}
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="reminder"
                                checked={form.reminder}
                                onCheckedChange={(checked) => setForm({ ...form, reminder: checked as boolean })}
                            />
                            <Label htmlFor="reminder" className="text-sm font-normal">
                                Send me a reminder 1 hour before
                            </Label>
                        </div>

                        <div className="flex flex-col gap-3 mt-2">
                            <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] text-white hover:opacity-90">
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Registering...
                                    </>
                                ) : (
                                    "Register"
                                )}
                            </Button>
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </div>

                        {msg && (
                            <div className={`text-center p-2 rounded-md ${msg.includes("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                                {msg}
                            </div>
                        )}
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
