import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop'>Joseph</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Engineer based in Nigeria, specializing in chatbot integration, 3-D portfolio creation, ML model enthusiast, Front-end animation designer, and python based project developer. With a strong foundation in Aerospace knowledge.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I have extensive experience across various industries, including online freelancing platforms, product quality assurance, and hospitality. These roles, combined with my Aerospace Engineering background, have honed my technical, analytical, and interpersonal skills. I've collaborated with diverse teams and managed solo projects, consistently interacting with clients and stakeholders in a professional manner. My focus has been on ensuring high-quality outcomes and delivering satisfactory results, especially for website improvements and client requests. Here's the rundown:</p>
      </div>

      <div className='mt-12'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>}
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColour: experience.iconBg,
                boxShadow: 'none',
                }}
            >
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li key={'experience-point-${index}'} className='text-blck-500/50 font-normal pl-1 text-sm'>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About