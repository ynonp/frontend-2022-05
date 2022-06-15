from aiohttp import web
import socketio
import asyncio

sio = socketio.AsyncServer(cors_allowed_origins='*', aync_mode='aiohttp')
app = web.Application()

sio.attach(app)

last_message_id = 0

@sio.on('message')
async def print_message(sid, message):
    global last_message_id
    last_message_id += 1
    my_message_id = last_message_id

    print("Socket ID: " , sid)
    print(message)
    await sio.emit('message', message)
    await asyncio.sleep(5)
    if my_message_id == last_message_id:
        print("Deleting ", message)
        await sio.emit('message', '')


if __name__ == '__main__':
    web.run_app(app, port=8080)

