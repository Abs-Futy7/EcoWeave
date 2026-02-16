'use client';

import { Testimonials } from "@/components/ui/testimonials";
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
    text: 'EcoWeave helped us identify hidden pollution patterns that saved our factory from a $2M penalty. The AI-driven insights are remarkably accurate and actionable.',
    name: 'Rahman Ahmed',
    username: 'Compliance Director, Bengal Textiles',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
    text: 'Before EcoWeave, we were reactive. Now we predict and prevent pollution incidents before they happen. Our audit scores improved by 40% in six months.',
    name: 'Ayesha Khatun',
    username: 'Factory Manager, Dhaka Garments Ltd',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
    text: 'The forensic risk analysis is a game-changer. We now have data-backed evidence for our sustainability claims that buyers actually trust.',
    name: 'Kamal Hassan',
    username: 'CEO, Sustainable Fabrics International',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
    text: 'EcoWeave transformed our compliance process from a cost center to a competitive advantage. Buyers now prefer working with us because of our data transparency.',
    name: 'Sharmila Das',
    username: 'Operations Head, Green Threads',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
    text: 'The real-time alerts prevented what could have been a catastrophic wastewater incident. EcoWeave paid for itself in the first month.',
    name: 'Farhan Malik',
    username: 'Environmental Manager, Chittagong Mills',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop',
    text: 'As an auditor, I recommend EcoWeave to all our clients. The platform makes compliance verification faster and more reliable than any tool I\'ve used.',
    name: 'Nadia Islam',
    username: 'Lead Auditor, Bangladesh Standards Bureau',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop',
    text: 'The batch tracing feature is brilliant. When a buyer questioned our compliance, we provided forensic evidence within hours. They increased our order volume by 30%.',
    name: 'Imran Chowdhury',
    username: 'Quality Manager, Export Textiles BD',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop',
    text: 'EcoWeave gave us visibility into hidden risks across our supply chain. We caught issues at upstream suppliers before they became our liability.',
    name: 'Fatima Rahman',
    username: 'Supply Chain Director, Fashion Forward BD',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
    text: 'The platform is intuitive even for our less tech-savvy team members. Alert notifications are clear and the recommended actions are always practical.',
    name: 'Tariq Ali',
    username: 'Production Supervisor, Sylhet Dyeing',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
    text: 'We reduced our chemical waste by 25% in the first quarter using EcoWeave\'s optimization insights. Compliance met profitability.',
    name: 'Meera Begum',
    username: 'Sustainability Lead, Eco Mills Group',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop',
    text: 'International buyers now view us as a low-risk partner. EcoWeave\'s reporting gave us credibility that competitors struggle to match.',
    name: 'Samir Hossain',
    username: 'Export Director, Global Garments',
    social: 'https://linkedin.com'
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop',
    text: 'The ROI was immediate. We avoided a major fine and secured premium pricing from European buyers who value our transparent compliance data.',
    name: 'Laila Khan',
    username: 'Managing Director, Premium Fabrics Ltd',
    social: 'https://linkedin.com'
  }
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function TestimonialsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={headerVariants}
    >
      <Testimonials 
        testimonials={testimonials}
        title="Trusted by Industry Leaders"
        description="See what textile manufacturers and compliance officers are saying about EcoWeave."
        maxDisplayed={6}
      />
    </motion.section>
  )
}

