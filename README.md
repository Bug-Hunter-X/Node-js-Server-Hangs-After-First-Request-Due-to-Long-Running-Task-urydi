# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js servers where a long-running asynchronous operation can cause the server to hang after processing the first request.  The example uses `setTimeout` to simulate a 5-second delay, but the problem is applicable to any long-running task.

## Problem

The provided `server.js` file includes a simple Express.js server. When a request is made to the root path, a 5-second delay is introduced.  After this initial request, subsequent requests will hang indefinitely.  This is because the server's event loop gets blocked by the long-running task. 

## Solution

The solution, in `serverSolution.js`, addresses the problem by demonstrating proper handling of the response. The key is to ensure that the response is sent even if the long-running operation takes a significant amount of time.