import React from 'react';

const Location: React.FC = () => {
  // Encoded address for the map
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.843372225439!2d-122.4087532241324!3d37.769752371987514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2764f620cb%3A0x33b8602687c8008e!2s290%20Division%20St%20%23200%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus";

  return (
    <section id="location" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-16 font-grotesk">
              The <span className="text-lime">HQ</span>
            </h2>
            <div className="space-y-12 md:space-y-16">
              <div className="flex gap-6 md:gap-8 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/5">
                  <span className="material-symbols-outlined text-lime text-3xl">location_on</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold uppercase mb-3 font-grotesk">Diakadi Gym</h4>
                  <address className="text-gray-400 not-italic leading-relaxed text-base md:text-lg font-light">
                    290 Division Street, HQ Suite 200<br/>
                    San Francisco, CA 94103
                  </address>
                  <a 
                    href="https://maps.app.goo.gl/uX3L5x3T6Yf8Hj7Y9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-lime font-bold text-[10px] uppercase tracking-[0.3em] border-b border-lime/30 pb-1 hover:border-lime transition-all"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/5">
                  <span className="material-symbols-outlined text-lime text-3xl">schedule</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold uppercase mb-3 font-grotesk">Hours</h4>
                  <p className="text-gray-400 text-base md:text-lg font-light">Strictly By Appointment Only</p>
                  <p className="text-sm font-bold mt-4 text-lime uppercase tracking-widest">Mon — Fri: Early to Late</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-lime/10 blur-[80px] md:blur-[100px] rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="glass-card p-3 md:p-4 rounded-[3rem] md:rounded-[4rem] relative z-10 shadow-2xl overflow-hidden">
                <iframe 
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 0, 
                    filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)',
                    transition: 'filter 0.5s ease-in-out'
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Diakadi Gym San Francisco Location"
                  className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;