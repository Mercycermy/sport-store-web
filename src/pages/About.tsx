import { Target, Sparkles, Leaf, Trophy } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Trophy,
      title: 'Performance',
      description: 'Engineered for champions who demand excellence in every game.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Cutting-edge technology meets timeless athletic design.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly materials and ethical manufacturing.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail crafted to elevate your performance on the field.',
    },
  ];

  const timeline = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize sportswear for athletes worldwide.',
      emoji: '🌟',
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded to 25 countries, becoming a trusted name in sports.',
      emoji: '🌍',
    },
    {
      year: '2020',
      title: 'Innovation Award',
      description: 'Recognized for groundbreaking sustainable fabric technology.',
      emoji: '🏆',
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Leading the industry with cutting-edge performance gear.',
      emoji: '🚀',
    },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Sarah Chen', role: 'Head of Design', emoji: '👩‍🎨' },
    { name: 'Marcus Williams', role: 'Innovation Director', emoji: '👨‍🔬' },
    { name: 'Emma Davis', role: 'Sustainability Lead', emoji: '👩‍🌾' },
  ];

  return (
    <div className="bg-black text-white pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black opacity-80" />

        <div className="absolute inset-0 flex items-center justify-center text-[20rem] opacity-10 animate-pulse">
          🦌
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8" />
          <p className="text-2xl text-gray-300">
            Where Passion Meets Precision
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-16" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  } flex items-center justify-center text-9xl animate-pulse`}
                >
                  {item.emoji}
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="text-6xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-xl text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-gray-800 hover:border-red-500 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <value.icon size={48} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">
            Meet The{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-gray-800 group-hover:border-red-500 transition-all duration-500 min-h-[300px] flex flex-col items-center justify-center">
                    <div className="text-8xl mb-6">{member.emoji}</div>
                    <h3 className="text-2xl font-bold mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-red-500 text-center">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
