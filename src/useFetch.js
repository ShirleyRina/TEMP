import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;

// 在这个上下文中，`fetch(url)`中的`url`应该是一个变量，表示你想要获取数据的资源的URL地址。如果你把它放在双引号中，比如`fetch("url")`，这意味着你实际上是在请求一个字面意义上叫做`url`的资源，而不是`url`变量所代表的地址。

// - **`fetch(url)`**：使用变量`url`的值作为请求地址。这意味着，如果你的`url`变量是`https://example.com/data`，那么`fetch`函数会向这个地址发送请求。

// - **`fetch("url")`**：字面上请求一个叫做`url`的资源。这在实际应用中几乎从不是你想要的，除非你恰好有一个资源路径确实是`/url`。

// 正确的用法是不加双引号，直接使用变量，这样你的代码就可以动态地根据变量`url`的值来请求不同的资源了。
