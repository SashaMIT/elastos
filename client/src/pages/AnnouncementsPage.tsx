
import React from 'react';
import ElastosAnnouncementsPage from '@/components/ElastosAnnouncementsPage';
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <ScrollToTop />
      <ElastosAnnouncementsPage />
      <StackedCircularFooter />
    </div>
  );
}
