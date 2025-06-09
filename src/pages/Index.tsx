import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Globe, TrendingUp, Users, Calendar, Anchor, Clock, PhoneMissed, Building2, Trophy, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  // Mock data for demonstration
  const weeklyData = [
    { week: 'This Week', leads: 24 },
    { week: 'Last Week', leads: 18 },
    { week: 'Week -2', leads: 31 },
    { week: 'Week -3', leads: 26 },
    { week: 'Week -4', leads: 22 },
    { week: 'Week -5', leads: 19 },
  ];

  const channelData = [
    { name: 'Website', value: 142, color: '#3b82f6' },
    { name: 'Phone', value: 89, color: '#10b981' },
    { name: 'Email', value: 67, color: '#f59e0b' },
  ];

  const emailMetrics = {
    total: 67,
    interested: 23,
    scheduledTours: 15,
    leasesSent: 8,
    conversionRate: 34.3,
    timeframe: "Quarter to Date"
  };

  const phoneMetrics = {
    total: 89,
    interested: 41,
    scheduledTours: 28,
    leasesSent: 18,
    conversionRate: 46.1,
    timeframe: "Quarter to Date"
  };

  const websiteMetrics = {
    total: 142,
    interested: 142,
    scheduledTours: 89,
    leasesSent: 45,
    timeframe: "Quarter to Date"
  };

  const phoneResponsiveness = {
    totalIncoming: 144,
    answered: 89,
    unanswered: 55,
    responseRate: 62,
    timeframe: "Quarter to Date"
  };

  const waitlistData = [
    { boatOwner: "Captain Johnson", boatSize: "40-50ft", requestedDate: "2024-06-15", phoneNumber: "(555) 123-4567" },
    { boatOwner: "Sarah Mitchell", boatSize: "30-40ft", requestedDate: "2024-06-20", phoneNumber: "(555) 234-5678" },
    { boatOwner: "Mike Rodriguez", boatSize: "50-60ft", requestedDate: "2024-07-01", phoneNumber: "(555) 345-6789" },
    { boatOwner: "Emily Chen", boatSize: "40-50ft", requestedDate: "2024-07-10", phoneNumber: "(555) 456-7890" }
  ];

  const totalConversions = {
    totalLeads: 252,
    totalScheduledTours: 132,
    totalLeasesSent: 115,
    tourConversionRate: ((132 / 252) * 100).toFixed(1),
    leaseConversionRate: ((115 / 252) * 100).toFixed(1)
  };

  const f3MarinaComparison = {
    totalMarinas: 12,
    currentMarinaRank: 3,
    metrics: [
      {
        metric: "Phone Response Rate",
        currentValue: 62,
        f3Average: 78,
        industryBenchmark: 45,
        bestPerforming: 94,
        worstPerforming: 51,
        unit: "%"
      },
      {
        metric: "Lead Conversion Rate",
        currentValue: 23.8,
        f3Average: 21.5,
        industryBenchmark: 15.2,
        bestPerforming: 31.2,
        worstPerforming: 14.7,
        unit: "%"
      },
      {
        metric: "Tour-to-Lease Rate",
        currentValue: 53.8,
        f3Average: 48.2,
        industryBenchmark: 32.1,
        bestPerforming: 67.1,
        worstPerforming: 35.4,
        unit: "%"
      },
      {
        metric: "Monthly Lead Volume",
        currentValue: 52,
        f3Average: 47,
        industryBenchmark: 28,
        bestPerforming: 89,
        worstPerforming: 23,
        unit: ""
      }
    ]
  };

  const industryComparison = {
    metrics: [
      {
        metric: "Phone Response Rate",
        currentValue: 62,
        industryBenchmark: 11,
        unit: "%"
      },
      {
        metric: "Monthly Lead Volume", 
        currentValue: 52,
        industryBenchmark: 28,
        unit: ""
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <img 
              src="/lovable-uploads/logo_lighthouse_point.jpg"
              alt="Lighthouse Point Marina Logo" 
              className="h-60 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Lighthouse Point Marina
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track and analyze boat slip leads across all channels with real-time insights and performance metrics
          </p>
        </div>

        {/* Section 1: Phone Call Responsiveness */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <PhoneMissed className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                1. Phone Call Responsiveness
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Monitor incoming call handling and response rates
            </p>
          </div>

          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <PhoneMissed className="h-5 w-5 text-red-600" />
                  <span>Phone Call Responsiveness</span>
                </CardTitle>
                <Badge className="bg-red-100 text-red-800 hover:bg-current">
                  {phoneResponsiveness.responseRate}% answered
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{phoneResponsiveness.timeframe}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{phoneResponsiveness.totalIncoming}</div>
                  <div className="text-sm text-gray-600">Total Incoming</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{phoneResponsiveness.answered}</div>
                  <div className="text-sm text-gray-600">Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{phoneResponsiveness.unanswered}</div>
                  <div className="text-sm text-gray-600">Unanswered</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">{phoneResponsiveness.responseRate}%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div 
                  className="bg-red-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${phoneResponsiveness.responseRate}%` }}
                ></div>
              </div>
              <p className="text-sm text-red-700 mt-2 font-medium">
                ⚠️ Response rate below 80% - consider having AI call agent pick up all missed calls for 100% answer rate
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Section 2: Leads for Leasing Across All Channels */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <Users className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                2. Leads for Leasing Across All Channels
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Track lead generation, conversions, and performance metrics from all acquisition sources
            </p>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">This Week</CardTitle>
                <Calendar className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">24</div>
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+33% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Month to Date</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">52</div>
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+18% vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Quarter to Date</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">105</div>
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+12% vs last quarter</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Year to Date</CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">252</div>
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+24% vs last year</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Overall Conversion Metrics with Waitlist */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Total Leads (YTD)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{totalConversions.totalLeads}</div>
                <p className="text-blue-100 mt-2">All channels combined</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Scheduled Tours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{totalConversions.totalScheduledTours}</div>
                <p className="text-purple-100 mt-2">{totalConversions.tourConversionRate}% conversion rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                  <Anchor className="h-5 w-5" />
                  <span>Leases Sent</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{totalConversions.totalLeasesSent}</div>
                <p className="text-green-100 mt-2">{totalConversions.leaseConversionRate}% of total leads</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Boats Waiting</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">7</div>
                <p className="text-orange-100 mt-2">For unavailable slip sizes</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekly Trend Chart */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Weekly Lead Trends</CardTitle>
                <p className="text-sm text-gray-600">Track lead generation over the past 6 weeks</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="week" 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <YAxis 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Bar 
                      dataKey="leads" 
                      fill="#3b82f6" 
                      radius={[4, 4, 0, 0]}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Channel Distribution */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Leads by Channel</CardTitle>
                <p className="text-sm text-gray-600">Distribution across all acquisition channels</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-6 mt-4">
                  {channelData.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <Badge variant="secondary" className="text-xs">{item.value}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Channel Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Calls Detail */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>Phone Calls</span>
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {phoneMetrics.conversionRate}% interested
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 font-medium">{phoneMetrics.timeframe}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{phoneMetrics.total}</div>
                    <div className="text-sm text-gray-600">Total Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{phoneMetrics.interested}</div>
                    <div className="text-sm text-gray-600">Interested</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">{phoneMetrics.scheduledTours}</div>
                    <div className="text-sm text-gray-600">Tours Scheduled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{phoneMetrics.leasesSent}</div>
                    <div className="text-sm text-gray-600">Leases Sent</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${phoneMetrics.conversionRate}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Email Detail */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-orange-600" />
                    <span>Email Inquiries</span>
                  </CardTitle>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                    {emailMetrics.conversionRate}% interested
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 font-medium">{emailMetrics.timeframe}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{emailMetrics.total}</div>
                    <div className="text-sm text-gray-600">Total Emails</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{emailMetrics.interested}</div>
                    <div className="text-sm text-gray-600">Interested</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">{emailMetrics.scheduledTours}</div>
                    <div className="text-sm text-gray-600">Tours Scheduled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{emailMetrics.leasesSent}</div>
                    <div className="text-sm text-gray-600">Leases Sent</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${emailMetrics.conversionRate}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Website Detail */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span>Website Leads</span>
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    100% interested
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 font-medium">{websiteMetrics.timeframe}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{websiteMetrics.total}</div>
                    <div className="text-sm text-gray-600">Total Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{websiteMetrics.interested}</div>
                    <div className="text-sm text-gray-600">All Interested</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">{websiteMetrics.scheduledTours}</div>
                    <div className="text-sm text-gray-600">Tours Scheduled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{websiteMetrics.leasesSent}</div>
                    <div className="text-sm text-gray-600">Leases Sent</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full transition-all duration-500"></div>
                </div>
                <p className="text-sm text-gray-600 italic">All website submissions are slip inquiries</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Section 3: Benchmarking vs. Industry */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                3. Benchmarking vs. Industry
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              How this marina compares to industry benchmarks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryComparison.metrics.map((metric, index) => {
              const isAboveIndustry = metric.currentValue > metric.industryBenchmark;
              const improvementAmount = metric.currentValue - metric.industryBenchmark;
              
              return (
                <Card key={index} className="bg-white shadow-lg border-0">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {metric.metric}
                      </CardTitle>
                      <Badge className="bg-green-100 text-green-800 hover:bg-current">
                        Above Industry
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-green-600">
                          {metric.currentValue}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">This Marina</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-500">
                          {metric.industryBenchmark}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Industry Average</div>
                      </div>
                    </div>
                    
                    {/* Performance comparison */}
                    <div className="space-y-3">
                      <div className="w-full bg-gray-200 rounded-full h-4 relative">
                        <div 
                          className="bg-green-600 h-4 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((metric.currentValue / (metric.currentValue + 20)) * 100, 100)}%` }}
                        ></div>
                        <div 
                          className="absolute top-0 w-1 h-4 bg-gray-500"
                          style={{ left: `${Math.min((metric.industryBenchmark / (metric.currentValue + 20)) * 100, 95)}%` }}
                        ></div>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-green-700">
                          +{improvementAmount.toFixed(1)}{metric.unit} above industry average
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Performance Summary */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-green-600" />
                <span>Performance Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold text-gray-900">
                  🎯 This marina is performing above industry benchmarks in all measured areas
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+51%</div>
                    <div className="text-sm text-gray-700">Phone response rate vs industry</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+24</div>
                    <div className="text-sm text-gray-700">Monthly leads vs industry average</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
