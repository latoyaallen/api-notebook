function WhyNextJs() {
  return <h1>Why Next.js ?</h1>
}

export default WhyNextJs;

/*

Why Next.js?
 Use Inspect Element to view the page source of the dummy page.  We can see we don't just have an empty skeleton. Instead, we see the page content as HTML: <h1>Why Next.js ?</h1> .  We would not see in a standard react application. React applications load the entire app on the client. Next.js prerenders the page on the server.

Benefits to prerendering on server:
 greater performance
 better SEO; search engines see what our users see on inspect element
 no flickering on page while we're waiting for it
See more here:
 https://nextjs.org/learn/basics/data-fetching/pre-rendering
 https://www.geeksforgeeks.org/different-forms-of-pre-rendering-in-nextjs/

 */
