import Header from '@/components/shared/header.jsx';
import Head_Index from '@/components/home/section/headIndex/head_index.jsx';
import {APropos} from '@/components/home/section/apropos/apropos.jsx';
import {Skills} from '@/components/home/section/skills/skills.jsx';
import {ProjectsCards} from '@/components/home/section/projectsCard/projectsCard.jsx';
import {Experiences} from '@/components/home/section/experiences/experiences.jsx';
import {Formations} from '@/components/home/section/formations/formations.jsx';
import {Contact} from '@/components/home/section/contact/contact.jsx';
import Footer from '@/components/shared/footer.jsx';

import {SectionObserverWrapper} from '@/components/ui/section-observer-wrapper.js';
import {HomeSection} from '@/constants/home-section.constants.js';
import useStoreSectionVisible from '@/storeSectionVisible';

export const Home = () => {
  const setActiveSection = useStoreSectionVisible((state) => state.setActiveSection);

  return (
    <>
      <Header />
      <main>
        <Head_Index />

        <SectionObserverWrapper sectionId={HomeSection.ABOUT_US} onIntersect={(id) => setActiveSection(id)}>
          <APropos sectionId={HomeSection.ABOUT_US} />
        </SectionObserverWrapper>

        <SectionObserverWrapper sectionId={HomeSection.MY_SKILLS} onIntersect={(id) => setActiveSection(id)}>
          <Skills sectionId={HomeSection.MY_SKILLS} />
        </SectionObserverWrapper>

        <SectionObserverWrapper sectionId={HomeSection.MY_LATEST_PROJECT} onIntersect={(id) => setActiveSection(id)}>
          <ProjectsCards sectionId={HomeSection.MY_LATEST_PROJECT} />
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
