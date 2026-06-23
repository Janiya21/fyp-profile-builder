"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { Kbd } from "@heroui/kbd";

export default function CompleteProfile() {
    <SessionProviderWrapper>
        <Completed />
    </SessionProviderWrapper>
}

function Completed() {
    const { data: session } = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        role: "user",
    });

    if (!session) {
        router.push("/");
        return null;
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/save-user-data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: session.user?.email,
                name: session.user?.name,
                image: session.user?.image,
                username: formData.username,
                phone: formData.phone,
                role: formData.role
            }),
        });

        if (response.ok) {
            router.push("/dashboard"); // Redirect to dashboard after saving
        } else {
            console.error("Failed to save user data");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="">
                    <Kbd keys={["command"]}>Template Selection</Kbd>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                        Save & Continue
                    </button>
                </form>
            </div>
        </div>
    );
}
