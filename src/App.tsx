import MainHero from './components/MainHero';
import TextRevealDemo from './components/TextRevealDemo';
import Timeline, { TimelineItem } from './components/TimeLine';
import config from './config/index.json';
import MainSkills from './components/MainSkills';
import AboutMe from './components/AboutMe';
import LetsConnect from './components/LetsConnect';
import SchoolTimeLine from './components/SchoolTimeLine';

function App() {
  const { textReveal, experience } = config;
  
  const items: TimelineItem[] = experience.works;

  return (
    <>
      {/* Home */}
      <MainHero />
       {/*AboutMe */}
      <AboutMe/>
       {/*AboutMe */}
      <SchoolTimeLine/>
      {/*MainSkills */} 
      <MainSkills/>
       {/*Timeline */}
      <Timeline items={items} />
      {/* TextReveal */}
      <TextRevealDemo text={textReveal.userText[2]} />
       {/*LetsConnect */}
      <LetsConnect/>
    </>
  );
}

export default App;
