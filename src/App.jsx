import React, { useRef, useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Target, Mail, Phone, MapPin, ArrowRight, Globe, Star, Facebook, Instagram, Twitter, Linkedin} from 'lucide-react';
import Logo from './assets/Logo.png';
import Donate from './Pages/Donate';
import Volunteer from './Pages/Volunteer';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from './ScrollToTop';
import TechProjects from './Pages/TechProjects';
import MentalHealthProjects from './Pages/MentalHealthProjects';
import EntertainmentProjects from './Pages/EntertainmentProjects';

const heroImages = [
  'https://i.postimg.cc/8cH6mRJc/IMG-3094.jpg', // Replace with your image URLs
  'https://i.postimg.cc/K8DXvjfp/DSC-0417.jpg',
  'https://i.postimg.cc/C5288w4W/IMG-2041-Original-Copy.jpg',
  'https://i.postimg.cc/NF14q2yg/DSC-0175.jpg',
];

function App() {
  const form = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [state, handleSubmit] = useForm("myzbwval"); // Replace "myzbwval" with your Formspree form ID
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const result = await handleSubmit(e); // Use Formspree's handleSubmit
    if (result.succeeded) {
      // Reset form fields after successful submission
      setFormData({
        name: '', // Clear the "Full Name" field
        email: '', // Clear the "Email Address" field
        subject: '', // Clear the "Subject" field
        message: '', // Clear the "Message" text area
      });
    }
  };

  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to the top on route change */}
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white flex flex-col">
            {/* Navigation */}
        <nav className="bg-white shadow-md p-2 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex flex-row sm:flex-row sm:items-center -ml-6 sm:ml-6">
                <img 
                  src={Logo} 
                  alt="Saniki Space Foundation Logo" 
                  className="h-20 w-24 sm:h-24 sm:w-28 object-contain" 
                />
                <h1 className="text-left text-lg sm:text-2xl font-black leading-tight text-gray-800 sm:ml-2 mt-6 sm:mt-0">
                  Saniki Space Foundation 
                  {/*<span className="hidden sm:inline">&nbsp;</span>
                  <br className="block sm:hidden" />
                  Kenya*/}
                </h1>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <HashLink smooth to="/#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</HashLink>
                <HashLink smooth to="/#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</HashLink>
                <HashLink smooth to="/#programs" className="text-gray-700 hover:text-emerald-600 transition-colors">Programs</HashLink>
                <HashLink smooth to="/#impact" className="text-gray-700 hover:text-emerald-600 transition-colors">Impact</HashLink>
                <HashLink smooth to="/#team" className="text-gray-700 hover:text-emerald-600 transition-colors">Team</HashLink>
                <HashLink smooth to="/#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</HashLink>

                <Link to="/donate" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                  Donate Now
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <HashLink smooth to="/#home" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</HashLink>
                <HashLink smooth to="/#about" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</HashLink>
                <HashLink smooth to="/#programs" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Programs</HashLink>
                <HashLink smooth to="/#impact" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Impact</HashLink>
                <HashLink smooth to="/#team" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Team</HashLink>
                <HashLink smooth to="/#contact" onClick={toggleMenu} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</HashLink>
                <Link to="/donate" onClick={toggleMenu} className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                  Donate Now
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative text-white"
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 1s ease-out',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transforming Lives Through 
                <span className="text-orange-400"> Community Impact</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100">
                Empowering communities across Kenya through education, healthcare, and sustainable development programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
                <Link to="/volunteer" className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                  Join Our Mission
                </Link>
                <HashLink smooth to="/#about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-800 transition-all duration-300">
                  Learn More
                </HashLink>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">3</div>
                <div className="text-gray-600">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">20+</div>
                <div className="text-gray-600">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">1+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building a Better Kenya, One Community at a Time
                </h2>
                <p className="text-lg text-gray-600 mb-6">
Saniki Foundation is a sanctuary of healing, creativity, and innovation.
It is a place where young people are truly seen, heard, and supported. It is where no child walks through trauma alone, and every dream has room to grow.

We exist to raise a new generation of emotionally healthy youth, confident innovators, and creative change makers who will shape the future of Kenya and Africa. Guided by fairness, dignity, and empowerment, Saniki opens doors for every child to thrive, not just survive.

Through our three core pillars:

<p><h3 className="font-semibold text-gray-900">⁠The Arts</h3></p>

A safe space for self-expression, storytelling, and creative freedom through music, dance, painting, and performance.

<p><h3 className="font-semibold text-gray-900">⁠Clean Mind (Mental Health & Wellness)</h3></p>

Access to compassionate counseling, mental wellness education, and emotional support to build resilience and inner strength.

<p><h3 className="font-semibold text-gray-900">⁠Technology</h3></p>

Hands-on digital learning, from coding and 3D printing to digital entrepreneurship which equips youth with skills for today’s world and tomorrow’s opportunities.

Together, these pillars cultivate talent, restore hope, and create opportunities that break the cycle of poverty and inequality. Saniki’s holistic approach blends education, mental health, creative expression, and tech-driven skill building to uplift entire communities, one life at a time.

                </p>
                <p className="text-lg text-gray-600 mb-8">
                Our approach combines education, mental health support, creative arts, and technology-driven skill-building to empower communities and tackle the root causes of poverty and inequality.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">To empower youth, artists, and innovators by providing safe spaces, tools, mentorship, and opportunities to explore their craft and build sustainable futures.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">Our Vision
                    To elevate African art, talent, and innovation to the global stage and transform communities through creativity, collaboration, and healing.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/g0jGK2Zr/9.jpg" // Replace with the path to your image file, e.g., "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=compress&cs=tinysrgb&w=800" 
                  alt="Community gathering" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">1+</div>
                  <div className="text-sm">Years of Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We run comprehensive programs designed to address the most pressing needs in Kenyan communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://i.postimg.cc/Dyjhq8LS/IMG-8189-Copy.jpg" 
                  alt="Education program" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education & Literacy(E-Learning)</h3>
                  <p className="text-gray-600 mb-4">
                  Empowering youths through digital learning, graphic design, coding, robotics, and hands-on 3D printing to spark creativity, drive innovation, and strengthen real-world problem-solving skills.
                  </p>
                  <Link to="/tech-projects" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                    View Projects <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://i.postimg.cc/QNBN0gNw/Mental-Health-E-Book.jpg" 
                  alt="Healthcare program" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Access</h3>
                  <p className="text-gray-600 mb-4">
                  Saniki Space improves community well-being by providing accessible mental health support, offering safe counseling spaces, training local helpers, and promoting awareness to reduce stigma. Our goal is to strengthen resilience and ensure people get the help they need.
                  </p>
                  {/* <Link to="/mental-health-projects" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                    View Projects <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>*/}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://i.postimg.cc/L6rCKSp6/IMG-8297.jpg" 
                  alt="Economic empowerment" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Entertainment</h3>
                  <p className="text-gray-600 mb-4">
                  Empowering upcoming artists through teaching and providing access to a community music studio, photography and videography resources, and other creative tools. Saniki Space also supports cultural events, promotes local arts and crafts, and fosters community engagement to inspire expression, talent development, and shared cultural pride..
                  </p>
                  <Link to="/entertainment-projects" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                    View Projects <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section id="impact" className="bg-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from the communities we serve, showcasing the transformative power of collective action.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                "Thanks to Saniki Space Foundation, we learned robotics and Arduino and built a secure door lock system. Now our community spaces are safer, and we feel empowered using the technology we learned."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://i.postimg.cc/T1R9xYnT/IMG-1989.avif" 
                    alt="Community leader" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Raphael Kanini</div>
                    <div className="text-gray-600">Children's garden home and school student, Uthiru</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                "Thanks to Saniki Space Foundation, we now have access to mental health support. The mobile clinic has made it easier for our community to get help when needed."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://i.postimg.cc/hjbjkVLs/IMG-8849-Copy.avif" 
                    alt="Community member" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Grace Mwende</div>
                    <div className="text-gray-600">Student, Machakos</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                "Thanks to the Saniki Space program, I learned new skills in carpentry and making things with my hands. Now I can create projects on my own and even teach my friends what I’ve learned!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://i.postimg.cc/sx600Zqq/IMG-8199-Copy.avif" 
                    alt="Program beneficiary" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">John Kamau</div>
                    <div className="text-gray-600">Student, Eldoret</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                "Thanks to the Saniki Space program, I learned how to design and 3D print cool items. Now I can create my own projects and even show my friends how to make their own 3D creations!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://i.postimg.cc/dVd4GXQJ/IMG-6455.avif" 
                    alt="Program beneficiary" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mercy Waithira</div>
                    <div className="text-gray-600">Children's garden home and school student, Nairobi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals and volunteers working together to create lasting change in Kenyan communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://i.postimg.cc/qM0497Dx/vicky.jpg" 
                  alt="Executive Director" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Victor Kibe</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Executive Director(Founder)</p>
                <p className="text-gray-600 text-sm">
                Responsible for guiding the organization’s strategic direction, overseeing operations, and working with the team to achieve its mission and long-term goals.
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://i.postimg.cc/c4wKmV0Q/Whats-App-Image-2025-11-21-at-9-25-34-PM.jpg" 
                  alt="Program Manager" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Geoffrey Omuse</h3>
                <p className="text-emerald-600 font-medium mb-3">ICT Manager</p>
                <p className="text-gray-600 text-sm">
                Skilled in managing technology systems, website development, and IT solutions that support the organization’s digital growth and innovation.
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://i.postimg.cc/cHVpBzts/(7).jpg" 
                  alt="Community Coordinator" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gregory Isaac</h3>
                <p className="text-emerald-600 font-medium mb-3">Organising Secretary</p>
                <p className="text-gray-600 text-sm">
                Efficient in planning, coordinating, and managing organizational activities, ensuring smooth operations and effective communication within the team.
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://i.postimg.cc/qR1Kk28M/Whats-App-Image-2025-11-01-at-11-27-15-PM.jpg"
                  alt="Healthcare Specialist" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Isaac Arabu</h3>
                <p className="text-emerald-600 font-medium mb-3">ICT Specialist</p>
                <p className="text-gray-600 text-sm">
                Enthusiastic about robotics and technology integration, driving innovation through creative tech solutions that enhance learning and digital advancement within the organization
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://i.postimg.cc/LXmyfH65/Stella.jpg" 
                  alt="Volunteer Coordinator" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stella Kwamboka</h3>
                <p className="text-emerald-600 font-medium mb-3">Legal Officer</p>
                <p className="text-gray-600 text-sm">
                Knowledgeable in legal matters, ensuring the organization complies with laws and regulations while protecting its interests.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://i.postimg.cc/cCHnMG7N/paul.jpg" 
                  alt="Volunteer Coordinator" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Paul Oyindo</h3>
                <p className="text-emerald-600 font-medium mb-3">Director of programms</p>
                <p className="text-gray-600 text-sm">
                Creative and energetic in planning, organizing, and managing entertainment activities that bring people together and make every event lively and engaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-emerald-50 Py-20 md:py-20"> {/* Updated colors */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-white-100 max-w-2xl mx-auto">
              Join us in our mission to transform lives and build stronger communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" scroll={true} className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                Donate Today
              </Link>
              <Link to="/volunteer" scroll={true} className="border-2 border-orange-600 text-b px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
                Become a Volunteer
              </Link>
            </div>

            {/* Volunteers Section */}
            <div className=" mt-12 pb-20">
              <h3 className="text-2xl font-bold mb-6">Meet Our Volunteers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Volunteer 1: Saad */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://i.postimg.cc/FFYL8LM2/Whats-App-Image-2025-12-07-at-7-21-14-PM.jpg" // Replace with Saad's image URL
                      alt="Al-Adhami, Saad" 
                      className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Al-Adhami, Saad</h4>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Saad is a dedicated volunteer who works tirelessly to support our mission of empowering communities across Kenya. His passion for community service inspires us all.
                  </p>
                </div>

                {/* Volunteer 2: Zeyad */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://i.postimg.cc/cHVpBzts/(7).jpg" // Replace with Zeyad's image URL
                      alt="Zeyad" 
                      className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Zeyad Ghulam</h4>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A passionate volunteer who dedicates his time to teaching 3D printing and inspiring children to explore creativity through technology. His commitment to nurturing young innovators reflects our mission of empowering the next generation.
                  </p>
                </div>

                {/* Volunteer 3: Luca */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://i.postimg.cc/SsPrp97w/Whats-App-Image-2025-11-04-at-10-06-16-PM.jpg" // Replace with Luca's image URL
                      alt="Luca" 
                      className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Luca</h4>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A creative volunteer who contributed to designing and developing our newsletter. His dedication to clear communication and engaging storytelling helps us share our impact and connect with the community more effectively.
                  </p>
                </div>

                {/* Volunteer 4: James */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://i.postimg.cc/Qd9ZwkGz/Whats-App-Image-2026-01-30-at-12-56-28-PM.jpg" // Replace with James's image URL
                      alt="James" 
                      className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">James</h4>
                    </div>
                  </div>
                  <p className="text-gray-600">
                  A volunteer Social Media Manager who transforms stories into impact—driving awareness, engagement, and support for the foundation’s work across communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Ready to partner with us or learn more about our work? We'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-emerald-400 mr-4" />
                    <div>
                      <div className="font-semibold">Our Office</div>
                      <div className="text-gray-300">Naivasha Road, Nairobi, Kenya</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-emerald-400 mr-4" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-300">+254 743 402 487</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-emerald-400 mr-4" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">info@Sanikispacefoundation.org</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Globe className="h-6 w-6 text-emerald-400 mr-4" />
                    <div>
                      <div className="font-semibold">Website</div>
                      <div className="text-gray-300">www.Sanikispacefoundation.org</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form ref={form} onSubmit={handleSubmitForm} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name} // Controlled input bound to formData
                      onChange={handleChange} // Update formData on change
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email} // Controlled input bound to formData
                      onChange={handleChange} // Update formData on change
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="your@email.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject} // Controlled input bound to formData
                      onChange={handleChange} // Update formData on change
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message} // Controlled input bound to formData
                      onChange={handleChange} // Update formData on change
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
                    disabled={state.submitting} // Disable button while submitting
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {state.succeeded && (
                    <p className="text-emerald-400 mt-4">Message sent successfully!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <img 
                    src={Logo}
                    alt="Saniki Space Foundation Logo" 
                    className="h-28 w-32 ml-0 mr-0" 
                  />
                  <span className="text-xl font-bold text-white">Saniki Space Foundation {/*Kenya*/}</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Transforming communities across Kenya through sustainable development programs 
                  that empower local leaders and foster long-term growth.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61583136432986" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a href="https://www.instagram.com/rise.well.foundation.kenya/#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a href="https://x.com/Sanikiorg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                  <a href=" https://www.linkedin.com/in/Saniki Space-b70597397/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaPA3NYEoRlSGLgUW3aJ2EA%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><HashLink smooth to="/#about" className="hover:text-emerald-400 transition-colors">About Us</HashLink></li>
                  <li><HashLink smooth to="/#programs" className="hover:text-emerald-400 transition-colors">Our Programs</HashLink></li>
                  <li><HashLink smooth to="/#impact" className="hover:text-emerald-400 transition-colors">Impact Stories</HashLink></li>
                  <li><HashLink smooth to="/#team" className="hover:text-emerald-400 transition-colors">Our Team</HashLink></li>

                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Get Involved</h3>
                <ul className="space-y-2">
                  <li><a href="/#Volunteer" className="hover:text-emerald-400 transition-colors">Volunteer</a></li>
                  <li><a href="/#Donate" className="hover:text-emerald-400 transition-colors">Donate</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Corporate Giving</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Annual Reports</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Saniki Space Foundation Kenya. All rights reserved. | Reg. No: NPO/123/2010
              </p>
            </div>
          </div>
        </footer>
          </div>
        } />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/tech-projects" element={<TechProjects />} />
        <Route path="/mental-health-projects" element={<MentalHealthProjects />} />
        <Route path="/entertainment-projects" element={<EntertainmentProjects />} />
      </Routes>
    </Router>
  );
}

export default App;