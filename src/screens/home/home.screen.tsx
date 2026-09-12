import {Header} from '@/components/layout/header';
import {Hero} from '@/screens/home/components/hero/hero';
import {Skills} from '@/screens/home/components/skills/skills';
import {Projects} from '@/screens/home/components/projects/Projects';
import {Experiences} from '@/screens/home/components/experiences/experiences';
import {Formations} from '@/screens/home/components/formations/formations';
import Footer from '@/components/layout/footer.js';

import {SectionObserverWrapper} from '@/components/ui/section-observer-wrapper.js';
import {HomeSection} from '@/constants/home-section.constants.js';
import useStoreSectionVisible from '@/store/utils/storeSectionVisible';
import {Contact} from '@/screens/home/components/contact/contact';
import {About} from '@/screens/home/components/about/about';

export const Home = () => {
  const setActiveSection = useStoreSectionVisible((state) => state.setActiveSection);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <SectionObserverWrapper sectionId={HomeSection.ABOUT_US} onIntersect={(id) => setActiveSection(id)}>
          <About sectionId={HomeSection.ABOUT_US} />
        </SectionObserverWrapper>

        <SectionObserverWrapper sectionId={HomeSection.MY_SKILLS} onIntersect={(id) => setActiveSection(id)}>
          <Skills sectionId={HomeSection.MY_SKILLS} />
        </SectionObserverWrapper>

        <SectionObserverWrapper sectionId={HomeSection.MY_LATEST_PROJECT} onIntersect={(id) => setActiveSection(id)}>
          <Projects sectionId={HomeSection.MY_LATEST_PROJECT} />
        </SectionObserverWrapper>

        <SectionObserverWrapper
          sectionId={HomeSection.MY_PROFESSIONNAL_EXPERIENCES}
          onIntersect={(id) => setActiveSection(id)}>
          <Experiences sectionId={HomeSection.MY_PROFESSIONNAL_EXPERIENCES} />
        </SectionObserverWrapper>

        <SectionObserverWrapper
          sectionId={HomeSection.MY_STUDIES_AND_FORMATION}
          onIntersect={(id) => setActiveSection(id)}>
          <Formations sectionId={HomeSection.MY_STUDIES_AND_FORMATION} />
        </SectionObserverWrapper>

        <SectionObserverWrapper sectionId={HomeSection.CONTACT} onIntersect={(id) => setActiveSection(id)}>
          <Contact sectionId={HomeSection.CONTACT} />
        </SectionObserverWrapper>
      </main>
      <Footer />
    </>
  );
};
