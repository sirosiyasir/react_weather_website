import React from "react"

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  const copyrightYear = "Copyright " + year + " by Yasir Çeşmeci"
  return (
    <footer>
      <p>{copyrightYear}</p>
    </footer>
  )
}
export default Footer
