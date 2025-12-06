import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import SEO from '../components/SEO';

// STATIC BLOG DATA
const STATIC_POSTS = [
  {
    id: 'post1',
    title: "The Critical Phase: Post-Construction Care",
    excerpt: "Why the final 1% of the build determines the longevity of the asset.",
    author: "David Saran",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZHpVJiaii1xImHtYn-qVstFNfLW2HX_adTg2KY2PBjm-_-M4PY-jjT_z89nFVta0kh5mSDjKbIwDkzErf2P2Q9O4EpmCpMYqOMXoL8mbFAA9RI4993riUrRTtLWa4Ob8MzzDp67s_kvUdkgyia0UeGkeIxGlMW05thOXCCvZXoQdKGYFtEzOWjD8xl9Iy/w640-h350/imported-marble-flooring-beverly-hills-living-room-high-ceiling.png",
    category: "Construction"
  },
  {
    id: 'post2',
    title: "Preserving High-End Materials",
    excerpt: "The chemistry of care for natural stone.",
    author: "Sarah Jenkins",
    date: "Sep 28, 2023",
    readTime: "7 min read",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9VOlTqs8xdzrdp1Lm3vm0vIIXsSWM2Kh-T1fx6luU_5PiGUCbOz5ZU-qK0GFOxvUoY0XIRmlZyQM9IpodqV1XeTYs-l77EC5UPnJPDp26v-4W-GfbdYiaOF2IIvMS40HGa03yLqhXqXmGo_IdHntCVw26JTNPhYdd6Ie0V8gERx-91bWWAWCkhbvBBDjw/w640-h350/penthouse-interior-view-bay-bridge-floor-care.png",
    category: "Maintenance"
  }
];export default function Insights() {
  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <SEO title="Insights" description="Expert advice." />
      <div className="bg-neutral-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-serif mb-8">Construction Insights</h1>
      </div>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATIC_POSTS.map((post) => (
            <div key={post.id} className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-sm mb-4">{post.excerpt}</p>
              <Link to="#" className="text-amber-600 flex items-center gap-2">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
