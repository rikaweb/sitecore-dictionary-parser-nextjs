# Sitecore Dictionary Parser for Next.js

A lightweight, type-safe text parser for formatting Sitecore dictionary items in Next.js applications. Transform dictionary entries with bold tags and dynamic placeholders into beautiful, interactive React components.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)

## 🌟 Features

- **🔧 Bold Tag Parsing**: Converts `<b>text</b>` to React `<b>` elements
- **📝 Newline Support**: Handles `\n` and wraps content in `<p>` or `<span>` tags
- **🔄 Dynamic Placeholders**: Replaces `{placeholder}` with dynamic values
- **⚡ Performance**: No `dangerouslySetInnerHTML` - pure React elements
- **🎨 Customizable**: Easy to extend for `<i>`, `<u>`, markdown, or custom tags
- **🔒 Type-Safe**: Full TypeScript support with proper type definitions
- **📱 Responsive**: Works seamlessly across all device sizes

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sitecore-dictionary-parser-nextjs.git
cd sitecore-dictionary-parser-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Basic Usage

```tsx
import {
  parseFormattedText,
  replacePlaceholders,
} from "../utils/dictionaryParser";

export default function MyComponent() {
  // Parse text with bold tags and newlines
  const sampleText = "Welcome to our <b>amazing</b> app!\nEnjoy your stay.";
  const formattedElements = parseFormattedText(sampleText);

  // Replace placeholders with dynamic content
  const template = "Hello {name}! You have {count} messages.";
  const processedText = replacePlaceholders(template, {
    name: "John",
    count: "5",
  });

  return (
    <div>
      <div>{formattedElements}</div>
      <p>{processedText}</p>
    </div>
  );
}
```

## 📚 API Reference

### `parseFormattedText(text: string, tag?: 'p' | 'span'): ReactNode[]`

Parses text containing newlines and bold tags into React elements.

**Parameters:**

- `text` - The text to parse
- `tag` - HTML wrapper tag ('p' or 'span', defaults to 'p')

**Example:**

```tsx
const result = parseFormattedText("Line 1 <b>bold</b>\nLine 2", "span");
```

### `replacePlaceholders(text: string, replacements: Record<string, string>): string`

Replaces `{placeholder}` patterns with provided values.

**Parameters:**

- `text` - Text containing placeholders
- `replacements` - Object with placeholder keys and replacement values

**Example:**

```tsx
const result = replacePlaceholders("Hi {name}!", { name: "Alice" });
// Returns: "Hi Alice!"
```

## 🎯 Use Cases

### Sitecore Dictionary Items

Perfect for rendering Sitecore dictionary entries with formatting:

```tsx
const dictionaryItem =
  "Welcome to <b>{siteName}</b>!\nYour {role} dashboard awaits.";
const processed = replacePlaceholders(dictionaryItem, {
  siteName: "My Site",
  role: "administrator",
});
const elements = parseFormattedText(processed);
```

### Email Templates

Great for dynamic email content:

```tsx
const emailTemplate = `
Dear {customerName},

Thank you for your <b>recent purchase</b>!
Order: <b>#{orderNumber}</b>
Total: <b>${total}</b>
`;

const personalizedEmail = replacePlaceholders(emailTemplate, {
  customerName: "Jane Doe",
  orderNumber: "12345",
  total: "99.99",
});
```

### Multi-language Content

Ideal for internationalized applications:

```tsx
const content = {
  en: "Welcome <b>{username}</b>!\nYou have {count} notifications.",
  es: "¡Bienvenido <b>{username}</b>!\nTienes {count} notificaciones.",
};

const localizedText = replacePlaceholders(content[locale], userDetails);
```

## 🛠️ Development

### Project Structure

```
sitecore-dictionary-parser-nextjs/
├── utils/
│   └── dictionaryParser.tsx    # Core parsing functions
├── src/
│   ├── pages/
│   │   ├── index.tsx          # Demo page
│   │   └── _app.tsx           # App wrapper
│   └── styles/
│       └── globals.css        # Global styles
├── package.json
└── README.md
```

### Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Live Demo

Visit the live demo at: `http://localhost:3000` (when running locally)

The demo showcases:

- Basic text parsing with bold tags
- Placeholder replacement examples
- Complex email template processing
- Different wrapper tag options

## 🔮 Future Enhancements

- [ ] Support for `<i>`, `<u>`, `<em>` tags
- [ ] Markdown parsing integration
- [ ] Custom tag definitions
- [ ] Nested placeholder support
- [ ] HTML entity decoding
- [ ] Performance optimizations for large texts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js 14](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from various emoji sets
- Inspired by Sitecore development needs

---

**Perfect for Sitecore developers who need clean, type-safe text parsing! 🚀**
