'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Debug log
    console.log('Attempting to load hero image from:', '/pizzas/hero-logo.png');
  }, []);

  return (
    <div className="bg-[#005f3b] py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/pizzas/hero-logo.png"
              alt="Alfi Pizza"
              width={400}
              height={200}
              priority
              className="inline-block"
            />
          </div>

          <div className="mb-8">
            <p className="text-[#f6f6ed] text-lg">
              Our sourdough? It&apos;s the MVP—hand-rolled and made fresh on the daily, right here in-house. Our menu is a vibe, featuring a mix of OG classics and next-level creations. Our pizzaiolos are basically sourdough DJs, spinning that dough magic to bring out bold, natural flavors. Thanks for rolling with us—now grab a slice and let&apos;s make it a moment!
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              href="https://www.ubereats.com/za/store/alfi-pizza/Ue_Hs_iqQPGxGxGxGxGx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f6f6ed] text-[#005f3b] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-opacity"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}