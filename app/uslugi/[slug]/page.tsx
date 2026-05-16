import { getServiceBySlug, allServiceSlugs } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceClient from "./ServiceClient";

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceClient service={service} />;
}
