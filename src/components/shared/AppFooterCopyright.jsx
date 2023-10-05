function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        © {new Date().getFullYear()}
        <a
          href="https://github.com/eden-pearson/personal-portfolio"
          target="__blank"
          className=" dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Eden Pearson Portfolio{' '}
        </a>
        <div className="mt-4 text-gray-400">
          Thanks
          <a
            href="https://stoman.me"
            target="__blank"
            className="text-gray-400 dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
          >
            Stoman{' '}
          </a>
          for the open-source
          <a
            href="https://github.com/realstoman/react-tailwindcss-portfolio"
            target="__blank"
            className="text-gray-400 dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
          >
            template
          </a>
          !
        </div>
      </div>
    </div>
  )
}

export default AppFooterCopyright
