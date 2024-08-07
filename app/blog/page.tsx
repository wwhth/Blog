import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const BlogIndex: FC<IProps> = memo(() => {
    return <div>BlogIndex</div>
})

export default BlogIndex
