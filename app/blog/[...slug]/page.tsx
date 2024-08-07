import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const BlogIds: FC<IProps> = memo(() => {
    return <div>BlogIds</div>
})

export default BlogIds
