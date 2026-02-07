import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import ContactForm from './ContactForm'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function SignupSection() {
  const handleSubmit = (formData) => {
    console.log('Signup form submitted:', formData)
  }

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2">
            <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.2} once className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight tracking-tight text-center md:text-left" style={{ color: colors.primary[600] }}>
              {siteData.signup.heading}
            </TextAnimate>
            <div className="space-y-4">
              <TextAnimate as="p" animation="fadeIn" by="word" delay={0.3} once className="text-lg md:text-xl font-semibold text-secondary-600 leading-relaxed">
                {siteData.signup.subheading}
              </TextAnimate>
              {siteData.signup.description.map((paragraph, index) => (
                <TextAnimate key={index} as="p" animation="fadeIn" by="word" delay={0.4 + index * 0.1} once className="text-base md:text-lg text-black leading-relaxed">
                  {paragraph}
                </TextAnimate>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <AnimateIn delay={0.4} className="w-full max-w-lg rounded-lg shadow-xl p-6 md:p-8 lg:p-10 mt-8 md:mt-16" style={{ backgroundColor: colors.primary[600] }}>
              <ContactForm compact={false} buttonText="SUBMIT" onSubmit={handleSubmit} />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupSection
