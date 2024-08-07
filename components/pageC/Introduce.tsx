import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import Three1 from "@/components/three/First";
interface IProps {
    children?: ReactNode
}
const Introduce: FC<IProps> = memo(() => {
    return <div style={{ background: '#f5f5f5' }}>
        <section id="introduce" className='w-full flex md:items-center py-8 section-container min-h-screen relative mb-24'>
            introduce
            <Three1 />
        </section>
    </div >
})

export default Introduce
