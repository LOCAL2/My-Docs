import Link from 'next/link';
import { siteConfig } from '../../config.mjs';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {siteConfig.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {siteConfig.sidebar.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800 hover:underline block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link
              href="/docs/introduction"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
