---
date: DATE
title: Cross-Domain Cookies
---

## Cross-Domain Cookies

Recently, I had a task at work to figure out how to share client-based cookies between a domain and subdomain. The goal was to ensure that an authenticated user token was stored on the subdomain and not accessible on the main domain. At the same time, a small piece of user information (initials) could be available on the domain and all subdomains.

### What is a cookie?

According to [Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie), cookies "are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user’s web browser. Cookies are placed on the device used to access a website, and more than one cookie may be placed on a user’s device during a session." Cookies are useful for storing stateful types of information such as carts, authentication status, and user preferences.

### Cookie History

My first approach was to go to Stack Overflow and search for answers on how to create a cross-domain cookie. This led to multiple questions and answers that seemed to contradict one other. In the end, I trusted the latest specification of browser cookies. Previously, to have a cookie be available between a domain and subdomain, the `domain` key needed to be set with a leading period, such as `domain=.domain.com`. In the latest specification the leading period is not needed, such as `domain=domain.com`.

### Getting Things to Work

## Final Thoughts

Any questions, comments or errors, please [drop me a line](mailto:me@mikedoescoding.com)!
