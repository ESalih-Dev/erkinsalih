const robotText = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: http://kin.codes/sitemap.xml
`

export const loader = async () =>
  new Response(robotText, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  })
