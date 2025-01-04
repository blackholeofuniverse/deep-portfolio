/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import { Github, Linkedin, Mail, Briefcase, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import AnimatedTimelineItem from '@/components/AnimatedTimelineItem'
import EnhancedEducationCard from '@/components/EnhancedEducationCard'
import AnimatedInput from '@/components/AnimatedInput'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Cover } from "@/components/ui/cover";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from 'react'

export default function Home() {
  const [state, handleSubmit] = useForm("mgvvpydz");
  const [buttonText, setButtonText] = useState('Send Message');
  const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
    (e.target as HTMLFormElement).reset();
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setButtonText('Sending...');
    await handleSubmit(e); // Handle the submission
    if (state.succeeded) {
      setButtonText('Sent'); // Change button text to 'Sent'
      resetForm(e); // Clear the form
      setTimeout(() => setButtonText('Send Message'), 3000); // Reset button text after 3 seconds
    }
  };
  return (
    <div className="container mx-auto px-6">
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-medium mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent max-md:text-5xl">
            Deepinder Singh
          </h1>
          <p className="text-2xl mb-1"><Cover className='bg-transparent rounded-md'>Flutter Developer</Cover><br /> </p>
          <p className='text-nowrap max-md:text-sm mb-4 text-2xl'>Crafting Seamless Cross-Platform Experiences</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Deep-Manku" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors z-10">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/deepinder-singh-7394242b2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors z-10">
              <Linkedin size={24} />
            </a>
            {/* <a href="mailto:mishu.dhiman5818@gmail.com" className="text-white hover:text-cyan-400 transition-colors z-10">
              <Mail size={24} />
            </a> */}
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>

      <section id="about" className="py-20 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-[400px] h-[400px] relative max-md:w-[200px] max-md:h-[200px]">
            <BackgroundGradient className='rounded-full w-[400px] h-[400px] max-md:w-[200px] max-md:h-[200px]'>
              <Image
                src="https://cdn.jsdelivr.net/gh/blackholeofuniverse/cdn/deep.jpg"
                alt="Deep Singh"
                fill
                className="rounded-full object-cover animate-float border-4 border-white"
              />
            </BackgroundGradient>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg mb-4">
              I am a self-taught Flutter Developer with a passion for crafting beautiful, user-friendly mobile applications. I have a strong interest in AI and emerging technologies, and I continuously explore innovative solutions to bring creative ideas to life. With hands-on experience in app development and a dedication to learning, I aim to push the boundaries of what is possible in mobile technology.

            </p>
            <p className="text-lg">
              I believe in the power of technology to transform lives and businesses, and I am always excited to take on new challenges.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Project Showcase</h2>
        <div className="flex justify-center gap-10 max-md:flex-col">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#111111] dark:bg-zinc-900">
            <Image
              src={"https://cdn.jsdelivr.net/gh/blackholeofuniverse/cdn/tradequest.jpg"}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-lg"
            />
            <p className="text-base sm:text-xl text-white font-semibold mt-12 mb-4 dark:text-neutral-200">
              TradeQuest
            </p>

            <p className="text-sm text-gray-400 dark:text-neutral-400">
              A virtual trading software for Android and Windows that allows users to train themselves using virtual money. It includes Forex, Indian stocks, popular US stocks, cryptocurrencies, funds, futures, and indices.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex mb-4 items-center space-x-1 bg-black mt-5 text-xs font-bold dark:bg-zinc-800">
              <span>Coming soon...</span>
              {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <ArrowUpRight size={16} />
              </span> */}
            </button>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#111111] dark:bg-zinc-900">
            <Image
              src={"https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="jordans"
              height="500"
              width="500"
              className="object-contain rounded-lg"
            />
            <p className="text-base sm:text-xl text-white mt-10 mb-4 dark:text-neutral-200 font-semibold">
              AttendEase
            </p>

            <p className="text-sm text-gray-400 dark:text-neutral-400">
              The Attendance Tracker App, built with Flutter, is a sleek and user-friendly solution for managing attendance in schools, organizations, and events. Designed for cross-platform use, it ensures a consistent and intuitive experience on Android and iOS devices.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 mb-[3px] text-xs font-bold dark:bg-zinc-800">
              <span>View Project</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </BackgroundGradient>
        </div>
      </section>


      <section id="experience" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Personal Experience</h2>
        <div className="max-w-3xl mx-auto">
          <AnimatedTimelineItem
            title="Flutter Developer"
            description="I am a Flutter developer with expertise in building cross-platform applications. I specialize in creating scalable, high-performance apps using Flutter&apos;s robust framework and widgets. My focus is on clean code, seamless functionality, and delivering engaging user experiences."
            icon={<Briefcase className="w-5 h-5 text-cyan-400" />}
          />
          <AnimatedTimelineItem
            title="Frontend Development"
            description="I designed responsive and dynamic user interfaces. Using Flutter, I create visually appealing layouts that prioritize usability, performance, and accessibility"
            icon={<Briefcase className="w-5 h-5 text-cyan-400" />}
          />
          <AnimatedTimelineItem
            title="Intermediate Skills in Backend Development and Firebase"
            description="I possess intermediate skills in backend development and Firebase, managing server-side operations, real-time databases, authentication, and Firestore. Additionally, I developed the logic for historical candlestick charts ranging from 1 day to 5 years from scratch."
            icon={<Briefcase className="w-5 h-5 text-cyan-400" />}
          />
          <AnimatedTimelineItem
            title="UI designer in Figma"
            description="As a UI designer, I craft intuitive and visually appealing designs using Figma. From wireframes to polished prototypes, I focus on enhancing usability"
          />
        </div>
      </section>

      <section id="education" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Educational Journey</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <EnhancedEducationCard
            year="2024 - 2027"
            degree="Bachelor's of Computer Applications"
            institution="Punjab State Aeronautical Engineering College"
            description="Specialized in software development, data structures, algorithms, and computer networks."
          // achievements={[
          //   "Thesis: 'Implementing Neural Networks for Predictive Analytics in E-commerce'",
          //   "Published research paper on 'Optimizing Deep Learning Models for Mobile Devices'",
          //   "Received Outstanding Graduate Student Award",
          //   "Led a team project on developing a real-time object recognition system",
          // ]}
          />
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {/* <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <span>+1 (123) 456-7890</span>
              </div> */}
              {/* <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                <span>mishu.dhiman5818@gmail.com</span>
              </div> */}
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                <span>Punjab, India</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Deep-Manku" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/deepinder-singh-7394242b2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                {/* <a href="mailto:mishu.dhiman5818@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </a> */}
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <AnimatedInput
                  type="text"
                  name="name"
                  label="Your Name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Email Input */}
              <div>
                <AnimatedInput
                  type="email"
                  name="email"
                  label="Your Email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Input */}
              <div>
                <AnimatedInput
                  name="message"
                  label="Your Message"
                  textarea
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full px-4 py-2 rounded-md text-white bg-gradient-to-r 
          from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

