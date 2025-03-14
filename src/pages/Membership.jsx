export default function Membership() {
  const membershipTiers = [
    {
      name: 'Collector',
      price: '1,500',
      period: 'annually',
      benefits: [
        'Exclusive access to gallery exhibitions',
        'Private viewing appointments',
        'Preview access to new artworks',
        'Quarterly art consultation',
        'Member-only events access',
        'Gallery publication subscription'
      ]
    },
    {
      name: 'Patron',
      price: '3,000',
      period: 'annually',
      benefits: [
        'All Collector benefits',
        'Priority auction bidding',
        'Monthly art consultation',
        'Artist studio visits',
        'Custom framing services',
        'Exclusive dinner events'
      ]
    },
    {
      name: 'Benefactor',
      price: '5,000',
      period: 'annually',
      benefits: [
        'All Patron benefits',
        'First access to limited editions',
        'Weekly art consultation',
        'Private exhibition tours',
        'Custom art sourcing',
        'International art fair access'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Gallery Membership</h1>
            <p className="text-xl text-gallery-600">
              Join our exclusive community of art collectors and enthusiasts
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className="bg-gallery-50 rounded-lg p-8">
                <h3 className="font-display text-2xl mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-display">${tier.price}</span>
                  <span className="text-gallery-600 ml-2">/{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-gallery-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Experiences */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Member Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Private Viewings',
                description: 'Schedule exclusive viewing appointments for our current exhibitions.'
              },
              {
                title: 'Art Consultation',
                description: 'Receive personalized guidance from our expert art consultants.'
              },
              {
                title: 'Special Events',
                description: 'Access to member-only events, artist talks, and exhibition previews.'
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <h3 className="font-display text-xl mb-4">{experience.title}</h3>
                <p className="text-gallery-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Application Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Submit Application',
                  description: 'Complete our membership application form with your details and interests.'
                },
                {
                  step: '02',
                  title: 'Consultation',
                  description: 'Meet with our membership director to discuss your art interests and goals.'
                },
                {
                  step: '03',
                  title: 'Welcome Package',
                  description: 'Upon approval, receive your welcome package and begin enjoying member benefits.'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-8">
                  <div className="text-3xl font-display text-accent">{step.step}</div>
                  <div>
                    <h3 className="font-display text-xl mb-2">{step.title}</h3>
                    <p className="text-gallery-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gallery-800 text-white">
        <div className="container-custom text-center">
          <h2 className="section-title text-white mb-6">Ready to Join?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our membership director to begin your journey with Zeppelin DC
          </p>
          <div className="space-x-4">
            <button className="btn-primary bg-accent hover:bg-opacity-90">
              Apply Now
            </button>
            <button className="btn-primary bg-transparent border-2 border-white">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                {
                  question: 'How long is the membership term?',
                  answer: 'Memberships are annual and renewable each year.'
                },
                {
                  question: 'Can I upgrade my membership tier?',
                  answer: 'Yes, you can upgrade your membership tier at any time.'
                },
                {
                  question: 'Are there guest privileges?',
                  answer: 'Members can bring guests depending on their membership tier.'
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gallery-200 pb-8">
                  <h3 className="font-display text-xl mb-2">{faq.question}</h3>
                  <p className="text-gallery-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
