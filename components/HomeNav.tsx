import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const HomeNav: FC<IProps> = memo(() => {
    return <div>HomeNav</div>
})

export default HomeNav
