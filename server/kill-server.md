# # shutdown local server

[stack overflow](https://stackoverflow.com/questions/12397175/how-do-i-close-an-open-port-from-the-terminal-on-the-mac)

```shell
sudo lsof -i :7777
```

http://localhost:7777을 끄고자 하면 :7777을 입력한다.

터미널창에서 PID를 확인

```shell
sudo kill -9 PID
```

PID를 입력하여 서버를 kill한다.