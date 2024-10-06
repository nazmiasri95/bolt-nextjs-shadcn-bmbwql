import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BrainCircuit, ArrowLeft } from 'lucide-react'
import CompanyAGPT from './company-agpt'
import OrganizationChartGenerator from './organization-chart-generator'

export default function ExamplesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BrainCircuit size={32} />
            <span className="text-2xl font-bold">Agentic AI</span>
          </div>
          <nav>
            <Link href="/">
              <Button variant="ghost" className="text-primary-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Example Applications</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ExampleCard 
            title="CompanyAGPT"
            description="A customizable GPT chat application for your company."
            link="#company-agpt"
          />
          <ExampleCard 
            title="Organization Charts Generator"
            description="Generate organization charts from JSON data using Highcharts."
            link="#org-chart-generator"
          />
        </div>

        <section id="company-agpt" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">CompanyAGPT</h2>
          <p className="mb-4">CompanyAGPT is a customizable GPT chat application that allows you to input a System Prompt and User Prompt, then generates an AI response.</p>
          <CompanyAGPT />
        </section>

        <section id="org-chart-generator" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Organization Charts Generator</h2>
          <p className="mb-4">Generate organization charts from JSON data using Highcharts. Input your organization structure and visualize it as a chart.</p>
          <OrganizationChartGenerator />
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © 2023 Agentic AI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function ExampleCard({ title, description, link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={link}>
          <Button>Try it out</Button>
        </Link>
      </CardContent>
    </Card>
  )
}