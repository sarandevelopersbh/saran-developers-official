import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import SEO from '../components/SEO';

// STATIC BLOG DATA
const STATIC_POSTS = [
  {
    id: 'post1',
    title: "The Critical Phase: Post-Construction Care",
    excerpt: "Why the final 1% of the build determines the longevity of the asset. A deep dive into settling periods and material acclimatization.",
    author: "David Saran",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZHpVJiaii1xImHtYn-qVstFNfLW2HX_adTg2KY2PBjm-_-M4PY-jjT_z89nFVta0kh5mSDjKbIwDkzErf2P2Q9O4EpmCpMYqOMXoL8mbFAA9RI4993riUrRTtLWa4Ob8MzzDp67s_kvUdkgyia0UeGkeIxGlMW05thOXCCvZXoQdKGYFtEzOWjD8xl9Iy/w640-h350/imported-marble-flooring-beverly-hills-living-room-high-ceiling.png",
    category: "Construction"
  },
  {
    id: 'post2',
    title: "Preserving High-End Materials",
    excerpt: "The chemistry of care for natural stone and engineered hardwood. How to maintain the showroom finish of your estate.",
    author: "Sarah Jenkins",
    date: "Sep 28, 2023",
    readTime: "7 min read",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9VOlTqs8xdzrdp1Lm3vm0vIIXsSWM2Kh-T1fx6luU_5PiGUCbOz5ZU-qK0GFOxvUoY0XIRmlZyQM9IpodqV1XeTYs-l77EC5UPnJPDp26v-4W-GfbdYiaOF2IIvMS40HGa03yLqhXqXmGo_IdHntCVw26JTNPhYdd6Ie0V8gERx-91bWWAWCkhbvBBDjw/w640-h350/penthouse-interior-view-bay-bridge-floor-care.png",
    category: "Maintenance"
  },
  {
    id: 'post3',
    title: "Defining Luxury: Invisible Systems",
    excerpt: "The invisible systems and domotics that power modern living. From HVAC sound-dampening to smart security integration.",
    author: "David Saran",
    date: "Aug 15, 2023",
    readTime: "6 min read",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk6Gpjgb2FEhuvsUrpn3HkvfK9QKlIeoeeaemi4qBHkylP7s3L2ylA-9pmBuUh665vRa0_ILf-PjqRAb5u7NxxQo4ZZaUX8A9Kln8CFCrqVR09f-2nlKNxnV308GsSPeQezSerz5B_KM2yoeY8GbjeqT4cDkv8_9NCMKtqdiXuD0LbSvH2wvAfdV65As5f/w640-h350/coastal-estate-pool-patio-maintenance-montecito.png",
    category: "Technology"
  }
];

export default function Insights() {
  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <SEO 
        title="Insights - Expert Knowledge" 
        description="Expert advice on luxury home maintenance and construction standards."
      />
      
      {/* Header */}
      <div className="bg-neutral-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h4 className="text-amber-500 font-bold text-xs tracking-[0.2em] uppercase mb-6">Expertise & Knowledge</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-8">Construction Insights</h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Sharing our expertise on building standards, material care, and the future of luxury living.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto
