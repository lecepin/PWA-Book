const bc1 = new BroadcastChannel("c1");
bc1.postMessage("这是从 sw.js 中发送的广播消息");