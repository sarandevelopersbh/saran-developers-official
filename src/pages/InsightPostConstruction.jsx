import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function InsightPostConstruction() {
  return (
    <>
      <SEO 
        title="Post-Construction Cleaning" 
        description="The critical phase of post-construction cleaning and detailing."
        keywords="post-construction cleaning, luxury detailing, HEPA filtration, particulate removal"
      />
      <div className="bg-stone-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-neutral-900 text-white py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Link to={createPageUrl('Home')} className="inline-flex items-center text-amber-500 text-xs tracking-widest uppercase mb-8 hover:text-white transition-colors">
              <ArrowLeft size={12} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              The Critical Phase: <br/>Post-Construction Cleaning & Detailing
            </h1>
            <p className="text-xl text-neutral-400 font-serif italic">
              Why the final 1% of the build determines the longevity of the asset.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 -mt-10">
          <div className="bg-white p-8 md:p-16 shadow-xl max-w-4xl mx-auto border-t-4 border-amber-600">
            <article className="prose prose-lg prose-stone font-serif max-w-none">
              <p className="lead text-2xl text-neutral-800 mb-10 leading-relaxed">
                In luxury development, the project isn't finished when the hammers stop. The final 1% of the project—removing airborne particulate matter, polishing tempered glass, and treating imported limestone—is what defines the property's value.
              </p>
              
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                alt="Post-Construction Detailing" 
                className="w-full h-[400px] object-cover my-10 grayscale hover:grayscale-0 transition-all duration-700"
              />

              <p className="mb-8">
                Construction dust is abrasive; improper removal can scratch custom glazing and dull high-gloss finishes. Standard janitorial protocols are insufficient for the delicate nature of post-construction debris, which often contains silicates, drywall dust, and micro-abrasives that can permanently damage surfaces if wiped incorrectly.
              </p>
              
              <h3 className="font-bold text-xl mt-8 mb-4">The Saran Protocol: 3-Stage Filtration</h3>
              <p>To protect the asset, we mandate a rigorous cleanup schedule:</p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Rough Clean:</strong> Removal of heavy debris and stickers from fixtures.</li>
                <li><strong>Deep Detail:</strong> Top-down removal of dust using HEPA-filter vacuums to capture 99.97% of particulates.</li>
                <li><strong>Final Polish:</strong> A white-glove inspection of all reflective surfaces and flooring.</li>
              </ul>

              {/* Pro Tip Box */}
              <div className="my-12 bg-amber-50 border border-amber-200 p-8 rounded-sm flex items-start gap-6 not-prose">
                <div className="bg-amber-100 p-3 rounded-full shrink-0">
                  <ShieldCheck className="text-amber-700 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-amber-900 font-bold uppercase tracking-widest text-sm mb-2">Saran Standard: Pro Tip</h4>
                  <p className="text-amber-900/80 mb-4">
                    We strictly prohibit general labor from performing final detailing. We recommend <a href="https://maidvip.com/services/post-construction-cleaning" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold underline decoration-2 underline-offset-4 hover:text-amber-900">professional post-construction cleaning services</a> for this delicate phase. Specialized equipment and training are required to remove particulate matter without surface abrasion.
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-xl mt-8 mb-4">Achieving the Showroom Finish</h3>
              <p>
                Achieving a showroom-ready finish requires a microscopic level of attention. From HVAC air duct sanitization to remove VOCs (Volatile Organic Compounds) to the gentle polishing of brass fixtures, every step must be executed with precision to ensure the handover is flawless.
              </p>
            </article>

            <div className="mt-20 pt-10 border-t border-neutral-200">
              <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Next in Series</p>
              <Link to={createPageUrl('InsightMaterials')} className="group block">
                <h3 className="text-2xl font-serif text-neutral-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                  Preserving High-End Materials <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}