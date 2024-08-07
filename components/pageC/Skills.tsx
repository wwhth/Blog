import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}
const Skills: FC<IProps> = memo(() => {
    return <div>Skills</div>
})

export default Skills
