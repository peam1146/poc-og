import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

import Img from '../../public/template1.png'

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    const { searchParams } = req.nextUrl
    const text = searchParams.get('text')
    return new ImageResponse(
        (
            <div style={{
                display: 'flex',
                position: 'relative',
                width: '975px',
                height: '975px',
            }}>
                <img width={975} height={975} src='https://dreamy-cajeta-29c9bf.netlify.app/template1.png' alt="template0" />
                <div style={{ position: 'absolute', fontSize: '50px', zIndex: 100, color: 'blue' }}>{text}</div>
            </div>
        ),
        {
            width: 975,
            height: 975,
        }
    )
}
