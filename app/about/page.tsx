"use client";

import { useState } from "react";
import { Zap, Shield, Heart, Globe, Mail, Github, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getAllTools } from "@/lib/data/tools";
import { SITE_CONFIG } from "@/lib/constants";

const AboutPage = () => {
  const allTools = getAllTools();

  const features = [
    {
      icon: Shield,
      title: "100% Free",
      description:
        "All tools are completely free to use with no hidden costs or premium tiers.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized for speed with instant results and minimal loading times.",
    },
    {
      icon: Heart,
      title: "User-First Design",
      description:
        "Built with user experience in mind, making complex tasks simple.",
    },
    {
      icon: Globe,
      title: "No Registration",
      description:
        "Use any tool immediately without creating accounts or providing personal data.",
    },
  ];

  const team = [
    {
      name: "Development Team",
      role: "Core Development",
      description:
        "Building and maintaining the platform with modern web technologies.",
    },
    {
      name: "Design Team",
      role: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love.",
    },
    {
      name: "Content Team",
      role: "Tool Curation",
      description:
        "Researching and adding the most useful tools for our users.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About" }]}
          className="mb-6"
        />
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating a comprehensive collection of free
            online tools that help people work smarter, not harder. Our mission
            is to provide high-quality, reliable tools that make everyday tasks
            easier and more efficient.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Story
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                How It All Started
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Free Tool Now was born from a simple observation: there are
                countless tasks we do every day that could be made easier with
                the right tools, but finding them shouldn't be a challenge in
                itself.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We started with a handful of essential tools that we used
                ourselves - image compression, text formatting, and simple
                calculators. What began as a personal project quickly grew into
                something bigger as friends and colleagues started asking for
                access to these tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to offer a comprehensive collection of{" "}
                {allTools.length}+ free tools that help thousands of users every
                day. Our commitment remains the same: keep it simple, keep it
                free, and keep it useful.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Why We Do This
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Passion for Productivity
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We believe everyone deserves access to tools that make
                      work easier.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Privacy First
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      No accounts, no tracking, no data collection - just tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Always Improving
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We continuously add new tools and improve existing ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To democratize access to powerful digital tools by providing a
              comprehensive, free platform that empowers individuals and
              businesses to accomplish their goals without the barrier of
              expensive software or complex learning curves.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that everyone deserves access to high-quality tools
              that can enhance their productivity and creativity, regardless of
              their technical background or budget.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Makes Us Different
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                No Strings Attached
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Unlike many online tools that require registration,
                subscriptions, or bombard you with ads, we believe in
                simplicity. Every tool on our platform is completely free to
                use, with no hidden costs or premium features locked behind
                paywalls.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're funded by the community and our passion for creating
                useful tools, not by selling your data or pushing unnecessary
                upgrades. What you see is what you get - powerful tools that
                just work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Built for Real People
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every tool we add is tested and used by our team first. We focus
                on solving real problems that people face in their daily work -
                from simple image editing to complex data formatting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our tools are designed with user experience in mind. No
                complicated interfaces, no steep learning curves. Just
                straightforward tools that do exactly what you need them to do.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Commitment to You
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold text-foreground mb-2">
                  Privacy & Security
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your data stays on your device. We don't collect, store, or
                  analyze any personal information.
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold text-foreground mb-2">
                  Performance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fast, reliable tools that work when you need them. No
                  downtime, no excuses.
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold text-foreground mb-2">
                  Community
                </h3>
                <p className="text-sm text-muted-foreground">
                  Built by users, for users. We listen to feedback and
                  continuously improve our tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-border/50 bg-card/50"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have suggestions for new tools or feedback on existing ones? We'd
            love to hear from you!
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
