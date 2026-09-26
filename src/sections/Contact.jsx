import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { siteConfig } from '../data/config';

const projectTypes = [
  'Business Website',
  'Portfolio Website',
  'Landing Page',
  'Web Application',
  'Dashboard',
  'Website Redesign',
  'IoT Dashboard',
  'Other',
];

const budgetOptions = [
  '₹3,000 – ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000+',
  'Not sure yet',
];

const deadlineOptions = [
  'Within 1 week',
  '1–2 weeks',
  '2–4 weeks',
  '1–2 months',
  'Flexible',
];

const initialForm = {
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  projectType: '',
  budget: '',
  deadline: '',
  description: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('');
  const successRef = useRef(null);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Please enter your WhatsApp number.';
    }
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!accessKey || accessKey === 'your_web3forms_access_key') {
      setSubmitStatus('error');
      setSubmitMessage(
        import.meta.env.DEV
          ? 'Missing Web3Forms access key. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.'
          : 'Form is not configured yet. Please contact me via WhatsApp or email instead.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const payload = {
        access_key: accessKey,
        subject: `Project Enquiry: ${formData.projectType} — ${formData.name}`,
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        company: formData.company || 'N/A',
        project_type: formData.projectType,
        budget: formData.budget,
        deadline: formData.deadline || 'Not specified',
        message: formData.description,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus('success');
        setSubmitMessage(
          "Thanks for reaching out. I'll review your requirements and get back to you soon."
        );
        setFormData(initialForm);
        setErrors({});
        setTimeout(() => {
          successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(
          data.message || 'Something went wrong. Please try again or contact me on WhatsApp.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage(
        'Network error. Please check your connection or reach out via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: siteConfig.contact.whatsapp,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View profile',
      href: siteConfig.contact.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: siteConfig.contact.linkedin,
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Great"
          subtitle="Have a website or web application idea? Tell me what you need and I'll get back to you with the next steps."
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left: contact info + WhatsApp / Email CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              Prefer to reach out directly? Use WhatsApp or email — or send a full project
              enquiry with the form.
            </p>

            {/* WhatsApp card */}
            <div className="glass rounded-2xl p-5 border border-green-500/20">
              <p className="text-sm font-medium text-white mb-1">Prefer WhatsApp?</p>
              <p className="text-xs text-gray-400 mb-4">
                Chat with me directly about your project.
              </p>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Email card */}
            <div className="glass rounded-2xl p-5">
              <p className="text-sm font-medium text-white mb-1">Prefer email?</p>
              <p className="text-xs text-gray-400 mb-4">{siteConfig.contact.email}</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl glass glass-hover text-white font-medium text-sm"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>

            {/* Contact info card */}
            <div className="glass rounded-2xl p-5 space-y-3">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Contact information
              </p>
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent-light" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm text-white truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500/50' : ''}`}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500/50' : ''}`}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`input-field ${errors.whatsapp ? 'border-red-500/50' : ''}`}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-400 mt-1">{errors.whatsapp}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your business name"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`input-field appearance-none cursor-pointer ${
                      errors.projectType ? 'border-red-500/50' : ''
                    }`}
                  >
                    <option value="" className="bg-dark-800">
                      Select type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-dark-800">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="text-xs text-red-400 mt-1">{errors.projectType}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`input-field appearance-none cursor-pointer ${
                      errors.budget ? 'border-red-500/50' : ''
                    }`}
                  >
                    <option value="" className="bg-dark-800">
                      Select budget
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-dark-800">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-xs text-red-400 mt-1">{errors.budget}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Expected Deadline
                </label>
                <select
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark-800">
                    Select deadline
                  </option>
                  {deadlineOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-dark-800">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className={`input-field resize-none ${
                    errors.description ? 'border-red-500/50' : ''
                  }`}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
                {errors.description && (
                  <p className="text-xs text-red-400 mt-1">{errors.description}</p>
                )}
              </div>

              {/* Success / error message */}
              <div ref={successRef}>
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/25"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-300">
                          Project enquiry sent successfully!
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{submitMessage}</p>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-300">{submitMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Project Enquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Your details are sent securely. I typically reply within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
