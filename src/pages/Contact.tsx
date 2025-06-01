
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
emailjs.init("k5bm7pk4oQohyGwEX"); // Replace this with your actual User ID from EmailJS dashboard

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_5hketqk', // Replace this with your actual Service ID from EmailJS dashboard
        'template_sjl9z8s', // Replace this with your actual Template ID from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'shai360hai@gmail.com'
        }
      );
      
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = "0545366498";
    const whatsappUrl = `https://wa.me/972${phoneNumber.substring(1)}`;
    const callUrl = `tel:+972${phoneNumber.substring(1)}`;
    
    // Create a simple choice dialog
    const choice = window.confirm("Would you like to send a WhatsApp message? Click OK for WhatsApp or Cancel to make a phone call.");
    
    if (choice) {
      window.open(whatsappUrl, '_blank');
    } else {
      window.location.href = callUrl;
    }
  };
  
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get in Touch</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Have a question or want to work together? Fill out the form below.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Your name" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  placeholder="Your email" 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange} 
                placeholder="Subject" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange} 
                placeholder="Your message" 
                rows={6}
                required 
              />
            </div>
            
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <button 
                onClick={handlePhoneClick}
                className="flex items-start gap-3 text-left hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                <Phone className="h-5 w-5 mt-0.5" />
                <span>0545366498</span>
              </button>
              <a 
                href="mailto:shai360hai@gmail.com"
                className="flex items-start gap-3 hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>shai360hai@gmail.com</span>
              </a>
              <p className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Israel</span>
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Other ways to connect</h2>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/shai360hai" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded flex items-center justify-center"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaisasonker/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
