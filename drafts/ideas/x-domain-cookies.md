---
date: 2023-04-26
title: Cross-Domain Cookies
---

## Cross-Domain Cookies

In a previous role, I had a task to figure out how to share browser-based cookies between a domain and subdomain. The problem statement sounded straightforward enough and had a couple of requirements.

1. The authenticated user token is stored on the subdomain and not accessible on the main domain.
1. A small piece of user information (initials) is available on the domain and all subdomains.

Having had limited experience working with browser-based cookies, I ended up diving into Stackoverflow answers and specification documents. I quickly learned how difficult this problem is and discovered that the internet is divided on how to approach the solution.

In this post, we're going to cover what is a cookie, the history of cookies, and the approach I took to meet the goal. Along the way, we will discuss the advantages of using a third-party library for setting browser-based cookie and how to get your `localhost` to run with domain/subdomain hosts. Let's jump in.

### What is a cookie?

According to [Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie), cookies "are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user’s web browser. Cookies are placed on the device used to access a website, and more than one cookie may be placed on a user’s device during a session." Cookies are useful for storing stateful types of information such as carts, authentication status, and user preferences.

The [specifications](https://datatracker.ietf.org/doc/html/rfc6265) for a cookie include the following stucture.

    - Name
    - Value
    - Optional Attributes
        - Securit (uses https)
        - Expiry date
        - Domain
        - Lots of others

### Cookie History

My first approach was to go to Stack Overflow and search for answers on how to create a cross-domain cookie. This led to multiple questions and answers that seemed to contradict one other. In the end, I trusted the latest specification of browser cookies.

Previously, to have a cookie be available between a domain and subdomain, the `domain` key needed to be set with a leading period, such as `domain=.domain.com`. In the latest specification the leading period is not needed, such as `domain=domain.com`.

### Getting Things to Work

## Final Thoughts

As I mentioned at the top of this post, the dev communitity is divided on how to approach this solution. I leave it up to you to test any proposed solution and vet it against the security policy for your app. The solution I used here satisified the security concerns for our end users in that the authentication token could only be read on the specific subdomain and no identifiable user information (PII) was shared unsafely.

Any questions, comments or errors, please [drop me a line](mailto:me@mikedoescoding.com)!
