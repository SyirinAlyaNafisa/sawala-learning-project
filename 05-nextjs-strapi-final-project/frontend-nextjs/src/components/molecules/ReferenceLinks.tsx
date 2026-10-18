
type ReferenceLinksProps = {
  references: string;
};

export default function ReferenceLinks({
  references,
}: ReferenceLinksProps) {
  const urlPattern = /(https?:\/\/[^\s)]+)/g;

  const lines = references
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <ul className="reference-list">
      {lines.map((line, index) => {
        const parts = line.split(urlPattern);

        return (
          <li key={`${index}-${line}`}>
            {parts.map((part, partIndex) => {
              if (/^https?:\/\//.test(part)) {
                const url = part.replace(/[.,;]+$/, "");
                const trailing = part.slice(url.length);

                return (
                  <span key={partIndex}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url}
                    </a>
                    {trailing}
                  </span>
                );
              }

              return <span key={partIndex}>{part}</span>;
            })}
          </li>
        );
      })}
    </ul>
  );
}
