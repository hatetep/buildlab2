import { getServiceBySlug, allServiceSlugs } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceClient from "./ServiceClient";

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return <ServiceClient service={service} />;
}
