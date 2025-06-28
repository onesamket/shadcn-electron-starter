import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Download, ExternalLink, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="px-4 py-2 text-sm text-white border-0 bg-gradient-to-r from-blue-600 to-purple-600">
              <Sparkles className="w-4 h-4 mr-2" />
              shadcn/ui + Electron Guide
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-transparent md:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text">
              Build Beautiful
              <br />
              Desktop Apps
            </h1>

            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 md:text-2xl dark:text-gray-300">
              Combine the power of{" "}
              <span className="font-semibold text-blue-600">Electron</span> with
              the elegance of{" "}
              <span className="font-semibold text-purple-600">shadcn/ui</span>{" "}
              to create stunning desktop applications
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <Button
              size="lg"
              className="px-8 py-6 text-lg text-white transition-all duration-300 transform rounded-full shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg transition-all duration-300 border-2 border-gray-300 rounded-full hover:border-blue-400 backdrop-blur-sm bg-white/50 hover:bg-white/70"
              asChild
            >
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Components
              </a>
            </Button>
          </div>

          {/* Quick Setup */}
          <div className="pt-16">
            <div className="inline-block p-8 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Quick Start
                </span>
              </div>

              <div className="p-6 text-left bg-gray-900 rounded-lg">
                <code className="font-mono text-sm text-green-400 md:text-base">
                  <div className="text-gray-400"># Clone starter </div>
                  <div>git clone git@github.com:onesamket/shadcn-electoron-starter.git  cn-electorn</div>
                  <div className="mt-2 text-gray-400"># Change directory</div>
                  <div>cd shadcn-electorn</div>
                  <div className="mt-2 text-gray-400"># Install dependencies</div>
                  <div>bun  install</div>
             
                  <div className="mt-2 text-gray-400">🚀</div>
                  <div className="text-gray-400">#  Start devepepment server</div>

                  <div>bun  dev</div>

                  <div className="mt-2 text-gray-400"># Build for production</div>
                  <div>bun build</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
