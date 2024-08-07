import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const Contact: FC<IProps> = memo(() => {
    return <div>Contact</div>
})

export default Contact
