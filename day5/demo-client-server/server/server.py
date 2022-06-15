from aiohttp import web
import socketio

sio = socketio.AsyncServer(cors_allowed_origins='*', aync_mode='aiohttp')
app = web.Application()

sio.attach(app)

@sio.on('message')
async def print_message(sid, message):
    print("Socket ID: " , sid)
    print(message)
    await sio.emit('message', message, broadcast=True);

if __name__ == '__main__':
    web.run_app(app)

