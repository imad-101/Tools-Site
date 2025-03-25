import Link from "next/link";
import { Github, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">ToolMaster</h3>
            <p className="text-sm text-slate-600">
              Free online tools to simplify your workflow. Designed with
              simplicity and efficiency in mind.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/merger"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Word Document Merger
                </Link>
              </li>
              <li>
                <Link
                  href="/udf-to-pdf"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  UDF to PDF Converter
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ToolMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
