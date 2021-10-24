# Mock Jira Developer Tool

# Install and Use：
```
npm i my-jira-dev-tool
```

```
import { loadDevTools } from "jira-dev-tool";

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
```

# 两大功能介绍

### 1. Distributed back-end service
Two major problems in the back-end services of traditional teaching projects:
1. The service is fragile, the number of requests is limited, and it is unstable. If the students are down, they will not be able to use it.
2. Students have limited control over the back-end database, for example, they cannot easily reset the database

This developer tool uses [MSW](https://github.com/mswjs/msw) 以 [Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API) as The principle realizes the "distributed backend"

which is:

1. All requests are proxied by Service Worker
[![rU5enx.png](https://s3.ax1x.com/2020/12/20/rU5enx.png)](https://imgchr.com/i/rU5enx)
2. After the back-end logic is processed, use localStorage as the database to add, delete, modify, and check operations
[![rU558J.png](https://s3.ax1x.com/2020/12/20/rU558J.png)](https://imgchr.com/i/rU558J)

In this way, an independent back-end service and database are installed on each student’s browser, and it is no longer affected by any centralized service.
Click "Empty Database" to reset the back-end service
[![rUIdqx.png](https://s3.ax1x.com/2020/12/20/rUIdqx.png)](https://imgchr.com/i/rUIdqx)

### 2. Precise control of HTTP requests
The robustness of the project has been ignored by many teaching projects, and as a best practice project, robustness is a point of focus

This developer tool can accurately control the time, failure probability, and failure rules of HTTP requests
[![rUHjc4.png](https://s3.ax1x.com/2020/12/20/rUHjc4.png)](https://imgchr.com/i/rUHjc4)






