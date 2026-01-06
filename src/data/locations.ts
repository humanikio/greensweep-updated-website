export interface LocationData {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  heroDescription: string;
  characteristics: string[];
  neighborhoods?: string[];
  landmarks?: string[];
  propertyTypes: string[];
  services: {
    title: string;
    description: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  featuredTestimonial?: {
    quote: string;
    author: string;
  };
}

export const locations: LocationData[] = [
  {
    slug: 'niagara-on-the-lake',
    name: 'Niagara-on-the-Lake',
    region: 'Niagara Region',
    tagline: 'Premium Landscaping for Wine Country Estates',
    description:
      'Niagara-on-the-Lake is renowned for its historic charm, world-class wineries, and stunning estate properties. As one of the most affluent communities in the Niagara Region, homeowners here expect nothing less than exceptional landscaping that complements their prestigious properties.',
    heroDescription:
      'Serving the historic estates and luxury properties of Niagara-on-the-Lake with premium landscaping services.',
    characteristics: [
      'Historic heritage properties requiring sensitive landscape design',
      'Large estate lots with extensive lawn areas',
      'Formal gardens that complement Victorian and Georgian architecture',
      'Wine country aesthetics with vineyard-inspired landscaping',
      'High-end outdoor entertaining spaces for hosting guests',
    ],
    neighborhoods: ['Old Town', 'Chautauqua', 'St. Davids', 'Virgil', 'Queenston'],
    landmarks: ['Shaw Festival Theatre', 'Fort George', 'Niagara Parkway', 'Wine Route'],
    propertyTypes: ['Historic estates', 'Luxury homes', 'Bed & breakfasts', 'Winery properties'],
    services: [
      {
        title: 'Estate Lawn Care',
        description:
          'Comprehensive lawn maintenance for large estate properties, including precision mowing, edging, and seasonal treatments to maintain that pristine wine country aesthetic.',
      },
      {
        title: 'Heritage Garden Design',
        description:
          'Thoughtful landscape designs that respect the historic character of Niagara-on-the-Lake properties while incorporating modern functionality and low-maintenance plantings.',
      },
      {
        title: 'Hardscape & Stonework',
        description:
          'Elegant patios, walkways, and retaining walls using premium materials that complement the architectural heritage of your property.',
      },
      {
        title: 'Seasonal Property Care',
        description:
          'Year-round property maintenance including spring cleanup, fall leaf removal, and garden bed preparation to keep your estate looking immaculate for every season.',
      },
    ],
    seoTitle: 'Landscaping Services in Niagara-on-the-Lake | GreenSweep Niagara',
    seoDescription:
      'Premium landscaping services for Niagara-on-the-Lake estates and luxury properties. Lawn care, garden design, and hardscaping by local experts. Free consultation.',
    featuredTestimonial: {
      quote:
        'Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. Excellent care and attention to detail.',
      author: 'Jordan Duffy',
    },
  },
  {
    slug: 'fonthill',
    name: 'Fonthill',
    region: 'Pelham',
    tagline: 'Expert Landscaping for Pelham\'s Premier Community',
    description:
      'Fonthill, in the heart of Pelham, is known for its upscale suburban character, large residential lots, and family-friendly atmosphere. Homeowners in this desirable community take pride in their properties and invest in quality landscaping that enhances curb appeal and outdoor living.',
    heroDescription:
      'Professional landscaping services for Fonthill and Pelham\'s finest residential properties.',
    characteristics: [
      'Spacious suburban lots with room for creative landscaping',
      'Family-oriented outdoor spaces including play areas and patios',
      'Modern homes with contemporary landscape design preferences',
      'Established trees and mature gardens requiring expert care',
      'Privacy-focused designs with strategic plantings and fencing',
    ],
    neighborhoods: ['Fonthill', 'Fenwick', 'Ridgeville', 'North Pelham'],
    landmarks: ['Short Hills Provincial Park', 'Pelham Town Square', 'Steve Bauer Trail'],
    propertyTypes: ['Executive homes', 'Family residences', 'New builds', 'Acreage properties'],
    services: [
      {
        title: 'Full-Service Lawn Care',
        description:
          'Keep your Fonthill property looking its best with our comprehensive lawn maintenance programs, from weekly mowing to seasonal fertilization and aeration.',
      },
      {
        title: 'Custom Landscape Design',
        description:
          'Transform your outdoor space with custom designs that maximize your property\'s potential, incorporating native plantings, outdoor living areas, and sustainable features.',
      },
      {
        title: 'Patio & Outdoor Living',
        description:
          'Create the perfect backyard retreat with custom interlock patios, fire pits, and outdoor entertainment areas designed for Pelham\'s lifestyle.',
      },
      {
        title: 'Garden Maintenance',
        description:
          'Professional garden bed maintenance, mulching, shrub trimming, and seasonal plantings to keep your property looking polished year-round.',
      },
    ],
    seoTitle: 'Landscaping Services in Fonthill & Pelham | GreenSweep Niagara',
    seoDescription:
      'Professional landscaping for Fonthill and Pelham homes. Lawn care, landscape design, patios & more. Trusted by Pelham homeowners. Get a free quote today.',
  },
  {
    slug: 'grimsby',
    name: 'Grimsby',
    region: 'Niagara Region',
    tagline: 'Quality Landscaping for Grimsby\'s Waterfront & Escarpment Properties',
    description:
      'Grimsby offers the best of both worlds: stunning Lake Ontario waterfront properties and scenic Niagara Escarpment homes. As a popular destination for Toronto professionals, Grimsby homeowners value quality, reliability, and landscaping that makes the most of their natural surroundings.',
    heroDescription:
      'Serving Grimsby\'s waterfront estates and escarpment properties with expert landscaping services.',
    characteristics: [
      'Waterfront properties with lake views and unique drainage needs',
      'Escarpment properties with sloped terrain and natural landscapes',
      'Commuter households requiring low-maintenance solutions',
      'Outdoor entertaining spaces that maximize scenic views',
      'Weather-resistant designs for lakeside conditions',
    ],
    neighborhoods: ['Downtown Grimsby', 'Grimsby Beach', 'Casablanca', 'Grimsby Park'],
    landmarks: ['Grimsby Beach', 'Beamer Memorial Conservation Area', 'Forty Mile Creek'],
    propertyTypes: ['Waterfront homes', 'Escarpment properties', 'Executive homes', 'Heritage homes'],
    services: [
      {
        title: 'Waterfront Landscaping',
        description:
          'Specialized landscaping solutions for lakefront properties, including erosion control, salt-tolerant plantings, and designs that frame your stunning water views.',
      },
      {
        title: 'Escarpment Property Care',
        description:
          'Expert care for sloped properties along the Niagara Escarpment, including terraced gardens, retaining walls, and naturalized plantings.',
      },
      {
        title: 'Low-Maintenance Programs',
        description:
          'Comprehensive maintenance packages designed for busy professionals who want a beautiful property without the hassle.',
      },
      {
        title: 'Outdoor Living Spaces',
        description:
          'Custom patios, fire features, and entertainment areas designed to take advantage of Grimsby\'s beautiful natural setting.',
      },
    ],
    seoTitle: 'Landscaping Services in Grimsby, Ontario | GreenSweep Niagara',
    seoDescription:
      'Expert landscaping for Grimsby waterfront and escarpment properties. Lawn care, garden design, patios & hardscaping. Serving Grimsby homeowners. Free estimates.',
  },
  {
    slug: 'beamsville',
    name: 'Beamsville',
    region: 'Lincoln',
    tagline: 'Landscaping Excellence in Wine Country',
    description:
      'Beamsville sits at the heart of Ontario\'s wine country, surrounded by vineyards and the stunning Niagara Escarpment. Properties here range from rural estates to upscale subdivisions, all benefiting from the region\'s rich agricultural heritage and natural beauty.',
    heroDescription:
      'Premium landscaping services for Beamsville\'s wine country estates and fine homes.',
    characteristics: [
      'Rural and semi-rural properties with expansive grounds',
      'Wine country aesthetics with vineyard-style landscaping',
      'Escarpment properties with dramatic views and terrain',
      'Agricultural heritage influencing landscape design choices',
      'Large lots requiring efficient maintenance solutions',
    ],
    neighborhoods: ['Beamsville', 'Vineland', 'Jordan', 'Jordan Station'],
    landmarks: ['Twenty Valley', 'Jordan Harbour', 'Cave Spring Cellars', 'Ball\'s Falls'],
    propertyTypes: ['Wine estates', 'Rural properties', 'Executive homes', 'Hobby farms'],
    services: [
      {
        title: 'Estate Grounds Care',
        description:
          'Comprehensive maintenance for large rural properties, including field mowing, orchard care, and managing extensive lawn areas efficiently.',
      },
      {
        title: 'Wine Country Design',
        description:
          'Landscape designs inspired by the region\'s viticultural heritage, incorporating ornamental grasses, lavender, and Mediterranean-style plantings.',
      },
      {
        title: 'Natural Escarpment Integration',
        description:
          'Work with the natural terrain of escarpment properties, creating beautiful transitions between manicured gardens and natural areas.',
      },
      {
        title: 'Seasonal Property Management',
        description:
          'Year-round care for wine country properties, ensuring your grounds look impeccable for every season of entertaining.',
      },
    ],
    seoTitle: 'Landscaping Services in Beamsville & Lincoln | GreenSweep Niagara',
    seoDescription:
      'Professional landscaping for Beamsville wine country estates. Lawn care, landscape design, and property maintenance. Serving Lincoln and Twenty Valley. Free quotes.',
  },
  {
    slug: 'st-catharines',
    name: 'St. Catharines',
    region: 'Niagara Region',
    tagline: 'Professional Landscaping for the Garden City',
    description:
      'As the largest city in the Niagara Region, St. Catharines—the Garden City—offers diverse neighborhoods from historic Port Dalhousie to the established tree-lined streets of Glenridge and Western Hill. We provide premium landscaping services to homeowners who take pride in maintaining the city\'s beautiful reputation.',
    heroDescription:
      'Trusted landscaping services for St. Catharines\' finest neighborhoods and properties.',
    characteristics: [
      'Diverse housing stock from Victorian to modern builds',
      'Mature tree canopy in established neighborhoods',
      'Urban lots requiring efficient, high-impact designs',
      'Heritage properties with period-appropriate landscaping needs',
      'Growing demand for sustainable and native plantings',
    ],
    neighborhoods: ['Glenridge', 'Western Hill', 'Old Glenridge', 'Martindale', 'Grapeview'],
    landmarks: ['Brock University', 'Montebello Park', 'Port Dalhousie', 'Henley Rowing Course'],
    propertyTypes: ['Heritage homes', 'Executive residences', 'Family homes', 'New developments'],
    services: [
      {
        title: 'Urban Lawn Care',
        description:
          'Reliable lawn maintenance programs designed for city properties, keeping your lawn healthy and green despite urban challenges.',
      },
      {
        title: 'Small Space Design',
        description:
          'Creative landscape solutions for urban lots that maximize outdoor living space and curb appeal without overwhelming the property.',
      },
      {
        title: 'Heritage Property Care',
        description:
          'Sensitive landscaping for St. Catharines\' many heritage properties, maintaining period-appropriate gardens while incorporating modern convenience.',
      },
      {
        title: 'Complete Property Maintenance',
        description:
          'Full-service programs including lawn care, garden maintenance, spring and fall cleanup, keeping your Garden City home looking its best.',
      },
    ],
    seoTitle: 'Landscaping Services in St. Catharines | GreenSweep Niagara',
    seoDescription:
      'Professional landscaping for St. Catharines homes. Lawn care, garden design, patios & seasonal cleanup. Serving Glenridge, Western Hill & all neighborhoods. Free quotes.',
    featuredTestimonial: {
      quote:
        'Highly recommend Green Sweep Niagara! Punctual, professional and go above and beyond expectations. Already reserved our spring cleaning and weekly maintenance for next season!',
      author: 'Jason Talyor',
    },
  },
  {
    slug: 'port-dalhousie',
    name: 'Port Dalhousie',
    region: 'St. Catharines',
    tagline: 'Waterfront Landscaping for Port Dalhousie\'s Historic Community',
    description:
      'Port Dalhousie is one of the Niagara Region\'s most desirable waterfront communities, featuring historic homes, Lake Ontario views, and a charming village atmosphere. Property owners here appreciate landscaping that respects the area\'s heritage while enhancing their valuable waterfront investments.',
    heroDescription:
      'Specialized landscaping services for Port Dalhousie\'s historic waterfront properties.',
    characteristics: [
      'Historic waterfront homes with heritage considerations',
      'Lake Ontario exposure requiring salt and wind-tolerant designs',
      'Premium property values demanding exceptional curb appeal',
      'Compact lots requiring creative design solutions',
      'Outdoor entertaining for the active lakeside lifestyle',
    ],
    neighborhoods: ['Port Dalhousie', 'Lakeshore', 'Martindale Pond', 'Port Weller'],
    landmarks: ['Port Dalhousie Pier', 'Lakeside Park', 'Henley Island', 'Port Mansion'],
    propertyTypes: ['Waterfront estates', 'Heritage homes', 'Lakeside cottages', 'Condos with grounds'],
    services: [
      {
        title: 'Waterfront Specialty Care',
        description:
          'Expert landscaping for lakefront properties, with plant selections and designs that thrive in Port Dalhousie\'s unique waterfront microclimate.',
      },
      {
        title: 'Heritage Garden Restoration',
        description:
          'Restore and maintain period-appropriate gardens for Port Dalhousie\'s many heritage properties, blending historic charm with modern functionality.',
      },
      {
        title: 'Compact Lot Design',
        description:
          'Maximize the potential of smaller waterfront lots with smart design, vertical interest, and multi-functional outdoor spaces.',
      },
      {
        title: 'Seasonal Lakeside Care',
        description:
          'Year-round maintenance programs tailored to the demands of waterfront living, from spring debris cleanup to preparing gardens for winter winds.',
      },
    ],
    seoTitle: 'Landscaping Services in Port Dalhousie | GreenSweep Niagara',
    seoDescription:
      'Premium waterfront landscaping for Port Dalhousie homes. Heritage garden care, lakefront design & lawn maintenance. Local experts serving the Port. Free consultation.',
    featuredTestimonial: {
      quote:
        'Fast prompt service, worked in the rain to get the job done, and the job was completed right! With Carter and crew you will not be disappointed.',
      author: 'Randy Arsenault',
    },
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
