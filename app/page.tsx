import { Mail, Linkedin, Github, ExternalLink, Briefcase, Rocket, Code2, Brain, Server, Database, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Frank Kratzer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          SaaS Founder & Developer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mb-8">
          Building AI-powered products that automate decisions. By day, I lead enterprise AI initiatives at Proofpoint.
          By night, I build SaaS products that help people make smarter choices.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I&apos;m a technologist with a passion for building products that leverage AI to solve real problems.
              My work spans enterprise systems and startup ventures, always with a focus on practical AI applications.
            </p>
            <p>
              At <strong>Proofpoint</strong>, I serve as a Senior System Administrator in Digital Experience & Enablement,
              where I manage the Atlassian ecosystem and drive AI initiatives including ChatGPT and Microsoft CoPilot integration.
            </p>
            <p>
              Outside of my day job, I&apos;ve founded two AI-powered SaaS products: <strong>ACIS Trading</strong> for
              intelligent stock recommendations, and <strong>Underpriced AI</strong> for reseller valuations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>

          <div className="space-y-12">
            {/* Proofpoint */}
            <div className="border border-gray-200 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Proofpoint</h3>
                    <p className="text-gray-500">Sr. System Admin - Digital Experience & Enablement</p>
                  </div>
                </div>
                <a
                  href="https://proofpoint.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">
                Leading enterprise technology initiatives at a global cybersecurity company.
                Managing the Atlassian ecosystem (Jira, Confluence) and spearheading AI adoption
                programs including ChatGPT Enterprise and Microsoft CoPilot.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Atlassian</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Enterprise AI</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">ChatGPT</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">CoPilot</span>
              </div>
            </div>

            {/* ACIS Trading */}
            <div className="border border-gray-200 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ACIS Trading</h3>
                    <p className="text-gray-500">Founder</p>
                  </div>
                </div>
                <a
                  href="https://acis-trading.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">
                AI-powered stock-picking platform that analyzes 3,000+ stocks daily using machine learning.
                Delivers personalized investment recommendations with specific buy signals.
                4 subscription tiers with REST API access for developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Claude AI</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Machine Learning</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Python</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">REST API</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">SaaS</span>
              </div>
            </div>

            {/* Underpriced AI */}
            <div className="border border-gray-200 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Underpriced AI</h3>
                    <p className="text-gray-500">Founder</p>
                  </div>
                </div>
                <a
                  href="https://underpricedai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">
                AI-powered pricing tool for resellers. Snap photos of items, get instant valuations based on
                market data, and generate optimized eBay listings with one click.
                Available on web and iOS App Store.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Claude AI</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Next.js</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">iOS</span>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">eBay API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Prompt Engineering & AI Agents</li>
                <li>Claude API / Anthropic</li>
                <li>ChatGPT / OpenAI</li>
                <li>ML Model Development</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>TypeScript / JavaScript</li>
                <li>Python</li>
                <li>Next.js / React</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6 text-cyan-600" />
                <h3 className="text-lg font-semibold">Cloud & Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>AWS (S3, SES, Lambda)</li>
                <li>Vercel</li>
                <li>PostgreSQL / Neon</li>
                <li>Stripe Payments</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">Enterprise Systems</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
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
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Interested in collaborating or just want to say hello? Feel free to reach out.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:frank@frankkratzer.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/frankkratzer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/frankkratzer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Frank Kratzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
