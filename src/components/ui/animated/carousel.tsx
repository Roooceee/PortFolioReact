import {useState, useRef} from 'react';
import {CircleArrowLeft, CircleArrowRight, CircleDot} from 'lucide-react';
import {motion} from 'framer-motion';

interface Identifiable {
  id: string | number;
  name: string;
}

interface CarouselProps<T extends Identifiable> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export const Carousel = <T extends Identifiable>(props: CarouselProps<T>) => {
  const {items, renderItem} = props;

  const [currentIndex, SetCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number | null>(null);
  const carouselRef = useRef(null);
  let isDraggable = true;

  function previous() {
    SetCurrentIndex(currentIndex === items.length - 1 ? items.length : currentIndex + 1);
    setDirection(-1);
  }

  function next() {
    SetCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
    setDirection(1);
  }

  function changeCurrentIndex(pIndex: number) {
    if (pIndex <= items.length && pIndex >= 0 && pIndex !== currentIndex) {
      if (pIndex > currentIndex) {
        setDirection(-1);
      } else {
        setDirection(1);
      }
      SetCurrentIndex(pIndex);
    }
  }

  function handleDragEnd(info: {offset: {x: number; y: number}}) {
    if (!isDraggable) {
      return;
    }
    if (currentIndex < items.length - 1) {
      setDirection(-1);
      SetCurrentIndex(currentIndex + 1);
    } else if (currentIndex > 0) {
      setDirection(1);
      SetCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <>
      <div className="relative m-auto">
        <div className="max-w-[80%] margin-auto scroll-mt-60 overflow-hidden" ref={carouselRef}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{duration: 0.8}}
            drag={isDraggable ? 'x' : false}
            dragConstraints={{left: 0, right: 0}}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              handleDragEnd(info);
            }}>
            {renderItem(items[currentIndex])}
          </motion.div>

          <div className="flex flex-row-reverse gap-1.5 w-fit margin-auto pt-5 text-blue-primary">
            {items.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className={`${index === currentIndex && 'text-purple-primary'} ${index !== currentIndex && 'hover:text-blue-secondary'}`}
                  title={item.name}
                  aria-label={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    changeCurrentIndex(index);
                  }}>
                  <CircleDot />
                </a>
              );
            })}
          </div>
          <div className="text-blue-primary hidden lg:inline">
            {currentIndex < items.length - 1 && (
              <a
                className="absolute top-[3rem] left-0"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                title={'Aller vers : ' + items[currentIndex + 1].name}
                aria-label={'Aller vers : ' + items[currentIndex + 1].name}>
                <CircleArrowLeft size={48} />
              </a>
            )}
            {currentIndex > 0 && (
              <a
                className="absolute top-[3rem] right-0"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                title={'Aller vers : ' + items[currentIndex - 1].name}
                aria-label={'Aller vers : ' + items[currentIndex - 1].name}>
                <CircleArrowRight size={48} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
