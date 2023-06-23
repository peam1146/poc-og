import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

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
                backgroundImage: 'url(http://localhost:3000/template1.png)',
                width: '975px',
                height: '975px',
            }}>
                <img width={975} height={975} src="http://localhost:3000/template1.png" alt="template1" />
                {/* <div style={{ position: 'absolute', fontSize: '50px', zIndex: 100, color: 'red' }}>PROFIT</div> */}
                <div style={{ position: 'absolute', fontSize: '50px', zIndex: 100, color: 'blue' }}>{text}</div>
            </div>
        ),
        {
            width: 975,
            height: 975,
        }
    )
}
