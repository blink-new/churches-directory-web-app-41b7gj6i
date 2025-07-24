import React, { useState, useMemo } from 'react'
import { Search, MapPin, Users, Phone, Globe, Clock } from 'lucide-react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'

// Sample data for churches and denominations
const denominations = {
  'Baptist': {
    name: 'Baptist',
    description: 'Baptist churches emphasize believer\'s baptism by immersion and congregational church governance. They believe in the authority of Scripture, salvation by grace through faith alone, and the priesthood of all believers. Baptist churches are autonomous, meaning each local congregation governs itself independently. They practice adult baptism only after a personal profession of faith in Jesus Christ. Baptist worship services typically include congregational singing, prayer, Scripture reading, and expository preaching. The denomination has a strong tradition of missions and evangelism, with many Baptist churches actively involved in local and international outreach programs.'
  },
  'Methodist': {
    name: 'Methodist',
    description: 'Methodist churches trace their roots to John Wesley\'s 18th-century revival movement within the Church of England. They emphasize personal holiness, social justice, and the importance of both faith and good works in Christian life. Methodists practice infant baptism and confirmation, believing in prevenient grace that enables all people to respond to God\'s love. Their worship combines traditional liturgy with contemporary elements, including hymn singing, prayer, and biblical preaching. Methodist churches are known for their commitment to social issues, including education, healthcare, and care for the poor and marginalized. They maintain a connectional system of governance with local, regional, and global oversight.'
  },
  'Presbyterian': {
    name: 'Presbyterian',
    description: 'Presbyterian churches follow Reformed theology rooted in the teachings of John Calvin, emphasizing God\'s sovereignty and predestination. They practice infant baptism and confirmation, believing in covenant theology that includes children of believers in the church community. Presbyterian worship is characterized by reverent liturgy, psalm singing, prayer, and expository preaching of Scripture. The denomination uses a representative form of church government with elected elders and presbyteries overseeing multiple congregations. Presbyterians value education highly, having founded many colleges and seminaries. They emphasize the importance of Scripture, tradition, reason, and experience in understanding faith, while maintaining strong commitments to missions and social justice.'
  },
  'Lutheran': {
    name: 'Lutheran',
    description: 'Lutheran churches originated from Martin Luther\'s 16th-century Protestant Reformation, emphasizing salvation by grace alone through faith alone in Christ alone. They practice infant baptism and confirmation, believing baptism creates faith and incorporates individuals into the body of Christ. Lutheran worship follows traditional liturgical patterns with emphasis on Word and Sacrament, including regular celebration of Holy Communion. The denomination maintains a balance between Scripture and tradition, using confessional documents like the Augsburg Confession to guide doctrine. Lutherans are known for their commitment to education, social services, and international relief work. They emphasize both the law and gospel in preaching, teaching that Christians are simultaneously saint and sinner.'
  },
  'Catholic': {
    name: 'Catholic',
    description: 'The Catholic Church is the largest Christian denomination worldwide, tracing its origins to Jesus Christ and the apostles. Catholics believe in the authority of Scripture and Sacred Tradition, with the Pope as the successor of St. Peter and head of the universal Church. They practice seven sacraments, including infant baptism, confirmation, and regular celebration of the Eucharist (Mass). Catholic worship centers on the liturgy, particularly the Mass, which follows ancient traditions and seasonal cycles. The Church emphasizes the communion of saints, devotion to Mary, and the importance of both faith and good works for salvation. Catholics maintain a strong commitment to education, healthcare, and social justice worldwide through extensive institutional networks.'
  },
  'Pentecostal': {
    name: 'Pentecostal',
    description: 'Pentecostal churches emphasize the gifts of the Holy Spirit, particularly speaking in tongues, divine healing, and prophecy. They believe in baptism by immersion following personal faith and a subsequent "baptism in the Holy Spirit" evidenced by spiritual gifts. Pentecostal worship is characterized by enthusiastic praise, contemporary music, spontaneous prayer, and expectation of miraculous manifestations. The denomination emphasizes personal relationship with Jesus Christ, biblical inerrancy, and the imminent Second Coming. Pentecostals are known for their evangelistic fervor, church planting efforts, and emphasis on supernatural experiences in daily Christian life. Many Pentecostal churches practice divine healing services and believe in the present-day operation of all spiritual gifts mentioned in the New Testament.'
  }
}

const sampleChurches = [
  {
    id: 1,
    name: 'First Baptist Church of Springfield',
    denomination: 'Baptist',
    address: '123 Main Street, Springfield, IL 62701',
    state: 'Illinois',
    phone: '(217) 555-0123',
    website: 'www.fbcspringfield.org',
    services: 'Sunday 9:00 AM & 11:00 AM',
    pastor: 'Rev. John Smith'
  },
  {
    id: 2,
    name: 'Grace Methodist Church',
    denomination: 'Methodist',
    address: '456 Oak Avenue, Chicago, IL 60601',
    state: 'Illinois',
    phone: '(312) 555-0456',
    website: 'www.gracemethodist.org',
    services: 'Sunday 10:30 AM',
    pastor: 'Rev. Sarah Johnson'
  },
  {
    id: 3,
    name: 'St. Paul Presbyterian',
    denomination: 'Presbyterian',
    address: '789 Elm Street, Peoria, IL 61602',
    state: 'Illinois',
    phone: '(309) 555-0789',
    website: 'www.stpaulpres.org',
    services: 'Sunday 9:00 AM & 11:00 AM',
    pastor: 'Rev. Michael Davis'
  },
  {
    id: 4,
    name: 'Trinity Lutheran Church',
    denomination: 'Lutheran',
    address: '321 Pine Road, Rockford, IL 61101',
    state: 'Illinois',
    phone: '(815) 555-0321',
    website: 'www.trinitylutheran.org',
    services: 'Sunday 8:00 AM & 10:30 AM',
    pastor: 'Rev. Lisa Anderson'
  },
  {
    id: 5,
    name: 'St. Mary Catholic Church',
    denomination: 'Catholic',
    address: '654 Cedar Lane, Naperville, IL 60540',
    state: 'Illinois',
    phone: '(630) 555-0654',
    website: 'www.stmarycatholic.org',
    services: 'Saturday 5:00 PM, Sunday 8:00 AM, 10:00 AM, 12:00 PM',
    pastor: 'Father Robert Wilson'
  },
  {
    id: 6,
    name: 'New Life Pentecostal Church',
    denomination: 'Pentecostal',
    address: '987 Maple Drive, Aurora, IL 60502',
    state: 'Illinois',
    phone: '(630) 555-0987',
    website: 'www.newlifepentecostal.org',
    services: 'Sunday 10:00 AM & 6:00 PM',
    pastor: 'Pastor David Brown'
  },
  {
    id: 7,
    name: 'Riverside Baptist Church',
    denomination: 'Baptist',
    address: '147 River Street, St. Louis, MO 63101',
    state: 'Missouri',
    phone: '(314) 555-0147',
    website: 'www.riversidebaptist.org',
    services: 'Sunday 9:30 AM & 11:00 AM',
    pastor: 'Rev. James Taylor'
  },
  {
    id: 8,
    name: 'Central Methodist Church',
    denomination: 'Methodist',
    address: '258 Broadway, Kansas City, MO 64108',
    state: 'Missouri',
    phone: '(816) 555-0258',
    website: 'www.centralmethodist.org',
    services: 'Sunday 10:00 AM',
    pastor: 'Rev. Mary Thompson'
  }
]

const states = ['All States', 'Illinois', 'Missouri', 'Indiana', 'Wisconsin', 'Iowa']

function App() {
  const [selectedState, setSelectedState] = useState('All States')
  const [selectedDenomination, setSelectedDenomination] = useState('All Denominations')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChurches = useMemo(() => {
    return sampleChurches.filter(church => {
      const matchesState = selectedState === 'All States' || church.state === selectedState
      const matchesDenomination = selectedDenomination === 'All Denominations' || church.denomination === selectedDenomination
      const matchesSearch = searchTerm === '' || 
        church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.denomination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.address.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesState && matchesDenomination && matchesSearch
    })
  }, [selectedState, selectedDenomination, searchTerm])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">ChurchFinder</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Find Your Spiritual Home</h2>
            <p className="text-xl mb-8 text-blue-100">Discover churches in your area by denomination and location</p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search churches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Filter Churches</h3>
              
              {/* State Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Denomination Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Denomination</label>
                <select
                  value={selectedDenomination}
                  onChange={(e) => setSelectedDenomination(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All Denominations">All Denominations</option>
                  {Object.keys(denominations).map(denom => (
                    <option key={denom} value={denom}>{denom}</option>
                  ))}
                </select>
              </div>

              <Separator className="my-6" />

              {/* Denomination Information */}
              <div>
                <h4 className="text-md font-semibold mb-4">About Denominations</h4>
                {selectedDenomination !== 'All Denominations' && denominations[selectedDenomination] ? (
                  <Card className="mb-4">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">{denominations[selectedDenomination].name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {denominations[selectedDenomination].description}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-3">
                    {Object.values(denominations).map((denom, index) => (
                      <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">{denom.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-gray-600 line-clamp-3">
                            {denom.description}
                          </p>
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-blue-600 text-xs mt-1"
                            onClick={() => setSelectedDenomination(denom.name)}
                          >
                            Learn more →
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Church Listings */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Churches {selectedState !== 'All States' && `in ${selectedState}`}
              </h3>
              <p className="text-gray-600">
                Found {filteredChurches.length} church{filteredChurches.length !== 1 ? 'es' : ''}
                {selectedDenomination !== 'All Denominations' && ` - ${selectedDenomination}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChurches.map(church => (
                <Card key={church.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{church.name}</CardTitle>
                      <Badge variant="secondary">{church.denomination}</Badge>
                    </div>
                    <CardDescription className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {church.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{church.pastor}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{church.phone}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Globe className="h-4 w-4 mr-2" />
                        <a href={`https://${church.website}`} className="text-blue-600 hover:underline">
                          {church.website}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{church.services}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredChurches.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No churches found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms to find churches in your area.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App