'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import dynamic from 'next/dynamic'

const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false })

const defaultOrgData = {
  name: "John Doe",
  title: "CEO",
  children: [{
    name: "Alice Smith",
    title: "COO",
    children: [{
      name: "Bob Johnson",
      title: "Operations Manager",
      children: [
        { name: "Carol White", title: "Team Lead" },
        { name: "David Brown", title: "Team Lead" },
        { name: "Eve Green", title: "Team Lead" }
      ]
    }, {
      name: "Frank Davis",
      title: "HR Manager",
      children: [
        { name: "Grace Taylor", title: "HR Specialist" },
        { name: "Henry Wilson", title: "HR Specialist" }
      ]
    }]
  }, {
    name: "Ivy Lee",
    title: "CTO",
    children: [{
      name: "Jack Robinson",
      title: "Development Manager",
      children: [
        { name: "Karen Clark", title: "Senior Developer" },
        { name: "Liam Harris", title: "Senior Developer" },
        { name: "Mia Turner", title: "Junior Developer" },
        { name: "Noah Martin", title: "Junior Developer" }
      ]
    }, {
      name: "Olivia Moore",
      title: "QA Manager",
      children: [
        { name: "Peter Hall", title: "QA Engineer" },
        { name: "Quinn Adams", title: "QA Engineer" }
      ]
    }]
  }, {
    name: "Rachel King",
    title: "CFO",
    children: [
      { name: "Samuel Scott", title: "Financial Analyst" },
      { name: "Tina Young", title: "Accountant" }
    ]
  }]
}

export default function OrganizationChartGenerator() {
  const [orgData, setOrgData] = useState(JSON.stringify(defaultOrgData, null, 2))
  const [chartOptions, setChartOptions] = useState(null)
  const [HighchartsModule, setHighchartsModule] = useState(null)

  useEffect(() => {
    const loadHighcharts = async () => {
      const Highcharts = await import('highcharts')
      const HighchartsSankey = await import('highcharts/modules/sankey')
      const HighchartsOrganization = await import('highcharts/modules/organization')
      const HighchartsExporting = await import('highcharts/modules/exporting')
      const HighchartsAccessibility = await import('highcharts/modules/accessibility')

      HighchartsSankey.default(Highcharts)
      HighchartsOrganization.default(Highcharts)
      HighchartsExporting.default(Highcharts)
      HighchartsAccessibility.default(Highcharts)

      setHighchartsModule(Highcharts)

      const options = {
        chart: {
          height: 600,
          inverted: true
        },
        title: {
          text: 'Highcharts Org Chart'
        },
        series: [{
          type: 'organization',
          name: 'Organization',
          keys: ['from', 'to'],
          data: [],
          levels: [{
            level: 0,
            color: 'silver',
            dataLabels: {
              color: 'black'
            },
            height: 25
          }, {
            level: 1,
            color: 'silver',
            dataLabels: {
              color: 'black'
            },
            height: 25
          }, {
            level: 2,
            color: '#980104'
          }, {
            level: 4,
            color: '#359154'
          }],
          nodes: [],
          colorByPoint: false,
          color: '#007ad0',
          dataLabels: {
            color: 'white'
          },
          borderColor: 'white',
          nodeWidth: 65
        }],
        tooltip: {
          outside: true
        },
        exporting: {
          allowHTML: true,
          sourceWidth: 800,
          sourceHeight: 600
        }
      }

      setChartOptions(options)
    }

    loadHighcharts()
  }, [])

  const generateChart = () => {
    if (!chartOptions || !HighchartsModule) return

    try {
      const data = JSON.parse(orgData)
      const nodes = []
      const connections = []

      const processNode = (node, parentId = null) => {
        const currentId = nodes.length
        nodes.push({
          id: currentId.toString(),
          name: node.name,
          title: node.title,
          description: node.title
        })

        if (parentId !== null) {
          connections.push([parentId.toString(), currentId.toString()])
        }

        if (node.children) {
          node.children.forEach(child => processNode(child, currentId))
        }
      }

      processNode(data)

      const newOptions = {
        ...chartOptions,
        series: [{
          ...chartOptions.series[0],
          data: connections,
          nodes: nodes
        }]
      }

      setChartOptions(newOptions)
    } catch (error) {
      console.error('Error parsing JSON:', error)
      alert('Error parsing JSON. Please check your input.')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Organization Chart Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label htmlFor="orgData" className="block text-sm font-medium text-gray-700 mb-2">
            Organization Data (JSON format)
          </label>
          <Textarea
            id="orgData"
            value={orgData}
            onChange={(e) => setOrgData(e.target.value)}
            rows={10}
            className="w-full"
          />
        </div>
        <Button onClick={generateChart} className="mb-4">Generate Chart</Button>
        <div style={{ width: '100%', height: '600px' }}>
          {chartOptions && HighchartsModule && (
            <HighchartsReact
              highcharts={HighchartsModule}
              options={chartOptions}
              constructorType={'chart'}
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}