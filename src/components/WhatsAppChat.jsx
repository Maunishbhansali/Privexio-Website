import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WHATSAPP_URL = 'https://wa.me/12268688363?text=Hi%20Privexio%2C%20I%27d%20like%20to%20talk%20about%20a%20technology%20project.';

const WhatsAppChat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#25D366]/30"
    aria-label="Chat with Privexio on WhatsApp"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline">WhatsApp Chat</span>
  </a>
);

export default WhatsAppChat;