"use client";

import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <div className="grid h-screen place-content-center bg-neutral-950 text-neutral-100">
        <button
          onClick={() => setOpen(true)}
          className="rounded bg-orange-700 px-4 py-2 font-semibold transition-colors hover:bg-orange-600"
        >
          Open Drawer
        </button>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-4xl font-bold text-neutral-200">
              Drag the handle at the top of this modal downwards 100px to close
              it
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
              nulla aliquid iure optio quaerat deserunt, molestias quasi facere
              aut quidem reprehenderit maiores.
            </p>
            <p>
              Laudantium corrupti neque rerum labore tempore sapiente. Quos,
              nobis dolores. Esse fuga, cupiditate rerum soluta magni numquam
              nemo aliquid voluptate similique deserunt!
            </p>
            <p>
              Rerum inventore provident laboriosam quo facilis nisi voluptatem
              quam maxime pariatur. Velit reiciendis quasi sit magni numquam
              quos itaque ratione, fugit adipisci atque est, tenetur officiis
              explicabo id molestiae aperiam? Expedita quidem inventore magni?
              Doloremque architecto mollitia, dicta, fugit minima velit
              explicabo sapiente beatae fugiat accusamus voluptatum, error
              voluptatem ab asperiores quo modi possimus.
            </p>
            <p>
              Sit laborum molestias ex quisquam molestiae cum fugiat
              praesentium! Consequatur excepturi quod nemo harum laudantium
              accusantium nisi odio?
            </p>
            <p>
              Deleniti, animi maiores officiis quos eaque neque voluptas omnis
              quia error a dolores, pariatur ad obcaecati, vitae nisi
              perspiciatis fugiat sapiente accusantium. Magnam, a nihil soluta
              eos vero illo ab sequi, dolores culpa, quia hic?
            </p>
            <p>
              Eos in saepe dignissimos tempore. Laudantium cumque eius, et
              distinctio illum magnam molestiae doloribus. Fugiat voluptatum
              necessitatibus vero eligendi quae, similique non debitis qui
              veniam praesentium rerum labore libero architecto tempore nesciunt
              est atque animi voluptatibus. Aliquam repellendus provident
              tempora sequi officia sint voluptates eaque minima suscipit, cum
              maiores quos possimus. Vero ex porro asperiores voluptas
              voluptatibus?
            </p>
            <p>
              Debitis eos aut ullam odit fuga. Numquam deleniti libero quas
              sunt? Exercitationem earum odio aliquam necessitatibus est
              accusamus consequuntur nisi natus dolore libero voluptatibus odit
              doloribus laudantium iure, dicta placeat molestias porro quasi
              amet? Sint, reiciendis tenetur distinctio eaque delectus, maiores,
              nihil voluptas dolorem necessitatibus consequatur aliquid?
            </p>
            <p>
              Sunt ex, cum culpa vel odio dicta expedita omnis amet debitis
              inventore necessitatibus quaerat est molestias delectus. Dolorem,
              eius? Quae, itaque ipsa incidunt nobis repellendus, sunt dolorum
              aliquam ad culpa repudiandae impedit omnis, expedita illum
              voluptas delectus similique ducimus saepe pariatur. Molestias
              similique quam dolore provident doloremque maiores autem ab
              blanditiis voluptatum dignissimos culpa sed nesciunt laboriosam,
              in dicta consectetur.
            </p>
            <p>
              Voluptates ea, aspernatur possimus, iusto temporibus non
              laudantium neque molestias rem tempore eligendi earum nisi dolorum
              asperiores at rerum!
            </p>
            <p>
              Eaque totam error quia, ut eius perspiciatis unde velit temporibus
              mollitia. Aperiam ad tempora aliquam est molestias commodi
              cupiditate quos impedit nostrum accusantium quo fugit eveniet
              temporibus quam cumque autem porro, id ut debitis itaque et nemo
              exercitationem voluptatibus? Aspernatur corrupti quas iusto
              dolores nemo pariatur debitis quae dolorem! Nemo, eius? Dolorem
              quam nemo magnam ratione deserunt aperiam. Voluptatum ipsa,
              molestias aspernatur quas distinctio numquam qui laboriosam id ab
              totam commodi laborum tempora error natus vitae eligendi
              reiciendis maiores ex illo? Tempore at animi earum vitae enim
              sunt, dignissimos, mollitia corrupti officia obcaecati error iure
              vero repudiandae nihil magni molestias quibusdam dolorem aperiam
              modi. Harum, fugit.
            </p>
          </div>
        </DragCloseDrawer>
      </div>
    </main>
  );
}

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const controls = useDragControls();
  const y = useMotionValue(0);

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, 500],
    });
    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          ref={scope}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            style={{ y }}
            transition={{
              ease: "easeInOut",
            }}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-3xl bg-neutral-900"
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4 ">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className=" h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              />
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12 ">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
