import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const Project: FC<IProps> = memo(() => {
    return <div>Project</div>
})

export default Project
