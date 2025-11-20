'use client';

import HeroSection from '@/components/HeroSection';
import { HiPhone } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useVoiceAgent } from '@/components/VoiceAgentContext';
import Image from 'next/image';

export default function ContactPage() {
  const { openDialog } = useVoiceAgent();
  const phoneNumber = '+18575243646';
  const message = 'hello';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappUrl)}`;
  
  return (
    <>
      <HeroSection
        title="Let's"
        highlightedText="get in touch"
        description="Have questions? Want to see a demo? We're here to help."
        imagePath="/images/heroes/Customer_service_communication_3a46d4c0.png"
        imageAlt="Customer service communication"
      >
        <div className="mb-8">
          <button 
            onClick={openDialog}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-blue-700 transition-all duration-250 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
          >
            <HiPhone className="h-5 w-5" />
            Talk to Us
          </button>
        </div>
      </HeroSection>

      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Chat with Us on <span className="text-green-600">WhatsApp</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Scan the QR code below to start a conversation
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-4 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src={qrCodeUrl}
                  alt="WhatsApp QR Code"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                    <IoLogoWhatsapp className="w-12 h-12 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                <IoLogoWhatsapp className="w-6 h-6 text-green-600" />
                <span>{phoneNumber}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Point your phone camera at the QR code to instantly open WhatsApp and send us a message
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-250 hover:scale-105 active:scale-95 shadow-lg shadow-green-500/30"
              >
                <IoLogoWhatsapp className="h-6 w-6" />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
