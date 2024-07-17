import React, { useEffect } from "react";
import ourstory from './ourstory.module.css';
import img2 from '../../../Assets/2.jpg';
import { FaRegLightbulb } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { FaBalanceScale } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import 'aos/dist/aos.css';
import Aos from 'aos';

const OurStory = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className={ourstory.ourStory}>
            <div className={ourstory.secContainer}>
                <div className={ourstory.ourStoryMainContent}>
                    <h1 className={ourstory.title} data-aos="fade-up" data-aos-offset="300">
                        <span className={ourstory.subtitle}>A2K GROUP</span> HISTORY
                    </h1>

                    <div className={ourstory.storyContent} data-aos="fade-right">
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1>WHO WE ARE</h1>
                            <p>At A2K Group we champion the cause of digitalization in the Philippines and around the world to usher in a new era of technological advancement. We specialize in developing digital services and processes, providing comprehensive training to both students and leaders with complementary skillsets, and investing in promising individuals and innovative ideas to reshape the digital landscape. </p>
                        </div>
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="200">
                            <img src={img2} alt="Our Story Image" />
                        </div>
                    </div>

                    <div className={ourstory.visionContent} data-aos="fade-right">
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><FaRegLightbulb />OUR <span className={ourstory.subtitle}>VISION</span></h1>
                            <p>To empower others through the transition towards digitalization...</p>
                        </div>
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><SiDart /> OUR <span className={ourstory.subtitle}>MISSION</span></h1>
                            <p>We deliver digitalization services to organizations...</p>
                        </div>
                        <div className={ourstory.lastItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><FaBalanceScale /> OUR <span className={ourstory.subtitle}>CORE VALUES</span></h1>
                            <h3>Family</h3>
                            <p>Fostering a caring community...</p>
                            <h3>Innovation</h3>
                            <p>Professionally pursuing excellence...</p>
                            <h3>Joy</h3>
                            <p>Living each day as an opportunity to celebrate...</p>
                        </div>
                    </div>

                    <div className={ourstory.historyContent} data-aos="fade-right">
                        <h1 className={ourstory.hisTitle}>
                            <span className={ourstory.title}>PAST </span> | <span className={ourstory.title}> PRESENT</span> | <span className={ourstory.title}> FUTURE</span>
                        </h1>

                        <div className={ourstory.firstItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><CiMapPin className={ourstory.icons} /> THE BEGINNING OF <span className={ourstory.subtitle}>A2K GROUP</span></h1>
                            <p>A2K Group was founded with the ideals of ANGAT, ANGAD, and KASAMA that guide us as we harness digitalization to transform processes and services towards optimal operation. While we are a global team, we have strong roots in the Philippines where we launched in tandem with a vivid cultural agenda to bring digitalization to all segments of society. Through global and local digital leaders, we saw an opportunity to empower a vibrant workforce with technological processes while addressing pressing social and commercial needs. To do so holistically, we established A2K group with its three divisions to implement the ideals of ANGAT, ANGAD, KASAMA.​</p>
                        </div>
                        <div className={ourstory.middleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><CiMapPin className={ourstory.icons} /> TODAY</h1>
                            <p>We are a skilled global team of technical experts working on diverse projects and delivering world-class digitalization services that empower organizations to transition to efficient and modern systems. As digital pioneers, our focus extends beyond project execution to training both current leaders and emerging digitalization experts in the latest skills with the goal of amplifying their opportunities to further drive and foster digital transformation. Collaborating closely with organizations, we unlock their full potential by providing cutting-edge digital tools, fostering a technically skilled workforce, and strategically investing in opportunities to bring impactful projects to fruition.​</p>
                        </div>
                        <div className={ourstory.lastItem} >
                            <h1><CiMapPin className={ourstory.icons} /> LOOKING AHEAD</h1>
                            <p>A2K Group is continuously broadening its reach through global partnerships, leveraging our expertise in digitalization to elevate the endeavors of our clients. Simultaneously, we are committed to training even more aspiring digital pioneers to sustain the growth of digitalization while investing in innovative ideas where the benefits of digital transformation can have the most impactful outcomes in our communities and around the world.​</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
