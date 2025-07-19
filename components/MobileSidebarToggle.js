'use client';

import { useEffect } from 'react';

export default function MobileSidebarToggle() {
  useEffect(() => {
    const toggleButton = document.getElementById('mobile-sidebar-toggle');
    const closeButton = document.getElementById('mobile-sidebar-close');
    const overlay = document.getElementById('mobile-sidebar-overlay');

    const openSidebar = () => {
      overlay?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
      overlay?.classList.add('hidden');
      document.body.style.overflow = '';
    };

    const handleOverlayClick = (e) => {
      if (e.target === overlay) {
        closeSidebar();
      }
    };

    toggleButton?.addEventListener('click', openSidebar);
    closeButton?.addEventListener('click', closeSidebar);
    overlay?.addEventListener('click', handleOverlayClick);

    // Close sidebar on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      toggleButton?.removeEventListener('click', openSidebar);
      closeButton?.removeEventListener('click', closeSidebar);
      overlay?.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, []);

  return null; // This component doesn't render anything, it just handles the logic
} 