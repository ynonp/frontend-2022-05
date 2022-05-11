## Echo To Chat

Convert our echo server demo to a chat server. Maintain a list of all connected clients, and whenever a client sends something broadcast that message to all connected clients (sender and everyone else).
Make sure not to close the socket after one line.

## Running Extenral Programs - Part 1
Read the documentation on asyncio subprocesses:
https://docs.python.org/3/library/asyncio-subprocess.html

The command "sleep" on unix or "timeout" on windows waits n seconds. Write a python file that runs 4 "sleep 3" processes simultaneously using asyncio and see that the total wait time is just 3 seconds.

## Running External Programs - Part 2
Modify our chat app to support a special message "exec". If a message starts with the word "exec", then python should run (execute) the command that follows and send its output to all connected clients.
For example if one client will send the message:

```
exec echo hello world
```

Then python would run the command "echo hello world" and send its output (the text "hello world") to all connected clients.

