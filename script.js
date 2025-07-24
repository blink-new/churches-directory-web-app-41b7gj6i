// Church data
const churches = [
    {
        name: "First Baptist Church of Chicago",
        denomination: "Baptist",
        state: "Illinois",
        address: "123 Main St, Chicago, IL 60601",
        phone: "(312) 555-0123",
        pastor: "Rev. John Smith",
        services: "Sunday 9:00 AM & 11:00 AM",
        website: "www.firstbaptistchicago.org"
    },
    {
        name: "Grace Methodist Church",
        denomination: "Methodist",
        state: "Illinois",
        address: "456 Oak Ave, Springfield, IL 62701",
        phone: "(217) 555-0456",
        pastor: "Rev. Sarah Johnson",
        services: "Sunday 10:30 AM",
        website: "www.gracemethodist.org"
    },
    {
        name: "St. Mary's Catholic Church",
        denomination: "Catholic",
        state: "Missouri",
        address: "789 Pine St, St. Louis, MO 63101",
        phone: "(314) 555-0789",
        pastor: "Father Michael Brown",
        services: "Saturday 5:00 PM, Sunday 8:00 AM & 10:30 AM",
        website: "www.stmarystlouis.org"
    },
    {
        name: "Trinity Presbyterian Church",
        denomination: "Presbyterian",
        state: "Indiana",
        address: "321 Elm St, Indianapolis, IN 46201",
        phone: "(317) 555-0321",
        pastor: "Rev. David Wilson",
        services: "Sunday 9:00 AM & 11:00 AM",
        website: "www.trinitypresby.org"
    },
    {
        name: "St. Paul Lutheran Church",
        denomination: "Lutheran",
        state: "Wisconsin",
        address: "654 Maple Dr, Milwaukee, WI 53201",
        phone: "(414) 555-0654",
        pastor: "Pastor Mark Anderson",
        services: "Sunday 8:30 AM & 10:45 AM",
        website: "www.stpaullutheran.org"
    },
    {
        name: "New Life Pentecostal Church",
        denomination: "Pentecostal",
        state: "Iowa",
        address: "987 Cedar Ln, Des Moines, IA 50301",
        phone: "(515) 555-0987",
        pastor: "Pastor James Taylor",
        services: "Sunday 10:00 AM & 6:00 PM",
        website: "www.newlifepentecostal.org"
    },
    {
        name: "Riverside Baptist Church",
        denomination: "Baptist",
        state: "Missouri",
        address: "147 River Rd, Kansas City, MO 64101",
        phone: "(816) 555-0147",
        pastor: "Rev. Robert Davis",
        services: "Sunday 9:30 AM & 11:00 AM",
        website: "www.riversidebaptist.org"
    },
    {
        name: "Unity Methodist Church",
        denomination: "Methodist",
        state: "Indiana",
        address: "258 Unity Blvd, Fort Wayne, IN 46801",
        phone: "(260) 555-0258",
        pastor: "Rev. Lisa Martinez",
        services: "Sunday 10:00 AM",
        website: "www.unitymethodist.org"
    },
    {
        name: "Holy Cross Catholic Church",
        denomination: "Catholic",
        state: "Wisconsin",
        address: "369 Cross St, Green Bay, WI 54301",
        phone: "(920) 555-0369",
        pastor: "Father Thomas Garcia",
        services: "Saturday 4:00 PM, Sunday 7:30 AM, 9:00 AM & 11:00 AM",
        website: "www.holycrossgb.org"
    },
    {
        name: "Faith Presbyterian Church",
        denomination: "Presbyterian",
        state: "Iowa",
        address: "741 Faith Ave, Cedar Rapids, IA 52401",
        phone: "(319) 555-0741",
        pastor: "Rev. Jennifer Lee",
        services: "Sunday 9:00 AM & 10:30 AM",
        website: "www.faithpresby.org"
    },
    {
        name: "Emmanuel Lutheran Church",
        denomination: "Lutheran",
        state: "Illinois",
        address: "852 Emmanuel Dr, Rockford, IL 61101",
        phone: "(815) 555-0852",
        pastor: "Pastor William Clark",
        services: "Sunday 8:00 AM & 10:30 AM",
        website: "www.emmanuellutheran.org"
    },
    {
        name: "Victory Pentecostal Church",
        denomination: "Pentecostal",
        state: "Missouri",
        address: "963 Victory Way, Springfield, MO 65801",
        phone: "(417) 555-0963",
        pastor: "Pastor Michelle White",
        services: "Sunday 10:30 AM & 6:30 PM",
        website: "www.victorypentecostal.org"
    }
];

// Denomination descriptions
const denominationInfo = {
    Baptist: "Baptist churches emphasize believer's baptism by immersion and congregational church governance. They believe in the authority of Scripture, salvation by faith alone, and the priesthood of all believers. Baptist churches are autonomous, meaning each local congregation governs itself independently. They practice adult baptism by full immersion as a public declaration of faith. Baptist worship services typically include congregational singing, prayer, Scripture reading, and expository preaching. Many Baptist churches are evangelical in nature, emphasizing personal relationship with Jesus Christ and the importance of sharing the Gospel. The denomination has a strong tradition of religious liberty and separation of church and state, historically advocating for freedom of conscience and worship.",
    
    Methodist: "Methodist churches trace their roots to John Wesley's 18th-century revival movement within the Church of England. They emphasize personal holiness, social justice, and the importance of both faith and good works in Christian life. Methodists believe in prevenient grace - God's grace that precedes human decision - and that salvation is available to all people. They practice infant baptism and confirmation, and their worship services blend traditional liturgy with contemporary elements. Methodist churches are known for their strong commitment to social action, including education, healthcare, and care for the poor and marginalized. They have a connectional system of governance, where local churches are part of larger conferences. The denomination values both personal piety and social responsibility, believing that faith should be expressed through service to others and working for justice in society.",
    
    Presbyterian: "Presbyterian churches follow the Reformed tradition established by John Calvin, emphasizing God's sovereignty and the authority of Scripture. They believe in predestination and salvation by grace alone through faith alone. Presbyterian church governance is distinctive, operating through elected representatives (presbyters) at local, regional, and national levels. They practice infant baptism and confirmation, viewing baptism as a sign of God's covenant with believers and their children. Presbyterian worship is typically formal and liturgical, featuring responsive readings, hymns, prayers, and expository preaching. The denomination values education highly, having founded many colleges and seminaries. Presbyterians emphasize the importance of studying Scripture and understanding doctrine. They believe in the priesthood of all believers while maintaining ordained clergy for specific ministerial functions. Social justice and community service are important aspects of Presbyterian faith and practice.",
    
    Lutheran: "Lutheran churches originated from Martin Luther's 16th-century Protestant Reformation, emphasizing salvation by grace alone through faith alone, as revealed in Scripture alone. They maintain a liturgical worship style with traditional elements like communion, confession, and structured prayers. Lutherans practice infant baptism and confirmation, believing baptism is a means of grace that creates faith. They observe communion frequently, believing in the real presence of Christ in the bread and wine. Lutheran theology balances God's law and gospel, emphasizing both God's judgment and mercy. The denomination values education and has established many schools and universities. Lutheran churches have a strong tradition of music in worship, often featuring organ music and congregational singing. They believe in the priesthood of all believers while maintaining the importance of ordained ministry. Lutheran social teaching emphasizes care for the poor, social justice, and stewardship of creation.",
    
    Catholic: "The Catholic Church is the world's largest Christian denomination, tracing its origins to Jesus Christ and the apostles. Catholics believe in the authority of Scripture and Sacred Tradition, interpreted by the Church's Magisterium (teaching authority). The Pope serves as the visible head of the universal Church. Catholic worship centers on the Mass, which includes the Liturgy of the Word and the Liturgy of the Eucharist. Catholics believe in the real presence of Christ in the Eucharist and observe seven sacraments: baptism, confirmation, Eucharist, penance, anointing of the sick, holy orders, and matrimony. The Church emphasizes both faith and good works for salvation, devotion to Mary and the saints, and the communion of saints. Catholic social teaching promotes human dignity, care for the poor, and social justice. The Church maintains a hierarchical structure with bishops, priests, and deacons serving in various ministerial roles.",
    
    Pentecostal: "Pentecostal churches emphasize the gifts of the Holy Spirit, particularly speaking in tongues, divine healing, and prophecy. They believe in baptism in the Holy Spirit as a distinct experience from salvation, often evidenced by speaking in tongues. Pentecostal worship is typically enthusiastic and expressive, featuring contemporary music, spontaneous prayer, and manifestations of spiritual gifts. They practice believer's baptism by immersion and emphasize personal relationship with Jesus Christ. Pentecostals believe in divine healing through prayer and faith, often incorporating healing services into their worship. The denomination strongly emphasizes evangelism and missionary work, believing in the urgency of spreading the Gospel. Pentecostal churches often have contemporary worship styles with modern music and informal atmosphere. They believe in the inerrancy of Scripture and the importance of living a holy life. Many Pentecostal churches emphasize prosperity theology, believing that faith can bring material blessings, though this varies among different Pentecostal groups."
};

// Current filters
let currentFilters = {
    state: 'all',
    denomination: 'all',
    search: ''
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const churchGrid = document.getElementById('churchGrid');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const denominationDetails = document.getElementById('denominationDetails');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    renderChurches();
    updateDenominationInfo();
});

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', function() {
        currentFilters.search = this.value.toLowerCase();
        renderChurches();
    });

    // Search button
    document.querySelector('.search-button').addEventListener('click', function() {
        renderChurches();
    });

    // State filters
    document.querySelectorAll('input[name="state"]').forEach(radio => {
        radio.addEventListener('change', function() {
            currentFilters.state = this.value;
            renderChurches();
        });
    });

    // Denomination filters
    document.querySelectorAll('input[name="denomination"]').forEach(radio => {
        radio.addEventListener('change', function() {
            currentFilters.denomination = this.value;
            renderChurches();
            updateDenominationInfo();
        });
    });
}

// Filter churches based on current filters
function filterChurches() {
    return churches.filter(church => {
        // State filter
        if (currentFilters.state !== 'all' && church.state !== currentFilters.state) {
            return false;
        }

        // Denomination filter
        if (currentFilters.denomination !== 'all' && church.denomination !== currentFilters.denomination) {
            return false;
        }

        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search;
            return (
                church.name.toLowerCase().includes(searchTerm) ||
                church.denomination.toLowerCase().includes(searchTerm) ||
                church.address.toLowerCase().includes(searchTerm) ||
                church.pastor.toLowerCase().includes(searchTerm)
            );
        }

        return true;
    });
}

// Render churches
function renderChurches() {
    const filteredChurches = filterChurches();
    
    // Update results header
    updateResultsHeader(filteredChurches.length);
    
    // Clear grid
    churchGrid.innerHTML = '';
    
    if (filteredChurches.length === 0) {
        churchGrid.innerHTML = `
            <div class="no-results">
                <h3>No churches found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    // Render church cards
    filteredChurches.forEach(church => {
        const churchCard = createChurchCard(church);
        churchGrid.appendChild(churchCard);
    });
}

// Create church card element
function createChurchCard(church) {
    const card = document.createElement('div');
    card.className = 'church-card';
    
    card.innerHTML = `
        <h3 class="church-name">${church.name}</h3>
        <span class="church-denomination">${church.denomination}</span>
        
        <div class="church-info">
            <p><strong>Address:</strong> ${church.address}</p>
            <p><strong>Pastor:</strong> ${church.pastor}</p>
            <p><strong>Service Times:</strong> ${church.services}</p>
        </div>
        
        <div class="church-contact">
            <p><strong>Phone:</strong> ${church.phone}</p>
            <p><strong>Website:</strong> <a href="http://${church.website}" target="_blank">${church.website}</a></p>
        </div>
    `;
    
    return card;
}

// Update results header
function updateResultsHeader(count) {
    let title = 'All Churches';
    let countText = `Showing ${count} church${count !== 1 ? 'es' : ''}`;
    
    if (currentFilters.state !== 'all' && currentFilters.denomination !== 'all') {
        title = `${currentFilters.denomination} Churches in ${currentFilters.state}`;
    } else if (currentFilters.state !== 'all') {
        title = `Churches in ${currentFilters.state}`;
    } else if (currentFilters.denomination !== 'all') {
        title = `${currentFilters.denomination} Churches`;
    }
    
    if (currentFilters.search) {
        title += ` (Search: "${currentFilters.search}")`;
    }
    
    resultsTitle.textContent = title;
    resultsCount.textContent = countText;
}

// Update denomination information
function updateDenominationInfo() {
    const selectedDenomination = currentFilters.denomination;
    
    if (selectedDenomination === 'all') {
        denominationDetails.innerHTML = '<p>Select a denomination above to learn more about their beliefs and practices.</p>';
    } else {
        const info = denominationInfo[selectedDenomination];
        denominationDetails.innerHTML = `
            <h4 style="margin-bottom: 0.5rem; color: #1f2937; font-weight: 600;">${selectedDenomination}</h4>
            <p>${info}</p>
        `;
    }
}

// Handle search on Enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        renderChurches();
    }
});