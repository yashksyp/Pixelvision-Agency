
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Gavel, Scale, AlertCircle, CheckCircle2 } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <div className="pt-20">
      <Section theme="light" className="!py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">Terms of <span className="italic text-indigo-600">Service.</span></h1>
            <p className="text-gray-500">Last Updated: October 2025</p>
          </motion.div>

          <div className="space-y-12 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Gavel className="text-indigo-600" /> 1. Agreement to Terms
              </h2>
              <p>
                By accessing our website at pixelvision.ads, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="text-indigo-600" /> 2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on PixelVision Agency's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose, or for any public display.</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertCircle className="text-indigo-600" /> 3. Disclaimer
              </h2>
              <p>
                The materials on PixelVision Agency's website are provided on an 'as is' basis. PixelVision Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-indigo-600" /> 4. Limitations
              </h2>
              <p>
                In no event shall PixelVision Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PixelVision Agency's website, even if PixelVision Agency or a PixelVision Agency authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 italic">
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of San Francisco, California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};
