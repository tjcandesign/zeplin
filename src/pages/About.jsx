export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Our Vision</h1>
            <p className="text-xl text-gallery-600">
              Zeppelin DC is redefining the art experience in Washington DC,
              creating a space where creativity, commerce, and community converge.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Concept Detail */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Ground Floor:<br />Art Supply Haven</h2>
              <p className="text-gallery-600 mb-6">
                Our ground floor houses a meticulously curated selection of premium art supplies,
                design books, and collaborative art pieces. We partner with renowned brands and
                local artisans to offer tools that inspire creativity and excellence.
              </p>
              <ul className="space-y-4 text-gallery-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Premium art supplies from leading brands
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Curated design and art book collection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Collaborative art pieces for purchase
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-gallery-100 rounded-lg">
              {/* Store Image Placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gallery-200 rounded-lg md:order-1">
              {/* Gallery Image Placeholder */}
            </div>
            <div>
              <h2 className="section-title">Second Floor:<br />Members Gallery</h2>
              <p className="text-gallery-600 mb-6">
                Our exclusive second-floor gallery space is a sanctuary for art enthusiasts
                and collectors. Members enjoy privileged access to contemporary exhibitions,
                private viewings, and our sophisticated auction room.
              </p>
              <ul className="space-y-4 text-gallery-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Rotating contemporary art exhibitions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Members-only auction events
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Private viewing opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-xl text-gallery-600 mb-12">
              To create an elevated art experience that nurtures creativity,
              supports artists, and builds a community of art enthusiasts in Washington DC.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Nurture Creativity',
                  description: 'Providing tools and space for artistic expression',
                },
                {
                  title: 'Support Artists',
                  description: 'Creating platforms for artists to showcase their work',
                },
                {
                  title: 'Build Community',
                  description: 'Fostering connections through art appreciation',
                },
              ].map((pillar, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-display text-xl mb-3">{pillar.title}</h3>
                  <p className="text-gallery-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gallery-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Founder & Creative Director',
                bio: 'With over 15 years in the art world, Sarah brings her vision of accessible sophistication to Zeppelin DC.',
              },
              {
                name: 'Marcus Rivera',
                role: 'Gallery Director',
                bio: 'Former curator at prestigious galleries, Marcus oversees our exhibition program and member relations.',
              },
              {
                name: 'Emma Thompson',
                role: 'Retail Manager',
                bio: 'Emma's expertise in art supplies and materials ensures our store maintains the highest quality standards.',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gallery-200 rounded-full mx-auto mb-4">
                  {/* Team Member Image Placeholder */}
                </div>
                <h3 className="font-display text-xl mb-2">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-gallery-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
