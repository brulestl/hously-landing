import Property1 from "../../assets/images/property/1.jpg";
import Property2 from "../../assets/images/property/2.jpg";
import Property3 from "../../assets/images/property/3.jpg";
import Property4 from "../../assets/images/property/4.jpg";
import Property5 from "../../assets/images/property/5.jpg";
import Property6 from "../../assets/images/property/6.jpg";

import SubProperty1 from "../../assets/images/property/single/1.jpg";
import SubProperty2 from "../../assets/images/property/single/2.jpg";
import SubProperty3 from "../../assets/images/property/single/3.jpg";
import SubProperty4 from "../../assets/images/property/single/4.jpg";
import SubProperty5 from "../../assets/images/property/single/5.jpg";

import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";
import client7 from "../../assets/images/client/07.jpg";
import client8 from "../../assets/images/client/08.jpg";

import cate1 from "../../assets/images/property/residential.jpg";
import cate2 from "../../assets/images/property/land.jpg";
import cate3 from "../../assets/images/property/commercial.jpg";
import cate4 from "../../assets/images/property/investment.jpg";
import cate5 from "../../assets/images/property/industrial.jpg";

import about1 from '../../assets/images/rent.png'
import about2 from '../../assets/images/buy.png'
import about3 from '../../assets/images/sell.png'

import agency1 from '../../assets/images/agency/1.png'
import agency2 from '../../assets/images/agency/2.png'
import agency3 from '../../assets/images/agency/3.png'
import agency4 from '../../assets/images/agency/4.png'
import agency5 from '../../assets/images/agency/5.png'
import agency6 from '../../assets/images/agency/6.png'
import agency7 from '../../assets/images/agency/7.png'
import agency8 from '../../assets/images/agency/8.png'
import agency9 from '../../assets/images/agency/9.png'
import { FiBriefcase, FiHome, FiKey } from "react-icons/fi";
import { CgTrees } from "react-icons/cg";
import { BiShieldAlt2 } from "react-icons/bi";
import { GoRocket } from "react-icons/go";

export const properties = [
    {
        id: 1,
        image: Property1,
        name: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
        square: 743,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 2,
        image: Property2,
        name: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
        square: 743,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 3,
        image: Property3,
        name: '3723 SANDBAR DR, Addis, LA 70710, USA',
        square: 743,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 4,
        image: Property4,
        name: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
        square: 743,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 5,
        image: Property5,
        name: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
        square: 743,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 6,
        image: Property6,
        name: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
        square: 743,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    }
];

export const featureData = [
    {
        image: "handshake_9157534.png",
        title:'Transparency',
        desc: 'We create comprehensive presentations of real estate with interactive 360° display, high quality photos and video, floor plan for better view. Easy, fast and without wasting your time!',
        className: 'p-8'
    },
    {
        image: "conversation_2080703.png",
        title:'Direct communication',
        desc: 'Communicate with the owner directly through just a few clicks on our website. Just register, choose a desired real estate and a viewing date, and we will connect you with the owner.',
        className: 'p-8'
    },
    {
        image: "money-transfer_17236338.png",
        title:'Free of charge for buyers and tenants',
        desc: 'If you want to buy or rent your new place for living, we are here to help you, completely free of charge! Yes, you read well, we are saving your money!',
        className: 'p-8'
    },
]
export const review = [
    {
        id: '1',
        profile: client1,
        name: 'Marko P.',
        designation: "Kupac",
        description: "Kupovina stana bez provizije zvuči nestvarno, ali ovde je zaista tako bilo. Apsolutno nikakvih skrivenih troškova. Ono što me je najviše oduševilo je koliko su oglasi bili realni – slike i opisi su tačno prikazivali stanje, tako da sam uštedeo dragoceno vreme. Ceo proces je bio transparentan i efikasan."
    },
    {
        id: '2',
        profile: client2,
        name: 'Jelena R.',
        designation: "Prodavac",
        description: "Izuzetno profesionalna usluga od početka do kraja. Dogovor oko fiksne naknade je bio jasan i ispoštovan, bez ikakvih iznenađenja. Predstavili su moj stan online na vrlo moderan i detaljan način, što je očigledno privuklo prave kupce jer je prodaja realizovana brzo. Veoma sam zadovoljna brzinom i transparentnošću."
    },
    {
        id: '3',
        profile: client3,
        name: 'Ivana B.',
        designation: "Zakupac",
        description: "Najbolja stvar je što je usluga potpuno besplatna za nas koji tražimo stan. Platforma je laka za korišćenje, a mogućnost da direktno kontaktiram vlasnika i zakažem gledanje mi je uštedjela dane čekanja i dopisivanja preko posrednika. Sve je išlo brzo i glatko. Pronašla sam odličan stan bez stresa."
    },
    {
        id: '4',
        profile: client4,
        name: 'David M.',
        designation: "Prodavac",
        description: "Selling my apartment through this service was refreshingly straightforward. They were completely transparent about their flat fee from the start – significantly better value than the usual percentage commissions. The team was professional, created a fantastic online presentation that clearly worked, and got my place sold much faster than I expected. Great quality service."
    }
]
export const teamdata = [
    {
        image: client4,
        name: 'Jack John',
        title: 'Designer'
    },
    {
        image: client5,
        name: 'Krista John',
        title: 'Designer'
    },
    {
        image: client6,
        name: 'Roger Jackson',
        title: 'Designer'
    },
    {
        image: client7,
        name: 'Johnny English',
        title: 'Designer'
    },
]

export const counterData = [
    {
        target:1548,
        title: 'Properties Sold'
    },
    {
        target:8,
        title: 'International Partners'
    },
    {
        target:9,
        title: 'Years of Experience'
    },
]
export const categoriesData = [
    {
        image: "public/Podgorica_card_1.jpg",
        name: 'Podgorica',
        title: '46 Listings'
    },
    {
        image: "public/Bar_card_1.jpg",
        name: 'Bar',
        title: '124 Listings'
    },
    {
        image: "public/Tivat_card_1.jpg",
        name: 'Tivat',
        title: '265 Listings'
    },
    {
        image: "public/Kotor_card_1.jpg",
        name: 'Kotor',
        title: '452 Listings'
    },
    {
        image: "public/Kolasin_card_1.jpg",
        name: 'Kolašin',
        title: '12 Listings'
    },
]
export const featureTwo = [
    {
        icon: 'mdi mdi-cards-heart',
        title: 'Comfortable',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-shield-sun',
        title: 'Extra Security',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-star',
        title: 'Luxury',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-currency-usd',
        title: 'Best Price',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-map-marker',
        title: 'Stratagic Location',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
        icon: 'mdi mdi-chart-arc',
        title: 'Efficient',
        desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
]

export const pricing = [
    {
     icon:CgTrees,
     title:"Basic",
     amount:"19",
     features:["Full Access", "Source Files","Free Appointments","Enhanced Security"]
    },
    {
    icon:BiShieldAlt2,
    title:"Premium",
    amount:"39",
    features:["Full Access", "Source Files","Free Appointments","Enhanced Security"]
    },
    {
    icon:GoRocket,
    title:"Business",
    amount:"99",
    features:["Full Access", "Source Files","Free Appointments","Enhanced Security"]
    }
]
export const accordionData = [
    {
        title: 'How does it work ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        title: 'Do I need a designer to use Hously ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        title: 'What do I need to do to start selling ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        title: 'What happens when I receive an order ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    }
]
export  const blogList = [
    {
        id:1,
        title: "Skills That You Can Learn In The Real Estate Market",
        date: "13th March, 2023",
        type: 'Industrial',
        image: Property1
    },
    {
        id:2,
        title: "Learn The Truth About Real Estate Industry",
        date: "5th May, 2023",
        type: 'Industrial',
        image: Property2
    },
    {
        id:3,
        title: "10 Quick Tips About Business Development",
        date: "19th June, 2023",
        type: 'Industrial',
        image: Property3
    },
    {
        id:4,
        title: "14 Common Misconceptions About Business Development",
        date: "20th June, 2023",
        type: 'Industrial',
        image: Property4
    },
    {
        id:5,
        title: "10 Things Your Competitors Can Teach You About Real Estate",
        date: "31st Aug, 2023",
        type: 'Industrial',
        image: Property5
    },
    {
        id:6,
        title: "Why We Love Real Estate",
        date: "1st Sep, 2023",
        type: 'Industrial',
        image: Property6
    }
]

export const aboutData = [
    {
        image:about1,
        title:'Rent a House',
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
    {
        image:about2,
        title:'Buy a House',
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
    {
        image:about3,
        title:'Sell a House',
        desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
]

export const agentData = [
    {
        id:1,
        image:client4,
        name:'Jack John',
        position:'Property Broker'
    },
    {
        id:2,
        image:client5,
        name:'Krista John',
        position:'Property Broker'
    },
    {
        id:3,
        image:client6,
        name:'Roger Jackson',
        position:'Property Broker'
    },
    {
        id:4,
        image:client7,
        name:'Johnny English',
        position:'Property Broker'
    },
    {
        id:5,
        image:client8,
        name:'Clayton Dalke',
        position:'Property Broker'
    },
    {
        id:6,
        image:client1,
        name:'Christopher Myers',
        position:'Property Broker'
    },
    {
        id:7,
        image:client2,
        name:'Mary Petersen',
        position:'Property Broker'
    },
    {
        id:8,
        image:client3,
        name:'Amber Durden',
        position:'Property Broker'
    },
]

export const agencyData = [
    {
        id:1,
        image:agency1,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:2,
        image:agency2,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:3,
        image:agency3,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:4,
        image:agency4,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:5,
        image:agency5,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:6,
        image:agency6,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:7,
        image:agency7,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:8,
        image:agency8,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
    {
        id:9,
        image:agency9,
        name:'Realty Zen',
        title:'Real Estate Agency'
    },
]