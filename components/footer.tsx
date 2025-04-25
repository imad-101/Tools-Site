import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 sm:pl-24">
      <div className="container px-6 md:px-12 py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding and Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Free Tool Now</h3>
            <p className="text-sm text-slate-600">
              Free online tools to simplify your workflow. Designed with
              simplicity and efficiency in mind.
            </p>
          </div>

          {/* Tools Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/udf-to-pdf"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  UDF to PDF Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-slate-600 hover:text-gray-900 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Free Tool Now. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
