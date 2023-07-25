// 创建WebSocket对象，指定WSS协议的URL
const socket = new WebSocket('wss://gmve-qa2.gamematrix.qq.com/inst/conn');

// 监听连接事件
socket.addEventListener('open', (event) => {
  console.log('WebSocket连接已建立');
  
  // 发送消息到后端服务器
  socket.send('Hello, backend server!');
});

// 监听接收消息事件
socket.addEventListener('message', (event) => {
  console.log('收到消息：', event.data);
  
  // 关闭WebSocket连接
  socket.close();
});

// 监听关闭连接事件
socket.addEventListener('close', (event) => {
  console.log('WebSocket连接已关闭');
});

// 监听错误事件
socket.addEventListener('error', (event) => {
  console.error('WebSocket连接发生错误：', event);
});