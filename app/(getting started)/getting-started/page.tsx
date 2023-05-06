export default async function GettingStarted() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-12 lg:py-20">
      <h1 className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl">What is Dev UI ?</h1>
      <p className="mt-6 text-base leading-loose md:text-lg">
        DevUI is an UI component library built with Tailwind CSS, designed to help developers create
        beautiful and responsive interfaces quickly and easily. With a wide range of customizable
        components, DevUI offers developers the flexibility they need to create interfaces that fit
        the unique requirements of their projects.
      </p>
      <p className="mt-6 text-base leading-loose md:text-lg">
        In addition to its powerful customization options, DevUI also provides easy integration with
        existing projects, allowing developers to get up and running in no time. With the ability to
        copy code directly to your clipboard and a commitment to staying up-to-date with the latest
        design trends and best practices, DevUI is a reliable and valuable tool for any
        developer&apos;s toolkit.
      </p>
      <p className="mt-6 text-base leading-loose md:text-lg">
        Best of all, it&apos;s free to use, meaning that you can create websites faster for no
        additional cost. With DevUI, developers can boost their productivity and create stunning
        interfaces with ease. Whether you&apos;re building a new app from scratch or working on an
        existing project, DevUI can help you save time and focus on the features that matter most.
        So why not give it a try and see how it can improve your workflow?
      </p>

      <div className="mt-10">
        <h1 className="font-heading text-3xl">How to Use ?</h1>
        <p className="mt-6 text-base leading-loose md:text-lg">
          All you need to use DevUI components is
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="ml-2 font-semibold text-blue-600 underline"
          >
            Tailwindcss.
          </a>
        </p>
      </div>
      <div className="mt-10">
        <h1 className="font-heading text-3xl">Using tailwind in a HTML page.</h1>
        <p className="mt-6 text-base leading-loose md:text-lg">
          Tailwind css can be used via a CDN, to add tailwind css to you html page, add the script
          shown below in the html head tag. Tailwind can be customized by adding the tailwind config
          in a spearate config file. To konw more about tailwind config file, visit
          <a
            href="https://tailwindcss.com/docs/installation/play-cdn"
            target="_blank"
            className="ml-2 font-semibold text-blue-600 underline"
          >
            Tailwindcss CDN.
          </a>
        </p>
      </div>
      <div className="mt-10">
        <h1 className="font-heading text-3xl">Using tailwind in a React project</h1>
        <p className="mt-6 text-base leading-loose md:text-lg">
          Tailwind CSS can be used in may ways in a react project, to know all the frameworks and
          tailwind supports and how to use them, visit
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            className="ml-2 font-semibold text-blue-600 underline"
          >
            Tailwindcss Installation.
          </a>
        </p>
      </div>
    </div>
  )
}
