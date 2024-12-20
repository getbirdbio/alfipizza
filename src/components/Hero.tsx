'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Debug log
    console.log('Attempting to load hero image from:', '/pizzas/hero-logo.png');
  }, []);

  return (
    <div className="relative bg-[#007744]">
      {/* Social Links */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <div className="space-y-6">
          <a href="#" className="block">
            <svg className="w-4 h-4 text-[#f6f6ed] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="#" className="block">
            <svg className="w-4 h-4 text-[#f6f6ed] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
          </a>
          <a href="#" className="block">
            <svg className="w-4 h-4 text-[#f6f6ed] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="text-center pt-24 pb-16">
        <div className="inline-flex items-center justify-center space-x-2 text-[#f6f6ed] text-sm tracking-wider uppercase">
          <span>Pizza</span>
          <span className="text-xs px-1">•</span>
          <span>Vegan Pizza</span>
          <span className="text-xs px-1">•</span>
          <span>Sides</span>
          <span className="text-xs px-1">•</span>
          <span>Dips</span>
        </div>
      </div>

      {/* Hero Logo */}
      <div className="flex justify-center items-center py-8">
        <Image
          src="/pizzas/hero-logo.png"
          alt="Alfi Pizza Hero"
          width={300}
          height={200}
          priority
          className="max-w-full h-auto"
          onError={(e) => {
            console.error('Error loading hero image:', e);
          }}
        />
      </div>

      {/* Allergen Info */}
      <div className="max-w-4xl mx-auto px-6 text-center text-[#f6f6ed] py-16">
        <p className="text-lg leading-relaxed font-bantayog mb-8">
          All pizzas come with our slow cooked tomato sauce and Fior di Latte mozzarella, unless 
          otherwise stated. Please note our dough is vegan, and we have vegan cheese and gluten free 
          bases also available. All of our pizzas are produced on a line that comes into contact with 
          gluten, milk, soy & pine nuts.
        </p>
        <p className="mb-8">
          <a href="#" className="underline hover:text-white transition-colors">Full allergen list</a>
        </p>
        <p className="text-lg mb-8">
          Due to recent events we have updated our allergens matrix to 'may contain traces of peanuts'
          for all pizzas as the flour may contain traces of mustard.
        </p>
        <p className="text-lg">
          Please call and inform a member of staff of any allergies.
        </p>
      </div>
    </div>
  )
}