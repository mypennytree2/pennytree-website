import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ComplianceBar from "@/components/ComplianceBar";
import Footer from "@/components/Footer";
import { Building2, Users, Target, Heart, Award, Globe, Briefcase, TrendingUp, DollarSign, Cpu, Shield, Smartphone, Play } from "lucide-react";
import ayoImage from "@/assets/ayo-ogunlowo.png";
import abayomiImage from "@/assets/abayomi-ogunjobi.png";
import gbengaImage from "@/assets/gbenga-sonaike.png";
import ariyoImage from "@/assets/ariyo-raji.png";
import dapoImage from "@/assets/dapo-adekolu.jpeg";
import moyosoreImage from "@/assets/moyosore-azeez.png";
import tobiImage from "@/assets/tobi-akinbiyi.png";
import logo from "@/assets/logo.png";
const Business = () => {
  const coreValues = [{
    icon: <Target className="h-8 w-8" />,
    title: "Our Mission",
    description: "To democratize financial services across Africa, making banking accessible and affordable for everyone, breaking down barriers to financial inclusion."
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: "Our Vision",
    description: "To become Africa's leading digital financial platform, connecting millions to modern banking and empowering economic growth across the continent."
  }, {
    icon: <Heart className="h-8 w-8" />,
    title: "Our Core Values",
    description: "Transparency, security, innovation, and customer-first approach guide everything we do. We believe in building trust through reliable, accessible financial solutions."
  }];
  const features = [{
    icon: <Users className="h-8 w-8" />,
    title: "Our Team",
    description: "A diverse group of fintech experts, engineers, and financial professionals passionate about innovation"
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Our Impact",
    description: "Empowering individuals and businesses with tools to achieve their financial goals and dreams"
  }, {
    icon: <Building2 className="h-8 w-8" />,
    title: "Our Story",
    description: "Founded in Nigeria, we've grown from a startup to a trusted financial technology company"
  }];
  const teamMembers = [{
    name: "Ayo Ogunlowo",
    role: "Chief Executive Officer",
    icon: <Briefcase className="h-8 w-8" />,
    image: ayoImage,
    description: "Leading PennyTree Technologies's vision and driving the company's growth across African markets."
  }, {
    name: "Abayomi Ogunjobi",
    role: "Director",
    icon: <TrendingUp className="h-8 w-8" />,
    image: abayomiImage,
    description: "Shaping our long-term vision and strategic roadmap for sustainable expansion and innovation."
  }, {
    name: "Tobi Akinbiyi",
    role: "Non Executive Director",
    icon: <Users className="h-8 w-8" />,
    image: tobiImage,
    description: "Providing strategic guidance and independent oversight to support PennyTree Technologies's governance and growth."
  }, {
    name: "Gbenga Sonaike",
    role: "Treasurer",
    icon: <DollarSign className="h-8 w-8" />,
    image: gbengaImage,
    description: "Managing financial operations and ensuring fiscal responsibility across all business units."
  }, {
    name: "Ariyo Raji",
    role: "Chief Technology Officer",
    icon: <Cpu className="h-8 w-8" />,
    image: ariyoImage,
    description: "Driving technological innovation and building scalable fintech solutions for the future."
  }, {
    name: "Dapo Adekolu",
    role: "Chief Risk Officer",
    icon: <Shield className="h-8 w-8" />,
    image: dapoImage,
    description: "Ensuring robust risk management and regulatory compliance across all our financial services."
  }, {
    name: "Moyosore Azeez",
    role: "Chief Product Officer",
    icon: <Target className="h-8 w-8" />,
    image: moyosoreImage,
    description: "Driving product strategy and execution from concept to launch to strengthen market position and customer value."
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <ComplianceBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-primary">
              <img src={logo} alt="PennyTree Technologies Logo" className="w-16 h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              About{" "}
              <span className="text-gradient">PennyTree Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to revolutionize financial services across Africa, making modern banking 
              accessible, secure, and affordable for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vision, Mission & Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The foundation that drives our commitment to financial innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => <Card key={index} className="glass-card glow-on-hover border-card-border rounded-md p-6 transition-all duration-300 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 text-primary-foreground mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Us Features */}
      

      {/* Team Members Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet our leadership team
            </h2>
            <p className="text-xl text-muted-foreground">
              The visionaries driving PennyTree Technologies's mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => <Card key={index} className="glass-card glow-on-hover border-card-border rounded-md p-6 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  {/* Profile Picture */}
                  <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20 shadow-lg">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground mx-auto">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building the future together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our diverse team combines decades of experience in finance, technology, and business 
              to create innovative solutions that empower financial inclusion across Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-muted-foreground">Leadership Experts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Committed to Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to join our journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the financial revolution. Whether you're looking to use our services or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="h-5 w-5 mr-2" />
                  App Store
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="/download" target="_blank" rel="noopener noreferrer">
                  <Play className="h-5 w-5 mr-2" />
                  Play Store
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Business;