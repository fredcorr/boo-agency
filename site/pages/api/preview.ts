import type { NextApiRequest, NextApiResponse } from 'next'

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const slug = `/${(req.query?.slug as string[])}` || '/'
  res.setPreviewData({})
  res.writeHead(307, { Location: slug })
  res.end()
}
