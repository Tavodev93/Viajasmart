import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viajasmart.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/aviso-afiliados`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cartagena/tours`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cartagena/tours/islas-del-rosario`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cartagena/precio-taxi-aeropuerto`,
      lastModified: new Date(),
    },
  ];
}