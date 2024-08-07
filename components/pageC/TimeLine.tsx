import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const TimeLine: FC<IProps> = memo(() => {
    return <div>TimeLine</div>
})

export default TimeLine
