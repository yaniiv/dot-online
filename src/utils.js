function isDesktop() {
  // default to desktop for built pages
  if (typeof window === "undefined") {
    return true
  }

  return window.innerWidth >= 1024
}

export default isDesktop
