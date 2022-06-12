import { Fragment, ReactNode } from "react";
import { MdClose } from "react-icons/md";

import {
  Dialog as HeadlessUiDialog,
  Transition,
  TransitionEvents,
} from "@headlessui/react";

import { Button } from "@/components/button";

export type DialogProps = TransitionEvents & {
  children: ReactNode;
  onClose: (value: boolean) => void;
  open: boolean;
  title?: string;
};

export const Dialog = ({
  afterEnter,
  afterLeave,
  beforeEnter,
  beforeLeave,
  children,
  onClose,
  open,
  title,
}: DialogProps) => (
  <Transition
    afterEnter={afterEnter}
    afterLeave={afterLeave}
    beforeEnter={beforeEnter}
    beforeLeave={beforeLeave}
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
    show={open}
  >
    <HeadlessUiDialog className="relative z-10" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur backdrop-saturate-150" />
      </Transition.Child>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex h-full max-h-screen items-start justify-center p-6 text-center md:p-[10vh]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessUiDialog.Panel className="flex max-h-full w-full max-w-lg transform flex-col overflow-hidden rounded-2xl bg-secondary-900 text-left text-white shadow-xl transition-all ">
              <HeadlessUiDialog.Title
                as="h3"
                className="flex items-center justify-between p-4 pl-6 text-lg font-medium"
              >
                {title}
                <Button
                  onClick={() => onClose(false)}
                  startIcon={<MdClose className="h-5 w-5" />}
                />
              </HeadlessUiDialog.Title>
              {children}
            </HeadlessUiDialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </HeadlessUiDialog>
  </Transition>
);
