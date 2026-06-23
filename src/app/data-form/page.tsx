"use client";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import BeamUI from '@/components/ui/shadcn/background-beams-demo';
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

export default function dataForm() {
    return (
        <SessionProviderWrapper>
            <DataPage />
        </SessionProviderWrapper>
    );
}

function DataPage() {

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 bg-white text-gray-900 flex justify-center">
                <BeamUI />
            </div>
        </div>

    )
}

