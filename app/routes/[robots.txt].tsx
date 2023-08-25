const robotText = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: http://erkinsalih.com/sitemap.xml
`

export const loader = async () =>
    new Response(robotText, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
    })
