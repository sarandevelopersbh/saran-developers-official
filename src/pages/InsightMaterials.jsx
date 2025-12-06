import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function InsightMaterials() {
  return (
    <>
      <SEO 
        title="Material Care & Stewardship" 
        description="Preserving high-end materials like marble, travertine, and hardwood."
        keywords="marble care, hardwood maintenance, travertine, stone care, luxury materials"
      />
      <div className="bg-stone-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-neutral-900 text-white py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Link to={createPageUrl('Home')} className="inline-flex items-center text-amber-500 text-xs tracking-widest uppercase mb-8 hover:text-white transition-colors">
              <ArrowLeft size={12} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Preserving High-End Materials: <br/>Marble, Travertine & Hardwood
            </h1>
            <p className="text-xl text-neutral-400 font-serif italic">
              The chemistry of care for natural porous surfaces.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 -mt-10">
          <div className="bg-white p-8 md:p-16 shadow-xl max-w-4xl mx-auto border-t-4 border-neutral-400">
            <article className="prose prose-lg prose-stone font-serif max-w-none">
              <p className="lead text-2xl text-neutral-800 mb-10 leading-relaxed">
                Saran Developers utilizes premium Carrara marble, Travertine, and European engineered oak in our designs. While aesthetically timeless, these materials are biologically porous and chemically reactive. Preserving their integrity requires a strict adherence to material science.
              </p>
              
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
                alt="Marble and Hardwood Interior" 
                className="w-full h-[400px] object-cover my-10 grayscale hover:grayscale-0 transition-all duration-700"
              />

              <h3 className="font-bold text-xl mt-8 mb-4">The Calcium Carbonate Sensitivity</h3>
              <p className="mb-6">
                Natural stone is composed largely of calcite (calcium carbonate). It falls low on the <strong>Mohs Hardness Scale</strong>, making it susceptible to micro-abrasions. More critically, it is highly reactive to acids. Common household cleaners containing vinegar, lemon juice, or ammonia will instantly dissolve the calcite bond, causing "etching"—a permanent dull mark that destroys the stone's refractive quality.
              </p>
              <p className="mb-8">
                We mandate the use of pH-neutral surfactants and impregnating sealants that bond below the surface to repel oils without suffocating the stone.
              </p>
              
              <h3 className="font-bold text-xl mt-8 mb-4">Engineered Wood Hygiene</h3>
              <p className="mb-8">
                Similarly, engineered hardwood is <strong>hygroscopic</strong>, meaning it expands and contracts with moisture. Using traditional "oil soaps" or excessive water can breach the protective polyurethane finish, leading to residue buildup and structural warping.
              </p>

              <div className="bg-stone-100 p-8 border-l-4 border-amber-600 my-10">
                <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-sm mb-4">Saran Standard: Maintenance Protocols</h4>
                <p className="mb-4">
                  Stewardship of these materials ensures they age gracefully, developing a patina rather than showing wear. To guarantee this level of care, we direct all residents to our validated service network.
                </p>
                <a href="/#trusted-partners" className="text-amber-700 font-bold underline decoration-2 underline-offset-4 hover:text-amber-900">
                  Gold-Standard Maintenance Protocols
                </a>
              </div>
            </article>

            <div className="mt-20 pt-10 border-t border-neutral-200">
              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Next in Series</p>
              <Link to={createPageUrl('InsightLuxurySystems')} className="group block">
                <h3 className="text-2xl font-serif text-neutral-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                  The Modern Standard: Beyond Square Footage <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}