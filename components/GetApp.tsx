'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import Button from './Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" id="getapp">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on Apple store and Play store
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Apple Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        {/* Right */}
        <motion.div
          className="flex flex-1 items-center justify-end"
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src="/phones.png" alt="phone" width={550} height={870} />
        </motion.div>
      </div>
    </section>
  );
};

export default GetApp;
