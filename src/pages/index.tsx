import {
  parseFormattedText,
  replacePlaceholders,
} from "../../utils/dictionaryParser";

export default function Home() {
  const sampleText =
    "Welcome to our <b>amazing</b> Sitecore Dictionary Parser!\nThis tool helps you parse <b>bold tags</b> and replace placeholders seamlessly.";

  const emailTemplate =
    "Dear {customerName},\n\nThank you for your <b>recent purchase</b>!\n\nYour order #{orderNumber} contains:\n- {itemCount} items\n- Total: <b>${total}</b>\n\nWe appreciate your business!";

  const simpleTemplate = "Hello {name}! You have {count} unread messages.";

  const replacements = {
    name: "John",
    count: "5",
  };

  const complexReplacements = {
    customerName: "Alice Johnson",
    orderNumber: "ORD-2024-001",
    itemCount: "3",
    total: "129.99",
  };

  const processedSimple = replacePlaceholders(simpleTemplate, replacements);
  const processedEmail = replacePlaceholders(
    emailTemplate,
    complexReplacements
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🔧 Sitecore Dictionary Parser
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A powerful TypeScript/React library for parsing Sitecore dictionary
            text with bold tags and placeholder replacement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 mb-12">
          {/* Basic Text Parsing */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              ✨ Basic Text Parsing with Bold Tags
            </h2>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Input:
              </h3>
              <code className="text-sm text-gray-600 dark:text-gray-400 block">
                {`"${sampleText}"`}
              </code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Output:
              </h3>
              <div className="text-gray-800 dark:text-gray-200">
                {parseFormattedText(sampleText)}
              </div>
            </div>

            <details className="mt-4">
              <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                📝 View code
              </summary>
              <pre className="mt-2 bg-gray-100 dark:bg-gray-900 p-3 rounded text-xs overflow-x-auto">
                {`parseFormattedText("${sampleText}")`}
              </pre>
            </details>
          </section>

          {/* Simple Placeholder Replacement */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              🔄 Simple Placeholder Replacement
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Original:
                </h3>
                <code className="text-sm text-gray-600 dark:text-gray-400">
                  {simpleTemplate}
                </code>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Processed:
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  {processedSimple}
                </p>
              </div>
            </div>

            <details className="mt-4">
              <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                📝 View code
              </summary>
              <pre className="mt-2 bg-gray-100 dark:bg-gray-900 p-3 rounded text-xs overflow-x-auto">
                {`replacePlaceholders("${simpleTemplate}", ${JSON.stringify(
                  replacements,
                  null,
                  2
                )})`}
              </pre>
            </details>
          </section>

          {/* Complex Email Template */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              📧 Complex Email Template Example
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Template:
                </h3>
                <pre className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                  {emailTemplate}
                </pre>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Final Result:
                </h3>
                <div className="text-gray-800 dark:text-gray-200">
                  {parseFormattedText(processedEmail)}
                </div>
              </div>
            </div>
          </section>

          {/* Tag Comparison */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              🏷️ Tag Wrapper Options
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Using &lt;p&gt; tags (default):
                </h3>
                <div className="text-gray-800 dark:text-gray-200">
                  {parseFormattedText(
                    "Line 1 with <b>bold</b>\nLine 2 with <b>more bold</b>"
                  )}
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Using &lt;span&gt; tags:
                </h3>
                <div className="text-gray-800 dark:text-gray-200">
                  {parseFormattedText(
                    "Line 1 with <b>bold</b>\nLine 2 with <b>more bold</b>",
                    "span"
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Perfect for Sitecore dictionary entries, email templates, and
            dynamic content! 🚀
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Built with Next.js 14, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
