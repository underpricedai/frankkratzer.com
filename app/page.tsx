import { Mail, Linkedin, Github, ExternalLink, Briefcase, Rocket, Code2, Brain, Server, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 max-w-4xl mx-auto">
        <p className="text-orange-600 font-medium mb-2">Hi, I&apos;m</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
          Frank Kratzer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          SaaS Founder & Developer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mb-6">
          Building AI-powered products that automate decisions. By day, I lead enterprise AI initiatives at Proofpoint.
          By night, I build SaaS products that help people make smarter choices.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-orange-300 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-orange-500 rounded"></span>
            About
          </h2>
          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>
              I&apos;m a technologist with a passion for building products that leverage AI to solve real problems.
              My work spans enterprise systems and startup ventures, always with a focus on practical AI applications.
            </p>
            <p>
              At <strong className="text-gray-900">Proofpoint</strong>, I serve as a Senior System Administrator in Digital Experience & Enablement,
              where I manage the Atlassian ecosystem and drive AI initiatives including ChatGPT and Microsoft CoPilot integration.
            </p>
            <p>
              Outside of my day job, I&apos;ve founded two AI-powered SaaS products: <strong className="text-gray-900">ACIS Trading</strong> for
              intelligent stock recommendations, and <strong className="text-gray-900">Underpriced AI</strong> for reseller valuations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-12 bg-orange-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-orange-500 rounded"></span>
            Projects
          </h2>

          <div className="space-y-6">
            {/* Proofpoint */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:border-orange-200 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Proofpoint</h3>
                    <p className="text-gray-500 text-sm">Sr. System Admin - Digital Experience & Enablement</p>
                  </div>
                </div>
                <a
                  href="https://proofpoint.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Leading enterprise technology initiatives at a global cybersecurity company.
                Managing the Atlassian ecosystem (Jira, Confluence) and spearheading AI adoption
                programs including ChatGPT Enterprise and Microsoft CoPilot.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Atlassian</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Enterprise AI</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">ChatGPT</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">CoPilot</span>
              </div>
            </div>

            {/* ACIS Trading */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:border-orange-200 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">ACIS Trading</h3>
                    <p className="text-gray-500 text-sm">Founder</p>
                  </div>
                </div>
                <a
                  href="https://acis-trading.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                AI-powered stock-picking platform that analyzes 3,000+ stocks daily using machine learning.
                Delivers personalized investment recommendations with specific buy signals.
                4 subscription tiers with REST API access for developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Claude AI</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Machine Learning</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Python</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">REST API</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">SaaS</span>
              </div>
            </div>

            {/* Underpriced AI */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:border-orange-200 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Underpriced AI</h3>
                    <p className="text-gray-500 text-sm">Founder</p>
                  </div>
                </div>
                <a
                  href="https://underpricedai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                AI-powered pricing tool for resellers. Snap photos of items, get instant valuations based on
                market data, and generate optimized eBay listings with one click.
                Available on web and iOS App Store.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Claude AI</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Next.js</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">iOS</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">eBay API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-orange-500 rounded"></span>
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50/50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">AI & Machine Learning</h3>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li>Prompt Engineering & AI Agents</li>
                <li>Claude API / Anthropic</li>
                <li>ChatGPT / OpenAI</li>
                <li>ML Model Development</li>
              </ul>
            </div>

            <div className="bg-orange-50/50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Development</h3>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li>TypeScript / JavaScript</li>
                <li>Python</li>
                <li>Next.js / React</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="bg-orange-50/50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Cloud className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Cloud & Infrastructure</h3>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li>AWS (S3, SES, Lambda)</li>
                <li>Vercel</li>
                <li>PostgreSQL / Neon</li>
                <li>Stripe Payments</li>
              </ul>
            </div>

            <div className="bg-orange-50/50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Server className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Enterprise Systems</h3>
              </div>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li>Atlassian (Jira, Confluence)</li>
                <li>Microsoft 365 / CoPilot</li>
                <li>System Administration</li>
                <li>Enterprise AI Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 bg-orange-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Interested in collaborating or just want to say hello? Feel free to reach out.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:frank@frankkratzer.com"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/frankkratzer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/frankkratzer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-orange-100 bg-white">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Frank Kratzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
