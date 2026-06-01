export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string[];
  heroImage: string;
  testimonials?: Array<{
    id: number;
    name: string;
    rating: number;
    text: string;
    avatar: string;
  }>;
}

export const servicesData: Record<string, ServiceData> = {
  "office-cleaning": {
    slug: "office-cleaning",
    title: "Office Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional office cleaning services in Parramatta. Customized cleaning solutions for your workspace. Book online or call us today!",
    heroTitle: "Office Cleaning",
    heroSubtitle:
      "Professional office cleaning services across Parramatta and Western Sydney. Experience convenience and reliability with our local team.",
    heroDescription: [
      "At Alpha Clean Group, we understand that a clean office environment is crucial for productivity, employee well-being, and making a positive impression on clients. Our professional office cleaning services serve Parramatta CBD and surrounding Western Sydney suburbs, maintaining the highest standards of cleanliness while minimizing disruption to your business operations.",
      "Our experienced local team uses eco-friendly cleaning products and state-of-the-art equipment to ensure your workspace remains spotless and hygienic. From daily maintenance to deep cleaning services, we offer flexible scheduling options to suit your specific needs. Whether you need regular office cleaning in Parramatta, carpet maintenance, or specialized cleaning services, we've got you covered.",
      "We take pride in our attention to detail and commitment to excellence across the Parramatta region. Our trained professionals follow strict cleaning protocols to ensure every corner of your office receives the care it deserves. Let us handle the cleaning while you focus on what matters most - running your business in Western Sydney.",
    ],
    heroImage: "/images/services/3.jpg",
    testimonials: [
      {
        id: 1,
        name: "Justin D.",
        rating: 5,
        text: "Alpha Clean Group has transformed our Parramatta office space! Their attention to detail and professional service is outstanding.",
        avatar: "/images/user1.webp",
      },
      {
        id: 2,
        name: "Sarah M.",
        rating: 5,
        text: "We've been using Alpha Clean Group for our Parramatta office for over a year now, and their local service is exceptional.",
        avatar: "/images/user2.webp",
      },
      {
        id: 3,
        name: "Michael P.",
        rating: 5,
        text: "As an office manager in Parramatta, I've worked with many cleaning companies, but Alpha Clean Group stands out for their local expertise.",
        avatar: "/images/user3.webp",
      },
      {
        id: 4,
        name: "Rachel K.",
        rating: 5,
        text: "Alpha Clean Group has been maintaining our corporate offices in Parramatta for the past two years. Their team goes above and beyond.",
        avatar: "/images/user4.webp",
      },
      {
        id: 5,
        name: "David W.",
        rating: 5,
        text: "Switching to Alpha Clean Group was one of the best decisions for our Parramatta office. They understand the unique challenges of Western Sydney businesses.",
        avatar: "/images/user1.webp",
      },
      {
        id: 6,
        name: "Emma L.",
        rating: 5,
        text: "I manage a busy office in Parramatta, and Alpha Clean Group has been instrumental in maintaining our high standards of cleanliness.",
        avatar: "/images/user2.webp",
      },
    ],
  },
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional commercial cleaning services in Parramatta. Customized cleaning solutions for your business. Book online or call us today!",
    heroTitle: "Commercial Cleaning",
    heroSubtitle:
      "Experience top-tier commercial cleaning services across Parramatta and Western Sydney. Our professional team ensures your premises maintain the highest standards of cleanliness and hygiene.",
    heroDescription: [
      "At Alpha Clean Group, we understand that a clean commercial space is essential for business success in Parramatta and Western Sydney. Our comprehensive commercial cleaning services are designed to create a safe, healthy, and professional environment for your employees, customers, and visitors across the region.",
      "Our experienced local team uses eco-friendly cleaning products and advanced equipment to deliver exceptional results. From daily maintenance to deep cleaning services, we offer flexible scheduling options to minimize disruption to your business operations. Whether you need regular cleaning in Parramatta CBD, specialized services, or emergency cleaning solutions, we've got you covered.",
      "We take pride in our attention to detail and commitment to excellence across the Parramatta region. Our trained professionals follow strict cleaning protocols to ensure every area of your commercial space receives the care it deserves. Let us handle the cleaning while you focus on growing your business in Western Sydney.",
    ],
    heroImage: "/images/services/4.jpg",
    testimonials: [
      {
        id: 1,
        name: "John T.",
        rating: 5,
        text: "Alpha Clean Group has been exceptional for our commercial property in Parramatta. Their team is reliable, thorough, and always professional.",
        avatar: "/images/user3.webp",
      },
      {
        id: 2,
        name: "Emily R.",
        rating: 5,
        text: "As a business owner in Parramatta, I need a cleaning company I can trust. Alpha Clean Group has exceeded my expectations.",
        avatar: "/images/user4.webp",
      },
      {
        id: 3,
        name: "Daniel M.",
        rating: 5,
        text: "The commercial cleaning services provided by Alpha Clean Group in Parramatta are outstanding. They understand the specific needs of our Western Sydney business.",
        avatar: "/images/user1.webp",
      },
      {
        id: 4,
        name: "Sophia K.",
        rating: 5,
        text: "We've tried several commercial cleaning services in Parramatta before finding Alpha Clean Group. They've been consistent and reliable from day one.",
        avatar: "/images/user2.webp",
      },
      {
        id: 5,
        name: "Robert J.",
        rating: 5,
        text: "Alpha Clean Group has transformed our commercial space in Parramatta. Their attention to detail makes a significant difference.",
        avatar: "/images/user3.webp",
      },
      {
        id: 6,
        name: "Olivia P.",
        rating: 5,
        text: "I highly recommend Alpha Clean Group for any commercial cleaning needs in Parramatta. Their team is professional, efficient, and thorough.",
        avatar: "/images/user4.webp",
      },
    ],
  },
  "strata-cleaning": {
    slug: "strata-cleaning",
    title: "Strata Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional strata cleaning services in Parramatta. Customized cleaning solutions for strata properties. Book online or call us today!",
    heroTitle: "Strata Cleaning",
    heroSubtitle:
      "Specialized strata cleaning services for residential and commercial strata properties across Parramatta and Western Sydney. We ensure common areas are immaculately maintained for residents and visitors.",
    heroDescription: [
      "Alpha Clean Group provides comprehensive strata cleaning solutions for residential and commercial strata properties throughout Parramatta and Western Sydney. Our specialized services ensure that common areas, lobbies, hallways, and other shared spaces maintain their pristine appearance and hygienic conditions.",
      "Our strata cleaning teams understand the unique requirements and challenges of strata properties in the Parramatta region. We work closely with strata managers and committees to develop customized cleaning schedules that meet the specific needs of each property while ensuring minimal disruption to residents and visitors.",
      "From regular maintenance to specialized cleaning services, our experienced professionals use industry-leading equipment and eco-friendly cleaning products to deliver exceptional results across Parramatta. Trust Alpha Clean Group to enhance the appearance, safety, and value of your strata property in Western Sydney.",
    ],
    heroImage: "/images/services/9.jpg",
    testimonials: [
      {
        id: 1,
        name: "Mark L.",
        rating: 5,
        text: "As a strata manager in Parramatta, I've found Alpha Clean Group to be the most reliable cleaning company for our properties. Highly recommended!",
        avatar: "/images/user1.webp",
      },
      {
        id: 2,
        name: "Jessica H.",
        rating: 5,
        text: "The residents in our Parramatta building have noticed a significant improvement since we switched to Alpha Clean Group for our strata cleaning.",
        avatar: "/images/user2.webp",
      },
      {
        id: 3,
        name: "Andrew B.",
        rating: 5,
        text: "Alpha Clean Group has been excellent for our strata complex in Parramatta. Common areas have never looked better.",
        avatar: "/images/user3.webp",
      },
      {
        id: 4,
        name: "Christine D.",
        rating: 5,
        text: "As a committee member in Parramatta, I appreciate how Alpha Clean Group is always responsive to our specific strata cleaning requirements.",
        avatar: "/images/user4.webp",
      },
      {
        id: 5,
        name: "Peter W.",
        rating: 5,
        text: "We've tried several strata cleaning companies in Parramatta, but Alpha Clean Group stands out for their consistency and quality.",
        avatar: "/images/user1.webp",
      },
      {
        id: 6,
        name: "Michelle K.",
        rating: 5,
        text: "Our strata building in Parramatta looks immaculate thanks to the dedicated team at Alpha Clean Group. Worth every penny!",
        avatar: "/images/user2.webp",
      },
    ],
  },
  "medical-centre-cleaning": {
    slug: "medical-centre-cleaning",
    title: "Medical Centre Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional medical centre cleaning services in Parramatta. Specialized cleaning solutions for healthcare facilities. Book online or call us today!",
    heroTitle: "Medical Centre Cleaning",
    heroSubtitle:
      "Expert medical centre cleaning services across Parramatta and Western Sydney that meet the highest standards of hygiene and infection control. Your healthcare environment requires nothing less.",
    heroDescription: [
      "Alpha Clean Group provides specialized cleaning services for medical centres, clinics, and healthcare facilities throughout Parramatta and Western Sydney. We understand the critical importance of maintaining a sterile, safe, and hygienic environment for patients, staff, and visitors.",
      "Our medical cleaning specialists are trained in healthcare-specific cleaning protocols, including infection control procedures, proper handling of biohazardous materials, and the use of hospital-grade disinfectants. We follow strict guidelines to ensure compliance with all health and safety regulations across the Parramatta region.",
      "Our comprehensive medical centre cleaning services include treatment rooms, waiting areas, restrooms, administrative offices, and common areas. Trust Alpha Clean Group to provide the specialized cleaning your healthcare facility needs to maintain the highest standards of cleanliness and safety in Western Sydney.",
    ],
    heroImage: "/images/services/10.jpg",
    testimonials: [
      {
        id: 1,
        name: "Dr. Rebecca W.",
        rating: 5,
        text: "As a medical practice manager in Parramatta, I am extremely satisfied with Alpha Clean Group. Their attention to detail and understanding of healthcare cleaning requirements is impressive.",
        avatar: "/images/user2.webp",
      },
      {
        id: 2,
        name: "James P.",
        rating: 5,
        text: "Our medical centre in Parramatta has never been cleaner since we started using Alpha Clean Group. Their team understands the importance of proper sanitization in a healthcare setting.",
        avatar: "/images/user3.webp",
      },
      {
        id: 3,
        name: "Dr. Lisa M.",
        rating: 5,
        text: "I highly recommend Alpha Clean Group for any medical facility in Parramatta. Their thorough approach to cleaning and disinfection gives us peace of mind.",
        avatar: "/images/user4.webp",
      },
      {
        id: 4,
        name: "Michael R.",
        rating: 5,
        text: "Alpha Clean Group has been maintaining our medical centre in Parramatta for over two years. Their reliability and attention to infection control protocols is outstanding.",
        avatar: "/images/user1.webp",
      },
      {
        id: 5,
        name: "Sarah J.",
        rating: 5,
        text: "Our patients frequently comment on how clean our Parramatta facility is since we started using Alpha Clean Group. Their expertise in medical cleaning is evident.",
        avatar: "/images/user2.webp",
      },
      {
        id: 6,
        name: "Dr. Thomas K.",
        rating: 5,
        text: "Alpha Clean Group provides the specialized cleaning our medical practice in Parramatta needs. Their team is professional, thorough, and understands the unique requirements of healthcare settings.",
        avatar: "/images/user3.webp",
      },
    ],
  },
  "childcare-cleaning": {
    slug: "childcare-cleaning",
    title: "Childcare Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional childcare cleaning services in Parramatta. Safe and thorough cleaning solutions for childcare centers. Book online or call us today!",
    heroTitle: "Childcare Cleaning",
    heroSubtitle:
      "Specialized cleaning services for childcare centers across Parramatta and Western Sydney that ensure a safe, healthy, and hygienic environment for children and staff.",
    heroDescription: [
      "Alpha Clean Group provides specialized cleaning services for childcare centers, preschools, and daycare facilities throughout Parramatta and Western Sydney. We understand the unique cleaning requirements of environments where young children learn, play, and grow.",
      "Our childcare cleaning specialists use child-safe, eco-friendly cleaning products that effectively sanitize surfaces without introducing harsh chemicals. We pay special attention to high-touch surfaces, play areas, sleeping areas, bathrooms, and dining spaces to minimize the spread of germs and illnesses across the Parramatta region.",
      "With Alpha Clean Group, you can trust that your childcare facility in Parramatta will receive the detailed cleaning it needs to provide a healthy environment for children and staff. Our flexible scheduling options allow us to work around your operational hours to minimize disruption.",
    ],
    heroImage: "/images/services/13.jpg",
    testimonials: [
      {
        id: 1,
        name: "Karen L.",
        rating: 5,
        text: "As a childcare center director in Parramatta, I am extremely pleased with Alpha Clean Group. They understand the importance of creating a safe, clean environment for children.",
        avatar: "/images/user4.webp",
      },
      {
        id: 2,
        name: "Ryan S.",
        rating: 5,
        text: "Our preschool in Parramatta has been using Alpha Clean Group for over a year. Their attention to detail and use of child-safe cleaning products gives us peace of mind.",
        avatar: "/images/user1.webp",
      },
      {
        id: 3,
        name: "Jennifer M.",
        rating: 5,
        text: "Alpha Clean Group has been exceptional for our daycare facility in Parramatta. They understand the unique cleaning requirements for environments with young children.",
        avatar: "/images/user2.webp",
      },
      {
        id: 4,
        name: "David K.",
        rating: 5,
        text: "Since switching to Alpha Clean Group, we've noticed a significant reduction in illness outbreaks at our Parramatta childcare center. Their thorough sanitization makes a real difference.",
        avatar: "/images/user3.webp",
      },
      {
        id: 5,
        name: "Melissa P.",
        rating: 5,
        text: "Parents frequently comment on how clean our Parramatta facility is since we started working with Alpha Clean Group. Their team is reliable and thorough.",
        avatar: "/images/user4.webp",
      },
      {
        id: 6,
        name: "Robert T.",
        rating: 5,
        text: "Alpha Clean Group understands the specific cleaning needs of our childcare center in Parramatta. Their flexible scheduling and attention to detail is exactly what we need.",
        avatar: "/images/user1.webp",
      },
    ],
  },
  "gym-cleaning": {
    slug: "gym-cleaning",
    title: "Gym Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional gym cleaning services in Parramatta. Specialized cleaning solutions for fitness centers. Book online or call us today!",
    heroTitle: "Gym Cleaning",
    heroSubtitle:
      "Specialized cleaning services for gyms and fitness centers across Parramatta and Western Sydney to ensure a hygienic environment for workouts and wellness.",
    heroDescription: [
      "Alpha Clean Group provides specialized cleaning services for gyms, fitness centers, and wellness facilities throughout Parramatta and Western Sydney. We understand the unique challenges of maintaining clean, hygienic environments where people exercise and share equipment.",
      "Our gym cleaning specialists focus on thorough sanitization of fitness equipment, locker rooms, showers, bathroom facilities, and common areas. We use commercial-grade disinfectants that effectively eliminate bacteria, viruses, and fungal spores without damaging equipment or surfaces across the Parramatta region.",
      "With regular cleaning from Alpha Clean Group, your fitness facility in Parramatta will not only look clean but will provide a truly hygienic environment for your members. Our flexible scheduling options allow us to clean during off-peak hours to minimize disruption to your business operations.",
    ],
    heroImage: "/images/services/6.jpg",
    testimonials: [
      {
        id: 1,
        name: "Chris F.",
        rating: 5,
        text: "As a gym owner in Parramatta, I'm impressed with Alpha Clean Group's understanding of fitness facility cleaning requirements. They do an excellent job keeping our equipment and facilities sanitized.",
        avatar: "/images/user3.webp",
      },
      {
        id: 2,
        name: "Samantha R.",
        rating: 5,
        text: "Our members frequently comment on how clean our fitness center in Parramatta is since we started working with Alpha Clean Group. Their attention to detail makes a difference.",
        avatar: "/images/user4.webp",
      },
      {
        id: 3,
        name: "Jason M.",
        rating: 5,
        text: "Alpha Clean Group has been maintaining our gym in Parramatta for over two years. Their team understands the importance of thorough sanitization in a fitness environment.",
        avatar: "/images/user1.webp",
      },
      {
        id: 4,
        name: "Lauren T.",
        rating: 5,
        text: "Since partnering with Alpha Clean Group, we've received numerous compliments from members about the cleanliness of our Parramatta gym. Highly recommended!",
        avatar: "/images/user2.webp",
      },
      {
        id: 5,
        name: "Michael D.",
        rating: 5,
        text: "As a fitness center manager in Parramatta, I appreciate Alpha Clean Group's flexibility with scheduling and their thorough approach to cleaning. They've exceeded our expectations.",
        avatar: "/images/user3.webp",
      },
      {
        id: 6,
        name: "Jessica P.",
        rating: 5,
        text: "Our gym in Parramatta has never been cleaner since we started using Alpha Clean Group. Their team is professional, efficient, and understands the unique cleaning needs of fitness facilities.",
        avatar: "/images/user4.webp",
      },
    ],
  },
  "warehouse-cleaning": {
    slug: "warehouse-cleaning",
    title: "Warehouse Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional warehouse cleaning services in Parramatta. Specialized cleaning solutions for large industrial spaces. Book online or call us today!",
    heroTitle: "Warehouse Cleaning",
    heroSubtitle:
      "Comprehensive cleaning services for warehouses and industrial facilities across Parramatta and Western Sydney to maintain safe and efficient operations.",
    heroDescription: [
      "Alpha Clean Group provides specialized cleaning services for warehouses, distribution centers, and industrial facilities throughout Parramatta and Western Sydney. We understand the unique challenges of maintaining cleanliness and safety in large-scale industrial environments.",
      "Our warehouse cleaning specialists are equipped with industrial-grade equipment and cleaning solutions to handle everything from regular maintenance cleaning to deep cleaning of large floor spaces, high shelving, loading docks, and staff areas. We implement customized cleaning plans that address the specific needs of your facility in the Parramatta region.",
      "With Alpha Clean Group, you can maintain a clean, safe, and productive warehouse environment in Parramatta. Our flexible scheduling options allow us to work around your operational hours to ensure minimal disruption to your business activities.",
    ],
    heroImage: "/images/services/11.jpg",
    testimonials: [
      {
        id: 1,
        name: "Brian K.",
        rating: 5,
        text: "As a warehouse manager in Parramatta, I'm impressed with Alpha Clean Group's ability to handle our large industrial space. Their team is efficient and thorough.",
        avatar: "/images/user1.webp",
      },
      {
        id: 2,
        name: "Lisa M.",
        rating: 5,
        text: "Alpha Clean Group has been maintaining our distribution center in Parramatta for over a year. Their attention to safety and cleanliness has helped improve our overall operations.",
        avatar: "/images/user2.webp",
      },
      {
        id: 3,
        name: "Robert J.",
        rating: 5,
        text: "Our warehouse in Parramatta has never been cleaner since we started working with Alpha Clean Group. Their industrial equipment and expertise make a significant difference.",
        avatar: "/images/user3.webp",
      },
      {
        id: 4,
        name: "Amanda P.",
        rating: 5,
        text: "I highly recommend Alpha Clean Group for warehouse facilities in Parramatta. They understand the unique cleaning requirements of large industrial spaces.",
        avatar: "/images/user4.webp",
      },
      {
        id: 5,
        name: "Thomas S.",
        rating: 5,
        text: "Alpha Clean Group has helped us maintain a safe and clean environment for our warehouse staff in Parramatta. Their flexible scheduling minimizes disruption to our operations.",
        avatar: "/images/user1.webp",
      },
      {
        id: 6,
        name: "Michelle R.",
        rating: 5,
        text: "Since partnering with Alpha Clean Group, we've noticed improved efficiency in our Parramatta warehouse operations. A clean facility really does make a difference!",
        avatar: "/images/user2.webp",
      },
    ],
  },
  "end-of-lease-cleaning": {
    slug: "end-of-lease-cleaning",
    title: "End of Lease Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional end of lease cleaning services in Parramatta. Get your bond back with our thorough cleaning solutions. Book online or call us today!",
    heroTitle: "End of Lease Cleaning",
    heroSubtitle:
      "Comprehensive end of lease cleaning services across Parramatta and Western Sydney to help you secure your bond return and leave your rental property in perfect condition.",
    heroDescription: [
      "Alpha Clean Group provides specialized end of lease cleaning services throughout Parramatta and Western Sydney to help tenants fulfill their lease obligations and maximize their bond return. We understand the detailed cleaning requirements that property managers and landlords expect when a tenancy ends.",
      "Our end of lease cleaning specialists follow a comprehensive checklist that covers every aspect of the property, from kitchen appliances and bathroom fixtures to windows, floors, and walls. We pay special attention to often overlooked areas that can lead to bond deductions across the Parramatta region.",
      "With Alpha Clean Group, you can trust that your rental property in Parramatta will be thoroughly cleaned to meet or exceed the expectations of even the most demanding property managers. We offer a bond-back guarantee, providing you with peace of mind during the moving process.",
    ],
    heroImage: "/images/services/14.jpg",
    testimonials: [
      {
        id: 1,
        name: "Nathan T.",
        rating: 5,
        text: "Alpha Clean Group did an amazing job with my end of lease cleaning in Parramatta. I got my full bond back without any issues. Highly recommended!",
        avatar: "/images/user3.webp",
      },
      {
        id: 2,
        name: "Sophia L.",
        rating: 5,
        text: "I was stressed about my end of lease cleaning in Parramatta until I hired Alpha Clean Group. They were thorough, professional, and my property manager was impressed with the results.",
        avatar: "/images/user4.webp",
      },
      {
        id: 3,
        name: "Marcus R.",
        rating: 5,
        text: "After using Alpha Clean Group for my end of lease clean in Parramatta, I got my entire bond back! Their attention to detail is outstanding.",
        avatar: "/images/user1.webp",
      },
      {
        id: 4,
        name: "Emma J.",
        rating: 5,
        text: "As someone who has moved frequently in Parramatta, I can say that Alpha Clean Group provides the best end of lease cleaning I've experienced. Worth every penny!",
        avatar: "/images/user2.webp",
      },
      {
        id: 5,
        name: "Daniel P.",
        rating: 5,
        text: "My real estate agent was impressed with how clean Alpha Clean Group left my Parramatta apartment. The bond was returned in full with no questions asked.",
        avatar: "/images/user3.webp",
      },
      {
        id: 6,
        name: "Olivia M.",
        rating: 5,
        text: "I've used Alpha Clean Group for multiple end of lease cleans in Parramatta and they consistently deliver excellent results. They make moving out so much less stressful!",
        avatar: "/images/user4.webp",
      },
    ],
  },
  "carpet-cleaning": {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning Services Parramatta | Alpha Clean Group",
    description:
      "Professional carpet cleaning services in Parramatta. Deep cleaning and stain removal for carpets and rugs. Book online or call us today!",
    heroTitle: "Carpet Cleaning",
    heroSubtitle:
      "Expert carpet cleaning services across Parramatta and Western Sydney using advanced techniques to restore your carpets to pristine condition and extend their lifespan.",
    heroDescription: [
      "Alpha Clean Group provides specialized carpet cleaning services for residential and commercial properties throughout Parramatta and Western Sydney. Our advanced cleaning techniques and professional-grade equipment ensure your carpets are thoroughly cleaned, sanitized, and restored to their original beauty.",
      "Our carpet cleaning specialists use hot water extraction and eco-friendly cleaning solutions to remove deep-seated dirt, stains, allergens, and odors. We treat each carpet with care, considering the fiber type, age, and specific cleaning requirements to achieve the best possible results across the Parramatta region.",
      "With Alpha Clean Group, you can trust that your carpets in Parramatta will not only look clean but will also contribute to a healthier indoor environment. Our thorough cleaning process removes bacteria, dust mites, and allergens, making your space safer for family, employees, and visitors.",
    ],
    heroImage: "/images/services/7.jpg",
    testimonials: [
      {
        id: 1,
        name: "Rachel T.",
        rating: 5,
        text: "Alpha Clean Group transformed our office carpets in Parramatta! They looked brand new after the cleaning. Excellent service and very professional team.",
        avatar: "/images/user2.webp",
      },
      {
        id: 2,
        name: "James K.",
        rating: 5,
        text: "I was amazed at how Alpha Clean Group removed stains from our home carpets in Parramatta that I thought were permanent. Highly recommended!",
        avatar: "/images/user3.webp",
      },
      {
        id: 3,
        name: "Michelle S.",
        rating: 5,
        text: "Our carpets in Parramatta have never looked better since Alpha Clean Group cleaned them. The team was punctual, professional, and did an outstanding job.",
        avatar: "/images/user4.webp",
      },
      {
        id: 4,
        name: "Andrew L.",
        rating: 5,
        text: "Alpha Clean Group's carpet cleaning service in Parramatta exceeded my expectations. They removed pet odors and stains that other companies couldn't handle.",
        avatar: "/images/user1.webp",
      },
      {
        id: 5,
        name: "Emma R.",
        rating: 5,
        text: "Professional carpet cleaning service from Alpha Clean Group in Parramatta. Our commercial carpets look fantastic.",
        avatar: "/images/user2.webp",
      },
      {
        id: 6,
        name: "David M.",
        rating: 5,
        text: "I've used Alpha Clean Group for carpet cleaning multiple times in Parramatta and they consistently deliver excellent results. Their attention to detail is impressive.",
        avatar: "/images/user3.webp",
      },
    ],
  },
};

export default servicesData;
