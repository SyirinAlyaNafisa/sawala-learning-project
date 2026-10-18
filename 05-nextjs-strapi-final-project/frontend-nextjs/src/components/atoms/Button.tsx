
"use client";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

export default function Button({
  children,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className="reusable-button"
      type={type}
      onClick={() => {
        document.getElementById("articles")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {children}
    </button>
  );
}
