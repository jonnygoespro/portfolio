This is the logbook for the course web performance operations in my master study program MultiMediaTechnology. 

This project is an old portfolio website of mine. It was programmed over a year ago with Next.js and is deployed with Dokku.

# Assignment 3

## Initial Measurement Using WebPageTest

The results from WebPageTest were worse than I anticipated. I can’t recall all the specific steps I took during development, but a few findings were quite unexpected. The most alarming result is the Largest Contentful Paint (LCP), which came in at 6.7 seconds. For a static site, this seems excessively high. It’s possible that the animations I implemented are contributing to this, so I plan to experiment with removing them to improve initial load times.

Additionally, I’m loading a significant amount of data (such as images and fonts) before the page renders, which is clearly slowing down performance. This is an area that definitely requires further optimization.

I wasn’t too surprised to see that I didn’t pass all the accessibility tests. I had intentionally overlooked some of those aspects in order to speed up the development process, but I neglected to revisit them later.

Another unexpected finding was the main thread being blocked for 212 ms. This could also be linked to the animation library I used, and it’s something I need to investigate further.

## Measurement with Apache Bench

### Results

The results can be found [here](/measurements/assignment_3_ab_desktop.md).

### Interpretation

My server performed well under moderate load with 44.25 requests per second and an average response time of 226 ms per request. The processing time (43 ms) and Time to First Byte (TTFB) are quite fast, indicating efficient server-side performance. While most requests were served quickly, a few outliers (up to 675 ms) indicate occasional slowdowns, which could be investigated further to improve consistency. Overall, the server handles concurrency effectively with good throughput.

## Measurement with TTFB

### Results

The results can be found [here](/measurements/assignment_3_ttfb_desktop.md).

### Interpretation

The total TTFB was 144.54 ms, with individual components showing quick response times: 28.10 ms for DNS lookup, 26.50 ms for TCP connection, and 23.86 ms for the TLS handshake. The HTTP GET request was effectively instantaneous at 0.001 ms, while the server responded promptly with the first byte of data in 66.08 ms. Overall, these results suggest that the website is well-optimized, providing users with a fast and efficient loading time and with minimal latency.

## Comparison to Results on Mobile

The results for mobile can be found [here](/measurements/assignment_3_ab_mobile.md) and [here](/measurements/assignment_3_ttfb_mobile.md). The performance results accessed via mobile data, showed notable changes compared to the previous tests conducted over a standard connection. Using Apache Bench, the requests per second decreased to 30.62, down from 44.25, indicating a reduction in throughput on mobile. The average time per request increased significantly to 326.62 ms from 225.99 ms, reflecting higher latency likely due to the mobile network. Connection times also revealed a more extended mean connection time of 210 ms, up from 119 ms, with a total time of 291 ms compared to 162 ms previously. In terms of TTFB, the total time rose to 309.70 ms, with DNS lookup times decreasing to 10.60 ms, but TCP connection and TLS handshake times increased considerably, indicating that the mobile environment adds extra latency during the connection process. Overall the site takes longer to load, and the requests are processed more slowly, which could make the site feel less responsive for users accessing it via mobile networks.
