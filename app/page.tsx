'use client'
import Image from 'next/image'
import { Github, Linkedin, Mail, Briefcase, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import AnimatedTimelineItem from '@/components/AnimatedTimelineItem'
import EnhancedEducationCard from '@/components/EnhancedEducationCard'
import AnimatedInput from '@/components/AnimatedInput'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundGradient } from '@/components/ui/background-gradient'

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-medium mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent max-md:text-5xl">
            Deepinder Singh
          </h1>
          <p className="text-2xl mb-1">Flutter Developer <br /> </p>
          <p className='text-nowrap max-md:text-sm mb-4 text-2xl'>Crafting Seamless Cross-Platform Experiences</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Deep-Manku" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors z-10">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/deep-singh-7394242b2/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors z-10">
              <Linkedin size={24} />
            </a>
            <a href="mailto:deepindersingh@gmail.com" className="text-white hover:text-cyan-400 transition-colors z-10">
              <Mail size={24} />
            </a>
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
                src="https://cdn.discordapp.com/attachments/1115623849027964930/1324351903391551570/WhatsApp_Image_2025-01-02_at_16.05.19_9d360297.jpg?ex=6777d653&is=677684d3&hm=f0330b8e77541d92817b108eac815852cef415a5b01f05b0679f948b29f51b0d&"
                alt="Deep Singh"
                fill
                className="rounded-full object-cover animate-float border-4 border-white"
              />
            </BackgroundGradient>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg mb-4">
              I&apos;m a self-taught Flutter Developer with a passion for crafting beautiful, user-friendly mobile applications. I have a strong interest in AI and emerging technologies, continuously exploring innovative solutions to bring creative ideas to life. With hands-on experience in app development and a dedication to learning, I aim to push the boundaries of what&apos;s possible in mobile technology.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring developers. I believe in the power of technology to transform lives and businesses, and I&apos;m always excited to take on new challenges.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Project Showcase</h2>
        <div className="flex justify-center gap-10 max-md:flex-col">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#111111] dark:bg-zinc-900">
            <Image
              src={"https://cdn.jsdelivr.net/gh/blackholeofuniverse/cdn/tradex.png"}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-lg"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-[10px] dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>

            <p className="text-sm text-gray-400 dark:text-neutral-400">
            Your gateway to mastering the stock market without spending a dime! Dive into a lifelike trading experience powered by real-time market data. Perfect for aspiring investors and seasoned traders, this app lets you hone your strategies, build confidence, and track your performanc
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>View Project</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <ArrowUpRight size={16} />
              </span>
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
            <p className="text-base sm:text-xl text-black mt-4 mb-[3.4540rem] dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>

            <p className="text-sm text-gray-400 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases. Your best opportunity to get these right now is by
              entering raffles
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>View Project</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#111111] dark:bg-zinc-900">
            <Image
              src={"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-lg"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-4 dark:text-neutral-200">
              Air Jordan 2 Retro Reimagined
            </p>

            <p className="text-sm text-gray-400 dark:text-neutral-400 mb-[3.4540rem]">
              The Air Jordan 2 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases. Your best opportunity to get these right now is by
              entering raffles
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>View Project</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </BackgroundGradient>
        </div>
      </section>


      <section id="experience" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Professional Journey</h2>
        <div className="max-w-3xl mx-auto">
          <AnimatedTimelineItem
            year="2017 - 2020"
            title="Full Stack Developer at Digital Solutions Ltd."
            description="Developed and maintained multiple client projects, collaborated with cross-functional teams, and contributed to the company's internal framework."
            icon={<Briefcase className="w-5 h-5 text-cyan-400" />}
          />
          <AnimatedTimelineItem
            year="2017 - 2020"
            title="Full Stack Developer at Digital Solutions Ltd."
            description="Developed and maintained multiple client projects, collaborated with cross-functional teams, and contributed to the company's internal framework."
            icon={<Briefcase className="w-5 h-5 text-cyan-400" />}
          />
          <AnimatedTimelineItem
            year="2015 - 2017"
            title="Junior Developer at StartUp Ventures"
            description="Assisted in the development of web applications, learned and applied new technologies, and participated in code reviews and team meetings."
            icon={<Briefcase className="w-5 h-5 text-cyan-400" />}
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
            achievements={[
              "Thesis: 'Implementing Neural Networks for Predictive Analytics in E-commerce'",
              "Published research paper on 'Optimizing Deep Learning Models for Mobile Devices'",
              "Received Outstanding Graduate Student Award",
              "Led a team project on developing a real-time object recognition system",
            ]}
          />
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                <span>deepindersingh@gmail.com</span>
              </div>
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
                <a href="https://www.linkedin.com/in/deep-singh-7394242b2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:deepindersingh@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
            <form className="space-y-4">
              <AnimatedInput
                type="text"
                name="name"
                label="Your Name"
                required
              />
              <AnimatedInput
                type="email"
                name="email"
                label="Your Email"
                required
              />
              <AnimatedInput
                name="message"
                label="Your Message"
                textarea
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

