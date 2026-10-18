
import type { BlocksContent } from "@strapi/blocks-react-renderer";

const STRAPI_URL =
  process.env.STRAPI_API_URL ?? "http://localhost:1337";

export type Materi = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  week: number;
  category: string;
  learningObjectives: string;
  content: BlocksContent;
  codeExample?: string;
  references?: string;
};

export async function getMateri(): Promise<Materi[]> {
  const response = await fetch(
    `${STRAPI_URL}/api/materis?sort[0]=week:asc`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar materi dari Strapi");
  }

  const result = await response.json();

  return result.data as Materi[];
}

export async function getMateriBySlug(
  slug: string
): Promise<Materi | null> {
  const response = await fetch(
    `${STRAPI_URL}/api/materis?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil detail materi dari Strapi");
  }

  const result = await response.json();

  return (result.data?.[0] as Materi | undefined) ?? null;
}

export async function getMateriNavigation(slug: string) {
  const materiList = await getMateri();

  const currentIndex = materiList.findIndex(
    (materi) => materi.slug === slug
  );

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: materiList[currentIndex - 1] ?? null,
    next: materiList[currentIndex + 1] ?? null,
  };
}
