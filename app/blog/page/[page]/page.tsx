import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const BlogPages: FC<IProps> = memo(() => {
    return <div>BlogPages</div>
})

export default BlogPages
