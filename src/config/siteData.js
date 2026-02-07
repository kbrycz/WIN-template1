/**
 * Site Data Configuration
 *
 * All candidate-specific content lives here.
 * To re-skin this template for a new candidate, update this file
 * and swap out the images in src/assets/.
 */

const siteData = {
  // ── Candidate ──────────────────────────────────────────────
  candidate: {
    firstName: 'James',
    lastName: 'Harper',
    fullName: 'James Harper',
  },

  // ── Campaign ───────────────────────────────────────────────
  campaign: {
    name: 'James Harper Campaign',
    slogan: 'Building a stronger community, together.',
    donateUrl: '#',
    pacName: 'Speak Up',
    pacDescription: "Speak Up is James Harper\u2019s official federal political action committee, supporting candidates who are committed to fighting for democracy. With our basic freedoms to vote, to control our bodies and to decide our own futures on the line, we stand with those who speak up for justice, equality, and the democratic process.",
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: 'support@winadvocacy.com',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    privacyUrl: '#',
    termsUrl: '#',
  },

  // ── Donation ───────────────────────────────────────────────
  donation: {
    amounts: [10, 25, 50, 100, 250],
    disclaimer: 'Contributions are not deductible for federal income tax purposes.',
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: 'Building a stronger community, together.',
    disclaimerText: 'By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out.',
  },

  // ── Image + Text Section ───────────────────────────────────
  imageText: {
    headline: 'Championing Solutions. Electing Change.',
    subheading: 'We believe in the power of diverse voices to drive meaningful change.',
  },

  // ── About Section ──────────────────────────────────────────
  about: {
    heading: 'About James',
    bio: [
      'James Harper was born and raised right here in our community. Economic hardship and a system that too often looked the other way shaped his determination to fight for something better.',
      'A community organizing program opened the door to public service. James found his voice, discovered his purpose, and built a belief that change was possible \u2014 not someday, but now.',
      'Today, James continues the fight \u2014 standing up for working families and making sure every voice in our community is heard.',
    ],
  },

  // ── Signup Section ─────────────────────────────────────────
  signup: {
    heading: 'Sign Up to Join Us',
    subheading: 'Be part of the movement for change.',
    description: [
      'Join our community and help us build a stronger future together. Your voice matters, and together we can make a difference in our democracy and our communities.',
      'Every contribution \u2014 no matter the size \u2014 goes directly toward expanding voter outreach, supporting grassroots organizers, and funding the programs that strengthen our neighborhoods. Your donation helps keep this movement independent, people-powered, and focused on the issues that matter most to working families.',
    ],
  },

  // ── Popup Modal ────────────────────────────────────────────
  popup: {
    headline: 'Join our movement and help build a stronger community together.',
    disclaimerText: 'By providing your contact information, you agree to receive updates and messages from us. Message and data rates may apply. Reply STOP to opt out. Your information will not be shared with third parties.',
  },

  // ── Meta / SEO ─────────────────────────────────────────────
  meta: {
    title: 'James Harper | Building a Stronger Community, Together',
    description: "Join James Harper\u2019s campaign to build a stronger community. Born and raised right here, James is committed to representing working families and delivering real results.",
    keywords: 'James Harper, campaign, community, working families, public service, elect James Harper',
  },
}

export default siteData
