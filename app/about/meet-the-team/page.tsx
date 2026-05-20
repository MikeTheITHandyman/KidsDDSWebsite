import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Team | Kids Dentist Grayslake, IL',
  description:
    'Get to know the friendly faces behind Kids Dentist Grayslake. Our front office, hygiene, and dental assistant team make every visit warm, easy, and genuinely fun for kids.',
  openGraph: {
    title: 'Meet Our Team | Kids Dentist Grayslake, IL',
    description:
      'The people who make every visit warm, easy, and genuinely fun for kids and their families.',
    url: 'https://kidsdds.com/about/meet-the-team',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #4A90A4, #6BA899)',
  'linear-gradient(135deg, #E8934F, #E97D63)',
  'linear-gradient(135deg, #78509b, #4A90A4)',
  'linear-gradient(135deg, #6BA899, #8BA596)',
  'linear-gradient(135deg, #E8934F, #F4C77F)',
  'linear-gradient(135deg, #80d2f5, #4A90A4)',
  'linear-gradient(135deg, #4A90A4, #78509b)',
  'linear-gradient(135deg, #E97D63, #E8934F)',
  'linear-gradient(135deg, #6BA899, #4A90A4)',
  'linear-gradient(135deg, #78509b, #80d2f5)',
  'linear-gradient(135deg, #F4C77F, #E8934F)',
]

const TEAM = [
  {
    name: 'Don F.',
    role: 'Front Office Manager',
    imagePath: '/team/team-don.jpg',
    bio: "Don has been part of Kids Dentist for over 18 years. Don may be the first person to greet you when you arrive for your visit. He's always smiling and loves to welcome new and returning patients and hear about everyone's lives and families. Overseeing the day-to-day running of the front office keeps Don busy: He schedules patients and submits and follows up on insurance claims, and he's our computer/technology trouble-shooter, as well. His off hours are spent with his wife and animals. Don is very involved with the sport of K9 Nose Work. He and his dog Cooper have been competing since 2012 and have achieved titles in Nose Work 1 and Nose Work 2.",
  },
  {
    name: 'Gabbie C.',
    role: 'Treatment Coordinator',
    imagePath: '/team/team-gabbie.jpg',
    bio: "Gabbie is passionate about creating a positive, low-stress experience for kids and families - from the first hello to understanding treatment plans and making the most of insurance benefits. She's a true guide through the process and loves making each visit a little easier. Outside the office she is a proud plant mom, creative cook, mom of three (and a dog), and happiest outdoors.",
  },
  {
    name: 'Michelle',
    role: 'Scheduling Coordinator',
    imagePath: '/team/team-michelle.jpg',
    bio: "Michelle's goal is to make appointments easy and visits fun for both kids and parents. She loves seeing families leave with big smiles and the confidence to keep up great habits at home. Outside the office she is a devoted mom who enjoys time with her husband and daughter, two dogs and three cats, plus horseback riding, modern dance, and biking.",
  },
  {
    name: 'Jannet C.',
    role: 'Scheduling Coordinator',
    imagePath: '/team/team-jannet.jpg',
    bio: "Jannet says that the best part about working at Kids Dentist is seeing the children smile at the end of their visit. She loves working with kids and helping parents schedule their next appointments at the front desk. She is very excited to learn and be a part of the front desk crew! In her spare time, Jannet loves teaching and spending time with her son and husband.",
  },
  {
    name: 'Stephenie T.',
    role: 'Dental Hygienist',
    imagePath: '/team/team-stephenie.jpg',
    bio: "Stephenie has been part of Kids Dentist for over 9 years, and in the dental field for 11 years. Stephenie is a graduate of the College of Lake County Dental Hygiene Program and received her license as a Registered Dental Hygienist in 2009. Stephenie likes to split her time between Kids Dentist and working with adults to get a well-rounded view of dentistry. In addition to being a Dental Hygienist she is an avid reader, loves to spend time outdoors and quality time with her family.",
  },
  {
    name: 'Cassie S.',
    role: 'Dental Hygienist',
    imagePath: '/team/team-cassie-v1.jpg',
    bio: "Cassie has 4 years as a hygienist and 20+ years working with kids. She loves helping little ones build healthy habits and is certified in nitrous oxide, local anesthesia, and CPR. She received a Certificate of Award for Excellence in Community Outreach (2021). You'll often find her volunteering across Lake County, including teaching healthy habits during school visits. Outside the office she enjoys reading, running, fitness, and time with her husband, daughter, and two cats.",
  },
  {
    name: 'Olga R.',
    role: 'Dental Assistant',
    imagePath: '/team/team-olga-v1.jpg',
    bio: "Olga brings a calm, friendly presence and holds certifications in sealants and coronal polishing, allowing her to assist with preventive care and patient comfort. Outside the office she is a mom of three girls who loves adventures, trying new foods, and dancing.",
  },
  {
    name: 'Natalie F.',
    role: 'Dental Assistant',
    imagePath: '/team/team-natalie-v1.jpg',
    bio: "Natalie loves helping little ones feel comfortable at the dentist and build healthy habits that last. She lights up when she sees kids' hygiene (and confidence!) improve. Outside the office she enjoys walking and hiking, tending to houseplants and the garden, running, reading, and watching football with her fiance.",
  },
  {
    name: 'Maggie B.',
    role: 'Dental Assistant',
    imagePath: '/team/team-maggie.jpg',
    bio: "Maggie joined our team in June 2018 with 6 years of experience providing both hygiene and chairside dental assisting. Maggie has been fortunate to work in several aspects of dentistry and in doing so has gained a wide array of knowledge along the way. Her gentle touch and friendly chairside manner helps patients feel more comfortable and relaxed during their visit. Her main goal is to make sure patients' needs are met. In her free time, she enjoys jogging, swimming, and spending time with her two children and husband.",
  },
  {
    name: 'Eva C.',
    role: 'Dental Assistant',
    imagePath: '/team/team-eva.jpg',
    bio: "Eva has an impressive 15+ years of experience, all of which have been spent right here at our practice! She is very passionate about helping kids overcome their anxiety and creating a positive experience by joking around and being silly with them. Currently, she is certified in coronal polishing and nitrous oxide monitoring. Eva is a wife and mother of three lovely daughters, two dogs, and a kitten. In her free time, she loves exploring new places with her girls, crafting, and using her Cricut to make everything from custom shirts and stickers to paper flowers.",
  },
  {
    name: 'Maria',
    role: 'Dental Assistant',
    imagePath: '/team/team-maria.jpg',
    bio: "Maria has been a valued part of the Kids Dentist team for 2 years. What she loves most about working here is seeing kids leave their appointments smiling, knowing she helped make their visit a positive one. Maria is certified in dental lab work and will soon be certified in nitrous oxide monitoring. Outside the office, she enjoys dancing, exploring new places, and spending quality time with her family.",
  },
]

export default function MeetTheTeamPage() {
  return (
    <SubPageLayout
      title="Meet Our Team"
      subtitle="The friendly faces who make every visit warm, comfortable, and genuinely fun for kids and their families."
      kicker="Our People"
    >
      <div className="max-w-6xl mx-auto px-4" style={{ marginBottom: '4rem' }}>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
          className="team-grid"
        >
          {TEAM.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.05} style={{ height: '100%' }}>
              <div
                className="team-card"
                style={{
                  background: '#fff',
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(74,144,164,0.08)',
                  border: '1.5px solid rgba(74,144,164,0.10)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 3',
                    background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={member.imagePath}
                    alt={`${member.name}, ${member.role} at Kids Dentist Grayslake`}
                    fill
                    sizes="(max-width: 580px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: 'var(--brand-600)',
                      margin: '0 0 0.2rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </h3>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-500)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {member.role}
                  </span>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.72,
                      color: '#6b7280',
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      <style>{`
        .team-card:hover {
          box-shadow: 0 16px 44px rgba(74,144,164,0.16) !important;
          transform: translateY(-4px);
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SubPageLayout>
  )
}
