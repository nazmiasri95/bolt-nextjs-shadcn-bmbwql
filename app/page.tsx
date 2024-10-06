import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Zap, Shield, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BrainCircuit size={32} />
            <span className="text-2xl font-bold">Agentic AI</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><Link href="/examples" className="hover:underline">Examples</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Agentic AI</h1>
            <p className="text-xl mb-8">Empowering businesses with intelligent agents and cutting-edge AI solutions</p>
            <Button size="lg" asChild>
              <Link href="/examples">Explore Our Solutions</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-yellow-500" />}
                title="Intelligent Automation"
                description="Streamline your workflows with our AI-powered automation solutions."
              />
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-green-500" />}
                title="Enhanced Security"
                description="Protect your data with our advanced AI-driven security measures."
              />
              <FeatureCard
                icon={<Users className="h-12 w-12 text-blue-500" />}
                title="Collaborative AI"
                description="Foster teamwork with our AI agents designed for seamless collaboration."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Agentic AI</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              At Agentic AI, we're passionate about harnessing the power of artificial intelligence to transform businesses. 
              Our team of experts develops cutting-edge AI solutions that drive innovation, increase efficiency, and unlock new possibilities for organizations across industries.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg mb-8">Interested in learning more about how Agentic AI can benefit your business? Contact us today!</p>
            <Button size="lg">Contact Us</Button>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Agentic AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}