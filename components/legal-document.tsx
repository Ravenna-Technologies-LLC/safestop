import type { ReactNode } from "react";

export type LegalItem = {
  type: "heading" | "paragraph" | "listItem";
  text: string;
};

function linkedText(text: string): ReactNode {
  const pattern = /(yehuda@safestop\.global|https:\/\/safestop\.global)/g;
  return text.split(pattern).map((part, index) => {
    if (part === "yehuda@safestop.global") {
      return <a key={`${part}-${index}`} href="mailto:yehuda@safestop.global">{part}</a>;
    }
    if (part === "https://safestop.global") {
      return <a key={`${part}-${index}`} href="https://safestop.global">{part}</a>;
    }
    return part;
  });
}

export function LegalDocument({ items }: { items: LegalItem[] }) {
  const content: ReactNode[] = [];

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];

    if (item.type === "listItem") {
      const list: LegalItem[] = [];
      while (index < items.length && items[index].type === "listItem") {
        list.push(items[index]);
        index += 1;
      }
      index -= 1;
      content.push(
        <ul key={`list-${index}`}>
          {list.map((entry, listIndex) => <li key={`${entry.text}-${listIndex}`}>{linkedText(entry.text)}</li>)}
        </ul>,
      );
      continue;
    }

    if (item.type === "heading") {
      if (/^\d+\.\s/.test(item.text)) {
        content.push(<h2 key={`${item.text}-${index}`}>{item.text}</h2>);
      } else {
        content.push(<h3 key={`${item.text}-${index}`}>{item.text}</h3>);
      }
      continue;
    }

    content.push(<p key={`${item.text}-${index}`}>{linkedText(item.text)}</p>);
  }

  return content;
}
