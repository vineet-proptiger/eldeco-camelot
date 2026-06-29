export default function sitemap() {
  const base = 'http://Eldecodistrict25Sector 17, Dwarka.co.in'

  return [
    {
      url: base + '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: base + '/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
