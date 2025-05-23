import React, { ReactNode } from "react";

/**
 * Parses bold tags in a line of text
 * @param line - The line to parse
 * @returns Array of React elements with bold formatting
 */
const parseBoldTags = (line: string): ReactNode[] => {
  return line.split(/(<b>.*?<\/b>)/).map((part, j) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      const boldText = part.slice(3, -4);
      return <b key={j}>{boldText}</b>;
    }
    return part;
  });
};

/**
 * Parses text containing newlines and bold tags into React elements
 * @param text - The text to parse
 * @param tag - The HTML tag to wrap each line in ('p' or 'span')
 * @returns Array of React elements with proper formatting
 */
export const parseFormattedText = (
  text: string,
  tag: "p" | "span" = "p"
): ReactNode[] => {
  const Tag = tag; // Capitalize for JSX
  return text
    .split("\n")
    .map((line, i) => <Tag key={i}>{parseBoldTags(line)}</Tag>);
};

/**
 * Replaces placeholders in text with provided values
 * @param text - The text containing placeholders
 * @param replacements - Object containing placeholder keys and their replacement values
 * @returns Text with placeholders replaced
 */
export const replacePlaceholders = (
  text: string,
  replacements: Record<string, string>
): string => {
  let result = text;
  Object.entries(replacements).forEach(([key, value]) => {
    result = result.replace(`{${key}}`, value);
  });
  return result;
};
