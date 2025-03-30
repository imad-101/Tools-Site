import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export const metadata = {
  title: "Contact Us - Imad Tools",
  description: "Get in touch with us for any inquiries or support.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
