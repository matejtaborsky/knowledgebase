import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="overflow-hidden bg-zinc-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">

            <div className="relative">
              <p className="inline text-zinc-100 font-display text-5xl tracking-tight text-transparent">
                Transform Your Reality.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-zinc-400">
                Whether you’re a curator, exhibitor, or creator, our tools empower you to bring visions to life in stunning XR. Let’s innovate together and expand the limits of mixed reality.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/">Get started</Button>
                <Button href="https://xrtrip.app" variant="secondary" target="_blank">
                  Visit project site
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">


          </div>
        </div>
      </div>
    </div>
  )
}
