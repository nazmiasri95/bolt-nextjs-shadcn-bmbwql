'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function CompanyAGPT() {
  const [systemPrompt, setSystemPrompt] = useState('')
  const [userPrompt, setUserPrompt] = useState('')
  const [aiResponse, setAiResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real application, you would send the prompts to your AI service here
    // For this example, we'll just combine the prompts to simulate a response
    const simulatedResponse = `System Prompt: ${systemPrompt}\n\nUser Prompt: ${userPrompt}\n\nAI Response: This is a simulated AI response based on your input.`
    setAiResponse(simulatedResponse)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>CompanyAGPT Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="systemPrompt" className="block text-sm font-medium text-gray-700">System Prompt</label>
            <Textarea
              id="systemPrompt"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder="Enter system prompt..."
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="userPrompt" className="block text-sm font-medium text-gray-700">User Prompt</label>
            <Textarea
              id="userPrompt"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Enter user prompt..."
              className="mt-1"
            />
          </div>
          <Button type="submit">Generate Response</Button>
        </form>
        {aiResponse && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">AI Response:</h3>
            <pre className="mt-2 whitespace-pre-wrap bg-gray-100 p-4 rounded-md">{aiResponse}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}