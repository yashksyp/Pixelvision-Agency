
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { ShieldCheck, Eye, Lock, FileText } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <Section theme="light" className="!py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">Privacy <span className="italic text-indigo-600">Policy.</span></h1>
            <p className="text-gray-500">Last Updated: October 2025</p>
          </motion.div>

          <div className="space-y-12 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <ShieldCheck className="text-indigo-600" /> 1. Introduction
              </h2>
              <p>
                At PixelVision Agency, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="text-indigo-600" /> 2. Data Collection
              </h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="text-indigo-600" /> 3. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="text-indigo-600" /> 4. Your Rights
              </h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
              </p>
            </section>

            <section className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Questions?</h3>
              <p className="text-indigo-800">
                If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager at: <br />
                <span className="font-bold">privacy@pixelvision.ads</span>
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};
