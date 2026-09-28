import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatementSection } from '@/components/sections/StatementSection';
import { StatsAndPortraitShowcase } from '@/components/sections/StatsAndPortraitShowcase';
import { PracticeAreasPreview } from '@/components/sections/PracticeAreasPreview';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { CourtsPreview } from '@/components/sections/CourtsPreview';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { ConsultationCta } from '@/components/sections/ConsultationCta';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with rising Lady Justice bronze statue and laurel badges */}
      <HeroSection />

      {/* 2. Scroll transition with ghost watermark & word-by-word reveal statement */}
      <StatementSection />

      {/* 3. Verified stats count-up, scales badge, concave notch & portrait showcase with floating glass tags */}
      <StatsAndPortraitShowcase />

      {/* 4. 10 Practice areas preview grid */}
      <PracticeAreasPreview />

      {/* 5. About advocate teaser with re-cropped portrait and bar council badge */}
      <AboutTeaser />

      {/* 6. Where I Practice (3 courts + Kalka chambers & seat no. 15) */}
      <CourtsPreview />

      {/* 7. Latest 3 legal guides & insights */}
      <InsightsPreview />

      {/* 8. Direct consultation CTA band */}
      <ConsultationCta />
    </div>
  );
}
