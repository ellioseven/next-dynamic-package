import React, { Component } from "react"
import dynamic from "next/dynamic"

const Message = dynamic(() => import("./Message"))

/**
 * Component: Page.
 */
class Page extends Component {

  /**
   * Prop types.
   */
  static propTypes = {}

  /**
   * Implements render().
   */
  render () {
    return <Message />
  }

}

export default Page
