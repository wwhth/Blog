import React, { memo } from "react";
import type { FC, ReactNode } from "react";
interface IProps {
  children?: ReactNode;
}
const Introduce: FC<IProps> = memo(() => {
  return (
    <div>
      <section
        id="introduce"
        className="w-full flex md:items-center py-8 section-container min-h-screen relative mb-24"
      >
        introduce
      </section>
    </div>
  );
});

export default Introduce;
