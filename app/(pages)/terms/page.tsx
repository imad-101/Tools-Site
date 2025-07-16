"use client";

import {
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Breadcrumb } from "@/components/Breadcrumb";

const TermsPage = () => {
  const keyTerms = [
    {
      icon: Shield,
      title: "Acceptance",
      description:
        "By using our services, you agree to these terms and conditions.",
    },
    {
      icon: FileText,
      title: "Service Usage",
      description:
        "Use our tools responsibly and in accordance with applicable laws.",
    },
    {
      icon: AlertTriangle,
      title: "Limitations",
      description: "We provide tools as-is without warranties or guarantees.",
    },
    {
      icon: CheckCircle,
      title: "User Rights",
      description: "You retain ownership of your content and data.",
    },
  ];

  const prohibitedUses = [
    "Illegal activities or content",
    "Harassment or abuse",
    "Spam or unsolicited communications",
    "Attempting to breach security",
    "Interfering with service operation",
    "Violating intellectual property rights",
    "Distributing malware or harmful code",
    "Impersonating others",
  ];

  const userObligations = [
    {
      title: "Legal Compliance",
      description:
        "Use our services in compliance with all applicable laws and regulations.",
    },
    {
      title: "Account Security",
      description:
        "Maintain the security of your account and notify us of any unauthorized access.",
    },
    {
      title: "Content Responsibility",
      description:
        "You are responsible for all content you create, upload, or share using our tools.",
    },
    {
      title: "Service Interference",
      description:
        "Do not attempt to interfere with or disrupt our services or infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
          className="mb-6"
        />
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of our platform and services. By using
            our tools, you agree to be bound by these terms and our privacy
            policy.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              Last updated: December 2024
            </Badge>
            <Badge variant="outline" className="text-sm">
              Version 1.0
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Key Terms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTerms.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-border/50 bg-card/50 hover:bg-card/70 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {term.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {term.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Services
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What We Provide
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We provide a collection of free online tools designed to help
                you with various tasks including image processing, text
                formatting, calculations, and more. Our platform is designed to
                be accessible, reliable, and user-friendly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All tools are provided free of charge, though we may offer
                premium features or accept donations to support our development
                and maintenance efforts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Service Availability
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We strive to maintain high availability of our services, but we
                cannot guarantee uninterrupted access. We may need to perform
                maintenance, updates, or address technical issues that could
                temporarily affect service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will provide reasonable notice for planned maintenance and
                work quickly to resolve any unexpected issues.
              </p>
            </div>
          </div>
        </div>

        {/* User Obligations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Your Obligations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {userObligations.map((obligation, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg">{obligation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {obligation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prohibited Uses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Prohibited Uses
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
            <p className="text-muted-foreground mb-6 text-center">
              You may not use our services for any of the following purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Intellectual Property
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Rights
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our platform, tools, and content are protected by intellectual
                property laws. We retain all rights to our software, designs,
                and proprietary technology. You may not copy, modify, or
                distribute our tools without permission.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We respect the intellectual property rights of others and expect
                our users to do the same. If you believe your rights have been
                violated, please contact us.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Your Content
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You retain ownership of any content you create or upload using
                our tools. We do not claim ownership of your work, and you are
                free to use it as you wish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our services, you grant us a limited license to process
                your content solely for the purpose of providing our tools and
                services to you.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers and Limitations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Disclaimers and Limitations
          </h2>
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Service Disclaimer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided "as is" without warranties of any
                  kind. We do not guarantee that our tools will be error-free,
                  secure, or meet your specific needs. Use our services at your
                  own risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Liability Limitation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We shall not be liable for any indirect, incidental, special,
                  or consequential damages arising from your use of our
                  services. Our total liability is limited to the amount you
                  paid for our services, if any.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Account Termination
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Your Right to Terminate
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You may stop using our services at any time. If you have an
                account, you can delete it through your account settings. Upon
                termination, we will delete your personal data in accordance
                with our privacy policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Some data may be retained for legal or legitimate business
                purposes, such as preventing fraud or complying with legal
                obligations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Right to Terminate
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may suspend or terminate your access to our services if you
                violate these terms, engage in prohibited activities, or for any
                other reason at our sole discretion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will provide reasonable notice when possible, except in cases
                of serious violations or legal requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Changes to These Terms
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              We may update these terms from time to time to reflect changes in
              our services, legal requirements, or business practices. We will
              notify you of any material changes by posting the updated terms on
              our website.
            </p>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Your continued use of our services after any changes constitutes
                acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about these terms of service or need
            clarification on any provision, please contact us.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsPage;
